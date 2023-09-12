import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Posts from "./Posts";
import Pagination from "./Pagination";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const App = () =>{
    const [posts , setPosts]=useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage]=useState(1);
    const [postsPerPage]=useState(10);

    useEffect(() => {
        const fetchPosts = async() =>{
            setLoading(true);
            const res =await axios.get('https://jsonplaceholder.typicode.com/photos')
            const data = res.data;
            const extractedUrl = data.map(item => item.url);
            setPosts(extractedUrl)
            setLoading(false);
        }

        fetchPosts();
    },[]);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPost)
    

    //Change page
    const Paginate = (pageNumbers) => setCurrentPage(pageNumbers);
    return(
        <>
            <div className="container mt-5">
                <h1 className="text-primary mb-3">
                    My Blog
                </h1>
                
            </div>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} Paginate={Paginate}/>
        </>
    )
};
export default App;