// @flow

import React from 'react'
import Head from 'next/head'
import { pathPrefix } from '../config'

import type { AppState } from '../logic/state'
import { emptyState, defaultState, migrateState } from '../logic/state'
import { trackIds } from '../logic/tracks'
import type { TrackId } from '../logic/tracks'
import type { Milestone } from '../logic/milestones'
import { coerceMilestone } from '../logic/milestones'
import { allUsedTracks } from '../logic/functions'

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'

import LZString from 'lz-string'

declare class DOMException extends Error {
  constructor(message?: string, name?: string): void;
}

const hashToState = (hash: string): ?State => {
  if (!hash) return null;
  try {
    const compressed = hash.split('#')[1]
    let result: AppState;
    try {
      result = JSON.parse(window.atob(compressed))
    } catch (e) {
      if ((e instanceof DOMException) || (e instanceof SyntaxError)) {
        result = JSON.parse(LZString.decompressFromBase64(compressed))
      } else {
        throw e;
      }
    }

    // URL OPTI
    if (result.milestoneByTrack) {
      trackIds.forEach((trackId) => {
        if (!result.milestoneByTrack[trackId]) {
          result.milestoneByTrack[trackId] = {level: 0};
        }
      });
    }
    if (result.coreTechTracks === undefined) {
      result.coreTechTracks = []
    }
    for (const prop of ['name', 'title'])
      if (result[prop] === undefined) {
        result[prop] = ''
      }
    // /URL OPTI

    migrateState(result);
    return extendState(result);
  } catch (e) {
    throw Error(`Import failed! Are you sure the URL is correct? (otherwise Snowflake might be broken, please report it) [Details: ${e.message}]`)
  }
}

const stateToText = (state: State): string => {
  // URL OPTI
  const copy: any = Object.assign({}, state)
  copy.milestoneByTrack = Object.assign({}, copy.milestoneByTrack)
  for (const prop of ['detailedView', 'silly', 'focusedTrackId', 'saving']) {
    delete copy[prop];
  }
  trackIds.forEach((trackId) => {
    const track = copy.milestoneByTrack[trackId]
    if (track.level === 0 && !track.notes) {
      delete copy.milestoneByTrack[trackId]
    }
  });
  if (copy.coreTechTracks.length === 0) {
    delete copy.coreTechTracks
  }
  for (const prop of ['name', 'title']) {
    if (copy[prop] === '') {
      delete copy[prop]
    }
  }
  // /URL OPTI

  return JSON.stringify(copy)
}

const textToHash = (text: string): string => {
  return LZString.compressToBase64(text)
}

const stateToHash = (state: State): string => {
  return textToHash(stateToText(state))
}

const extendState = (state: AppState): State => {
  return ({
    ...state,
    saving: false,
    silly: false,
    focusedTrackId: state.coreTechTracks.length > 0 ? state.coreTechTracks[0] : trackIds[0],
  }: any) // FIXME: ???
}

type Props = {|
  ssr: boolean,
|}

type State = AppState & {|
  silly: boolean,
  saving: boolean,
  focusedTrackId: TrackId,
|}

class SnowflakeApp extends React.Component<Props, State> {
  static SAVE_TIMEOUT = 1000
  saveTimeout: ?TimeoutID;
  previousState: string;

  constructor(props: Props) {
    super(props)

    if (typeof window !== 'undefined') {
      window.save_data = () => {
        console.log(stateToHash(this.state))
      }
      window.restore_data = (data: string) => {
        const state = hashToState(`#${data}`)
        if (state) {
          this.setState(state)
        }
      }
      window.decode_data = (data: string) => {
        return hashToState(`#${data}`)
      }
    }
    this.saveTimeout = null;
    this.state = extendState(emptyState())
    this.previousState = stateToText(this.state)
  }

