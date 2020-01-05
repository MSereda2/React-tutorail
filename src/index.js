import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    

    render() {
        return (
            <h1>I love life</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
