import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Component for a single todo item.
 */
export const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
    return (
        <div className={cn(
            "group flex items-center justify-between p-4 rounded-2xl border bg-card/40 backdrop-blur-md",
            todo.completed ? "border-muted bg-muted/20 opacity-70" : "border-border/50"
        )}>
            <div className="flex items-center gap-4 flex-1 min-w-0">
                <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => onToggle(todo.id)}
                    className="size-5 rounded-md border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className={cn(
                    "text-sm font-medium truncate",
                    todo.completed && "line-through text-muted-foreground decoration-primary/50"
                )}>
                    {todo.text}
                </span>
            </div>

            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100">
                <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => onEdit(todo)}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg"
                >
                    <Pencil className="size-3.5" />
                    <span className="sr-only">Edit</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => onDelete(todo.id)}
                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg"
                >
                    <Trash2 className="size-3.5" />
                    <span className="sr-only">Delete</span>
                </Button>
            </div>
        </div>
    );
};
