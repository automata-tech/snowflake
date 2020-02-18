// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Manufacturing Development'

export type TrackId =
  "DFM A" |
  "DFM B" |
  "NPI A" |
  "NPI B" |
  "DIAGNOSTIC TOOLS" |
  "PROCESS DOCUMENTATION" |
  "QUALITY CONTROL A" |
  "QUALITY CONTROL B" |
  "DRIVING CHANGE [MANF] A" |
  "DRIVING CHANGE [MANF] B"

export const Tracks = {
  "DFM A": {
    "displayName": "DFM A",
    "category": "Manufacturing Development",
    "description":
      "Ability to understand Parts, Capability and work with Suppliers/Designers to define reliable repeatable parts.",
    "milestones": [
      {
        "summary":
          "Entry Point: : Understands basic concepts of makes a part easy or difficult to produce reliably for machiend and sheet metal parts and is able to identify areas where proposed parts may have poor levels of capability or repeatability",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary": "As Above + : Injection and HPDC parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Understands advance concepts relating to tool wear/ degradation part variation and relate these to proposed designs or existing parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Understands and can diagnose potential faults that may occur in different batches of the same part and has demonstrated an ability to critique potential issues in parts presented for manufacture by engineering design",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DFM B": {
    "displayName": "DFM B",
    "category": "Manufacturing Development",
    "description":
      "Ability to understand process flow, structure and risk in the procurement and assembly of the product",
    "milestones": [
      {
        "summary":
          "Entry Point:  Can identify material handling/processing or assembly work flows which may cause issues relating to repeatability",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :  But with more advance or complex process flows",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can complete studies to demonstrate or predict the likelihood of process failure and impact",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Understands comprehensive best practice in the organisation of process and materials flows and is able to extend the company's knowledge of these areas and communicate this to other team members",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "NPI A": {
    "displayName": "NPI A",
    "category": "Manufacturing Development",
    "description":
      "The ability to release and control data using PDM, ERP and BOM etc in the implimentation of change or new products.",
    "milestones": [
      {
        "summary":
          "Entry Point:  : Can  Edit BOMs on the ERP Systems and use the PDM system to find information",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can set up new BOMs and understands the full management cycle of Bills of Material.   Understands the function ans application of auto assemble/disassemble functions",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can use import/export features to bulk process the above function///Set up work flows on the PDM system",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can act as full system administrator/architect for PDM system or ERP sytem and understands at a conceptual level what the systems deliver and how that should be achieved.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "NPI B": {
    "displayName": "NPI B",
    "category": "Manufacturing Development",
    "description":
      "The ability to work with suppliers to created tools,, parts and pilot builds to manufacture items in low volumes",
    "milestones": [
      {
        "summary":
          "Entry Point:  Can send out drawings and process quotes according to company proceedures with various suppliers already on the system",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :  Can deal with larger drawing packs for RFQ and organisinng production of pilot builds using three or more suppliers to source the full build",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : As above but can introduce new suppliers to system including ERP setup, Put NDA's in Place and conduct low level Diligence/Risk assesment on the supplier. Purchase parts at low volumes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Can organise and source complex trial builds which involve large numbers of parts and suppliers.  Align sourcing options in pilot builds with PPaP requirements and leverage activity to support transition to volume manufacture",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DIAGNOSTIC TOOLS": {
    "displayName": "Diagnostic Tools",
    "category": "Manufacturing Development",
    "description":
      "Ability to identify failure points and propose/realise tests, jigs or check gautes to understand if items are non-conformant ",
    "milestones": [
      {
        "summary":
          "Entry Point: :  Able to understand necessity for key check gates at identify necessary check points in process flows",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :  Ability to design brief or specify simple tooling and jigs to meet requirements and reach out to get it built",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Overseeing/specifying the development of more complex jigs which may involve multiple collaborators and/or software/electronics",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:   Can look outside of organisation to develop best practice and draw in information that will lead to measurable improovements in the development of conformance checks and data aquisiton about our product and can work with others to realise this with suppliers",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "PROCESS DOCUMENTATION": {
    "displayName": "Process Documentation",
    "category": "Manufacturing Development",
    "description":
      "Production of SOP's work instruction, dignostic trees, FAT's and other documents necessary to define cnoformant products ",
    "milestones": [
      {
        "summary": "Entry Point:  Can edit SOP's, Fault Trees and FAT's",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can write from scratch high grade SOPs/FAT's an test documentation for simple processes and assemblies",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can write from scratch high grade SOPs/FAT's an test documentation for complex processes and assemblies",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can look beyo/FAT/nd our systems and organsiation and establish best practice and more effiient ways we can construct, control and disemenate SOP/FAT and other documents",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "QUALITY CONTROL A": {
    "displayName": "Quality Control A",
    "category": "Manufacturing Development",
    "description":
      "Inspection processes, methods and tools used in quality control",
    "milestones": [
      {
        "summary":
          "Entry Point:  Basic idea of simple metrology tools and processes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Understands use and applications of gauging and other inspection tools and can integrate them into control documents",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Understands use CMM/Laser Scanning and automated data collection techniques for QC",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  wider knowledge of use of inspection tools where they are applied and can introduce new techniques and technologies to improove performance in this area",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "QUALITY CONTROL B": {
    "displayName": "Quality Control B",
    "category": "Manufacturing Development",
    "description":
      "Development and sustainance of control and analysis frameworks to ensure consitency in parts and production",
    "milestones": [
      {
        "summary":
          "Entry Point: : Can interpret a suppliers data submission pack for batch conformance approval",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can develop QC frameworks for checks and inspections on simple parts",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can write a QCP for a manufacture to control components or assemblies.  Has complete PSW on production parts more",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Deep understanding of use and construction of QCP/PPaP and can loook out for best practice to improove our systems",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DRIVING CHANGE [MANF] A": {
    "displayName": "Driving Change [Manf] A",
    "category": "Manufacturing Development",
    "description":
      "Ability to Influence, create change and introduce Best practice",
    "milestones": [
      {
        "summary":
          "Entry Point: Can identify systems or processes within the manufacturing sphere whic cause problems and concisely communicate the issues within the group",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : But can spread understanding and buy in accros multiple skills groups",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : But can deal with complex issues which affect multiple groups and communicate effectivly across them and at executive level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can draw new techniques for generating consensus and buy in accross groups into the organisation",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DRIVING CHANGE [MANF] B": {
    "displayName": "Driving Change [Manf] B",
    "category": "Manufacturing Development",
    "description":
      "Propergation of the DMAIC cycle and use of data driven decision making",
    "milestones": [
      {
        "summary":
          "Entry Point:  Understands and can apply the DMAIC cycle to simple projects to create improvement",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + : Can complete larger more complex data anlaysis looking at multiple aspects of product and production process and draw these into clear action plans with impllimented outcomes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :  Has demonstrated DMAIC as a part the definition and implimentation of  \"change cycle\" and can produce evidence to show improovement and sustained control stratergies for medium complexity parts and simple assemblies",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As Above + :Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert:  Can use advance data tools in data analysis and drive through complexe projects structures around the DMAIC framework and create constant change and improovement",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
