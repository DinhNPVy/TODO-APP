import React, {useState} from 'react'
import TodoForm from './TodoForm'
function EditTodo(){

    const [text, setText] = useState()
    const [value, setValue]   = useState()

    const projects = 
    [
        {
            id: 1,
            name: "personal",
            numOfTodos: 0
        },
        {
            id: 2,
            name: "work",
            numOfTodos: 1
        },
        {
            id: 3,
            name: "other",
            numOfTodos: 1
        },

    ]
    function handleSubmit(e){

    }
    return (
        <div className='EditTodo'>
            <div className="header">
                Edit Todo
            </div>
            <div className="container">
                <TodoForm
                    handleSubmit = {handleSubmit}
                    text = {text}
                    text={text}
                    setText={setText}
                    value={value}
                    setValue={setValue}
                    projects={projects}
                />
            </div>

        </div>

    )
}

export default EditTodo