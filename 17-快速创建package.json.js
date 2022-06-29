//在指向命令所处的目录中，快速新建package.json文件
//要在终端中输入
//不能包含中文和空格
//npm init -y;

// 卸载包
// npm uninstall moment

// 安装nrm
// npm i nrm -g

//切换下包镜像源
//nrm use taobao

//包分两类，项目包和全局包
// 在npm install 后提供-g参数则安装为全局包
//项目包又分两类，开发依赖包（devDependencies节点中）和核心依赖包（dependencies节点中）
// 用 npm i 包名 -D 保存为开发依赖包
// 用 npm i 包名 保存为核心依赖包