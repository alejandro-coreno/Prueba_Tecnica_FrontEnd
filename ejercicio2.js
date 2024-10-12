const fetchUserData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const result = data.map((item) => {
            return {
                nombre: item.name,
                correo: item.email
            }
        })
        return result
    }
    catch( error ){
        console.log(error);
    }
}

fetchUserData().then((result) => console.log( result ) );
