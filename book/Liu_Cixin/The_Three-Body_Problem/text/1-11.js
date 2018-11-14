let chapterOrder = orders[ch][1];
let chapterName  = orders[ch][2];
let chapterTitle = '三體 第' + chapterOrder + '章 ' + chapterName;

let chapterBody = `
<div class="main">
    <h1 class="chapter-title">` + chapterOrder + '　' + chapterName + `<span class="notes-in-page" title="本章在單行本為第十二章">註</span></h1>

    <p class="paragraph">汪淼回到家裡，之前沒有忘記在遊戲店買了一套 V 裝具。妻子告訴他，單位的人一天都在找他。汪淼打開已關了一天的手機回了幾個納米中心來的電話，許諾明天去上班。吃飯的時候，他真的照大史說的又喝了不少酒，但毫無睡意。當妻兒睡熟後，他坐在電腦前戴上新買回的 V 裝具，再次登錄《三體》。</p>

    <br>

    <div class="quotation">
        <p class="paragraph">黎明的荒原，汪淼站在紂王的金字塔前，覆蓋它的積雪早已消失，構築金字塔的大石塊表面被風化得坑坑窪窪，大地已是另一種顏色。遠處有幾幢巨大的建築物。汪淼猜那都是乾倉，但形狀與上次所見已完全不同，一切都表明，漫長的歲月已經流逝。</p>

        <p class="paragraph">藉著天邊的晨曦，汪淼尋找著金字塔的入口，在那個位置，他看到入口已經被石塊封死了，但同時看到旁邊新修了一條長長的石階，直通金字塔的頂部。他仰望高高的塔頂，看到原來那直指蒼穹的塔頂已被削平了，成為一個平台，這座金字塔也由埃及式變為阿茲特克式。</p>

        <p class="paragraph">沿著石階，汪淼攀上了金字塔的頂部，看到了一處類似於古觀星台的地方。平台的一角有一架數米高的天文望遠鏡，旁邊還有幾架較小型的。另一邊是幾台奇形怪狀的儀器，很像古中國的渾天儀。最引人注目的是平台中央的一個大銅球，直徑兩米左右，放置在一台複雜的機器上，由許多大小不同的齒輪托舉著，緩緩轉動。汪淼注意到，它的轉動方向和速度在不停地變化。在機器下方有一個方坑，在裡面昏暗的火光中，汪淼看到幾個奴隸模樣的人在推動著一個轉盤，為上面的機器提供動力。</p>

        <p class="paragraph">有一個人朝汪淼走來，與上次首遇周文王時一樣，這人背對著地平線的曙光，只能看到黑暗中一雙閃亮的眼睛。他身材瘦高，身著飄逸的黑色長袍，長髮在頭頂上不經意地綰了個結，剩下的在風中飛揚。</p>

        <p class="paragraph">「你好，我是墨子。」他自我介紹道。</p>

        <p class="paragraph">「我是海人，你好。」</p>

        <p class="paragraph">「啊，我知道你！」墨子興奮地說，「在 137 號文明中，你追隨過周文王。」</p>

        <p class="paragraph">「我是同他一起到過這裡，但從不相信他的理論。」</p>

        <p class="paragraph">「你是對的。」</p>

        <p class="paragraph">墨子對汪淼鄭重地點點頭，然後湊近他說，「知道嗎，在你離開的三十六萬兩千年裡，文明又重新啟動了四次。在亂紀元和恆紀元的無規律交替中艱難地成長。最短的一次只走完了石器時代的一半，但 139 號文明創造了紀錄，居然走到了蒸汽時代！」</p>

        <p class="paragraph">「這麼說，在那個文明中有人找到了太陽運行的規律？」</p>

        <p class="paragraph">墨子大笑著搖頭：「沒有沒有，僥倖而已。」</p>

        <p class="paragraph">「但人們一直在努力吧？」</p>

        <p class="paragraph">「當然，來，我讓你看看上次文明的努力。」墨子領著汪淼走到觀星台一角，大地在他們下面伸展開來，像一塊滄桑的舊皮革，墨子將一架小望遠鏡對準下面大地上的一個目標，然後讓汪淼看。汪淼將眼晴湊到目鏡上，看到一個奇異的東西，那是一具骷髏，在晨光中呈雪白色，看上去結構很精緻。最令人驚奇的是這骷髏站立著，那姿勢很是優雅高貴，一隻手抬到顎下，似乎在撫摸著那已不存在的鬍鬚，它的頭微仰，彷彿在向天地發問。</p>

        <p class="paragraph">「那是孔子。」墨子指著那個方向說，「他認為，一切都要合乎禮，宇宙萬物都不例外。他於是創造了一套宇宙的禮法系統，企圖據此預測太陽的運行。」</p>

        <p class="paragraph">「結果可想而知。」</p>

        <p class="paragraph">「是的，他計算出太陽該循禮之時，就預測了一次長達五年的恆紀元，你別說。那一次還真持續了一個月之久。」</p>

        <p class="paragraph">「然後，有一天太陽再也沒有出來？」</p>

        <p class="paragraph">「不，那天太陽出來了，升到了正空，但突然熄滅了。」</p>

        <p class="paragraph">「什麼？熄滅？！」</p>

        <p class="paragraph">「是的，開始是慢慢暗下去、小下去。然後突然熄滅了！夜幕降臨，那個冷啊，孔子就那麼站著凍成了冰柱，一直站到現在。」</p>

        <p class="paragraph">「什麼都沒有了嗎？我是說熄滅後的太陽？」</p>

        <p class="paragraph">「在那個位置，出現了一顆飛星。像是太陽死後的靈魂。」</p>

        <p class="paragraph">「哦，你肯定太陽是突然熄滅，飛星是突然出現的嗎？」</p>

        <p class="paragraph">「是。突然熄滅，飛星就出現了。你可以去查日誌數據庫，這記載沒錯。」</p>

        <p class="paragraph">「哦──」汪淼沉吟良久，本來，對於三體世界的奧秘，他心中已經有了一個模糊的理論，但墨子說的這件事將他所想的全推翻了，「怎麼會是……突然的呢？」他懊惱地說。</p>

        <p class="paragraph">「現在是漢朝，西漢還是東漢我也不清楚。」</p>

        <p class="paragraph">「你也是一直活到現在？」</p>

        <p class="paragraph">「我有使命，要準確觀測太陽的運行。那些巫師、玄學家和道學家們都是些無用的東西，他們四體不勤、五穀不分，動手能力極差，只是沉浸於自己的玄想中。但我不同，我能做出實際的東西來！」他指指平台上的眾多儀器說。</p>

        <p class="paragraph">「憑著這些就能達到你的目的嗎？」汪淼指了指儀器，特別是那個神秘的大銅球說。</p>

        <p class="paragraph">「我也有理論，但不是玄學，是通過大量觀測總結出來的。首先，你知道宇宙是什麼嗎？是一部機器。」</p>

        <p class="paragraph">「這等於沒說。」</p>

        <p class="paragraph">「說得具體些，宇宙是一個懸浮於火海中的大空心球，球上有許多小洞和一個大洞，火海的光芒從這些洞中透進來，小洞是星星，大洞是太陽。」</p>

        <p class="paragraph">「很有意思的一個模型，」汪淼看看大銅球說，現在他大概能猜出那是什麼了，「但其中有一個大漏洞：太陽升起和落下時，我們看到它與群星是相對運動的，而大球球殼上的所有洞孔的相對位置應該是固定的。」</p>

        <p class="paragraph">「很對。所以我推出了經過修正的模型，宇宙之球是由兩層球殼構成的，我們看到的天空是內層殼，外層球殼上有一個大洞，內層球殼上有大量小洞，那個外殼上的大洞透進的光在兩層球殼之間的夾層反射和散射，使夾層間充滿了亮光，這亮光從小洞中透進來，我們就看到了星星。」</p>

        <p class="paragraph">「那太陽呢？」</p>

        <p class="paragraph">「太陽是外層殼上的大洞投射到內層殼上的巨大光斑，它的亮度如此之高，像照穿雞蛋殼一般照穿了內殼，我們就看到了太陽。光斑周圍的散射光較強，也照了內殼，這就是我們白天看到的晴空。」</p>

        <p class="paragraph">「是什麼力量驅動兩層球殼進行不規則轉動呢？」</p>

        <p class="paragraph">「是宇宙之外火海的力量。」</p>

        <p class="paragraph">「可不同時期的太陽大小和亮度是不一樣的。在你雙殼模型中，太陽的大小和亮度應該是恆定的，如果外火海不均勻，至少大小應該是恆定的。」</p>

        <p class="paragraph">「你把這個模型想得太簡單了，隨著外界火海的變化，宇宙的外層殼的大小也會膨脹或收縮，這就導致了太陽大小和光度的變化。」</p>

        <p class="paragraph">「那飛星呢？」</p>

        <p class="paragraph">「飛星？你怎麼總是提飛星？它們是些不重要的西，是宇宙球內亂飛的灰塵。」</p>

        <p class="paragraph">「不。我認為飛星很重要。另外，你的模型如何解釋孔子時代太陽當空熄滅呢？」</p>

        <p class="paragraph">「那是個罕見的例外，可能是宇宙外面的火海中的<span class="edition-difference" title="單行本作「一」">某</span>個暗斑或黑雲正好飄過外層殼上的大洞。」</p>

        <p class="paragraph">汪淼指指大銅球問：「這一定就是你的宇宙模型吧？」</p>

        <p class="paragraph">「是的，我造出了宇宙機器。使球轉動的那一組複雜的齒輪，模擬著外界火海對球的作用。這種作用的規律，也就是外界火海中火焰的分布和流動規律，是我經過幾百年的觀測總結出來的。」</p>

        <p class="paragraph">「這球可以膨脹收縮嗎？」</p>

        <p class="paragraph">「當然可以，現在它就在緩慢收縮。」</p>

        <p class="paragraph">汪淼找了平台邊的欄杆作為固定參照物細看，發現墨子說的是事實。</p>

        <p class="paragraph">「這球有內層殼嗎？」</p>

        <p class="paragraph">「當然有，內外殼之間通過複雜的機構傳動。」</p>

        <p class="paragraph">「真是精巧的機械！」汪淼由衷地讚歎道，「可從外殼上沒有看到在內層殼投射光斑的大洞啊？」</p>

        <p class="paragraph">「沒有洞，我在外殼的內壁上安裝了一個光源，作為大洞的模擬。那光源是用從幾十萬隻螢火蟲中提煉出來的熒光材料製成的。發出的是冷光，因為內殼的半透明石膏球層導熱性不好，這樣可以避免一般的熱光源在球內聚集溫度，讓記錄員可以在裡面長期待下去。」</p>

        <p class="paragraph">「球裡面還有人？」</p>

        <p class="paragraph">「當然，記錄員站在一個底部有滑輪的架子上，位置保持在球體中心。將模擬宇宙設定到現實宇宙的某一狀態後，它其後的運轉將準確地模擬出未來的宇宙狀態，當然也能模擬出太陽的運行狀態，那名記錄員將其記錄下來，就形成了一本準確的萬年曆，這是過去上百個文明夢寐以求的東西啊。你來得正好，模擬宇宙剛剛顯示，一個長達四年的恆紀元將開始，漢武帝已根據我的預測發布了浸泡詔書，讓我們等著日出吧。」</p>

        <p class="paragraph">墨子調出了遊戲界面，將時間的流逝速度稍微調快了些。一輪紅日升出地平線，大地上星羅棋佈的湖泊開始解凍，這些湖泊原來封凍的冰面上落滿了沙塵，與大地融為一體，現在漸漸變成一個個晶瑩閃亮的鏡面，彷彿大地睜開了無數隻眼睛。在這高處，浸泡的具體細節看不請楚，只能看到湖邊的人漸漸多了起來，像春天擁出洞穴的蟻群。世界再一次復活了。</p>

        <p class="paragraph">「您不下去投身於這美妙的生活嗎？剛剛復活的女性是最渴望愛情的。」墨子指著下面重現生機的大地對汪淼說，「你在這裡再待下去沒有意義了，遊戲已經終結，我是最後的勝者。」</p>

        <p class="paragraph">「你的模擬宇宙作為一台機器確實精妙絕倫，但對它做出的預測嘛……哦，我能否使用您那台望遠鏡觀測天象呢？」</p>

        <p class="paragraph">「當然可以，你請。」墨子對著大望遠鏡做了個手勢。</p>

        <p class="paragraph">汪淼走到望遠鏡前，立刻發現了問題：「要觀測太陽，怎麼辦呢？」</p>

        <p class="paragraph">墨子從一隻木箱中拿出了一塊黑色圓片，「加上這片煙燻的濾鏡。」說著將它插到望遠鏡的目鏡前。</p>

        <p class="paragraph">汪淼將望遠鏡對準已升到半空的太陽，不由讚嘆墨子的想像力：太陽看上去確實像一個通向無邊火海的孔洞，是一個更大存在的一小部分。但進一步細看時，他發現，這個太陽與自己現實經驗中的那個有些不同，它有一顆很小的核心，如果將太陽看成一隻眸子，這個日核就像瞳孔。日核雖小，但明亮而緻密，包裹它的外層則顯得有些缺少實在感，飄忽不定，很像是氣態的。而穿過那厚厚的外層能看到內部日核，也說明外層是處於透明或半透明狀態的，它發出的光芒，更多的可能是日核光芒的散射。</p>

        <p class="paragraph">太陽圖像的真實和精緻令汪淼震驚，他再次確定，遊戲的作者在表面簡潔的圖像深處有意隱藏了海量的細節，等待著玩家去發掘。</p>

        <p class="paragraph">汪淼直起身，細想著這個太陽的結構隱含的意義，立刻興奮起來。由於遊戲時間加速，太陽已移到了西天，汪淼調整望遠鏡再次對準它，一直跟蹤到它落下地平線。夜幕降臨。大地上點點篝火與夜空漸密的群星相映。汪淼將望遠鏡上的黑色濾鏡取下，繼續觀測星空，他最感興趣的是飛星，很快找到了兩個。他只來得及對其中的一個進行大概的觀察，天就又亮了。他於是裝上濾鏡接著觀測太陽……汪淼就這樣連續進行了十多天的天文觀測，享受著發現的樂趣。其實，時間流逝速度的加快是有利於天文觀測的。因為這使得天體的運行和變化更加明顯。</p>

        <p class="paragraph">恆紀元開始後的第十七天，日出時間已過了五個小時，大地仍籠罩在夜幕中。金字塔下面人山人海。無數火把在寒風中搖曳。</p>

        <p class="paragraph">「太陽可能不會出來了，同 137 號文明的結局一樣。」汪淼對正在編纂這個世界上第一份萬年曆的墨子說。墨子撫著鬍鬚。對汪淼露出自信的笑容，「放心，太陽就要升起，恆紀元將繼續，我已經掌握了宇宙機器的運轉原理，我的預測不會有錯。」</p>

        <p class="paragraph">似乎是印證墨子的話，天邊真的出現了曙光，金字塔旁邊的人群中爆發出一陣歡呼聲。</p>

        <p class="paragraph">那片銀白色的曙光以超乎尋常的速度擴展變亮，彷彿即將升起的太陽要彌補失去的時間。很快，曙光已瀰漫了半個天空，以致太陽還未升起，大地已同往日的白晝一樣明亮。汪淼向曙光出現的遠方看去，發現地平線發出刺眼的強光，並向上彎曲拱起，成一個橫貫視野的完美弧形，他很快看出那不是地平線，是日輪的邊緣，正在升起的是一顆碩大無比的太陽，眼睛適應了這強光後，地平線仍在原位顯現出來，汪淼看到一縷縷黑色的東西在天邊升起，在日輪明亮的背景上格外清晰，那是遠方燃燒產生的煙霧。金字塔下面，一匹快馬從日出方向飛馳而來，揚起的塵埃在大地上劃出一道清晰的灰線，人群為其讓開了一條路，汪淼聽到馬上的人在聲嘶力竭地大喊：</p>

        <p class="paragraph">「脫水！脫水！！」</p>

        <p class="paragraph">跟著這匹馬跑來的，是一大群牛馬和其他動物。它們的身上都帶著火焰，在大地上織成一張移動的火毯。</p>

        <p class="paragraph">巨日已從地平線上升起了一半，占據了半個天空，大地似乎正順著一堵光輝燦爛的大牆緩緩下沉。汪淼可以清晰地看到太陽表面的細節，火焰的海洋上佈滿湧浪和漩渦，黑子如幽靈般沿著無規則的路線漂浮，日冕像金色的長袖懶洋洋地舒展著。</p>

        <p class="paragraph">大地上，已脫水和未脫水的人都燃燒起來，像無數扔進爐膛的柴火，其火焰的光芒比爐膛中燃燒的炭塊都亮，但很快就熄滅了。</p>

        <p class="paragraph">巨日迅速上升，很快升到了正空，遮蓋了大部分天空。汪淼仰頭看去，感覺突然間發生了奇妙的變化：這之前他是在向上看，現在似乎是在向下看了。巨日的表面構成了火焰的大地。他感覺自已正向這燦爛的地獄墜落！</p>

        <p class="paragraph">大地上的湖泊開始蒸發，一團團雪白的水蒸汽成蘑菇雲狀高高升起，接著瀰散開來，遮蓋了湖邊人類的骨灰。</p>

        <p class="paragraph">「恆紀元將繼續，宇宙是一台機器，我造出了這台機器；恆紀元將繼續，宇宙是……」</p>

        <p class="paragraph">汪淼扭頭一看，這聲音是從正在燃燒的墨子發出來的，他的身體包含在一根高高的橘黃色火柱之中，皮膚在發皺和炭化，但雙眼仍發出與吞噬他的火焰完全不同的光芒。他那已成為燃燒的炭桿的雙手捧著一團正在飛散的絹灰，那是第一份萬年曆。汪淼自己也在燃燒，他舉起雙手，看到了兩根火炬。</p>

        <p class="paragraph">巨日很快向西移去，讓出被它遮住的蒼穹。沉沒於地平線下，下沉的過程很快，大地似乎又沿著那堵光牆升起。耀眼的晚霞轉瞬即逝，夜幕像被一雙巨手拉扯的大黑布般遮蓋了已化為灰燼的世界。剛剛被燒灼過的大地在夜色下發著暗紅色的光，像一塊從爐中夾出來不久的炭塊。汪淼在夜空中看到群星出現了一小會兒，很快，水汽和煙霧遮住了天空，也遮住了處於紅熾狀態的大地上的一切，世界陷入一片黑暗的混沌之中。一行紅色的字出現：</p>

        <div class="special-tip" style="color: #952c1e">
            <p class="paragraph">第 141 號文明在烈焰中毀滅了。該文明進化至東漢層次。</p>

            <p class="paragraph">文明的種子仍在。她將重新啟動。再次開始在三體世界中命運莫測地進化，歡迎您再次登錄。</p>
        </div>
    </div>

    <br>

    <p class="paragraph">汪淼摘下 V 裝具，精神上的震撼稍稍平息後，又一次有了那種感覺：《三體》是故意偽裝成虛假，但擁有巨大縱深的真實；而眼前的真實世界，倒像一幅看似繁複龐雜實則單薄表淺的《清明上河圖》。</p>

    <p class="paragraph">第二天汪淼去納米中心上班，除了因他昨天沒來導致的一些小小的混亂外，一切如常。他發現工作是一種有效的麻醉劑，投身於其中，就暫時躲開了那噩夢般的困擾。一整天他有意使自己保持忙碌狀態，天黑後才離開實驗室。</p>

    <p class="paragraph">一走出納米中心的大樓，汪淼又被那噩夢的感覺追上了，他覺得佈滿群星的夜空像一面覆蓋一切的放大鏡，他自己是鏡下的一隻赤裸的小蟲，無處躲藏。他必須再為自己找些事情做，想到應該再去看看楊冬的母親了，就驅車來到了葉文潔家。</p>

    <p class="paragraph">楊母一個人在家，汪淼進去時她正坐在沙發上看書，他這才發現她的眼睛既老花又近視，看書和看遠處時都要換戴眼鏡。楊母見到汪淼很高興，說他的氣色看上去比上次好多了。</p>

    <p class="paragraph">「都是因為您的人蔘。」汪淼笑笑說。</p>

    <p class="paragraph">楊母搖搖頭，「那東西成色不好，那時，在基地周圍能採到很好的野山參。我採到過一枝有這麼長的……不知現在那裡怎麼樣，聽說已經沒有人了。唉，老了，最近總是在想以前的事。」</p>

    <p class="paragraph">「聽說在『文革』中，您吃過不少苦。」</p>

    <p class="paragraph">「聽小沙說的吧？」楊母輕輕擺擺手，像拂去面前的一根蛛絲，「過去了，都過去了……昨天小沙來電話，急匆匆的，說些什麼我也聽不明白，只聽出來你好像遇到什麼事。小汪啊，其實，你到了我這個年紀，就會發現當年以為天要塌下來的那些大事，其實沒有什麼的。」</p>

    <p class="paragraph">「謝謝您。」汪淼說，他又感到了那種難得的溫暖。現在，眼前這位歷經滄桑變得平靜淡泊的老人，和那位無知而無畏的大史，成了他搖搖欲墜的精神世界的兩根支柱。</p>

    <p class="paragraph">楊母接著說：「說起『文革』，我還是很幸運的，在活不下去的時候，竟意外地到了一個能活下去的地方。」</p>

    <p class="paragraph">「您是說紅岸基地嗎？」</p>

    <p class="paragraph">楊母點點頭。</p>

    <p class="paragraph">「那真是件不可思議的事情，我最初還以為純屬傳說呢。」</p>

    <p class="paragraph">「不是傳說，要是想知道，我給你講講自己經歷過的那些事。」</p>

    <p class="paragraph">楊母這一說令汪淼有些緊張。「葉老師，我只是好奇而己，要是不方便就算了。」</p>

    <p class="paragraph">「哦，沒什麼的，就當我找人說說話吧，我這陣子也確實想找人說說話。」</p>

    <p class="paragraph">「您可以到老年活動室什麼的去坐坐，多走動走動總是不寂寞。」</p>

    <p class="paragraph">「那些退休的老傢伙們好多都是我在大學的同事，但總是同他們融不到一塊兒。大家都喜歡念念叨叨地回憶往事，但都希望別人聽自己的，而對別人說的都厭煩。紅岸那些事，也就你感興趣了。」</p>

    <p class="paragraph">「現在說總還是有些不方便吧？」</p>

    <p class="paragraph">「那倒是，畢竟還屬於機密。不過那本書出了以後，許多親歷過的人也都在說，都是公開的秘密了。寫那本書的人很不負責任，他的目的先放到一邊，書中的許多內容也與事實有很大出入，糾正一下也是應該的。」</p>

    <p class="paragraph">於是，楊母向汪淼講述了那段還未塵封的往事。</p>
</div>
`