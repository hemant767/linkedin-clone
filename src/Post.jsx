import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Post.css'
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SendIcon from '@material-ui/icons/Send';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

const Post = ({name, description , message , photoUrl}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p> 
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>            
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray"/>
                <InputOption Icon={ShareIcon} title="Share" color="gray"/>
                <InputOption Icon={CommentIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareIcon} title="Send" color="gray"/>
            </div>

            
        </div>
    )
}

export default Post
