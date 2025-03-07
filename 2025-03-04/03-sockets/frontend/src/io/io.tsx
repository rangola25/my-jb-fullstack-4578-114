/* eslint-disable prefer-const */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import Post from "../models/post/Post";
import { newPost } from "../redux/profileSlice";
import io from "socket.io-client"

export default function Io(props: PropsWithChildren): JSX.Element {
    
    const { children } = props

    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL)

        socket.onAny((eventName, payload) => {
            switch(eventName) {
                case 'newPost':
                    let newPostPayload = payload as Post
                    dispatch(newPost(newPostPayload))
                    break
            }
        })
    }, [])
}