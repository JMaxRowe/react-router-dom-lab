import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import MailboxDetails from './components/MailboxDetails'
import MailboxList from './components/MailboxList'
import {Routes, Route} from 'react-router'
import MailboxForm from './components/MailboxForm'

const App = () => {
  const [mailboxes, setmailboxes] = useState([])

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxSize: formData.boxSize,
      boxOwner: formData.boxOwner
    }
    setmailboxes([...mailboxes, newMailbox])
  }
  return(
  <>
  <Navbar />
  <Routes>
    <Route path="/" element={<main><h1>Post Office</h1></main>} />
    <Route path="/mailboxes" element={<MailboxList mailboxes = {mailboxes}/>} />
    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    <Route path="/new-mailbox" element={<MailboxForm addbox = {addBox}/>} />
  </Routes>
  </>
  )
  
};

export default App;
