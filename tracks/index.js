// @flow

import type { Track, Tracks } from './types';
export type { Track };

import * as Software from './software';
import * as Robotics from './robotics';
import * as Electronics from './electronics';
import * as Safety from './safety';
import * as DesignEng from './design_eng';
import * as MFGDev from './mfg_dev';
import * as MFGOps from './mfg_ops';
import * as Quality from './quality';
import * as Product from './product';
import * as Marketing from './marketing';
import * as Automata from './automata';

export type TrackId =
  Software.TrackId | Robotics.TrackId | Electronics.TrackId |
  Safety.TrackId |
  DesignEng.TrackId | MFGDev.TrackId | MFGOps.TrackId | Quality.TrackId |
  Product.TrackId | Marketing.TrackId |
  Automata.TrackId

export type Category =
  Software.Category | Robotics.Category | Electronics.Category |
  Safety.Category |
  DesignEng.Category | MFGDev.Category | MFGOps.Category | Quality.Category |
  Product.Category | Marketing.Category |
  Automata.Category

export const tracks: Tracks<TrackId, Category> = {
  ...Software.Tracks,
  ...Robotics.Tracks,
  ...Electronics.Tracks,

  ...Safety.Tracks,

  ...DesignEng.Tracks,
  ...MFGDev.Tracks,
  ...MFGOps.Tracks,
  ...Quality.Tracks,

  ...Product.Tracks,
  ...Marketing.Tracks,

  ...Automata.Tracks,
}
