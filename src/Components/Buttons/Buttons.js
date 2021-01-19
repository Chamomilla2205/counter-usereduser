import React from "react";

export default ({onClickChange,arr}) => {
    const myOnClickChange = (value) => {
        onClickChange(value)
    }
    return (
        <div>
            {
                arr.map(value => <button
                    value = {value}
                    key = {value.id}
                    onClick={() => myOnClickChange(value)}>
                    {value}
                </button>)
            }
        </div>
    )
}