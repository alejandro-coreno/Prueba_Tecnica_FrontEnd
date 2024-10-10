import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2"

const valoresIniciales = JSON.parse(localStorage.getItem("tareas")) || [];

export const useTarea = () => {
  const [tareas, setTareas] = useState(valoresIniciales)

  const handlerAddTareas = async (tarea) => {
    await Swal.fire({
    position: "top-end",
    icon: "success",
    title: "!Se agrego una nueva tarea!",
    showConfirmButton: false,
    timer: 1300
    });
    setTareas([...tareas, {tarea, id: uuidv4(), habilitado: false}])
  }

  const handlerDeleteTareas = async (id) => {
    await Swal.fire({
      title: "Eliminar",
      text: "!Estas seguro de querer eliminar la tarea!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, De acuerdo"
    }).then((result) => {
      if (result.isConfirmed) {
        setTareas(tareas.filter((tarea) => tarea.id !== id))
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "!Se elimino la tarea correctamente!",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
   
    
  }

  const handlerUpdateTareas = (id, nuevoTexto) => {
    setTareas(tareas.map((tarea) => {
      if (tareas.id == id) {
        return {...tareas, tarea: nuevoTexto}
      }
      return tarea
    }));
  }

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  return {
    tareas,
    handlerAddTareas,
    handlerDeleteTareas,
    handlerUpdateTareas
  }
}