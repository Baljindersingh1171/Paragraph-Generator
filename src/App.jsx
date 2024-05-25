import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <Form count={count} setCount={setCount} />
    </>
  );
};
export default App;
