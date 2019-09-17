import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class FriendForm extends React.Component {
    state = {
      friend: {
        name: '',
        email: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        friend: {
          ...this.state.friend,
          [e.target.name]: e.target.value
        }
      });
    };
  
    submit = e => {
      e.preventDefault();
      axiosWithAuth()
      .post
      ('http://localhost:5000/api/friends', this.state.friend)
      .then(res =>  { console.log(res.data)
      })

      .catch(err => console.log(err.response));
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.submit}>
            <input
              type="text"
              name="name"
              value={this.state.friend.name}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              value={this.state.friend.email}
              onChange={this.handleChange}
            />
            <button>Add Friend</button>
          </form>
        </div>
      );
    }
  }
  
  export default FriendForm;
  