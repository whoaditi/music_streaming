//would try integrating firebase later
import {firebase as fire} from "firebase";

const connectfirebase = async () => {

    await fire.config({
        fire_name:process.env.name,
        api_key:process.env.key,
        api_secret
    })
}