// Action creator : Action を返す関数
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Actionの定義
export const increment = () => {
    return {type: INCREMENT}
}

// 省略形
export const decrement = () => ({
    type: DECREMENT
})
