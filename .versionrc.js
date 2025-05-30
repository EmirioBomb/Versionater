module.exports = {
    // 📄 CHANGELOG 文件输出路径（默认生成在项目根目录）
    // 👉 如需自定义路径，请确保目录已存在（不会自动创建）
    // infile: 'docs/CHANGELOG.md',

    // ⛔ 跳过特定标准版本发布流程步骤（可自由组合）
    // 📝 实际使用中可结合 package.json 中的 scripts 灵活控制
    skip: {
        bump: false,        // 跳过版本号更新（false 表示执行）
        changelog: false,   // 跳过生成 CHANGELOG
        commit: false,      // 跳过 Git 自动提交
        tag: false          // 跳过 Git 自动打 tag
    },

    // ✏️ 提交类型分类及对应 changelog 中的展示区块
    types: [
        { type: "feat",     section: "✨ 新功能",     hidden: false },
        { type: "fix",      section: "🐛 Bug 修复",   hidden: false },
        { type: "docs",     section: "📝 文档",       hidden: false },
        { type: "init",     section: "🎉 初始化",     hidden: false },
        { type: "chore",    section: "🚀 杂项",       hidden: false },
        { type: "style",    section: "🎨 样式调整",   hidden: false },
        { type: "refactor", section: "♻️ 重构优化",    hidden: false },
        { type: "perf",     section: "⚡ 性能提升",   hidden: false },
        { type: "test",     section: "✅ 测试相关",   hidden: false },
        { type: "build",    section: "📦 构建流程",   hidden: false },
        { type: "ci",       section: "👷 持续集成",   hidden: false },
        { type: "revert",   section: "⏪ 回退更改",   hidden: false }
    ],

    // 🔢 需要写入版本号的文件（自动更新版本）
    // 如需更新更多文件，请在此数组中添加对应配置项
    // 可通过统一的自定义脚本（如 version-rewriter）集中处理多个文件，
    // 仅需在 writeVersion 方法中编写对应的替换逻辑，并调整版本号匹配规则
    // 若希望更灵活地控制每个文件的更新方式，也可为每个文件单独配置 updater
    bumpFiles: [
        {
            filename: 'version.json',
            type: 'json' // 标准 JSON 文件，将修改其 version 字段
        },
        {
            filename: 'README.md',
            updater: './version-rewriter' // 自定义 updater，用于更新 README 中版本号
        }
    ],

    // 📦 指定包含版本号的“主文件”
    packageFiles: [
        {
            filename: 'version.json',
            type: 'json'
        }
    ],

    // 🔖 Git tag 前缀（如生成 tag: `v1.0.0`）
    tagPrefix: 'v',

    // ⚠️ 若配置此项，则默认每次运行都会生成“预发布版本”（如 v1.0.0-beta.0）
    // 想使用 tagPrefix 且生成正式版本时请注释掉该项
    // prerelease: 'beta',

    // 🧾 Git 自动提交的 commit message 模板
    releaseCommitMessageFormat: '📦 build: {{currentTag}} 版本更新',

    // 🔗 Git 比较链接格式（用于 changelog 中“版本对比链接”）
    compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",

    // 🔗 单次提交链接格式（用于 changelog 中“提交记录链接”）
    commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
};
