import './App.css'

function App() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    e.preventDefault()
    const startsAt = performance.now()
    const target = e.target as typeof e.target & {
      email: { value: string }
    }
    const email = target.email.value

    const emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (emailExpression.test(email)) {
      console.log("OK")
    } else {
      console.log("NG")
    }
    console.log(performance.now() - startsAt)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name={"email"} />
        <button type="submit">Run</button>
      </form>
    </>
  )
}

export default App
