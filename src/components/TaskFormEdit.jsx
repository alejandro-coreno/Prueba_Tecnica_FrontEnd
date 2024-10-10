import { useState } from "react";

export const TaskFormEdit = ({id, tareaActual, handlerMostrar, handlerUpdateTareas}) => {

    const [nuevoText, setNuevoText] = useState(tareaActual);

    const handlerUpdateTarea = (e) => {
        e.preventDefault();
          {/* Actualizamos la tarea*/}
        handlerUpdateTareas(id, nuevoText)
        handlerMostrar();
        
        {/* Limpiamos el estado del input*/}
        setNuevoText("");
        
    }
    
    return (
        <form className="w-full flex justify-between gap-2" onSubmit={handlerUpdateTarea}>
            <input 
                type="text"
                className="w-full px-2"
                autoFocus={true}
                value={nuevoText}
                onChange={(e) => setNuevoText(e.target.value)}
            />
            <div className="flex gap-2">
                <button type="submit" className="text-blue-300 font-semibold">
                    Actualizar
                </button>

                <button className="text-red-400 font-semibold" onClick={ handlerMostrar }>
                    Cancelar
                </button>
            </div>
        </form>
    );
}
