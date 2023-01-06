# 代码规范

## 集成 editorconfig 配置

> EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格.

```yaml
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

::: tip
VSCode 需要安装一个插件：EditorConfig for VS Code
:::

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104171220.png)

## 使用 prettier 工具

::: info 介绍
Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。
:::

### 1 .安装 prettier

```shell
npm install prettier -D
```

### 2. 配置 .prettierrc 文件

- useTabs：使用 tab 缩进还是空格缩进，选择 false；
- tabWidth：tab 是空格的情况下，是几个空格，选择 2 个；
- printWidth：当行字符的长度，推荐 100，也有人喜欢 120 或者 140；
- singleQuote：使用单引号还是双引号，选 image.png 择 true，使用单引号；
- trailingComma：在多行输入的尾逗号是否添加，设置为 `none`，比如对象类型的最后一个属性后面是否加一个 `,`
- semi：语句末尾是否要加分号，默认值 true，选择 false 表示不加；

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

### 3. 创建 `.prettierignore` 忽略文件

```
*.log
*.tgz

.idea.
.DS_Store
.vscode

/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

### 4. VSCode 安装 prettier 插件

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104172343.png)

### 5. 在 Vscode 中设置

- settings =>format on save => 勾选上
- settings => editor default format => 选择 prettier

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104172651.png)

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104172751.png)

### 6. 测试 prettier 是否生效

- 测试一：在代码中保存代码；
- 测试二：配置一次性修改的命令；

在 package.json 中配置一个 scripts：

```json
"prettier": "prettier --write ."
```

## 使用 ESLint 检测

### 1. 安装 ESLint

::: tip
如果创建项目的时候，选择了 ESLint，那么 Vue 会默认帮助我们配置需要的 ESLint 环境。
:::

项目安装 ESLint

```bash
npm install eslint -D
```

### 2. VSCode 安装 ESLint 插件

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104182321.png)
<http://cdn.azhiyuan.com.cn/markdown/img/2023/01/05/20230105001206.jpg>

### 3. 解决 eslint 和 prettier 冲突的问题

> 安装插件：（vue 在创建项目时，如果选择 prettier，那么这两个插件会自动安装）

```shell
npm install eslint-plugin-prettier eslint-config-prettier -D
```

添加 prettier 插件：

```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // ...
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    // 此处配置规则
    'vue/multi-word-component-names': 'off'
  }
  // ...
}
```

### 4.在 IDEA 或 WebStorm 中使用

- 在设置中搜索 ESLint 选择自动 ESLint 配置 和 保存时允许 eslint --fix

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104193551.png)

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104193914.png)

## git Husky

> 虽然我们已经要求项目使用 eslint 了，但是不能保证组员提交代码之前都将 eslint 中的问题解决掉

- 也就是我们希望保证代码仓库中的代码都是符合 eslint 规范的；

- 那么我们需要在组员执行 `git commit` 命令的时候对其进行校验，如果不符合 eslint 规范，那么自动通过规范进行修复；

那么如何做到这一点呢？可以通过 Husky 工具：

- husky 是一个 git hook 工具，可以帮助我们触发 git 提交的各个阶段：pre-commit、commit-msg、pre-push

### 安装 husky

这里我们可以使用自动配置命令：

```shell
npx husky-init && npm install
```

此时会在项目目录下创建 `.husky` 文件夹

在 `.husky` 文件夹中创建 `pre-commit` 文件

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# 执行 package.json 中的 lint脚本
npm run lint
```

这个时候执行 git commit 的时候会自动对代码进行 lint 校验。

## git commit 规范

### 代码提交风格

> 通常 git commit 会按照统一的风格提交，可以快速定位每次的提交内容，方便之后对版本进行控制。

但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen

- Commitizen 是一个帮助我们编写规范 commit message 的工具

1. 安装 Commitizen

```shell
npm install commitizen -D
```

2. 安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这个命令会帮助我们安装 cz-conventional-changelog , 并且在 package.json 中进行配置

这个时候我们提交代码需要使用 `npx cz`：

- 第一步是选择 type，本次更新的类型

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

- 第二步选择本次修改的范围（作用域）

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104184328.png)

- 第三步选择提交的信息

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104184347.png)

- 第四步提交详细的描述信息

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104184356.png)

- 第五步是否是一次重大的更改

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104184410.png)

- 第六步是否影响某个 open issue

![](http://cdn.azhiyuan.com.cn/markdown/img/20230104184416.png)

我们也可以在 `package.json` 的 `scripts` 中构建一个命令来执行 cz：

```json
{
  "scripts": {
    // ...
    "commit": "cz"
  }
}
```

### 代码提交验证

> 如果我们按照 cz 来规范了提交风格，但是依然有同事通过 `git commit` 按照不规范的格式提交应该怎么办呢？

- 我们可以通过 commitlint 来限制提交；

1. 安装 @commitlint/config-conventional 和 @commitlint/cli

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2. 在根目录创建 commitlint.config.js 文件，配置 commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3.使用 husky 生成 commit-msg 文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
