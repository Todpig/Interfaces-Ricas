import React from "react";
import { TaskExample } from "./task-example";
import { TaskForm } from "./taks-form";
import { TaskProps } from "@/types/task";
import { User } from "@/types/user";

interface DashboardProps {
  user: User;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
}

export function Dashboard({ user, setTasks, tasks }: DashboardProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-inherit gap-4">
      <h3 className="text-3xl font-bold mb-4 text-inherit">
        {user.name}, aqui está sua lista de tarefas
      </h3>
      <TaskForm setTasks={setTasks} />
      <div className="flex flex-row items-center justify-between gap-4 w-full flex-wrap">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskExample
              key={index}
              title={task.title}
              description={task.description}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))
        ) : (
          <p className="text-inherit">Nenhuma tarefa encontrada</p>
        )}
      </div>
    </div>
  );
}
