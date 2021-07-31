// データ
var data = [
  [0, '稚内空港', 'Wakkanai Airport', 'WKJ', 0, 1],
  [1, '旭川空港', 'Asahikawa Airport', 'AKJ', 0, 1],
  [2, '帯広空港 (とかち帯広空港)', 'Obihiro Airport', 'OBO', 0, 1],
  [3, '紋別空港 (オホーツク紋別空港)', 'Monbetsu Airport', 'MBE', 0, 1],
  [4, '釧路空港 (たんちょう釧路空港)', 'Kushiro Airport', 'KUH', 0, 1],
  [5, '新千歳空港', 'New-Chitose Airport', 'CTS', 0, 1],
  [6, '中標津空港 (根室中標津空港)', 'Nakashibetsu Airport', 'SHB', 0, 1],
  [7, '函館空港', 'Hakodate Airport', 'HKD', 0, 1],
  [8, '利尻空港', 'Rishiri Airport', 'RIS', 0, 0],
  [9, '女満別空港', 'Memanbetsu Airport', 'MMB', 0, 1],
  [10, '奥尻空港', 'Okushiri Airport', 'OIR', 0, 0],
  [11, '札幌飛行場 (丘珠空港)', 'Okadama Airport', 'OKD', 0, 0],
  [12, '礼文空港', 'Rebun Airport', 'RBJ', 0, 0],
  [13, '青森空港', 'Aomori Airport', 'AOJ', 1, 1],
  [14, '三沢空港', 'Misawa Airport', 'MSJ', 1, 0],
  [15, '秋田空港', 'Akita Airport', 'AXT', 2, 1],
  [16, '大館能代空港 (あきた北空港)', 'Odate-Noshiro Airport', 'ONJ', 2, 1],
  [17, '花巻空港(いわて花巻空港)', 'Iwate-Hanamaki Airport', 'HNA', 3, 0],
  [18, '福島空港', 'Fukushima Airport', 'FKS', 6, 1],
  [19, '仙台国際空港', 'Sendai International Airport', 'SDJ', 4, 1],
  [20, '山形空港 (おいしい山形空港)', 'Yamagata Airport', 'GAJ', 5, 0],
  [21, '庄内空港 (おいしい庄内空港)', 'Syounai Airport', 'SYO', 5, 1],
  [22, '茨城空港 (百里飛行場)', 'Ibaraki Airport', 'IBR', 7, 0],
  [23, '新東京国際空港 (成田空港)', 'Narita International Airport', 'NRT', 11, 1],
  [24, '東京国際空港 (羽田空港)', 'Tokyo International Airport (Haneda Airport)', 'HND', 12, 1],
  [25, '大島空港', 'Oshima Airport', 'OIM', 12, 0],
  [26, '三宅島空港', 'Miyakejima Airport', 'MYE', 12, 0],
  [27, '八丈島空港', 'Hachijojima Airport', 'HAC', 12, 1],
  [28, '新潟空港', 'Nigata Airport', 'KIJ', 14, 1],
  [29, '佐渡空港', 'Sado Airport', 'SDS' , 14, 0],
  [30, '富山空港 (富山きときと空港)', 'Toyama Airport', 'TOY', 15, 1],
  [31, '能登空港 (のと里山空港)', 'Noto Airport', 'NTQ', 16, 1],
  [32, '小松空港', 'Komatsu Airport', 'KMQ', 16, 1],
  [33, '松本空港 (信州まつもと空港)', 'Matsumoto Airport', 'MMJ', 19,0 ],
  [34, '名古屋空港 (小牧空港)', 'Nagoya Airport', 'NKM', 22, 0],
  [35, '中部国際空港 (セントレア)', 'Chubu International Airport', 'NGO', 22, 1],
  [36, '伊丹空港', 'Osaka Inrternational Airport', 'ITM', 28, 1],
  [37, '関西国際空港', 'Kansai International Airport', 'KIX', 28, 1],
  [38, '南紀白浜空港', 'Nanki-Shirahama Airport', 'SHM', 27, 0],
  [39, '但馬飛行場 (コウノトリ但馬空港)', 'Tajima Airport', 'TKG', 29, 0],
  [40, '神戸空港 (マリンエア)', 'Kobe Airport', 'UKB', 29, 1],
  [41, '岡山空港 (岡山桃太郎空港)', 'Okayama Airport', 'OKJ', 30, 1],
  [42, '鳥取空港 (鳥取砂丘コナン空港)', 'Tottori Airport', 'TTJ', 32, 1],
  [43, '米子空港 (米子鬼太郎空港)', 'Yonago Airport', 'YGJ', 32, 1],
  [44, '出雲空港 (出雲縁結び空港)', 'Izumo Airport', 'IZO', 33, 0],
  [45, '隠岐空港 (隠岐世界ジオパーク空港)', 'Oki Airport', 'OKI', 33, 0],
  [46, '石見空港 (萩・石見空港)', 'Iwami Airport', 'IWJ', 33, 1],
  [47, '広島空港', 'Hiroshima Airport', 'HIJ', 31, 1],
  [48, '山口宇部空港', 'Yamaguvhi-Ube Airport', 'UBJ', 34, 1],
  [49, '高松空港', 'Takamatsu Airport', 'TAK', 35, 1],
  [50, '徳島空港 (徳島阿波おどり空港)', 'Tokushima Airport', 'TKS', 37, 1],
  [51, '松山空港', 'Matauyama Airport', 'MYJ', 36, 1],
  [52, '高知空港 (高知龍馬空港)', 'Kochi Airport', 'KCZ', 38, 1],
  [53, '北九州空港', 'Kitakyusyu Airport', 'KKJ', 39, 1],
  [54, '福岡空港', 'Fukuoka Airport', 'FUK', 39, 1],
  [55, '有明佐賀空港 (九州佐賀国際空港)', 'Saga Airport', 'HSG', 40, 1],
  [56, '対馬空港 (対馬やまねこ空港)', 'Tsushima Airport', 'TSJ', 41, 1],
  [57, '壱岐空港', 'Iki Airport', 'IKI', 41, 1],
  [58, '福江空港 (五島つばき空港・五島福江空港)', 'Fukue Airport', 'FUJ', 41, 1],
  [59, '長崎空港', 'Nagasaki Airport', 'NGS', 41, 1],
  [60, '熊本空港 (阿蘇くまもと空港)', 'Kumamoto Airport', 'KMJ', 43,1],
  [61, '大分空港', 'Oita Aiport', 'OIT', 42, 1],
  [62, '宮崎空港(宮崎ブーゲンビリア空港)', 'Miyazaki Airport', 'KMI', 44, 1],
  [63, '鹿児島空港', 'Kagoshima Airport', 'KOJ', 45, 1],
  [64, '種子島空港 (コスモポート種子島)', 'Tanegashima Airport', 'TNE', 45,0 ],
  [65, '屋久島空港', 'Yakushima Airport', 'KUM', 45,0 ],
  [66, '奄美空港', 'Amami Airport', 'ASJ', 45, 0],
  [67, '喜界空港', 'Kikai Airport', 'KKX', 45, 0],
  [68, '徳之島空港 (徳之島子宝空港)', 'Tokunoshima Airport', 'TKN',  45, 0],
  [69, '沖永良部空港 (えらぶゆりの島空港)', 'Okinoerabu Airport', 'OKE', 45, 0],
  [70, '与論空港', 'Yoron Airport', 'RNJ', 45, 0],
  [71, '那覇空港', 'Naha Airport', 'OKA', 46, 1],
  [72, '粟国空港', 'Aguni Airport', 'AGJ', 46, 0],
  [73, '久米島空港', 'Kumejima Airport', 'UEO', 46, 0],
  [74, '慶良間空港', 'Kerama Airport', 'KJP', 46, 0],
  [75, '北大東空港', 'Kita-Daito Airport', 'KTD', 46, 0],
  [76, '南大東空港', 'Minami-Daito Airport', 'MMD', 46, 0],
  [77, '宮古空港', 'Miyako Airport', 'MMY', 46, 1],
  [78, '下地島空港 (みやこ下地島空港)', 'Shimojishima Airport', 'SHI', 46, 0],
  [79, '新多良間空港', 'Tarama Airport', 'TRA', 46, 0],
  [80, '石垣空港 (南ぬ島 石垣空港)', 'Ishigaki Airport', 'ISG', 46, 1],
  [81, '波照間空港', 'Hateruma Airport', 'HTR', 46, 0],
  [82, '与那国空港', 'Yonaguni Airport', 'OGN', 46, 0],
  [83, '岩国飛行場 (岩国錦帯橋空港)', 'Iwakuni Airport', 'IWK', 34, 1],
  [84, '静岡空港 (富士山静岡空港)', 'Shizuoka Airport', 'FSZ', 21, 1],
  [85, 'ニノイ・アキノ国際空港', 'Ninoy Aquino International Airport', 'MNL',244, 1],
  [86, '仁川国際空港', 'Incheon International Airport', 'ICN', 47, 1],
  [87, '金浦国際空港', 'Gimpo International Airport', 'GMP', 47, 1],
  [88, '済州国際空港', 'Jeju International Airport', 'CJU', 49, 0],
  [89, '釜山国際空港', 'Busan International Airport', 'PUS', 48, 0],
  [90, '北京首都国際空港', 'Beijing Capital International Airport', 'PEK', 50, 1],
  [91, '成都双流国際空港', 'Chengdu Shuangliu International Airport', 'CTU', 51, 1],
  [92, '重慶江北国際空港', 'Chongping Jiangbei International Airport', 'CKG', 52, 0],
  [93, '大連周水子国際空港', 'Dalian Zhoushuizi International Airport', 'DLC', 53, 1],
  [94, '広州白雲国際空港', 'Guangzhou Baiyun International Airport', 'CAN', 54, 1],
  [95, '杭州蕭山国際空港', 'Hangzhou Xiaoshan International Airport', 'HGH', 55, 1],
  [96, '昆明巫家壩国際空港', 'Kunming Wujiaba International Airport', 'KMG', 56,  0],
  [97, '南京禄口国際空港', 'Nanjing Lukou International Airport', 'NKG', 57, 0],
  [98, '青島流亭国際空港', 'Qingdao Liuting International Airport', 'TAO', 58, 1],
  [99, '上海虹橋国際空港', 'Shanghai Hongqiao Airport', 'SHA', 59, 1],
  [100, '上海浦東国際空港', 'Shanghai Pudong International Airport', 'PVG', 59, 1],
  [101, '深圳宝安国際空港', 'Shenzhen Baoan International Airport', 'SZX', 60, 1],
  [102, '天津濱海国際空港', 'Tianjin Binhai International Airport', 'TSN',61, 1],
  [103, '廈門高崎国際空港', 'Xiamen Gaoqi International Airport', 'XMN', 62, 1],
  [104, '煙台莱山国際空港', 'Yantai Laishan International Airport', 'YNT', 63, 0],
  [105, '武漢天河国際空港', 'Wuhan Tianhe International Airport', 'WUH', 64, 1],
  [106, '香港国際空港', 'Hong Kong International Airport', 'HKG', 65, 1],
  [107, '澳門国際空港', 'Macau International Airport', 'MFM', 66, 0],
  [108, 'ノイバイ国際空港', 'Noi Bai International Airport', 'HAN', 67, 1],
  [109, 'タンソンニャット国際空港', 'Tan Son Nhat International Airport', 'SGN', 68, 1],
  [110, 'スワンナプーム国際空港', 'Suvarnabhumi Airport', 'BKK', 69, 1],
  [111, 'ドンムアン空港', 'Don Mueang International Airport', 'DMK', 69, 0],
  [112, 'プノンペン国際空港', 'Phnom Penh International Airport', 'PNH', 70, 1],
  [113, 'シェムリアップ国際空港', 'Siem Reap International AIrport', 'REP', 71, 0],
  [114, 'ワットタイ国際空港', 'Wattay International Airport', 'VTE', 72, 0],
  [115, 'クアラルンプール国際空港', 'Kuala Lumpur International Airport', 'KUL', 73, 1],
  [116, 'チャンギ国際空港', 'Changi International Airport', 'SIN', 74, 1],
  [117, 'スカルノ・ハッタ国際空港', 'Soekarno-Hatta International Airport', 'CGK', 75, 1],
  [118, 'ングラ・ライ国際空港(デンパサール国際空港)', 'Ngrah Rai International Airport', 'DPS', 76, 0],
  [119, 'ポートモレスビー・ジャクソン空港', 'Jacksons International Airport', 'POM', 77, 0],
  [120, 'シドニー国際空港(キングスフォード・スミス国際空港)', 'SydneyAirport (Kingsford Smith Airport)', 'SYD', 78, 1],
  [121, 'メルボルン空港', 'Melbourne Airport', 'MEL', 79,  0],
  [122, 'ブリスベン国際空港', 'Brisbane Airport', 'BNE', 80, 0],
  [123, 'ケアンズ国際空港', 'Cairns Airport', 'CNS', 81, 0],
  [124, 'ゴールドコースト国際空港', 'Gold Coast Airport / Coolagatta Airport', 'OOL', 82, 0],
  [125, 'アデレード空港', 'Adelaide Airport', 'ADL', 83, 0],
  [126, 'パース空港', 'Perth Airport', 'PER', 84, 1],
  [127, 'ホバート国際空港', 'Hobert International Airport', 'HBA', 85, 0],
  [128, 'オークランド国際空港', 'Auckland International Airport', 'AKL', 86, 0],
  [129, 'クライストチャーチ国際空港', 'Christchurch International Airport', 'CHC', 87, 0],
  [130, 'ダニーデン国際空港', 'Dunedin International Airport', 'DUD', 88, 0],
  [131, 'ウェリントン国際空港', 'Wellingoton International Airport', 'WLG', 89, 0],
  [132, 'トリブバン国際空港', 'Tribhuvan International Airport', 'KTM', 90, 0],
  [133, 'インディラ・ガンディー国際空港', 'Indira Gandhi International Airport', 'DEL', 91, 1],
  [134, 'ケンペゴウダ国際空港', 'Kempegowda International Airport', 'BLR', 92, 0],
  [135, 'チャントラパティ・シヴァジー国際空港', 'Chhantrapati Shivaji International Airport', 'BOM', 93, 1],
  [136, 'ネタジ・スバス・チャンドラ・ボース国際空港', 'Chhatrapati Shivaji International Airport', 'BOM', 112, 0],
  [137, 'チェンナイ国際空港', 'Chennai International Airport', 'MAA', 94, 1],
  [138, 'ラジーヴ・ガンディー国際空港', 'Rajiv Gandhi International Airport', 'HYD', 95, 0],
  [139, 'チンギスハーン国際空港', 'Chinggis Khaan International Airport', 'ULN', 96, 0],
  [140, '新ウランバートル国際空港', 'New Ulaanbaatar International Airport', 'UBN', 96, 0],
  [141, 'イスラマバード国際空港', 'Islamabad International Airport', 'ISB', 97, 0],
  [142, 'アルマトイ国際空港', 'Almaty International Airport', 'ALA', 98, 0],
  [143, 'ヌルスルタン・ナザルバエフ国際空港', 'Nursultan Nazarbayev International Airport', 'TSE', 99, 0],
  [144, 'エマーム・ホメイニー国際空港', 'Imam Khomeini International Airport', 'IKA', 100,0 ],
  [145, 'バグダード国際空港', 'Baghdad International Airport', 'BGW', 101, 0],
  [146, 'キング・ハーリド国際空港', 'King Khalid International Airport', 'RUH', 102, 0],
  [147, 'ドバイ国際空港', 'Dubai International Airport', 'DXB', 103, 0],
  [148, 'アブダビ国際空港', 'Abu Dhabi International Airport', 'AUH', 104, 0],
  [149, 'クウェート国際空港', 'Kuwait International Airport', 'KWI', 105, 0],
  [150, 'ダマスカス国際空港', 'Damascus International Airport', 'DAM', 106, 0],
  [151, 'クイーンアリア国際空港', 'Queen Alia International Airport', 'AMM', 107, 0],
  [152, 'ベン・グリオン国際空港', 'Ben Gurion International Airport', 'TLV', 108, 0],
  [153, 'カイロ国際空港', 'Cairo International Airport', 'CAI', 109, 0],
  [154, 'イスタンブール空港', 'Istanbul Airport', 'IST', 110, 1],
  [155, '台湾桃園国際空港', 'Taiwan Taoyuan International Airport', 'TPE', 245, 1],
  [156, 'サビハ・ギョクチェン国際空港', 'Sabiha Gokcen International Airport', 'SAW', 110, 0],
  [157, 'アンタルヤ国際空港', 'Antalya International Airport', 'AYT', 111, 0],
  [158, 'プルコヴォ空港', 'Pulkovo Airport', 'LED', 113, 0],
  [159, 'ヤクーツク空港', 'Yakutsk Airport', 'YSK', 114, 0],
  [160, 'シェレメーチエヴォボ国際空港', 'Sheremetyevo International Airport', 'SVO', 115, 0],
  [161, 'ドモジェドヴォ空港', 'Domodedovo International Airport', 'DME', 115, 1],
  [162, 'ボルィースピリ空港', 'Boryspil International Airport', 'KBP', 116, 0],
  [163, 'ミンスク・ナショナル空港', 'Minsk National Airoport', 'MSQ', 117, 0],
  [164, 'ヴィリニュス国際空港', 'Vilinius International Airport', 'VNO', 118, 0],
  [165, 'リガ国際空港', 'Riga International Airport', 'RIX', 119, 0],
  [166, 'レナルト・メリ・タリン空港', 'Lennart Meri Tallinna Airport', 'TLL', 120, 0],
  [167, 'ワルシャワ・ショパン空港', 'Warsaw Chopin Airport', 'WAW', 121, 0],
  [168, 'ミラン・ラスチスラウ・シュテファニーク空港', 'Milan Rastislav Stefanik Airport', 'BTS', 122, 0],
  [169, 'リスト・フィレンツェ国際空港', 'Budapest Ferenc Liszt International Airport', 'BUD', 123, 0],
  [170, 'アンリ・コアンダ国際空港', 'Henri Coanda International Airport', 'OTP', 124, 0],
  [171, 'ヴェラナ国際空港', 'Velana International Airport', 'MLE', 125, 0],
  [172, 'キシナウ国際空港', 'Chisinau International Airport', 'KIV', 126, 0],
  [173, 'ソフィア空港', 'Sofia Airport', 'SOF', 127, 0],
  [174, 'アテネ国際空港', 'Athens International Airport', 'ATH', 128, 0],
  [175, 'ティラナ国際空港 (マザー・テレサ空港)', 'Tirana International Airport (Mother Teresa International Airport)', 'TIA', 129, 0],
  [176, 'スコピエ空港', 'Skopje Airport', 'SKP', 130, 0],
  [177, 'プリシュティナ国際空港', 'Prishtina International Airport', 'PRN', 131, 0],
  [178, 'ポドゴリツァ空港', 'Podgorica Airport', 'TGD', 132, 0],
  [179, 'ティヴァト空港', 'Tivat Airport', 'TIV', 133, 0],
  [180, 'ベオグラード・ニコラ・テスラ空港', 'Belgrade Nikola Tesla Airport', 'BEG', 134, 0],
  [181, 'サラエヴォ国際空港', 'Sarajevo International Airport', 'SJJ', 135, 0],
  [182, 'ザグレブ国際空港', 'Franjo Tudman Airport', 'ZAG', 136, 0],
  [183, 'ドブロブニク空港', 'Dubrovnik Airport', 'DBV', 137, 0],
  [184, 'リュブリャナ空港', 'Ljubljana Airport', 'LJU', 138,0 ],
  [185, 'ウィーン国際空港', 'Vienna International Airport', 'VIE', 139, 1],
  [186, 'ヴァーツラフ・ハヴェル・プラハ国際空港', 'Vaclav Havel Airport Prague', 'PRG', 140, 0],
  [187, 'フランクフルト国際空港', 'Frankfurt Airport', 'FRA', 141, 1],
  [188, 'ミュンヘン国際空港', 'Munich Airport', 'MUC', 142, 1],
  [189, 'デュッセルドルフ国際空港', 'Dusseldorf', 'DUS', 143, 1],
  [190, 'ベルリン・テーゲル空港', 'Berlin-Tegel Airport', 'TXL', 144,  0],
  [191, 'ベルリン・シェーネフェルト空港', 'Berlin-Schonefeld Airport', 'SXF', 144, 0],
  [192, 'ベルリン・ブランデンブルク国際空港', 'Berlin-Brandenburg Airport', 'BER', 144, 0],
  [193, 'コペンハーゲン空港', 'Copenhagen Airport', 'CPH', 145, 0],
  [194, 'ストックホルム・アーランダ空港', 'Stockholm-Arlanda Airport', 'ARN', 146, 1],
  [195, 'オスロ空港', 'Oslo/Gardermoen Airport', 'OSL', 147, 0],
  [196, 'ベルゲン空港', 'Bergen Airport','BGO', 148, 0],
  [197, 'ヘルシンキ・ヴァンター国際空港', 'Helsinki-Vantaa International Airport', 'HEL', 149, 0],
  [198, 'イヴァロ空港', 'Ivalo Airport', 'IVL', 150, 0],
  [199, 'アムステルダム・スキポール空港', 'Amsterdam Airport Schiphol', 'AMS', 151, 0],
  [200, 'ブリュッセル空港 (ザベンテム空港)', 'Brussels Airport', 'BRU', 152, 1],
  [201, 'シャルル・ド・ゴール空港', 'Charles-de-Gaulle Airport', 'CDG', 153, 1],
  [202, 'オルリー空港', 'Orly Airport', 'ORY', 153, 0],
  [203, 'マルセイユ・プロヴァンス空港', 'Marseille Provence Airport', 'MRS', 154, 0],
  [204, 'モンペリエ・メディテラナ空港', 'Montpellier-Mediterranee Airport', 'MPL', 155, 0],
  [205, 'ボルドー・メリニャック空港', 'Bordeaux Merignac Airport', 'BOD', 156, 0],
  [206, 'ブレスト・ブルターニュ空港', 'Brest Bretagne Airport', 'BES', 157, 0],
  [207, 'リヨン・サン＝テグジュペリ空港', 'Saint-Exupery International Airport', 'LYS', 158,0],
  [208, 'チューリッヒ空港', 'Zurich Airport', 'ZRH', 159, 0],
  [209, 'ジュネーブ空港 (コアントラン空港)', 'Geneve Airport (Cointrin Airport)','GVA', 160, 0],
  [210, 'ルクセンブルク-フィンデル空港', 'Luxembourg-Findel International Airport', 'LUX', 161, 0],
  [211, 'ヴェネツィア・テッセラ空港 (マルコ・ポーロ国際空港)', 'Venezia Tessera Airport (Venice Marco Polo Airport)', 'VCE', 162, 0],
  [212, 'ミラノ・マルペンサ空港', 'Milan Malpensa Airport', 'MXP', 163, 1],
  [213, 'フィウミチーノ空港', 'Fiumicino Airport', 'FCO', 164, 0],
  [214, 'ナポリ・カポディキーノ国際空港', 'Naples Capodichino Internaitonal Airport', 'NAP', 165, 0],
  [215, 'リナーテ国際空港 (エンリコ・フォルランヒーニ空港)', 'Milan Linate Airport (Enrico Forlanini Airport)', 'LIN', 163, 0],
  [216, 'ピサ空港 (ガリレオ・ガリレイ国際空港)', 'Pisa Airport (Galileo Galilei International Airport)', 'PSA', 166, 0],
  [217, 'アドルフォ・スアレス・マドリード＝バラハス空港', 'Adolfo Suarez Madrid-Barajas Airport', 'MAD', 167, 0],
  [218, 'バルセロナ・エル・プラット空港', 'Barcelona-El Plat Airport', 'BCN', 168, 0],
  [219, 'マラガ＝コスタ・デルソル空港', 'Malaga-Costa del Sol Airport', 'AGP', 169, 0],
  [220, 'セビリア空港', 'Sevilla Airport', 'SVQ', 170, 0],
  [221, 'サンディアゴ・デ・コンポステーラ空港', 'Santiago de Compostela Airport', 'SCQ', 171, 0],
  [222, 'リスボン空港 (ウンベルト・デルガード空港)', 'Lisboa Humberto Delgado Airport', 'LIS', 172, 0],
  [223, 'ファロ空港', 'Faro International Airport', 'FAO', 173, 0],
  [224, 'ヒースロー空港', 'Heathrow Airport', 'LHR', 174, 1],
  [225, 'ガトウィック空港', 'Gatwick Airport', 'LGW', 174, 0],
  [226, 'バーミンガム空港', 'Birmingham Airport', 'BHX', 175, 0],
  [227, 'マンチェスター空港', 'Manchester Airport', 'MAN', 176, 0],
  [228, 'ベルファスト国際空港', 'Belfast International Airport', 'BFS', 177, 0],
  [229, 'エディンバラ空港', 'Edinbyrgh Airport', 'EDI', 178,0 ],
  [230, 'グラスゴー国際空港', 'Glasgow Airport', 'GLA', 179, 0],
  [231, 'カーディフ国際空港', 'Cardiff Airport', 'CWL', 180, 0],
  [232, 'マン島空港 (ロナルズウェイ空港)','Isle of Man Airport (Ronaldsway Airport)', 'IOM', 181, 0],
  [233, 'スタンステッド空港', 'Stansted Airport', 'STN', 174, 0],
  [234, 'ロンドン・シティ空港', 'London City Airport', 'LCY', 174, 0],
  [235, 'サウスエンド空港', 'Southrnd Airport', 'SEN', 174, 0],
  [236, 'ダブリン空港', 'Dublin Airport', 'DUB', 182, 0],
  [237, 'シャノン空港', 'Shannon Airport', 'SNN', 183, 0],
  [238, 'ケプラヴィーク国際空港', 'Kefravik International Airport', 'KEF', 184, 0],
  [239, 'カンゲルルスアーク空港', 'Kangerlussuaq Airport', 'SFJ', 185, 0],
  [240, 'バンクーバー国際空港', 'Vancouver International Airport', 'YVR', 186, 1],
  [241, 'トロント・ピアソン国際空港', 'Toronto Pearson International Airport', 'YYZ', 187, 0],
  [242, 'ビクトリア国際空港', 'Victoria International Airport', 'YYJ', 188, 0],
  [243, 'モントリオール・ピエール・エリオット・トルドー国際空港', 'Montreal-Pierre Elliot Trudeau International Airport', 'YUL', 189, 0],
  [244, 'カルガリー国際空港', 'Calgary International Airport', 'YYC', 190, 0],
  [245, 'オタワ・マクドナルド・カルティエ国際空港', 'Ottawa Macdonald-Cartier International Airport', 'YOW', 191, 0],
  [246, 'ケロウナ国際空港', 'Kelowna International Airport', 'YLW', 192, 0],
  [247, 'ハリファックス・ロバート・L・スタンフィールド国際空港', 'Halifax Robert L. Stanfield International Airport', 'YHZ', 193, 0],
  [248, 'イエローナイフ空港', 'Yellowknife Airport', 'YZF', 194, 0],
  [249, 'ラガーディア空港', 'LaGuardia Airport', 'LGA', 195, 0],
  [250, 'ニューアーク・リバティー空港', 'Newark Liberty Internatinal Airport', 'EWR', 195, 0],
  [251, 'ジョン・F・ケネディ空港', 'John F. Kennedy International Airport', 'JFK', 195, 1],
  [252, 'ジェネラル・エドワード・ローレンス・ローガン国際空港', 'General Edward Lawrence Logan International Airport', 'BOS', 196, 0],
  [253, 'フィラデルフィア国際空港', 'Philadelphia International Airport', 'PHL', 197, 0],
  [254, 'ワシントン・ダレス国際空港', 'Washington Dulles International Airport', 'IAD', 198, 1],
  [255, 'ロナルド・レーガン・ワシントン・ナショナル空港', 'Ronald Reagan Washington National Airport', 'DCA', 198,0 ],
  [256, 'リッチモンド国際空港', 'Richmond International Airport', 'RIC', 199, 0],
  [257, 'ノーフォーク国際空港', 'Norfolk International Airport', 'ORF', 200, 0],
  [258, 'ローリー・ダーラム国際空港', 'Raleigh-Durham International Airport', 'RDU', 201, 0],
  [259, 'シャーロット・ダグラス国際空港', 'Charlotte Douglas International Airport', 'CLT', 202,0 ],
  [260, 'グリーンビル・スパータンバーグ国際空港', 'Greenville-Spartanburg International Airport', 'GSP', 203, 0],
  [261, 'ハートフィールド・ジャクソン・アトランタ国際空港', 'Hartsfield-Jackson Atlanta International Airport', 'ATL', 204, 0],
  [262, 'オーランド国際空港', 'Orland International Airport', 'MCO', 205, 0],
  [263, 'マイアミ国際空港', 'Miami International Airport', 'MIA', 206, 0],
  [264, 'バーミンガム＝シャトルズワース国際空港', 'Birmingham-Shuttlesworth International Airport', 'BHM', 207, 0],
  [265, 'ハンツビル国際空港', 'Huntsville International Airport', 'HSV', 208, 0],
  [266, 'ナッシュビル国際空港', 'Nashville International Airport', 'BNA', 209, 0],
  [267, 'シンシナティ/ノーザンケンタッキー国際空港', 'Cincinnati/Northern Kentucky International Airport', 'CVG', 210,0],
  [268, 'インディアナポリス国際空港', 'Indianapolis International Airport', 'IND', 211, 0],
  [269, 'デイトン国際空港', 'Dayton International Airport', 'DAY', 212, 0],
  [270, 'ポート・コロンバス国際空港', 'Port Columbus Internatinal Airport', 'CMH', 213, 0],
  [271, 'ピッツバーグ国際空港', 'Pittburgh International Airport', 'PIT', 214, 0],
  [272, 'クリーブランド・ホプキンス国際空港', 'Cleveland Hopkins Internatinal Airport', 'CLE', 215, 0],
  [273, 'バッファロー・ナイアガラ国際空港', 'Buffalo Niagara International Airport', 'BUF', 216, 0],
  [274, 'デトロイト・メトロポリタン・ウェイン・カウンティ国際空港', 'Detroit Metropolitan Wayne Country Airport', 'DTW', 217, 0],
  [275, 'シカゴ・オヘア国際空港', "Chicago O'Hare International Airport", 'ORD', 218, 1],
  [276, 'ミネアポリス・セントポール国際空港', 'Minneapolis-Saint Paul International Airport', 'MSP', 219, 0],
  [277, 'セントルイス・ランバート国際空港', 'St. Louis Lambert Internatinal Airport', 'STL', 220, 0],
  [278, 'メンフィス国際空港', 'Menphis International Airport', 'MEM', 221, 0],
  [279, 'ルイ・アームストロング・ニューオーリーンズ国際空港', 'Louis Armstrong New Oreans International Airport', 'MSY', 222, 0],
  [280, 'ジョージ・ブッシュ・インターコンチネンタル空港', 'George Bush Intercontinental Airport', 'IAH', 223, 1],
  [281, 'オースティン・バーグストロム国際空港', 'Austin-Bergstrom International Airport', 'AUS', 224, 0],
  [282, 'サンアントニオ国際空港', 'San Antonio Internatinal Airport', 'SAT', 225, 0],
  [283, 'ダラス・フォートワース国際空港', 'Dallas/Fort Worth International Airport', 'DFW', 226,0 ],
  [284, 'カンザスシティ国際空港', 'Kansas City International Airport', 'MCI', 227, 0],
  [285, 'デンバー国際空港', 'Denver Internatinal Airport', 'DEN', 228, 0],
  [286, 'フェニックス・スカイハーバー国際空港', 'Phoenix Sky Harbor International Airport', 'PHX', 229, 0],
  [287, 'マッカラン国際空港', 'McCarran International Airport', 'LAS', 230, 0],
  [288, 'ソルトレイクシティ国際空港', 'Salt Lake City International Airport', 'SLC', 231, 0],
  [289, 'シアトル・タコマ国際空港', 'Seattle-Tacoma International Airport', 'SEA', 232, 1],
  [290, 'ポートランド国際空港', 'Portland International Airport', 'PDX', 233, 0],
  [291, 'サクラメント国際空港', 'Sacramento International Airport', 'SMF', 234, 0],
  [292, 'サンフランシスコ国際空港', 'San Francisco International Airport', 'SFO',  235, 1],
  [293, 'ノーマン・Y・ミネタ・サンノゼ国際空港', 'Norman Y. Mineta San Jose International Airport', 'SJC', 236, 1],
  [294, 'ロサンゼルス国際空港', 'Los Angeles Internatinal Airport', 'LAX', 237, 1],
  [295, 'サンディエゴ国際空港 (リンドバーグ飛行場)', 'San Diego International Airport (Lindbergh Field)', 'SAN', 238, 0],
  [296, 'ダニエル・K・イノウエ国際空港 (ホノルル国際空港)', 'Daniel K. Inouye International Airport', 'HNL', 239, 1],
  [297, 'アントニオ・B・ヲン・パット国際空港(グアム国際空港)', 'Antonio B. Won Pat International Airport (Guam International Airport)', 'GUM', 240, 0],
  [298, 'テッド・スティーブンス・アンカレッジ国際空港', 'Ted Stevens Anchorage International Airport', 'ANC', 241, 0],
  [299, 'モンテレイ国際空港', 'Monterrei International Airport', 'MTY', 242, 0],
  [300, 'メキシコシティ国際空港', 'Mexico City International Airport', 'MEX', 243, 1],
  [301, 'ヤンゴン国際空港', 'Yangon International Airport', 'RGN', 246, 1],
  [302, '台北松山空港', 'Taipei Songshan Airport', 'TSA', 245, 1],
  [303, 'ダナン国際空港', 'Da Nang International Airport', 'DAD', 247, 0],
  [304, 'ウラジオストク国際空港', 'Vladivostok International Airport', 'VVO', 248, 1],
  [305, 'ボレ国際空港', 'Bole International Airport', 'ADD', 249, 0],
  [306, '高雄国際空港', 'Kaohsiung International Airport', 'KHH', 250, 0],
  [307, '済南遥墻国際空港', 'Jinan Yaoqiang International Airport', 'TNA', 251, 0],
  [308, '蘇南碩放国際空港', 'Sunan Shuofang Airport', 'WUX', 252, 0],
  [309, 'バンダラナイケ国際空港', 'Bandaranaike International Airport', 'CMB', 253, 0],
  [310, 'キガリ国際空港', 'Kigali International Airport', 'KGL', 254, 0],
  [311, 'O・R・タンボ国際空港', 'O.R. Tambo International Airport', 'JNB',255,0],
  [312, 'リーブルヴィル国際空港 (レオン・ムバ空港)', 'Libreville International Airport', 'LBV', 256,0],
  [313, 'ジョモ・ケニヤッタ国際空港', 'Jomo Kenyatta International Airport', 'NBO', 257, 0],
  [314, 'ムルタラ・モハンマド国際空港', 'Murtala Muhammad International Airport', 'LOS', 258, 0],
  [315, 'ジュリウス・ニエレレ国際空港', 'Julius Nyerere International Airport', 'DAR', 259, 0],
  [316, 'エセイサ国際空港 (ミニストロ・ピスタリーニ国際空港)', 'Ministro Pistarini International Airport', 'EZE', 260, 0],
  [317, 'アントニオ・カルロス・ジョビン国際空港 (ガレオン国際空港)','Rio de Janeiro-Galeao Interntional Airport', 'GIG', 261, 0],
  [318, 'グアルーリョス国際空港', 'Guarulhos International Airport', 'GRU', 262, 0],
  [319, 'アルトゥーロ・メリノ・ベニデス国際空港', 'Comodoro Arturo Merino Benitez International Airport', 'SCL', 263, 0],
  [320, 'マタベリ国際空港', 'Mataveli International Airport', 'IPC', 264, 0],
  [321, 'エル・ドラド国際空港', 'El Dorado International Airport', 'BOG', 265, 0],
  [322, 'マリスカル・スクレ国際空港', 'Mariscal Sucure International Airport', 'UIO', 266, 0],
  [323, 'ホルヘ・チャベス国際空港', 'Jorge Chavez International Airport', 'LIM', 267, 0],
  [324, 'アレハンドロ・ベラスコ・アステテ国際空港', 'Alejandro Velasco Astete International Airport', 'CUZ', 268, 0],
  [325, 'カラスコ国際空港', 'Carrasco International Airport', 'MVD', 269, 0],
  [326, 'シモン・ボリバル国際空港', 'Simon Bolivar International Airport', 'CCS', 270, 0],
  [327, '瀋陽桃仙国際空港', 'Shenyang Taoxian International Airport', 'SHE', 271, 1]
];

