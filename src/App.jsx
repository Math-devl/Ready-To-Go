import { useState } from "react";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>Ready To Go</header>
      <main className="container">
        <section>
          <div>
            <button
              style={{
                backgroundColor: switch1 ? "purple" : "white",
                color: switch1 ? "white" : "purple",
              }}
              onClick={() => {
                setSwitch1(true);
              }}
            >
              On
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: !switch1 ? "purple" : "white",
                color: !switch1 ? "white" : "purple",
              }}
              onClick={() => {
                setSwitch1(false);
              }}
            >
              Off
            </button>
          </div>
        </section>
        <section>
          <div>
            <button>On</button>
          </div>
          <div>
            <button>Off</button>
          </div>
        </section>
        <section>
          <div>
            <button>On</button>
          </div>
          <div>
            <button>Off</button>
          </div>
        </section>
        <div>No WAY</div>
        <div>GO</div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
