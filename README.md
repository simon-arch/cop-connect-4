[![License: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue)](https://opensource.org/licenses/Apache-2.0)
# <img alt="Connect-4 Disc" src="public/images/disc.png" height=23> Connect 4
A web-based [**Connect 4**](https://en.wikipedia.org/wiki/Connect_Four) game built with [**React**](https://github.com/facebook/react), [**TypeScript**](https://www.typescriptlang.org), and [**Vite**](https://vite.dev).

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Configuration](#configuration)
- [Rules](#rules)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Available Scripts](#available-scripts)
- [Author](#author)
- [Licensing](#licensing)

## Demo

Play the game live in your browser: [**Connect 4**](https://simon-arch.github.io/cop-connect-4)

## Features

- Classic Connect 4 gameplay for two players.
- Interactive board with drop animation.
- Responsive design for desktop and mobile.
- Reset and start new game anytime.
- Local player scoreboard with total playtime and winrate tracking.

## Configuration

The game includes a Start Menu with gameplay customization before starting a match. The following options can be adjusted:

- **Play Animations** - Toggle animations on or off for disc drops.
- **Grid Rows** - Set the number of rows in the game board.
- **Grid Columns** - Set the number of columns in the game board.
- **Win Size** - Define how many connected discs are needed to win (e.g., 4 in a row).
- **Player 1/2 Name** - Customize the scoreboard names for **Player 1** and **Player 2**.
- **Starting Player** - Choose which player goes first.

## Rules
1. Players choose yellow or red discs.
2. They take turns dropping their discs into one of the columns.
3. A disc will fall to the lowest available row in the selected column.
4. The first player to form a continuous line of discs matching the *Win Length* wins.
5. If the board fills up without a winner, the game ends in a draw.
6. Use the *Back to Start* button at any time to go back to the menu while preserving game settings.

## Installation

- Make sure you have [**Node.js**](https://nodejs.org) and [**npm**](https://www.npmjs.com) installed.

- Clone the repository:

```bash
git clone https://github.com/simon-arch/cop-connect-4.git
cd cop-connect-4
npm install
```

## Usage
Run the development server:

```npm run dev```

This will start the app locally in your browser.

## Documentation
Full documentation is available either through the generated TypeDoc files or [live in the browser](https://simon-arch.github.io/cop-connect-4/docs).

## Available Scripts
- `npm run build` - Builds the app for production. The output will be in the `/dist` folder.
- `npm run docs` - Generates the project documentation using TypeDoc. The output will be in the `/docs` folder.
- `npm run storybook` - Generates and runs the project Storybook.
- `npm run build-storybook` - Builds static files of the project Storybook.
- `npm run preview` - Locally previews the production build.
- `npm run lint` - Runs ESLint to check for code quality issues.

## Author
Artem Vashchenko - ipz231_vai@student.ztu.edu.ua

GitHub: https://github.com/simon-arch

## Legal

| Document       | Link                                                                |
|----------------|---------------------------------------------------------------------|
| GDPR           | https://github.com/simon-arch/cop-connect-4/blob/main/GDPR.md       |
| EULA           | https://github.com/simon-arch/cop-connect-4/blob/main/EULA.md       |
| Privacy Policy | https://github.com/simon-arch/cop-connect-4/blob/main/PRIVACY.md    |
| Third Party    | https://github.com/simon-arch/cop-connect-4/blob/main/THIRDPARTY.md |

## Licensing
The Linux Foundation and its contributors license the SPDX standard under the terms of [the Creative Commons Attribution License 3.0 Unported (SPDX: "CC-BY-3.0")](http://spdx.org/licenses/CC-BY-3.0).  "SPDX" is a United States federally registered trademark of the Linux Foundation.

The data in the dependency [caniuse-lite](https://github.com/browserslist/caniuse-lite) is available for use under a [CC BY 4.0 License](http://creativecommons.org/licenses/by/4.0/). The source is caniuse.com.

This project uses [LightningCSS](https://github.com/parcel-bundler/lightningcss) under the [Mozilla Public License 2.0](https://github.com/parcel-bundler/lightningcss/blob/master/LICENSE). The LightningCSS files are unmodified, not included in this repository, and are installed separately using the appropriate package manager.

This project uses [Axe Core](https://github.com/dequelabs/axe-core) under the [Mozilla Public License 2.0](https://github.com/parcel-bundler/lightningcss/blob/master/LICENSE). The Axe Core files are unmodified, not included in this repository, and are installed separately using the appropriate package manager.

Original game concept "Connect 4" is a registered trademark of its respective owner. The Author does not claim ownership of "Connect 4".

---

The author of this repository license their work under the terms of the [Apache License 2.0](LICENSE.md).

