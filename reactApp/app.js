//smart
import MyEditor from './draftJsCode';
import { connect } from 'react-redux';

const React = require('react');
const ReactDOM = require('react-dom');
/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})
class App extends React.Component {
  render() {


    return (
      <p>React lives!</p> , // eslint-disable-line
      <MyEditor />
    )
  }
}
  const mapStateToProps = (state) => ({
    //  someStateProp: /* state.something typically */
  });

  const mapDispatchToProps = (dispatch) => ({
    //  someDispProp: /* some function that dispatches an action */
  });


  App = connect(mapStateToProps, mapDispatchToProps)(App);
  export default App;
