import { ref, reactive } from "vue"
import { getUsers } from "./api"
export const listConfig = {
    form: {
        model: reactive({
            gender: 'female',
            age: 18
        }),
        attrs: {

        },
        elements: [
            {
                formItemAttrs: {
                    label: '姓名',
                    width: '200',

                },
                type: 'ElInput',
                key: 'username',
                attrs: {
                    clearable: true,
                },

            },
            {
                formItemAttrs: {
                    label: '爱好',
                    width: '200',

                },
                type: 'ElSelect',
                key: 'hobbies',
                attrs: {
                    clearable: true,
                },
                option: {
                    labelKey: 'label',
                    valueKey: 'value',
                    data: [
                        { value: '1', label: 'swim' },
                        { value: '2', label: 'swim' },
                        { value: '3', label: 'swim' },
                        { value: '4', label: 'swim' },
                    ]
                }

            },
            {
                formItemAttrs: {
                    label: '描述',
                    width: '200',

                },
                type: 'ElInput',
                key: 'description',
                attrs: {
                    clearable: true,
                    type: 'textarea',
                    rows: 3,
                },

            }
        ]

    },
    list: {
        /**
         * undefined  展示 搜索和重置， 自动管理调用
         */
        searchStrategy: {
            immediate: true
        },
        query: async () => getUsers(listConfig.list.queryParams()),
        // 写成函数的目的是对参数进行处理, 可以自定义逻辑
        queryParams: () => listConfig.form.model,
        // 不传递表示不用处理
        responseHanddler: (data) => data

    },
    table: {
        tableData: reactive([])
    },
    pagination: {

    }
}
listConfig.list.queryParams()