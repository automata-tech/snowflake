// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Manufacturing Operations'

export type TrackId =
  "SUPPLY CHAIN MANAGEMENT A" |
  "SUPPLY CHAIN MANAGEMENT B" |
  "INVENTORY CONTROL A" |
  "INVENTORY CONTROL B" |
  "LOGISTICS " |
  "PRODUCTION MANAGEMENT A" |
  "PRODUCTION MANAGEMENT B" |
  "SYSTEM DEVELOPMENT A" |
  "SYSTEM DEVELOPMENT B" |
  "CHANGE MANAGEMENT"

export const Tracks = {
  "SUPPLY CHAIN MANAGEMENT A": {
    "displayName": "Supply Chain Management A",
    "category": "Manufacturing Operations",
    "description":
      "SCM: Supplier management for Cost, Value, Quality of relationship, IP, Contract definition and Strategic Development ",
    "milestones": [
      {
        "summary":
          "Understands most of the listed items in relation to company objectives and requirements ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Level of Proficiency in some of these areas allows individual to cooperate with external parties such as supplier or agents acting the company [IP Lawyers]",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above Deeper insight and can deal with making complex trade-offs with regard to all of these areas or request additional support",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding and significant experience in dealing with these areas.  Can make strategic decisions in relation to the company's requirements for these areas",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "SUPPLY CHAIN MANAGEMENT B": {
    "displayName": "Supply Chain Management B",
    "category": "Manufacturing Operations",
    "description":
      "SCM: Auditing Suppliers and understanding the requirements for prospective supply chain partners and the risks/benefits that they may entail",
    "milestones": [
      {
        "summary":
          "Understand the necessity for auditing and understands how to build the requirements set for an audit.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary": "As above plus Can conduct audits and compile findings ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Organise audits by third parties and specify schedules of work for multiple subject specific audits and make risk analysis based on their findings",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: able to evolve and critique auditing practices and develop best practice in auditing for multiple areas of the supply chain.  Can complete ISO style audits on suppliers and use recognised standards in structuring audits.  Can advise on supply chain risk in strategic supply chain discussions",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "INVENTORY CONTROL A": {
    "displayName": "Inventory Control A",
    "category": "Manufacturing Operations",
    "description":
      "Inv Control: Ability to Use and Develop performance of ERP function and manage purchase against demand.",
    "milestones": [
      {
        "summary":
          "Understand function of ERP, individual functional elements and can add parts, assemblies, complete SA/TX and SC functions.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can Run reporter reports and compile shortages and buy lists",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can Place PO's and Book Stock into System, Use Assembly functions to manage demand through the system",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding of use of conceptual and financial drivers in inventory management.  Can help to develop best practice within the company.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "INVENTORY CONTROL B": {
    "displayName": "Inventory Control B",
    "category": "Manufacturing Operations",
    "description":
      "Inv Control: Management of costs, stock holdings and cost accuracy. Including Stock Takes with 3PL's and Supply Chain Partners",
    "milestones": [
      {
        "summary":
          "Understand function of ERP, individual functional elements and can add parts, assemblies, complete SA/TX and SC functions.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can Run reporter reports and compile shortages and buy lists.  Has strong grasp of key concepts and language",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can calculate and modify Valuations and ROP's/Stock Alerts and organise stock takes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding of use of conceptual and financial drivers in inventory management.  Can help to develop best practice within the company.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "LOGISTICS ": {
    "displayName": "Logistics ",
    "category": "Manufacturing Operations",
    "description":
      "Logistics: Can identify and execute appropriate means and processes to move goods from one location to another",
    "milestones": [
      {
        "summary": "Can organise a national courier movement",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can organise an international courier movement and deal with duties, entry codes.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Understands Palletisation and Air freight/Containerisation and Sea Forwarding as well as basic duties requirements",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can identify potential partners, develop quotations and outline strategic logistical objectives.  Can develop best practice and transfer learnings from outside of the company into our behaviours",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "PRODUCTION MANAGEMENT A": {
    "displayName": "Production Management A",
    "category": "Manufacturing Operations",
    "description":
      "Production Management: Ensuring Continued availability of goods in the required volumes at the required price.",
    "milestones": [
      {
        "summary":
          "Understands KPI that production activity is measured against. Can rationalise current and anticipated future behaviour against the production schedules",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can anticipate problems and communicate this to the relevant people and generate consensus around actions",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can think strategically to resolve issues and understands their circle of influence to generate changes in performance.  Understands the finances of the current production model and can recommend fact based improvements",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding of process management models and can strategically develop the company's production management processes to yield demonstrable results",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "PRODUCTION MANAGEMENT B": {
    "displayName": "Production Management B",
    "category": "Manufacturing Operations",
    "description":
      "Production Management: Development of Best practice including Lean, Process structure and Materials Handling to ensure we are making products in the most effective way possible",
    "milestones": [
      {
        "summary":
          "Understands Materials Handling steps in our product and operations stack and can apply basic efficiency principles to simple workflows",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can apply principles to more complex issues and examples.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can use conceptual tools to identify and resolve issues in production systems and formulate programs to address these issues",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding of Materials and Process flow and can make complexe strategic decisions backed by factual evidence",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "SYSTEM DEVELOPMENT A": {
    "displayName": "System Development A",
    "category": "Manufacturing Operations",
    "description":
      "System Development and Scale:  Understanding Capability, Risk and Control Levers in the Supply Chain",
    "milestones": [
      {
        "summary":
          "Can understand and estimate where the operational boundary limits of our current production and supply chains are",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Understands the levers that can be used to improve performance and meet business objectives",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Has significant awareness of risk and its causes and plan contingency in supply chain activity [requires with objective examples]",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding of how to scale and manage risk and get buy in from other areas of the company to support plans and proposed changes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "SYSTEM DEVELOPMENT B": {
    "displayName": "System Development B",
    "category": "Manufacturing Operations",
    "description":
      "System Development and Scale: Creating Change that aligns the Supply Chain against Business Objectives",
    "milestones": [
      {
        "summary":
          "Understands the strengths and weakness in our supply chains and can propose alternative actions or suppliers",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can identify risk and complexity and where it may present a threat to Key objectives or sustainability",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus  Is able to make complex tradeoffs in risk to produce best fit with key objectives from across the business",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Can think strategically and use supply chain partners to deliver our objects and communicate activity and reasoning across multiple subject groups in the company",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "CHANGE MANAGEMENT": {
    "displayName": "Change Management",
    "category": "Manufacturing Operations",
    "description":
      "Change Management:  Systems and Processes for Implementing Change within the Supply Chain.",
    "milestones": [
      {
        "summary":
          "Basic Understanding of the systems and processes to introduce or change new partners",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Intermediary Ability to complete the required stages of the change cycle and has complete small to medium sized changes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus  Advanced understanding of change cycle and can compile complex change pieces within the supply chain",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above plus Can upskill and train other members of team to equivalent level",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Subject Area Expert: Advance understanding of change system and has the ability to develop new best practice, build consensus and influence the behaviours of others",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
