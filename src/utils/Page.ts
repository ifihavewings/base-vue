import { cloneDeep } from "lodash"
export class Page {
    [x: string]: any
    private options: Record<any, any> = {}
    private cachedOptions: Record<any, any> = {}


    constructor(options: Record<any, any>) {
        console.log('page')
        this.init(options)
    }
    init(options: Record<any, any>) {   
        this.options = options
        this.cachedOptions = cloneDeep(options)
    }
}