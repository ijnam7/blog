import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "맛있는 육회 비빔밥"

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ {color: "blue", fontSize: "30px"} }>개발자 Blog</div>
      </div>
      <h4> { posts } </h4>
    </div>
  );
}

export default App;