const maxdata = 327;

var place = [
  [0, '北海道', 'Hokkaido', 28],
  [1, '青森県', 'Aomori', 28],
  [2, '秋田県', 'Akita', 28],
  [3, '岩手県', 'Iwate', 28],
  [4, '宮城県', 'Miyagi', 28],
  [5, '山形県', 'Yamagata', 28],
  [6, '福島県', 'Fukushima', 28],
  [7, '茨城県', 'Ibaraki', 28],
  [8, '栃木県', 'Tochigi', 28],
  [9, '群馬県', 'Gunma', 28],
  [10, '埼玉県', 'Saitama', 28],
  [11, '千葉県', 'Chiba', 28],
  [12, '東京都', 'Tokyo', 28],
  [13, '神奈川県', 'Kanagawa', 28],
  [14, '新潟県', 'Nigata', 28],
  [15, '富山県', 'Toyama', 28],
  [16, '石川県', 'Ishikawa', 28],
  [17, '福井県', 'Fukui', 28],
  [18, '山梨県', 'Yamanashi', 28],
  [19, '長野県', 'Nagano', 28],
  [20, '岐阜県', 'Gihu', 28],
  [21, '静岡県', 'Shizuoka', 28],
  [22, '愛知県', 'Aichi', 28],
  [23, '三重県', 'Mie', 28],
  [24, '滋賀県', 'Shiga', 28],
  [25, '京都府', 'Kyoto', 28],
  [26, '奈良県', 'Nara', 28],
  [27, '和歌山県', 'Wakayama', 28],
  [28, '大阪府', 'Osaka', 28],
  [29, '兵庫県', 'Hyogo', 28],
  [30, '岡山県', 'Okayama', 28],
  [31, '広島県', 'Hiroshima', 28],
  [32, '鳥取県', 'Tottori', 28],
  [33, '島根県', 'Shimane', 28],
  [34, '山口県', 'Yamaguchi', 28],
  [35, '香川県', 'Kagawa', 28],
  [36, '愛媛県', 'Ehime', 28],
  [37, '徳島県', 'Tokushima', 28],
  [38, '高知県', 'Kochi', 28],
  [39, '福岡県', 'Fukuoka', 28],
  [40, '佐賀県', 'Saga', 28],
  [41, '長崎県', 'Nagasaki', 28],
  [42, '大分県', 'Oita', 28],
  [43, '熊本県', 'Kumamoto', 28],
  [44, '宮崎県', 'Miyazaki', 28],
  [45, '鹿児島県', 'Kagoshima', 28],
  [46, '沖縄県', 'Okinawa', 28],
  [47, 'ソウル', 'Seoul', 0],
  [48, '釜山', 'Busan', 0],
  [49, '済州島', 'Jeju-Island', 0],
  [50, '北京', 'Beijing', 1],
  [51, '成都', 'Chengdu', 1],
  [52, '重慶', 'Chongping', 1],
  [53, '大連', 'Dalian', 1],
  [54, '広州', 'Guangzhou', 1],
  [55, '杭州', 'Hangzhou', 1],
  [56, '昆明', 'Kunming', 1],
  [57, '南京', 'Nanjing', 1],
  [58, '青島', 'Qingdao', 1],
  [59, '上海', 'Shanghai', 1],
  [60, '深圳', 'Shenzhen', 1],
  [61, '天津', 'Tianjing', 1],
  [62, '厦门', 'Xiamen', 1],
  [63, '煙台', 'Yantai', 1],
  [64, '武漢', 'Wuhan', 1],
  [65, '香港', 'Hong Kong', 1],
  [66, '澳門', 'Macau', 1],
  [67, 'ハノイ', 'Hanoi', 2],
  [68, 'ホーチミン', 'Ho Chi Minh City', 2],
  [69, 'バンコク', 'Bangkok', 3],
  [70, 'プノンペン', 'Phnom Penh', 4],
  [71, 'シェムリアップ', 'Siem Reap', 4],
  [72, 'ヴィエンチャン', 'Vieng Chat', 5],
  [73, 'クアラルンプール', 'Kuala Lumpur', 6],
  [74, 'シンガポール', 'Singapore', 7],
  [75, 'ジャカルタ', 'Jakarta', 8],
  [76, 'バリ島 デンパサール', 'Bali Denpasar', 8],
  [77, 'ポートモレスビー', 'Port Moresby', 9],
  [78, '南オーストラリア州 シドニー', 'Sydney, New South Wales', 10],
  [79, 'ビクトリア州 メルボルン', 'Melbourne, Victoria', 10],
  [80, 'クイーンズランド州 ブリスベン', 'Brisbane, Queensland', 10],
  [81, 'クイーンズランド州 ケアンズ', 'Cairnes, Queensland', 10],
  [82, 'クイーンズランド州 ゴールドコースト', 'Gold Coast, Queensland', 10],
  [83, '南オーストラリア州 アデレード', 'Adelaide, South Australia', 10],
  [84, '西オーストラリア州 パース', 'Perth, West Australia', 10],
  [85, 'タスマニア州 ホバート', 'Hobart, Tasmania', 10],
  [86, 'オークランド', 'Auckland', 11],
  [87, 'クライストチャーチ', 'Christchurch', 11],
  [88, 'ダニーデン', 'Dunedin', 11],
  [89, 'ウェリントン', 'Wellingoton', 11],
  [90, 'カトマンズ', 'Kathmandu', 12],
  [91, 'デリー', 'Delhi', 13],
  [92, 'カルナータカ州 デーヴァナハッリ/バロンガール', 'Bangalore/Devanahalli, Karnataka',13],
  [93, 'マハーラーシュトラ州 ムンバイ', 'Mumbai, Maharashtra', 13],
  [94, 'タミル・ナードゥ州 チェンナイ', 'Chennai, Tamil Nadu', 13],
  [95, 'テランガーナ州 ハイデラバード', 'Hyderabad, Telangana', 13],
  [96, 'ウランバートル', 'Ulaanbaatar', 14],
  [97, 'イスラマバード', 'Islamabad', 15],
  [98, 'アルマトイ', 'Almaty', 16],
  [99, 'ヌルスルタン', 'Nur-Sultan', 16],
  [100, 'テヘラン', 'Tehran', 17],
  [101, 'バグダード', 'Baghdad', 18],
  [102, 'リヤド', 'Riyadh', 19],
  [103, 'ドバイ', 'Dubai', 20],
  [104, 'アブダビ', 'Abu Dhabi', 20],
  [105, 'クウェート', 'Kuwait', 21],
  [106, 'ダマスカス', 'Damascus', 21],
  [107, 'アンマン', 'Amman', 22],
  [108, 'ロッド','Al-Ludd', 23],
  [109, 'カイロ', 'Cairo', 24],
  [110, 'イスタンブール', 'Istanbul', 25],
  [111, 'アンタルヤ', 'Antalya', 25],
  [112, '西ベンガル州 コルカタ', 'Kolkata, West Bengal', 13],
  [113, 'サンクトペテルブルグ', 'St. Petersburg', 26],
  [114, 'ヤクーツク', 'Yakutsk', 26],
  [115, 'モスクワ', 'Moscow', 26],
  [116, 'キエフ', 'Kiev', 27],
  [117, 'ミンスク', 'Minsk', 29],
  [118, 'ヴィリニュス', 'Vilinius', 30],
  [119, 'リガ', 'Riga', 31],
  [120, 'タリン', 'Tallinn', 32],
  [121, 'ワルシャワ', 'Warsaw', 33],
  [122, 'ブラチスラヴァ', 'Bratislava', 34],
  [123, 'ブタペスト', 'Btapest', 35],
  [124, 'ブカレスト', 'Bucharest', 36],
  [125, 'マレ フルレ島', 'Hulhule island, Male', 37],
  [126, 'キシナウ', 'Chisinau', 38],
  [127, 'ソフィア', 'Sofia', 39],
  [128, 'アテネ', 'Athens', 40],
  [129, 'ティラナ', 'Tirana', 41],
  [130, 'スコピエ', 'Skopje', 42],
  [131, 'プリシュティナ', 'Prishtina', 43],
  [132, 'ポドゴリツァ', 'Podgorica', 44],
  [133, 'ティヴァト', 'Tivat Airport', 44],
  [134, 'ベオグラード', 'Belgrade', 45],
  [135, 'サラエヴォ', 'Sarajevo', 46],
  [136, 'ザグレブ', 'Zagreb', 47],
  [137, 'ドブロブニク', 'Dubrovnik', 47],
  [138, 'リュブリャナ', 'Ljubljana', 48],
  [139, 'ウィーン', 'Vienna', 49],
  [140, 'プラハ', 'Prague', 50],
  [141, 'フランクフルト', 'Frankfurt', 51],
  [142, 'ミュンヘン', 'Munich', 51],
  [143, 'デュッセルドルフ', 'Dusseldorf', 51],
  [144, 'ベルリン', 'Berlin', 51],
  [145, 'コペンハーゲン', 'Copenhagen', 52],
  [146, 'ストックホルム', 'Stockholm', 53],
  [147, 'オスロ', 'Oslo', 54],
  [148, 'ベルゲン', 'Bergen', 54],
  [149, 'ヘルシンキ', 'Helsinki', 55],
  [150, 'イヴァロ', 'Ivalo', 55],
  [151, 'アムステルダム', 'Amsterdam', 56],
  [152, 'ブリュッセル', 'Brussels', 57],
  [153, 'パリ', 'Paris', 58],
  [154, 'マルセイユ', 'Marseille', 58],
  [155, 'モンペリエ', 'Montpellier', 58],
  [156, 'ボルドー', 'Bordeaux', 58],
  [157, 'ブレスト', 'Brest', 58],
  [158, 'リヨン', 'Lyon', 58],
  [159, 'チューリッヒ' ,'Zurich', 59],
  [160, 'ジュネーヴ', 'Geneve', 59],
  [161, 'ルクセンブルク', 'Luxembourg', 60],
  [162, 'ヴェネツィア', 'Venezia (Venice)', 61],
  [163, 'ミラノ', 'Milan', 61],
  [164, 'ローマ', 'Rome', 61],
  [165, 'ナポリ', 'Naples', 61],
  [166, 'ピサ', 'Pisa', 61],
  [167, 'マドリード', 'Madrid', 62],
  [168, 'バルセロナ', 'Barcelona', 62],
  [169, 'マラガ', 'Malaga', 62],
  [170, 'セビリア', 'Sevilla', 62],
  [171, 'サンディアゴ・デ・コンポステーラ', 'Santiago de Compostela', 62],
  [172, 'リスボン', 'Lisbon', 63],
  [173, 'ファオ', 'Faro', 63],
  [174, 'ロンドン', 'London', 64],
  [175, 'バーミンガム', 'Birmingham', 64],
  [176, 'マンチェスター', 'Manchester', 64],
  [177, 'ベルファスト (北アイルランド)', 'Belfast (Northern Ireland)', 64],
  [178, 'エディンバラ (スコットランド)', 'Edinburgh (Scotland)', 64],
  [179, 'グラスゴー (スコットランド)', 'Glasgow (Scotland)', 64],
  [180, 'カーディフ (ウェールズ)', 'Cardiff (Wales)', 64],
  [181, 'マン島', 'Ronaldsway', 64],
  [182, 'ダブリン', 'Dublin', 65],
  [183, 'リムリック', 'Limerick', 65],
  [184, 'ケプラヴィーク', 'Kefravik', 66],
  [185, 'カンゲルルスクアーク', 'Kangerlussuaq', 67],
  [186, 'ブリティッシュコロンビア州 バンクーバー', 'Vancouver, British Columbia', 68],
  [187, 'オンタリオ州 トロント', 'Tronto, Ontario', 68],
  [188, 'ブリティッシュコロンビア州 ヴィクトリア', 'Victoria, British Columbia', 68],
  [189, 'ケベック州 モントリオール', 'Motreal, Quebec', 68],
  [190, 'カルガリー アルバータ', 'Calgary, Alberta', 68],
  [191, 'オンタリオ州 オタワ', 'Ottawa, Ontario', 68],
  [192, 'ブリティッシュコロンビア州 ケロウナ', 'Kelowna, British Columbia', 68],
  [193, 'ノバスコシア州 ハリファックス', 'Halifax, Nova Scotia', 68],
  [194, 'ノースウェスト準州 イエローナイフ', 'Yellowknife, North West', 68],
  [195, 'ニューヨーク', 'New York', 69],
  [196, 'ボストン', 'Boston', 70],
  [197, 'フィラデルフィア', 'Phiradelphia', 71],
  [198, 'ワシントンD.C.', 'Washington D.C.', 78],
  [199, 'リッチモンド', 'Richmond', 72],
  [200, 'ノーフォーク', 'Norfolk', 72],
  [201, 'リサーチトライアングル地域', 'Researvh Triangle', 73],
  [202, 'シャーロット', 'Charlotte', 73],
  [203, 'グリア', 'Greer', 74],
  [204, 'アトランタ', 'Atlanta', 75],
  [205, 'オーランド', 'Orland', 76],
  [206, 'マイアミ', 'Miami', 76],
  [207, 'バーミンガム', 'Birmingham', 77],
  [208, 'ハンツビル', 'Huntsville', 77],
  [209, 'ナッシュビル', 'Nashville', 79],
  [210, 'シンシナティ', 'Cincinnati', 80],
  [211, 'インディアナポリス', 'Indianapolis', 81],
  [212, 'デイトン', 'Dayton', 80],
  [213, 'コロンバス', 'Columbus', 80],
  [214, 'ピッツバーグ', 'Pittburgh', 71],
  [215, 'クリーブランド', 'Cleveland', 80],
  [216, 'バッファロー', 'BUffalo', 69],
  [217, 'デトロイト', 'Detroit', 82],
  [218, 'シカゴ', 'Chicago', 83],
  [219, 'ミネアポリス', 'Minneapolis', 84],
  [220, 'セントルイス', 'St. Louis', 85],
  [221, 'メンフィス', 'Menphis', 79],
  [222, 'ニューオーリンズ', 'New Orleans', 86],
  [223, 'ヒューストン', 'Houston', 87],
  [224, 'オースティン', 'Autin', 87],
  [225, 'サンアントニオ', 'San Antonio', 87],
  [226, 'ダラス', 'Dullas', 87],
  [227, 'カンザスシティ', 'Kansas City', 85],
  [228, 'デンバー', 'Denver', 88],
  [229, 'フェニックス', 'Phoenix', 89],
  [230, 'ラスベガス', 'Las Vegas', 90],
  [231, 'ソルトレイクシティ', 'Salt Lake City', 91],
  [232, 'シアトル', 'Seattle', 92],
  [233, 'ポートランド', 'Portland', 93],
  [234, 'サクラメント', 'Sacramento', 94],
  [235, 'サンフランシスコ', 'San Francisco', 94],
  [236, 'サンノゼ', 'San Jose', 94],
  [237, 'ロサンゼルス', 'Los Angeles', 94],
  [238, 'サンディエゴ', 'San Diego', 94],
  [239, 'ホノルル', 'Honolulu', 95],
  [240, 'グアム', 'Guam', 96],
  [241, 'アンカレッジ', 'Anchorage', 97],
  [242, 'モンテレイ', 'Monterrei', 98],
  [243, 'メキシコシティ', 'Mexico City', 98],
  [244, 'マニラ', 'Manila', 99],
  [245, '台北', 'Taipei', 100],
  [246, 'ヤンゴン', 'Yangon', 101],
  [247, 'ダナン', 'Da Nang', 2],
  [248, 'ウラジオストック', 'Vladivostok', 26],
  [249, 'アディスアベバ', 'Addis Ababa', 102],
  [250, '高雄', 'Kaohsiung', 100],
  [251, '済南', 'Jinnan', 1],
  [252, '無錫', 'Wuxt', 1],
  [253, 'コロンボ', 'Colombo', 103],
  [254, 'キガリ', 'Kigali', 104],
  [255, 'ヨハネスブルグ', 'Johannesburg', 105],
  [256, 'リーブルヴィル', 'Libreville', 106],
  [257, 'ナイロビ', 'Nairobi', 107],
  [258, 'ラゴス', 'Lagos', 108],
  [259, 'ダルエスサラーム', 'Dar es Salaam', 109],
  [260, 'ブエノスアイレス', 'Buenos Aires', 110],
  [261, 'リオデジャネイロ', 'Rio de Janeiro', 111],
  [262, 'サンパウロ', 'Sao Paulo', 111],
  [263, 'サンティアゴ', 'Santiago', 112],
  [264, 'イースター島', 'Rapa Nui (Pascua)', 112],
  [265, 'ボゴダ', 'Bogota', 113],
  [266, 'キト', 'Quito', 114],
  [267, 'リマ', 'Lima', 115],
  [268, 'クスコ', 'Cusco', 115],
  [269, 'モンテビデオ', 'Montevideo', 116],
  [270, 'カラカス', 'Caracas', 117],
  [271, '瀋陽', 'Shenyang', 1]
];

