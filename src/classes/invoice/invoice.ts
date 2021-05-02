import { HasFormatter } from '../hasFormatter/hasFormatter.js'
export class Invoice implements HasFormatter{
    constructor(readonly client:string,readonly details:string, readonly amount:number){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}