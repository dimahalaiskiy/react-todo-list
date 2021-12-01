import * as actions from '../actions/actionTypes';

let lastId = 1;

const reducer = (state = [], action) => {
	switch (action.type) {
		case actions.type.ADD_DOTO:
			return [
				...state,
				{
					id: ++lastId,
					text: action.payload.text,
					complete: false,
				},
			];
		case actions.type.REMOVED_DOTO:
			return state.filter((todo) => todo.id !== action.payload.id);
		default:
			return state;
	}
};
