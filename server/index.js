import * as functions from "firebase-functions"
import React from "react"
import { renderToString } from "react-dom/server"
import App from "../src/App"
import express from "express"
import Fire from "../src/services/fire"

const app = express()

app.get("**", (req, res) => {
  const html = renderToString(<App />)
  res.set("Cache-control", "public, max-age=600, smaxage=1200")
})

export let ssrapp = functions.https.onRequest(app)