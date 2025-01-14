import { ElInput, ElSelect, ElAutocomplete, ElRadio, ElRadioGroup, ElCheckboxGroup, ElCheckbox } from "element-plus"
export const formElementMap = {
    ElInput,
    ElSelect,
    ElAutocomplete,
    ElRadio,
    ElRadioGroup,
    ElCheckboxGroup,
    ElCheckbox

}
/**
 * 
 * @param item 
 *             
    {
        type: 'ElInput',
        key: 'username',
        attrs: {
            clearable: true,
        },
        formItemAttrs: {
            label: '姓名',
            width: '200',

        }

    }

 */
export const getPlaceholder = (item) => {
    let prefix = `请输入`
    const selectItems = new Set(['ElSelect'])
    if (selectItems.has(item.type)) {
        prefix = `请选择`
    }
    return `${prefix}${item?.formItemAttrs?.label}`
}