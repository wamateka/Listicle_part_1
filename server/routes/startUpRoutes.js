import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import startUpList from '../data/startUpList.js';
import getStartUps from '../controllers/startUps.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', getStartUps.getStartUps)

router.get('/:giftId', (req,res)=>{
    // const id = req.params.giftId;
    // const found = startUpList.find(s => String(s.id) === String(id));
    // if (!found) {
    //     return res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'));
    // }
    return res.status(200).sendFile(path.resolve(__dirname, '../public/startUp.html'));
})
export default router;