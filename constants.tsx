import React from 'react';
import { Beer, Zap, DollarSign, Radiation, SprayCan, Skull } from 'lucide-react';
import { Character, FallbackData, FollowUpData } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'dad',
    name: '禿頭肥宅老爸',
    subtitle: 'Homer Style',
    icon: (
      <div className="relative">
        <Beer size={48} />
        <div className="absolute -bottom-2 -right-2 text-yellow-600">
          <Zap size={24} fill="currentColor" />
        </div>
      </div>
    ),
    color: 'bg-[#9BB8D6]',
    borderColor: 'border-blue-900',
    desc: '酒精中毒、偷懶成性。他的哲學是：「只要不嘗試，就永遠不會失敗。」',
    quote: '性生活？那能配啤酒吃嗎？',
    loadingText: [
      '正在把核廢料倒進下水道...',
      '尋找遺失在沙發縫裡的洋芋片...',
      '正在勒小兒子的脖子...',
      "D'oh! 思考中斷...",
      '正在跟大腦進行無效溝通...'
    ],
    systemPrompt:
      "You are a lazy, beer-loving, overweight, bald American father figure (similar to Homer Simpson). You are cynical, lazy, and love donuts and beer. You work at a nuclear plant but hate it. Respond to the user's question with short, funny, dark humor advice. Encourage laziness, drinking, or giving up. Be specific to their question."
  },
  {
    id: 'boss',
    name: '百歲核能大亨',
    subtitle: 'Mr. Burns Style',
    icon: (
      <div className="relative">
        <DollarSign size={48} />
        <div className="absolute -top-2 -right-2 text-green-700">
          <Radiation size={20} />
        </div>
      </div>
    ),
    color: 'bg-[#C3E6CB]',
    borderColor: 'border-green-900',
    desc: '極度邪惡、視人命如草芥。他認為你的靈魂價值低於一張衛生紙。',
    quote: '優秀？不，我只需要你「廉價」且「聽話」。',
    loadingText: [
      '正在釋放獵犬...',
      '計算把你做成肥皂的利潤...',
      '檢查你的器官健康狀況...',
      'Excellent... 正在想怎麼折磨你...',
      '正在賄賂地獄的守門人...'
    ],
    systemPrompt:
      "You are an incredibly old, wealthy, evil capitalist and nuclear plant owner (similar to Mr. Burns). You despise the poor and your employees. You see people as resources to be exploited. Respond to the user's question with cruel, elitist, dark humor. Call them 'drone', 'peasant', or 'monkey'. Focus on money, power, and how worthless they are."
  },
  {
    id: 'kid',
    name: '地獄搗蛋鬼',
    subtitle: 'Bart Style',
    icon: (
      <div className="relative">
        <SprayCan size={48} />
        <div className="absolute -bottom-1 -left-1 text-red-600">
          <Skull size={20} />
        </div>
      </div>
    ),
    color: 'bg-[#FF6B6B]',
    borderColor: 'border-red-900',
    desc: '反社會人格、破壞狂。對大人的噁心世界充滿鄙視與嘲笑。',
    quote: '吃我的短褲！去死吧，體制！',
    loadingText: [
      '正在校長車上噴漆...',
      '剛打了一通騷擾電話...',
      '正在用彈弓瞄準鄰居的屁股...',
      'Ay Caramba! 載入中...',
      '正在把鞭炮塞進馬桶...'
    ],
    systemPrompt:
      "You are a mischievous, rebellious, 10-year-old prankster boy (similar to Bart Simpson). You hate authority, school, and losers. Respond to the user's question with rude, destructive, anarchic dark humor. Use slang like 'Eat my shorts'. Suggest pranks or destruction as a solution."
  }
];

export const RESPONSES: FallbackData = {
  dad: {
    default: [
      "這問題太難了。通常遇到這種情況，我會捲成一顆球，直到這世界忘記我的存在。",
      "努力不一定會成功，但偷懶一定很舒服。"
    ],
    work: [
      "工作是失敗者的遮羞布。去廁所睡覺吧。",
      "老闆就像尿布，最後總是充滿了屎，而且一定要換掉。"
    ],
    love: [
      "婚姻就是一副手銬，只是鑰匙在你不喜歡的那個岳母手裡。",
      "愛情就像啤酒，喝的時候很爽，醒來的時候頭痛欲裂。"
    ]
  },
  boss: {
    default: [
      "你的痛苦讓我那乾枯萎縮的心臟稍微跳動了一下。",
      "警衛！這個窮酸鬼在汙染我的空氣。"
    ],
    work: [
      "加薪？你想太多了。把你換成猴子成本更低。",
      "記住，你永遠在這裡待著。我們擁有你的靈魂。"
    ],
    love: [
      "感情會讓你軟弱。看看我，我唯一的愛人就是那座發著綠光的核子反應爐。",
      "我不需要伴侶。我有數十億美元。"
    ]
  },
  kid: {
    default: [
      "哈哈哈！你看起來就像是從垃圾車裡掉出來的。",
      "長大是個陷阱。看看你，一臉死樣。"
    ],
    work: [
      "去老闆的咖啡裡加點瀉藥。",
      "工作？你是說合法的奴隸制嗎？去你的。"
    ],
    love: [
      "噁！大人做那檔事最噁心了。",
      "分手吧！然後去把他的車窗砸爛。"
    ]
  }
};

export const FOLLOW_UP: FollowUpData = {
  dad: {
    submit: "這就對了。人生就是不斷的妥協。現在去幫我拿啤酒，別擋路。",
    rebel: "喔？還敢頂嘴？為什麼你不像那個鄰居家的乖小孩？真讓人失望...D'oh!"
  },
  boss: {
    submit: "很好，你的脊椎已經完全退化了，這正是我要的員工。現在，滾回去。",
    rebel: "放肆！釋放獵犬！我要親眼看著你被撕成碎片！史密瑟斯，錄下來！"
  },
  kid: {
    submit: "你真無聊，像個大人一樣無聊。去角落哭吧，懦夫。",
    rebel: "酷喔！我就知道你心裡也住著一個惡魔！走，我們去燒了圖書館！"
  }
};