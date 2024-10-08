## 什么是 :root

:root 是一个在 CSS 中使用的伪类选择器，它代表文档根元素，通常是 <html> 元素。这个伪类用于定义全局的 CSS 变量，这些变量可以在整个文档中被其他样式规则引用。:root 的作用和用法如下：

## 注意事项

在 CSS 中，:root 伪类用于定义全局的 CSS 变量，而变量的名称应该以两个连字符（--）开头，不应该包含任何其他字符，包括 $ 符号。

## 1. 作用

1. 定义全局 CSS 变量： :root 主要用于定义全局的 CSS 变量，这些变量可以在整个文档的任何地方使用。通过定义这些变量，您可以在整个项目中轻松地调整和修改主题、颜色、间距等值，而不必在每个具体的样式中硬编码这些值。

2. 作为全局样式的容器： :root 提供了一个在整个文档中设置全局样式的容器。这有助于提高样式的可维护性和灵活性，因为全局样式可以在一个地方进行集中管理。

## 2. 用法

1. 定义 CSS 变量： 在 :root 中，您可以使用 -- 前缀定义 CSS 变量。例如：

```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}

```

2. 在整个文档中使用变量： 在文档中的任何地方，您都可以使用 var() 函数来引用 :root 中定义的变量。例如：

```css
body {
  color: var(--primary-color);
  font-size: var(--font-size);
}

```
3. 动态修改变量值： 使用 JavaScript，您可以动态修改 :root 中定义的变量值。例如：
```js
const root = document.documentElement;
root.style.setProperty('--primary-color', '#ff6347');
```

这将动态地将 --primary-color 的值修改为新的颜色值 #ff6347。


总之，:root 是一个用于定义全局 CSS 变量的强大工具，它有助于提高样式的可维护性和可重用性，同时使得在整个项目中进行主题切换和样式调整变得更加方便。