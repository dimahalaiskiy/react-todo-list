import React from 'react';
import Todo from '../Todo/Todo';

const Todos = ({ todos, setTodos, filteredTodo }) => {
	return (
		<div>
			{filteredTodo.map((todo) => (
				<div key={todo.id}>
					<Todo
						removeTodo={todo.removeTodo}
						text={todo.text}
						complete={todo.complete}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
					/>
				</div>
			))}
		</div>
	);
};

export default Todos;
