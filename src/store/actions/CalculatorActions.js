import { CHANGE_THEME } from "../types";

const changeTheme = theme => ({
	type    : CHANGE_THEME,
	payload : {
		theme,
	},
});

const CalculatorActions = {
    changeTheme,
};

export default CalculatorActions;