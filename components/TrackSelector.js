// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale, isTechnicalTrack, isCoreTechTrack, techCategories, softCategories, tracksFromCategory, MilestoneCoreTechTracks, maxCoreTechTracks } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void,
  othersExpanded: boolean,
  silly: boolean,
  onToggleOthersFn: () => void,
  toggleCoreTechTrackFn: (TrackId) => void,
}

class TrackSelector extends React.Component<Props> {
  renderTrack(trackId: TrackId) {
    const track = tracks[trackId];
    const color = categoryColorScale(trackId, this.props.milestoneByTrack[MilestoneCoreTechTracks]);
    const sillyName = track.sillyName || track.displayName;
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
          {this.props.silly ? sillyName : track.displayName}
        </div>
        <div className="track-selector-value" style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': color), background: color}}>
          {this.props.milestoneByTrack[trackId].level}
        </div>
      </div>
    )
  }

  render() {
    const coreTechTrackIds = trackIds.filter(trackId => isCoreTechTrack(trackId, this.props.milestoneByTrack[MilestoneCoreTechTracks]))
    const otherTechTrackIds = trackIds.filter(trackId =>
      !isCoreTechTrack(trackId, this.props.milestoneByTrack[MilestoneCoreTechTracks]) && this.props.milestoneByTrack[trackId].level > 0
    )
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
            cursor: pointer;
          }
          h3 {
            margin-bottom: 5px;
          }
        `}</style>
        <h3>Core technical skills [{coreTechTrackIds.length}/{maxCoreTechTracks}] <small>(right-click on a skill to select/deselect it as a core skill)</small></h3>
        <div className="track-selector-break" />
        {coreTechTrackIds.map(trackId => (
          this.renderTrack(trackId)
        ))}
        <div className="track-selector-break" />
        <h3>
          Other technical skills <small>(do not count towards your milestone)</small>
        </h3>
        <div className="track-selector-break" />
        {otherTechTrackIds.map(trackId => (
          this.renderTrack(trackId)
        ))}
        <div className="track-selector-break" />
        <h3>
          Technical skills
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
