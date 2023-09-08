import express from "express"
import "./Class/ListadeCont"

import { router as indexR } from "./routes/item"

const app = express()

app.use(express.json())
app.use("/rut", indexR)

const PORT = 3000


app.listen(PORT, ()=>{
    console.log(`server corriendo en el puerto ${PORT}`)
})