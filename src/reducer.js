// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_DAILY":
            return {
                ...state,
                daily: action.payload,
            };
        case "SET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
            };
        case "SET_COUNTRY_DATA":
            return {
                ...state,
                countryData: action.payload,
            };
        case "SET_MOTHERLOAD":
            return {
                ...state,
                motherload: action.payload,
            };
        case "SET_MAP":
            return {
                ...state,
                mapPosition: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
