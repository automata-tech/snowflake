// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Electronics'

export type TrackId =
  "ELEC_DESIGN" |
  "PCB" |
  "CABLING"

export const Tracks = {
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
}

const CheckTracks: TracksT<TrackId, Category> = Tracks
