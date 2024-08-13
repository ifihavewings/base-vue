import { ElLoading } from 'element-plus'
import { ref } from 'vue'
console.log(ElLoading)
const loadingOption = {
    lock: false,
    target: document.body

}
/**
 * 提交控制器
 * @description 提交控制器
 * @author sv
 * @date 2022-07-20
 */
export class SubmitController {

    public isSubmiting = ref(false)
    private options: Record<any, any> = {
        loadingOption
    }
    private loadingService:any = null



    constructor(options: Record<any, any>) {
        this.initialize(options)
    }
    async initialize(options: Record<any, any>) {
        this.options = options
        try {
            const validateRes = await this.validate()
            this.loadingService = ElLoading.service(loadingOption)
        } catch (error) {
            console.log(error)
        } finally {
            this.loadingService.close()
        }
    }

    public validate() {
        const {validator } = this.options
        if(validator) {

            switch (typeof validator) {
                case 'object':
                    const {func, args} = validator
                    func(args)
                    break;
            
                default:
                    break;
            }
       
        }
    }
}