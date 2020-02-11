# Fork ![Build status](https://github.com/automata-tech/eva_python_sdk/workflows/Build%20%26%20Deploy/badge.svg)

This is a fork of Medium's engineering growth tool adapted for [Automata](https://automata.tech).
The tool is hosted [publicly](https://automata-tech.github.io/snowflake/).

# Medium's Snowflake

Snowflake is Medium's tool for planning and supporting our engineers' career development. You can read more
about how we use this tool in our [growth framework documentation](https://medium.com/s/engineering-growth-framework).

## Installation

Install dependencies:

`npm install`

### Running the dev server

`npm run dev`

### Building

`npm run export`

This will put a static version of the site in `out/`. (note that it will assume that the website will be served under the `/snowflake/` path, see `next.config.js` for more information)
