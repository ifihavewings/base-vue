import {type AnyObject } from "./interfaces";
export class Form {

    private options:AnyObject = {}

    constructor(options:AnyObject) {
        this.init(options)
    }

    init(options: AnyObject) {
        this.options = options
        this.create(this.options)
    }

    create(options:AnyObject) {
        
    }
}