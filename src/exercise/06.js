// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    const userName = userNameInputRef.current.value
    onSubmitUsername(userName)
  }

  const handleChange = event => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(!isLowerCase && 'Username must be lower case.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="textID">Username:</label>
        <input
          ref={userNameInputRef}
          id="textID"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
      <div style={{color: 'red'}}>{error}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
