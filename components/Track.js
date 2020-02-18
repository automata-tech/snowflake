// @flow

import React from 'react'

import { tracks } from '../logic/tracks'
import type { TrackId } from '../logic/tracks'
import { milestones } from '../logic/milestones'
import type { MilestoneMap, Milestone } from '../logic/milestones'
import { trackColor } from '../logic/functions'

type Props = {
  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],
  trackId: TrackId,
  silly: boolean,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
  handleTrackNotesChangeFn: (TrackId, string) => void,
}

class Track extends React.Component<Props> {
  render() {
    const track = tracks[this.props.trackId]
    const currentLevelData = this.props.milestoneByTrack[this.props.trackId];
    const currentNotes = currentLevelData.notes || "";
    const currentMilestoneId = currentLevelData.level;
    const currentMilestone = track.milestones[currentMilestoneId - 1];
    const sillyName = track.sillyName || track.displayName;

    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          ul {
            line-height: 1.5em;
          }
          .track-selector {
            margin-right: 50px;
          }
        `}</style>
        <h2>{track.category}: {this.props.silly ? sillyName : track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <div className="d-flex">
          <table className="flex-0 track-selector">
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                const color = trackColor(this.props.trackId, currentMilestoneId, this.props.coreTechTracks)
                return (
                  <tr key={milestone}>
                    <td onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                        style={{border: `4px solid ${milestone === currentMilestoneId ? '#000' : isMet ? color : '#eee'}`, background: isMet ? color : undefined}}>
                      {milestone}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {currentMilestone ? (
            <div className="flex-1">
              <h3>{currentMilestone.summary}</h3>
              <h4>Example behaviors:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              {currentMilestone.examples ? (
                <React.Fragment>
                  <h4>Example tasks:</h4>
                  <ul>
                    {currentMilestone.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </React.Fragment>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="notes">
          <p>
            <label htmlFor="track-notes">
              <strong>Supporting Comments - any examples/evidence for why you’ve self-selected this level</strong>
            </label>
          </p>
          <textarea
            id="track-notes"
            value={currentNotes}
            onChange={(e) => this.props.handleTrackNotesChangeFn(this.props.trackId, e.target.value)}
            cols={100}
            rows={12}
            />
        </div>
      </div>
    )
  }
}

export default Track
