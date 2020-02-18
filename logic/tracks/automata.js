// @flow

import type { Tracks as TracksT } from './types';

export type Category =
  'Execution' |
  'Contribution to the team' |
  'Demonstration of culture/values'

export type TrackId =
  "IMPACT" |
  "COMMUNICATION" |
  "CRAFT" |
  "INITIATIVE" |
  "PROF_DEV" |
  "DEV_DESIGN" |
  "WELLBEING" |
  "INSPIRE" |
  "MENTORSHIP" |
  "EVANGELISM" |
  "HIRING" |
  "COMMUNITY"

export const Tracks = {
  "IMPACT": {
    "displayName": "Impact",
    "category": 'Execution',
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
    "category": 'Execution',
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
    "category": 'Execution',
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
    "category": 'Execution',
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
    "category": 'Contribution to the team',
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
    "category": 'Contribution to the team',
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
    "category": 'Contribution to the team',
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
    "category": 'Contribution to the team',
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
    "category": 'Demonstration of culture/values',
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
    "category": 'Demonstration of culture/values',
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
    "category": 'Demonstration of culture/values',
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
    "category": 'Demonstration of culture/values',
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

const _CheckTracks: TracksT<TrackId, Category> = Tracks
