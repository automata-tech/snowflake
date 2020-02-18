// @flow

import { isTechnicalTrack } from './functions'
import { coerceMilestone, maxCoreTechTracks } from './milestones'
import type { MilestoneMap } from './milestones'
import { tracks, trackIds } from './tracks'
import type { TrackId, Category } from './tracks'

export type AppState = {
  name: string,
  title: string,

  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],

  focusedTrackId: TrackId,
  techCategorySelected: Category,

  detailedView: boolean,
  silly: boolean,
}

export const emptyState = (): AppState => {
  const milestoneByTrack = {};
  trackIds.forEach((trackId) => {
    milestoneByTrack[trackId] = { level: coerceMilestone(0) };
  });

  const defaultTrack = trackIds[0];
  return {
    name: '',
    title: '',
    milestoneByTrack,
    coreTechTracks: [],
    focusedTrackId: defaultTrack,
    techCategorySelected: tracks[defaultTrack].category,
    detailedView: false,
    silly: false,
  }
}

export const defaultState = (): AppState => {
  const milestoneByTrack = {};
  trackIds.forEach((trackId) => {
    milestoneByTrack[trackId] = { level: coerceMilestone(Math.floor(Math.pow(Math.random(), 8) * 4)) };
  });
  const coreTechTracks =
    trackIds
      .filter((trackId) => (isTechnicalTrack(trackId) && milestoneByTrack[trackId].level > 0))
      .sort(() => 0.5 - Math.random())
      .slice(0, maxCoreTechTracks - 2);

  const defaultTrack = coreTechTracks[0];
  return {
    name: 'Miéville Pickleberry',
    title: 'Senior Documancer Analyst',
    milestoneByTrack,
    coreTechTracks,
    focusedTrackId: defaultTrack,
    techCategorySelected: tracks[defaultTrack].category,
    detailedView: false,
    silly: false,
  }
}

export const migrateState = (result: Object) => {
  // Ensure a title is present
  if (!result.title && result.title !== '') {
    result.title = defaultState().title;
  }
  // Transform state to support notes for each track
  trackIds.forEach((trackId) => {
    const track = result.milestoneByTrack[trackId];
    if (track == undefined) {
      result.milestoneByTrack[trackId] = { level: 0 };
    } else if (track.level === undefined) {
      result.milestoneByTrack[trackId] = { level: track };
    }
  });
  // Delete historical skills
  for (const toDelete of ['CTRL_MODEL', 'TRAJ_MODEL', 'MFG_TOOL', 'IT']) {
    delete result.milestoneByTrack[toDelete];
  }
  // Ensure a tech category is selected
  if (!result.techCategorySelected) {
    result.techCategorySelected = tracks[trackIds[0]].category;
  }
  // Remove previous properties
  delete result.othersExpanded;
  // Disable silly mode
  result.silly = false;
  // Move CORE_TECH_TRACKS
  if (result.milestoneByTrack['CORE_TECH_TRACKS']) {
    result.coreTechTracks = result.milestoneByTrack['CORE_TECH_TRACKS'];
  }
  delete result.milestoneByTrack['CORE_TECH_TRACKS'];
  // Delete roleTrack
  delete result.roleTrack;
}
