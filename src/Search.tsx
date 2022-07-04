import React, { useContext, useState } from "react"
import Domains from "./Domains"
import DomainsContext from "./DomainsContext"
import type { IDomain } from "./types"

const Search = () => {
  const [domainSearch, setDomainSearch] = useState("")
  const [domainsOrder, setDomainsOrder] = useState<string[]>([])
  const [domains, setDomains] =
    useContext<Record<string, IDomain>>(DomainsContext)

  async function requestDomain() {
    const response = await fetch(`http://localhost:5555/domain/${domainSearch}`)
    const domain = await response.json()

    setDomainsOrder([...domainsOrder, domain.id])
    setDomains({ ...domains, [domain.id]: domain })
    setDomainSearch("")
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          requestDomain()
        }}
      >
        <input
          id="location"
          type="text"
          value={domainSearch}
          placeholder="domain"
          onChange={({ target }) => setDomainSearch(target.value)}
        />

        <button>search</button>
      </form>
      <Domains domainsOrder={domainsOrder} />
    </div>
  )
}

export default Search
