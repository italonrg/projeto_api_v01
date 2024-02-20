//isso e meus servidor;


const app = require ('./app.js');

require('dotenv').config();	/// isso aqui serve para puxar as informaçoes que estão no arquivo .env para que quando eu for postar no git não aparece a senha;


const PORT = process.env.PORT || 3333;
app.listen(PORT , ()=> console.log(`servidor rodando na porta ${PORT}`));