import {Mission} from "./mission"
export class Hero{
    constructor(public id?: string,
                public firstname?: string,
                public lastname?: string,
                public superheroname?: string,
                public missions?: Mission[]){
  
    }
  }