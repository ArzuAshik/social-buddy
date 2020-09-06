import React, { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import Loading from '../Loading/Loading';

const Comments = ({postID}) => {
    const [comments, setComments] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
    

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [] )
    
    return (
        <div>
            <h3>Comments {comments.length}</h3>
            {
                comments.length !== 0 ? comments.map(data => <Comment key={data.id} comment={data} />) : <Loading></Loading>
            }
        </div>
    );
};

export default Comments;