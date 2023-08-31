import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../store/counter/actions'

const Step = () => {
    const {step} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const {value} = e.target.elements.step;
        dispatch(setStep(Number(value)))
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input defaultValue={step}/>
            <button type="submit">set step</button>
        </form>
    </>
  )
}

export default Step