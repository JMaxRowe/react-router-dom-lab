import { useParams} from 'react-router'

const MailboxDetails = ({mailboxes}) => {
    const {mailboxId} = useParams()
    const selectedBox = mailboxes.find(box => box._id === parseInt(mailboxId))

    if(!selectedBox){
        return <p>Mailbox not found</p>
    }

    return(
        <>
            <h2>Mailbox{selectedBox._id}</h2>
            <p>Owner: {selectedBox.boxOwner}</p>
            <p>Size: {selectedBox.boxSize}</p>
        </>
    )

}

export default MailboxDetails