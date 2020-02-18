// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Quality'

export type TrackId =
  "CHANGE CONTROL A" |
  "CHANGE CONTROL B" |
  "QUALITY TOOLS A" |
  "QUALITY TOOLS B" |
  "TEST & VALIDATION A" |
  "TEST & VALIDATION B" |
  "SUPPLIER DEVELOPMENT A" |
  "SUPPLIER DEVELOPMENT B" |
  "DRIVING CHANGE A" |
  "DRIVING CHANGE B"

export const Tracks = {
  "CHANGE CONTROL A": {
    "displayName": "Change Control A",
    "category": "Quality",
    "description":
      "Can define and develop from best practice the systems and processes used to control the verification, implementation and configuration of our parts and products.",
    "milestones": [
      {
        "summary":
          "Entry Point: : Full conceptual and practical understanding of Capa, Concession ECN and PPaP and PSW//Change System for all Groups in Mechanical, Electronic and Software Stack",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Can Define Change Control Scope for complex major changes and advise work groups on implications of change path.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Able to Champion the use of above systems with teams and provide examples of how they have correctly control change ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Able to engage with outside bodies and draw in evolving best practice and regulatory requirements into the organisation and develop systems in response to this",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "CHANGE CONTROL B": {
    "displayName": "Change Control B",
    "category": "Quality",
    "description":
      "Understanding of the full technical stack and an ability to understand risks to performance, consistency and availability  when implementing change.",
    "milestones": [
      {
        "summary":
          "Entry Point: : Understands and can define change scopes for Product Level and propose appropriate control frameworks and necessary change control tools",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Full understanding of all Configuration Control Issues and Tools in Manufacture which may be affected by change",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Able to advise and support teams in controlling change across the full stack to ensure production and product functionality is not compromised",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Able to engage with outside bodies and draw in evolving best practice and regulatory requirements into the organisation and develop systems in response to this",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "QUALITY TOOLS A": {
    "displayName": "Quality Tools A",
    "category": "Quality",
    "description":
      "Use of General and Statistical Process control tools to identify failure in product and process to highlight areas for improvement  ",
    "milestones": [
      {
        "summary":
          "Entry Point: : Can complete basic statistical analysis, gauge R&R pareto analysis etc. on simple parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Can use specialist tools to complete calculations relating to MTF, Reliability and Performance",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : has demonstrated ability to apply more complex calculations such a Cp, Cpk to understand process performance on more complex parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Recognised certification and multiple examples of this being used in the context of the business to bring measurable performance gains",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "QUALITY TOOLS B": {
    "displayName": "Quality Tools B",
    "category": "Quality",
    "description":
      "Implementation and development of PPaP/ PSW/QCP procedures  to ensure parts are correctly attributed and controlled.",
    "milestones": [
      {
        "summary":
          "Entry Point: : Understands the necessity and framework of PPaP/PSW/QCP and can develop simple plans to control release of parts and suppliers part submissions",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can write and structure above for parts of medium complexity",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can write and structure the above for complex parts and assembly systems and champion the processes with other teams across the company",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can develop the existing systems to meet changing requirements and is in touch with current thinking and best practice relating to this area",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "TEST & VALIDATION A": {
    "displayName": "Test & Validation A",
    "category": "Quality",
    "description":
      "Defining, Organising and Delegating Part and Product Testing to ensure standards are met",
    "milestones": [
      {
        "summary":
          "Entry Point: :  Can work with teams to define scope of testing requirements, control variable framework and ensure this is done to the agreed standard.  Has a wide skills set in dealing with a variety of test and measurement technologies",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Can work with teams dealing with more complex parts/assembly/software structures to ensure necessary testing has been completed",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Can connect teams to in outside test and measurement facilities to make sure appropriate third party testing takes place to the required standard",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Comprehensive knowledge of all aspects of test required to produce the Robot and connect to industry leading organisations to understand how they tackle similar issues",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "TEST & VALIDATION B": {
    "displayName": "Test & Validation B",
    "category": "Quality",
    "description":
      "Development of standardised test and data collection frameworks to maintain Quality",
    "milestones": [
      {
        "summary":
          "Entry Point: : Understands how to design and develop specific tests which can be used to assess comparative performance on iterative design cycles of similar parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :  Can produce standardised tests for sub assemblies to allow A/B performance testing and indicate the strengths and weaknesses in the testing approach",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Full robot level standardised tests plus critique on the approach",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Constantly reviews evolving test and measurement technologies and their applications to draw current \"state of the art\" and best practice into the organisation",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "SUPPLIER DEVELOPMENT A": {
    "displayName": "Supplier Development A",
    "category": "Quality",
    "description":
      "Develop process and behaviours in suppliers to ensure they can prevent the shipment of defective goods",
    "milestones": [
      {
        "summary":
          "Entry Point: :  Understands how process data is a proxy for part quality and can work with others to identify the elements in a component which will allow us understand conformance and suitability before shipment [simple parts] and has worked with a suppplier to develop a data submission pack which represents our understanding of quality",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :  Complex parts or assemblies and can generate buy in from suppliers on implementing these measurements",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Can propose measurements to revel characteristics that are not directly measurable as part of the parts manufacturing process and work with suppliers to build this into the data pack. [e.g Batch% destructive inspection] and has demonstrated use of this as a way of reducing failure rates in key parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Is able to look to industry best practice and world class to suppliers to see how they are developing data submissions and draw best practice into the organisation",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "SUPPLIER DEVELOPMENT B": {
    "displayName": "Supplier Development B",
    "category": "Quality",
    "description":
      "Ensure suppliers understand specification and are providing appropriate data to support their conformance declaration",
    "milestones": [
      {
        "summary":
          "Entry Point: :  Work with suppliers to develop batch conformance data packs on simple parts using certification submissions and physical measurement to support the development of TDF's",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Moulded or post processed parts which require process control data to form part of the pack and translates this into part of the TDF",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Complex parts or assemblies with critical characteristics which extend beyond physical dimensional measurement",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Is able to look to industry best practice and world class to suppliers to see how they are developing data submissions and draw best practice into the organisation",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DRIVING CHANGE A": {
    "displayName": "Driving Change A",
    "category": "Quality",
    "description":
      "Can improve the understanding and practice of quality in the whole organisation",
    "milestones": [
      {
        "summary":
          "Entry Point: : Is an advocate of quality control best practice for the manufacturing team",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Is an advocate for quality control across the company and has the necessary skills set to engage with other teams",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus : Is able to engage and develop \"buy in\" to improve quality control in all areas of the company",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus: Has trained motivated and mentored others to work within the QMS to advocate and enhance performance.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Engages with external quality control professionals outside of the company to understand their approaches to develop new approaches and improve the performance of our quality systems.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DRIVING CHANGE B": {
    "displayName": "Driving Change B",
    "category": "Quality",
    "description":
      "Champion use of best practice and formal quality structures in all areas of the company.",
    "milestones": [
      {
        "summary":
          "Entry Point: : Identifies areas for the improvement of quality systems or practices and develops plans to resolve them, develops buy in and engages others",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has generated change or structure in Quality control practices which has improved the reliability or performance of team or systemic area of the company.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has established a certified QC system to the company for one or more areas of activity,e.g. ISO 9001 for the Manufacturing ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can Manage the continuous improvement programs put in place of our QMS and enhance its performance.  Keeps abreast of regulatory changes and is responsible for certification and renewal of all externally audited quality certification.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
