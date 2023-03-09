import React from "react";
import Header from "./Header";
import PostMapSection from "./postmappage/PostMapSection";


// import { useEffect } from "react";
// import axios from 'axios';

const PostMapPage = () => {
    // async function getData() {
    //     await axios.get('http://localhost:8080/api/board')
    //     .then((response) => {
    //         console.log('response data : ', response.data);
    //     })
    //     .catch((error) => {
    //         console.log('axios error');
    //     });
    // }
    // useEffect(() => {
    //     getData();
    // }, []);
    return (
    <>
        <Header/>
        <PostMapSection/>
    </>
    );
}

export default PostMapPage;