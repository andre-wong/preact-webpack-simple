import { h, Component } from 'preact';
import style from './App.css'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <p className={style.text}>Preact Simple</p>
      </div>
    );
  }
}
