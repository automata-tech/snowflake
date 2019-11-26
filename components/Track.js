// @flow

import { tracks, milestones, categoryColorScale, MilestoneCoreTechTracks } from '../constants'
import React from 'react'
import type { MilestoneMap, TrackId, Milestone } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
  handleTrackNotesChangeFn: (TrackId, string) => void,
}

class Track extends React.Component<Props> {
  render() {
    const track = tracks[this.props.trackId]
    const currentLevelData = this.props.milestoneByTrack[this.props.trackId];
    const currentNotes = currentLevelData.notes || "";
    const currentMilestoneId = currentLevelData.level;
    const currentMilestone = track.milestones[currentMilestoneId - 1]
    let examples;

    if (currentMilestone && currentMilestone.examples) {
      examples = (
        <React.Fragment>
          <h4>Example tasks:</h4>
          <ul>
            {currentMilestone.examples.map((example, i) => (
              <li key={i}>{example}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }

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
        `}</style>
        <h2>{track.category}: {track.displayName}</h2>
        <p className="track-description">{track.description}</p>
        <div style={{display: 'flex'}}>
          <table style={{flex: 0, marginRight: 50}}>
            <tbody>
              {milestones.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                const color = categoryColorScale(this.props.trackId, this.props.milestoneByTrack[MilestoneCoreTechTracks])
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
            <div style={{flex: 1}}>
              <h3>{currentMilestone.summary}</h3>
              <h4>Example behaviors:</h4>
              <ul>
                {currentMilestone.signals.map((signal, i) => (
                  <li key={i}>{signal}</li>
                ))}
              </ul>
              {examples}
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
