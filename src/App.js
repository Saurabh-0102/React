import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [cardcss, setcss] = useState("bg-danger");
 
  const primary = () => setcss("bg-primary");
  const dark = () => setcss("bg-dark text-white");
  const normal = () => setcss("bg-white");
  const list = [1, 1, 1, 1, 1, 1, 1];

  return (
    <div>
      <input type="button" value="Primary" onClick={primary} />
      <input type="button" value="dark" onClick={dark} />
      <input type="button" value="normal" onClick={normal}/> 
      <h1 className={cardcss}>Hello</h1>
      <h1 className={cardcss}>Hello</h1>
      <h1 className={cardcss}>Hello</h1>
      <h1 className={cardcss}>Hello</h1>
      <h1 className={cardcss}>Hello</h1>
    </div>
  );
}
