import React from 'react';
import { TodoItem } from './TodoItem';
import { Inbox } from 'lucide-react';

/**
 * Component for rendering the list of todos.
 */
export const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-4 rounded-3xl border border-dashed border-muted-foreground/20 bg-muted/5">
                <div className="bg-background p-4 rounded-full shadow-inner mb-4">
                    <Inbox className="size-8 text-muted-foreground/40" />
                </div>
                <p className="text-muted-foreground font-medium">No tasks found</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Add something to your list to get started.</p>
            </div>
        );
    }

    // Sort: Incomplete first, then by creation date (newest first)
    const sortedTodos = [...todos].sort((a, b) => {
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
        <div className="flex flex-col gap-3">
            {sortedTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};
