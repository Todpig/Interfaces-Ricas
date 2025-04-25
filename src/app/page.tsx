"use client";

import { TaskForm } from "@/components/taks-form";
import { TaskExample } from "@/components/task-example";
import { TaskProps } from "@/types/task";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      title: "Examplo da Tarefa",
      description:
        "Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir",
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
      <div className="max-w-[900px] h-auto w-[900px]">
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white gap-4">
          <h1 className="text-3xl font-bold mb-4">Lista de Tarefas</h1>
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
              <p className="text-gray-500">Nenhuma tarefa encontrada</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
