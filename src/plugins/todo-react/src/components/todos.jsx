import React, { useState, useEffect } from 'react'
import nextId from 'react-id-generator'
import { apiService } from '../services/api.service'
import { utilService } from '../services/util.service'
import { TodoItem } from './todo-item'

export function Todos() {
    const [todos, setTodos] = useState([])
    const [taskName, setTaskName] = useState('')

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const fetchedTodos = await apiService.query('get')
            if (fetchedTodos) {
                setTodos(fetchedTodos)
            }
        } catch (err) {
            console.log('err:', err)
        }
    }

    const saveDodos = async (url, payload) => {
        try {
            const res = await apiService.save(url, payload)
        } catch (err) {
            console.log('err:', err)
        }
    }

    const handleChange = ({ target }) => {
        const { value } = target
        setTaskName(value)
    }

    const handleSubmit = () => {
        if (!taskName) return
        const newTodo = {
            id: utilService.makeId(),
            txt: taskName,
            isChecked: false,
        }
        const newTodos = [newTodo, ...todos]
        setTodos(newTodos)
        setTaskName('')
        saveDodos('set', { state: newTodos })
    }
    const handleTaskUpdate = (ev, todoId) => {
        ev.preventDefault()
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) return { ...todo, isChecked: !todo.isChecked }
            else return todo
        })
        setTodos(newTodos)
        saveDodos('set', { state: newTodos })
    }
    const handleTaskRemove = (ev, todoId) => {
        ev.stopPropagation()
        const newTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(newTodos)
        saveDodos('set', { state: newTodos })
    }

    return (
        <section className='todos'>
            <div className='header'>
                <h2>My Todo List</h2>
                <form onSubmit={handleSubmit} className='input-wrap'>
                    <input value={taskName} onChange={handleChange} placeholder='Add todo' type='text' name='txt' />
                    <button type='button' onClick={handleSubmit} className='btn-submit' disabled={taskName === ''}>
                        Add
                    </button>
                </form>
            </div>
            <ul className='todo-body'>
                {todos.length ? (
                    todos.map(todo => (
                        <li
                            className={`task-item-wrap ${todo.isChecked ? 'checked' : ''}`}
                            onClick={ev => handleTaskUpdate(ev, todo.id)}
                            key={todo.id}
                        >
                            <TodoItem todo={todo} handleTaskRemove={handleTaskRemove} />
                        </li>
                    ))
                ) : (
                    <p>No todos to show</p>
                )}
            </ul>
        </section>
    )
}
