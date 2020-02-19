// @flow

import React from 'react'
import Head from 'next/head'
import { pathPrefix } from '../config'

import type { AppState } from '../logic/state'
import { emptyState, defaultState, migrateState } from '../logic/state'
import { trackIds } from '../logic/tracks'
import type { TrackId, Category } from '../logic/tracks'
import type { Milestone } from '../logic/milestones'
import { coerceMilestone, maxCoreTechTracks } from '../logic/milestones'
import { isTechnicalTrack, allTracksWithPoints, countingTracks } from '../logic/functions'

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import LevelThermometer from '../components/LevelThermometer'
import PointSummaries from '../components/PointSummaries'

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

const stateToHash = (state: State): string => {
  // URL OPTI
  const copy: any = Object.assign({}, state)
  copy.milestoneByTrack = Object.assign({}, copy.milestoneByTrack)
  delete copy.detailedView;
  delete copy.silly;
  delete copy.focusedTrackId;
  trackIds.forEach((trackId) => {
    const track = copy.milestoneByTrack[trackId]
    if (track.level === 0 && !track.notes) {
      delete copy.milestoneByTrack[trackId]
    }
  });
  if (copy.coreTechTracks.length === 0) {
    delete copy.coreTechTracks
  }
  for (const prop of ['name', 'title'])
  if (copy[prop] === '') {
    delete copy[prop]
  }
  // /URL OPTI

  return LZString.compressToBase64(JSON.stringify(copy))
}

const extendState = (state: AppState): State => {
  return ({
    ...state,
    detailedView: false,
    silly: false,
    focusedTrackId: state.coreTechTracks.length > 0 ? state.coreTechTracks[0] : trackIds[0],
  }: any) // FIXME: ???
}

type Props = {|
  ssr: boolean,
|}

type State = AppState & {|
  detailedView: boolean,
    silly: boolean,

      focusedTrackId: TrackId,
|}

class SnowflakeApp extends React.Component<Props, State> {
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
    this.state = extendState(emptyState())
  }
  componentDidMount() {
    const state = hashToState(window.location.hash)
    if (state) {
      this.setState(state)
    } else {
      this.setState(extendState(defaultState()))
    }
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    window.location.replace(`#${hash}`)

    if (window.location.hash.split('#')[1] !== hash) {
      alert(`Could not save Snowflake correctly! Do not close this tab and please contact support!`)
      window.save_data()
    }
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
          .detailed-input {
            font-size: 10px;
            margin: 10px 0 15px;
          }
          .detailed-input label {
            padding-left: 5px;
          }
          .detailed-input .reset {
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
        `}</style>
        <Head>
          <title>Automata Snowflake</title>
          <link rel="icon" href={`${pathPrefix}favicon.ico`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${pathPrefix}apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${pathPrefix}favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${pathPrefix}favicon-16x16.png`} />
        </Head>

        <div className="wordmark">
          <a href="https://automata.tech/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.47 243.81"><title>Icon_001</title><path d="M216.72,177a35.82,35.82,0,1,1,17.91,66.84H101Z" /><path d="M71.66,208A35.82,35.82,0,1,1,4.82,190.06L71.66,74.29Z" /><path d="M117.34,66.84a35.82,35.82,0,1,1,48.93-48.93l66.84,115.78Z" /></svg>
          </a>
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
              <div className="detailed-input">
                <input
                    id="detailed-input"
                    type="checkbox"
                    checked={this.state.detailedView}
                    onChange={this.setDetailed}
                    />
                <label htmlFor="detailed-input">Detailed view</label>

                <div className="reset">
                  <button onClick={this.reset}>Reset</button>
                </div>
              </div>
            </form>
            <PointSummaries
              milestoneByTrack={this.state.milestoneByTrack}
              coreTechTracks={this.state.coreTechTracks}
              detailed={this.state.detailedView}
            />
            <LevelThermometer
              milestoneByTrack={this.state.milestoneByTrack}
              coreTechTracks={this.state.coreTechTracks}
              detailed={this.state.detailedView}
            />
          </div>
          <div className="flex-0">
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                coreTechTracks={this.state.coreTechTracks}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={this.handleTrackMilestoneChange}
                detailed={this.state.detailedView} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            coreTechTracks={this.state.coreTechTracks}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId}
            toggleCoreTechTrackFn={this.toggleCoreTechTrack}
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
            coreTechTracks={this.state.coreTechTracks}
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
    const ctracks = this.state.detailedView
      ? allTracksWithPoints(this.state.coreTechTracks, this.state.milestoneByTrack)
      : countingTracks(this.state.coreTechTracks);
    let index = ctracks.indexOf(this.state.focusedTrackId)
    index = (index + delta + ctracks.length) % ctracks.length
    const focusedTrackId = ctracks[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId = (trackId: TrackId) => {
    this.setState({focusedTrackId: trackId})
  }

  toggleCoreTechTrack = (trackId: TrackId) => {
    if (!isTechnicalTrack(trackId)) {
      return;
    }
    const coreTechTracks = this.state.coreTechTracks.slice(0)
    const trackIndex = coreTechTracks.indexOf(trackId);
    if (trackIndex === -1) {
      if (coreTechTracks.length >= maxCoreTechTracks) {
        return;
      }
      coreTechTracks.push(trackId);
    } else {
      coreTechTracks.splice(trackIndex, 1);
    }
    this.setState({coreTechTracks, focusedTrackId: trackId})
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

  setDetailed = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ detailedView: e.target.checked })
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
