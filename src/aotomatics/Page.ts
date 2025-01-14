import {type AnyObject} from "./interfaces"
import {Form } from "./Form"
import {Table } from "./Table"

export class Page {

    public options: AnyObject = {}
    public form :AnyObject = {}

    constructor(options: AnyObject) {
        this.init(options)


    }

    private init(options: AnyObject) {
        this.options = options
        this.create(options)
    }

    create(options:AnyObject) {
        
        if(this.options.form) {
            this.form = new Form(options)
        }
        if(this.options.table) {
            this.table = new Table(options)
        }
    }

    public async query() {
        const data = await this.options.list.query()
        this.table.data = []

    }
}