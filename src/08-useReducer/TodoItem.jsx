
export const TodoItem = ({ todo, onDeleteTodo, onToogleTodo }) => {

  return (

    <li

      key={todo.id}
  
      className="list-group-item d-flex justify-content-between"
  
    >
  
      <span

        onClick={ () => onToogleTodo(todo.id) }

        aria-label="span"

        className={`align-self-center ${(todo.done) ? "text-decoration-line-through" : ""}`}>
      
        {todo.description}
      
      </span>
    
      <button aria-label="button" onClick={() => onDeleteTodo(todo.id)} className="btn btn-dark">Borrar</button>
    
    </li>
  
  );

};