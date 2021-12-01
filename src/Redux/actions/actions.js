import * as action from './actionTypes';

export const addTodo = () => {
	return {
		type: action.ADD_DOTO,
		payload: {
			id: 1,
			text: 'Aloha!',
			complete: false,
		},
	};
};

export const removeTodo = () => {
	return {
		type: action.REMOVE_DOTO,
		payload: {
			id: 1,
		},
	};
};
