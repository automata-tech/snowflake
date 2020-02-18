// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Design Engineering'

export type TrackId =
  "IDEATION A" |
  "IDEATION B" |
  "REALISATION A" |
  "REALISATION B" |
  "VALIDATION/SIMULATION A" |
  "VALIDATION/SIMULATION B" |
  "IMPLEMENTATION A" |
  "IMPLEMENTATION B" |
  "DRIVING CHANGE [DES] A" |
  "DE-DRIVING CHANGE [DES] B"

export const Tracks = {
  "IDEATION A": {
    "displayName": "Ideation A",
    "category": "Design Engineering",
    "description":
      "Ability to use CAD/Drawings/Calculation and Prototyping to develop and prove parts, mechanisms and structures",
    "milestones": [
      {
        "summary":
          "Basic Concepts of 3D Modelling//2D Drawing and Production of Prototypes.  Can design machined/cast/sheet metal parts.  Simple Engineering Calculations and Analysis.  Can create controlled parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Intermediary Use of CAD Tools [Inc Surfacing/Assemblies/Linear FEA Applications] and ability to produce detailed 2D Drawings.  Good applied understanding of Mechanisms and Joining of Materials.  Understands conceptual limitations and best practice of the parts they are designing",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Advanced use of CAD including Analytic Tools, GDT, Tolerance Modelling and Clash Fit/Mass Properties Inc use of Inbuilt or Ancillary FEA Packages and Data Management Systems.  In Depth understanding of the processes they are designing for at a theoretical and practical level and is able to anticipate issues in their designs.  Can support detailed engineering design decisions with detailed calculation, i.e Bolts, Gears, General Stress Calculations.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Expert: Full Mastery and Command of all user features in CAD Stack and able to support and upskill other users to Advanced Level.  Ability to identify shortcomings in current systems and in-depth knowledge of mechanisms and structures, transmission of forces.  Understanding of wide range of application areas and how they work/fail at a theoretical level and can provide analysis and calculations to support ideas and insights.  Has strong understanding of issues in the electronics and controls design systems used in the robot",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  As above but Defines strategic direction for development of Company Wide CAD Application Stack, Engineering Technologies and a recognised subject area Engineering Expert.  Wide experience of Mechanism Design and Analysis.  Strong Understanding of Electronics and Controls Design Issues and can engage with other Subject Area Experts to guide and upskil others.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "IDEATION B": {
    "displayName": "Ideation B",
    "category": "Design Engineering",
    "description":
      "Use of Analytic Frameworks to Manage Risk, Performance and Failure Rates [P/DFMEA/SF] in design concepts",
    "milestones": [
      {
        "summary":
          "Understands Basic application of DFMEA and can perform Safety Limit Calculations using Cad/Spreadsheets ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Deeper Understanding of DFMEA process and can set up and complete DFMEA.  Can use these to predictively indicate where designs need to be rationalised or reconsidered.  General understanding of what safety factors are appropriate and is proficient in decision making relating to safety factory and risk assessment",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above but understands the relationship between DFMEA and compliance issues in the compilation of technical files.  Can provide detailed calculations and assessments of Safety limits for use in compliance files.  Can use FMEA to propose projects and bring about meaningful objective outcomes.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Can organise and run work groups to conclude D/P FMEA at the appropriate point and liaise with compliance and quality experts to develop/extend the FMEA frameworks..  Upskill others and evolve and critique completed FMEA",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: As above but is able to improve and introduce new analytic frameworks and tools for understanding risk and failure in designs.  Complete complexe FMEA style exercises and break down outputs into plans of action.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "REALISATION A": {
    "displayName": "Realisation A",
    "category": "Design Engineering",
    "description": "Materials, Mechanisms and Process Knowledge",
    "milestones": [
      {
        "summary":
          "Basic Knowledge of Metals [Ferrous and Non-Ferrous], Plastics , CAD/CAM, Machining techniques and limitations",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Intermediary Knowledge of Metals [Ferrous and Non-Ferrous], Plastics and their processing and processing limits.  BAsic knowledge of typical materials applications.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Advanced Knowledge of Metals [Ferrous and Non-Ferrous], Plastics , Machining and Forming techniques and limitations and their structural/mechanical limitations",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Expert: As above but with clear understanding of applications, limitations of use and common failure modes in complex mechanisms and materials being proposed",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: As above but with the ability to contact and liaise with experts outside of the business or identify specialist/new materials/mechanisms which may provide performance gains in the company's product.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "REALISATION B": {
    "displayName": "Realisation B",
    "category": "Design Engineering",
    "description": "Prototype and First Part Inspection ",
    "milestones": [
      {
        "summary":
          "Can produce prototyping drawings and order parts to build prototypes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Ability to conduct first part/prototype inspections and compile reports",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above  is capable of assembling prototype with all necessary accompanying documentation",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above Can use prototyping information to develop pack for PPaP/PSW",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert can train and upskill people people in building advanced first builds, inspecting parts and developing prototype reports suitable to be fed back into the teams",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "VALIDATION/SIMULATION A": {
    "displayName": "Validation/Simulation A",
    "category": "Design Engineering",
    "description":
      "Experimental Design, Analysis and Drawing Meaningful Conclusions",
    "milestones": [
      {
        "summary":
          "Can develop test and analysis frameworks for simple parts and systems.  Get jigs built and run them.  Collect basic data and complete simple analysis of the experiment",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above demonstrated experience of using measurement and data gathering tools ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above ability to develop advanced data analysis which leads to tangible outcomes and give insights into the performance of prototypes.  Advance understanding of Hypothesis testing as a tool, Socratic Methods etc. in developing conclusions from data",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above the ability to upskil others and evolve test and analytic best practice",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advise on Testing and has ability to work closely with quality and compliance to ensure presented test outcomes maintain a adequate evidential quality to meet the company's requirements.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "VALIDATION/SIMULATION B": {
    "displayName": "Validation/Simulation B",
    "category": "Design Engineering",
    "description": "Documenting, Recording and Communicating Findings",
    "milestones": [
      {
        "summary": "Can write Basic Reports and file them correctly",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Develop more detailed reports capable of inclusion into TDF's/PSW/MMF which may include complex analysis or data representations",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Can articulate finding of reports concisely and communicate findings and impacts to a broader audience",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Can upskill others and critique others work and performance",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: As above plus extending the tools and procedures used for the team when recording, analysing and representing data",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "IMPLEMENTATION A": {
    "displayName": "Implementation A",
    "category": "Design Engineering",
    "description": "Getting Parts Out PPaP/PSW/QCP ",
    "milestones": [
      {
        "summary": "Understanding the elements that comprise PPaP/PSW and QCP",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Can compile PPaP and PSW for simple part implementations",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Can compile PPaP and PSW for complex designs or critical parts and can assist in the development of QCP's",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above  Upskill and Train others in the established system",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:   Able to develop management processes of the change cycle with other teams and has deep insight into the use of the   use of PPaP/QCP and PSW",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "IMPLEMENTATION B": {
    "displayName": "Implementation B",
    "category": "Design Engineering",
    "description": "Change Management and Sustaining the DMAIC Cycle",
    "milestones": [
      {
        "summary":
          "Understands the basic elements of the change management system",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary": "As above Can complete simple changes through to PSI level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Can complete complex changes through to PSW level and liaise with other groups actioning the change process",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above  Can upskil Others and resolve complex change management issues",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Able to develop management processes of the change cycle with other teams and has deep insight into the use of DMAIC",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DRIVING CHANGE [DES] A": {
    "displayName": "Driving Change [Des] A",
    "category": "Design Engineering",
    "description":
      "Ability to Influence, Communicate and Generate Consensus on Change",
    "milestones": [
      {
        "summary":
          "Can identify specific areas within the Mech Eng Stack which lead to an increase in Payload, Capability, Lifetime, Reliability or Consistency using statistical or evidence based information",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above  Able to present ideas in a considered manner and generate buy in an consensus on findings and proposals",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Introduces strategic thinking and long term thinking into proposals which can support multiple successive projects",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Is able to formulate and generate buy in/consuses on major projects and features or strategic headlines which will influence multiple projects",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Can provide vision and guidance to coworkers in formulating their proposals and champion large initiatives and bring people together to support their completion. ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DE-DRIVING CHANGE [DES] B": {
    "displayName": "DE-Driving Change [Des] B",
    "category": "Design Engineering",
    "description": "Identifying and Creating Meaningful Measurable Improvement",
    "milestones": [
      {
        "summary":
          "Can reduce complexity, define, scope and execute small projects within a DMAIC framework and create realisable measurable performance measures for proposed outcomes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above  Can take complex contrary issues, identify insights and reduce compexity and use quantitative tracking to show how  outcomes have produced the anticipated performance gain.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Produces data from projects which is capable of being used by other teams to develop their own projects and insights.  Acts as a voice for internal and external customers. Able to identify and draw in customer voice to the organisation.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary": "As above But at Medium Large Scale",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Can guide and upskill others in this area whilst providing oversight on large projects.  ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
