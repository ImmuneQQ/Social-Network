import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={'https://avatars.mds.yandex.net/get-zen_doc/46847/pub_5d5fd95d97b5d400ad6aca4a_5d5fd9dd4735a600adf0da75/scale_1200'} />
            {props.message},
            likes: {props.likes}
            <button>like</button>
        </div>
    );
}

export default Post;