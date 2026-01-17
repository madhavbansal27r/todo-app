import React from 'react'

const initialTodo = {
    title: "",
    dueDate: "",
    status: false
}

export default function Todo() {

    const [todo, setTodo] = React.useState(initialTodo);
    function handleAddTodo(event) {
        event.preventDefault();
        console.log(
            `Adding todo... with the title as ${todo.title} and due date as ${todo.dueDate} and the status is ${todo.status}`
        );
        setTodo(initialTodo);
    }

    return (
        <>
            <div className="">My Todo's</div>
            <form action="" onSubmit={handleAddTodo}>

                <div className="">
                    <label htmlFor="">Todo Title</label>
                    <input type="text" name="" placeholder='Enter your todos here' id="todoTitle" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                </div>

                <div className="">
                    <label htmlFor="">Due Date</label>
                    <input type="date" name="" id="todoDueDate" value={todo.dueDate} onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })} />
                </div>

                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
