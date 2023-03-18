export function TodoItem({ todo, handleTaskRemove }) {
    return (
        <>
            <div className='task-txt'>{todo.txt}</div>
            <button onClick={ev => handleTaskRemove(ev, todo.id)} className='btn-close'>
                X
            </button>
        </>
    )
}
