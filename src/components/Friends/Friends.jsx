import React from 'react';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friends = props.state.sideBar.friends.map(friend => <Friend friendName={friend.name} />);
    return (
        <div>
            {friends}
        </div>
    );
}

export default Friends;