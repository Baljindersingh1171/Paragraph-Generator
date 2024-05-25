import { useState } from "react";
import text from "./data.js";
function Form({ count, setCount }) {
  const [content, setContent] = useState([]);
  function handleChange(e) {
    // if (e.target.value <= 8 && e.target.value >= 1) {
    //   setCount(e.target.value);
    // }
    setCount(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    let a = parseInt(count);
    console.log(count);
    setContent(text.slice(0, a));
  }
  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <input
          min="1"
          max="8"
          step="1"
          type="number"
          onChange={handleChange}
          value={count}
        />
        <button>Generate</button>
      </form>
      <div className="para">
        {content.map((t) => (
          <p>{t}</p>
        ))}
      </div>
    </div>
  );
}

export default Form;
