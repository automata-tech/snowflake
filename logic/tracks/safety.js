// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Safety and Compliance'

export type TrackId =
  "ELEC_SAFE" |
  "EMC_RED" |
  "FUNC_SAFE" |
  "MACH_SAFE" |
  "OCC_HAS" |
  "RISK_ASSESS" |
  "TECH_FILE" |
  "WORLD_MARKETS"

export const Tracks = {
  "ELEC_SAFE": {
    "displayName": "Electrical Safety",
    "category": "Safety and Compliance",
    "description": "Working knowledge of the Low Voltage Directive (LVD) and the associated harmonised standards, what they entail and how they are applied. Ability to apply this knowledge to a wide range of products and conduct necessary testing where applicable.",
    "milestones": [{
      "summary": "Good understanding of electrical safety principles and relevant standards.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experience conducting electrical safety tests (e.g. PAT, IEC 60204, etc.) on a range of products with little to no supervision.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Good knowledge of the LVD and relevant harmonised standards, with some experience planning and conducting tests.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Excellent knowledge of the LVD and harmonised standards, including the requirements of other world markets. Confident planning and conducting electrical safety tests on a wide range of products.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced electrical safety professional",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "EMC_RED": {
    "displayName": "EMC / Radio Testing",
    "category": "Safety and Compliance",
    "description": "Working knowledge of the EMC and Radio Equipment (RED) Directives and the associated harmonised standards, what they entail and how they are applied. Ability to identify which requirements are applicable to a product, plan and conduct testing to ensure compliance. Deeper knowledge of the technologies and techniques used to perform testing, and how the product design may have an effect on its EMC performance.",
    "milestones": [{
      "summary": "Good understanding of EMC and radio testing requirements and relevant standards.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experience conducting EMC and radio testing against relevant harmonised standards with some supervision or guidance.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Confident planning and conducting EMC and radio testing on a range of products with no supervision.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced in planning and conducting EMC and radio testing for a range of products within the EU and other world markets.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Industry-recognised EMC/RF expert or equivalent experience.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "FUNC_SAFE": {
    "displayName": "Functional Safety",
    "category": "Safety and Compliance",
    "description": "Ability to determine functional safety requirements of a safety-related system, fully define the structure and function, and perform a fully-documented assessment to determine the performance level (PL) or safety integrity level (SIL) as per ISO 13849 or IEC 61508. Understanding of the hardware and software requirements of each of these standards and how to apply them.",
    "milestones": [{
      "summary": "Good understanding of functional safety and how safety-related functions are rated.",
      "signals": [
        "Recognises and can explain functional safety ratings",
        "Understands the key elements of ISO 13849 and IEC 61508 (or IEC 62061)",
      ],
      "examples": [
        "Could speak confidently about the basics of functional safety to a non-technical person",
      ],
    }, {
      "summary": "Ability to determine the functional safety requirements of a system by application of techniques within a functional safety standard.",
      "signals": [
        "Mostly self guided research on the application of standards",
        "Little supervision required to perform a requirements assessment",
      ],
      "examples": [
        "Application of one or more standards to determine functional safety requirements, including SIL/PL, structure, diagnostics, and functionality required",
      ],
    }, {
      "summary": "Ability to assess and document the safety-rating of a system by application of a functional safety standard.",
      "signals": [
        "Little to no supervision required to conduct a functional safety assessment for a system",
        "Confident navigating the standards and finding relevant information",
      ],
      "examples": [
        "Performing an assessment of simple equipment by applying one or more standards",
      ],
    }, {
      "summary": "Experienced functional safety practitioner with excellent knowledge of the application of relevant standards, setting company procedures and pioneering best practices to enable engineers to work more effectively.",
      "signals": [
        "Capable of training engineers on functional safety",
        "Competent at leading teams on this topic",
      ],
      "examples": [
        "Setting company procedures for functional safety",
        "Following a full functional safety lifecycle on complex equipment with no supervision",
      ],
    }, {
      "summary": "Industry-recognised functional safety expert or equivalent experience.",
      "signals": [
        "In-depth knowledge and experience of functional safety requirements across multiple industries (e.g. machinery, process, etc.)",
      ],
      "examples": [
        "Has completed a functional safety expert qualification",
        "Speaker at industry events on functional safety topics",
        "Contributes to international standards on functional safety (e.g. board member)",
      ],
    }],
  },

  "MACH_SAFE": {
    "displayName": "Machine Safety",
    "category": "Safety and Compliance",
    "description": "Working knowledge of the Machinery Directive and the associated harmonised standards, what they entail and how they are applied. Also has knowledge of the tools and techniques used to render machinery safety (e.g. guarding, interlocks, PLCs, etc.). Ability to apply this knowledge on a wide range of machinery.",
    "milestones": [{
      "summary": "Good understanding of machine safety principles.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Can design and assess a simple machine safety integration with little or no supervision.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Confident implementing a safety integration on a range of machines with no supervision. Familiar with common techniques used to render machines safe.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced machine safety integrator. Familiar with the requirements of the Machinery Directive and harmonised standards and how these may be applied to a range of machines.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Industry-recognised machine safety expert and team leader.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "OCC_HAS": {
    "displayName": "Occupational H&S",
    "category": "Safety and Compliance",
    "description": "Knowledgeable on the Health and Safety at Work Act 1974, specifically the requirements of both employer and employee and the techniques that can be used to satisfy these requirements. Ability to ensure company compliance and promote a safe working environment within the organisation.",
    "milestones": [{
      "summary": "Awareness of the Health and Safety at Work Act. Promotes existing Health and Safety practises within the company.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Working knowledge of the Health and Safety at Work Act. Applies safe working practises to day to day activities and encourages other to do so.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Has some level of responsibility for the safety of employees and contributes to improving safety processess and procedures.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Responsible for the health and safety of employees, leading safety initiatives and setting company practises.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced Health and Safety expert with high level of responsibility and accountability within the company.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "RISK_ASSESS": {
    "displayName": "Risk Assessment",
    "category": "Safety and Compliance",
    "description": "Ability to perform a detailed and documented assessment of risk for a wide range of applications, using industry-recognised tools such as risk matrices, HAZOP analysis, fault tree analysis, etc. Knowledge of control measures available and how these can affect the reduction of risk.",
    "milestones": [{
      "summary": "Good knowledge of risk assessment techniques with some experience on the application of some of these methods on simple projects.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Able to apply risk assessment techniques to a complex project with little or no supervision. Good knowledge of control measures available for risk reduction.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Confident in selecting and applying appropriate risk assessment techniques to complex projects or processes and suggesting appropriate control measures for risk reduction.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced risk assessor, providing significant input into company procedures and actively promoting safety culture within the organisation.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Industry-recognised safety professional with extensive experience conducting risk assessment activities and setting company-wide processes and procedures.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "TECH_FILE": {
    "displayName": "Technical File Management",
    "category": "Safety and Compliance",
    "description": "Ability to build and manage a technical file for product compliance, ensuring the data is complete, well controlled, and meets the requirements of the intended market(s). Understands the importance of accurate data and continued confirguration control in order to maintain comliance. Implements and/or follows company procedures to support this process.",
    "milestones": [{
      "summary": "Good knowledge of the CE marking process, in particular the requirements for a technical file.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experience collating technical information for a product into a technical file with minimal guidance.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Confident at generating and collating technical information for complex products with no supervision.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced generating and managing technical files to ensuring continued compliance through product changes.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Industry-recognised compliance professional and team leader or equivalent experience.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "WORLD_MARKETS": {
    "displayName": "World Markets",
    "category": "Safety and Compliance",
    "description": "Working knowledge of the Machinery Directive and the associated harmonised standards, what they entail and how they are applied. Also has knowledge of the tools and techniques used to render machinery safety (e.g. guarding, interlocks, PLCs, etc.). Ability to apply this knowledge on a wide range of machinery.",
    "milestones": [{
      "summary": "Good knowledge of European market requirements (e.g. CE) and general knowledge of other world markets.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Able to identify legislation applicable to a particular product intended for the EU market with little or no supervision. Also able to identify appropriate legislation from other markets through self-guided research.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Confident identifying relevant legislation for a range of products in multiple markets in order to create a comprehensive compliance plan.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced compliance professional, familiar with legislation across a range of markets, the similarities between these markets and the different routes to achieve compliance.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Experienced product compliance expert for world markets.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
}

const CheckTracks: TracksT<TrackId, Category> = Tracks
