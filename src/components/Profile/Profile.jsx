import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.img} src={'https://s1.1zoom.me/b5050/381/401048-blackangel_1366x768.jpg'} />
            <MyPosts />
        </div>
    );
}

export default Profile;