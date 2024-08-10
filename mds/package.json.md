# package.json 文件详解

package.json 文件是 Node.js 项目中用于描述项目信息和配置项目依赖的文件。它是一个 JSON 格式的文件，通常位于项目的根目录下，用于管理项目的依赖、脚本、元数据等。以下是 package.json 文件中每个字段的含义和作用：


`name`（必需）：指定项目的名称，必须是唯一的。名称应该是小写字母，并且不包含空格或特殊字符。

`version`（必需）：指定项目的版本号。通常遵循语义化版本规范（Semantic Versioning），格式为 X.Y.Z，其中 X 是主版本号、Y 是次版本号、Z 是补丁版本号。

`description`：对项目的简要描述，用于描述项目的目标、功能或特点。

`keywords`：关键字数组，用于标识和搜索项目。通常用于 npm 搜索和分类。

`homepage`：指定项目的主页 URL，用于提供项目的更多信息。

`bugs`：指定项目的 Bug 报告 URL 或电子邮件地址，用于用户提交 Bug 报告。

`license`：指定项目的许可证类型。常见的许可证包括 MIT、Apache、GPL 等。

`author`：指定项目的作者信息。

`contributors`：贡献者列表，用于指定项目的贡献者信息。

`files`：指定要包含在发布的 npm 包中的文件和目录。

`main`：指定项目的主入口文件，即用于导出模块的文件路径。

`browser`：指定项目在浏览器环境中的替代入口文件。用于将不适用于浏览器环境的模块替换为适用于浏览器的版本。

`bin`：用于指定项目作为命令行工具时的可执行文件路径，通常用于全局安装。

`scripts`：用于定义项目的脚本命令。通常包括启动项目、构建项目、测试项目等命令。

`dependencies`：指定项目的生产环境依赖，即运行项目所需的模块。这些模块会被安装到 node_modules 目录中。

`devDependencies`：指定项目的开发环境依赖，即开发和测试项目所需的模块。这些模块不会被发布到生产环境。

`peerDependencies`：指定项目的对等依赖，用于指定项目对其他模块的版本要求。

`optionalDependencies`：指定项目的可选依赖，即不是必须的但可以提供额外功能的模块。

`engines`：指定项目运行所需的 Node.js 版本范围。

`os`：指定项目支持的操作系统。

`cpu`：指定项目支持的 CPU 架构。

`private`：布尔值，指定是否将该项目发布到 npm 公共仓库。设置为 true 则不会发布，通常用于私有项目。

`workspaces`：用于管理使用 yarn 工作区功能的项目。

`publishConfig`：用于指定发布到 npm 仓库时的配置选项，如注册表 URL、访问权限等。

`scripts`：定义一组可执行的脚本命令，通常包括启动、测试、构建等。



这些字段中的大部分都是可选的，但 name 和 version 是必需的，而 dependencies 和 devDependencies 是常用的依赖管理字段。其他字段则根据项目的需求和规模进行选择和填写。

## main module browser 优先级

### 在 Node.js 环境中：

首先会检查 package.json 中的 module 字段，如果存在且当前 Node.js 版本支持 ES 模块，则使用 module 字段指定的入口文件路径。
如果不存在 module 字段，或当前 Node.js 版本不支持 ES 模块，则会检查 package.json 中的 main 字段，使用 main 字段指定的入口文件路径。
如果同时存在 module 和 main 字段，则优先使用 module 字段。

### 在浏览器环境中：

首先会检查 package.json 中的 browser 字段，如果存在则使用 browser 字段指定的入口文件路径。
如果不存在 browser 字段，则会根据具体情况（比如 webpack 配置）选择使用 module 或 main 字段指定的入口文件路径。

### 优先级总结：

综上所述，优先级取决于当前环境和模块系统的特性，一般来说，在支持 ES 模块的 Node.js 环境中，module 字段优先级最高；在浏览器环境中，browser 字段优先级最高。