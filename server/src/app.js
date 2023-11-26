const getUsersList = require("./services/getUserList");
const getJobsList = require("./services/getJobsList");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

app.get('/jobslist', async (req,res) => {
     let data = req.query.username ? await getJobsList(req.query.username) : { error_message: 'No job content' }
     res.send(data) 
  
});

app.get('/userlist', async (req,res) => {
     let data = await getUsersList()
     res.send(data) 
  
});

app.listen(process.env.PORT || 8082);