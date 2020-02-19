// @flow

import { trackIds } from './tracks'
import type { TrackId, Category } from './tracks'
import { categoryIds, tracksFromCategory } from './categories'
import { doesTrackCount, doesTrackNotCount } from './functions'

// Milestones
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

type MilestoneWithNote = {|
  level: Milestone,
  notes?: string,
|}

export type MilestoneMap = {
  [TrackId]: MilestoneWithNote,
}

export const milestones = [0, 1, 2, 3, 4, 5]

export const maxCoreTechTracks = 5

const milestoneToPoints = (milestone: MilestoneWithNote): number => {
  switch (milestone.level) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

// Levels
export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '30': '2.3',
  '37': '3.1',
  '44': '3.2',
  '52': '3.3',
  '60': '4.1',
  '68': '4.2',
  '77': '4.3',
  '86': '5.1',
  '95': '5.2',
  '107': '5.3',
  '123': '6.1',
  '143': '6.2',
  '177': '6.3',
}

export const maxPoints = Math.max.apply(null, Object.keys(pointsToLevels).map(point => parseFloat(point)))

// Count points
const countPoints = (tracks: TrackId[], milestoneMap: MilestoneMap, coreTechTracks: TrackId[], counts: (TrackId, TrackId[]) => boolean): number =>
  tracks
    .map(trackId =>
      counts(trackId, coreTechTracks)
        ? milestoneToPoints(milestoneMap[trackId])
        : 0
    )
    .reduce((sum, addend) => (sum + addend), 0)

type PointSummary = {|
  active: number,
  inactive: number,
|}

export type CategoryPoints = {|
  category: Category,
  points: PointSummary,
|}

export const pointsByCategory = (milestoneMap: MilestoneMap, coreTechTracks: TrackId[]): CategoryPoints[] =>
  Array.from(categoryIds).map((category) => {
    const tracks = tracksFromCategory(category)
    return {
      category,
      points: {
        active: countPoints(tracks, milestoneMap, coreTechTracks, doesTrackCount),
        inactive: countPoints(tracks, milestoneMap, coreTechTracks, doesTrackNotCount),
      }
    }
  })

export const pointsTotal = (milestoneMap: MilestoneMap, coreTechTracks: TrackId[]): PointSummary => {
  return {
    active: countPoints(trackIds, milestoneMap, coreTechTracks, doesTrackCount),
    inactive: countPoints(trackIds, milestoneMap, coreTechTracks, doesTrackNotCount),
  }
}
