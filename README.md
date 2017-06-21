## Requirements

- [Node.js](https://nodejs.org) (LTS or Current)

## Setup

Fork or copy this repo to quickly get started on your own editor.

Fill in the `vantage` property in `package.json` to explain what your editor does:

- `game` - The full name of the game your editor supports
- `scid` - The game's service configuration ID. e.g. `d8890100-b864-45cd-b20e-62d40020e1b2`
- `thumbnailUrl` - URL to the image shown in Vantage. Must start with `http://` or `https://`
- `name` - The name of the editor. e.g. "Campaign Editor"
- `containerFilter` - An exact container name or regular expression to filter out containers the editor supports. e.g. `"/^SaveSlot_[0-9]+$/"` *(optional)*
- `fileFilter` - Same as containerFilter, but for file names. *(optional)*

Once you filled that out, open Vantage and add an editor to the list. Click `Install Local Editor` and select the root directory of your project.

## Development

Editors are small web apps powered by [Aurelia](http://aurelia.io/), a modern Javascript framework. You don't have to be familiar with Aurelia to develop an editor, but we highly suggest checking it out so you can develop more advanced features in the future.

Every editor comes with `libvantage` preinstalled. `libvantage` provides functions and GUI components that are frequently needed by editor developers. Check out the [libvantage](https://github.com/vantagemods/libvantage) repo for more info.

`src/editor.ts` and `src/editor.html` are the best places to start coding. Vantage will call your `load()` and `save()` methods when the user wants to load or save a saved game file.

## Basic Commands

- `npm run watch` - Build your editor and actively watch for changes. Any changes you make to your code will refresh the editor in Vantage, instantly.

- `npm run build` - Build your editor for release. By default, output is placed in the `scripts` folder. Make sure you commit this to GitHub if you plan on releasing your editor there.

For advanced users, the build system - and everything else in the project - can be customized to your liking.

## Releasing

Before releasing, make sure you run `npm run build` and commit your `scripts` folder to GitHub. If you plan to publish to [npm](https://www.npmjs.com/), this step isn't necessary.

**If you are releasing an updated trainer, make sure you increase the version number in the `package.json` file.**

### Releasing on GitHub

1. Create a new Release in your GitHub repo.
2. Users can install your editor using `github:username/repo`. They can install a specific version/tag using `github:username/repo#v1.0.0`

### Releasing on npm

1. `npm publish` your project.
2. Users can install your editor using `npm:package-name` or a specific version using `npm:package-name@1.0.0`. Be sure to change the `name` of the package in `package.json` before publishing.
