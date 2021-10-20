import { Button } from 'reactstrap'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyFruit } from '../Redux/Fruit/fruitAction'

function HooksFruitContainer() {
    const Number_Of_Fruits = useSelector(state => state.fruitReducer.Number_Of_Fruits)
    const dispatch  = useDispatch()
    return (
        <div>
            <h1>Number of Fruits - {Number_Of_Fruits}</h1>
            <Button color="primary" onClick={()=>dispatch(buyFruit())}> Buy Fruits</Button>
        </div>
    )
}

export default HooksFruitContainer
