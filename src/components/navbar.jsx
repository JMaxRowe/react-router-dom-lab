import {Link} from 'react-router'

const Navbar = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/mailboxes">MailBoxes</Link>
            <Link to="/new-mailbox">New Mailbox</Link>
        </>
    )
}

export default Navbar