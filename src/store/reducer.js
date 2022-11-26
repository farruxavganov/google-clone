export const initState = {
	trim: null
}

export const actionType = {
	SET_SEARCH_TRIM: "SET_SEARCH_TRIM"
}

const reducer = (state, action) => {
	if(action.type === actionType.SET_SEARCH_TRIM){
		return {
			...state,
			trim: action.trim
		}
	}else {
		return state
	}
}

export default reducer