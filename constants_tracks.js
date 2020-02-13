// @flow

export type TrackId =
  'FRONT_END' | 'BACK_END' | 'LINUX' | 'SYS_PROG' | 'FIRMWARE' | 'APPLIED_ROBOTICS' |
  'DESKTOP_APPS' | 'DEV_OPS' | 'WEB_MASTERY' | 'DATABASES' | 'USER_EXP' | 'DATA_SCIENCE' |
  'CONTROLS_MATH' | 'CONTROLS_CONTROL_THEORY' | 'CONTROLS_SIMS' | 'CONTROLS_RESEARCH' | 'CONTROLS_SIMS' | 'CONTROLS_JIG_DESIGN' |
  'ELEC_DESIGN' | 'PCB' | 'CABLING' |
  'ELEC_SAFE' | 'EMC_RED' | 'FUNC_SAFE' | 'MACH_SAFE' | 'OCC_HAS' | 'RISK_ASSESS' | 'TECH_FILE' | 'WORLD_MARKETS' |
  'IMPACT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'PROF_DEV' | 'DEV_DESIGN' | 'WELLBEING' | 'INSPIRE' |
  'MENTORSHIP' | 'EVANGELISM' | 'HIRING' | 'COMMUNITY' |
  "IDEATION A" | "IDEATION B" | "REALISATION A" | "REALISATION B" | "VALIDATION/SIMULATION A" | "VALIDATION/SIMULATION B" | "IMPLEMENTATION A" | "IMPLEMENTATION B" |
  "DRIVING CHANGE A" | "DRIVING CHANGE B" | "DFM A" | "DFM B" | "NPI A" | "NPI B" | "DIAGNOSTIC TOOLS" | "PROCESS DOCUMENTATION" | "QUALITY CONTROL A" | "QUALITY CONTROL B" | "DRIVING CHANGE A" | "DRIVING CHANGE B" |
  "SUPPLY CHAIN MANAGEMENT A" | "SUPPLY CHAIN MANAGEMENT B" |
  "INVENTORY CONTROL A" | "INVENTORY CONTROL B" | "LOGISTICS " | "PRODUCTION MANAGEMENT A" | "PRODUCTION MANAGEMENT B" | "SYSTEM DEVELOPMENT A" | "SYSTEM DEVELOPMENT B" | "CHANGE MANAGEMENT" |
  "CHANGE CONTROL A" | "CHANGE CONTROL B" | "QUALITY TOOLS A" | "QUALITY TOOLS B" | "TEST & VALIDATION A" | "TEST & VALIDATION B" | "SUPPLIER DEVELOPMENT A" | "SUPPLIER DEVELOPMENT B" | "DRIVING CHANGE A" | "DRIVING CHANGE B" |
  "CUSTOMER FOCUS" | "DATA COLLECTION & ANALYSIS" | "UNDERSTANDING OF THE MARKET" | "UNDERSTANDING OF THE TECHNOLOGY" | "CAN SET STRATEGY AND CLEARLY COMMUNICATE RATIONALE" | "CREATES A COMPANY OF MISSIONARIES NOT MERCENARIES" | "START WITH THE PROBLEM" | "THINK BIG, START SMALL, SHIP OFTEN" | "TACKLE THE BIGGEST RISKS AT THE START AND SHIP TO LEARN" | "SHIP THE WHOLE CUSTOMER EXPERIENCE" | "DELIVER AN OUTCOME" | "OWNERSHIP" | "DECISIVENESS" | "A BRILLIANT COMMUNICATOR" | "COLLABORATES & EMPOWERS"

type TrackMilestone = {|
  summary: string,
  signals: string[],
  examples?: string[]
|}

export type Track = {|
  displayName: string,
  sillyName?: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: [
    TrackMilestone,
    TrackMilestone,
    TrackMilestone,
    TrackMilestone,
    TrackMilestone,
  ],
|}

type Tracks = {
  [TrackId]: Track,
}

