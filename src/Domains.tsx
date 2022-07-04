import React, { FunctionComponent, useContext } from "react"
import Domain from "./Domain"
import { IDomain } from "./types"
import DomainsContext from "./DomainsContext"

interface IProps {
  domainsOrder: string[]
}

const Domains: FunctionComponent<IProps> = ({ domainsOrder }) => {
  const [domains] = useContext<Record<string, IDomain>>(DomainsContext)

  return (
    <div>
      {domainsOrder.map((domain, index) => (
        <Domain key={index} {...domains[domain]} />
      ))}
    </div>
  )
}

export default Domains