const maxjapan = 46;
const maxlocation = 271;

var nation = [
  [0, '韓国', 'Korea'],
  [1, '中国', 'China'],
  [2, 'ベトナム', 'Vietnam'],
  [3, 'タイ', 'Thailand'],
  [4, 'カンボジア', 'Cambodia'],
  [5, 'ラオス', 'Laos'],
  [6, 'マレーシア', 'Malaysia'],
  [7, 'シンガポール', 'Singapire'],
  [8, 'インドネシア', 'Indonesia'],
  [9, 'パプアニューギニア', 'Papua New Guinea'],
  [10, 'オーストラリア', 'Australia'],
  [11, 'ニュージーランド', 'New Zealand'],
  [12, 'ネパール', 'Nepal'],
  [13, 'インド', 'India'],
  [14, 'モンゴル', 'Mongolia'],
  [15, 'パキスタン', 'Pakistan'],
  [16, 'カザフスタン', 'Kazakhstan'],
  [17, 'イラン', 'Iran'],
  [18, 'イラク', 'Iraq'],
  [19, 'サウジアラビア', 'Saudi Arabia'],
  [20, 'アラブ首長国連邦', 'UAE'],
  [21, 'クウェート', 'Kuwait'],
  [22, 'ヨルダン', 'Jurdan'],
  [23, 'イスラエル', 'Israel'],
  [24, 'エジプト', 'Egypt'],
  [25, 'トルコ', 'Turkey'],
  [26, 'ロシア', 'Russia'],
  [27, 'ウクライナ', 'Ukraine'],
  [28, '日本', 'Japan'],
  [29, 'ベラルーシ', 'Belarus'],
  [30, 'リトアニア', 'Lithuania'],
  [31, 'ラトビア', 'Latvia'],
  [32, 'エストニア', 'Estonia'],
  [33, 'ポーランド', 'Poland'],
  [34, 'スロバキア', 'Slovakia'],
  [35, 'ハンガリー', 'Hungary'],
  [36, 'ルーマニア', 'Romania'],
  [37, 'モルディブ', 'Maldives'],
  [38, 'モルドバ', 'Moldova'],
  [39, 'ブルガリア', 'Bulgaria'],
  [40, 'ギリシア', 'Greece'],
  [41, 'アルバニア', 'Albania'],
  [42, '北マケドニア', 'Northern Macedonia'],
  [43, 'コソボ', 'Kosovo'],
  [44, 'モンテネグロ', 'Montenegro'],
  [45, 'セルビア', 'Serbia'],
  [46, 'ボスニア・ヘルツェゴビナ', 'Bosnia-Herzegovina'],
  [47, 'クロアチア', 'Croatia'],
  [48, 'スロベニア', 'Slovenia'],
  [49, 'オーストリア', 'Austria'],
  [50, 'チェコ', 'Czech'],
  [51, 'ドイツ', 'Germany'],
  [52, 'デンマーク', 'Denmark'],
  [53, 'スウェーデン', 'Sweden'],
  [54, 'ノルウェー', 'Norway'],
  [55, 'フィンランド', 'Finland'],
  [56, 'オランダ', 'Netherlands'],
  [57, 'ベルギー', 'Belgium'],
  [58, 'フランス', 'France'],
  [59, 'スイス', 'Switzerland'],
  [60, 'ルクセンブルク', 'Luxembourg'],
  [61, 'イタリア', 'Italy'],
  [62, 'スペイン', 'Spain'],
  [63, 'ポルトガル', 'Portugal'],
  [64, 'イギリス', 'Britain'],
  [65, 'アイルランド', 'Ireland'],
  [66, 'アイスランド', 'Iceland'],
  [67, 'グリーンランド自治区', 'Greenland'],
  [68, 'カナダ', 'Canada'],
  [69, 'アメリカ ニューヨーク州', 'New York, US'],
  [70, 'アメリカ マサチューセッツ州', 'Massachusetts, US'],
  [71, 'アメリカ ペンシルバニア州', 'Pennsylvania, US'],
  [72, 'アメリカ バージニア州', 'Virginia, US'],
  [73, 'アメリカ ノースカロライナ州', 'North Carolina, US'],
  [74, 'アメリカ サウスカロライナ州', 'South Carolina, US'],
  [75, 'アメリカ ジョージア州', 'Georgia, US'],
  [76, 'アメリカ フロリダ州', 'Florida, US'],
  [77, 'アメリカ アラバマ州', 'Alabama, US'],
  [78, 'アメリカ', 'US'],
  [79, 'アメリカ テネシー州', 'Tennessee, US'],
  [80, 'アメリカ オハイオ州', 'Ohio, US'],
  [81, 'アメリカ インディアナ州', 'Indiana, US'],
  [82, 'アメリカ ミシガン州', 'Michigan, US'],
  [83, 'アメリカ イリノイ州', 'llinois, US'],
  [84, 'アメリカ ミネソタ州', 'Minnesota, US'],
  [85, 'アメリカ ミズーリ州', 'Missouri, US'],
  [86, 'アメリカ ルイジアナ州', 'Louisiana, US'],
  [87, 'アメリカ テキサス州', 'Texas, US'],
  [88, 'アメリカ コロラド州', 'Colorado, US'],
  [89, 'アメリカ アリゾナ州', 'Arizona, US'],
  [90, 'アメリカ ネバダ州', 'Nevada, US'],
  [91, 'アメリカ ユタ州', 'Utah, US'],
  [92, 'アメリカ ワシントン州', 'Washington, US'],
  [93, 'アメリカ オレゴン州', 'Oregon, US'],
  [94, 'アメリカ カリフォルニア州', 'California, US'],
  [95, 'アメリカ ハワイ州', 'Hawaii, US'],
  [96, 'アメリカ', 'US'],
  [97, 'アメリカ アラスカ州', 'Alaska, US'],
  [98, 'メキシコ', 'Mexico'],
  [99, 'フィリピン', 'Phillipine'],
  [100, '台湾', 'Taiwan'],
  [101, 'ミャンマー', 'Myanmar'],
  [102, 'エチオピア', 'Ethiopia'],
  [103, 'スリランカ', 'Sri Lanka'],
  [104, 'ルワンダ共和国', 'Republic of Rwanda'],
  [105, '南アフリカ共和国', 'Republic of South Africa'],
  [106, 'ガボン共和国', 'Republic of Gabon'],
  [107, 'ケニヤ共和国', 'Republic of Kenya'],
  [108, 'ナイジェリア連邦共和国', 'Federal Republic of Nigeria'],
  [109, 'タンザニア連合共和国', 'United Republic of Tanzania'],
  [110, 'アルゼンチン','Republic of Argentina'],
  [111, 'ブラジル', 'Brasil'],
  [112, 'チリ', 'Chile'],
  [113, 'コロンビア', 'Colombia'],
  [114, 'エクアドル', 'Ecuador'],
  [115, 'ペルー', 'Peru'],
  [116, 'ウルグアイ', 'Uruguay'],
  [117, 'ベネズエラ・ボリバル共和国 (ベネズエラ)', 'Republic of Bolivariana de Venezuela']
];


