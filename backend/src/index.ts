import  express from 'express'

const app = express();

const port = 3001
app.use(express.json());
let arr : string[] = []

app.get('/', (req, res) => {
  res.send(arr) 
})

app.post('/', (req, res) => {
    const data = req.body;
    arr.push(data.value)
    res.send("success")
})

app.put('/', (req,res)=> {
    const dataPut = req.body;
    arr=arr.filter((ele)=> dataPut.value==ele)
    res.send("success")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
