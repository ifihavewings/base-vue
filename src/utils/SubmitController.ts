import { ElLoading } from 'element-plus'
import { ref } from 'vue'
console.log(ElLoading)
/**
 * 提交控制器
 * @description 提交控制器
 * @author sv
 * @date 2022-07-20
 */
export class SubmitController {

    public isSubmiting = ref(false)
    private options: Record<any, any> = {}
    private loadingService: any = null



    constructor(options: Record<any, any>) {
        this.initialize(options)
    }
    async initialize(options: Record<any, any>) {
        this.options = options
        try {
            const isPassed = await this.validate()
            if (isPassed) {
                this.loadingService = ElLoading.service(this.options.loadingOption)
                this.submit()
            } else {
                console.warn('SubmitController.prototype.initialize verify failed')
            }

        } catch (error) {
            console.log(error)
        } finally {
            this.loadingService.close()
        }
    }

    public validate() {
        const { validator } = this.options
        if (validator) {
            switch (true) {
                case typeof validator === 'function': {
                    return validator()
                }
                case Array.isArray(validator): {

                    // pass
                    break;
                }
                case typeof validator === 'object' && validator !== null: {
                    const { func, args } = validator
                    return func(...args)
                }
                default:
                    break;
            }

        }
    }

    private submit() {
        this.isSubmiting.value = true
        this.options.submit()
    }
    private callback() {

    }
}