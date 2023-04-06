import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LandingPage from "../components/LandingComponent/landing";
import NewPost from "../components/post/new/newpost";
import List from "../components/post/list/list";
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/post/list" element={<List />} />
            <Route path="/post/new" element={<NewPost />} />
        </Routes>
        
        </BrowserRouter>
    )
}