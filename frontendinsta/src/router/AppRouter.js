import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LandingPage from "../components/LandingComponent/landing";
import NewPost from "../components/post/new/newpost";
export default function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            {/* <Route path="post" element={<postView />}> */}
        <Route path="new" element={<NewPost />} />
                {/* <Route path="all" element={<NewPost />} /> */}
            {/* </Route> */}
        </Routes>
        
        </BrowserRouter>
    )
}