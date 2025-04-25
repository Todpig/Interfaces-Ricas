"use client";

import { TaskProps } from "@/types/task";
import { IoMdAdd } from "react-icons/io";
import { Button } from "./button";

interface TaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export function TaskForm({ setTasks }: TaskFormProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form[0] as HTMLInputElement).value;
    const description = (form[1] as HTMLTextAreaElement).value;
    if (!title || !description) return;
    const newTask = {
      title,
      description,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    form.reset();
  }

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4 h-auto">
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="font-bold">Nova Tarefa</h2>
        <input
          type="text"
          placeholder="Título da tarefa"
          className="p-2 border-1 rounded border-gray-300"
        />
        <textarea
          placeholder="Descição (opcional)"
          className="p-2 border-1 rounded border-gray-300"
        />
        <Button
          type="submit"
          className="flex items-center justify-center"
          variants="primary"
        >
          <IoMdAdd />
          Adicionar tarefa
        </Button>
      </form>
    </div>
  );
}
