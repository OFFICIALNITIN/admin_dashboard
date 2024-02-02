import React, { useEffect, useState } from 'react'
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import axios from 'axios'

export default function WidgetSm() {
    const [user, setUser ] = useState([])

    useEffect(()=>{
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true",{
                    headers:{
                        token:"Nitin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjM0MGVhMTJmMDU3MmVmNGZhMjYxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjM3MTQ0NSwiZXhwIjoxNzA2ODAzNDQ1fQ.-xY6jOqyAkcgMQOCIc-W1u4cjSzyMyCe6_-6Ju-LtAw"
                    }
                })
                setUser(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getNewUsers();
    })
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {user.map((u)=> (
                    <li className='widgetSmListItem' key={u._id}>
                    <img src={u.profilePic || "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"}
                        alt='' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>
                            {u.username}
                        </span>
                        <span className='widgetSmJobTitle'>
                            Software Engineer
                        </span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}
