import "./stylesheets/reset.css"
import "./stylesheets/App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className="homeMain">
        <h1><a href="/shop">Enter Shop</a></h1>
      </main>
    </div>
  );
}

export default App;
