import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from  "react-icons/io";
import * as BsIcons from  "react-icons/bs";
import * as GrIcons from  "react-icons/gr";
import './Nav.css'



export const sidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Display",
        path: '/display',
        icon: <BsIcons.BsDisplay/>,
        cName: 'nav-text'
    },
    {
        title: "AddNew",
        path: '/addnew',
        icon: <GrIcons.GrUserAdd/>,
        cName: 'nav-text'
    },
]