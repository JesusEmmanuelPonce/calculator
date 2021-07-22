import { CHANGE_THEME } from "../types";

const initialState = {
    theme : "dark",
};

const calculatorReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return {
                theme: action.payload.theme
			};
		default:
			return state;
	}
};

export default calculatorReducer;
