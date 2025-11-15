import getConnection from "./../db/database.js"

const getCategorias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
     

}

const postCategorias = async (req, res) =>{
    try {
        const {CategoriaNombre, Descripcion, imagen} = req.body;

        const category = {CategoriaNombre, Descripcion, imagen}
        
        const connection = await getConnection();

  const result = await connection.query("INSERT INTO categorias SET ?", category) 
        res.json({"CategoriaNombre": "Ropa Femenina"})

    } catch (error) {
        console.error("ERROR 500");
    }
}


export const methodHTTP =  {
    getCategorias,
    postCategorias
}