var n;
var n1 = 0;
var option = new Array(3);
var ans;

// All Data Quiz

function gen() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('CodeAns');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = ""
  p = document.getElementById("YourName");
  p.innerHTML = "　　　";
  p = document.getElementById("YourCode");
  p.innerHTML = "";
  p = document.getElementById("YourLoc");
  p.innerHTML = "";
  p = document.getElementById("YourMap");
  p.src = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  var question = document.getElementById('QuestionType1');
  question.innerHTML = data[n][1]+'<br>'+data[n][2];
  scrollTo(0, 0);
}


function gen2() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
    p = document.getElementById("AnsMap");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
            check = check + 1;
          }
        }
        if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan) {
          check = check + 1;
        }
      }while (check > 0);
    }
    let i=0, j=0;
    do {
      if (i == ans) {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
      } else {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = nation[place[data[option[j]][4]][3]][1]+'<br>'+ nation[place[data[option[j]][4]][3]][2];
        j = j+1;
      }
      i = i+1;
    }while(i < 4);
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
      } while (check > 0);
    }
    let i=0, j=0;
    do {
      if (i == ans) {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
      } else {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = place[data[option[j]][4]][1]+'<br>'+ place[data[option[j]][4]][2];
        j = j+1;
      }
      i = i+1;
    }while(i < 4);
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][1]+'<br>'+data[n][2];
  scrollTo(0, 0);
}

