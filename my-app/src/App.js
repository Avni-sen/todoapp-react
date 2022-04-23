import { useState } from "react";
import "./style.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandle = (e) => {
    if (input === "") {
      alert("Lütfen boş içerik girmeyiniz!");
    } else if (todos.find((todo) => todo.name === input)) {
      alert("Bu zaten yapacaklarınız içinde!!");
    } else {
      const newTodo = {
        name: input,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const removeTodo = (todoKey) => {
    setTodos(todos.filter((todo, key) => key !== todoKey));
  };

  const toogleTodo = (todoKey) => {
    setTodos(
      todos.map((todo, key) => {
        if (key === todoKey) {
          todo.done = !todo.done;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          onChange={inputHandler}
          placeholder="Ne yapacağınızı yazın..."
        />
        <button onClick={clickHandle}>Ekle</button>
        <hr />
        <p>
          ** Yapılan işleminiz için üstüne tıklayarak tamamlandığını
          belirtebilirsiniz.
        </p>
        <hr />
        <ul>
          {todos.map((todo, key) => (
            <li className={todo.done ? "done" : ""} key={key}>
              <span onClick={() => toogleTodo(key)}>{todo.name}</span>

              <button onClick={() => removeTodo(key)}>Sil</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
