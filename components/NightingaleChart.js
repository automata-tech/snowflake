// @flow

import React from 'react'
import * as d3 from 'd3'

import type { TrackId } from '../logic/tracks'
import { milestones } from '../logic/milestones'
import type { Milestone, MilestoneMap } from '../logic/milestones'
import { countingTracks, allTracksWithPoints, trackColor } from '../logic/functions'

const width = 400
const arcMilestones = milestones.slice(1) // we'll draw the '0' milestone with a circle, not an arc.

type Props = {
  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],
  focusedTrackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void,
  detailed: boolean,
}

class NightingaleChart extends React.Component<Props> {
  colorScale: any
  radiusScale: any
  arcFn: any

  constructor(props: *) {
    super(props)

    this.colorScale = d3.scaleSequential(d3.interpolateWarm)
      .domain([0, 5])

    this.radiusScale = d3.scaleBand()
      .domain(arcMilestones)
      .range([.15 * width, .45 * width])
      .paddingInner(0.1)
  }

  render() {
    const currentTrackIds = this.props.detailed
      ? allTracksWithPoints(this.props.coreTechTracks, this.props.milestoneByTrack)
      : countingTracks(this.props.coreTechTracks);

    this.arcFn = d3.arc()
      .innerRadius(milestone => this.radiusScale(milestone))
      .outerRadius(milestone => this.radiusScale(milestone) + this.radiusScale.bandwidth())
      .startAngle(- Math.PI / currentTrackIds.length)
      .endAngle(Math.PI / currentTrackIds.length)
      .padAngle(Math.PI / 200)
      .padRadius(.45 * width)
      .cornerRadius(2)

    const currentMilestoneId = this.props.milestoneByTrack[this.props.focusedTrackId].level
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0;
          }
          svg {
            width: ${width}px;
            height: ${width}px;
          }
          .track-milestone {
            fill: #eee;
            cursor: pointer;
          }
          .track-milestone-current, .track-milestone:hover {
            stroke: #000;
            stroke-width: 4px;
            stroke-linejoin: round;
          }
        `}</style>
        <svg>
          <g transform={`translate(${width/2},${width/2}) rotate(-33.75)`}>
            {currentTrackIds.map((trackId, i) => {
              const isCurrentTrack = trackId == this.props.focusedTrackId
              const color = trackColor(trackId, this.props.milestoneByTrack[trackId].level, this.props.coreTechTracks);
              return (
                <g key={trackId} transform={`rotate(${i * 360 / currentTrackIds.length})`}>
                  {arcMilestones.map((milestone) => {
                    const isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId
                    const isMet = this.props.milestoneByTrack[trackId].level >= milestone || milestone == 0
                    return (
                      <path
                          key={milestone}
                          className={'track-milestone ' + (isMet ? 'is-met ' : ' ') + (isCurrentMilestone ? 'track-milestone-current' : '')}
                          onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, milestone)}
                          d={this.arcFn(milestone)}
                          style={{fill: isMet ? color : undefined}} />
                    )
                  })}
                  <circle
                      r="8"
                      cx="0"
                      cy={this.props.detailed ? (i % 2 == 0 ? -50 : -35) : -50}
                      style={{fill: color}}
                      className={"track-milestone " + (isCurrentTrack && !currentMilestoneId ? "track-milestone-current" : "")}
                      onClick={() => this.props.handleTrackMilestoneChangeFn(trackId, 0)} />
                </g>
            )})}
          </g>
        </svg>
      </figure>
    )
  }
}

export default NightingaleChart
