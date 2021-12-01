import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, Button } from '@mui/material';
import Todos from '../Todos/Todos';

const MakeTodo = () => {
	const [filter, setFilter] = useState('all');
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [filteredTodo, setFilteredTodo] = useState([]);

	useEffect(() => {
		filteredTodos();
	}, [todos, filter]);

	const filteredTodos = () => {
		switch (filter) {
			case 'active':
				setFilteredTodo(todos.filter((todo) => todo.complete === false));
				break;
			case 'done':
				setFilteredTodo(todos.filter((todo) => todo.complete === true));
				break;
			default:
				setFilteredTodo(todos);
				break;
		}
	};

	const onChangeFilter = (e) => {
		setFilter(e.target.value);
	};

	const saveTodo = (e) => {
		setTodo(e.target.value);
	};

	const createTodo = (e) => {
		e.preventDefault();
		setTodo('');
		setTodos([...todos, { text: todo, complete: false, id: Math.random() * 1000 }]);
	};

	return (
		<div>
			<FormControl
				onSubmit={createTodo}
				sx={{ display: 'flex', flexDirection: 'row', width: '500px' }}>
				<Select
					sx={{ width: '140px', textAlign: 'center' }}
					value={filter}
					laber='filter'
					onChange={onChangeFilter}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}>
					<MenuItem value='all'>All</MenuItem>
					<MenuItem value='active'>Active</MenuItem>
					<MenuItem value='done'>Done</MenuItem>
				</Select>
				<TextField
					fullWidth
					value={todo}
					onChange={saveTodo}
					variant='outlined'
					label='Create a task'></TextField>
				<Button onClick={createTodo} variant='contained' color='warning'>
					Add
				</Button>
			</FormControl>
			<Todos filteredTodo={filteredTodo} todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default MakeTodo;
