让我们从创建一个新的React应用开始。以下是详细的步骤指南：

以JavaScript版本的React为例：

### 步骤 1: 安装Node.js和npm

确保系统已经安装了Node.js和npm（Node包管理器）。可以通过以下命令检查是否已安装以及其版本：

```bash
node -v
npm -v
```

如果没有安装，可以从[Node.js官网](https://nodejs.org/)下载并安装适合操作系统的版本。

### 步骤 2: 使用`create-react-app`创建新项目

Facebook提供了一个名为`create-react-app`的官方CLI工具，它可以帮助快速设置一个新的React项目，包含所有必要的配置。

首先，通过npm全局安装`create-react-app`：

```bash
npm install -g create-react-app
```

然后，使用以下命令创建一个新的React应用。将`my-app`替换为想要的项目名称：

```bash
npx create-react-app my-app
```

请注意，尽管以前建议直接全局安装`create-react-app`，但目前推荐使用`npx`来运行它，这可以避免潜在的版本冲突问题，并确保总是使用最新版的`create-react-app`。

### 步骤 3: 进入项目目录并启动开发服务器

创建完成后，进入项目目录：

```bash
cd my-app
```

然后，启动开发服务器：

```bash
npm start
```

执行上述命令后，应该会自动在默认浏览器中打开`http://localhost:3000`，显示默认的欢迎页面。如果一切正常，现在就已经成功创建并启动了一个新的React应用！

![](https://cdn.nlark.com/yuque/0/2025/png/2077593/1742463289501-3a3cae2d-9dd5-4a39-bb75-47df672d08da.png)

### 后续步骤

接下来，可以根据需要修改`src`目录下的文件，特别是`App.js`，以开始构建应用。同时，也可以探索其他功能如添加组件库、状态管理解决方案等，进一步丰富React应用。
