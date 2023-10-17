修改github当前工作流release.yml

woff2（Google 官方工具）
Google 提供的轻量工具，专注于 WOFF2 格式转换：
安装（需编译，适合开发者）：
bash
# 克隆仓库
git clone --recursive https://github.com/google/woff2.git
cd woff2

# 编译（需安装 make 和 g++）
make

# 将工具添加到系统路径（可选）
sudo cp woff2_compress /usr/local/bin/
转换命令：
bash
# 将 asset中的ttf字体文件 转换为 woff2，并且release
