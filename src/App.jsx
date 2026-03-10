import React, { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { EditTaskDialog } from './components/EditTaskDialog';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { LayoutList } from 'lucide-react';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();
  const [editingTodo, setEditingTodo] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleOpenEdit = (todo) => {
    setEditingTodo(todo);
    setIsEditDialogOpen(true);
  };

  const handleCloseEdit = () => {
    setEditingTodo(null);
    setIsEditDialogOpen(false);
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-teal-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-12 px-4 selection:bg-primary/10">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-teal-400/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto">
        <Card className="border-none shadow-2xl shadow-primary/5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="pt-10 pb-6 px-8 text-center space-y-1">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/20">
                <LayoutList className="size-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Todo List
            </CardTitle>
            <p className="text-muted-foreground font-medium text-sm">
              {todos.length > 0
                ? `${completedCount} of ${todos.length} tasks completed`
                : "Organize your day with style"}
            </p>
          </CardHeader>

          <CardContent className="px-8 pb-10 space-y-8">
            <TodoInput onAdd={addTodo} />

            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  Your Tasks
                </h2>
                <div className="h-[1px] flex-1 mx-4 bg-muted/40" />
              </div>
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={handleOpenEdit}
              />
            </div>
          </CardContent>
        </Card>

        <footer className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/40 font-medium tracking-tight">
            Built with React & Vite • Local Storage Persistence Enabled
          </p>
        </footer>
      </main>

      <EditTaskDialog
        todo={editingTodo}
        isOpen={isEditDialogOpen}
        onClose={handleCloseEdit}
        onSave={editTodo}
      />
    </div>
  );
}

export default App;
