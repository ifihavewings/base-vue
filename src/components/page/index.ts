export class Page {
    private options: Record<any, any> = {}

    constructor(options: Record<any, any>) {
        console.log('page')
        this.init(options)
    }
    init(options: Record<any, any>) {
        Object.keys(options).forEach(key => {
            this.options[key] = options[key]
        })
    }
    

}