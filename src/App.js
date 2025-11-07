import MultiCounter from "./components/MultiCounter";
import SimpleCounter from "./components/SimpleCounter";
import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <h3>Learn Redux Toolkit</h3>
      <SimpleCounter />
      <MultiCounter />
    </main>
  );
}