function gen3() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }

  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (option[step] == n) {
          check = check + 1;
        }
        if (data[option[step]][4] < 47) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (option[step] == n) {
          check = check + 1;
        }
        if (data[option[step]][4] > 46) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][1]+'<br>'+data[n][2];
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen4() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);

  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata + 1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (option[i] == option[step]) {
          check = check + 1;
        }
      }
      if (option[step] == n) {
        check = check + 1;
      }
    } while (check > 0);
  }

  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][3];
  let i=0, j=0;
  do {
    if (i == ans) {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[n][1]+'<br>'+data[n][2];
    } else {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[option[j]][1]+'<br>'+data[option[j]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen5() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);

  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata + 1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (data[option[i]][4] == data[option[step]][4]) {
          check = check + 1;
        }
      }
      if (data[option[step]][4] == data[n][4]) {
        check = check + 1;
      }
    } while (check > 0);
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][3];
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen6() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }

  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  ans = Math.floor(Math.random()*4);
  for (let j=0; j<3; j++) {
    option[j] = -1;
  }
  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata + 1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (data[option[i]][4] == data[option[step]][4]) {
          check = check + 1;
        }
      }
      if (data[option[step]][4] == data[n][4]) {
        check = check + 1;
      }
    } while (check > 0);
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][3];
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen7() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);

  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (option[i] == option[step]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan+1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (option[i] == option[step]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }

  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[n][1]+'<br>'+data[n][2];
    } else {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[option[j]][1]+'<br>'+data[option[j]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen8() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('CodeAns');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = ""
  p = document.getElementById("YourName");
  p.innerHTML = "　　　";
  p = document.getElementById("YourCode");
  p.innerHTML = "";
  p = document.getElementById("YourLoc");
  p.innerHTML = "";
  p = document.getElementById("YourMap");
  p.src = "";
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  scrollTo(0, 0);
}

function gen9() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (option[i] == option[step]) {
            check = check + 1;
          }
        }
        if (option[step] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan + 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxjapan + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen10() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(place[data[n][4]][3] == place[data[n1][4]][3]);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = 0;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
    }while (check > 0);
  }
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+ place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
  scrollTo(0, 0);
}

