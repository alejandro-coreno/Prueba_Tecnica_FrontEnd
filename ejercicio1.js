const arrays = [
    {
        id: 1,
        email: 'correo@correo.com',
        telefono: 15515151511,
        nombre: "Alejandro"
    },
    {
        id: 1,
        email: 'correo@correo.com',
        telefono: 15515151511,
        nombre: "Alejandro"
    },
    {
        id: 1,
        email: 'correo@correo.com',
        telefono: 15515151511,
        nombre: "Alejandro"
    },
    {
        id: 1,
        email: 'correo@correo.com',
        telefono: 15515151511,
        nombre: "Alejandro"
    },
    {
        id: 1,
        email: 'correo@correo.com',
        telefono: 15515151511,
        nombre: "Alejandro"
    },
    {
        id: 1,
        email: 'correo@correo.com',
        telefono: 15515151511,
        nombre: "Alejandro"
    }

]

const arraysMoficados = arrays.map((item) => {
    return {
        datosPersonales: {
            nombre: item.nombre,
            apellido: "Co"
        },
        contactos: {
            telefono: item.telefono,
            correo: item.email
        } 
    }
})



console.log( arraysMoficados );