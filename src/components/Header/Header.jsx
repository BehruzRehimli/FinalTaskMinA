import React, { useEffect, useState } from 'react'
import settings from "../../jsons/settings.json"
import menu from "../../jsons/menu.json"
import user from "../../jsons/user.json"
import { Link } from 'react-router-dom'
import { BiSolidMessageDetail } from "react-icons/bi"
import { IoIosNotifications } from "react-icons/io"
import { IoMoonOutline } from 'react-icons/io5'
import { AiFillCaretDown } from 'react-icons/ai'

const Header = () => {

    const setLight=()=>{
        document.body.setAttribute("data-theme","light")
    }
    const setDark=()=>{
        document.body.setAttribute("data-theme","dark")
    }

    const [theme,setTheme]=useState(settings.darkmode)

    useEffect(()=>{
        if (theme) {
            setDark()
        }
        else{
            setLight()
        }
    },[theme])

    return (
        <header>
            <div className="my-container">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="logo d-flex align-items-center">
                        <img src={settings.logo} alt="logo" />
                        <Link to={"/"}>{settings.logo_title}</Link>
                    </div>
                    <div className="tab-menu">
                        <nav>
                            <ul>
                                {
                                    menu.map((elem, index) => {
                                        return <Link to={elem.path} key={elem.id}><li >{(elem.label.slice(0, elem.label.length-1) + " " + elem.label.slice(elem.label.length-1))}</li></Link>
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="user d-flex align-items-center ">
                        <div className='buttons d-flex'>
                            <button>
                                <BiSolidMessageDetail style={{ color: "#00ddff" }} />
                            </button>
                            <button className='ms-2'>
                                <IoIosNotifications style={{ color: "#ffaa00" }} />
                            </button>
                            <button onClick={()=>{
                                setTheme(!theme)
                            }} className='ms-2'>
                                <IoMoonOutline style={{ color: "#8ddb29" }} />
                            </button>
                        </div>
                        <div className="info ps-4">
                            <p className='name'>{user.name}</p>
                            <p className='other'>Vote: {user.vote}, Survey: {user.survey}</p>
                        </div>
                        <div className='h-100'>
                            <AiFillCaretDown style={{ color: "var(--text-color)", marginLeft: "5px", cursor: "pointer" }} />
                        </div>
                        <div className='img h-100 d-flex align-items-center'>
                            <div className='photo-box'>
                                <img src={user.img} alt="user" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header