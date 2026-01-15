import React from 'react'

export default function Todo() {
    function handleAddTodo() {

        // let todoTitle = document.getElementById('todoTitle').value;
        console.log("Adding todo...", todoTitle);
    }

    return (
        <>
            <div className="">My Todo's</div>
            <form action="" onSubmit={handleAddTodo()}>
                <div className="">
                    <label htmlFor="">Todo Title</label>
                    <input type="text" name="" placeholder='Enter your todos here' id="todoTitle" />
                </div>

                <div className="">
                    <label htmlFor="">Due Date</label>
                    <input type="date" name="" id="" />
                </div>

                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
