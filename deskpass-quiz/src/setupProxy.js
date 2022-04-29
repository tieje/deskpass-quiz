const { createProxyMiddleware } = require('http-proxy-middleware')
// CORS plugin
// https://github.com/expressjs/cors
// I'm not going to use this for anything, but it's totally possible to hook it up if desired.
const cors = require('cors')

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}


module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://www.example.org/',
            changeOrigin: true,
        })
    )
}
/*
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
*/