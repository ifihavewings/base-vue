import {type App, type DirectiveBinding} from 'vue'
const zoomMouseoverHandler = (el:HTMLElement, x:number, y:number) => () => {
  el.style.transform = `scale(${x}, ${y})`
}
const zoomMouseleaveHandler = (el:HTMLElement) => () => {
  el.style.transform = 'scale(1)'
}
interface IHTMLElement extends HTMLElement {
  [key: string]: any
}
export const directives = new Map([
  // 设置缩放
  [
    'zoom',
    {
      // 在绑定元素的父组件
      // 及他自己的所有子节点都挂载完成后调用
      mounted(el:IHTMLElement, binding:DirectiveBinding) {
        let x = 1.2
        let y = 1.2
        x = binding?.value?.x || x
        y = binding?.value?.y || y
        el.style.transition = 'transform 0.5s ease'
        el.move = zoomMouseoverHandler(el, x, y)
        el.leave = zoomMouseleaveHandler(el)
        el.addEventListener('mouseover', el.move)
        el.addEventListener('mouseleave', el.leave)
      },
      // 绑定元素的父组件卸载后调用
      unmounted(el:IHTMLElement) {
        el.removeEventListener('mouseover', el.move)
        el.removeEventListener('mouseleave', el.leave)
      }
    }
  ],
  // 设置阴影
  ['shadow', {
    mounted(el:IHTMLElement, binding:DirectiveBinding) {
      // /* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
      el.style.boxShadow = `0 0 5px 0 rgba(0,255,0, 0.2)`

    }
  }]
])

export const registerDirectives = (app: App) => {
  Array.from(directives.entries()).forEach(([key, value]) => {
    app.directive(key, value)
  })
}
