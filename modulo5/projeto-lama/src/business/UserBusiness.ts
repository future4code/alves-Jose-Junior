import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    login(input: ILoginInputDTO) {
        throw new Error("Method not implemented.")
    }
    signup(input: ISignupInputDTO) {
        throw new Error("Method not implemented.")
    }
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}
    
}