import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useTarea } from "./hooks/useTarea";

const TodoApp = () =>  {

  const { tareas, handlerAddTareas, handlerUpdateTareas, handlerDeleteTareas} = useTarea();

  return (
    
    <div className="w-full border p-4 flex items-center justify-center">
        <div className="flex flex-col gap-2 w-[50%]">
          <h1 className="text-xl font-medium text-sky-600">Lista de Tareas</h1>
          
          {/* Componente TaskForm */}
          <TaskForm handlerAddTareas={handlerAddTareas} />

          {/* Componente TaskList */}
          <TaskList tareas={tareas} handlerDeleteTareas={handlerDeleteTareas} handlerUpdateTareas={handlerUpdateTareas} />

        </div>
    </div>
  );
}

export default TodoApp;
