import { createContext } from "react"
import type { IDomain } from "./types"

const DomainsContext = createContext<Record<string, IDomain> | null>(null)

export default DomainsContext