function gen11() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || n < 85);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
    }while (check > 0);
  }


  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
  scrollTo(0, 0);
}

function gen12() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || n < 85);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
    }while (check > 0);
  }
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[option[j]][4]][3]][1]+'<br>'+ nation[place[data[option[j]][4]][3]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
  scrollTo(0, 0);
}


function gen13() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan + 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
  scrollTo(0, 0);
}

function gen14() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || n<85);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
    }while (check > 0);
  }
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[option[j]][4]][3]][1]+'<br>'+ nation[place[data[option[j]][4]][3]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function gen15() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan + 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxjapan + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}



// ANA Only Quiz

function agen() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('CodeAns');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = ""
  p = document.getElementById("YourName");
  p.innerHTML = "　　　";
  p = document.getElementById("YourCode");
  p.innerHTML = "";
  p = document.getElementById("YourLoc");
  p.innerHTML = "";
  p = document.getElementById("YourMap");
  p.src = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  var question = document.getElementById('QuestionType1');
  question.innerHTML = data[n][1]+'<br>'+data[n][2];
  scrollTo(0, 0);
}


function agen2() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
    p = document.getElementById("AnsMap");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
            check = check + 1;
          }
        }
        if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
    let i=0, j=0;
    do {
      if (i == ans) {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
      } else {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = nation[place[data[option[j]][4]][3]][1]+'<br>'+ nation[place[data[option[j]][4]][3]][2];
        j = j+1;
      }
      i = i+1;
    }while(i < 4);
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      } while (check > 0);
    }
    let i=0, j=0;
    do {
      if (i == ans) {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
      } else {
        var p = document.getElementById('Option'+String(i+1));
        p.innerHTML = place[data[option[j]][4]][1]+'<br>'+ place[data[option[j]][4]][2];
        j = j+1;
      }
      i = i+1;
    }while(i < 4);
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][1]+'<br>'+data[n][2];
  scrollTo(0, 0);
}

