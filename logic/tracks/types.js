// @flow

type TrackMilestone = {|
  summary: string,
  signals: string[],
  examples?: string[]
|}

export type Track<Category> = {|
  displayName: string,
  sillyName?: string,
  category: Category,
  description: string,
  milestones: [
    TrackMilestone,
    TrackMilestone,
    TrackMilestone,
    TrackMilestone,
    TrackMilestone,
  ],
|}

export type Tracks<Ids, Category> = {
  [Ids]: Track<Category>,
}
