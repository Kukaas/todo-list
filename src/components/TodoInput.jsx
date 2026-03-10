import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

/**
 * Component for adding new todos.
 * @param {Object} props
 * @param {Function} props.onAdd - Callback function to add a todo.
 */
export const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full gap-2 group/input">
            <div className="relative flex-1">
                <Input
                    placeholder="Add a new task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="pr-10 bg-background/50 backdrop-blur-sm border-muted-foreground/20 rounded-xl"
                />
            </div>
            <Button
                type="submit"
                size="icon"
                disabled={!text.trim()}
                className="shrink-0 rounded-xl shadow-lg shadow-primary/20"
            >
                <Plus className="size-5" />
                <span className="sr-only">Add Task</span>
            </Button>
        </form>
    );
};
