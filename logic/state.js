// @flow

import { coerceMilestone } from './milestones'
import type { MilestoneMap } from './milestones'
import { trackIds } from './tracks'
import type { TrackId } from './tracks'

export type AppState = {|
  name: string,
  title: string,

  milestoneByTrack: MilestoneMap,
  coreTechTracks: TrackId[],
|}

export const emptyState = (): AppState => {
  const milestoneByTrack = {};
  trackIds.forEach((trackId) => {
    milestoneByTrack[trackId] = {level: 0};
  });
  return {
    name: '',
    title: '',
    milestoneByTrack,
    coreTechTracks: [],
  }
}

export const defaultState = (): AppState => {
  const milestoneByTrack = {};
  trackIds.forEach((trackId) => {
    milestoneByTrack[trackId] = {level: coerceMilestone(Math.floor(Math.pow(Math.random(), 8) * 4))};
  });

  return {
    name: 'Miéville Pickleberry',
    title: 'Senior Documancer Analyst',
    milestoneByTrack,
    coreTechTracks: [],
  }
}

export const migrateState = (result: Object) => {
  // Ensure a title is present
  if (result.title === null || result.title == undefined) {
    result.title = defaultState().title;
  }
  // Transform state to support notes for each track
  trackIds.forEach((trackId) => {
    const track = result.milestoneByTrack[trackId];
    if (track == undefined) {
      result.milestoneByTrack[trackId] = {level: 0};
    } else if (track.level === undefined) {
      result.milestoneByTrack[trackId] = {level: track};
    }
  });
  // Delete historical skills
  for (const toDelete of ['CTRL_MODEL', 'TRAJ_MODEL', 'MFG_TOOL', 'IT']) {
    delete result.milestoneByTrack[toDelete];
  }
  // Move CORE_TECH_TRACKS
  if (result.milestoneByTrack['CORE_TECH_TRACKS']) {
    result.coreTechTracks = result.milestoneByTrack['CORE_TECH_TRACKS'];
  }
  delete result.milestoneByTrack['CORE_TECH_TRACKS'];
  // Remove previous properties
  delete result.othersExpanded;
  delete result.otherTechTracksExanded;
  delete result.roleTrack;
  delete result.focusedTrackId;
  delete result.techCategorySelected;
  delete result.detailedView;
  delete result.silly;
}
