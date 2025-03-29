// POE2 汉化词典
const POE2_DICTIONARY = {
    // 伤害类型
    'Cold Damage:': '冰霜伤害',
    'Lightning Damage:': '闪电伤害',
    'Chaos Damage:': '混沌伤害',
    
    // 装备
    'Advanced Scout\'s Vest': '進階斥候背心',
    'Hardleather Coat': '硬皮外套',
    'Advanced Studded Vest': '進階鑲釘背心',
    'Strider Vest': '疾行者背心'
};

// 导出词典
if (typeof module !== 'undefined' && module.exports) {
    module.exports = POE2_DICTIONARY;
} else {
    window.POE2_DICTIONARY = POE2_DICTIONARY;
} 