import React from 'react'
import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className='User'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">

                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                            alt=''
                            className='userShowImg'
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Nitin Jangid</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowButtom'>
                        <span className='userShowTitle'>Accout Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>Nitin2003</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>30.08.2002</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>+91 784195679</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>Nitin2003@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>Pune | India </span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type='text'
                                    placeholder='Nitin2003'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type='text'
                                    placeholder='Nitin Jangid'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type='text'
                                    placeholder='Nitin2003@gmail.com'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type='text'
                                    placeholder='+91 784195679'
                                    className='userUpdateInput'
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type='text'
                                    placeholder='Pune | India'
                                    className='userUpdateInput'
                                />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                    alt=''
                                    className='userUpdateImg'
                                />
                                <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                                <input type='file' id='file' style={{ display: "none" }} />
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
