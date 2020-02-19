// @flow

import * as d3 from 'd3'
import { trackIds, tracks } from './tracks'
import type { TrackId, Category } from './tracks'
import type { Milestone } from './milestones'

export const categoryIds: Set<Category> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const softCategories: Set<Category> = new Set(['Execution', 'Contribution to the team', 'Demonstration of culture/values'])

export const techCategories: Set<Category> = trackIds.reduce((set, trackId) => {
  const category = tracks[trackId].category;
  if (!softCategories.has(category)) {
    set.add(category);
  }
  return set
}, new Set())

export const tracksFromCategory = (category: Category): TrackId[] => trackIds.reduce((list, trackId) => {
  if (tracks[trackId].category === category) {
    list.push(trackId);
  }
  return list
}, [])

const categoryColors = {
  "Execution": "#9B9D51",
  "Contribution to the team": "#B0A230",
  "Demonstration of culture/values": "#8B8745",

  "Software": "#A069B5",
  "Robotics": "#D477A1",
  "Electronics": "#449ACB",

  "Safety and Compliance": "#F83F3F",

  "Design Engineering": "#44CBA0",
  "Manufacturing Development": "#E38F45",
  "Manufacturing Operations": "#F1C40F",
  "Quality": "#B0584F",

  "Product": "#54C557",
  "Marketing": "#B0C83F",
  "Design": "#C9CAA0",
}

export const scaleColor = (category: Category, milestone: Milestone): string =>
  d3.color(categoryColors[category]).darker(milestone == 0 ? 3.5 : (5 - milestone) * 0.25)

export const categoryColor = (category: Category, counts: boolean): string =>
  scaleColor(category, counts ? 5 : 0)