  componentDidMount() {
    this.readHash()
    window.addEventListener('beforeunload', this.checkSaved)
    window.addEventListener('hashchange', this.hashChanged)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.checkSaved)
    window.removeEventListener('hashchange', this.hashChanged)
    this.clearSave()
  }

  componentDidUpdate() {
    const textState = stateToText(this.state)
    if (textState !== this.previousState) {
      console.debug("state changed")
      this.previousState = textState
      this.save()
    }
  }

  save() {
    const wasSaving = this.saveTimeout !== null;
    console.debug("schedule save")
    this.clearSave()
    this.saveTimeout = setTimeout(this.actualSave, SnowflakeApp.SAVE_TIMEOUT);
    if (!wasSaving) {
      console.debug("wasn't saving")
      this.setState({saving: true});
    }
  }

  clearSave() {
    if (this.saveTimeout !== null) {
      clearTimeout(this.saveTimeout);
    }
    this.saveTimeout = null;
  }

  actualSave = () => {
    console.debug("actually saved")
    this.clearSave()

    const hash = stateToHash(this.state)
    window.location.replace(`#${hash}`)

    if (window.location.hash.split('#')[1] !== hash) {
      alert(`Could not save Snowflake correctly! Do not close this tab and please contact support!`)
      window.save_data()
    }
  }

  readHash() {
    const state = hashToState(window.location.hash)
    if (state) {
      const stateText = stateToText(state)
      if (stateText !== this.previousState) {
        this.previousState = stateText
        this.setState(state)
      }
    } else {
      this.setState(extendState(defaultState()))
    }
  }

  hashChanged = () => {
    this.setState({saving: false}, () => {
      this.readHash()
    })
  }

  checkSaved = (e: any) => { // FIXME: no matching type!
    console.debug("still saving?")
    if (this.saveTimeout === null) {
      delete e.returnValue;
      return;
    }
    e.preventDefault()
    e.returnValue = "Your Snowflake hasn't been saved yet, wait a second before copying the URL and closing the tab"
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          a {
            color: #888;
            text-decoration: none;
          }

          .wordmark {
            margin: 19px auto 0;
            width: 128px;
          }
          .wordmark-silly {
            -webkit-animation: vibrate-3 0.5s linear infinite both;
            animation: vibrate-3 0.5s linear infinite both;
          }
          @-webkit-keyframes vibrate-3{0%{-webkit-transform:translate(0);transform:translate(0)}10%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}20%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}30%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}50%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}70%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}80%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}90%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes vibrate-3{0%{-webkit-transform:translate(0);transform:translate(0)}10%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}20%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}30%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}40%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}50%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}60%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}70%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}80%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}90%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}
          .wordmark-saving {
            -webkit-animation: jello-vertical 1s ease-in-out infinite both;
  	        animation: jello-vertical 1s ease-in-out infinite both;
          }
          @-webkit-keyframes jello-vertical{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes jello-vertical{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}
          .title {
            margin: 20px 0 40px;
          }
          .footer {
            padding-bottom: 20px;
          }

          .nice-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            margin-bottom: 10px;
            width: 500px;
          }
          .nice-input:hover, .nice-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          .extra-inputs {
            font-size: 10px;
            margin: 10px 0 15px;
          }
          .extra-inputs .special-button {
            display: inline-block;
            margin-left: 15px;
          }

          .d-flex {
            display: flex;
          }
          .flex-1 {
            flex: 1;
          }
          .flex-0 {
            flex: 0;
          }

          .saving-info {
            margin: 5px;
            text-align: center;
          }
        `}</style>
        <Head>
          <title>Automata Snowflake</title>
          <link rel="icon" href={`${pathPrefix}favicon.ico`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${pathPrefix}apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${pathPrefix}favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${pathPrefix}favicon-16x16.png`} />
        </Head>

        <div className={`${this.state.saving ? 'wordmark-saving' : ''} ${this.state.silly ? 'wordmark-silly' : ''} wordmark`}>
          <a href="https://automata.tech/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.47 243.81">
              <path d="M216.72,177a35.82,35.82,0,1,1,17.91,66.84H101Z" /><path d="M71.66,208A35.82,35.82,0,1,1,4.82,190.06L71.66,74.29Z" /><path d="M117.34,66.84a35.82,35.82,0,1,1,48.93-48.93l66.84,115.78Z" />
            </svg>
          </a>
          <h3 className="saving-info">{this.state.saving ? '🔄 Saving...' : '✅ Saved'}</h3>
        </div>
        <div className="title">
          <h2>Snowflake</h2>
          <p>
            Score yourself honestly based on where you are <strong>currently</strong> performing at Automata, even if you feel you are capable of performing at a higher level but don&apos;t currently have the opportunity to.
          </p>
        </div>
        <div className="d-flex">
          <div className="flex-1">
            <form>
              <input
                  type="text"
                  className="nice-input name-input"
                  value={this.state.name}
                  onChange={this.setName}
                  placeholder="Name"
                  />
              <input
                  type="text"
                  className="nice-input title-input"
                  value={this.state.title}
                  onChange={this.setTitle}
                  placeholder="Title"
                  />
              <div className="extra-inputs">
                <div className="special-button">
                  <button onClick={this.reset}>Reset</button>
                </div>

                <div className="special-button">
                  <button onClick={this.actualSave}>Save</button>
                </div>
              </div>
            </form>
            <div>
              <p>Details for each level:</p>
              <p><b>Level 5</b> <u>Company leader</u> Strategic thinker, capable of setting direction and fostering growth in colleagues - starting to influence industry best practice</p>
              <p><b>Level 4</b> <u>Change Driver</u> Able to identify and solve most issues and problems. Uses skills to set & drive team or company objectives</p>
              <p><b>Level 3</b> <u>Change Maker</u> Understands the business, identifies issues and prioritises independently to drive value and supports others</p>
              <p><b>Level 2</b> <u>Self Starter</u> Needs limited management to add meaningfully to the business</p>
              <p><b>Level 1</b> <u>Contributer</u> Requires management support to set objectives and deliverables</p>
            </div>
          </div>
          <div className="flex-0">
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={this.handleTrackMilestoneChange} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId}
            silly={this.state.silly}
          />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)}
            setSillyFn={this.setSilly}
          />
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={this.handleTrackMilestoneChange}
            handleTrackNotesChangeFn={this.handleTrackNotesChange}
            silly={this.state.silly}
          />
        <div className="d-flex footer">
          <div className="flex-1">
            Made with ❤️ by <a href="https://medium.engineering" target="_blank" rel="noopener noreferrer">Medium Eng</a>.
            Adapted with <span title="Original LB Productions">🤔</span> by <a href="https://automata.tech" target="_blank" rel="noopener noreferrer">Automata</a>.
            Learn about the <a href="https://medium.com/s/engineering-growth-framework" target="_blank" rel="noopener noreferrer">this version of our growth framework</a>
            {' '}and <a href="https://medium.engineering/engineering-growth-at-medium-4935b3234d25" target="_blank" rel="noopener noreferrer">what we do currently</a>.
            Get the <a href="https://github.com/automata-tech/snowflake" target="_blank" rel="noopener noreferrer">source code</a>.
          </div>
        </div>
      </main>
    )
  }

  handleTrackMilestoneChange = (trackId: TrackId, milestone: Milestone) => {
    const milestoneByTrack = Object.assign({}, this.state.milestoneByTrack)
    milestoneByTrack[trackId] = Object.assign({}, milestoneByTrack[trackId], {level: milestone})

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  handleTrackNotesChange = (trackId: TrackId, notes: string) => {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = Object.assign({}, milestoneByTrack[trackId], {notes})

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack = (delta: number) => {
    const ctracks = allUsedTracks(this.state.milestoneByTrack);
    let index = ctracks.indexOf(this.state.focusedTrackId)
    index = (index + delta + ctracks.length) % ctracks.length
    const focusedTrackId = ctracks[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId = (trackId: TrackId) => {
    this.setState({focusedTrackId: trackId})
  }

  shiftFocusedTrackMilestoneByDelta = (delta: number) => {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId].level
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, coerceMilestone(milestone))
  }

  setName = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value })
  }

  setTitle = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value })
  }

  setSilly = (silly: boolean) => {
    this.setState({ silly })
  }

  reset = () => {
    const sure = confirm("Are you sure you want to reset Snowflake? This cannot be undone.")
    if (sure) {
      this.setState(extendState(emptyState()));
    }
  }
}

export default SnowflakeApp
