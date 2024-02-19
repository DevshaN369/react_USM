import React, { useState } from "react";
import "./Home.css"
import { useDispatch } from "react-redux";
import {addUser} from '../../slices/UserSlices'
const Home = () => {
  const Dispatch=useDispatch()
  const [users, setUsers] = useState({
    username:"",
    age:"",
    contact:"",
    address:""
  })
  const handleClick=()=>{
    Dispatch(addUser(users))
    setUsers({
    username:"",
    age:"",
    contact:"",
    address:""
    })
    // console.log('--user--',users);
  }
  const handleChange=(event)=>{
    const {name,value}=event.target
    setUsers((curr)=>{
      return{
        ...curr,
        [name]:value
      }
    })
  }
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_inputField">
          <label>Username</label>
          <br />
          <input value={users.username} type="text" name="username" onChange={handleChange}/>
        </div>
        
        <div className="home_inputField">
          <label>Contact</label>
          <br />
          <input value={users.contact} type="text" name="contact" onChange={handleChange} />
        </div>
        <div className="home_inputField">
          <label>Age</label>
          <br />
          <input value={users.age} type="text" name="age" onChange={handleChange} />
        </div>
        <div className="home_inputField">
          <label>Address :</label>
          <br />
          <textarea style={{ resize: "none"}}
          value={users.address}
          name="address"
          onChange={handleChange}
          rows={5}
          cols={40} 
          />
        </div>
        <button className="home_btn" onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default Home;
