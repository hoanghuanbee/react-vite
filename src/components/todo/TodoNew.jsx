import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;
    //addNewTodo("eric")
    const handleClick = () => {
        console.log(">>>Check valueInput: ", valueInput)

    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    );
}
export default TodoNew;