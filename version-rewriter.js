// 匹配版本号格式：version-xxx-black（忽略大小写）
const VERSION_REGEXP = /(version-)(.*?)(-black)/gi;

/**
 * 将版本号格式化为适用于徽章（badge）显示的文本：
 * - 空格 → 双下划线（__）
 * - 单横线 - → 双横线 --
 * - 单下划线 _ → 双下划线 __
 * - 斜杠 / → URL 编码 %2F
 * - & → URL 编码 %26
 * 
 * @see {@link https://shields.io/badges}
 * 
 * @param {string} str 原始版本号
 * @returns {string} 格式化后的版本号
 */
const formatBadgeLabel = (str) =>
    str
        .replace(/ /g, '__')
        .replace(/-/g, '--')
        .replace(/_/g, '__')
        .replace(/\//g, '%2F')
        .replace(/&/g, '%26');

module.exports = {
    /**
     * 读取旧版本号（格式为 version-xxx-black）
     * @param {string} contents - 文件内容
     * @returns {string} 匹配到的版本号字符串
     */
    readVersion: (contents) => {
        const match = contents.match(VERSION_REGEXP);
        if (!match) {
            console.error('❌ 未匹配到合法的版本号（格式应为 version-xxx-black），发布终止！');
            process.exit(1);
        }

        console.info('✅ 读取版本号:', match[0]);
        return match[2];
    },

    /**
     * 写入新的版本号（保持 version-xxx-black 格式）
     * @param {string} contents - 文件内容
     * @param {string} version - 新版本号
     * @returns {string} 替换后的内容
     */
    writeVersion: (contents, version) => {
        console.info('✅ 原始版本号:', version);
        const formattedVersion = formatBadgeLabel(version);
        console.info('✅ 最新版本号:', formattedVersion);

        // 若需处理多个文件，继续使用 replace 并结合不同的版本号匹配规则进行替换即可
        return contents.replace(VERSION_REGEXP, `$1${formattedVersion}$3`);
    }
};
