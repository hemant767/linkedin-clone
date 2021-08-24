import React , {useEffect , useState} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Post from './Post'
import {db} from "./firebase"
import firebase from "firebase"

const Feed = () => {
    const[input, setInput] = useState('');
    const[posts , setPosts] = useState([]);
    //useeffect act after data added to table
    //firebase sends data which we have to map
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
        
        setPosts(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,//updates id and data values to  new dataset in doc array in table
                    data: doc.data(),
                }
            ))
             
        )

        
        );
         

    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name:'Xyz',
            description:'developer',
            message:input,
            photoUrl:'',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"></input>
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

            {posts.map(({id , data: { name, description , message ,photoUrl }}) =>(//takes all datset id's and data's and render
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            
            
            
        </div>
    )
}

export default Feed
