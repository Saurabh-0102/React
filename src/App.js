import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let [counter, setcounter] = useState(0);

  const increment = () => {
      counter = counter + 1;

      setcounter(counter);
  };

  return (
    <div>
      <h4>Hello</h4>
      <input type="text" value="Type here" />
      <input type="button" value="Chick Me" onClick={increment} />
      <div>
          Like {counter}
      </div>
    </div>
  );
}
