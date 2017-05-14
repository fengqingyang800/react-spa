
import { get } from '../util/request';

const receiveBook = (data) => ({
    type: 'RECEIVE_BOOK',
    payload: data.map(d => d)
});

export default () => async (dispatch, getState) => {
    try {
        let res = await get('/api/book');
        await dispatch(receiveBook(res.data.books));
        return res;
    } catch (error) {
        // console.log('error: ', error);
    }
}