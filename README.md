# [deskpass-quiz](https://github.com/tieje/deskpass-quiz)

## Preface

&emsp; My answers can be found in this `README.md` file as well as in the files specified below. My explicit thoughts and goals for each day can be found in the `./tieje-notes.txt` file.

Answer File Locations:

- JavaScript Function: `./deskpass-quiz/src/utils/utils.js`
- React Tooltip: `./deskpass-quiz/src/App.tsx`
- Simple Proxy Server: `./deskpass-quiz/src/setupProxy.js`
- The Future of Server Abstraction: `./README.md`

## Contents

- [Guidelines](#guidelines)
- [Questions](#questions)
    - [JavaScript Function](#javascript-function)
        - My Answer
        - Comments
        - Further Clarification Needed
    - [React Tooltip](#react-tooltip)
        - My Answer
        - Comments
    - [Simple Proxy Server](#simple-proxy-server)
        - My Answer
        - Comments
    - [The Future of Server Abstraction](#the-future-of-server-abstraction)
        - My Answer

## [Guidelines](#contents)

- Take up to 2 weeks to answer these and work at your own pace. We like thoughtful answers, but we’re not expecting you to spend weeks and weeks laboring on these either.
- We’re not just looking for the “right answer” here, we’re more interested in your thought process and how you arrive at your answers. Go with the way that you think is best, as that is part of the evaluation.
- Be descriptive and leave lots of comments to help us understand why you made the choices you did.
- Submit your responses however you'd like, as long as everything is there. Generally just creating a repo on Github or similar is convenient but it's up to you.

## [Questions](#contents)

### [JavaScript Function](#contents)

&emsp; Write a function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.

#### My Answer

- file location: `./deskpass-quiz/src/utils/utils.js`
- function name: `RemoveAllQuotes`
- test method: `cd deskpass-quiz` and run `npm test`
- The file was originally written in `TypeScript` and then transpiled to `JavaScript` with the `tsc utils.ts` command.

#### Comments

&emsp; I could have opted to create a single `.js` file and test it manually, however, given the context of the quiz, I can save myself some time from setting up testing and TypeScript by using the create-react-app TypeScript template.

#### Further Clarification Needed

&emsp; In programming, normally the term "strip" is used to mean removing characters at the beginning and end of the string, however, the example given says to remove all quotes within the string. Normally, I would send an email for clarification, however, because it's easy to fix later, I'll present an initial solution based on the example provided and not by what is initially asked of me.

### [React Tooltip](#contents)

&emsp; Implement a React Tooltip component such that given any target element in a page, it will render a tooltip panel relative to the target element. Ideally the component should include some control over where the tooltip panel is positioned and what triggers it to open/close along with any other features you think would be useful for a tooltip to have.

#### My Answer

- file location: `./deskpass-quiz/src/App.tsx`
- test method: Visual inspection
    1. `cd deskpass-quiz` and `npm start`
    2. Hover mouse over text. 
- Git repo used: [`https://github.com/react-component/tooltip`](https://github.com/react-component/tooltip)

#### Comments

&emsp; The keyword in this question is "implement", meaning I don't necessarily need to "create" the component myself.

### [Simple Proxy Server](#contents)

&emsp; Create a simple proxy server in Node. This proxy server should be capable of transparently forwarding client requests to at least one target server and returning the response from the target server to the requesting client. In addition, this server should be capable of loading various code plugins that extend the functionality of the proxy server. These plugins should be able to view/modify the contents of the request and response life cycle, with the exact steps of this life cycle defined by you. Useful plugin ideas include things such as whitelisting/blacklisting request URLs based on passed criteria, adding request logging for security purposes, filtering out specific pieces of response content, or anything else that you think could be useful.

#### My Answer

- file location: `./deskpass-quiz/src/setupProxy.js`
- test method: Manual
    1. `cd deskpass-quiz`
    2. `npm start`
    3. Enter URL `http://localhost:3000/api`
        - Should be redirected to `http://www.example.org/`
- Github repo used: `https://github.com/expressjs/cors`

#### Comments

&emsp; After a good deal of research, I've come to the conclusion that this simple proxy server is certainly capable of additional functionality. Additional functionality, such as CORS, in the form of a plugin is possible. In my answer, I decided not to set up CORS fully because I only wanted to know if plugin capability would be possible for this simple server.

### [The Future of Server Abstraction](#contents)

&emsp; Systems like Kubernetes and Docker Swarm are the end result of years and years of effort spent slowly abstracting server resources from being "a single physical machine your app is running on" to "a distributed pool of generic resources any app can run on." What do you think the next level of server abstraction will look like in 10 years? How will web apps be deployed and managed a decade from now? Will container management systems such as Kubernetes still be used, or will there be another layer of abstraction used?

#### My Answer

&emsp; The future of backend servers is to be OS agnostic and serverless-vendor-platform agnostic. This can be achieved in several ways, however, I think the next big thing is decentralization of serverless cloud computing.

&emsp; The innovation of Docker was not containerization of apps, but accessibility of containerization for the average developer.

&emsp; Similar to containerization, serverless functions already exist, however only as a service and not as a software.

&emsp; The next big piece of software will make implementing one's own serverless cloud computer as accessible to the average developer as containerization in Docker or Kubernetes. However, serverless computing will not fully replace Docker or Kubernetes due to the inherent disadvantages of serverless computing.

What I read and watched:

- OS abstraction, Heroku-like abstraction, and serverless functions
    - https://www.computerweekly.com/feature/Future-of-the-server-operating-system
    - https://redmonk.com/sogrady/2017/04/13/abtraction/
    - https://thenewstack.io/the-future-of-microservices-more-abstractions/
    - https://www.youtube.com/watch?v=W_VV2Fx32_Y
- Disadvantages of serverless computing
    - https://www.ionos.com/digitalguide/server/know-how/serverless-computing/
    - https://www.youtube.com/watch?v=AuMeockiuLs
