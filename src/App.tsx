import "./App.css";
import Logo from "./assets/react.svg?react";
import Bear from "./assets/bear.svg?react";

function App() {
  return (
    <>
      <div>
        {/* <Logo width={300} height={300} /> */}
        <Bear width={400} height={400} />
      </div>
    </>
  );
}

export default App;
