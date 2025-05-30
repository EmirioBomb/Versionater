<!-- markdownlint-disable MD041 MD033 -->

<p align="center">
    <img src="/image/logo.svg" alt="image" width="200" height="auto">
</p>

<p align="center">
    <img alt="Version" src="https://img.shields.io/badge/Version-1.0.1-black?labelColor=black&color=fec934">
    <img alt="Build" src="https://img.shields.io/badge/Build-2025.05.28-black?labelColor=black&color=fec934">
    <img alt="Licence" src="https://img.shields.io/badge/Licence-MIT-black?labelColor=black&color=fec934">
    <a href="https://github.com/EmirioBomb">
        <img src="https://img.shields.io/badge/Author-Emirio_Baan-black?labelColor=black&color=fec934" alt="Author" />
    </a>
</p>

---

### 📦 项目简介：小版匠（Versionater）

> 本项目基于 **`standard-version`** 提供一套自动化版本发布流程，实现以下功能：

* 📝 自动生成 **`CHANGELOG`**（基于 Conventional Commits）
* ♻️ 自动更新版本号到多个文件（如 version.json、README或自定义源文件）
* 🏷️ 支持自定义标签前缀/预发布后缀（如 rb, beta, rc 等）
* ✅ 避免重复发布版本，提供版本校验与提示

### ▶️ 使用方法

```bash
# 📦 安装 standard-version 到开发依赖中（用于版本号管理与 changelog 自动生成）
$ npm install standard-version -D

# 🔍 模拟版本发布流程（不修改任何文件，仅预览变更）
$ npm run release:test

#  🚀 正式发布版本并自动推送 Git 标签
$ npm run release
```
