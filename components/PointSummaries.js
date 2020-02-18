// @flow

import React from 'react'
import type { TrackId } from '../logic/tracks'
import { pointsToLevels, pointsTotal, maxPoints } from '../logic/milestones'
import type { MilestoneMap } from '../logic/milestones'

type Props = {
  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],
  detailed: boolean,
}

type State = {
  showDescriptions: boolean,
}

class PointSummaries extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {showDescriptions: false};
  }

  toggleDescriptions = () => {
    this.setState({showDescriptions: !this.state.showDescriptions});
  }

  render() {
    const { active, inactive } = pointsTotal(this.props.milestoneByTrack, this.props.coreTechTracks)

    let currentLevel, nextLevel

    let pointsForCurrentLevel = active
    while (!(currentLevel = pointsToLevels[pointsForCurrentLevel])) {
      pointsForCurrentLevel--
    }

    let pointsToNextLevel = 1
    while (!(nextLevel = pointsToLevels[active + pointsToNextLevel])) {
      pointsToNextLevel++
      if (pointsToNextLevel > maxPoints) {
        pointsToNextLevel = 'N/A'
        break
      }
    }

    const blocks = [
      {
        label: 'Current milestone',
        value: currentLevel
      },
      {
        label: 'Total points',
        value: active
      },
      {
        label: 'Points to next milestone',
        value: pointsToNextLevel
      },
    ]
    if (this.props.detailed) {
      blocks.push({
        label: 'Inactive points',
        value: inactive
      })
    }

    let descriptions;
    if (this.state.showDescriptions) {
      descriptions = (
        <React.Fragment>
          <p><strong>Milestone 6</strong>: Industry & company innovator - strategic, creative thinker & influencer, inspires success</p>
          <p><strong>Milestone 5</strong>: Company leader - strategic thinker, capable of setting direction and fostering growth in colleagues</p>
          <p><strong>Milestone 4</strong>: Change Driver - Able to identify and solve most issues and problems. Uses skills to set & drive team or company objectives</p>
          <p><strong>Milestone 3</strong>: Change Supporter - Understands the business, identifies issues and prioritises independently to add value & supports others</p>
          <p><strong>Milestone 2</strong>: Self-starter - Needs limited management to add meaningfully to the business</p>
          <p><strong>Milestone 1</strong>: Contributor - Requires management support to set objectives and deliverables</p>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <style jsx>{`
          table {
            border-spacing: 3px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .point-summary-label {
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            width: 120px;
          }
          .point-summary-value {
            width: 120px;
            background: #eee;
            font-size: 24px;
            font-weight: bold;
            line-height: 50px;
            border-radius: 2px;
            text-align: center;
          }
          .milestone-title {
            font-weight: bold;
            margin: 10px 0 25px;
          }
          .milestone-shower {
            font-size: 10px;
            font-weight: none;
            display: inline-block;
            margin-left: 10px;
            cursor: pointer;
          }
          `}</style>
        <table>
          <tbody>
            <tr>
            {blocks.map(({label}, i) => (
              <th key={i} className="point-summary-label">
                {label}
              </th>
            ))}
            </tr>
            <tr>
            {blocks.map(({value}, i) => (
              <td key={i} className="point-summary-value">
                {value}
              </td>
            ))}
            </tr>
          </tbody>
        </table>

        <div>
          <div className="milestone-title">Milestones summary <span className="milestone-shower" onClick={this.toggleDescriptions}>{this.state.showDescriptions ? '▲' : '▼'}</span></div>
          {descriptions}
        </div>
      </React.Fragment>
    )
  }
}

export default PointSummaries
