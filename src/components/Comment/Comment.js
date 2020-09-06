import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Avatar, CardHeader } from '@material-ui/core';

const Comment = ({ comment: { name, email, body } }) => {

    const [userImage, setUserImage] = useState('https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art-thumbnail.png');

    useEffect( () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            const img = data.results[0].picture.large;
            setUserImage(img)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <Card variant="outlined">
            <CardMedia style={{ width: '100px', float: 'left', marginRight: '20px', padding: '10px' }}>
                <img style={{ width: '100%', borderRadius: '50%' }} src={userImage} alt="" />
            </CardMedia>

            <CardHeader
                title={name}
                subheader={email}
            />
            
            <CardContent>
                <Typography variant="body2" component="p">{body}</Typography>
            </CardContent>
        </Card>
    );
};

export default Comment;