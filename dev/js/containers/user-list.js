import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
//simple component
class UserList extends Component {
  createListItems() {
    return this.props.users.map((user) => {
      return(
        <li
          key={user.id}
          onClick={()=>this.props.selectUser(user)}>
            {user.first} {user.last}
          </li>
      );
    });
  }
  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

// convert component to container using mapStateToProps
// state - the store
// this filters down the entire state(store) to only needed information.
function mapStateToProps(state){
  return ({
    users:state.users,
  });
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
