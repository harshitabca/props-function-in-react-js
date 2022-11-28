import "./styles.css";
import Display from "./Display";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Students</h1>
      <h2>Props Function Example in React</h2>
      <div className="list">
        <Display name="Harshita" class="BCA 2" />
        <Display name="Pooja" class="BCA 2" />
        <Display name="Preet" class="BCA 2" />
        <Display name="Lajja" class="BCA 2" />
        <Display name="Bhavesh" class="BCA 2" />
        <Display name="Rehan" class="BCA 2" />
        <Display name="Karan" class="BCA 2" />
      </div>
    </div>
  );
}
