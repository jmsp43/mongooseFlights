const express = require('express')

const app = express()
const port = 3000

app.use((req, res, next) => {
     console.log('I run for all routes');
     next();
 });
 app.use(express.urlencoded({extended:false}));
 app.set('view engine', 'jsx');
 app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', (req, res) => {
     res.send('Every little thing is gonna be alright')
})

app.listen(port, () => {
     console.log(`Don't worry, be happy`)
})