function agen3() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }

  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (option[step] == n) {
          check = check + 1;
        }
        if (data[option[step]][4] < 47) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (option[step] == n) {
          check = check + 1;
        }
        if (data[option[step]][4] > 46) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][1]+'<br>'+data[n][2];
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen4() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);

  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata + 1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (option[i] == option[step]) {
          check = check + 1;
        }
      }
      if (option[step] == n) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    } while (check > 0);
  }

  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][3];
  let i=0, j=0;
  do {
    if (i == ans) {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[n][1]+'<br>'+data[n][2];
    } else {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[option[j]][1]+'<br>'+data[option[j]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen5() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);

  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata + 1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (data[option[i]][4] == data[option[step]][4]) {
          check = check + 1;
        }
      }
      if (data[option[step]][4] == data[n][4]) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    } while (check > 0);
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][3];
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen6() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }

  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata + 1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (data[option[i]][4] == data[option[step]][4]) {
          check = check + 1;
        }
      }
      if (data[option[step]][4] == data[n][4]) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    } while (check > 0);
  }
  var question = document.getElementById('QuestionType2');
  question.innerHTML = data[n][3];
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = "../Map/pict"+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen7() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);

  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (option[i] == option[step]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan+1) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (option[i] == option[step]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }

  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[n][1]+'<br>'+data[n][2];
    } else {
      var q = document.getElementById('Option'+String(i+1));
      q.innerHTML = data[option[j]][1]+'<br>'+data[option[j]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen8() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('CodeAns');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = ""
  p = document.getElementById("YourName");
  p.innerHTML = "　　　";
  p = document.getElementById("YourCode");
  p.innerHTML = "";
  p = document.getElementById("YourLoc");
  p.innerHTML = "";
  p = document.getElementById("YourMap");
  p.src = "";
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  scrollTo(0, 0);
}

function agen9() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (option[i] == option[step]) {
            check = check + 1;
          }
        }
        if (option[step] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan + 1) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxjapan + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen10() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(place[data[n][4]][3] == place[data[n1][4]][3] || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = 0;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    }while (check > 0);
  }
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+ place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
  scrollTo(0, 0);
}

