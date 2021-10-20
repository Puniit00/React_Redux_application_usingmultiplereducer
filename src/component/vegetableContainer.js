import React from 'react'
import { connect } from 'react-redux'
import {Button} from 'reactstrap'
import buy_vegetable from '../Redux/Vegetables/vegetableAction'

function VegetableContainer(props) {
    return (
        <div>
           <h1>Number of vegetable - {props.Number_Of_Vegetables}</h1> 
           <Button color="primary" outline onClick={props.buy_vegetable}>Buy Vegetables</Button>
        </div>
    )
}

//In below function now whatever props fruitContainer is receiving it will receive an extra property which is numberoffruits
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        Number_Of_Vegetables: state.vegetableReducer.Number_Of_Vegetable
    }
}
    //task 1 : defining statetoprops

// In below function now whatever props fruitContainer is receiving it will recieve an extre prop which dipatches the action in this cae it is buyfruit
const mapDispatchToProps = (dispatch)=>{
    return{
        buy_vegetable: ()=> dispatch(buy_vegetable())
    }
}// task 2: dispatching state to props

export default connect(mapStateToProps,mapDispatchToProps)(VegetableContainer)