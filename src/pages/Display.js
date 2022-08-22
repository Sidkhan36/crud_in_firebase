import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "../App.css";


const Display = () => {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  }, []);




  return (
    <div className="display">
      <h1> Display Record</h1>
    {users.map((user) => {
      return(
        <div className="display-content">
          {" "}
          {/* <span></span> */}
          <span>Name : {user.name} </span>
          {/* <span></span> */}
          <span>Age : {user.age}</span>
        </div>
      );
    })}

    </div>
  );
};

export default Display;
