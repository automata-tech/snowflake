// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Robotics'

export type TrackId =
  "CONTROLS_MATH"  |
  "CONTROLS_CONTROL_THEORY" |
  "CONTROLS_SIMS" |
  "CONTROLS_RESEARCH" |
  "CONTROLS_JIG_DESIGN"

export const Tracks = {
  "CONTROLS_MATH": {
    "displayName": "Advanced mathematics",
    "category": "Robotics",
    "description": "Ability to understand complex mathematics such linear algebra, geometry, optimisations, statistics. Capability of working effectively with rigid body dynamics and the related algebraic operations.",
    "milestones": [{
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },

  "CONTROLS_CONTROL_THEORY": {
    "displayName": "Control Theory",
    "category": "Robotics",
    "description": "Ability to understand statics and dynamics of multibody systems. Capability of analysing, designing and controlling linear and nonlinear systems. Knowledge of control stability, feddback linearization and optimal control techniques.",
    "milestones": [{
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },

  "CONTROLS_RESEARCH": {
    "displayName": "Research proficiency",
    "category": "Robotics",
    "description": "Capability to perform literature searches and reviews. Ability to effectively communicate scientific data and results, experimental design and management, data visualisation.",
    "milestones": [{
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },


  "CONTROLS_SIMS": {
    "displayName": "Applied simulation",
    "category": "Robotics",
    "description": "Ability to perform computational modelling, proficiency with physics / analytical frameworks, applied optimisation. Profiency with multimody simulation softwares - Matlab/Simulink/Simscape/Adams.",
    "milestones": [{
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },

  "CONTROLS_JIG_DESIGN": {
    "displayName": "Jig design",
    "category": "Robotics",
    "description": "Capability of creating jigs to test robot performance/assess unknown parameters. Profiency in designing, executing and testing a jig from start to end, including MAIT (manufacturing, assembly, integration and testing)",
    "milestones": [{
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
}

const CheckTracks: TracksT<TrackId, Category> = Tracks
