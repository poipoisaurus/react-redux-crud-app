import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return <React.Fragment>
//       <label htmlFor="hoge">ほげ</label>
//       <button type="button" onClick={() => console.log('hoge!')} >ボタン</button>
//     </React.Fragment>;
//   }
// }

const App = () => {
  const profiles = [
    {
      name: '荒瀬',
      age: 25,
    },
    {
      name: '吉田',
      age: 27,
    },
    {
      name: 'ほげお'
    }
  ]
  return <div>
    {
      profiles.map((props, index) => {
        return <User name={props.name} age={props.age} key={index}/>
      })
    }
  </div>
}

const User = (props) => {
return <div>I am {props.name}! I am {props.age} years old!</div>;
}

User.defaultProps = {
  age: '秘密'
}

export default App;
