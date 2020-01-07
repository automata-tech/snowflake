// @flow

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples?: string[]
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
  'DEV_OPS': Track,
  'WEB_MASTERY': Track,

  'CTRL_MODEL': Track,
  'TRAJ_MODEL': Track,

  'ELEC_DESIGN': Track,
  'PCB': Track,

  'ELEC_SAFE': Track,
  'EMC_RED': Track,
  'FUNC_SAFE': Track,
  'MACH_SAFE': Track,
  'OCC_HAS': Track,
  'RISK_ASSESS': Track,
  'TECH_FILE': Track,
  'WORLD_MARKETS': Track,

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

  "WEB_MASTERY": {
    "displayName": "Web Mastery",
    "category": "Software",
    "description": "Ability to integrate different web services and components together, understanding of web best practices and systems, able to deliver and maintain web products effectively",
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
}
