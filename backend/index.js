const express = require('express');
const routes = require('./routes/votingRoutes');
const app = express();
const cors = require('cors')


const PORT = 4000;
app.use(express.json())
// app.use((req, res, next) => {
//     console.log("Request body:", req.body);
//     next();
// });
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use("/api", routes)
            
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}` )
})

