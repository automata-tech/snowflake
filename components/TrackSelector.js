// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale, isTechnicalTrack, isCoreTechTrack, techCategories, softCategories, tracksFromCategory, MilestoneCoreTechTracks } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void,
  othersExpanded: boolean,
  onToggleOthersFn: () => void,
  toggleCoreTechTrackFn: (TrackId) => void,
}

class TrackSelector extends React.Component<Props> {
  renderTrack(trackId) {
    const color = categoryColorScale(trackId, this.props.milestoneByTrack[MilestoneCoreTechTracks]);
    return (
      <div key={trackId} className="track-selector-item"
        onClick={() => this.props.setFocusedTrackIdFn(trackId)} onContextMenu={(e) => {
          e.preventDefault()
          this.props.toggleCoreTechTrackFn(trackId)
        }}>
        <style jsx>{`
          .track-selector-item {
            width: 60px;
            margin: 3px;
          }
          .track-selector-label {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;

            height: 30px;
            text-align: center;
            font-size: 9px;
          }
          .track-selector-value {
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
        `}</style>
        <div className="track-selector-label">
          {tracks[trackId].displayName}
        </div>
        <div className="track-selector-value" style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': color), background: color}}>
          {this.props.milestoneByTrack[trackId].level}
        </div>
      </div>
    )
  }

  render() {
    const coreTechTrackIds = trackIds.filter(trackId => isCoreTechTrack(trackId, this.props.milestoneByTrack[MilestoneCoreTechTracks]))
    const softTrackIds = trackIds.filter(trackId => softCategories.has(tracks[trackId].category))

    return (
      <div className="track-selector">
        <style jsx>{`
          .track-selector {
            display: flex;
            flex-wrap: wrap;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-break {
            flex-basis: 100%;
          }
          .track-selector-expand {
            font-size: 10px;
            font-weight: none;
            display: inline-block;
            margin-left: 10px;
          }
          h3 {
            margin-bottom: 5px;
          }
        `}</style>
        <h3>Core technical skills</h3>
        <div className="track-selector-break" />
        {coreTechTrackIds.map(trackId => (
          this.renderTrack(trackId)
        ))}
        <div className="track-selector-break" />
        <h3>
          Other technical skills
          <span className="track-selector-expand" onClick={this.props.onToggleOthersFn}>{this.props.othersExpanded ? '▲' : '▼'}</span>
        </h3>
        {this.props.othersExpanded && Array.from(techCategories.keys()).map((category, i) => {
          const tracks = tracksFromCategory(category)
          return (
            <React.Fragment key={i}>
              <div className="track-selector-break" />
              <h3>
                {category} skills
              </h3>
              <div className="track-selector-break" />
              {tracks.map(trackId => (
                this.renderTrack(trackId)
              ))}
            </React.Fragment>
          )
        })}
        <div className="track-selector-break" />
        <h3>Automata skills</h3>
        <div className="track-selector-break" />
        {softTrackIds.map(trackId => (
          this.renderTrack(trackId)
        ))}
      </div>
    )
  }
}

export default TrackSelector
