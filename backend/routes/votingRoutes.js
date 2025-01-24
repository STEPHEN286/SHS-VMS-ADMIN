const express = require('express');

const router = express.Router();

const db = require ('../database/dbConnection')


router.get('/candidates', (req, res) => {
    db.query('SELECT * FROM candidate_tbl', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);  
    });
})


router.post ("/new-candidate", (req,res) =>{
    const {name} = req.body;
    const query = "INSERT INTO candidates_tbl (name) Values (?)";

    db.query(query, [name],  (err, result) =>{


        if (!name) return res.status(400).json({message: "Name are required"})
        if (err) {
            return res.status(500).json({message: "Error of inserting Data"})
        }

        res.status(200).json({message : "Data inserted Successfully", data: result})
    } )
}
)



            
module.exports = router;