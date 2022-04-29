// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const userName = userNameInputRef.current.value
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="textID">Username:</label>
        <input ref={userNameInputRef} id="textID" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
