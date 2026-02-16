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
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Run ESLint to check for code quality issues.

## Author
Artem Vashchenko - ipz231_vai@student.ztu.edu.ua

GitHub: https://github.com/simon-arch

## Licensing
The Linux Foundation and its contributors license the SPDX standard under the terms of [the Creative Commons Attribution License 3.0 Unported (SPDX: "CC-BY-3.0")](http://spdx.org/licenses/CC-BY-3.0).  "SPDX" is a United States federally registered trademark of the Linux Foundation.

The author of this repository license their work under the terms of the [Apache 2.0 License](LICENSE).

