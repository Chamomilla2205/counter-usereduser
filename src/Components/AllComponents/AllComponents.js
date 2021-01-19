import React, {useReducer, useState} from "react";
import Result from "../Result/Result";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";

const initialState = 0;

const reducer = (state,action) => {
    switch (action.type) {
        case 'CHANGE_ON_CLICK': {
            if ((state + action.payload) < 0) {
                return state = 0;
            }
            return state + action.payload

        }

        default: {
            return state;
        }
    }
}

export default function AllComponents() {
    const [state,dispatch] = useReducer(reducer,initialState);
    const [inputValue, setInputValue] = useState()
    const arr = [1,-1,100,-100]

    const onClickChange = (num) => {
        dispatch({type:'CHANGE_ON_CLICK', payload: num})
    }

    const onChangeInput = (ev) => {
        let inputValue = ev.target.value
        setInputValue(inputValue)
    }
    const clickOnSubmit = () => {
        dispatch({type:'CHANGE_ON_CLICK', payload:+inputValue})
        console.log(inputValue);
    }
    console.log(inputValue)
    return (
        <div>
            <Buttons onClickChange ={onClickChange} arr = {arr}/>
            <button onClick={() => onClickChange(-state)}>Reset</button>
            <Input onChange={onChangeInput} inputValue = {inputValue}/>
            <button onClick={clickOnSubmit}>SUBMIT</button>
            <Result result = {state}/>
        </div>
    )
}
