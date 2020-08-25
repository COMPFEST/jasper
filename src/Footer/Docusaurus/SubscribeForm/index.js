import React, { useState } from "react"
import { SubscribeFormContainer } from "./style"

const SubscribeForm = () => {
  const [email, setEmail] = useState("")
  // const [isLoading, setLoading] = useState(false)
  const isLoading = false

  return (
    <SubscribeFormContainer>
      <input
        type="email"
        className="email-input"
        placeholder="Input your e-mail here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      { isLoading
        ? <button className="subscribe-button disabled">Loading..</button>
        : <button type="submit" className="subscribe-button">
        Subscribe
        </button>
      }
    </SubscribeFormContainer>
  )
}

export default SubscribeForm
