import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.avatar} style={{background: props.avatar}}></div>
                <div className={s.name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default DialogItem;