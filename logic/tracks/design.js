// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Design'

export type TrackId =
  "BRANDING & VISUAL IDENTITY" |
  "VISUAL DESIGN" |
  "PRODUCT DESIGN"

export const Tracks = {
  "BRANDING & VISUAL IDENTITY": {
    "displayName": "Branding & Visual Identity",
    "category": "Design",
    "description":
      "Automata's values and mission, its identity and characteristics; elements that help identify our target market, increase customer awereness and differenciate ourselves from competition.  Brand is what people 'feel' and 'think' about Automata.",
    "milestones": [
      {
        "summary":
          "Understands the theory and fundamentals of most research methods. Masters the art of user testing and knows the kind of results they can expect based on the interactions offered by prototype that is used.  Learns best practices for common design problems and solutions are solid.",
        "signals": [
          "Edits the final results for presentation to the client",
          "Creatively directs organisation of company events"
        ],
        "examples": [
          "Runs projects in collaboration with other teams, from sourcing and scheduling participants through to delivery. ",
          "The insight they generate is immediately useful and provides clear direction for the teams you work with."
        ]
      },
      {
        "summary":
          "Understands the design principles and how specific patterns influence behaviour. Has an emerging recognition that it's not all about design, but design can contributes to a broader goal; recognizes business goals and technical constraints. Confident in applying best practices to common design problems.",
        "signals": [
          "Works on designs in order to produce effective advertising campaigns",
          "Commissions specialists, such as videographers and photographers, to work on projects"
        ],
        "examples": [
          "Runs research projects independently and confidently, from planning to delivery. ",
          "Has a mature understanding on how important research is to achieve Automata's goals and to deal with its constraints."
        ]
      },
      {
        "summary":
          "Knows what industry best practice design guidelines look like and can recommend patterns depending on the behaviour Automata want to drive. Masters the range of research methods and when to apply them.  Clarifies success metrics and ties efforts toward delivering business value. ",
        "signals": [
          "Helps setting the tools for company wide strategies",
          "Redesigns Automata's branding and internal visual guidelines"
        ],
        "examples": [
          "Their reserach and recommendations are highly impactful and they know how to adapt them to different people and disciplines in the company depending on their priorities."
        ]
      },
      {
        "summary":
          "Has a very high-level understanding about how their function intersects with the rest of the company and business. Develops problem-framing approaches, establishing new starting points that lead to new kinds of solutions, which affects strategic thinking, not just execution. Leads the solution of a product area; connects that to broader product vision.",
        "signals": [
          "Delivers fresh approaches to advertising.",
          "Analyzes trends, looks at new data and keeps with the times.",
          "Works with external designers and artists to develop cutting-edge projects that fuel Automata's culture."
        ],
        "examples": [
          "Takes the long-term vision and defines the building blocks needed to get there, in collaboration with the commercial team.",
          "Shares insight at Automata, formally and informally, from projects they've run and papers or articles they've read. "
        ]
      },
      {
        "summary":
          "Has a critical and holistic approach, integrated understanding of organizational context. Develops and articulates compelling vision for the team, working with partners and stakeholders to make real change in how Automata approaches its business. Leads the entire user experience or special/innovation projects. Is the accountable executive for very high-impact projects",
        "signals": [
          "Leads creative direction of complex campaigns and cultural projects.",
          "Leads projects that create unique visuals that people can remember and associate with Automata.",
          "Invents new ideas for branding and advertising campaigns."
        ],
        "examples": [
          "Understands the big picture and integrates the company goals into Design. ",
          "Is great at visually communicating the long-term vision & mission for Automata.",
          "Inspires those around them and leads Automata's culture and visual strategy. "
        ]
      }
    ]
  },
  "VISUAL DESIGN": {
    "displayName": "Visual Design  ",
    "category": "Design",
    "description":
      "The use of imagery, videos, colours, shapes, typography, and forms to enhance usability and improve the user experience of Automata's product and help achieve its mission. ",
    "milestones": [
      {
        "summary":
          "Understands the theory and fundamentals of design (graphics, Ux/Ui, multimedia) and how to put them into practice. Bases decisions on solid visual design principles and is proficient using the right tool for the job.",
        "signals": [
          "Produces simple assets for Social Media and Web applications",
          "Takes and edits photos of Eva",
          "Edits videos and adds simple text overlays",
          ""
        ],
        "examples": [
          "Reliably owns and completes well defined tasks to a high quality with little direction. ",
          "Seeks out the information and feedback required to get tasks done while communicating back to those that are impacted by their decisions. ",
          ""
        ]
      },
      {
        "summary":
          "Proficient in multiple aspects of design, and easily moves from print design to video editing, to UX analysis and UI prototyping. Design principles come naturally. Masters the toolkit to work as fast as the tools allow and is able to install plugins and softwares to work more efficiently.",
        "signals": [
          "Produces prototypes for web pages and internal applications",
          "Uses current illustration tools like Adobe Illustrator and can generate illustration assets",
          "Designs and delivers brochures and business cards and generally printed media of high quality.",
          "Takes and edits videos of Eva in action"
        ],
        "examples": [
          "Is involved in and own large tasks and projects that will have a big impact. "
        ]
      },
      {
        "summary":
          "Masters multiple design disciplines and manages to efficiently and creatively combine them for the best result. Their experience allows to understand the business as a whole and identify proactively where can their impact be bigger.",
        "signals": [
          "Modularizes design using optimizations like components, symbols and text styles",
          "Designs and collaborates with other designers in the production of graphics for the stands for trade shows",
          "Produces high quality videos to illustrate Eva's capabilities to populate Automata's social media and website"
        ],
        "examples": [
          "Defines and completely owns big tasks and coordinates well with others to get them done. ",
          "Masters art direction and execution"
        ]
      },
      {
        "summary":
          "Masters multiple design disciplines but also knows who the experts are and are able to delegate accordingly, where possible.",
        "signals": [
          "Leads the visual design of content in collaboration with marketing team",
          "Redefines branding guidelines to enhance Automata's identity",
          "Encourages care about design and attention to details within the company"
        ],
        "examples": [
          "Takes the long-term vision and defines the building blocks needed to get there.",
          "Leads through influence and informally inspire those around them about design. ",
          "Is highly recognised for their impact on team culture"
        ]
      },
      {
        "summary":
          "Has a very wide breadth of knowledge but also a very high-level understanding about how their function intersects with the rest of the company and business.",
        "signals": [
          "Defines a cohesive graphic style across the product and create a system for maintaining consistency",
          "Leads the design of all visual, ux, interacion elements that represent Automata"
        ],
        "examples": [
          "Understands the big picture and integrates Design into the company goals.",
          "Inspires their team and can attract top talent to the organisation.",
          "Inspires those around and is an effective leader of the company's culture and strategy."
        ]
      }
    ]
  },
  "PRODUCT DESIGN": {
    "displayName": "Product Design",
    "category": "Design",
    "description":
      "The process of creating usable products/tools and experiences, starting by defining customer's problems and thinking about possible solutions.",
    "milestones": [
      {
        "summary":
          "Has a strong and capable engagement in standard design processes. Has an educated understanding of the basics of visual and interaction design, along with experience simple tools to turn their knowledge into real design work.",
        "signals": ["Designs simple tools and end-effectors"],
        "examples": [
          "Works with others and seeks out the information and feedback required to get tasks done while communicating back to those that are impacted by their decisions. ",
          "Supports other designers in their work, bringing personal insights and feeling comfortable challenging decisions they see that could be improved."
        ]
      },
      {
        "summary":
          "Proficient in multiple aspects of digital product design and user research.  Knows how to use time, haptics, sound and motion to create the condition for a valuable product experience. Design principles come naturally. Masters their toolkit to workas as fast as the tools allow and is able to install plugins and softwares to work more efficiently.",
        "signals": [
          "Able to design and create prototypes of tools to implement Eva's workflow",
          "Masters programming of tolpaths for Eva to optimise tasks"
        ],
        "examples": [
          "Is involved in and owns important tasks that will have a impact in the business.",
          "Is able to offer product direction into complex problems creating the perfect and easy to use product that Automata is known for.",
          "Help mentoring more junior staff and are a source of integrity and a model to follow."
        ]
      },
      {
        "summary":
          "Masters interaction design and knows enough about research to bridge the gaps.  Understands Automata as a whole and proactively identifies where their impact can be bigger. Proactively proposes new solutions and ideas to improve Automata's workflow, reduce costs and maximise customer's experience.",
        "signals": [
          "Designs and fabricates applications and demos for events and trade shows",
          "Tests and experiments materials and solutions",
          "Designs packaging solution for the robot and potential accessories"
        ],
        "examples": [
          "Defines and completely own big tasks and coordinate well with others to get them done.",
          "Is an excellent mentor and people constantly learn more from them."
        ]
      },
      {
        "summary":
          "Masters multiple design disciplines but also knows who the experts are and are able to delegate accordingly, where possible.",
        "signals": [
          "Collaborates with other designers to implement Eva's design",
          "Collaborates with other members of the team and interacts with customers in the design of solutions and applications",
          "Dedicates time to research, to enhance and implement automation in a wide variety of applications"
        ],
        "examples": [
          "Takes the long-term vision and defines the building blocks needed to get there."
        ]
      },
      {
        "summary":
          "Has a very wide breadth of knowledge but also a very high-level understanding about how their function intersects with the rest of the company and business. Understands the big picture and integrate the company goals into Design.  Is great at communicating and visually deliver the long-term vision & mission for the company.",
        "signals": [
          "Leads the design of the future revisions of Eva",
          "Actively and autonomously interacts with customers to define and test solutions"
        ],
        "examples": [
          "Is accountable executive for very high-impact projects.",
          "Inspires their team and can attract top talent to the organisation. ",
          "Raises awareness of the importance of design and details throughout the company."
        ]
      }
    ]
  }
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
