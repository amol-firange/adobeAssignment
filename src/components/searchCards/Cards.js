import React, { memo } from 'react';
import './cards.scss'

function Cards(props) {
    const {users} = props
    return (
        <div className='cards-wrapper'>
            <div className='left-section'>
                <img src={props.user.profile_image_url} />
                <div className='post-dtl'>
                <p>{props.user.screen_name}</p>
                <p>{"@" + props.user.screen_name}</p>
                <p>{props ? props.created_at : ""}</p>    
                </div>
            </div>
            <div className="right-section">
                
                <div className='post-comment'>
                    <p>{props.text}</p>
                </div>
                
            </div>
        </div>
    )
}
export default memo(Cards)