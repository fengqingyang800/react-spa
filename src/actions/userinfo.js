/**
 * @file userinfo.js
 * @author deo
 */

import { getUserInfo } from '../service';
import ActionType from './ActionType';

const receive = (data) => ({
    type: ActionType.RECEIVE_USERINFO,
    payload: data
});

export default () => async (dispatch, getState) => {
    try {
        let res = await getUserInfo();
        await dispatch(receive(res.data));
        return res;
    } catch (error) {
        // console.log('error: ', error);
    }
}