export const tracks: Tracks = {
  "FRONT_END": {
    "displayName": "Front-End",
    "sillyName": "Front-End Sorcery",
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
    "sillyName": "Back-End Wizardry",
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
        "Updated codebase dependencies",
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
        "Acted as caretaker for the Brain data parsing",
        "Implemented toolpath calculation integration with libtoolpath",
        "Built websocket server",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Ensures modern security principles are being followed",
        "Builds reliable systems able to recover from errors, which are logged for debugging and audit purposes",
      ],
      "examples": [
        "Created toolpath migration system",
        "Designed lock context architecture",
        "TODO",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Integrated a system enabling the automatic upload of a wide range of metrics with different granularity to the cloud",
        "Designed the system so it is able to handle the C10k problem (and similar scaling issues)",
        "TODO",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Has given talks on system design and architecture and published articles regarded as essentials in the industry",
        "Championed the use of logging processing in order to predict faults and report problems before they happen",
        "TODO",
      ],
    }],
  },

  "LINUX": {
    "displayName": "Linux System",
    "sillyName": "Linux System Druidry",
    "category": "Software",
    "description": "Ability to create Linux commands and daemons, knowledge of the associated technologies (Linux, syscalls and the ones we use in the company: Go and C++), understanding of the domain-specific challenges and best practices (build systems, etc), able to engineer our update system to be reliable and adapt our Yocto distribution",
    "milestones": [{
      "summary": "Works effectively on an established Linux system, following current best practices",
      "signals": [
        "Understanding of the basic concepts of Linux (daemons, shells, libraries, exit status, signals, etc)",
        "Knowledge of basic Linux commands and build systems (coreutils, configure, automake, Makefile, etc)",
        "Working knowledge of Docker",
      ],
      "examples": [
        "Wrote a shell script to automate a task",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Extends established Linux system and administer simple Linux systems completely",
      "signals": [
        "Understands advanced Linux concepts (syscalls, fds, networking, etc)",
        "Able to proeficiently administer a Linux system (systemd, cron, ip, network stack, etc)",
        "Proeficiency with Docker",
      ],
      "examples": [
        "Wrote your own Dockerfile from scratch",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Designs and maintains complete Linux systems and demonstrates a nuanced understanding of its architecture",
      "signals": [
        "Able to make changes on our Yocto recipes",
        "Maintains our update system components",
        "Able to write complex programs administering a Linux system reliably and autonomously based on limited inputs",
      ],
      "examples": [
        "Wrote a delta-system to update network configuration",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Builds complex, reusable Linux systems (and their build systems) that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Acts as maintainer of our whole Linux system",
        "Optimizing Yocto build (time and size) while enabling platform developers' jobs",
        "Deep understanding of Linux security (secure boot, disk encryption, etc)",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Is an industry-leading Linux expert and sets strategic direction for Linux usage in the dev team",
      "signals": [
        "Deep understanding of the Linux kernel, especially the network stack",
        "Able to submit kernel patches and create kernel modules",
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
    "sillyName": "System Programming Archery",
    "category": "Software",
    "description": "Ability to maintain complex system applications (C++, ZeroMQ, protobuf) and their build systems (CMake), understand of the domain-specific challenges (threading, network) and best practices, knowledge of cryptography",
    "milestones": [{
      "summary": "Works effectively within established system architectures, following current best practices",
      "signals": [
        "Solid network understanding (TCP/IP, UDP, ZeroMQ, etc)",
        "Able to use concurrency primitives correctly (mutex, condvar, semaphores, etc)",
        "Creates and reviews small PRs",
      ],
      "examples": [
        "Added a new servo property to change the payload",
        "Added a new control message in the Control Engine",
        "Added a libautomata endpoint for the Backend",
      ],
    }, {
      "summary": "Develops new components in the existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Able to understand and maintain the CMake build system",
        "Good understanding of the peripherals (CANBus, CANOpen, Linux, etc)",
        "Knowledge of common design patterns and abstractions",
      ],
      "examples": [
        "Changed the libtoolpath goTo to return an Executor instead of setpoints",
        "Moved toolpath calculation to a thread",
        "TODO",
      ],
    }, {
      "summary": "Designs major new features and demonstrates an advanced understanding of system programming",
      "signals": [
        "Acts as primary maintainer for existing critical components",
        "Builds reliable systems able to recover from errors, which are logged for debugging and audit purposes",
        "TODO",
      ],
      "examples": [
        "Built a parser and compiler able to transform a toolpath into a serie of extendable instructions",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Makes architectural decisions that eliminate entire classes of bugs",
        "TODO",
      ],
      "examples": [
        "Built an extendable system to abstract communication with the other devices on the CANBus",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Is an industry-leading expert in system development and sets strategic direction for the dev team",
      "signals": [
        "Written their own thread scheduler",
        "Participated in a working group for the next version of C++",
        "Defines a long-term vision for the brain and ensures new features are in service of it",
      ],
      "examples": [
        "Presented a talk on CANBus parsing to the London C++ meetup",
        "TODO",
        "TODO",
      ],
    }],
  },

  "FIRMWARE": {
    "displayName": "Firmware",
    "category": "Software",
    "description": "Ability to write software for microcontrollers (e.g. ARM Cortex M) in a low level language (e.g. C) using real time operating systems (e.g. FreeRTOS), peripherals and interrupts. Knowledge of communications protocols (e.g CAN, SPI, I2C) and JTAG/SWD debugging tools (e.g J-Link).",
    "milestones": [{
      "summary": "Works effectively within established code base, following best practices",
      "signals": [
        "Uses hardware tools (e.g. JTAG, logic analyser, oscilloscope) to investigate simple issues",
        "Builds binaries and flashes hardware targets",
        "Creates and reviews small PRs",
      ],
      "examples": [
        "Debugged and fixed a simple SPI issue",
        "Created unit tests for existing modules",
        "Updated legacy code to conform with style guide",
      ],
    }, {
      "summary": "Adds new functionality to existing features, or minor improvements to existing architecture",
      "signals": [
        "Demonstrates an awareness of hardware features and limitations, using peripherals appropriately",
        "Assesses the architecture of existing code before making changes, refactors where appropriate",
        "Carefully considers timing and memory impact of modifications",
      ],
      "examples": [
        "Implemented a configurable debounce function for digital inputs",
        "Used hardware CAN ID filtering to speed up message parsing",
        "Refactored tasks to use FreeRTOS message queues",
      ],
    }, {
      "summary": "Designs new features or implements large architectural changes",
      "signals": [
        "Leads new feature design, implementation and verification",
        "Takes on infrastructure projects, where appropriate, to support new features or performance improvements",
        "Efficiently implements complex algorithms and functions, optimising for speed and memory usage",
        "Champions the use of new development tools and practises (e.g. static analysis, time profiling)",
      ],
      "examples": [
        "Implemented an ADC driver and task to read data from analog inputs",
        "Added new commutation methods, improving motor control",
        "Combined code bases into a common mono-repo",
        "Configured PCLint for static analysis",
      ],
    }, {
      "summary": "Designs systems which, across multiple devices, provides the functionality or infrastructure required to deliver key product features",
      "signals": [
        "Takes a lead role in systems design, selecting appropriate technologies and making appropriate buy vs build choices",
        "Designs real time systems with hard time constraints, performing low level optimisations where appropriate",
        "Is familiar with low level aspects of embedded Linux (e.g. BSPs, u-boot, kernel drivers, Yocto)",
        "Confident developing for various architectures (e.g. Cortex-M, Cortex-A, DSP cores)",
        "Implements or integrates communications layers in firmware, protocol design"
      ],
      "examples": [
        "Architected the integration of a distributed collision detection system",
        "Implemented a motion control protocol using CANOpen, enabling synchronous motion across multiple motors",
        "Improved real time performance by running critical code from tightly coupled memory",
        "Designed a bootloader and update protocol for loading firmware over CAN to all microcontrollers in the robot",
        "Customised a U-Boot build to initialise and support hardware secure boot features",
        "Created a CAN driver linux kernel module to better support hardware peripheral features",
      ],
    }, {
      "summary": "Is an industry-leading expert in embedded systems or sets the strategic long term direction of the embedded engineering team",
      "signals": [
        "Drives large and complex product scale projects, making long term high impact architectural decisions",
        "Steers the embedded hardware direction of the company, enabling exciting new features and products",
        "Asserts the company as an embedded authority through participation in industry wide committees, key-note speaking and publications",
        "Creates valuable IP for the company such as novel processing techniques or software libraries",
      ],
      "examples": [
        "Championed the use of new processor architecture, which enabled advanced control features and extend the product offering",
        "Designed an EtherCAT protocol stack from scratch, reducing licensing fees and creating IP for the company",
        "Created education materials widely accepted across the industry as a best practise guides",
        "Principal architect/contributor to an industry standard open source project (e.g. FreeRTOS, lwip)",
      ],
    }],
  },

  "APPLIED_ROBOTICS": {
    "displayName": "Applied Robotics",
    "category": "Software",
    "description": "Ability to integrate solutions to different systems (e.g. Embedded C, Linux System, Web Client) in order to provide fundamental robotic features, adaptation to the system domain-specific problems, understanding of efficient math and programming",
    "milestones": [{
      "summary": "Works effectively within established libraries, following current best practices",
      "signals": [
        "Able to modify underlying robotic code (e.g. IK) while following the particular codebase style and architecture",
        "Develops Matlab prototypes and implement them in the target platform following best practices",
        "TODO",
      ],
      "examples": [
        "Added the backend_is_valid_pose function to check pose validity",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Develops new functions and systems in the existing libraries, or minor improvements to the underlying architecture",
      "signals": [
        "Able to add new entrypoints (exported functions, types, etc) matching the platform style",
        "Understanding of the chosen platform intrisicasies and limitations",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Designs major new components and demonstrates an advanced understanding of the platform limitations and performance optimizations",
      "signals": [
        "Acts as a maintainer for specific components of the system (e.g. motion planning)",
        "Ensures modern software guidelines and architectures are being followed",
        "Designs tools and processes enabling fast prototyping and implementation",
        "Is the software quality voice in their team",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Builds complex, reusable systems that pioneer best practices and enable control engineers to work more effectively",
      "signals": [
        "Delivers complex software systems that enable robotics algorithms (performance, extensibility, tuning, etc)",
        "Expert at performance optimizations for at least one of the robotics platform",
        "Ensure correct usage of robotics libraries accross the company code",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Is an industry-leading expert in software development and sets the software strategic direction for the control team",
      "signals": [
        "Defines the company policy on software usage in robotics",
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

  "DESKTOP_APPS": {
    "displayName": "Desktop Applications",
    "sillyName": "Desktop Applications Hegemony",
    "category": "Software",
    "description": "Ability to create desktop applications (Python), knowledge of the associated technologies and framework (Qt, Tkinter, etc), understanding of the domain-specific challenges and best practices",
    "milestones": [{
      "summary": "Works effectively within established applications, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Develops new features in the existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of system constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Acts a caretaker for all of application code",
        "TODO",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "TODO",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Is an industry-leading expert in desktop developer and sets strategic direction for the dev team",
      "signals": [
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for desktop applications and ensures projects are in service of it",
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
    "sillyName": "DevOps Roguery",
    "category": "Software",
    "description": "Ability to deploy and maintain infrastructure (cloud, local, etc), knowledge of performance, scaling and security, expertise with build pipelines",
    "milestones": [{
      "summary": "Works effectively within established systems, following current best practices",
      "signals": [
        "Knows how to use a deployement script (terraform, ansible, etc)",
        "Can edit a Jenkinsfile to add a new step",
        "Understanding of AWS resources and concepts",
        "Understanding of Docker, compose, etc",
      ],
      "examples": [
        "Added a flake8 check to PPaT",
        "Created a Docker image for Munkeybutler and its database",
        "Added a new project to Jenkins",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Able to add a group of resources in terraform (e.g. EC2 instance, associated VPC, etc)",
        "Knows how to use Ansible",
        "Uses the Jenkins to deploy production products",
      ],
      "examples": [
        "Created a new instance to host Wordpress and configured the CDN to pass traffic correctly",
        "Added a package to an existing machine and deployed it using Ansible",
        "Created an Ansible playbook to deploy new manufacturing software changes to Tharsus",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new changes in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Ensures modern security principles are being followed",
        "Builds reliable systems able to recover from errors, which are logged for debugging and audit purposes",
      ],
      "examples": [
        "Wrote terraform modules used by the rest of team",
        "Fixed a service outage on our AWS hosting at 3am",
        "Performed a security audit and pentest",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Created template and reusable systems allowing anybody to host a new product in 15min with modern security and performance standards",
        "TODO",
        "TODO",
      ],
    }, {
      "summary": "Is an industry-leading expert in dev ops and sets strategic infrastructure direction for the company",
      "signals": [
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Designs transformational projects of significant complexity and scope",
        "Is a recognized figure in cloud hosting, scaling and migration communities",
      ],
      "examples": [
        "Maintains the terraform provider package for a cloud provider",
        "TODO",
        "TODO",
      ],
    }],
  },

  "WEB_MASTERY": {
    "displayName": "Web Mastery",
    "category": "Software",
    "description": "Ability to integrate different web services and components together, understanding of web best practices and systems, able to deliver and maintain web products effectively",
    "milestones": [{
      "summary": "Works effectively within framework, understands basic browser concepts, following current best practices",
      "signals": [
        "Able to effect minor changes to layout (HTML) and styling (CSS)",
        "Can deploy websites by following written instructions",
        "Understands resource loading priority",
      ],
      "examples": [
        "Changed the buy button label to 'Request a callback'",
        "Implemented a change and deployed it on your own",
        "Moved the loading of a font to the header to prevent FOUCs",
      ],
    }, {
      "summary": "Develops new content in the framework, or minor improvements to existing architecture",
      "signals": [
        "Able to fully maintain the deployed website",
        "Implementing various changes requested by the stakeholders (new pages, layout change, script changes)",
        "Understands Javascript and its usage, limitations and support",
      ],
      "examples": [
        "Updated the Wordpress plugins",
        "Knows how to generate and use a Lighthouse report",
        "Created new pages in the admin panel and added them to the menu",
      ],
    }, {
      "summary": "Designs major new features and demonstrates an advanced understanding of the platform and browser",
      "signals": [
        "Deep understanding of the integrated platforms and its third party components",
        "Able to deliver complex changes to the browser on all the supported devices and platforms",
        "Knowledge of web profiling and the current system bottlenecks",
      ],
      "examples": [
        "Reduced the load time to less than a second",
        "Removed all static assets from Wordpress (including plugin ones)",
        "Created a plugin enabling easy migration from staging to live by any team member",
        "Added automated testing of the page load time and appearance to prevent regressions",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable integrators to work more effectively",
      "signals": [
        "Knows all about performance optimizations and profiling of the platform",
        "Contributes to the ecosystem through support requests, plugins, themes or core platform changes",
        "Created tools and processes to speed up integration of new systems (plugins, scripts, etc) including regression and performance testing",
      ],
      "examples": [
        "Added monit to monitor the website load time and deployement status, running load and scaling tests",
        "Opened a ticket with WP Migrate DB Pro to keep the orders after a database deployement and got the issue fixed",
        "Built a system allowing to do a full deployement including rollback from the admin panel",
      ],
    }, {
      "summary": "Is an industry-leading expert in the chosen platform and sets strategic direction for the dev team",
      "signals": [
        "Has maintained live websites using the given platform on a wide-range of systems and versions",
        "Worked on the core development of the platform",
        "Has a portfolio of hundred of live websites",
      ],
      "examples": [
        "Given talks at conferences on the performance profiling and optimization of the given platform",
        "Created a plugin used by hundred of websites",
        "Worked 5 years as a lead developer at a high-profile web agency",
      ],
    }],
  },

  "DATABASES": {
    "displayName": "Databases",
    "sillyName": "Databases Masonry",
    "category": "Software",
    "description": "Ability to design maintainable and efficient database designs, knowledge of a wide range of data storing systems, understanding of querying language",
    "milestones": [
      {
        "summary": "Works effectively within established databases architectures, following current best practices",
        "signals": [
          "Understands SQL",
          "Able to craft queries that account for the chosen database intricacies",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Develops simple schemas, or minor improvements to existing schemas",
        "signals": [
          "Ability to craft a straight-forward and scalable schema in a recommended database system",
          "Knowledge of migrations and performance bottlenecks of that particular database",
          "TODO",
        ],
        "examples": [
          "Created a SQL schema for Munkeybutler",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Designs complex schemas and demonstrates an advanced understanding of database constraints and usage",
        "signals": [
          "Knowledge of multiple databases (milestone 1 and 2 for each)",
          "Understand of sharding, clustering, replication and other similar mechanisms",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Builds complex and efficient database setups that pioneer best practices and enable engineers to work more effectively",
        "signals": [
          "Ability to tune different database systems to get the most performance out of them",
          "Certified by the database vendor",
          "Interacts with the database community",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Is an industry-leading expert in database engineering and architecture and sets strategic direction concerning database usages for the dev team",
        "signals": [
          "Created their own database system",
          "Known in the community for their work and research",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      }
    ]
  },

  "USER_EXP": {
    "displayName": "User Experience",
    "sillyName": "User Experience Astrology",
    "category": "Software",
    "description": "Ability to design engaging, accessible and straight-forward user journeys on different devices (mobile, desktop, etc) and for different audiences (engineering, layman, etc)",
    "milestones": [
      {
        "summary": "Works effectively within established UX guidelines, following current best practices",
        "signals": [
          "Follows the company guidelines on UX",
          "Develop new or existing journeys and behaviors based on someone else's recommendation",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Develops new user journeys, or minor improvements to existing ones",
        "signals": [
          "Keep the user in their mind at all time",
          "Creates low-fidelity mockup using recommended tools",
          "Design with all supported devices and platforms in mind",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Designs major new user journeys and demonstrates a nuanced understanding of accessibility",
        "signals": [
          "Iterate design ideas through fast prototyping using recommended technologies",
          "Champion complete accessibility through all user journeys",
          "Deliver design through A/B testing (using data to support their choices)",
        ],
        "examples": [
          "Animated a workshop on accessible design for vision-impaired people",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Builds complex, reusable user journeys templates and documentation that pioneer best practices and enable engineers to work more effectively",
        "signals": [
          "Understands the theory (psychology, etc) behind HMI design and use it to produce the right feelings and reactions from the user",
          "Builds templates for common journeys and patterns to enforce good design and consistency across the product",
          "Oversee and review any work on user journeys to enforce consistency and high quality interactions",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Is an industry-leading expert in user experience and sets strategic direction for the dev team",
        "signals": [
          "Define the company philosophy towards user experience",
          "Has given talks on user experience based on data collected through different studies and analysis",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      }
    ]
  },

  "DATA_SCIENCE": {
    "displayName": "Data Science",
    "sillyName": "Data Science Dexterity",
    "category": "Software",
    "description": "Ability to extract insights from different data sources using a wide-range of tools and databases (Python, Google Sheets, Google App Script, SQL etc), knowledge of data science theory (data cleaning, etc), understanding of data visualisation (dashboards, plots, etc)",
    "milestones": [
      {
        "summary": "Works effectively within established frameworks and data sources, following current best practices",
        "signals": [
          "Able to use multiple data sources in order to extract insights",
          "Adds plots to existing dashboards used in decision-making",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Develops new simple data visualisation tools, or minor improvements to existing ones",
        "signals": [
          "Build resilient data processing able to clean data, improve signal-to-noise ratio",
          "TODO",
          "TODO",
        ],
        "examples": [
          "Cope with deletion of records in the delivery dashboard",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Designs major new data visualisation elements and demonstrates a nuanced understanding of performance constraints and data visualisations",
        "signals": [
          "Acts as a maintainer of multiple critical systems",
          "Ensure efficient processing through performance optimizations",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Builds complex, reusable frameworks and tools that pioneer best practices and enable engineers to work more effectively",
        "signals": [
          "Knowledge of the legal implications of data processing (security, GDPR, etc)",
          "Championed proper data processes all across the business",
          "Built a data visualisation framework enabling new plots and dashboards to be delivered in a day with efficient and clean presentation",
        ],
        "examples": [
          "Ensured that we are compliant with GDPR",
          "TODO",
          "TODO",
        ],
      },
      {
        "summary": "Is an industry-leading expert in data management and presentation and sets strategic direction for the company",
        "signals": [
          "Define company policy towards data management, processing and security",
          "Accountable for data breaches",
          "TODO",
        ],
        "examples": [
          "TODO",
          "TODO",
          "TODO",
        ],
      }
    ]
  },

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

  "ELEC_DESIGN": {
    "displayName": "Electronics Design",
    "category": "Electronics",
    "description": "Electronics circuit design and schematics capture for analog and digital circuits such as power supplies, motor control, analog to digital converters and microcontrollers.",
    "milestones": [{
      "summary": "Effective at prototyping, rework and testing simple circuits",
      "signals": [
        "Can read schematics, identify and locate components on a PCB",
        "Understands basic circuit theory (e.g. passives, ohm's law, power, potential divider)",
        "Is able to hand prototype simple circuits (e.g. strip/bread boards, dev kits) and rework existing PCBs",
        "Can use typical a bench tools e.g. programmable power supply and multimeter to measure continuity, voltages, currents and resistances",
      ],
      "examples": [
        "Performed a power on test for a simple PCB, using the schematic to identify key test points and voltages",
        "Designed and prototyped a simple circuit to drive low power LEDs",
        "Reworked a PCB, replacing SMD (e.g. 0603 passives, 0.5mm pitch ICs) and through hole components",
      ],
    }, {
      "summary": "Designs basic one off circuits and prototypes",
      "signals": [
        "Uses EDA tools (e.g. Altium) and best practises to create or edit schematics and part symbols",
        "Understands intermediate circuit theory (e.g. LDO voltage regulation, filters, transistors, op-amps, logic)",
        "Familiar with IPC 2611 and IPC 2612 standards for schematics documentation and symbols",
        "Selects appropriate components, able to read datasheets to find characteristics and application data",
        "Familiar with common serial communication physical layers (e.g. SPI, I2C, RS-232, RS-485, CAN)",
        "Uses simulations tools (e.g. LTSpice) to design and characterise circuits",
        "Comfortable using basic test equipment such as oscilloscope (with serial decode, math functions etc) or signal generators",
      ],
      "examples": [
        "Designed a prototype circuit to interface with and evaluate an I2C temperature sensor",
        "Sourced a suitable MOSFET to switch a high current LED from a logic circuit",
        "Simulated an RC and op-amp low pass filter to compare theoretical frequency responses",
      ],
    }, {
      "summary": "Designs basic production ready circuits",
      "signals": [
        "Designs complete circuits with mixed signal integrated ICs, (e.g. microcontrollers, ADC/DAC, sensors)",
        "Capable of low voltage power supply design, selecting the appropriate topology and sourcing components with the right characteristics",
        "Selects appropriate connectors for circuit interfaces considering mechanical requirements and employs defensive design best practises (e.g. current limiting, reverse polarity and ESD protection)",
        "Takes pricing and volume availability into consideration when selecting components. Prefers proven in use parts",
        "Considers thermal requirements and designs for efficiency appropriately",
        "Follows design for testability best practises (e.g. test points, diagnostic LEDs, debug interfaces), incorporates fault resilience and test planning into the design",
        "Follows design for EMI best practises (e.g. power and signal filtering)",
        "Comfortable using more specialist test equipment (e.g. spectrum analyzer, LCR meters, programmable loads)",
      ],
      "examples": [
        "Designed a mixed signal IO interface, with multiple power domains and controlled by a microprocessor",
        "Powered logic circuits from a 24V supply with a DC-DC buck converter",
        "Conducted an FMEA on a circuit to identify and address any critical failure modes",
      ],
    }, {
      "summary": "Designs complex circuits for volume production",
      "signals": [
        "Designs circuits with large ICs (high pin count SoC, application processors or FPGAs) and high speed signals/clocks",
        "Experienced in power electronics design, motor drive and electro-mechanical circuits",
        "Designs nuanced analog circuits such as very low noise sensing, high speed ADC or RF communications",
        "Low power design, battery charging circuits or mixed domain power management",
      ],
      "examples": [
        "Designed a circuit hosting an application processor with ethernet and USB interfaces",
        "Designed a three phase BLDC motor drive circuit",
        "Used an FPGA to implement high speed real time parallel processing",
      ],
    }, {
      "summary": "Is an industry-leading expert in electronics or sets the strategic long term direction of the electronics team",
      "signals": [
        "Designs large and high volume systems, comprised of multiple complex circuits",
        "Steers the electronic hardware direction of the company, enabling exciting new features and products",
        "Asserts the company as an electronics authority through participation in industry wide committees, key-note speaking and publications",
        "Develops valuable IP such as novel circuits or custom FPGA cores",
      ],
      "examples": [
        "Invented a novel and patentable sensing circuit",
        "Championed the use of new sensors which enable advanced control features and extend the product offering",
        "Created education materials widely accepted across the industry as a best practise guides",
      ],
    }],
  },

  "PCB": {
    "displayName": "PCB Design",
    "category": "Electronics",
    "description": "Ability to realise in volume printed circuit boards from schematics, designing for manufacturability and testability.",
    "milestones": [{
      "summary": "PCB CAD technician",
      "signals": [
        "Uses an EDA tool such as Altium to create and edit component footprints",
        "Manages a parts library, updating critical parameters and footprints as required",
        "Is familiar with IPC 7351 land pattern specifications",
        "Able to use the DRC and design validation tools to check for footprint issues",
        "Able to hand solder and and perform basic rework on PCBs with SMD (e.g. 0603 passives, 0.5mm pitch ICs) and through hole components",
      ],
      "examples": [
        "Created a new library part for a SOT-23 mosfet",
        "Replaced a resistor with a higher tolerance variant, updated the BOM and relevant design files",
        "Hand populated a bare PCB with SMD components and through hole connectors",
      ],
    }, {
      "summary": "Creates simple prototypes and one off PCB designs",
      "signals": [
        "Comfortable using EDA tools such as Altium to create two layer boards from schematic designs, using best practises",
        "Can place and route simple through hole and SMD parts (e.g. 0.5mm pitch connectors, 0402 passives, SOPIC and small QFP/QFN packages)",
        "Follows application note and datasheet guidance on component layout and routing best practises",
        "Capable of getting PCBs built in prototype quantities, generating manufacturing data and effectively communicating with the manufacturer",
        "Designs for ease of assembly and accessibility to important signals (e.g. easy to hand solder or rework where appropriate, accessible test points)",
        "Uses copper pours, via interconnects and stitching appropriately",
      ],
      "examples": [
        "Designed a breakout PCB to evaluate a small QFN package IC with probable test points",
        "Generated manufacturing files (gerbers, drill files, assembly drawings etc) and outsourced manufacturing",
        "Designed a PCB for mounting in a standard din rail enclosure, considering connector placement and mechanical tolerances",
      ],
    }, {
      "summary": "Creates production ready PCB designs",
      "signals": [
        "Comfortable using EDA tools such as Altium to create 4-6 layer mixed signal PCBs from schematic designs",
        "Able to route large, fine pitch devices (e.g. 100+ pin QFN or QFP)",
        "Liaises with mechanical designers to agree physical requirements such as connector location, board outline, z-axis constraints etc",
        "Applies EMC best practises (e.g. avoiding signal loops, shield ground planning, use of planes etc)",
        "Designs for manufacturability (e.g. fiducials, pick and place assembly, appropriate design rules for manufacturing design capability etc)",
        "Designs for compatibility with pin jig testing (e.g. placing appropriately sized and located test points with production test method in mind)",
        "Familiar with relevant IPC standards such as IPC 2221 generic PCB design, IPC 2614 board fabrication documentation and IPC 2615 PCB dimensions and tolerances",
      ],
      "examples": [
        "Designed a multilayer PCB with mixed analog and digital circuits, multiple power domains and a microprocessor",
        "Specified and outsourced pin jig design for production testing",
        "Created 3D step file of PCB and verified compatibility with mechanical fixings and fittings",
      ],
    }, {
      "summary": "Creates complex, volume production ready PCB designs",
      "signals": [
        "Comfortable using EDA tools such as Altium to create complex 8+ layer boards for schematic designs",
        "Capable of designing high speed impedance matched circuits, familiar with IPC 2141",
        "Able to place and route large IC devices such as high pin count BGA packages",
        "Can diagnose and provide solutions for complex EMC issues",
        "Designs for thermal performance, carrying out PDN analysis and optimising layout for current flow and heat dissipation",
        "Uses alternative PCB materials where appropriate to meet design requirements (e.g. flexible / flexi-rigid PCBs, metal core)",
        "Liaises with manufacturer to optimise design for high volume production, specifying correct materials and processes to meet PCB requirements",
      ],
      "examples": [
        "Designed a PCB with gigabit ethernet and USB interfaces",
        "Routed a 12x12, 0.4mm pitch BGA application processor with high speed DDR memory",
        "Improved thermal efficiency of drive circuit through better layout",
      ],
    }, {
      "summary": "Is an industry-leading expert in PCB design and manufacturing",
      "signals": [
        "Designs complex specialist PCBs for high volume production or scientific purposes (e.g. >100k units, >UHF speed signals)",
        "Asserts the company as an authority on PCB design through participation in industry wide committees, key-note speaking and publications",
        "Develops valuable IP such as novel PCB manufacturing techniques or custom ASIC or MEMS devices",
      ],
      "examples": [
        "Championed the use of new PCB manufacturing technologies which enable innovative product features",
        "Member of the IPC standards committee for PCB design",
        "Created education materials widely accepted across the industry as a best practise guides",
      ],
    }],
  },

  "CABLING": {
    "displayName": "Cabling",
    "category": "Electronics",
    "description": "Ability to produce detailed designs and specifications for a variety of cable assemblies, suitable for a wide range of applications and environments. Working knowledge of applicable standards, cabling conventions, common design formulas, available parts, tooling, inspection and manufacturing techniques.",
    "milestones": [{
      "summary": "Can specify simple cables ready for manufacturing internally or externally to the organisation",
      "signals": [
        "Recognises a range of connector and cable types (e.g. RF, power, multipole circular, coax, etc.)",
        "Can identify common cables used in consumer electronics (e.g. HDMI, USB, DVI, IEC)",
      ],
      "examples": [
        "Identifies appropriate connectors and cables, and produces a pinout diagram",
      ],
    }, {
      "summary": "Can confidently specify and design simple cable assemblies to a level suitable for external manufacturer",
      "signals": [
        "Understands how to dimension and tolerance a cable design",
        "Capable of using CAD to produce detailed 2D drawings, core diagrams, BOMs, etc.",
        "Familiar with standard symbols used in core diagrams (e.g. twisted cable, shielding, etc.)",
      ],
      "examples": [
        "Designing a 2-way power cable, fully specifying the parts and tooling required",
        "Specifying a simple RF cable, such as a 50 Ohm BNC to SMA cable",
      ],
    }, {
      "summary": "Able to specify and design a range of complex cable assemblies with some guidance",
      "signals": [
        "Familiar with appropriate IPC standards for cabling",
        "Can advise on appropriate reworking techniques (e.g. cable splicing, contact extraction, etc.)"
      ],
      "examples": [
        "Provides detailed assembly instructions and inspection criteria in designs",
        "Sources appropriate connectors based on the intended environment, expected voltage/current, signal types, dimensions, etc.",
      ],
    }, {
      "summary": "Can confidently design complex cable looms with little to no supervision",
      "signals": [
        "Reviews other designer's work",
        "Working knowledge of common design calculations (e.g. bundle size, voltage drop, current verses temperature rise, etc.)",
      ],
      "examples": [
        "Designing a multi-way 360 deg shielded cable for a harsh EMC environment",
        "Producing a detailed routing and clipping diagram for a complex machine cabling loom",
        "Specifying a custom fibre optic cable assembly for a high speed network"
      ],
    }, {
      "summary": "Highly experienced designer, having worked on a wide range of compex cable assemblies for different applications and environments",
      "signals": [
        "Mentors other members of staff in cable design",
        "Technical leader for engineering projects",
      ],
      "examples": [
        "Sets company-wide standards and procedures for cabling design and manufacture",
        "Designs automated test hardware for efficient inspection of large volume cable production",
      ],
    }],
  },

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
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Researches different approaches before beginning",
        "Balances execution and perfection appropriately",
        "Defines milestones and holds self accountable for reaching them",
      ],
    }, {
      "summary": "Effectively delivers small personal projects within a small team",
      "signals": [
        "Effectively delegates tasks to others",
        "Considers and integrates business KPIs into project planning",
        "Chooses and owns project strategy based on context",
      ],
    }, {
      "summary": "Accountable for delivery of high impact projects through a large team, or with significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster through strategic prioritisation",
        "Manages cross-dicsipline issues between teams and projects",
        "Leverages recognition of repeated project patterns",
      ],
    }, {
      "summary": "Understands the big picture, manages major company pushes, delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
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
    }, {
      "summary": "Communicates with the wider team appropriately, keeps timelines clear",
      "signals": [
        "Improves active listening skills",
        "Escalates issues and risks to stakeholders",
        "Knows which tools are appropriate for different types of communication",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and gets buy-in for projects",
      "signals": [
        "Notices and resolves communication blocks in the team",
        "Anticipates and flags up risks to the schedule in plenty of time",
        "Manages stakeholder expectations with empathy",
      ],
    }, {
      "summary": "Communicates complex ideas skilfully and with nuance, establishes alignment within the wider org",
      "signals": [
        "Communicates project risk and tradeoffs skilfully and with nuance",
        "Contextualises and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, communicates long term vision and mission for the org, moves beyond broadcasting, sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
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
    }, {
      "summary": "Increases the robustness and reliability of products - improves the current process and systems",
      "signals": [
        "Works with the customer perspective in mind ",
        "Gathers and integrates feedback with little prompting ",
        "Let's work 'die' when it's right to do so",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better delivery of work",
        "Delivers meaningful feedback to others on their work in the project",
        "Chooses tools to improve ongoing quality of work ",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle issues",
      "signals": [
        "Builds upon structures and systems to eliminate recurring errors within team",
        "Is the voice of quality in the team, keeping the focus for other members",
        "Coordinates priorities across teams with input from POs",
      ],
    }, {
      "summary": "Enables and encourages entire org to make customer and quality a central part of their working process",
      "signals": [
        "Defines policies for their department that foster quality work",
        "Identifies and eliminates single points of failure throughout the org",
        "Secures time and resources from the leadership team to support great quality ",
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
    }, {
      "summary": "Causes change which positively impacts a few individuals, or minor improvements to an existing product or system ",
      "signals": [
        "Proactively reviews and improves own workflow ",
        "Suggests improvements to team process unprompted ",
        "Creatively tries out new solutions, involving peers to bring about a new, innovative approach",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team",
      "signals": [
        "Demonstrates change opportunities with well defined examples",
        "Searches for opportunities outside of their regular domain",
        "Reviews, owns and possibly 'retires' systems that nobody wants or engages with",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact in their department",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or solutions within their area",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the entire org ",
      "signals": [
        "Exemplifies collaboration in all projects, creating a 'lead by example' culture of excellence",
        "Galvanises the entire company and garners buy in for a new strategy",
        "Changes complex organisational processes",
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
    }, {
      "summary": "Formally supports and advocates for one or more individuals, provides effective tools to help them solves their career problems",
      "signals": [
        "Notices if team members are not doing an appropriate role in their team",
        "Offers effective career advice to team members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organisation",
        "Works with team leads to elevate emerging leaders",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Uses best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
    }, {
      "summary": "Supports the development of a significant part of the org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identifies leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
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
    }, {
      "summary": "Identifies opportunities to improve existing processes to positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organisational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to HR to help",
      ],
    }, {
      "summary": "Develops process and programs to solve ongoing organisational problems within small groups of people",
      "signals": [
        "Creates programs that meaningfully improve organisational diversity",
        "Solves long-standing organisational problems",
        "Reallocates resources to meet the businesses needs",
      ],
    }, {
      "summary": "Thinks deeply about organisational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyses existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organisational actions or norms",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for re-orgs",
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
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Knows how to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, empowers individuals to have ownership of their work",
      "signals": [
        "Focuses on fostering a proactive mindset within their team, minimises reactive, emotional responses to change",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
    }, {
      "summary": "Advocates for the needs of individuals and teams, including L&D, proactively searches for upskilling opportunities and focuses on retention of high performing employees",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Identifies ares for L&D, encourages focus and advocates for time spent in these areas",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognises and points out narratives when appropriate",
        "Works to reshape narratives from victimisation to ownership",
        "Increases the psychological safety of the entire team",
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
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognises issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behaviour change or performance plans",
      "signals": [
        "Notices and communicates proactively or poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognises heightened situations and toxic or aggressive interactions",
        "Inserts them-self into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
    }, {
      "summary": "Resolves complex organisational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
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
    }, {
      "summary": "Mentors people proactively, and guides people to realisations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
    }, {
      "summary": "Teaches small groups and contributes to Automata’s shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase transparency and organisation of our collective knowledge",
        "Finds tools that work best for a team member's personality",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Creates spaces for individuals to learn from and teach each other",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates regular discussions within the team and encourages speakers",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and dev within the entire team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
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
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Automata",
        "Represent Automata appropriately, and well in public, online forums (Slack, Meetup groups etc.)",
        "Organises small-or medium-sized events that bring people to Automata",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Automata",
      "signals": [
        "Mentors or participates in a high visibility way",
        "Builds fruitful partnerships with external organisations",
        "Suggests thoughtful blog post content to Marketing that receives moderate traffic",
      ],
    }, {
      "summary": "Establishes Automata as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes them-self as an industry thought leader who attracts talent",
        "Publishes material about Automata’s technical and organisational innovations",
        "Leverages significant following to evangelise Automata",
      ],
    }, {
      "summary": "Introduces Automata in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Automata",
        "Drives recognition os Automata in significant numbers",
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
    }, {
      "summary": "Participates in interviews, helps the team make meaningful hiring decisions and helps to build a diverse pipeline",
      "signals": [
        "Provides quick, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Advocates for empathetic interviewing",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Expert at recognising and documenting values alignment in candidates",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
    }, {
      "summary": "Invests in long-term relationships for critical roles",
      "signals": [
        "Sets the tone, around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
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
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other team members outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional responsibilities at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond, serving the team without complaint",
        "Implements concrete programs to significantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Automata’s values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
    }],
  },

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
  "DRIVING CHANGE A": {
    "displayName": "Driving Change A",
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
  "DRIVING CHANGE B": {
    "displayName": "Driving Change B",
    "category": "Design Engineering",
    "description": "Identifying and Creating Meaningful Measurable Improvement",
    "milestones": [
      {
        "summary":
          "Can define, scope and execute small projects within a DMAIC framework and create realisable measurable performance measures for proposed outcomes",
        "signals": ["TBC"],
        "examples": ["TBC"]
      },
      {
        "summary":
          "As above  Executes quantitative tracking to show how implemented outcomes have been demonstrated and quantify the anticipated performance gain.",
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
  "DRIVING CHANGE A": {
    "displayName": "Driving Change A",
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
  "DRIVING CHANGE B": {
    "displayName": "Driving Change B",
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
