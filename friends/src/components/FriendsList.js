import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friends';
import FriendsForm from './FriendsForm';

class FriendList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
}

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data);
            this.setState({
               ...this.state,
               friends: res.data
            })
        })
        .catch(error => console.log(error.response));
    }
 render() {
        return (
            <div className='friends-container'>
                <div className='friends-list'>
                    <h2>Friends:</h2>
                    {this.state.friends.map(friends => {
                        return <Friend key={friend.id} name={friend.name} email={email} />
                    })}
                </div>
                <FriendList />
            </div>
        )
    }
}

export default FriendList;