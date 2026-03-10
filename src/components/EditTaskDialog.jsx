import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';

/**
 * Dialog component for editing a todo task.
 */
export const EditTaskDialog = ({ todo, isOpen, onClose, onSave }) => {
    const [text, setText] = useState('');

    // Update internal state when todo changes or dialog opens
    useEffect(() => {
        if (todo) {
            setText(todo.text);
        }
    }, [todo, isOpen]);

    const handleSave = () => {
        if (text.trim() && todo) {
            onSave(todo.id, text.trim());
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] rounded-3xl border-none shadow-2xl bg-card/80 backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
                        Edit Task
                    </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="What needs to be done?"
                        className="rounded-xl border-muted-foreground/20 focus-visible:ring-primary/20 focus-visible:border-primary"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />
                </div>
                <DialogFooter className="gap-2">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="rounded-xl hover:bg-muted/50"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={!text.trim() || (todo && text === todo.text)}
                        className="rounded-xl px-6 shadow-lg shadow-primary/20"
                    >
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
