import { ElLoading } from 'element-plus'
import { ref } from 'vue'
import { handleCallback } from './function'
import { merge } from 'lodash'
/**
 * 提交控制器
 * @description 提交控制器
 * @author sv
 * @date 2022-07-20
 */
export class SubmitController {

    public isSubmiting = ref(false)
    private options: Record<any, any> = {
        loadingOption: {
            loadingOption: {
                target: document.body, // 指定目标容器
                text: 'loading...', // 显示的文本
                spinner: 'el-icon-loading', // 自定义加载图标
                background: 'rgba(255, 255, 255, 0.3)' // 背景颜色
            },
        }
    }
    private loadingService: any = null
    private showLoading: Boolean = true



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
        this.options = merge(this.options, options)

    }
    public async run() {
        try {
            const isPassed = await this.validate()
            // ElementPlus 文档不明确， 有时候返回 true 有时候返回 undefined
            if (isPassed || undefined === isPassed) {
                if (this.showLoading) {
                    this.loadingService = ElLoading.service(this.options.loadingOption)
                }
                const res = await this.submit()
                this.callback(res)
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
        return this.options.submit()
    }
    private callback(res: any) {
        this.options.callback && this.options.callback(res)
        this.isSubmiting.value = false
    }
}