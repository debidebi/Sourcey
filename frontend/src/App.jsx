import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyProvider from './MyProvider';
import { MyContext } from './MyProvider';
import Home from './Home';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </MyProvider>
    )
  }
}

// return (
//   <MyProvider>
//     <MyContext.Consumer>
//       {(context) => {
//         let users;
// 
//         if (context.users) {
//           users = context.users.map((user) => {
//             return (<li>{user.username}</li>);
//           })
//         }
// 
//         return (
//           <ul>
//             {users}
//           </ul>
//         )
//       }}
//     </MyContext.Consumer>
//   </MyProvider>
// );

export default App;
