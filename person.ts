import { personDetails } from "./person-details";
export type colorType = 'white' | 'red' | 'polar white' | 123 
export class Person{
    username: string
    email: string
    color: colorType
    //non-default(required), default , optional, optional

    constructor(data: personDetails )
    {
        this.username = data.userName
        this.email = data.Email
        this.color = data.Color
    }
    getUsername(){
        console.log(this.username)
    }
    getEmail(){
        console.log(this.email)
    }
    getColor(){
        console.log(this.color)
    }
}