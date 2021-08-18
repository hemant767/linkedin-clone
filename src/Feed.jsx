import React , {useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Post from './Post'

const Feed = () => {

    const[posts , setPost] = useState([])

    const sendPost = (e) => {
        e.preventDefault();
        
        
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text"></input>
                        <button onClick={sendPost} type="submit" className="">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="blue" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="orange" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="Gray" />
                    <InputOption Icon={ViewDayIcon} title="Article" color="blue" />
                </div>
            </div>

            {posts.map(([post]) => (
                <Post />
            ))}
            
            <Post  
            name="Xyz" 
            description="developer"
            message="Unknown"

            />
            
        </div>
    )
}

export default Feed
