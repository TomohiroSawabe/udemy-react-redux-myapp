import { INCREMENT, DECREMENT } from '../actions';

// 状態（state)の初期値をオブジェクトとして定義
const initialState = {
    value: 5
}

// Count Reducerを関数として定義
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1}

        case DECREMENT:
            return { value: state.value - 1}

        default:
            return state
    }
}
