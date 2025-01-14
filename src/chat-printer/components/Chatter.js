import { reactive, ref } from "vue"
import { marked } from "marked"





export class Chatter {
    chatList = reactive([])
    uuid = 1
    speed = 30
    area = {
        model: ref("")
    }
    sseManager = null


    constructor(options) {

        this.init(options)
    }
    init(options) {
        Object.keys(options).forEach(key => this[key] = options[key])

        marked.setOptions({
          gfm: true,             // 启用 GitHub Flavored Markdown (GFM)，它支持一些 GitHub 特有的功能，如表格、任务列表等。
          breaks: true,          // 启用换行符（\n）转换为 <br>，使得 Markdown 中的换行符会被渲染为 HTML 中的 <br> 标签。
          tables: true,          // 启用表格支持。Markdown 中的表格会被解析成 HTML 表格。
          headerIds: true,       // 启用标题 ID 生成。Markdown 中的标题（如 # 标题）会生成相应的 ID，便于链接到该标题。
          smartLists: true,      // 启用更智能的列表处理，会在列表项目中的连续 "-" 或 "*" 自动增加间距，确保更加清晰的显示。
          smartypants: true,     // 启用智能引号替换，将普通的引号转换为智能引号（如 “ ”，‘ ’）。
          xhtml: true,           // 输出的 HTML 使用自闭合标签（例如 <br />），符合 XHTML 标准。默认是 false，即使用传统 HTML 标签。
          footnotes: true,       // 启用脚注支持，Markdown 中的脚注（如 [^1]）会被正确渲染为 HTML 的脚注部分。
          pedantic: false,       // 启用严格模式，会对不符合 Markdown 规范的内容进行处理并抛出错误，通常不推荐启用此项。
          langPrefix: 'language-', // 代码高亮时为语言类添加前缀。默认是 "language-"，可以根据需要更改。
        });
        
            }
    /**
     * 发送数据
     */
    send(message) {
        this.remianLog(message)
        this.clearInput()
        this.startSse()

    }
    /**
     * 调用 sse
     */
    startSse() {
        const message = `# 美国与中国货币政策对比

[[COPY]]这是需要复制的部分。[[COPY]]

## 政策目标

### 美国
- **维持价格稳定和最大化就业**[^5]：美联储致力于控制通货膨胀率，保持经济增长的可持续性，并关注金融市场的稳定性和金融系统的健康运行。

### 中国
- **维护价格稳定、促进经济增长、保持国际收支平衡和维护金融稳定**[^4]：中国人民银行的目标更加多元化，不仅关注国内经济，还重视国际经济环境的变化。

## 政策工具

### 美国
- **公开市场操作**：通过买卖政府债券来调节银行体系的准备金，进而影响市场上的货币供应量。
- **贴现率**：调整向商业银行提供的贷款利率，影响商业银行的借贷成本。
- **联邦基金利率**：作为商业银行储备金管理的结果，是美联储货币政策的主要工具。

### 中国
- **多种政策工具**：中国人民银行的货币政策工具较多，但市场机制不够完善，市场对政策的反应有时过于敏感。

## 政策影响

### 美国
- **市场对政策的反应较为理性**：美国的金融市场较为成熟，投资者结构较为合理，市场波动相对可控。

### 中国
- **市场对政策的反应有时过于敏感**：中国的投资者结构以散户为主，市场情绪波动较大，容易导致市场大起大落。

## 结论
- **中美两国的货币政策在目标、工具和影响方面存在显著差异**。美国的货币政策目标更加单一，工具相对成熟；中国的货币政策目标更加多元化，工具较多，但市场机制不够完善，市场对政策的反应有时过于敏感。

## 表格示例

| 项目   | 美国                | 中国                    |
|--------|---------------------|-------------------------|
| 货币政策目标 | 稳定价格，最大化就业  | 促进经济增长，稳定国际收支 |
| 工具   | 公开市场操作，利率调节  | 利率调节，存款准备金率等    |
| 市场反应 | 理性，成熟          | 敏感，波动较大            |

## 代码示例

\`\`\`javascript
function comparePolicies() {
    console.log("比较中美货币政策");
}
\`\`\`
`

        this.chatList.push({
            source: 'answer',
            message: ''
        })
        this.printMarkdown(message)
    }

    // 动态增加 Markdown 内容的逻辑
    async printMarkdown(message) {
        const rawHtml = marked(message); // 解析 Markdown 为 HTML
        for (let i = 0; i < rawHtml.length; i++) {
            this.chatList[this.chatList.length - 1].message += rawHtml[i];
            await new Promise((resolve) =>
                setTimeout(resolve, this.speed)
            );
        }
    };

    /**
     * 渲染结果
     */
    render() {

    }

    clearInput() {
        this.area.model.value = ""
    }

    /**
     * 维护永久聊天列表
     */
    remianLog(message) {
        this.chatList.push({
            source: 'user',
            message
        })
    }
    getUUID(i) {
        return `${this.uuid++}`
    }
}