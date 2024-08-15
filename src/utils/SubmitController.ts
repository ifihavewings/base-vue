import { ElLoading } from 'element-plus'
import { ref } from 'vue'
import { handleCallback } from './function'
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
    /**
     * Initializes the SubmitController with the given options.
     *
     * @param {Record<any, any>} options - The options to initialize the SubmitController with.
     * @return {void}
     */
    initialize(options: Record<any, any>) {
        this.options = options

    }
    public async run() {
        try {
            const isPassed = await this.validate()
            // ElementPlus 文档不明确， 有时候返回 true 有时候返回 undefined
            if (isPassed || undefined === isPassed) {
                this.loadingService = ElLoading.service(this.options.loadingOption)
                this.submit()
            } else {
                console.warn('SubmitController.prototype.initialize verify failed')
            }
        } catch (error) {
            console.log(error)
        } finally {
            this.isSubmiting.value = false
            this.loadingService && this.loadingService.close()
        }
    }

    private validate() {
        const { validator } = this.options
        if (validator) {
            return handleCallback(validator)
        }
        // since no validator is set, just pass the check
        return Promise.resolve();
    }

    private submit() {
        this.isSubmiting.value = true
        this.options.submit()
    }
    private callback() {

    }
}