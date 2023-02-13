## Documentation That Will Be Useful 
- [Discord.JS](https://discord.js.org/#/) - This library handles your general Discord Interactions
- [DiscordX](https://github.com/discordx-ts/discordx) - This library handles all of your Slash Commands :) 
- [Typescript](https://www.typescriptlang.org/) - This is typescript!


### Install Instructions 
- Install Node `v16.13.0`
    - ideally use `nvm` to install & manage your node installs.
    - [Link to NVM](https://github.com/nvm-sh/nvm)

- Once Node is installed, you'll need to install the Node Packages for the project (think of them like Python Modules)
    - Run `npm install` in the project directory, this will read the packages in `package.json` and install them to `./node_modules`

    - If you want to know which packages are being installed, check the `package.json` file. 

- Setup is done! 

### Running Instructions
**TL;DR** run `npm run build:run` in you console.

<br>

**Long Instructions** 
- Typically to run a nodejs program you simply run `node <filename>.js` in your console, and node will try to find the file `<filename>.js` and run it. 
- However in this case, we're working in Typescript, and need to build our TS files into JS files via the `tsc` command. 
- To make this easier on you, I've gone ahead and added a npm script to take care of that. To use it, run `npm run build` in your console. 
- Once your JS files are built, you can start the program using the `npm run start` script, or by manually running the entrypoint file with `node`. 
- I have also included another script that first builds the JS files, then runs them. You can use this script by running `npm run build:run`


### Development Instructions
- When making changes to your TypeScript file, you'll notice that the changes don't carry over to the built JS files until you re-build them. So make sure before every run, to `npm run build`. 