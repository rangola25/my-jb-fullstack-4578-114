import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "../../posts/profile/Profile";
import Feed from "../../posts/feed/Feed";
import NotFound from "../not-found/NotFound";
import EditPost from "../../posts/edit/EditPost";
import { useState } from "react";

export default function Routing(): JSX.Element {

    const [enteredProfile, setEnteredProfile] = useState<boolean>(false)

    function updateEnteredProfile(): void {
        if(!enteredProfile) {
            setEnteredProfile(true)
        }
    }

    const [enteredFeed, setEnteredFeed] = useState<boolean>(false)

    function updateEnteredFeed(): void {
        if(!enteredFeed) {
            setEnteredFeed(true)
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/profile"/>} />
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/profile" element={<Profile enteredValue={enteredProfile} setEntered={updateEnteredProfile} />} />
            <Route path="/feed" element={<Feed enteredValue={enteredFeed} setEntered={updateEnteredFeed} />} />
            <Route path="/edit/:id/" element={<EditPost />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
