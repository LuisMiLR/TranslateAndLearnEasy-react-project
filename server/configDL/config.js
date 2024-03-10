import * as deepl from "deepl-node";
import dotenv from "dotenv";
dotenv.config();

const authKey = process.env.DEEPL_AUTH_KEY;
const serverUrl = process.env.DEEPL_SERVER_URL;
const translator = new deepl.Translator(authKey, { serverUrl });

export default translator;
