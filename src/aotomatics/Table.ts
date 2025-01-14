import {type AnyObject} from "./interfaces"
import { reactive } from "vue"

export class Table {

    public options: AnyObject = {}
    public data: Array<AnyObject> = reactive([])

    constructor(options: AnyObject) {
        this.init(options)


    }

    private init(options: AnyObject) {
        this.options = options
        this.create()
    }
    create(options) {
        
    }
    

}