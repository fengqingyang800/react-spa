
let initState = {
    data: []
};

export default function(state = initState, action) {
    switch (action.type) {
        case 'RECEIVE_BOOK':
            return {
                ...state,
                data: action.payload
            };

        default:
            return {...state};
    }
}
