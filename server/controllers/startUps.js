import { pool } from '../config/database.js'

const getStartUps = async (req,res)=>{
    try{const results = await pool.query('SELECT * FROM ai_tools ORDER BY id ASC')
    res.status(200).json(results.rows)
    }catch(err){
        res.status(409).json( { error: error.message } )
    }
}

export default{
    getStartUps
}