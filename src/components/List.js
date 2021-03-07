import { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function List() {
  const [todos, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 15;
  const parentRef = useRef();
  const childRef = useRef();
  const intersected = useScroll(parentRef, childRef, () => fetchTodos(limit, page));

  function fetchTodos(limit, page) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodo(prev => [...prev, ...json]);
        setPage(prev => prev + 1)
      })
  }


  return (
    <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
      {todos.map(todo =>
        <div key={todo.id} style={{ padding: 30, border: '1px solid blue' }}>
          {todo.id}. {todo.title}
        </div>
      )}
      <div ref={childRef}>+</div>
    </div>
  )
}