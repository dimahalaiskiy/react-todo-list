import React from 'react';
import { ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { makeStyles } from '@mui/styles';

const Todo = ({ text, complete, key, todo, todos, setTodos }) => {
	const removeTodo = (e) => {
		e.preventDefault();
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const changeTodoStatus = (e) => {
		e.preventDefault();
		setTodos(
			todos.map((el) => {
				if (el.id === todo.id)
					return {
						...el,
						complete: !el.complete,
					};
				return el;
			})
		);
	};

	const useStyles = makeStyles({
		active: {
			heigth: '50px',
			padding: '0px',
			paddingTop: '5px',
			paddingBottom: '2px',
		},
		complete: {
			heigth: '50px',
			padding: '0px',
			paddingTop: '5px',
			paddingBottom: '2px',
			textDecorationLine: 'line-through',
		},
		completeBtn: {
			fill: '#00e676',
		},
	});

	const classes = useStyles();

	return (
		<ListItem
			key={key}
			position='static'
			className={todo.complete ? classes.complete : classes.active}>
			<ListItemButton
				color='secondary'
				sx={{ padding: '10px', borderRadius: '8px', border: '2px solid #1976d2' }}>
				<IconButton onClick={changeTodoStatus}>
					<CheckCircleIcon className={todo.complete ? classes.completeBtn : ''} />
				</IconButton>
				<ListItemText>{text}</ListItemText>
				<IconButton onClick={removeTodo}>
					<DeleteIcon />
				</IconButton>
			</ListItemButton>
		</ListItem>
	);
};

export default Todo;
