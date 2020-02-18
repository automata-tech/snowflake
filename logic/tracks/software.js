// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Software'

export type TrackId =
  "FRONT_END" |
  "BACK_END" |
  "LINUX" |
  "SYS_PROG" |
  "FIRMWARE" |
  "APPLIED_ROBOTICS" |
  "DESKTOP_APPS" |
  "DEV_OPS" |
  "WEB_MASTERY" |
  "DATABASES" |
  "USER_EXP" |
  "DATA_SCIENCE"

export const Tracks = {
  "FRONT_END": {
    "displayName": "Front-End",
    "sillyName": "Front-End Sorcery",
    "category": "Software",
    "description": "Ability to create browser-side applications, knowledge of the associated technologies (HTML, CSS, JavaScript), understanding of the domain-specific challenges and best practices",
    "milestones": [{
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
    "description": "Ability to maintain complex system applications (C++, ZeroMQ, protobuf, Python) and their build systems (CMake, Pyinstaller), understand of the domain-specific challenges (threading, network) and best practices, knowledge of cryptography and security",
    "milestones": [{
      "summary": "Works effectively within established system architectures, following current best practices",
      "signals": [
        "Solid network understanding (TCP/IP, UDP, ZeroMQ, etc)",
        "Able to use concurrency primitives correctly (mutex, condvar, semaphores, etc)",
        "Creates and reviews small PRs",
      ],
      "examples": [
        "Added a new servo property to change the payload",
        "Added a libautomata endpoint for the Backend",
        "Tweaked the arguments of a test in production processes and testing"
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
        "Added a new test in production processes and testing",
      ],
    }, {
      "summary": "Designs major new features and demonstrates an advanced understanding of system programming",
      "signals": [
        "Acts as primary maintainer for existing critical components",
        "Builds reliable systems able to recover from errors, which are logged for debugging and audit purposes",
        "Abstracts hardware/network concerns to make the business logic more steam-lined",
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
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
