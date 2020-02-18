// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Product'

export type TrackId =
  "CUSTOMER FOCUS" |
  "DATA COLLECTION & ANALYSIS" |
  "UNDERSTANDING OF THE MARKET" |
  "UNDERSTANDING OF THE TECHNOLOGY" |
  "CAN SET STRATEGY AND CLEARLY COMMUNICATE RATIONALE" |
  "CREATES A COMPANY OF MISSIONARIES NOT MERCENARIES" |
  "START WITH THE PROBLEM" |
  "THINK BIG, START SMALL, SHIP OFTEN" |
  "TACKLE THE BIGGEST RISKS AT THE START AND SHIP TO LEARN" |
  "SHIP THE WHOLE CUSTOMER EXPERIENCE" |
  "DELIVER AN OUTCOME" |
  "OWNERSHIP" |
  "DECISIVENESS" |
  "A BRILLIANT COMMUNICATOR" |
  "COLLABORATES & EMPOWERS"

export const Tracks = {
  "CUSTOMER FOCUS": {
    "displayName": "Customer focus",
    "category": "Product",
    "description":
      "PMs represent customer needs accurately and fairly to create the best possible value for Automata. They use customer insight to ensure that they deeply understand our customers\u2019 problems, define the correct priorities to tackle and create a clear brief.",
    "milestones": [
      {
        "summary":
          "Talks to customers and has some understanding of their needs in the area they are focussed on",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Talks to customers looking for deeper insight on their area. \nUnderstands the customer needs in this area\nHelps to define the problems we should be seeking to understand. \nUses this insight to effectively create the best possible value in their product area. ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Talks to customers looking for deep insight in their area and beyond. \nIs seen internally as an expert on the customer's needs and pains for their area. \nLeads on defining the problems we should be seeking to understand and the approach we should take to achieve that. \nShares their understanding of the customer effectively to drive innovation around them",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Talks to the full range of customers and understands their pains across that full spectrum\nIs recognised internally and externally as an expert on the customer needs and pains\nIs an innovator in how we define, understand, and share understanding of customer problems\nUses this insight to effectively create the best possible value for the customer across the company and anticipates future product needs or opportunities",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Talks to the full range of customers and understands their pains across that full spectrum\nIs seen as a visionary who leads automata to solving problems the customer wasn't aware of\nUses insights to influence Automata's Product Vision and Strategy",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DATA COLLECTION & ANALYSIS": {
    "displayName": "Data collection & analysis",
    "category": "Product",
    "description":
      "PMs use data to inform decision-making, uncover new product opportunities for Automata, and measure the success of the teams in achieving their objectives",
    "milestones": [
      {
        "summary":
          "Understands the importance of taking a data led approach to decision making\nNeeds suport structuring what analysis they should do to gain insights, answer a question, or understand the impact their work has had\nNeeds support doing analysis\nHolds themselves to account on keeping data sources accurate and up to date",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Is an advocate for the importance of taking a data led approach to decision making and drives others to keep data sources accurate and up to date\nIs able to independently structure what analysis they should do to gain insights, answer a question, or understand the impact their work has had\nCan do simple analysis themselves, but needs support on more comlex peices of analysis\nPresents data insights in a simple and compelling way that drive clarity and alignment in others",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Supports taking Automata's data strategy forwards, supporting initiatives, and identifying opportunities to move it forwards\nSupports others to structure what analysis they should do to gain insights, answer a question, or understand the impact their work has had\nCan do complex analysis (not at the level of a data scientist) themselves on large data sets\nUses data insights to drive all major decisions they take and uses this to align and compel others of a direction",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has a leading voice in taking Automata's data strategy forwards\nIs seen as a \"go-to\" person on how to derive insights from data\nCan discuss the pro's and con's of different data analytic approaches and identify the skillset needed to do it effectively\nUses data led approaches to simplify and align large groups of people behind common goals and understanding of a problem",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has a leading voice in taking Automata's data strategy forwards\nIs an expert on new data analytics approaches and drives the adoption of these in Automata ito constantly improve the impact we can have\nUses data insights to drive the direction of the Product Vision and Strategy",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "UNDERSTANDING OF THE MARKET": {
    "displayName": "Understanding of the market",
    "category": "Product",
    "description":
      "PMs understand the competitive landscape and industry trends and use this understanding to identify sustainable competitive advantages for Automata.",
    "milestones": [
      {
        "summary":
          "Is aware of the competitive landscape and the trends within Automata's industry\nCan articulate the main channels Automata uses to reach new customers\nSupports commercial initiatives to grow and excite customer base about the product offering\nUnderstands Automata's product pricing model and how that compares to the market",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has a deep interest in the market Automata works in\nUnderstands the Pros and Cons of the channels available to sell automata's products including CAC and scalability\nHelps develop the product offering messaging with commercial teams by bringing insight on the main pain points the customer feels and the product offering solves\n",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Is seen as an expert in the market Automata works in\nLeads discovery work on the best channels for Automata to use to sell the product they are focussed on\nLeads development of product offering messaging by being a leading voice on the main pain points the customer feels and the product offering solves\nUnderstands and can articulate the different pricing models and cash-to-cash cycles have on the customer and Automata\nSets pricing models for products taking into account customer and automata's needs",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Is seen as an expert in the market Automata works in and can discuss the impact that will have on Automata\nA leading voice on how Automata's established channels will have to adapt in order to support the Product Vision and Strategy\nA leading voice on how Automata can and should develop it's brand to grow the impact it can have with it's product offerings\nCan develop basic financial models to evaluate the impact of pricing models on the Customer and Automata",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Is externally seen as an expert in the market Automata works in and uses this to drive Automata to \"skate to where the puck will be, not where it is\"\nBuilds a Product Vision and Strategy which includes innovation and development of channels and brand\nDrives innovative approaches to Automata's business and pricing model to ensure it stays ahead of the competition",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "UNDERSTANDING OF THE TECHNOLOGY": {
    "displayName": "Understanding of the technology",
    "category": "Product",
    "description":
      "PMs need to understand the technology used in their area of the product in order to make effective product decisions and drive their technology team. They don't need to make technical decisions but they do have to be able to evaluate the impact of those decisions and challenge the rigour of pre release tests to ensure the quality of the releases",
    "milestones": [
      {
        "summary":
          "A basic understanding of the technology used in their area of product which allows them to communicate with their teams easily",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "A deep understanding of the technology used in their area of product which allows them to communicate with their teams easily\nCan develop release testing which will pick up technical bugs and issues before they reach the customer",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Understands all the technology that impacts their area of product to make effective decisions\nEffectively spots and unblocks technological interdependencies for the team that would have slowed progress\nUnderstands the requirements of support and compliance from a technical side to successfully launch new technical features to different markets",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Understands the technology that is used across all of Automata's products to make effective decisions\nDrives innovation of the technology used by teams to deliver new products and capabilities with Technical leaders support\nCan articulate the trends in technology in the market and how that impacts Automata",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "A leading voice who drives how emerging technologies should be used in Automata to increase the impact we can have\nA deep understanding of technology trends across the market and uses that to drive Automata's product visions to \"skate to where the puck is going, not where it is\"",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "CAN SET STRATEGY AND CLEARLY COMMUNICATE RATIONALE": {
    "displayName": "Can set strategy and clearly communicate rationale",
    "category": "Product",
    "description":
      "PMs set strategy and influence others to think big about where we are headed, how we will get there, and uses this strategy to clarify priorities",
    "milestones": [
      {
        "summary":
          "Understands the strategy from the comany's to the team's\nCan articulate how their team fits into it the company strategy and takes the time to actively explain that to the team",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can take a business objective and key result for a team and with support break it down into a team strategy\nCan articulate this vision in a compelling way that gets others aligned and motivated behind it\nCan use the larger company strategy to derive clarity and inform their decision making in the team",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can take a business objective and key result for a team and independently break it down into a team strategy\nCan articulate this vision in a compelling way that gets others aligned and motivated behind it, and means that they are regarded as the \"vision holder\" within the team\nHas a large voice in the business area level strategy - constructively challenges and helps to improve and clarify it\nUses the company and area strategies to derive clarity and inform their decision making in the team",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Leads on the creation of a business area's strategy and owns the roll out of it to align the company behind it\nCan articulate this vision in a \"visionary\" way that excites the company and external parties on the direction the area is taking\nHas a large voice in the company level strategy - constructively challenges and helps to improve and clarify it",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Leads on the creation of the company strategy and owns the roll out of it to align the company behind it\nCan articulate this vision in a \"visionary\" way that excites the company and external parties on the direction Automata is taking\n",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "CREATES A COMPANY OF MISSIONARIES NOT MERCENARIES": {
    "displayName": "Creates a company of missionaries not mercenaries",
    "category": "Product",
    "description":
      "PMs are responsible for creating teams that are motivated to solve customer problems and achieve the teams outcomes.",
    "milestones": [
      {
        "summary":
          "Can articulate how the teams objectives fit into the company mission but needs support aligning and exciting a team or stakeholders behind this",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has developed a team to be primarily motivated by the impact they are having rather than their input\nThe team can see, feel, and articulate the impact this work has on achieving the company mission\nPM needs support aligning the key stakeholders behind the teams focus",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has shown they can take a demotivated team who feel their accountability is as individual experts and turned them into a team that truly owns the outcomes their team deliver\nThe team should be primarily motivated by this impact rather than their input and can see, feel, and articulate the impact this work has on achieving the company mission\nPM has demonstrated they can take a large group of stakeholders and can align them behind a teams mission such that they are pushing for quicker and more impactful results",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has made an area of the company feel motivated behind and empowered to influence key company objectives such that the teams within in it work as autonomously as possible to deliver the required outcomes\nThe team can see, feel, and articulate the impact this work has on achieving the company mission\nThey have aligned and excited the leadership group about the mission of the area such that it is seen as a company priority",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has shown they can motivate the entire company behind the mission such that every individual feels motivated behind the direction the company is going and actively wants to know how they can help deliver it\nCan articulate the company in such a way as to motivate external companies behind the direction Automata are going and to support us as partners",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "START WITH THE PROBLEM": {
    "displayName": "Start with the problem",
    "category": "Product",
    "description":
      "PMs are most directly responsible for ensuring their teams live and breathe this principle - \"Start with why\". To do it well, you must have a stubborn focus on understanding, refining, articulating the problem (or opportunity) your team is solving.",
    "milestones": [
      {
        "summary":
          "Gathers inputs to define a simple problem statement\nContributes to rather than leads on a simple articulation of that problem",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "The PM leads on problem definition by synthesising inputs from multiple angles to craft a single narrative\nThe PM ensures their understanding and articulation is continually evolved and improved \nTheir teams are not able to consistently explain the problem themselves, or how they are going to solve it in simple, plain english",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has repeatedly orientated whole teams around a single understanding of a problem\nThose teams are able to explain it themselves, and how they are going to solve it in simple, plain english\nThe PM ensures this understanding and articulation is continually evolved and improved by synthesising inputs from multiple angles to craft a single narrative",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can structure, set objectives and expectation for an area of the company in such a way as to ensure teams are motivated to deeply understand the problem and enhance the company's understanding of it\nCan take complex problem spaces, across a range of areas and articulate these with exceptional clarity to others\nDrives a culture of gaining clearer and clearer understanding of a problem",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has Initiated, structured and led problem discovery into new markets.\nCan cut through multiple levels of ambiguity and get to the heart of the problem, and take others with them on this journey, allowing for higher certainty around problems needed to be solved by Automata's products and services.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "THINK BIG, START SMALL, SHIP OFTEN": {
    "displayName": "Think big, start small, ship often",
    "category": "Product",
    "description":
      "PMs are most directly responsible for ensuring teams constantly fight to scope smaller to learn faster, balancing an ambition to think expansively about the opportunity. They drive a culture of breaking down problems to ensure the team ship impactful changes at a regular cadence",
    "milestones": [
      {
        "summary":
          "Actively contributes to the exploration of multiple solutions to the problem statement\nNeeds support to make strong scoping decisions\nSeeks to understands blockers to frequent releases",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Effectively represents various inputs & tradeoffs to drive accurate scoping decisions.\nFacilitates effective scoping sessions with team, clearly documents decisions made and links them back up to the big picture.\nEnsures teams are focused by default on scoping small\nInvests in reducing the friction of releasing improvements",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Steers team explorations of multiple solutions to the problem statement efficiently\nAnchors explorations to a clear understanding of the problem area.\nChallenges the team to question their assumptions about what\u2019s actually needed and sharpens the entire team\u2019s thinking about what\u2019s essential, and when.\nEnsures the whole team can link this tight scope back to the big picture",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Facilitates concept explorations with high ambiguity and complexity.\nWorks across multiple teams to form coherent think big and start small approaches\nShares best practice from within Automata across areas and teams\nInvests in infrastructure and resource to reduce the friction of releases for the area",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can create and communicate a company level product vision and strategy in a way that enables areas and teams to take it and break it down peice by peice to take a think big and start small approach\nShares best practice from inside and outside of Automata and implements it to ensure the company is continuously improving",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "TACKLE THE BIGGEST RISKS AT THE START AND SHIP TO LEARN": {
    "displayName": "Tackle the biggest risks at the start and ship to learn",
    "category": "Product",
    "description":
      "PMs identify the biggest assumptions and risks to build clear hypotheses for learning. PMs are hungry for insights, open to proving themselves wrong, and most of all, share and act on the learning to deliver valuable product.",
    "milestones": [
      {
        "summary":
          "Understands the main risks we need to learn more about but needs support identifying these risks and determining what action is needed to learn about them\nShares any learning they get with the wider team\nBuys into the idea of shipping a release and monitoring it closely as a way of learning",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Independently defines the main risks we need to learn more about and determines what action is needed to learn about them\nDrives team involvement in tackling biggest risks\nCan effectively weigh up the pros and cons of specific situations to determine when the reward outweighs the risk of shipping to learn\nLeads on setting up the appropriate monitoring of the release to learn as much as possible from it",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Particularly strong at exposing hidden assumptions and product risks\nInnovates with new approaches to learn faster and tackle risks earlier\nCreates teams that are motivated by and contribute to this innovation\nShares learnings with the whole company",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Applies skill in this area to the most complex and ambiguous problem areas\nAble to think coherently across an entire area of the business to define what we need to learn and how best to learn it\nShares learnings from different parts of the business to ensure everyone is working in the fastest way we know",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Brings new best practice from outside Automata into the way we work to ensure we are leaders in this",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "SHIP THE WHOLE CUSTOMER EXPERIENCE": {
    "displayName": "Ship the whole customer experience",
    "category": "Product",
    "description":
      "PMs need to drive not just the development of a new feature or improvement, but the entire experience that surrounds it. This includes working across the business to determine: how new & existing customers find out about it, what the monetisation approach is, how sales will sell and how Customer Support will support it.",
    "milestones": [
      {
        "summary":
          "Understands the interplay between the 4 pillars of a successful product (Product, Business Model, Channels, Market/Customers) \nNeeds support to identify and consider the broader customer experience beyond their immediate area of focus",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Collaborates with marketting, customer support, and finance on the launch of new features or products successfully\nDefines new and existing customer onboarding to a feature or product\nEnsures all relevent documentation required for the success of the product or feature are up to date",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "A leading voice for all 4 pillars around a product or feature\nHas demonstrated that they can pull all 4 pillars together to create a successful product",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Has demonstrated that they can repeatedly  pull all 4 pillars together to create a successful product\nHas a key voice in how Automata needs to change it's approach to each of the 4 pillars to be able to achieve the company's product strategy",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "A leading voice in the company and innovator on Automata's approach to all 4 of the pillars and how it needs to change to achieve the product vision",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DELIVER AN OUTCOME": {
    "displayName": "Deliver an outcome",
    "category": "Product",
    "description":
      "What impact did your team have? PMs create teams that celebrate a result not a release",
    "milestones": [
      {
        "summary":
          "Needs guidance to deliver outcomes with a team\nIs a role model for being motivated by delivering outcomes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can demonstrate meaningful impact they have delivered to customers and our business\nAligns the team around outcomes they\u2019re fighting for",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Consistently delivers meaningful outcomes indepently to customers and our business at a level that affects Automata's strategy\nCreates teams and stakeholders that celebrate impact not releases\nAlways communicates from a starting point of the impact something is or could have",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can create area's of the company to deliver meaningful impact at a strategic level\nCreates an area that celebrates impact not releases\nGives recognition to others based on outcomes rather than inputs",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Create's a company that strives to be more and more impactful",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "OWNERSHIP": {
    "displayName": "Ownership",
    "category": "Product",
    "description":
      "PMs own it - for their product area, for their team, for Automata. They grind it out, constantly looking for a way forward to deliver value.",
    "milestones": [
      {
        "summary":
          "Is a strong voice for owning the problem within the team\nCan be trusted to deliver on promises and follow up on next steps.\nWilling to do the boring work to make something happen",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Consistent and reliable ownership of the problem through to the solution within the team.\nCan identify risks and issues and brings it to the attention of relevant stakeholders for resolution",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Consistent and reliable ownership of the problem through to the solution within and across teams, peers, and partners.\nNo excuses. Accountable and positive in all conditions. Takes ownership of problems and challenges within their remit and doesn't apportion blame to others.\nIdentifies risks and issues and proactively finds solutions to any obstacles\nSeen as fully dependable to deliver on what they have taken on",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Committed ownership of the problem through to the solution within and across teams, peers, and partners.\nNo excuses. Accountable and positive in all conditions. Takes ownership of problems and challenges within their remit and outside their domain and doesn't apportion blame to others. \nThinks about how to help Automata succeed, not just their specific team or area but as a whole.\nIdentifies and anticipates risks and issues and proactively finds solutions to any obstacles.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Own it for Automata - expansive, committed ownership of our problems, processes, and opportunities.\nGoes above and beyond to take on and solve issues outside of their remit to help others and Automata move forwards\nIt's not about job role it's about moving things forward",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "DECISIVENESS": {
    "displayName": "Decisiveness",
    "category": "Product",
    "description":
      "PMs are decisive. They quickly and assertively make meaningful decisions that enable us to deliver value for our customers at speed. They also help others make decisions faster by being appropriately inclusive but persuasive. They thrive in ambiguity and create clarity for those around them.",
    "milestones": [
      {
        "summary":
          "Can assess options effectively and make a recommendation on the route we should take. Escalates issues appropriately.\nNeeds support to make meaningful decisions quickly.\nDoesn't procrastinate. Optimises for constant progress, aims to make progress",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Decisive and assertive. Creates clear escalation paths to resolve issues within the team and validate meaningful decisions quickly.\nIs not consensus driven. Strong opinions, (mostly) weakly held.\nDoesn't procrastinate. Optimises for constant progress, aims to make progress",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Decisive and assertive. Resolves issues within the team and makes meaningful decisions quickly. Doggedly drives others to make decisions quickly too.\nExpertly handles ambiguity by being flexible and by creating clarity for those around them. \nComfortable not knowing and acting with incomplete information as long as the team is unblocked and directionally correct.\nDoesn't procrastinate or over-analyze. Is a living example of 'Progress over Perfection'. Ensures the team are unblocked, making constant progress.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Makes decisions at an area level, inspite of being further from the detail, can take the hardest decisions to ensure the teams remain unblocked and moving at pace in the right direction",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can get large groups of people aligned and behind these decisions rather than making them feel like \"disconnected decisions from the top\"",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "A BRILLIANT COMMUNICATOR": {
    "displayName": "A brilliant communicator",
    "category": "Product",
    "description":
      "PMs inspire and motivate others to work towards a clear, compelling vision. They communicate clearly, concisely and assertively. They build confidence and influence mindsets, through being opinionated and persuasive.",
    "milestones": [
      {
        "summary":
          "Communicates with the team frequently and consistently. Ensures the team are aware of initiatives and priorities.\nPro-actively seeks information that might help the team communicate more effectively.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Communicates with the team, product leadership and key stakeholders frequently and effectively. \nCan take a variety of diverse inputs and synthesise these into a compelling story. \nEnsures all involved are aware of the team strategy, initiatives and priorities.\nActively works to ensure their product team is aligned and engaged.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Can clearly, concisely and assertively articulate the problems being solved, the roadmap, its benefits and tradeoffs. \nAble to anticipate common feedback and address it proactively.\nDevelops an opinion and can argue persuasively without being defensive or combative.\nCan influence the hearts and minds of a team of people ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Crafts a clear narrative to gain buy in and inspire others. Sets clear context and framing, shares thinking, uses reasoning, rational, and enthusiasm when communicating. \nTakes a strong stand and builds confidence.\nActively works to ensure teams are aligned and engaged and can anticipate and read the emotion of a room to make their narrative inclusive and inspiring\nImproves how we communicate and helps others to improve how they communicate through defining best practices and communication channels in the company.\nCan influence the hearts and minds of an area of the company ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Is seen as an inspirational communicator who can change the mood of the company\nIs compelling in their narrative to get buy in and alignment\nLeads on improving how we communicate and helps others to improve how they communicate through defining best practices and communication channels in the company.\nExpresses their opinion externally, through writing or speaking regularly to external audiances",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
  "COLLABORATES & EMPOWERS": {
    "displayName": "Collaborates & empowers",
    "category": "Product",
    "description":
      "PMs build engaged, high-performing collaborative and inclusive teams, ensuring that they fully leverage the best from those around them.",
    "milestones": [
      {
        "summary":
          "Collaborates effectively within the team.\nIs open to, and reacts well to, feedback and looks for opportunities to improve how to work well together within the team.",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Collaborates effectively with team, peers and stakeholders. Is warm and empathetic and communicates openly.\nConsistent and predictable, which means they\u2019re easy to work with because there are no surprises.\nLooks for opportunities to improve how to work well together within the team.\nProactively seeks feedback to improve how they work",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Creates teams with collaborative and empowered cultures\nThe environment they create in their teams reflects Google's Project Aristotle's findings of the culture in the most successful teams, for more info look here: https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Creates a culture for an area of the company that has a collaborative and empowered culture\nThe environment they create in their teams reflects Google's Project Aristotle's findings of the culture in the most successful teams, for more info look here: https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "Creates a company with a collaborative and empowered culture\nThe environment they create in their teams reflects Google's Project Aristotle's findings of the culture in the most successful teams, for more info look here: https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html ",
        "signals": ["TBC"],
        "examples": ["TBC"]
      }
    ]
  },
}

const CheckTracks: TracksT<TrackId, Category> = Tracks
