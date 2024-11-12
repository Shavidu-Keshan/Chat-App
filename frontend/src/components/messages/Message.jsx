const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className='w-10 rounded-full'>
                    <img 
                    alt='tailwindcss chart bubble componnent'
                    src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"}
                    />
                </div>

            </div>
            <div className="chat-bubble text-white bg-blue-500">
                Hi! Whats upp?
            </div>
        </div>
    )
}

export default Message