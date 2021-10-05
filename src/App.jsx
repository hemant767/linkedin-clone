import React , {useEffect} from 'react';
import './App.css';
import  Header  from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login'
import {useDispatch , useSelector} from 'react-redux';
import { login ,logout ,selectUser} from './features/userSlice';
import { auth } from './firebase';
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in 
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoUrl,
          })
        );

      } else{
        // user is loged out
        dispatch(logout());
      }
    });
  } , []);
  return (
    <div className="App">
      <Header />

      {!user?(
        <Login />
      ):(
        <div className="App_body">
          <Sidebar />
          <Feed />

        </div>)
      }
      
    </div>

    
  );
}

export default App;
