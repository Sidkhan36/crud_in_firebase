// import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Nav from "./components/Nav";
import MuiLayout from "./components/MuiLayout";
import "./App.css";
// import { db } from "./firebase-config";
// import { collection, getDocs } from "firebase/firestore";

function App() {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   };
  //   getUsers();
  // }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addnew" element={<AddNew />} />
            <Route path="display" element={<Display />} />
            <Route path="muiLayout" element={<MuiLayout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