function agen11() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    }while (check > 0);
  }


  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
  scrollTo(0, 0);
}

function agen12() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    }while (check > 0);
  }
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[option[j]][4]][3]][1]+'<br>'+ nation[place[data[option[j]][4]][3]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
  scrollTo(0, 0);
}


function agen13() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }

  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan + 1) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata+1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] > maxjapan) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(n)+'.png';
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.src = '../Map/pict'+String(option[j])+'.png';
      j = j+1;
    }
    i = i+1;
  }while(i < 4);

  var question = document.getElementById('QuestionType2');
  question.innerHTML = place[data[n][4]][1]+'<br>'+ place[data[n][4]][2];
  scrollTo(0, 0);
}

function agen14() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  for (let step = 0; step < 3; step++) {
    do {
      option[step] = Math.floor(Math.random()*(maxdata+1));
      var check = 0;
      for (let i = 0; i < step; i++) {
        if (place[data[option[i]][4]][3] == place[data[option[step]][4]][3]) {
          check = check + 1;
        }
      }
      if (place[data[option[step]][4]][3] == place[data[n][4]][3]) {
        check = check + 1;
      }
      if (data[option[step]][5] != 1) {
        check = check + 1;
      }
    }while (check > 0);
  }
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[n][4]][3]][1]+'<br>'+ nation[place[data[n][4]][3]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = nation[place[data[option[j]][4]][3]][1]+'<br>'+ nation[place[data[option[j]][4]][3]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}

function agen15() {
  var p = document.getElementById("AnsName");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsCode");
  p.innerHTML = "　　　";
  p = document.getElementById("AnsLoc");
  p.innerHTML = "　　　";
  p = document.getElementById("Result");
  p.src = "";
  p = document.getElementById('Ans');
  p.value = "";
  p = document.getElementById("Bottom");
  p.innerHTML = "";
  p = document.getElementById("AnsMap");
  p.src = "";
  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = "　　　";
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = "";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "";
  }
  do {
    n = Math.floor(Math.random()*(maxdata+1));
  }while(n == n1 || data[n][5] != 1);
  ans = Math.floor(Math.random()*4);
  for (let j = 0; j<3; j++) {
    option[j] = -1;
  }
  if (data[n][4] > 46) {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxdata + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][4] < maxjapan + 1) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      }while (check > 0);
    }
  } else {
    for (let step = 0; step < 3; step++) {
      do {
        option[step] = Math.floor(Math.random()*(maxjapan + 1));
        var check = 0;
        for (let i = 0; i < step; i++) {
          if (data[option[i]][4] == data[option[step]][4]) {
            check = check + 1;
          }
        }
        if (data[option[step]][4] == data[n][4]) {
          check = check + 1;
        }
        if (data[option[step]][5] != 1) {
          check = check + 1;
        }
      } while (check > 0);
    }
  }
  var question = document.getElementById('Question');
  question.src = "../Map/pict"+String(n)+".png";
  let i=0, j=0;
  do {
    if (i == ans) {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[n][4]][1]+'<br>'+place[data[n][4]][2];
    } else {
      var p = document.getElementById('Option'+String(i+1));
      p.innerHTML = place[data[option[j]][4]][1]+'<br>'+place[data[option[j]][4]][2];
      j = j+1;
    }
    i = i+1;
  }while(i < 4);
  scrollTo(0, 0);
}







// Answer System

function opt1() {
  var p = document.getElementById('Ans');
  p.value = 1;
}

function opt2() {
  var p = document.getElementById('Ans');
  p.value = 2;
}

function opt3() {
  var p = document.getElementById('Ans');
  p.value = 3;
}

function opt4() {
  var p = document.getElementById('Ans');
  p.value = 4;
}

function codeans() {
  var sol = document.getElementById('CodeAns').value;
  var v = document.getElementById("Result");
  scrollBy(0,200);
  var p = document.getElementById("YourName");
  p.innerHTML = "　　　";
  p = document.getElementById("YourCode");
  p.innerHTML = "";
  p = document.getElementById("YourLoc");
  p.innerHTML = "";
  p = document.getElementById("YourMap");
  p.src = "";
  p = document.getElementById("AnsName");
  p.innerHTML = data[n][1] + "<br>" + data[n][2];
  p = document.getElementById("AnsCode");
  p.innerHTML = data[n][3];
  p = document.getElementById("AnsLoc");
  p.innerHTML = place[data[n][4]][1] + " (" + nation[place[data[n][4]][3]][1] + ")" + "<br>" + place[data[n][4]][2] + " (" +  nation[place[data[n][4]][3]][2] + ")";
  p = document.getElementById("AnsMap");
  p.src = "../Map/pict"+String(n)+".png";
  n1 = n;
  if (data[n][3] == sol) {
    v.src = "../Result/ok.mp4";
  } else {
    v.src = "../Result/failed.mp4";
    let i=0;
    let check = 0;
    while(check == 0 && i < maxdata) {
      if (sol == data[i][3]) {
        check = 1;
        var p = document.getElementById("YourName");
        p.innerHTML = data[i][1] + "<br>" + data[i][2];
        p = document.getElementById("YourCode");
        p.innerHTML = data[i][3];
        p = document.getElementById("YourLoc");
        p.innerHTML = place[data[i][4]][1] + " (" + nation[place[data[i][4]][3]][1] + ")" + "<br>" + place[data[i][4]][2] + " (" +  nation[place[data[i][4]][3]][2] + ")";
        p = document.getElementById("YourMap");
        p.src = "../Map/pict"+String(i)+".png";
      } else {
        var p = document.getElementById("YourName");
        p.innerHTML = sol + "というコードの空港は見つかりません<br>No airport with the code " + sol + " is found.";
      }
      i = i+1;
    }
  }
}

function answer() {
  var sol = document.getElementById('Ans').value;
  var v = document.getElementById("Result");
  scrollBy(0,200);
  if (ans ==  Number(sol)-1) {
    v.src = "../Result/ok.mp4";
  } else {
    v.src = "../Result/failed.mp4";
  }
  var p = document.getElementById("AnsName");
  p.innerHTML = data[n][1] + "<br>" + data[n][2];
  p = document.getElementById("AnsCode");
  p.innerHTML = data[n][3];
  p = document.getElementById("AnsLoc");
  p.innerHTML = place[data[n][4]][1] + " (" + nation[place[data[n][4]][3]][1] + ")" + "<br>" + place[data[n][4]][2] + " (" +  nation[place[data[n][4]][3]][2] + ")";
  p = document.getElementById("AnsMap");
  p.src = "../Map/pict"+String(n)+".png";
  p = document.getElementById("Bottom");
  p.innerHTML = "下にスクロール　Go Down"
  n1 = n;

  for (let i=0; i<3; i++) {
    var p = document.getElementById("Option"+String(i+1)+"Name");
    p.innerHTML = data[option[i]][1] + "<br>" + data[option[i]][2];
    p = document.getElementById("Option"+String(i+1)+"Code");
    p.innerHTML = data[option[i]][3];
    p = document.getElementById("Option"+String(i+1)+"Loc");
    p.innerHTML = place[data[option[i]][4]][1] + " (" + nation[place[data[option[i]][4]][3]][1] + ")" + "<br>" + place[data[option[i]][4]][2] + " (" +  nation[place[data[option[i]][4]][3]][2] + ")";
    p = document.getElementById("Option"+String(i+1)+"Map");
    p.src = "../Map/pict"+String(option[i])+".png";
    p = document.getElementById("Bottom");
  }
}
