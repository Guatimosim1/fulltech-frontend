import { Session } from "./Session.class";

export class Chair {
    
    constructor() {
        this.id = 0;
        this.costumerName = "";
        this.status = false;
        this.session = new Session();
    }

    id : number;
    costumerName : string;
    status : boolean;
    session : Session
}