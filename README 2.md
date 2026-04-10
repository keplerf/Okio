# okyo.com

Repository for okyo.com website.

- [CM QA environment](https://pan-qa.criticalmass.com)
  - username/password: `pan / NudcalEgEwn0`
- [CM TeamCity](https://teamcity.criticalmass.com/buildConfiguration/PaloAltoNetworks_OkyoDotCom)
- [CM Jira](https://jira.criticalmass.com/secure/RapidBoard.jspa?projectKey=PAN&rapidView=884)
- [Contentful](https://be.contentful.com/login)
- [Analytics Tagging Specification](docs/OKYO&#32;Analytics&#32;Tagging&#32;Specifications.pdf)

## Prerequisites

- Node JS 14.17.0
  - In dev, via [nvm](https://github.com/nvm-sh/nvm)
- Gatsby CLI
  - `npm install -g gatsby-cli`
- A valid Contentful access token and space ID, configured via appropriate `.env.build.*` files.

## Getting Started

To start in development mode:

1. `npm run start`
2. Visit: http://localhost:8000 for website, http://localhost:8000/\_\_\_graphql for the GraphiQL interface. 

Note that there are multiple build targets, determined by setting the `SITE_BUILD_TARGET_ENV` environment variable, which in works in tandem with `.env.build.*` files. See [dotenv](https://github.com/motdotla/dotenv#readme) for more details.

## Build Static Output

Building the site for deployment can be achieved by using one of the npm scripts. There are a number of build targets, so please check the `package.json` file for more details. Ex. to build the qa version of the site:

1. `npm run build:qa`
2. Output is in `./public`, which can be placed on a webserver.

## Learn More about Gatsby

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## Other Resources
- [styled-components](https://styled-components.com)
- [Jest](https://jestjs.io)