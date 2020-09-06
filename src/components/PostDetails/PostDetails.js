import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';
import Nofund from '../Nofound/Nofund';

const PostDetails = () => {
    const { postId } = useParams();
    const [postInfo, setPostInfo] = useState({title: 'Loading...'});
    const url = 'https://jsonplaceholder.typicode.com/posts/' + postId;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPostInfo(data))
    }, [])

    // !postInfo.title && setPostInfo({title: 'Post Not Found.', body: '404'})

    if(!postInfo.title){
        setPostInfo({title: 'Post Not Found', body: '', notFound: true});
    }

    const { title, body } = postInfo;
    return (
        // !postInfo.notFound && <Comments postID={postId}/>


        postInfo.notFound === true ? 
        <Nofund text ='Post Not Found'/>
        : 
        <div>
            <Card style={{ margin: '20px 0' }}>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
            <Comments postID={postId}/>
        </div>
    );
};

export default PostDetails;