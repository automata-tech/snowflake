// @flow

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'FRONT_END': Track,
  'BACK_END': Track,
  'LINUX': Track,
  'SYS_PROG': Track,
  'FIRMWARE': Track,
  'APPLIED_ROBOTICS': Track,
  'MFG_TOOL': Track,
  'SW_QA': Track,
  'DEV_OPS': Track,

  'CTRL_MODEL': Track,
  'TRAJ_MODEL': Track,

  'IMPACT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,

  'PROF_DEV': Track,
  'DEV_DESIGN': Track,
  'WELLBEING': Track,
  'INSPIRE': Track,

  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'HIRING': Track,
  'COMMUNITY': Track,
|}

export const tracks: Tracks = {
  "FRONT_END": {
    "displayName": "Front-End",
    "category": "Software",
    "description": "Ability to create browser-side applications, knowledge of the associated technologies (HTML, CSS, JavaScript), understanding of the domain-specific challenges and best practices",
    "milestones": [ {
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Implemented sticky footer on a page",
        "Hooked up the action to update a field from a stream",
        "Built a form using our mixin",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Built loop control input component",
        "Created shared buttons template",
        "Built modal system",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
      ],
      "examples": [
        "Optimized webpack builds",
        "Designed Viewer lazy loading",
        "Implemented modal abstraction",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed the form builder mixin",
        "Implemented Viewer SVG timeline",
        "Designed and pioneered Observer-based notification system",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Invented CSS in JS",
        "Defined and drove migration strategy to TypeScript",
        "Implemented unidirectional data flow to completion",
      ],
    }],
  },

  "BACK_END": {
    "displayName": "Back-End",
    "category": "Software",
    "description": "Ability to create server-side applications, knowledge of the associated technologies (HTTP, Websocket, Databases and the ones we use in the company: Go and SQLite), understanding of the domain-specific challenges and best practices",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds endpoints using our request architecture",
        "Reviews small PRs with another developer",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Added releaseToken trigger on session expiry",
        "Added a toolpath migration endpoint",
        "Called the AuthManager correctly",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Identified need for new session storage",
        "Acted as caretaker for the protobuf map",
        "Updated codebase dependencies",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Implemented API session system",
        "Implemented toolpath calculation integration with libtoolpath",
        "Built websocket server",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed lock context architecture",
        "Designed authentication architecture",
        "Created toolpath migration system",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, and selected Go as Automata's statically typed language",
        "Defined Choreograph backend architecture and migration plan",
        "Defined and implemented proprietary IP core to the company's success",
      ],
    }],
  },

  "LINUX": {
    "displayName": "Linux System",
    "category": "Software",
    "description": "Ability to create Linux commands and daemons, knowledge of the associated technologies (Linux, syscalls and the ones we use in the company: Go and C++), understanding of the domain-specific challenges and best practices (build systems, etc), able to engineer our update system to be reliable and adapt our Yocto distribution",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "SYS_PROG": {
    "displayName": "System Programming",
    "category": "Software",
    "description": "Ability to maintain complex system applications (C++, ZeroMQ, protobuf) and their build systems (CMake), understand of the domain-specific challenges (threading, network) and best practices, knowledge of cryptography",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "FIRMWARE": {
    "displayName": "Firmware",
    "category": "Software",
    "description": "Ability to write software for microcontrollers (e.g. ARM Cortex M) in a low level language (e.g. C) using real time operating systems (e.g. FreeRTOS), peripherals and interrupts. Knowledge of communications protocols (e.g CAN, SPI, I2C) and JTAG/SWD debugging tools (e.g J-Link)",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "APPLIED_ROBOTICS": {
    "displayName": "Applied Robotics",
    "category": "Software",
    "description": "Ability to integrate solutions to different systems (e.g. Embedded C, Linux System, Web Client) in order to provide fundamental robotic features, adaptation to the system domain-specific problems, understanding of efficient math and programming",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "MFG_TOOL": {
    "displayName": "Manufacturing Tooling",
    "category": "Software",
    "description": "Ability to create tools and applications that will be used in the manufacturing process, knowledge of the associated technologies (Python, ansible, etc), deployment, contact with Tharsus",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "SW_QA": {
    "displayName": "QA",
    "category": "Software",
    "description": "Ability to write and perform tests in an automated or manual fashion, understanding of the different system quirks toward testing, able to execute tests and gather feedback effectively",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "DEV_OPS": {
    "displayName": "DevOps",
    "category": "Software",
    "description": "Ability to deploy and maintain infrastructure (cloud, local, etc), knowledge of performance, scaling and security, expertise with build pipelines",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "CTRL_MODEL": {
    "displayName": "Controls Modelling",
    "category": "Robotics",
    "description": "Ability to prototype and model control systems (using Matlab and Simulink), knowledge of controller designs and associated algorithms, understanding of dynamics, ability to read and use technical papers on robotics",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "TRAJ_MODEL": {
    "displayName": "Trajectory Planning Modelling",
    "category": "Robotics",
    "description": "Ability to prototype and model kinematics and planning systems (using Matlab and Simulink), knowledge planning and solving algorithms, understanding of kinematics and motion planning, ability to read and use technical papers on robotics",
    "milestones": [{
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "TODO",
      "signals": [
        "TODO",
        "TODO",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }],
  },

  "IMPACT": {
    "displayName": "Impact",
    "category": "Execution",
    "description": "Delivers well-scoped work aligned to KPIs, on time, to budget, harmoniously with the wider team and company goals",
    "milestones": [{
      "summary": "Effectively deliver on well defined individual tasks",
      "signals": [
        "Estimates tasks accurately",
        "Delivers scoped projects on time",
        "Can write confidently about their approach",
      ],
      "examples": [
        "TODO: Wrote the technical spec for featured post images",
        "TODO: Delivered stream item support for email digests",
        "TODO: Delivered payment history dashboard",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Researches different approaches before beginning",
        "Balances execution and perfection appropriately",
        "Defines milestones and holds self accountable for reaching them",
      ],
      "examples": [
        "TODO: Delivered promo editor",
        "TODO: Delivered audio uploading for web client",
        "TODO: Executed the recommends to claps backfill",
      ],
    }, {
      "summary": "Effectively delivers small personal projects within a small team",
      "signals": [
        "Effectively delegates tasks to others",
        "Considers and integrates business KPIs into project planning",
        "Chooses and owns project strategy based on context",
      ],
      "examples": [
        "TODO: Ran project retro to assess improvement opportunities",
        "TODO: Completed launch checklist unprompted for well controlled rollout",
        "TODO: Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Accountable for delivery of high impact projects through a large team, or with significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster through strategic prioritisation",
        "Manages cross-dicsipline issues between teams and projects",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "TODO: Oversaw technical delivery of Hightower",
        "TODO: Managed infrastructure migration to VPC",
        "TODO: Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      "summary": "Understands the big picture, manages major company pushes, delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "TODO: Managed technical migration to SOA",
        "TODO: Lead technical delivery of 10/7",
        "TODO: Delivered multi-month engineering project on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "Execution",
    "description": "Shares relevant information with the right people, at the right time, and listens actively",
    "milestones": [{
      "summary": "Communicates effectively to peers and stakeholders, asks for help and acts upon feedback",
      "signals": [
        "Effectively communicates status of projects",
        "Happy to collaborate with others",
        "Confident asking for help when appropriate",
      ],
      "examples": [
        "TODO: Updated The Watch before running a backfill",
        "TODO: Updated project status changes in Asana promptly",
        "TODO: Gave thoughtful check-in and check-out comments",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, keeps timelines clear",
      "signals": [
        "Improves active listening skills",
        "Escalates issues and risks to stakeholders",
        "Knows which tools are appropriate for different types of communication",
      ],
      "examples": [
        "TODO: Received and integrated critical feedback positively",
        "TODO: Created cross-team Slack channel for payments work",
        "TODO: Spoke to domain experts before writing spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and gets buy-in for projects",
      "signals": [
        "Notices and resolves communication blocks in the team",
        "Anticipates and flags up risks to the schedule in plenty of time",
        "Manages stakeholder expectations with empathy",
      ],
      "examples": [
        "TODO: Directed team response effectively during outages",
        "TODO: Gave a substantial Eng All Hands presentation on React",
        "TODO: Gave notice of upcoming related work in Eng Briefing",
      ],
    }, {
      "summary": "Communicates complex ideas skilfully and with nuance, establishes alignment within the wider org",
      "signals": [
        "Communicates project risk and tradeoffs skilfully and with nuance",
        "Contextualises and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "TODO: Lead off-site workshop on interviewing",
        "TODO: Wrote Medium's growth framework and rationale",
        "TODO: Aligned the entire organisation around claps",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, communicates long term vision and mission for the org, moves beyond broadcasting, sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "TODO: Organised half year check-in company offsite",
        "TODO: Created the communication plan for a large organisational change",
        "TODO: Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft/Mastery",
    "category": "Execution",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Spends time planning before beginning to execute ",
        "Receives regular reviews on their work throughout projects",
        "Independently creates supporting documentation for their work ",
      ],
      "examples": [
        "TODO: Caught a bug on Hatch before it went live",
        "TODO: Landed non-trivial PR with no caretaker comments",
        "TODO: Wrote hermetic tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of products - improves the current process and systems",
      "signals": [
        "Works with the customer perspective in mind ",
        "Gathers and integrates feedback with little prompting ",
        "Let's work 'die' when it's right to do so",
      ],
      "examples": [
        "TODO: Requested tests for a PR when acting as reviewer",
        "TODO: Reduced the number of zelda fitzgerald exceptions",
        "TODO: Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better delivery of work",
        "Delivers meaningful feedback to others on their work in the project",
        "Chooses tools to improve ongoing quality of work ",
      ],
      "examples": [
        "TODO: Improved PRB to run the same volume of tests faster",
        "TODO: Simplified hermetic test data modification",
        "TODO: Created fixture system for visual quality",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle issues",
      "signals": [
        "Builds upon structures and systems to eliminate recurring errors within team",
        "Is the voice of quality in the team, keeping the focus for other members",
        "Coordinates priorities across teams with input from POs",
      ],
      "examples": [
        "TODO: Added code coverage reporting to iOS CI pipeline",
        "TODO: Iterated repeatedly to develop Medium's underlines solution",
        "TODO: Defined and oversaw plan for closing Heartbleed vulnerability",
      ],
    }, {
      "summary": "Enables and encourages entire org to make customer and quality a central part of their working process",
      "signals": [
        "Defines policies for their department that foster quality work",
        "Identifies and eliminates single points of failure throughout the org",
        "Secures time and resources from the leadership team to support great quality ",
      ],
      "examples": [
        "TODO: Negotiated resources for Fix-It week with exec team",
        "TODO: Instituted and ensured success of a 20% time policy",
        "TODO: Started The Watch",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "Execution",
    "description": "Challenges the status quo and effects positive organisation change outside the mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for change or improvement",
      "signals": [
        "Consistently works to improve daily daily tasks, systems & collaborates with colleagues ",
        "Raises meaningful conflict with colleagues to promote change",
        "Asks leadership team probing questions",
      ],
      "examples": [
        "TODO: Wrote about problems with TTR on Hatch",
        "TODO: Wrote about content policy problems on Hatch",
        "TODO: Reported a site issue in Github",
      ],
    }, {
      "summary": "Causes change which positively impacts a few individuals, or minor improvements to an existing product or system ",
      "signals": [
        "Proactively reviews and improves own workflow ",
        "Suggests improvements to team process unprompted ",
        "Creatively tries out new solutions, involving peers to bring about a new, innovative approach",
      ],
      "examples": [
        "TODO: Advocated on own behalf for a change in role",
        "TODO: Implemented flow typing for promises",
        "TODO: Audited web client performance in Chrome and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team",
      "signals": [
        "Demonstrates change opportunities with well defined examples",
        "Searches for opportunities outside of their regular domain",
        "Reviews, owns and possibly 'retires' systems that nobody wants or engages with",
      ],
      "examples": [
        "TODO: Defined style guide to resolve style arguments",
        "TODO: Proposed and implemented at-mentions prototype",
        "TODO: Implemented video for Android independently, unprompted",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact in their department",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or solutions within their area",
      ],
      "examples": [
        "TODO: Created the interviewing rubric and booklet",
        "TODO: Implemented and secured support for native login",
        "TODO: Migrated medium2 to mono repo and bazel",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the entire org ",
      "signals": [
        "Exemplifies collaboration in all projects, creating a 'lead by example' culture of excellence",
        "Galvanises the entire company and garners buy in for a new strategy",
        "Changes complex organisational processes",
      ],
      "examples": [
        "TODO: Migrated the organization from Holacracy",
        "TODO: Built Medium Android prototype and convinced execs to fund it",
        "TODO: Convinced leadership and engineering org to move to Medium Lite architecture",
      ],
    }],
  },

  "PROF_DEV": {
    "displayName": "Professional Development",
    "category": "Contribution to the team",
    "description": "Provides strategic support to individuals, help build a pathway to the career they want",
    "milestones": [{
      "summary": "Helps to identify the individuals strengths & weaknesses, encourages them to explore opportunities",
      "signals": [
        "Advocates on behalf of team members",
        "Shares opportunities for improvements and recognises achievements",
        "Explains available industry paths",
      ],
      "examples": [
        "TODO: Collected and delivered feedback",
        "TODO: Discussed career options and areas of interest informally",
        "TODO: Hosted a Floodgate Academy intern",
      ],
    }, {
      "summary": "Formally supports and advocates for one or more individuals, provides effective tools to help them solves their career problems",
      "signals": [
        "Notices if team members are not doing an appropriate role in their team",
        "Offers effective career advice to team members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "TODO: Set up and attended regular, constructive 1:1s",
        "TODO: Provided coaching on how to have difficult conversations",
        "TODO: Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organisation",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "TODO: Reviewed individual group member progression every 6 weeks",
        "TODO: Suggested appropriate group member for Tech Lead position",
        "TODO: Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Uses best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "TODO: Completed training on situational leadership",
        "TODO: Built a resourcing plan based on company, team, and individual goals",
        "TODO: Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a significant part of the org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identifies leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "TODO: Provided coaching to group leads",
        "TODO: Devised Pathwise curriculum for group leads",
        "TODO: Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "DEV_DESIGN": {
    "displayName": "Development Design",
    "category": "Contribution to the team",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse team",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the org improve",
      "signals": [
        "Reflects on situations that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organisational processes",
      ],
      "examples": [
        "TODO: Facilitated effective tactical meeting with empathy",
        "TODO: Explained tactical meeting format to a new hire",
        "TODO: Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and passes this data across to HR to positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organisational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to HR to help",
      ],
      "examples": [
        "TODO: Defined Frankenmeeting structure for small team",
        "TODO: Improved Watch on-call rotation scheduling",
        "TODO: Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops process and programs to solve ongoing organisational problems within small groups of people",
      "signals": [
        "Creates programs that meaningfully improve organisational diversity",
        "Solves long-standing organisational problems",
        "Reallocates resources to meet the businesses needs",
      ],
      "examples": [
        "TODO: Developed baseline team templates for consistency",
        "TODO: Created bug-rotation program to address ongoing quality issues",
        "TODO: Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organisational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyses existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organisational actions or norms",
      ],
      "examples": [
        "TODO: Connected mobile recruiting difficulties to focus on excellence",
        "TODO: Raised leadership level change discrepancies",
        "TODO: Analyzed the hiring rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for re-orgs",
      ],
      "examples": [
        "TODO: Lead efforts to increase number of mobile engineers",
        "TODO: Directed resources to meaningfully improve diversity at all levels",
        "TODO: Built the growth framework rubric",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "Contribution to the team",
    "description": "Supports the emotional well-being of team members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable common sense to handling personal situations",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "TODO: Ensured group members were taking enough vacation",
        "TODO: Put themself in another's shoes to understand their perspective",
        "TODO: Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Knows how to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "TODO: Coordinated a small celebration for a project launch",
        "TODO: Connected tedious A|B testing project with overall company goals",
        "TODO: Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, empowers individuals to have ownership of their work",
      "signals": [
        "Focuses on fostering a proactive mindset within their team, minimises reactive, emotional responses to change",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "TODO: Completed training on transference and counter transference",
        "TODO: Completed training on compromise and negotiation techniques",
        "TODO: Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of individuals and teams, including L&D, proactively searches for upskilling opportunities and focuses on retention of high performing employees",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Identifies ares for L&D, encourages focus and advocates for time spent in these areas",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "TODO: Relieved org tension around product direction by providing extra context",
        "TODO: Encouraged group members to focus on what they can control",
        "TODO: Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognises and points out narratives when appropriate",
        "Works to reshape narratives from victimisation to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "TODO: Converted group member from a problem haver to a problem solver",
        "TODO: Challenged false narrative and redirected to compassion and empathy",
        "TODO: Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "INSPIRE": {
    "displayName": "Inspire",
    "category": "Contribution to the team",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Offers help as soon as the notice someone is stuck",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "TODO: Completed training on diagnosing problems",
        "TODO: Unblocked a group member",
        "TODO: Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognises issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "TODO: Completed training on decision making",
        "TODO: Convinced a group member to solve a problem directly, rather than doing it for them",
        "TODO: Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behaviour change or performance plans",
      "signals": [
        "Notices and communicates proactively or poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "TODO: Worked with group member to address persistent communication failures",
        "TODO: Arranged a transfer to another team, resulting in improved performance",
        "TODO: Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognises heightened situations and toxic or aggressive interactions",
        "Inserts them-self into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "TODO: Empowered a team to drive forward amidst uncertainty",
        "TODO: Protected team from externalities so they could focus on goals",
        "TODO: Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organisational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "TODO: Turned around the performance of a problematic team",
        "TODO: De-escalated serious tensions between teams",
        "TODO: Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "Demonstration of culture/values",
    "description": "Provides support to colleagues, spreads knowledge, develops the team outside of normal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, develops relationship with new hires to provide onboarding support, conveys institutional knowledge",
      "signals": [
        "Makes them-self available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "TODO: Acted as an onboarding buddy",
        "TODO: Paired with an engineer to help them with an unfamiliar area",
        "TODO: Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realisations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "TODO: Shared interesting article with a team member to help with their growth",
        "TODO: Offered unprompted feedback to help growth, with empathy",
        "TODO: Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups and contributes to Automata’s shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase transparency and organisation of our collective knowledge",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "TODO: Gave a brown bag presentation on payments",
        "TODO: Wrote Hatch post on avoiding RDS backfill issues",
        "TODO: Wrote Medium-U content module",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Creates spaces for individuals to learn from and teach each other",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates regular discussions within the team and encourages speakers",
      ],
      "examples": [
        "TODO: Created and lead Medium's Women in Eng group",
        "TODO: Organized an Eng All Hands with an outside speaker",
        "TODO: Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and dev within the entire team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "TODO: Instituted the professional education budget for engineers",
        "TODO: Mentored mentors",
        "TODO: Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "Demonstration of culture/values",
    "description": "Promotes Automata to the outside world and establishes it as an attractive place to work",
    "milestones": [{
      "summary": "Represents Automata well externally, and positively influences individuals",
      "signals": [
        "Shares organisational successes with their network",
        "Attends Automata events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "TODO: Shared a Medium product launch post on Facebook",
        "TODO: Acted as a guide for a non-friend visitor to the office",
        "TODO: Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Automata",
        "Represent Automata appropriately, and well in public, online forums (Slack, Meetup groups etc.)",
        "Organises small-or medium-sized events that bring people to Automata",
      ],
      "examples": [
        "TODO: Volunteered as a helper for CODE2040 writing workshop",
        "TODO: Organized a short tour of the office by college students",
        "TODO: Talked at a Women Who Code event hosted at Medium",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Automata",
      "signals": [
        "Mentors or participates in a high visibility way",
        "Builds fruitful partnerships with external organisations",
        "Suggests thoughtful blog post content to Marketing that receives moderate traffic",
      ],
      "examples": [
        "TODO: Represented Medium on a panel at a conference of industry experts",
        "TODO: Established close ties with Creative Commons",
        "TODO: Built a durable, long-standing relationship with Code2040",
      ],
    }, {
      "summary": "Establishes Automata as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes them-self as an industry thought leader who attracts talent",
        "Publishes material about Automata’s technical and organisational innovations",
        "Leverages significant following to evangelise Automata",
      ],
      "examples": [
        "TODO: Published a paper on Medium technology in a peer-reviewed journal",
        "TODO: Authored joint-press release with EFF on DNT",
        "TODO: Published 'Why Content Editable Is Terrible' on the Medium engineering blog",
      ],
    }, {
      "summary": "Introduces Automata in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Automata",
        "Drives recognition os Automata in significant numbers",
      ],
      "examples": [
        "TODO: Published or interviewed in a mainstream newspaper or website outside tech",
        "TODO: Keynoted a conference with international attention",
        "TODO: Represented Medium in national televised media",
      ],
    }],
  },

  "HIRING": {
    "displayName": "Hiring",
    "category": "Demonstration of culture/values",
    "description": "Strengthens Automata's team by bringing in stand-out talent",
    "milestones": [{
      "summary": "Understands how to evaluate candidates for Automata and encourages new candidates into the pipeline",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly and proactively asks 'Talent' for ways to help",
      ],
      "examples": [
        "TODO: Completed interview calibration",
        "TODO: Set up casual sessions to practice asking questions",
        "TODO: Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Participates in interviews, helps the team make meaningful hiring decisions and helps to build a diverse pipeline",
      "signals": [
        "Provides quick, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "TODO: Added observable evidence for every rating",
        "TODO: Started a monthly brunch for candidates to meet Medium employees",
        "TODO: Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Advocates for empathetic interviewing",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "TODO: Wrote new interview question which meets our question quality criteria",
        "TODO: Brought candidates into our pipeline proactively, with a high conversion rate",
        "TODO: Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Expert at recognising and documenting values alignment in candidates",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "TODO: Planned engineering summit on interview process and training",
        "TODO: Organized and lead Medium's presence at a recruitment fair",
        "TODO: Started CODE2040 internship program",
      ],
    }, {
      "summary": "Invests in long-term relationships for critical roles",
      "signals": [
        "Sets the tone, around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "TODO: Talked with a senior candidate over many months to fill a critical role",
        "TODO: Organized efforts around convincing acquired engineers to join and stay",
        "TODO: Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "Demonstration of culture/values",
    "description": "Builds community internally and gives themselves to the team, champions and lives company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "TODO: Joined and actively participated in the web client guild",
        "TODO: Brought a small gift back from vacation for the team",
        "TODO: Wrote entertaining and informative Prod Ops writeups on Hatch",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other team members outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "TODO: Created onboarding bingo",
        "TODO: Brought shy and introverted people into a dominant conversation",
        "TODO: Volunteered as secretary for a team",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional responsibilities at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "TODO: Lead Watch cycles with little support while still contributing to projects",
        "TODO: Started and drove the LGBTQIA ERG",
        "TODO: Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond, serving the team without complaint",
        "Implements concrete programs to significantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "TODO: Devoted large amount of time to helping outside direct responsibilities",
        "TODO: Refactored hundreds of legacy Shepherd nodes",
        "TODO: Acted as sole maintainer of Boxen for years",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Automata’s values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "TODO: Organized wine and olive tasting offsite to Napa for the whole engineering org",
        "TODO: Devised, delivered and acted on findings from an engineer happiness survey",
        "TODO: Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
  },
}
