/*
Mestrado em Engenharia Informática e Tecnologia Web
Miniprojeto 1 - Programação Web avançada
Autor: Duarte Cota
Script: web server
*/

const express = require('express')
const path = require('path')
const app = express();

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

app.listen(3000,() =>{
    console.log('Listening...')
})

