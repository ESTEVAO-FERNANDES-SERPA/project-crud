const express = require('express')
const path = require('path')
const db = require('./database')

db.connect()
const app  = express()



// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))


//habilita server para receber dados via post(formulario)
app.use(express.urlencoded({extended:true}))

//rotas
app.get('/', (req, res) => { 
    res.render('index',{
        title: 'Digital Tech - Home'
    })
})

//404 error (not found)
app.use((req, res)=>{ //middleware
    res.send('Página não encontrada')
})


//executando o Servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Server is listening on port ${port}`))