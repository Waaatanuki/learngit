项目说明
=====

这是 `learn-git` 仓库，用于记录与演示一些与 Git 使用、发布流程和小工具相关的实践。

主要内容包括：
- 若干 TypeScript 脚本（例如 `git.ts`、`index.ts`、`scripts/release.ts`）用于演示/自动化操作。
- 项目发布与 CI 工作流（仓库中包含与发布相关的配置）。

特点
----
- 轻量、以 TypeScript 为主的演示仓库
- 提供发布脚本示例与自动化思路

目录结构（概要）
----

- `index.ts` — 项目入口或示例代码
- `git.ts` — 与 git 操作相关的示例/工具
- `scripts/` — 含发布及其他辅助脚本，例如 `scripts/release.ts`
- `asset/` — 资源文件（如字体、图片等）

快速开始
----

1. 克隆仓库并安装依赖（建议使用 pnpm）

```bash
pnpm install
```

2. 常用脚本（来自 `package.json`）

- `pnpm run uplog`：运行 `scripts/oss.ts`（记录/上传日志相关脚本）
- `pnpm run up`：运行 `taze major -I`（项目升级辅助，按需使用）

根据需要可以直接运行 TypeScript 脚本，例如使用 `tsx`：

```bash
pnpm exec tsx scripts/release.ts
```

发布与 CI
----

仓库包含用于自动化发布的示例（例如 GitHub Actions workflow），以及 `scripts/release.ts` 这样的脚本用于辅助发布流程。根据项目需要可自行修改 workflow（例如 `release.yml`）来实现自动化构建与发布。

字体转换（woff2）
----

如果你需要把 TTF/OTF 字体转换为 WOFF2，可使用 Google 官方的 `woff2` 工具：

1. 克隆并编译（需 `make` 与 C++ 编译器）

```bash
git clone --recursive https://github.com/google/woff2.git
cd woff2
make
# （可选）将可执行程序拷贝到系统路径
sudo cp woff2_compress /usr/local/bin/
```

2. 使用示例：

```bash
# 将 asset 中的 ttf 字体转换为 woff2
woff2_compress path/to/font.ttf
```

贡献
----

欢迎提交 issue 或 PR：

- 提出 bug 报告或功能建议
- 提交改进 README 或脚本的 PR

许可
----

默认无特殊许可（请在需要时添加 LICENSE 文件）。

联系方式
----

如需联系或讨论实现细节，请在仓库中创建 issue 或直接发起 PR。
