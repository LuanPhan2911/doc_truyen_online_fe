import { useAuth } from "../hooks";
import Root from "../routes/Root";
import "./App.scss";

function App() {
  useAuth();
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
