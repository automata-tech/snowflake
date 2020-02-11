// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import Wordmark from '../components/Wordmark'
import LevelThermometer from '../components/LevelThermometer'
import { eligibleTitles, trackIds, milestones, milestoneToPoints, roleTracks, isTechnicalTrack, MilestoneCoreTechTracks, maxCoreTechTracks, countingTracks } from '../constants'
import PointSummaries from '../components/PointSummaries'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import TitleSelector from '../components/TitleSelector'
import Head from 'next/head'
import { pathPrefix } from '../config.js'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  roleTrack: string,
  focusedTrackId: TrackId,
  otherTechTracksExanded: boolean,
  detailedView: boolean,
  silly: boolean,
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null;
  try {
    const result = JSON.parse(window.atob(hash.split('#')[1]));
    // Ensure a title is present
    if (!result.title && result.title !== '') {
      result.title = defaultState().title;
    }
    // Transform state to support notes for each track
    trackIds.forEach((trackId) => {
      const track = result.milestoneByTrack[trackId];
      if (track == undefined) {
        result.milestoneByTrack[trackId] = {level: 0};
      } else if (track.level === undefined) {
        result.milestoneByTrack[trackId] = {level: track};
      }
    });
    result.silly = false;
    return result;
  } catch (SyntaxError) {
    return null;
  }
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch(value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  const milestoneByTrack = {};
  trackIds.forEach((trackId) => {
    milestoneByTrack[trackId] = {level: coerceMilestone(0)};
  });
  milestoneByTrack[MilestoneCoreTechTracks] = [];

  return {
    name: '',
    title: '',
    roleTrack: '',
    milestoneByTrack,
    focusedTrackId: trackIds[0],
    otherTechTracksExanded: false,
    detailedView: false,
    silly: false,
  }
}

const defaultState = (): SnowflakeAppState => {
  const milestoneByTrack = {};
  trackIds.forEach((trackId) => {
    milestoneByTrack[trackId] = {level: coerceMilestone(Math.round(Math.random() * 4))};
  });
  milestoneByTrack[MilestoneCoreTechTracks] = trackIds.filter(isTechnicalTrack).sort(() => 0.5 - Math.random()).slice(0, maxCoreTechTracks);

  return {
    name: 'Miéville Pickleberry',
    title: 'Senior Documancer Analyst',
    roleTrack: 'Individual Contributor',
    milestoneByTrack,
    focusedTrackId: trackIds[0],
    otherTechTracksExanded: true,
    detailedView: false,
    silly: false,
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  return window.btoa(JSON.stringify(state))
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const state = hashToState(window.location.hash)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
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
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <Head>
          <title>Automata Snowflake</title>
          <link rel="icon" href={`${pathPrefix}favicon.ico`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${pathPrefix}apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${pathPrefix}favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${pathPrefix}favicon-16x16.png`} />
        </Head>

        <div style={{margin: '19px auto 0', width: 128}}>
          <a href="https://automata.tech/" target="_blank">
            <Wordmark />
          </a>
        </div>
        <div style={{margin: '20px 0 40px'}}>
          <h2>Snowflake</h2>
          <p>
            Score yourself honestly based on where you are <strong>currently</strong> performing at Automata, even if you feel you are capable of performing at a higher level but don't currently have the opportunity to.
          </p>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <form>
              <input
                  type="text"
                  className="nice-input name-input"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Name"
                  />
              <input
                  type="text"
                  className="nice-input title-input"
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value})}
                  placeholder="Title"
                  />
              <div className="detailed-input">
                <input
                    id="detailed-input"
                    type="checkbox"
                    checked={this.state.detailedView}
                    onChange={e => this.setState({detailedView: e.target.checked})}
                    />
                <label htmlFor="detailed-input">Detailed view</label>

                <div className="reset">
                  <button onClick={e => this.reset()}>Reset</button>
                </div>
              </div>
              { /*<TitleSelector
                milestoneByTrack={this.state.milestoneByTrack}
                currentRoleTrack={this.state.roleTrack}
                setRoleTrackFn={(roleTrack) => this.setRoleTrack(roleTrack)} /> */ }
            </form>
            <PointSummaries milestoneByTrack={this.state.milestoneByTrack} detailed={this.state.detailedView} />
            <LevelThermometer milestoneByTrack={this.state.milestoneByTrack} detailed={this.state.detailedView} />
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)}
                detailed={this.state.detailedView} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
            othersExpanded={this.state.otherTechTracksExanded}
            onToggleOthersFn={this.onToggleOtherTechTracks.bind(this)}
            toggleCoreTechTrackFn={this.toggleCoreTechTrack.bind(this)}
            silly={this.state.silly}
          />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)}
            setSillyFn={this.setSilly.bind(this)}
          />
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)}
            handleTrackNotesChangeFn={(track, notes) => this.handleTrackNotesChange(track, notes)}
            silly={this.state.silly}
          />
        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            Made with ❤️ by <a href="https://medium.engineering" target="_blank">Medium Eng</a>.
            Adapted with 🤔 by <a href="https://automata.tech" target="_blank">Automata</a>.
            Learn about the <a href="https://medium.com/s/engineering-growth-framework" target="_blank">this version of our growth framework</a>
            {' '}and <a href="https://medium.engineering/engineering-growth-at-medium-4935b3234d25" target="_blank">what we do currently</a>.
            Get the <a href="https://github.com/automata-tech/snowflake" target="_blank">source code</a>.
          </div>
        </div>
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId].level = milestone

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  handleTrackNotesChange(trackId: TrackId, notes: string) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId].notes = notes

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta: number) {
    const ctracks = this.state.detailedView ? trackIds : countingTracks(this.state.milestoneByTrack[MilestoneCoreTechTracks]);
    let index = ctracks.indexOf(this.state.focusedTrackId)
    index = (index + delta + ctracks.length) % ctracks.length
    const focusedTrackId = ctracks[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  onToggleOtherTechTracks() {
    this.setState({ otherTechTracksExanded: !this.state.otherTechTracksExanded })
  }

  toggleCoreTechTrack(trackId: TrackId) {
    if (!isTechnicalTrack(trackId)) {
      return;
    }
    const milestoneByTrack = this.state.milestoneByTrack
    const coreTracks = milestoneByTrack[MilestoneCoreTechTracks]
    const trackIndex = coreTracks.indexOf(trackId);
    if (trackIndex === -1) {
      if (coreTracks.length >= maxCoreTechTracks) {
        return;
      }
      coreTracks.push(trackId);
    } else {
      coreTracks.splice(trackIndex, 1);
    }
    milestoneByTrack[MilestoneCoreTechTracks] = coreTracks
    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId].level
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, coerceMilestone(milestone))
  }

  setRoleTrack(roleTrack: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack, this.state.milestoneByTrack[MilestoneCoreTechTracks])
    roleTrack = roleTracks.indexOf(roleTrack) == -1 ? roleTracks[0] : roleTrack
    this.setState({ roleTrack })
  }

  setSilly(silly: boolean) {
    this.setState({ silly })
  }

  reset() {
    const sure = confirm("Are you sure you want to reset Snowflake? This cannot be undone.")
    if (sure) {
      this.setState(emptyState());
    }
  }
}

export default SnowflakeApp
