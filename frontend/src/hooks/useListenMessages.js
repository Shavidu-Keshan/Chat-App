import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const { socket } = useSocketContext();

    const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on("newMessages", (newMessage) =>{
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessages");

    },[socket, messages, setMessages]);
}

export default useListenMessages