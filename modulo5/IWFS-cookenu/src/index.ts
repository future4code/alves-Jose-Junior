import app from "./app"
import { generateToken, getTokenData } from "./services/authenticator";
//import { generateHans, compareHash } from "./services/hashManager";
// import generateId from "./services/idGenerator"


app.get("/")

//const cypherText = generateHans("hello my friends")

const token = generateToken({id:"1qqa3edf5tgbij"})

const tokenData = getTokenData(token)

console.log({
    token,
    tokenData
}
    //generateId()
    //compareHash("hello my friends", cypherText)
);



