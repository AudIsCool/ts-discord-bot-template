/**
 * Important Note from Aud Regarding reflect-metadata
 * 
 * IF YOU EVER CHANGE YOUR ENTRYPOINT (the file that gets ran first in your code), PLEASE MOVE THIS IMPORT STATEMENT
 * INTO THAT FILE AS WELL. 
 * 
 * This import statement brings in some code that can reduce your JS runtime error lines back to their equivalant Typescript lines. 
 * It'll make debugging 197268347 times easier if you include it. 
 */
import "reflect-metadata"; 


/**
 * Important Note from Aud regarding file imports
 * 
 * You'll notice the files end with .js here. This is because when we build the files from TS to JS, the files 
 * end up ending with a .js file extension. 
 * 
 * This is actually a fixable issue within the TS system, I just haven't been bothered to fix it since the error can take like 
 * 14S max out of a dev rotation. 
 */
import { Bot } from "./bot.js";

async function startUp() {
    await Bot.start();

    await Bot.importFiles();
    await Bot.bootupBot(`YOUR TOKEN HERE :)`);
}


startUp();
