import React, { Component, ErrorInfo } from "react"
import { Link } from "react-router-dom"

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>oh no</h1>
          <p>
            <Link to="/">Go back</Link>
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
