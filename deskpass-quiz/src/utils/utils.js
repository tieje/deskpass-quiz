"use strict";
exports.__esModule = true;
exports.RemoveAllQuotes = void 0;
function RemoveAllQuotes(input) {
    // This function removes double quotation marks (") from the entire string
    return (input.replace(/"/g, ''));
}
exports.RemoveAllQuotes = RemoveAllQuotes;

/*
#### My Answer

- file location: `./deskpass-quiz/src/utils/utils.js`
- function name: `RemoveAllQuotes`
- test method: `cd deskpass-quiz` and run `npm test`
- The file was originally written in `TypeScript` and then transpiled to `JavaScript` with the `tsc utils.ts` command.

#### Comments

&emsp; I could have opted to create a single `.js` file and test it manually, however, given the context of the quiz, I can save myself some time from setting up testing and TypeScript by using the create-react-app TypeScript template.

#### Further Clarification Needed

&emsp; In programming, normally the term "strip" is used to mean removing characters at the beginning and end of the string, however, the example given says to remove all quotes within the string. Normally, I would send an email for clarification, however, because it's easy to fix later, I'll present a solution based on the example provided and not by what is initially asked of me.
*/