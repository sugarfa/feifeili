# 李飞飞 · 个人主页

个人网页介绍，展示教育背景、工作经历、科研成果与专业技能。基于纯 HTML/CSS/JS 构建，无外部依赖，可直接由 GitHub Pages 托管。

> 📄 完整开发与发布过程见 [`项目总结.md`](项目总结.md)（含网络问题解决方案与复现步骤）

## 在线访问

- GitHub Pages: https://sugarfa.github.io/feifeili/

## 本地预览

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 目录结构

```
├── index.html            # 主页
├── assets/
│   ├── css/style.css     # 样式
│   └── js/main.js        # 交互脚本
├── 李飞飞-个人简历.pdf    # 简历原件（信息来源）
├── 项目报告/             # 本地参考资料（客户项目报告，已被 .gitignore 排除）
└── paper/               # 本地参考资料（论文 PDF，已被 .gitignore 排除）
```

> 注：`项目报告/`（概普客户项目报告，含涉密信息）与 `paper/`（论文 PDF，版权材料）仅用于本地提取网页展示信息，通过 `.gitignore` 排除，不会发布到 GitHub 仓库。

## 发布到 GitHub Pages

1. 将代码推送到 GitHub 仓库 `sugarfa/feifeili`（main 分支）
2. 打开仓库 **Settings → Pages**
3. **Build and deployment** 中 Source 选择 **Deploy from a branch**
4. Branch 选择 **main**，目录选择 **/ (root)**，点击 **Save**
5. 等待 1~2 分钟，站点即发布于 https://sugarfa.github.io/feifeili/