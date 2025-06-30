import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import Write from "./Components/Write";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <Write />
      </main>
    </div>
  );
}

export default App;
