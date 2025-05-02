import { addsong } from "../controllers/songcontroller";
import { listsong } from "../controllers/songcontroller";
import express from "express";
import upload from "../middleware/multer";

const songrouter = express.Router();

songrouter.post('/addsong',upload,files([{name:'image',maxcount:1},{name:'audio',maxcount:1}]),addsong);
songrouter.get('/list',listsong);

export default songrouter
