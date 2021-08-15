import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Sidebar.css'
const Sidebar = () => {

    const recentItem = (topic)=> {
       return(
        <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
       ) 
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h1>xyz</h1>
                <h3>xyz@gmail.com</h3>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="stat__number">24 </p>             
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="stat__number" >0</p>
                
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react')}
                {recentItem('c++')}
                {recentItem('redux')}
                
            </div>
            
        </div>
    )
}

export default Sidebar
