/**
 * @file userinfo.js
 * @author deo
 */

import ActionType from '../actions/ActionType';

let initState = {
    data: {},
};

export default function(state = initState, action) {
    switch (action.type) {
        case ActionType.RECEIVE_USERINFO:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return {...state}
    }
}
