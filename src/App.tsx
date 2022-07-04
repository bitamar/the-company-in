import React, { useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Search from "./Search"
import DomainDetails from "./DomainDetails"
import DomainsContext from "./DomainsContext"
import type { IDomain } from "./types"

const App = () => {
  const domains = useState<Record<string, IDomain>>({})

  return (
    <React.StrictMode>
      <BrowserRouter>
        <DomainsContext.Provider value={domains}>
          <div>
            <Routes>
              <Route path="/:id" element={<DomainDetails />} />
              <Route path="/" element={<Search />} />
            </Routes>
          </div>
        </DomainsContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
