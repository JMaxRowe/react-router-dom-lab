import {Link} from 'react-router'
const MailboxList = (mailboxes) => {

    return(
        <>
            {mailboxes.map ((mailbox, index) =>{
                return(
                    <Link to="/mailbox._id">Mailbox{mailbox._id}</Link>
                )
            })}
        </>
    )
}

export default MailboxList