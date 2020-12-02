import Button from "../../components/UI/Button/Button";
import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      About {count}
      <br />
      <button onClick={() => setCount(count + 1)}>click me</button>
      <Button clicked={() => setCount(count + 1)}>clickme22</Button>
    </div>
  );
}
