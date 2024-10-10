
import { useState } from "react";
import { TaskFormEdit } from "./TaskFormEdit";


export const TaskItem = ({ id, tarea, handlerDeleteTareas, handlerUpdateTareas }) => {

    const [editando, setEditando] = useState(true);

    const handlerMostrar = () => {
        setEditando(!editando)
    }

    return (
        <div className="p-2 flex justify-between border mb-1">

            {
                editando
                ? 
                <div className="flex gap-2">
                    <span>{tarea}</span>
                </div>
            
                :

                <TaskFormEdit id={id} tareaActual={tarea} handlerMostrar={handlerMostrar} handlerUpdateTareas={handlerUpdateTareas} />

            }

            

            <div className="flex gap-2">

                {
                    editando && 
                    <>
                        <button className="text-lime-200 font-semibold" onClick={handlerMostrar}>
                            Editar
                        </button>

                        <button className="text-red-300 font-semibold" onClick={ () => handlerDeleteTareas(id) }>
                            Borrar
                        </button>
                    
                    </>
                }
            </div>
        </div>
    );
}
