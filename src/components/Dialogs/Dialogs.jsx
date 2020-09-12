import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    User 1
                </div>
                <div className={s.dialog}>
                    User 2
                </div>
                <div className={s.dialog}>
                    User 3
                </div>
                <div className={s.dialog}>
                    User 4
                </div>
                <div className={s.dialog}>
                    User 5
                </div>
            </div>
            <div class={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How r u?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;