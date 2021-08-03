import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Notes from '../components/Notes'

const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }))
  return (
    <>
      <Form />
      <hr />
      <Notes notes={notes} />
      <Link to="/about">About this page</Link>
    </>
  )
}

export default Home
