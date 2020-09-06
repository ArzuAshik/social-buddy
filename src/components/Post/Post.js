import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Post.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar } from '@material-ui/core';

const Post = ({ pst: { id, title, body } }) => {
    const [user, setUser] = useState({name: 'Name', email: 'abc@xyz.com', img: ''})
    useEffect( () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            const name = `${data.results[0].name.first} ${data.results[0].name.last}`;
            const email = data.results[0].email;
            const img = data.results[0].picture.large;
            setUser({name: name, email: email, img: img})
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <Card className='post' style={{ margin: '20px 0' }}>
            <CardHeader
                avatar={
                    <Avatar src={user.img} aria-label="recipe" style={{background: 'DodgerBlue'}}>
                        AR
                </Avatar>
                }
                title={user.name}
                subheader={user.email}
            />
            <CardContent>
                <Typography className='post-title' color='primary' variant="h5" component="h2">
                    <Link to={`/post-details/${id}`}>
                        {title}
                    </Link>
                </Typography>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post-details/${id}`}>
                    <Button size="small" variant="contained" color="primary">Show Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Post;