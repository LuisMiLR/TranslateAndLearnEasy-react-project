import express from "express";
import {
  saveWord,
  translateText,
} from "../controllers/translate.controller.js";

const router = express.Router();

router.post("/translate", translateText);
router.post("/saveWord", saveWord);

export default router;
