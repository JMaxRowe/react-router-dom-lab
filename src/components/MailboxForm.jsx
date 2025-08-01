import {useState} from 'react'

const MailboxForm = ({addbox}) =>{
    function createMailBox(formData) {
        const boxOwner = formData.get("boxOwner")
        const boxSize = formData.get("boxSize")
        addbox({boxOwner, boxSize})
    }
    
    return(
        <form method="POST" action={createMailBox}>
            <h1>New Mailbox</h1>

            <div>
                <label htmlFor="boxOwner">Enter a Boxholder:</label>
                <input
                id="boxOwner"
                name="boxOwner"
                type="text"
                placeholder="Boxholder name"
                required
                />
            </div>

            <div>
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select id="boxSize" name="boxSize" defaultValue="Small" required>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    )

}

export default MailboxForm