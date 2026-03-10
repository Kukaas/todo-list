import { useState, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const STORAGE_KEY = 'todo-list-app-todos';

/**
 * Custom hook for managing todo state with persistence.
 */
export const useTodos = () => {
    const [todos, setTodos] = useState(() => {
        // Initial state from localStorage
        return loadFromLocalStorage(STORAGE_KEY) || [];
    });

    // Persist todos whenever they change
    useEffect(() => {
        saveToLocalStorage(STORAGE_KEY, todos);
    }, [todos]);

    /**
     * Adds a new todo to the list.
     * @param {string} text - The task description.
     */
    const addTodo = (text) => {
        if (!text.trim()) return;
        const newTodo = {
            id: crypto.randomUUID(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    /**
     * Toggles the completion status of a todo.
     * @param {string} id - The unique ID of the todo.
     */
    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    /**
     * Deletes a todo from the list.
     * @param {string} id - The unique ID of the todo to delete.
     */
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    /**
     * Edits the text of an existing todo.
     * @param {string} id - The unique ID of the todo.
     * @param {string} newText - The updated task description.
     */
    const editTodo = (id, newText) => {
        if (!newText.trim()) return;
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newText.trim() } : todo
            )
        );
    };

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
    };
};
