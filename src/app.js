const express = require ('express')
const path = require('path')
const app=express()
const hbs= require('hbs')
//const geocode= require('./urls/geocode')
//const forecast= require('./urls/forecast')
console.log(path.join(__dirname,''))

const StaticPath= path.join(__dirname,'../public')
const ViewsPath = path.join(__dirname, '../templates/views')
const PartialPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',ViewsPath)
hbs.registerPartials(PartialPath)
app.use(express.static(StaticPath))

app.get('/help', (req,res) => {res.render('help',{title:'Help Page',name:'burak'})})
app.get('/weather',(req,res)=>
{
    console.log('burasi2 ')
    if (!req.query.address){
        return res.send({error: 'bos cevaplar' })  }
    
    geocode(req.query.address, (error,{len,long}= {})=>
    
    {if (error) { return res.send ({error})}
    else {

        //res.send({len,long})

        console.log(len,long)
        console.log('burasi')}

        forecast(len,long,(error,sicaklik=0) => {if (error) {return res.send({error})}
        else {
            res.send({sicaklik})
            console.log(sicaklik)
            console.log('burasi4')}

        }
        
        

    //

//
    )//})
})
    
 })

app.get ('/about',(req,res)=> {res.render('about',{title:'About Page'})})
app.get ('/help',(req,res)=> {res.render('help',{title:'help'})})
app.get ('/ib',(req,res)=> {res.render('ib',{title:'ib'})})
app.get ('/sat',(req,res)=> {res.render('sat',{title:'sat'})})
app.get ('/alevel',(req,res)=> {res.render('alevel',{title:'alevel'})})
app.get ('/ap',(req,res)=> {res.render('ap',{title:'ap'})})
app.get ('/tolc',(req,res)=> {res.render('tolc',{title:'tolc'})})
app.get ('/login',(req,res)=> {res.render('login',{title:'login'})})
//app.get ('/about',(req,res)=> {res.render('about',{title:'About Page'})})
app.get ('/past_papers',(req,res)=> {res.render('past_papers',{title:'past_papers'})})
app.get ('/online_courses',(req,res)=> {res.render('online_courses',{title:'online_courses'})})
app.get('',(req,res)=>{res.render('index',{title:'Main'}) })
console.log('burasi3')

//app.com

app.listen(3000,()=> {console.log('server is up on port 3000')})