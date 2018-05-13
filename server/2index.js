import express from "express"
import fs from  "fs"
import {  Router } from "react-router"
import Location from "react-router/lib/location"
import routes from "../src/routes"
import ReactDOMServer from "react-dom/server"
import React from "react"

let app= express()
app.use(express.static('public'))


app.use((req, res, next) => {

    Router.run(routes, new Location(req.url), (error, props) => {
        const content = ReactDOMServer.renderToString(<Router {...props} />)
        res.render(index)


        const ReactApp = renderToString( react.createElement(RouterContext, ssrData) )
          const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
          res.status(200).send(RenderedApp)

          const htmlFilePath = path.join( __dirname, '../build', 'index.html' )
          fs.readFile( htmlFilePath, 'utf8', (err, htmlData) => {
            const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
            res.status(200).send(RenderedApp)
          })
    } )
})