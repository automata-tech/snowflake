// @flow

import * as d3 from 'd3'
import React from 'react'

import type { TrackId, Category } from '../logic/tracks'
import { categoryColor } from '../logic/categories'
import { pointsToLevels, pointsByCategory, maxPoints } from '../logic/milestones'
import type { CategoryPoints, MilestoneMap } from '../logic/milestones'

const margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10
}
const height = 150
const width = 550

type Props = {
  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],
  detailed: boolean,
}

class LevelThermometer extends React.Component<Props> {
  pointScale: any
  topAxisFn: any
  bottomAxisFn: any
  topAxis: *
  bottomAxis: *

  constructor(props: Props) {
    super(props)

    this.pointScale = d3.scaleLinear()
      .domain([0, maxPoints])
      .rangeRound([0, width - margins.left - margins.right]);

    this.topAxisFn = d3.axisTop()
      .scale(this.pointScale)
      .tickValues(Object.keys(pointsToLevels))
      .tickFormat(points => pointsToLevels[points])

    this.bottomAxisFn = d3.axisBottom()
      .scale(this.pointScale)
      .tickValues(Object.keys(pointsToLevels))
  }

  componentDidMount() {
    d3.select(this.topAxis).call(this.topAxisFn)
      .selectAll('text')
      .attr("y", 0)
      .attr("x", -25)
      .attr("transform", "rotate(90)")
      .attr("dy", ".35em")
      .style('font-size', '12px')
      .style('text-anchor', 'start')
    d3.select(this.bottomAxis).call(this.bottomAxisFn)
      .selectAll('text')
      .attr("y", 0)
      .attr("x", 10)
      .attr("transform", "rotate(90)")
      .attr("dy", ".35em")
      .style('font-size', '12px')
      .style('text-anchor', 'start')
  }

  rightRoundedRect(x: number, y: number, width: number, height: number, radius: number) {
    return "M" + x + "," + y
         + "h" + (width - radius)
         + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius
         + "v" + (height - 2 * radius)
         + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius
         + "h" + (radius - width)
         + "z";
  }

  renderLevel(category: Category, last: boolean, points: number, cumulativePoints: number, color: string) {
    const x = this.pointScale(cumulativePoints)
    const width = this.pointScale(cumulativePoints + points) - x
    if (last) {
      return (
        <path
          key={category}
          d={this.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3)}
          style={{ fill: color }}
        />
      )
    }
    return (
      <rect
        key={category}
        x={x}
        y={0}
        width={width}
        height={height - margins.top - margins.bottom}
        style={{ fill: color, borderRight: "1px solid #000" }}
      />
    )
  }

  render() {
    let categoryPoints = pointsByCategory(this.props.milestoneByTrack, this.props.coreTechTracks)
    let lastCategoryIndex = 0
    categoryPoints.forEach((categoryPoint, i) => {
      if (categoryPoint.points.active > 0) {
        lastCategoryIndex = i
      }
    })
    if (this.props.detailed) {
      categoryPoints.forEach((categoryPoint, i) => {
        if (categoryPoint.points.inactive > 0) {
          lastCategoryIndex = i + categoryPoints.length
        }
      })
    }
    let cumulativePoints = 0
    return (
      <figure>
        <style jsx>{`
          figure {
            margin: 0 0 0 -10px;
          }
          svg {
            width: ${width}px;
            height: ${height + 10}px;
          }
        `}</style>
        <svg>
          <g transform={`translate(${margins.left},${margins.top})`}>
            {categoryPoints.map((categoryPoint, i) => {
              const points = categoryPoint.points.active
              const result = this.renderLevel(
                categoryPoint.category,
                i === lastCategoryIndex,
                points,
                cumulativePoints,
                categoryColor(categoryPoint.category, true),
              )
              cumulativePoints += points
              return result
            })}
            {this.props.detailed && categoryPoints.map((categoryPoint, i) => {
              const points = categoryPoint.points.inactive
              if (points == 0) {
                return null
              }
              const result = this.renderLevel(
                categoryPoint.category,
                i + categoryPoints.length === lastCategoryIndex,
                points,
                cumulativePoints,
                categoryColor(categoryPoint.category, false),
              )
              cumulativePoints += points
              return result
            })}
            <g ref={ref => this.topAxis = ref} className="top-axis"
                transform={`translate(0, -2)`}
                />
            <g ref={ref => this.bottomAxis = ref} className="bottom-axis"
                transform={`translate(0,${height - margins.top - margins.bottom + 1})`}
                />
          </g>
        </svg>
      </figure>
    )
  }
}

export default LevelThermometer
