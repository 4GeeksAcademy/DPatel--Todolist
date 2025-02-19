import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (taskInput.trim() === "") return;
        
        setTasks([...tasks, { title: taskInput, id: Date.now() }]);
        setTaskInput("");
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                        autoFocus={true}
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                </form>
            </header>
            

            <section className="main">
                <ul className="todo-list">
                    {tasks.length === 0 ? (
                        <li className="no-tasks">No tasks, add a task</li>
                    ) : (
                        tasks.map((task) => (
                            <li key={task.id} className="task-item">
                                <div className="view">
                                    <label>{task.title}</label>
                                    <button
                                    className="destroy"
                                    onClick={() => deleteTask(task.id)}
                                    >
                                    X
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </section>

            <footer className="footer">
                <span className="todo-count">
                    <strong>{tasks.length}</strong> item{tasks.length !== 1 ? "s" : ""} left
                </span>
            </footer>
        </section>
    );
};

export default Home;