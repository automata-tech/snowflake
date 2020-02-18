// @flow

import * as d3 from 'd3'
import { techCategories, baseCategoryColor } from './categories'
import { trackIds, tracks } from './tracks'
import type { TrackId, Category } from './tracks'
import type { MilestoneMap, Milestone } from './milestones'

export const isTechnicalTrack = (trackId: TrackId): boolean =>
  techCategories.has(tracks[trackId].category)

export const isCoreTechTrack = (trackId: TrackId, coreTechTracks: TrackId[]): boolean =>
  coreTechTracks.indexOf(trackId) !== -1

export const nonCoreTechTrack = (trackId: TrackId, coreTechTracks: TrackId[], milestone: Milestone): boolean =>
  !isCoreTechTrack(trackId, coreTechTracks)
  && isTechnicalTrack(trackId)
  && milestone > 0

export const doesTrackCount = (trackId: TrackId, coreTechTracks: TrackId[]): boolean =>
  !isTechnicalTrack(trackId) || isCoreTechTrack(trackId, coreTechTracks)

export const doesTrackNotCount = (trackId: TrackId, coreTechTracks: TrackId[]): boolean =>
  !doesTrackCount(trackId, coreTechTracks)

export const countingTracks = (coreTechTracks: TrackId[]): TrackId[] =>
  trackIds.filter(trackId => doesTrackCount(trackId, coreTechTracks))

export const allTracksWithPoints = (coreTechTracks: TrackId[], milestoneMap: MilestoneMap): TrackId[] =>
  trackIds.filter(trackId => doesTrackCount(trackId, coreTechTracks) || nonCoreTechTrack(trackId, coreTechTracks, milestoneMap[trackId].level))

export const trackColor = (track: TrackId, milestone: Milestone, coreTechTracks: TrackId[]) =>
  d3.color(baseCategoryColor(tracks[track].category)).darker(doesTrackCount(track, coreTechTracks) ? 5 - milestone : 0)
