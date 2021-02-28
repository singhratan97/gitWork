import { personDetails } from "./person-details";
import { Person } from "./person";


let obj:personDetails = {userName:'ratann',Email:'ratan@email.com',Color:'red'}
let p = new Person(obj)
p.getUsername()
p.getEmail()
p.getColor()


//modules means take interface in separate file and use it