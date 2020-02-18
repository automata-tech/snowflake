// @flow

import React from 'react'
import { trackIds, tracks } from '../logic/tracks'
import type { TrackId, Category } from '../logic/tracks'
import { maxCoreTechTracks } from '../logic/milestones'
import type { MilestoneMap } from '../logic/milestones'
import { isCoreTechTrack, nonCoreTechTrack, trackColor } from '../logic/functions'
import { techCategories, softCategories, tracksFromCategory } from '../logic/categories'

type Props = {
  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void,
  selectedCategory: Category,
  selectCategoryFn: (Category) => void,
  silly: boolean,
  toggleCoreTechTrackFn: (TrackId) => void,
}

class TrackSelector extends React.Component<Props> {
  renderTrack(trackId: TrackId) {
    const track = tracks[trackId];
    const color = trackColor(trackId, this.props.milestoneByTrack[trackId].level, this.props.coreTechTracks);
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
    const coreTechTrackIds = trackIds.filter(trackId => isCoreTechTrack(trackId, this.props.coreTechTracks))
    const otherTechTrackIds = trackIds.filter(trackId => nonCoreTechTrack(trackId, this.props.coreTechTracks, this.props.milestoneByTrack[trackId].level))
    const softTrackIds = trackIds.filter(trackId => softCategories.has(tracks[trackId].category))
    const categoriesOptions = Array.from(techCategories.keys()).map((category, i) => (
      <option key={i} value={category}>{category}</option>
    ))

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
          h3 {
            margin-bottom: 5px;
          }
          select {
            font-size: 100%;
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
          <select value={this.props.selectedCategory} onChange={(e) => this.props.selectCategoryFn(e.target.value)}>
            {categoriesOptions}
          </select> skills
        </h3>
        {(
          <React.Fragment>
            <div className="track-selector-break" />
            {tracksFromCategory(this.props.selectedCategory).map(trackId => (
              this.renderTrack(trackId)
            ))}
          </React.Fragment>
        )}
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
