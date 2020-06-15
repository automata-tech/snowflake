// @flow

import { techCategories, scaleColor } from './categories'
import { trackIds, tracks } from './tracks'
import type { TrackId } from './tracks'
import type { MilestoneMap, Milestone } from './milestones'

export const isTechnicalTrack = (trackId: TrackId): boolean =>
  techCategories.has(tracks[trackId].category)

export const isUsedTechnicalTrack = (trackId: TrackId, milestone: Milestone): boolean =>
  isTechnicalTrack(trackId)
  && milestone > 0

export const allUsedTracks = (milestoneMap: MilestoneMap): TrackId[] =>
  trackIds.filter(trackId => !isTechnicalTrack(trackId) || isUsedTechnicalTrack(trackId, milestoneMap[trackId].level))

export const trackColor = (track: TrackId, milestone: Milestone) =>
  scaleColor(tracks[track].category, milestone)
