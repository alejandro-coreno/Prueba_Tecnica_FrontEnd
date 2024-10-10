import { TaskItem } from "./TaskItem";

export const TaskList = ({handlerUpdateTareas, handlerDeleteTareas, tareas = []}) => {
  return (
    <div className="w-full border border-blue-400">
        {
          tareas.length > 0 
          ?  
            tareas.map(({tarea, id}) => (
              <TaskItem key={id} id={id} tarea={tarea} handlerDeleteTareas={ handlerDeleteTareas} handlerUpdateTareas={handlerUpdateTareas}/>
            ))
          : 
            <h1 className="text-sky-600 font-medium text-center p-1"> -- No hay tareas -- </h1>
        }
    </div>
  );
}
