import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.img}
                 src={'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'}/>
            <div className={s.dscBlock}>ava + dsc</div>
        </div>
    );
}

export default ProfileInfo;