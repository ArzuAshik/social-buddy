import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Loading from '../Loading/Loading';
import './Home.css';

const Home = () => {
    const [allPost, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    const [showPost, setShowPost] = useState(20);
    const tenPost = allPost.slice(0, showPost);

    function loadMore(){
        if(showPost < 100){
            setShowPost (showPost + 20);
        }else{
            alert('No new Post');
        }
    }

    return (
        <div>
            <h2>Total Post Loaded: {showPost}</h2>
            {
                allPost.length !== 0 ? tenPost.map(pst => <Post pst={pst} key={pst.id}/>) : <Loading/>
            }
            <button onClick={loadMore} className='main-btn'>Load More &#8594;</button>
        </div>
    );
};

export default Home;