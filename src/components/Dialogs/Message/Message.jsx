import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.message + ' ' + (props.sender === 1 ? s.left : s.right)}>
            {props.message}
        </div>
    )
}

export default Message;