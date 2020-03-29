const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// get:  busca informação no backend
// post: 1criar informação no backend
// put: alterar informação no backend
// delete: deleta informação no backend

/**
*	Tipos de paramentros
*	query params: parametros passados na rota ex: filtros e paginação ( ?paga=1&nome=felix)
*	routes params: usadi para identificar um recurso
*	body: é o cormo da requisicao
*/

/** 
driver: select * from users
query builder: table('users').select('*').where()
iremos usar o knext.js como builder 
 */
const port = 3333
app.listen(port, () => console.log("Server run: ", port))


