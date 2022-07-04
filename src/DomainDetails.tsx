import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { IDomain } from "./types"
import DomainsContext from "./DomainsContext"

const DomainDetails = () => {
  const [domains] = useContext<Record<string, IDomain>>(DomainsContext)
  console.log({ domains })
  const { id } = useParams()

  if (!id || !domains[id]) {
    return <div>n/a</div>
  }

  const { domain, name, logo, description } = domains[id]
  return (
    <div>
      <b>{name}</b>
      <img src={logo} alt={name} />
      <p>{domain}</p>
      <p>{description}</p>
    </div>
  )
}

export default DomainDetails
