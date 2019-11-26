// @flow

import React from 'react'
import { eligibleTitles, roleTracks, MilestoneCoreTechTracks } from '../constants'
import type { MilestoneMap } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  currentRoleTrack: String,
  setRoleTrackFn: (string) => void
}

class TitleSelector extends React.Component<Props> {
  render() {
    const titles = eligibleTitles(this.props.milestoneByTrack, this.props.milestoneByTrack[MilestoneCoreTechTracks])
    const multiple = !(typeof titles === 'string' || titles instanceof String);
    return <div className="title-selector">
      <style jsx>{`
        .title-selector {
          display: flex;
          flex-wrap: wrap;
          border-spacing: 3px;
          margin-bottom: 20px;
          margin-left: -3px;
        }
        .title-item {
          margin: 3px;
        }
        .title-label {
          font-size: 12px;
          text-align: center;
          font-weight: normal;
          height: 20px;
        }
        .title-value {
          height: 40px;
          line-height: 40px;
          text-align: center;
          background: #eee;
          font-weight: bold;
          font-size: 24px;
          border-radius: 2px;
          cursor: pointer;
          padding: 0px 7px;
        }
        .title-active {
          background: #bbb;
        }
      `}</style>
      {!multiple && (
        <div className="title-item">
          <div className="title-label">
            Common
          </div>
          <div className="title-value title-active">
            {titles}
          </div>
        </div>
      )}
      {multiple && roleTracks.map((roleTrack, i) => (
        <div key={roleTrack} className="title-item">
          <div className="title-label">
            {roleTrack}
          </div>
          <div className={`title-value ${roleTrack === this.props.currentRoleTrack ? 'title-active' : ''}`}
            onClick={e => this.props.setRoleTrackFn(roleTrack)}>
            {titles[i]}
          </div>
        </div>
      ))}
    </div>
  }
}

export default TitleSelector
