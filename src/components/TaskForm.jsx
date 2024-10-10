import { useState } from "react";
import Swal from "sweetalert2";


export const TaskForm = ({handlerAddTareas}) => {

    const [tarea, setTarea] = useState("");

    const handlerTarea = (e) => {
        e.preventDefault();
        if (!tarea.trim()){
            Swal.fire({
                title: "Error?",
                text: "¡Agrega una tarea nueva!",
                icon: "error"
              });
            return
        }
        handlerAddTareas(tarea)

        {/* Limpiamos el estado del input */}
        setTarea("");
    }
 
    return (
        <form className="w-full border flex justify-between" onSubmit={ handlerTarea }>
            <input
                className="w-full p-3" 
                type="text" 
                placeholder="Escribe una Tarea"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)} 
            />
            <button className="p-3 rounded bg-sky-500 hover:bg-sky-700 text-white font-medium" type="submit">Agregar</button>
        </form>
    );
}
