/// isso são meios de caminho basicamente eles atuam para criar maio de caminho para as rotas evitando possiveis erros;

const validateBody =(request , response , next) =>{
const {body} = request.body;
}

//estes ifs são para validar os campos obrigatorios;
if (body.titulo === undefined){
    return (response.status(400).json({message: 'title is required'}))
}

if (body.titulo === ''){
    return (response.status(400).json({message: 'title is not empty'}))
}

next();
module.exports ={
    validateBody,
}