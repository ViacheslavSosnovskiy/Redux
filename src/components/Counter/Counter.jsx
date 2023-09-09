import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement} from '../../store/counter/counterSlice'


const Counter = () => {
    const {total, step} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const handleClickPlus = dispatch(increment (step))
    const handleClickMinus = dispatch(decrement(step))
  return (
    <>
        <h2>Counter</h2>
        <div>
          <p>{total}</p>
          <button onClick={handleClickPlus}>plus</button>
          <button onClick={handleClickMinus}>minus</button>
        </div>
    </>
  )
}

export default Counter