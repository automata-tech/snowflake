// @flow
import * as d3 from 'd3'

import { Track, tracks } from './constants_tracks';

export type TrackId = 'FRONT_END' | 'BACK_END' | 'LINUX'  | 'SYS_PROG' | 'FIRMWARE' | 'APPLIED_ROBOTICS' | 'MFG_TOOL' | 'SW_QA' | 'DEV_OPS' |
  'CTRL_MODEL' | 'TRAJ_MODEL' |
  'IMPACT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'PROF_DEV' | 'DEV_DESIGN' | 'WELLBEING' | 'INSPIRE' |
  'MENTORSHIP' | 'EVANGELISM' | 'HIRING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'FRONT_END': Milestone,
  'BACK_END': Milestone,
  'LINUX': Milestone,
  'SYS_PROG': Milestone,
  'FIRMWARE': Milestone,
  'APPLIED_ROBOTICS': Milestone,
  'MFG_TOOL': Milestone,
  'SW_QA': Milestone,
  'DEV_OPS': Milestone,

  'CTRL_MODEL': Milestone,
  'TRAJ_MODEL': Milestone,

  'IMPACT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,

  'PROF_DEV': Milestone,
  'DEV_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'INSPIRE': Milestone,

  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'HIRING': Milestone,
  'COMMUNITY': Milestone,
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
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

const levelsToPoints = (() => {
  const obj = {};
  Object.keys(pointsToLevels).forEach(point => {
    obj[pointsToLevels[point]] = parseFloat(point)
  });
  return obj
})();

export const maxLevel = Math.max.apply(null, Object.keys(pointsToLevels).map(point => parseFloat(point)))

export { Track, tracks }

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552', '#baed91'])

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

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  let title = titles[0];
  titles.forEach((titleI) => {
    if (titleI.minPoints <= totalPoints) {
      title = titleI;
    }
  })
  return title.label
}
