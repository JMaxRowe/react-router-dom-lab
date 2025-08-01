import {Link} from 'react-router'
const MailboxList = ({mailboxes}) => {

    return(
        <>
        <h1>Mailboxes</h1>
            {mailboxes.map ((mailbox, index) =>{
                return(
                    <ul>
                        <Link 
                    key={mailbox._id} 
                    to={`/mailboxes/${mailbox._id}`}
                    className="mail-box"
                    >
                        <h3>Box #{mailbox._id}</h3>
                    </Link>
                    </ul>
                    
                )
            })}
        </>
    )
}

export default MailboxList