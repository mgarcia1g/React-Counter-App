import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FirstComponent />
          <ThirdComponent />
          <BabelCompiler />
          <Counter by={500} megaadd={1000}/>
        </header>
      </div>
    );
  }
}

//Class Component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        <h1 className='App-logo'>Class Component</h1>
        <p>*Use for more complex use case </p>
      </div>
    )
  }
}


//Functional Component
function ThirdComponent() {
  return (
    <di>
      <h1>Functional Component</h1>
      <p>*Use for more simple Components</p>
    </di>
  )
}

function BabelCompiler() {
  return (
    <div>
      <h1>BABEL</h1>
      <p>Bible is a compiler that can <br></br> convert newer js to older versions</p>

    </div>
  )
}


export default App;
