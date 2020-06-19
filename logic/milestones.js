// @flow

import type { TrackId } from './tracks'

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
