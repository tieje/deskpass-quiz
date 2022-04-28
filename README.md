# [deskpass-quiz](https://github.com/tieje/deskpass-quiz)

## Preface

&emsp; The short version of my answer can be found in this `README.md` file and in the file itself. My explicit thoughts and goals for each day can be found in the `./tieje-notes.txt` file.

## Contents

- [Guidelines](#guidelines)
- [Questions](#questions)
    - [JavaScript Function](#javascript-function)
        - Answer
        - Comments
        - Further Clarification Needed
    - [React Tooltip](#react-tooltip)
        - Answer
        - Comments
    - [Simple Proxy Server](#simple-proxy-server)
    - [The Future of Container Management](#the-future-of-server-abstraction)

## [Guidelines](#contents)

- Take up to 2 weeks to answer these and work at your own pace. We like thoughtful answers, but we’re not expecting you to spend weeks and weeks laboring on these either.
- We’re not just looking for the “right answer” here, we’re more interested in your thought process and how you arrive at your answers. Go with the way that you think is best, as that is part of the evaluation.
- Be descriptive and leave lots of comments to help us understand why you made the choices you did.
- Submit your responses however you'd like, as long as everything is there. Generally just creating a repo on Github or similar is convenient but it's up to you.

## [Questions](#contents)

### [JavaScript Function](#contents)

&emsp; Write a function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.

#### Answer

- file location: `./deskpass-quiz/src/utils/utils.js`
- test method: `cd deskpass-quiz` and run `npm test`
- The file was originally written in `TypeScript` and then transpiled to `JavaScript` with the `tsc utils.ts` command.

#### Comments

&emsp; I could have opted to create a single `.js` file and test it manually, however, given the context of the quiz I can save myself some time with setting up testing and TypeScript by using the create-react-app TypeScript template.

#### Further Clarification Needed

&emsp; In programming, normally the term "strip" is used to mean removing characters at the beginning and end of the string, however, the example given says to remove all quotes within the string. Normally, I would send an email for clarification, however, because it's easy to fix later, I'll present a solution based on the example provided and not by what is initially asked of me.

### [React Tooltip](#contents)

&emsp; Implement a React Tooltip component such that given any target element in a page, it will render a tooltip panel relative to the target element. Ideally the component should include some control over where the tooltip panel is positioned and what triggers it to open/close along with any other features you think would be useful for a tooltip to have.

#### Answer

#### Comments

&emsp; The keyword is "implement".

### [Simple Proxy Server](#contents)

&emsp; Create a simple proxy server in Node. This proxy server should be capable of transparently forwarding client requests to at least one target server and returning the response from the target server to the requesting client. In addition, this server should be capable of loading various code plugins that extend the functionality of the proxy server. These plugins should be able to view/modify the contents of the request and response life cycle, with the exact steps of this life cycle defined by you. Useful plugin ideas include things such as whitelisting/blacklisting request URLs based on passed criteria, adding request logging for security purposes, filtering out specific pieces of response content, or anything else that you think could be useful.

### [The Future of Server Abstraction](#contents)

Systems like Kubernetes and Docker Swarm are the end result of years and years of effort spent slowly abstracting server resources from being "a single physical machine your app is running on" to "a distributed pool of generic resources any app can run on." What do you think the next level of server abstraction will look like in 10 years? How will web apps be deployed and managed a decade from now? Will container management systems such as Kubernetes still be used, or will there be another layer of abstraction used?
