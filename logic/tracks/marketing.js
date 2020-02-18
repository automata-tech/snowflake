// @flow

import type { Tracks as TracksT } from './types';

export type Category = 'Marketing'

export type TrackId =
  "CUSTOMER" |
  "COMMUNICATION & WRITING" |
  "TECH & DATA" |
  "PRODUCT & INDUSTRY" |
  "MARKETING OPERATIONS" |
  "CAMPAIGN MANAGEMENT " |
  "DIGITAL ACQUISITION"

export const Tracks = {
  "CUSTOMER": {
    "displayName": "Customer",
    "category": "Marketing",
    "description": "Keeping the customer at the centre of everything we do",
    "milestones": [
      {
        "summary":
          "Demonstrates understanding of Automata's ideal customer and the challenges they face",
        "signals": [
          "Writes customer-centric copy for web / campaigns / social",
          "Reads and shares industry media",
          "Uses Ideal Customer Profile to help build campaign or newsletter audiences"
        ],
        "examples": [
          "Understands and refers back to Automata's Ideal Customer Profile in day to day work"
        ]
      },
      {
        "summary":
          "Proactively builds and deepens customer insights and applies learning to day-to-day work ",
        "signals": [
          "Proactively joins or listens in on customer or discovery calls",
          "Regularly reads shares industry articles with own opinion and anaylsis",
          "Attends customer site visits"
        ],
        "examples": [
          "Shows proactive learning about the customer and industry and shares insights with the wider team"
        ]
      },
      {
        "summary":
          "Is regularly and proactively championing the voice of the customer in team meetings and project work",
        "signals": [
          "Owned, designed and implemented a successful customer-centric campaign, event or content",
          "Speaks up in meetings and planning sessions as the proxy voice of the customer"
        ],
        "examples": [
          "Becoming the proxy voice of the customer in team meetings and to aid decision making"
        ]
      },
      {
        "summary":
          "Proactively collaborates with other departments and functions on behalf of the customer",
        "signals": [
          "Has run educational session for colleagues in other teams to help build business-wide understanding of the customer ",
          "Has collaborated proactively with the PMF group"
        ],
        "examples": [
          "Plays a key role in ensuring all Automata employees understand the customer and live/breathe their challenges"
        ]
      },
      {
        "summary":
          "Leads Automata-wide initiatives to align around the customer. Articulates the strategic need for change and leads implementation of that change on behalf of the customer.",
        "signals": [
          "Has led a customer centric rebrand",
          "Speaks at customer events"
        ],
        "examples": [
          "Leading the company charge to adapt as our understanding of our ideal customer evolves "
        ]
      }
    ]
  },
  "COMMUNICATION & WRITING": {
    "displayName": "Communication & writing",
    "category": "Marketing",
    "description":
      "Telling the Automata story consistently through all channels and touchpoints",
    "milestones": [
      {
        "summary":
          "Can take Automata messaging and exisitng content and repurpose for new channels or formats",
        "signals": [
          "Drafts landing page, campaign or social copy based on existing messaging documents"
        ],
        "examples": [
          "Confident in applying writing skills to Automata marketing tactics"
        ]
      },
      {
        "summary":
          "Contributes to Automata's customer-facing and internal content",
        "signals": [
          "- Regularly drafts written content for the blog, website, newsletter, campaigns that needs minimal editing "
        ],
        "examples": [
          "Writes well researched content that feeds into the team's content strategy"
        ]
      },
      {
        "summary":
          "Regularly initiates, crafts and publishes new pieces of content in line with content strategy and messaging",
        "signals": [
          "Regularly initiates and publishes written content for the blog, website, newsletter, campaigns"
        ],
        "examples": [
          "Writes quality content",
          "Inputs into content strategy",
          "Communicates thought-process behind content decisions "
        ]
      },
      {
        "summary":
          "Supports and mentors colleagues from accross the business, encouraging team-wide contributions and company-wide consistency ",
        "signals": [
          "Has helped colleagues improve their writing",
          "Has run a session on Automata storytelling"
        ],
        "examples": [
          "Assists and mentors colleagues to help improve their communication and writing skills",
          "Takes ownership for company wide clarity and continuity of messaging "
        ]
      },
      {
        "summary":
          "Writes and/or speaks on behalf of the company at industry events or on third-party sites",
        "signals": [
          "Is invited to speak at industry and/or marketing events",
          "Writes regularly and has a growing personal following",
          "Speaks to media on behalf of the company"
        ],
        "examples": [
          "Is confident and effective speaking and writing on behalf of Automata",
          "Supports the founders in telling the company story and mission"
        ]
      }
    ]
  },
  "TECH & DATA": {
    "displayName": "Tech & data",
    "category": "Marketing",
    "description":
      "Using technology and data to gain insights and steer decision-making",
    "milestones": [
      {
        "summary":
          "Is proficient in using the tools and platforms currently in place in the marketing team",
        "signals": [
          "Creates and send emails and social posts",
          "Builds lists / audiences",
          "Builds landing pages"
        ],
        "examples": [
          "Is proficient in using the tools and platforms currently in place in the marketing team"
        ]
      },
      {
        "summary":
          "Uses the tools and platforms at hand to collect insights, spot trends and shares learning with the wider team",
        "signals": [
          "Builds reports in HubSpot, shares them with the wider team",
          "Regularly spots trends or insights in data, shares with team "
        ],
        "examples": [
          "Uses the tools and platforms at hand to collect insights, spot trends and shares learning with the wider team"
        ]
      },
      {
        "summary":
          "Identifies opportunities to maximise the value and impact of the tools and platforms we use by using them in new ways or integrating new features",
        "signals": [
          "Suggest and implements new features we could get value from in our existing tools",
          "Runs tests to ensure we're using tools effectively and efficiently"
        ],
        "examples": [
          "Identifies opportunities to maximise the value and impact of the tools and platforms we use by using them in new ways or integrating new features"
        ]
      },
      {
        "summary":
          "Proactively uses data and insights as a lever to steer team-wide decision-making. Builds the case for the adoption of new marketing tools as we scale.",
        "signals": [
          "Built and rolled out new metrics dashboard in HubSpot to give leadership team real-time insight into acquisition metrics",
          "Completed an analysis of the comercial team tech stack to identify gaps and sucessfully implement any new tools / planforms required"
        ],
        "examples": [
          "Proactively uses data and insights as a lever to steer team-wide decision-making. Builds the case for the adoption of new marketing tools as we scale."
        ]
      },
      {
        "summary":
          "Leads company-wide initiatives to improve the ways we use technology and data operate as efficiently and effectively as possible ",
        "signals": [
          "Co-led the scoping and roll-out of a new company-wide BI platform "
        ],
        "examples": [
          "Leads company-wide initiatives to improve the ways we use technology and data operate as efficiently and effectively as possible "
        ]
      }
    ]
  },
  "PRODUCT & INDUSTRY": {
    "displayName": "Product & industry",
    "category": "Marketing",
    "description":
      "Becoming an expert in Eva, the competitive landscape and wider industry trends",
    "milestones": [
      {
        "summary":
          "Demonstrates solid understanding of Eva's core functionality and technical specifications ",
        "signals": [
          "Has completed technical onboarding tasks",
          "Supports the team at tradeshows"
        ],
        "examples": [
          "Demonstrates solid understanding of Eva's core functionality and technical specifications "
        ]
      },
      {
        "summary":
          "Is proactively building on personal understanding of our product, our customers, the competitive landscape and wider industry trendslearning from colleagues and external resources",
        "signals": [
          "Has volunteered for an internal testing day",
          "Listens in on sales and discovery calls",
          "Reaches out to colleagues to fill knowledge gaps"
        ],
        "examples": [
          "Is proactively building on personal understanding of our product, our customers, the competitive landscape and wider industry trendslearning from colleagues and external resources"
        ]
      },
      {
        "summary":
          "Regularly finds and shares insights, opinions and analysis on industry news and trends with the wider team",
        "signals": [
          "Researches and shares competitive insight",
          "Proctively reads and shares analysis on industry trends"
        ],
        "examples": [
          "Regularly finds and shares insights, opinions and analysis on industry news and trends with the wider team"
        ]
      },
      {
        "summary":
          "Has significant industry insight garnered from a host of sources, creates opportunities to proactively share knowledge with the wider team",
        "signals": [
          "Run an Automata session to present industry trends and insights",
          "Complies and shares company wide \"competitor updates\""
        ],
        "examples": [
          "Has significant industry insight garnered from a host of sources, creates opportunities to proactively share knowledge with the wider team"
        ]
      },
      {
        "summary":
          "Is a driving force in internal education and knowledge-sharing and speaks on behalf of Automata at industry events",
        "signals": [
          "Rolled out internal initiatives to enable cross function knowledge sharing",
          "Speaks on behalf of Automata at industry events"
        ],
        "examples": [
          "Is a driving force in internal education and knowledge-sharing and speaks on behalf of Automata at industry events"
        ]
      }
    ]
  },
  "MARKETING OPERATIONS": {
    "displayName": "Marketing operations",
    "category": "Marketing",
    "description":
      "Putting in place robust workflows, using the right technology platforms, which will enable scalable demand generation operations",
    "milestones": [
      {
        "summary":
          "Understands the technology platforms we currently use in Automata and is able to follow established SLAs",
        "signals": [
          "Created a basic test workflow in HubSpot",
          "Read through the Automata SLAs",
          "Reported on monthly Marketing activity in the HubSpot dashboard",
          " "
        ],
        "examples": [
          "Is aware of all the Automata SLAs and which systems they impact",
          "Is able to create basic reports in Analytics",
          "Is familiar with HubSpot and can point out when SLAs aren't being adhered to"
        ]
      },
      {
        "summary":
          "Identifies processes or workflows that should be revised/optimised, and suggests minor amends",
        "signals": [
          "Built a lead nurture workflow",
          "Reported on a workflow that has been running for more than 3 months",
          "Created new SLAs for use across the company"
        ],
        "examples": [
          "Is aware of the impact of GDPR/CCPA on the business and regularly evaluates data cleanliness in HubSpot",
          "Acted as a reviewer for workflows set up by other teams or team members",
          "Reviews SLAs on a regular basis and suggests amends"
        ]
      },
      {
        "summary":
          "Manages and optimises all current workflows and processes, identifying gaps and driving improvements. Is responsible for consistent data input and database maintenance",
        "signals": [
          "Optimised workflows or created new ones to test hypotheses/aid team members",
          "Amended database entries with known incorrect data",
          "Aligned data entry into HubSpot with business needs"
        ],
        "examples": [
          "Is responsible for regular database maintenance (e.g. culling inactive contacts)",
          "Maintains regular communication with other teams to suggest/improve workflows and processes ",
          "Reviews types of data required for regular reporting"
        ]
      },
      {
        "summary":
          "Suggests and owns new technology platforms, acting as the integration architect for commercial systems. Keeps abreast of GDPR/CCPA/regulatory changes and acts as the data officer for the business",
        "signals": [
          "Reviewed and updated data policies across the business",
          "Implemented a new commercial system",
          "Designed company-wide SLAs at bucket level"
        ],
        "examples": [
          "Integrates new technologies into the business",
          "Is responsible for the business being GDPR/CCPA-compliant",
          "Champions the adoption of new technology to improve processes"
        ]
      },
      {
        "summary":
          "Sets the strategy and is seen within the company as a driver for best in class marketing operations, with deep knowlege of technology and processes",
        "signals": [
          "Managed a full system migration",
          "Has given talks at industry events and is regarded as a subject matter expert for marketing operations",
          "Championed for the business to go above and beyond GDPR/CCPA basic compliance"
        ],
        "examples": [
          "Identifies and solves systemic process blockers",
          "Defines the 1, 3 and 5 year commercial technology roadmap",
          "Sets the marketing operations strategy and ensures projects serve those goals"
        ]
      }
    ]
  },
  "CAMPAIGN MANAGEMENT ": {
    "displayName": "Campaign management ",
    "category": "Marketing",
    "description":
      "Design, plan, execute and analyse end-to-end multi-touch campaigns to drive lead generation and test hypotheses",
    "milestones": [
      {
        "summary":
          "Is able to deliver assets (e.g. social media posts, basic emails) for campaigns, as well as create campaign briefing documents",
        "signals": [
          "Posted on social media via HubSpot",
          "Created an email in both WYSIWYG and classic editor",
          "Filled in the campaign briefing doc"
        ],
        "examples": [
          "Regularly fills in campaign briefing documents",
          "Confidently uses HubSpot to post on social media",
          "Regularly builds contact lists in HubSpot"
        ]
      },
      {
        "summary":
          "Creates simple workflows in HubSpot, testing and launching campaigns, analysing results and reporting on outcomes",
        "signals": [
          "Ran a test campaign",
          "Reported on past campaigns ",
          "Created a basic campaign workflow"
        ],
        "examples": [
          "Designed a workflow for nurture campaigns",
          "Created workflows for every upcoming Automata event",
          "Regularly A/B tested newsletter sends"
        ]
      },
      {
        "summary":
          "Plans and executes an array of omnichannel campaigns, using data to drive A/B tests and implement winning versions",
        "signals": [
          "Built an omnichannel campaign",
          "Built an A/B test campaign",
          "Created a lead generation campaign"
        ],
        "examples": [
          "Created 3, 6 and 9 month plans for omnichannel campaigns",
          "Ensures plans are executed on time and communicates delays",
          "Uses data to plan and execute A/B tests",
          "Consistently hits campaign KPIs"
        ]
      },
      {
        "summary":
          "Build complex, multi-touch campaigns which integrate best practices and are based on data-driven strategy",
        "signals": [
          "Created personalised onboarding customer campaigns",
          "Delivered a tailored, personalised, end-to-end customer campaign",
          "Implemented a new campaign strategy for the business"
        ],
        "examples": [
          "Delivers complex multichannel campaigns regularly",
          "Chooses appropriate technology to deliver nurture campaigns",
          "Drives the strategy for campaigns that go beyond lead generation"
        ]
      },
      {
        "summary":
          "Drives the strategy for campaign planning across all channels, integrating customer-centric approaches and embedding best practices across the team",
        "signals": [
          "Written several articles in industry campaign publications",
          "Has won Automata awards for campaign work",
          "Set KPIs for revenue generation from campaign work"
        ],
        "examples": [
          "Is seen as the go-to person within the business for pre- and post-sales campaign strategy",
          "Defines the long-term vision for Automata campaign work beyond demand generation",
          "Identifies new customer-centric approaches to generate revenue and increase retention"
        ]
      }
    ]
  },
  "DIGITAL ACQUISITION": {
    "displayName": "Digital acquisition",
    "category": "Marketing",
    "description":
      "Design, plan, execute and analyse acquisition tactics across social media and paid digital advertising",
    "milestones": [
      {
        "summary":
          "Is aware of basic SEO best practices (both technical and on-page), as well as having basic knowledge of the paid channels Automata uses",
        "signals": [
          "Supported the build of a basic lead generation campaign in LinkedIn ",
          "Supported the build of a simple Google Ads campaign",
          "Built a simple website landing page"
        ],
        "examples": [
          "Understands the need for H1/H2/H3 etc tags, alt tags, image descriptions and other on-page SEO 'must haves'",
          "Is familiar with LinkedIn paid advertising",
          "Knows basic layout of Google Ads campaigns"
        ]
      },
      {
        "summary":
          "Is able to run basic website SEO checks using the tools available, do keyword research and execute on paid search campaigns (Google Ads and LinkedIn)",
        "signals": [
          "Ran a website audit using Screaming Frog",
          "Built a paid advertising campaign",
          "Ran a keyword report using Ahrefs"
        ],
        "examples": [
          "Is comfortable with the paid advertising tools",
          "Understands the need for regular keyword research",
          "Suggests new content pillar pages based on research data"
        ]
      },
      {
        "summary":
          "Identifies and creates new pages/articles/blog posts in line with Automata content strategy, contributes to social media posts and suggests new audiences and messages to test on paid channels",
        "signals": [
          "Built several landing pages for paid campaigns",
          "Ran an A/B test on paid campaign copy",
          "Ran a remarketing campaign"
        ],
        "examples": [
          "Regularly A/B tests messages on paid campaigns",
          "Identified new channels for paid campaigns",
          "Assists the team with posting content on the blog/website"
        ]
      },
      {
        "summary":
          "Contributes and executes new search campaigns, A/B testing messages/audiences/creative, owns investigation and adoption of new paid channels where appropriate, and contributes to the knowledge of Automata on SEO best practices. Owns the digital acquisition KPI",
        "signals": [
          "Designed a multi-touch, multi-channel paid campaign",
          "Oversaw a full website redesign",
          "Held an Automata SEO best practice session"
        ],
        "examples": [
          "Owns and hits the digital acquisition KPI",
          "Implements new paid acquisition channels",
          "Makes technical build vs buy decisions for the website"
        ]
      },
      {
        "summary":
          "Is seen as the subject matter expert on organic and paid search best practices, leading the strategy across the business and presenting case studies of Automata's success at external events",
        "signals": [
          "Spoke at an SEO event",
          "Wrote case studies for external publications",
          "Defines strategy for paid channels"
        ],
        "examples": [
          "Defined a long-term vision for paid channel acquisition",
          "Identified and solved customer pains in current acquisition channels",
          "Creates new strategies to expand Automata's reach and notoriety"
        ]
      }
    ]
  }
}

const _CheckTracks: TracksT<TrackId, Category> = Tracks
