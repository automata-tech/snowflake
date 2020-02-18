// @flow

import * as d3 from 'd3'
import { trackIds, tracks } from './tracks'
import type { TrackId, Category } from './tracks'

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

// eslint-disable-next-line no-unused-vars
export const baseCategoryColor = (category: Category): string => {
  return '#ff00ff'
}

export const categoryColor = (category: Category, counts: boolean): string =>
  d3.color(baseCategoryColor(category)).darker(counts ? 3 : 0)
