import { useCallback, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
const LIMIT = 15;

export function List() {
  const [todos, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const parentRef = useRef();
  const childRef = useRef();

  const fetchTodosHandler = useCallback((page) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${LIMIT}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodo(prev => [...prev, ...json]);
        setPage(prev => prev + 1)
      })
  }, [])

  useIntersectionObserver(parentRef, childRef, fetchTodosHandler, page);

  return (
    <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
      {todos.map(todo =>
        <div key={todo.id} style={{ padding: 30, border: '1px solid blue' }}>
          {todo.id}. {todo.title}
        </div>
      )}
      <div ref={childRef}></div>
    </div>
  )
}