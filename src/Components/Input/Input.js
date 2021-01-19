import React from "react";

export default ({onChange,inputValue}) => {
    const myOnChange = (inputValue) => {
        onChange(inputValue)
    }
    return (
        <div>
            <input type={'number'} onChange={myOnChange} value={inputValue}/>
        </div>
    )
}