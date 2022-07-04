const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
const port = 5555

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const domains = {}

// TODO: pattern matching for domains.
app.get("/domain/:domain", (req, res) => {
  const domain = req.params.domain
  console.log("get", domain)

  if (domains[domain]) {
    console.log("from cache")
    res.json(domains[domain])
    return
  }

  const options = {
    headers: { Authorization: "Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49" },
  }

  axios
    .get(
      `https://company.clearbit.com/v2/companies/find?domain=${domain}`,
      options
    )
    .then((response) => {
      domains[domain] = response.data
      console.log(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
      // TODO: Error response
    })
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
