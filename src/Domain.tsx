import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

interface IProps {
  id: string
  domain: string
  name: string
  logo: string
}

const Domain: FunctionComponent<IProps> = ({ id, name, logo }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <b>{name}</b>
        <img src={logo} alt={name} />
      </Link>
    </div>
  )
}

export default Domain
