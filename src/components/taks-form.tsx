"use client";

import { TaskProps } from "@/types/task";
import { IoMdAdd } from "react-icons/io";
import { Button } from "./button";
import { useForm } from "react-hook-form";

interface TaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

interface FormInputs {
  title: string;
  description: string;
}

export function TaskForm({ setTasks }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  function onSubmit(data: FormInputs) {
    setTasks((prevTasks) => [...prevTasks, data]);
    reset();
  }

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 mb-4 h-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h2 className="font-bold">Nova Tarefa</h2>
        <input
          type="text"
          placeholder="Título da tarefa"
          className="p-2 border-1 rounded border-gray-300"
          {...register("title", { required: "Título é obrigatório" })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
        <textarea
          placeholder="Descrição (opcional)"
          className="p-2 border-1 rounded border-gray-300"
          {...register("description")}
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
