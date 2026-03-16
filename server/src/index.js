import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config({ quiet: true })

app.listen(process.env.PORT, () => {
    console.log("Server is running!!!", process.env.PORT)
})