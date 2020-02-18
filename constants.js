// @flow
import * as d3 from 'd3'

import { tracks } from './tracks';
import type { Track, TrackId } from './tracks';

export type { Track, TrackId }
export { tracks }

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5
export type MilestoneWithNote = {
  level: Milestone,
  notes?: string,
}

export const MilestoneCoreTechTracks = 'CORE_TECH_TRACKS'
export type MilestoneMap = {
  [TrackId]: MilestoneWithNote,
  'CORE_TECH_TRACKS': TrackId[],
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const maxCoreTechTracks = 5

export const milestoneToPoints = (milestone: MilestoneWithNote): number => {
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

const levelsToPoints = Object.keys(pointsToLevels).reduce((obj, point) => {
  obj[pointsToLevels[point]] = parseFloat(point)
  return obj
}, {})

export const maxLevel = Math.max.apply(null, Object.keys(pointsToLevels).map(point => parseFloat(point)))

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const softCategories: Set<string> = new Set(['Execution', 'Contribution to the team', 'Demonstration of culture/values'])

export const techCategories: Set<string> = trackIds.reduce((set, trackId) => {
  const category = tracks[trackId].category;
  if (!softCategories.has(category)) {
    set.add(category);
  }
  return set
}, new Set())

export const tracksFromCategory = (category: string): TrackId[] => trackIds.reduce((list, trackId) => {
  if (tracks[trackId].category === category) {
    list.push(trackId);
  }
  return list
}, [])

export type categoryPoints = {categoryId: string, points: number};

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap, includeAll?: boolean = false) =>  {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    if (includeAll || doesTrackCount(trackId, milestoneMap[MilestoneCoreTechTracks])) {
      pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
    }
  })
  return Array.from(categoryIds.values()).map<categoryPoints>(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const isTechnicalTrack = (trackId: TrackId): bool =>
  techCategories.has(tracks[trackId].category)

export const isCoreTechTrack = (trackId: TrackId, coreTechTracks: TrackId[]): bool =>
  coreTechTracks.indexOf(trackId) !== -1

export const nonCoreTechTrack = (trackId: TrackId, coreTechTracks: TrackId[], milestoneMap: MilestoneMap): bool =>
  !isCoreTechTrack(trackId, coreTechTracks)
  && isTechnicalTrack(trackId)
  && milestoneMap[trackId].level > 0

export const doesTrackCount = (trackId: TrackId, coreTechTracks: TrackId[]): bool =>
  !isTechnicalTrack(trackId) || isCoreTechTrack(trackId, coreTechTracks)

export const countingTracks = (coreTechTracks: TrackId[]): TrackId[] =>
  trackIds.filter(trackId => doesTrackCount(trackId, coreTechTracks))

export const allTracksWithPoints = (coreTechTracks: TrackId[], milestoneMap: MilestoneMap): TrackId[] =>
  trackIds.filter(trackId => doesTrackCount(trackId, coreTechTracks) || nonCoreTechTrack(trackId, coreTechTracks, milestoneMap))

export const totalPointsFromMilestoneMapAll = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => doesTrackCount(trackId, milestoneMap[MilestoneCoreTechTracks]) ? milestoneToPoints(milestoneMap[trackId]) : 0)
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScaleReal = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#8A1C7C', '#D4AFB9', '#E59500', '#D1CFE2', '#840032', '#F9DC5C', '#E84855', '#24E098', '#938BA1', '#B0C6CE', '#899D78', '#F0BCD4', '#4BD15D', '#DA4167', '#1F0322', '#DD7826'])

export const categoryColorScaleDisabled = (category: string) =>
  d3.color(categoryColorScaleReal(category)).darker(2)

export const categoryColorScale = (trackId: TrackId, coreTechTracks: TrackId[]) =>
  doesTrackCount(trackId, coreTechTracks) ? categoryColorScaleReal(tracks[trackId].category) : categoryColorScaleDisabled(tracks[trackId].category)

export const titles = [
  {label: 'Engineer I', minPoints: levelsToPoints['1.1']},
  {label: 'Engineer II', minPoints: levelsToPoints['2.1']},
  {label: 'Engineer III', minPoints: levelsToPoints['3.1']},
  {
    label: {
      'Individual Contributor': 'Senior Engineer',
      'People': 'Engineering Guardian I',
    },
    minPoints: levelsToPoints['4.1'],
  },
  {
    label: {
      'Individual Contributor': 'Staff Engineer',
      'People': 'Engineering Guardian II',
    },
    minPoints: levelsToPoints['5.1'],
  },
  {
    label: {
      'Individual Contributor': 'Principal Engineer',
      'People': 'Engineering Manager',
    },
    minPoints: levelsToPoints['6.1'],
  },
]

export const roleTracks = ['People', 'Individual Contributor']

export const eligibleTitles = (milestoneMap: MilestoneMap, coreTechTracks: TrackId[]): (string[] | string) => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  let title = titles[0];
  titles.forEach((titleI) => {
    if (titleI.minPoints <= totalPoints) {
      title = titleI;
    }
  })
  return title.label
}
