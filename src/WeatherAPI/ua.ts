const cities = [
  {
      "name": "Abazivka",
      "lon": "34.3499",
      "lat": "49.6053"
  },
  {
      "name": "Abrykosivka",
      "lon": "35.0986",
      "lat": "45.1097"
  },
  {
      "name": "Adamivka",
      "lon": "34.2162",
      "lat": "48.3235"
  },
  {
      "name": "Aeroflotskyi",
      "lon": "34.0000",
      "lat": "45.0194"
  },
  {
      "name": "Ahrarne",
      "lon": "34.0544",
      "lat": "45.0186"
  },
  {
      "name": "Alchevsk",
      "lon": "38.7983",
      "lat": "48.4672"
  },
  {
      "name": "Almazna",
      "lon": "38.5833",
      "lat": "48.5167"
  },
  {
      "name": "Alushta",
      "lon": "34.3978",
      "lat": "44.6672"
  },
  {
      "name": "Amvrosiivka",
      "lon": "38.4801",
      "lat": "47.7958"
  },
  {
      "name": "Ananiv",
      "lon": "29.9600",
      "lat": "47.7225"
  },
  {
      "name": "Andriievo-Ivanivka",
      "lon": "30.4633",
      "lat": "47.5008"
  },
  {
      "name": "Andriivka",
      "lon": "36.5871",
      "lat": "47.1026"
  },
  {
      "name": "Andriivka",
      "lon": "33.5635",
      "lat": "44.8161"
  },
  {
      "name": "Andriivka",
      "lon": "30.0825",
      "lat": "46.2200"
  },
  {
      "name": "Andrushivka",
      "lon": "29.0167",
      "lat": "50.0167"
  },
  {
      "name": "Andrushivka",
      "lon": "29.2025",
      "lat": "49.3600"
  },
  {
      "name": "Andrushky",
      "lon": "29.3433",
      "lat": "49.8731"
  },
  {
      "name": "Antonivka",
      "lon": "28.4314",
      "lat": "48.5286"
  },
  {
      "name": "Antratsyt",
      "lon": "39.0833",
      "lat": "48.1167"
  },
  {
      "name": "Anysiv",
      "lon": "31.3611",
      "lat": "51.4356"
  },
  {
      "name": "Apostolove",
      "lon": "33.7170",
      "lat": "47.6595"
  },
  {
      "name": "Arbuzynka",
      "lon": "31.3131",
      "lat": "47.9067"
  },
  {
      "name": "Arkhanhelska Sloboda",
      "lon": "33.7047",
      "lat": "46.6350"
  },
  {
      "name": "Artemivsk",
      "lon": "38.7422",
      "lat": "48.4403"
  },
  {
      "name": "Artsyz",
      "lon": "29.4167",
      "lat": "45.9833"
  },
  {
      "name": "Askaniia-Nova",
      "lon": "33.8683",
      "lat": "46.4511"
  },
  {
      "name": "Auly",
      "lon": "34.4628",
      "lat": "48.5575"
  },
  {
      "name": "Avdiivka",
      "lon": "37.7500",
      "lat": "48.1333"
  },
  {
      "name": "Aviatorske",
      "lon": "35.0830",
      "lat": "48.3664"
  },
  {
      "name": "Babche",
      "lon": "24.4417",
      "lat": "48.6667"
  },
  {
      "name": "Babyn",
      "lon": "26.8553",
      "lat": "48.5242"
  },
  {
      "name": "Babyn",
      "lon": "29.3228",
      "lat": "49.1314"
  },
  {
      "name": "Babyntsi",
      "lon": "30.0269",
      "lat": "50.6411"
  },
  {
      "name": "Baibuzy",
      "lon": "31.6728",
      "lat": "49.4772"
  },
  {
      "name": "Bairachky",
      "lon": "38.5992",
      "lat": "48.3883"
  },
  {
      "name": "Bakhchysarai",
      "lon": "33.8608",
      "lat": "44.7528"
  },
  {
      "name": "Bakhmut",
      "lon": "38.0067",
      "lat": "48.6044"
  },
  {
      "name": "Balabyne",
      "lon": "35.2142",
      "lat": "47.7350"
  },
  {
      "name": "Balakliia",
      "lon": "36.8389",
      "lat": "49.4564"
  },
  {
      "name": "Balta",
      "lon": "29.6225",
      "lat": "47.9361"
  },
  {
      "name": "Bandurove",
      "lon": "29.8606",
      "lat": "48.2275"
  },
  {
      "name": "Bar",
      "lon": "27.6831",
      "lat": "49.0781"
  },
  {
      "name": "Baranivka",
      "lon": "27.6667",
      "lat": "50.3000"
  },
  {
      "name": "Baranykivka",
      "lon": "39.8453",
      "lat": "49.1586"
  },
  {
      "name": "Barashi",
      "lon": "28.0308",
      "lat": "50.7156"
  },
  {
      "name": "Barashivka",
      "lon": "28.5489",
      "lat": "50.2714"
  },
  {
      "name": "Barturyn",
      "lon": "32.8833",
      "lat": "51.3333"
  },
  {
      "name": "Barvynkove",
      "lon": "37.0131",
      "lat": "48.9067"
  },
  {
      "name": "Baryshivka",
      "lon": "31.3286",
      "lat": "50.3703"
  },
  {
      "name": "Bashmachka",
      "lon": "35.0109",
      "lat": "48.1560"
  },
  {
      "name": "Bashtanka",
      "lon": "32.4500",
      "lat": "47.4000"
  },
  {
      "name": "Basyuvka",
      "lon": "23.9092",
      "lat": "49.7811"
  },
  {
      "name": "Batovo",
      "lon": "22.3833",
      "lat": "48.3667"
  },
  {
      "name": "Baykovtsy",
      "lon": "25.6872",
      "lat": "49.5603"
  },
  {
      "name": "Bazaliia",
      "lon": "26.4708",
      "lat": "49.7178"
  },
  {
      "name": "Beleluia",
      "lon": "25.4775",
      "lat": "48.4986"
  },
  {
      "name": "Belobozhnitsa",
      "lon": "25.6814",
      "lat": "49.0494"
  },
  {
      "name": "Belogorodka",
      "lon": "26.6475",
      "lat": "50.0042"
  },
  {
      "name": "Belz",
      "lon": "24.0167",
      "lat": "50.3833"
  },
  {
      "name": "Bendzary",
      "lon": "29.6642",
      "lat": "47.9308"
  },
  {
      "name": "Bene",
      "lon": "22.7569",
      "lat": "48.1664"
  },
  {
      "name": "Berdiansk",
      "lon": "36.7845",
      "lat": "46.7598"
  },
  {
      "name": "Berdychiv",
      "lon": "28.6000",
      "lat": "49.8919"
  },
  {
      "name": "Berehove",
      "lon": "22.6375",
      "lat": "48.2025"
  },
  {
      "name": "Berestechko",
      "lon": "25.1167",
      "lat": "50.3500"
  },
  {
      "name": "Berezan",
      "lon": "31.4700",
      "lat": "50.3197"
  },
  {
      "name": "Berezanka",
      "lon": "31.3875",
      "lat": "46.8550"
  },
  {
      "name": "Berezhany",
      "lon": "28.5072",
      "lat": "49.5442"
  },
  {
      "name": "Berezhany",
      "lon": "24.9436",
      "lat": "49.4464"
  },
  {
      "name": "Berezhynka",
      "lon": "32.3547",
      "lat": "48.4867"
  },
  {
      "name": "Berezivka",
      "lon": "30.9125",
      "lat": "47.2039"
  },
  {
      "name": "Bereznehuvate",
      "lon": "32.8478",
      "lat": "47.3114"
  },
  {
      "name": "Berezova Rudka",
      "lon": "32.2401",
      "lat": "50.3153"
  },
  {
      "name": "Berezovo",
      "lon": "23.4892",
      "lat": "48.3039"
  },
  {
      "name": "Berezyna",
      "lon": "24.0672",
      "lat": "49.4461"
  },
  {
      "name": "Bernove",
      "lon": "26.6336",
      "lat": "48.4981"
  },
  {
      "name": "Bershad",
      "lon": "29.5325",
      "lat": "48.3728"
  },
  {
      "name": "Beryslav",
      "lon": "33.4167",
      "lat": "46.8333"
  },
  {
      "name": "Bezborodky",
      "lon": "31.9856",
      "lat": "49.8994"
  },
  {
      "name": "Bezliudivka",
      "lon": "36.2719",
      "lat": "49.8694"
  },
  {
      "name": "Bibrka",
      "lon": "24.2936",
      "lat": "49.6358"
  },
  {
      "name": "Bila Tserkva",
      "lon": "30.1167",
      "lat": "49.7956"
  },
  {
      "name": "Bila Tserkva",
      "lon": "23.9333",
      "lat": "47.9500"
  },
  {
      "name": "Bilche",
      "lon": "23.8294",
      "lat": "49.4100"
  },
  {
      "name": "Bile",
      "lon": "39.0367",
      "lat": "48.4936"
  },
  {
      "name": "Bilenke",
      "lon": "37.6314",
      "lat": "48.7664"
  },
  {
      "name": "Bilenke",
      "lon": "30.3697",
      "lat": "46.0519"
  },
  {
      "name": "Bilhorod-Dnistrovskyi",
      "lon": "30.3333",
      "lat": "46.1833"
  },
  {
      "name": "Biliaivka",
      "lon": "30.2014",
      "lat": "46.4828"
  },
  {
      "name": "Bilkivtsi",
      "lon": "28.9772",
      "lat": "50.3675"
  },
  {
      "name": "Bilmak",
      "lon": "36.6500",
      "lat": "47.3589"
  },
  {
      "name": "Biloberizka",
      "lon": "25.0469",
      "lat": "48.1656"
  },
  {
      "name": "Bilohirsk",
      "lon": "34.6022",
      "lat": "45.0544"
  },
  {
      "name": "Bilohorodka",
      "lon": "30.2167",
      "lat": "50.4000"
  },
  {
      "name": "Bilokorovychi",
      "lon": "28.0175",
      "lat": "51.1089"
  },
  {
      "name": "Bilokrynnytsia",
      "lon": "25.7497",
      "lat": "50.1429"
  },
  {
      "name": "Bilokurakyne",
      "lon": "38.7167",
      "lat": "49.5167"
  },
  {
      "name": "Bilopillya",
      "lon": "34.3025",
      "lat": "51.1532"
  },
  {
      "name": "Bilousivka",
      "lon": "32.3714",
      "lat": "49.9453"
  },
  {
      "name": "Bilovodsk",
      "lon": "39.5756",
      "lat": "49.1992"
  },
  {
      "name": "Bilozerka",
      "lon": "32.4333",
      "lat": "46.6333"
  },
  {
      "name": "Bilozirka",
      "lon": "32.4544",
      "lat": "47.0853"
  },
  {
      "name": "Bilshivtsi",
      "lon": "24.7500",
      "lat": "49.1833"
  },
  {
      "name": "Bilyne",
      "lon": "29.6244",
      "lat": "47.8731"
  },
  {
      "name": "Birky",
      "lon": "25.1947",
      "lat": "51.8081"
  },
  {
      "name": "Birky",
      "lon": "34.1706",
      "lat": "50.1251"
  },
  {
      "name": "Blahodatne",
      "lon": "24.2667",
      "lat": "50.6500"
  },
  {
      "name": "Blahovishchenske",
      "lon": "30.2353",
      "lat": "48.3197"
  },
  {
      "name": "Blystavytsya",
      "lon": "30.1822",
      "lat": "50.6006"
  },
  {
      "name": "Blyzhnie",
      "lon": "35.3306",
      "lat": "45.0569"
  },
  {
      "name": "Bobrivnyk",
      "lon": "34.3054",
      "lat": "50.2347"
  },
  {
      "name": "Bobrovytsia",
      "lon": "31.3833",
      "lat": "50.7333"
  },
  {
      "name": "Bobrynets",
      "lon": "32.1581",
      "lat": "48.0578"
  },
  {
      "name": "Bochanytsya",
      "lon": "26.6953",
      "lat": "50.5286"
  },
  {
      "name": "Bochechky",
      "lon": "33.4176",
      "lat": "51.2994"
  },
  {
      "name": "Bodaki",
      "lon": "25.8071",
      "lat": "49.8933"
  },
  {
      "name": "Bodakva",
      "lon": "33.4281",
      "lat": "50.2996"
  },
  {
      "name": "Bohdanivka",
      "lon": "36.1100",
      "lat": "48.5015"
  },
  {
      "name": "Bohdanivka",
      "lon": "31.1344",
      "lat": "47.8158"
  },
  {
      "name": "Bohdanivka",
      "lon": "29.1081",
      "lat": "48.6414"
  },
  {
      "name": "Bohodukhiv",
      "lon": "35.5164",
      "lat": "50.1608"
  },
  {
      "name": "Bohorodchany",
      "lon": "24.5333",
      "lat": "48.8000"
  },
  {
      "name": "Bohuslav",
      "lon": "36.0287",
      "lat": "48.4661"
  },
  {
      "name": "Bohuslav",
      "lon": "30.8741",
      "lat": "49.5464"
  },
  {
      "name": "Bohynivka",
      "lon": "36.3527",
      "lat": "48.4890"
  },
  {
      "name": "Boikivske",
      "lon": "38.0108",
      "lat": "47.4139"
  },
  {
      "name": "Bokhonyky",
      "lon": "28.3800",
      "lat": "49.1644"
  },
  {
      "name": "Bolekhiv",
      "lon": "23.8514",
      "lat": "49.0669"
  },
  {
      "name": "Bolhrad",
      "lon": "28.6134",
      "lat": "45.6855"
  },
  {
      "name": "Borisov",
      "lon": "26.6481",
      "lat": "50.1753"
  },
  {
      "name": "Borivtsi",
      "lon": "25.6361",
      "lat": "48.5867"
  },
  {
      "name": "Borki",
      "lon": "23.9178",
      "lat": "49.9133"
  },
  {
      "name": "Borodyanka",
      "lon": "29.9339",
      "lat": "50.6439"
  },
  {
      "name": "Borokhiv",
      "lon": "25.4611",
      "lat": "50.7811"
  },
  {
      "name": "Boromlya",
      "lon": "34.9723",
      "lat": "50.6204"
  },
  {
      "name": "Borova",
      "lon": "30.1039",
      "lat": "50.1733"
  },
  {
      "name": "Borovytsia",
      "lon": "32.4889",
      "lat": "49.2433"
  },
  {
      "name": "Borozenske",
      "lon": "33.4197",
      "lat": "47.1786"
  },
  {
      "name": "Borshchivka",
      "lon": "36.9742",
      "lat": "49.5082"
  },
  {
      "name": "Borynia",
      "lon": "22.9953",
      "lat": "49.0778"
  },
  {
      "name": "Boryslav",
      "lon": "23.4267",
      "lat": "49.2881"
  },
  {
      "name": "Boryspil",
      "lon": "30.9500",
      "lat": "50.3500"
  },
  {
      "name": "Borzhava",
      "lon": "22.7217",
      "lat": "48.1564"
  },
  {
      "name": "Borzna",
      "lon": "32.4167",
      "lat": "51.2333"
  },
  {
      "name": "Boyarka",
      "lon": "30.2886",
      "lat": "50.3292"
  },
  {
      "name": "Bozhkivs’ke",
      "lon": "34.7583",
      "lat": "49.6698"
  },
  {
      "name": "Brailiv",
      "lon": "28.1536",
      "lat": "49.1053"
  },
  {
      "name": "Bratske",
      "lon": "31.5781",
      "lat": "47.8636"
  },
  {
      "name": "Bratslav",
      "lon": "28.9447",
      "lat": "48.8147"
  },
  {
      "name": "Brianka",
      "lon": "38.6431",
      "lat": "48.5133"
  },
  {
      "name": "Brody",
      "lon": "25.1542",
      "lat": "50.0781"
  },
  {
      "name": "Brody",
      "lon": "24.5275",
      "lat": "51.7639"
  },
  {
      "name": "Broshniv-Osada",
      "lon": "24.1814",
      "lat": "48.9994"
  },
  {
      "name": "Brovary",
      "lon": "30.7903",
      "lat": "50.5114"
  },
  {
      "name": "Brusyliv",
      "lon": "29.5333",
      "lat": "50.2833"
  },
  {
      "name": "Brylivka",
      "lon": "33.1511",
      "lat": "46.4250"
  },
  {
      "name": "Bryukhovychi",
      "lon": "23.9436",
      "lat": "49.9000"
  },
  {
      "name": "Bucha",
      "lon": "30.2350",
      "lat": "50.5464"
  },
  {
      "name": "Buchach",
      "lon": "25.3872",
      "lat": "49.0647"
  },
  {
      "name": "Budy",
      "lon": "29.2331",
      "lat": "48.4669"
  },
  {
      "name": "Buhas",
      "lon": "37.5614",
      "lat": "47.6347"
  },
  {
      "name": "Bukachivtsi",
      "lon": "24.4972",
      "lat": "49.2583"
  },
  {
      "name": "Bulakhivka",
      "lon": "35.6663",
      "lat": "48.5995"
  },
  {
      "name": "Burshtyn",
      "lon": "24.6350",
      "lat": "49.2600"
  },
  {
      "name": "Bushtyno",
      "lon": "23.4894",
      "lat": "48.0503"
  },
  {
      "name": "Busk",
      "lon": "24.6167",
      "lat": "49.9667"
  },
  {
      "name": "Buzovytsia",
      "lon": "26.9275",
      "lat": "48.5014"
  },
  {
      "name": "Buzynove",
      "lon": "30.4869",
      "lat": "46.9742"
  },
  {
      "name": "Bykivka",
      "lon": "27.9831",
      "lat": "50.2928"
  },
  {
      "name": "Byrlivka",
      "lon": "32.0725",
      "lat": "50.0853"
  },
  {
      "name": "Bystryk",
      "lon": "29.1436",
      "lat": "49.7364"
  },
  {
      "name": "Bytkiv",
      "lon": "24.4858",
      "lat": "48.6244"
  },
  {
      "name": "Chabany",
      "lon": "30.4228",
      "lat": "50.3400"
  },
  {
      "name": "Chaplyne",
      "lon": "36.2374",
      "lat": "48.1273"
  },
  {
      "name": "Chaplynka",
      "lon": "34.7726",
      "lat": "48.7348"
  },
  {
      "name": "Chaplynka",
      "lon": "33.5302",
      "lat": "46.3629"
  },
  {
      "name": "Chechelnyk",
      "lon": "29.3622",
      "lat": "48.2122"
  },
  {
      "name": "Chemer",
      "lon": "31.2186",
      "lat": "51.0989"
  },
  {
      "name": "Chemerivtsi",
      "lon": "26.3667",
      "lat": "49.0000"
  },
  {
      "name": "Cherepashyntsi",
      "lon": "28.5928",
      "lat": "49.5325"
  },
  {
      "name": "Cherkaske",
      "lon": "35.3844",
      "lat": "48.7008"
  },
  {
      "name": "Cherkasy",
      "lon": "32.0597",
      "lat": "49.4444"
  },
  {
      "name": "Chernechchyna",
      "lon": "34.7703",
      "lat": "49.1192"
  },
  {
      "name": "Chernelytsya",
      "lon": "25.4300",
      "lat": "48.8111"
  },
  {
      "name": "Chernihiv",
      "lon": "31.2947",
      "lat": "51.4939"
  },
  {
      "name": "Chernihivka",
      "lon": "36.2023",
      "lat": "47.1942"
  },
  {
      "name": "Chernivtsi",
      "lon": "25.9344",
      "lat": "48.2908"
  },
  {
      "name": "Chernivtsi",
      "lon": "28.1122",
      "lat": "48.5425"
  },
  {
      "name": "Chernyatin",
      "lon": "27.9089",
      "lat": "49.0475"
  },
  {
      "name": "Chervone",
      "lon": "28.8686",
      "lat": "49.9497"
  },
  {
      "name": "Chervone",
      "lon": "24.7656",
      "lat": "49.8028"
  },
  {
      "name": "Chervonohrad",
      "lon": "24.2265",
      "lat": "50.3842"
  },
  {
      "name": "Chervonohryhorivka",
      "lon": "34.5309",
      "lat": "47.6233"
  },
  {
      "name": "Chervonyy Oskil",
      "lon": "37.4280",
      "lat": "49.1744"
  },
  {
      "name": "Chkalove",
      "lon": "34.3216",
      "lat": "47.6950"
  },
  {
      "name": "Chkalove",
      "lon": "34.7122",
      "lat": "47.0722"
  },
  {
      "name": "Chop",
      "lon": "22.2000",
      "lat": "48.4333"
  },
  {
      "name": "Chopovychi",
      "lon": "28.9525",
      "lat": "50.8333"
  },
  {
      "name": "Chornivka",
      "lon": "26.0106",
      "lat": "48.4186"
  },
  {
      "name": "Chornoholova",
      "lon": "22.6069",
      "lat": "48.8508"
  },
  {
      "name": "Chornomorsk",
      "lon": "30.6569",
      "lat": "46.3017"
  },
  {
      "name": "Chornomorske",
      "lon": "32.7062",
      "lat": "45.5039"
  },
  {
      "name": "Chornotysiv",
      "lon": "23.0536",
      "lat": "48.0783"
  },
  {
      "name": "Chornukhy",
      "lon": "32.9476",
      "lat": "50.2699"
  },
  {
      "name": "Chornyy Potik",
      "lon": "22.9067",
      "lat": "48.1808"
  },
  {
      "name": "Chortkiv",
      "lon": "25.8000",
      "lat": "49.0167"
  },
  {
      "name": "Chortomlyk",
      "lon": "34.1420",
      "lat": "47.6232"
  },
  {
      "name": "Chudniv",
      "lon": "28.0969",
      "lat": "50.0528"
  },
  {
      "name": "Chuhuiv",
      "lon": "36.6756",
      "lat": "49.8353"
  },
  {
      "name": "Chukaluvka",
      "lon": "24.6897",
      "lat": "48.8681"
  },
  {
      "name": "Chumaky",
      "lon": "34.8739",
      "lat": "48.6579"
  },
  {
      "name": "Chyhyryn",
      "lon": "32.6667",
      "lat": "49.0833"
  },
  {
      "name": "Chynadiyovo",
      "lon": "22.8333",
      "lat": "48.4833"
  },
  {
      "name": "Chyshky",
      "lon": "24.1689",
      "lat": "49.7975"
  },
  {
      "name": "Dashiv",
      "lon": "29.4278",
      "lat": "49.0047"
  },
  {
      "name": "Delen",
      "lon": "29.1878",
      "lat": "45.9125"
  },
  {
      "name": "Deleva",
      "lon": "25.2208",
      "lat": "48.9117"
  },
  {
      "name": "Deliatyn",
      "lon": "24.6236",
      "lat": "48.5286"
  },
  {
      "name": "Demuryne",
      "lon": "36.4830",
      "lat": "48.1781"
  },
  {
      "name": "Denyshi",
      "lon": "28.4078",
      "lat": "50.2153"
  },
  {
      "name": "Derno",
      "lon": "25.7458",
      "lat": "50.7728"
  },
  {
      "name": "Dertsen",
      "lon": "22.6825",
      "lat": "48.3350"
  },
  {
      "name": "Dihtiari",
      "lon": "32.7699",
      "lat": "50.5814"
  },
  {
      "name": "Dmukhailivka",
      "lon": "34.7604",
      "lat": "49.0566"
  },
  {
      "name": "Dmytrivka",
      "lon": "36.1918",
      "lat": "48.3887"
  },
  {
      "name": "Dmytrivka",
      "lon": "31.7350",
      "lat": "46.6339"
  },
  {
      "name": "Dnipro",
      "lon": "34.9833",
      "lat": "48.4500"
  },
  {
      "name": "Dniprorudne",
      "lon": "34.9879",
      "lat": "47.3855"
  },
  {
      "name": "Dniprovske",
      "lon": "34.4207",
      "lat": "48.5953"
  },
  {
      "name": "Dnistrivka",
      "lon": "26.9258",
      "lat": "48.5361"
  },
  {
      "name": "Dobra",
      "lon": "30.1325",
      "lat": "48.9631"
  },
  {
      "name": "Dobrik",
      "lon": "23.9033",
      "lat": "48.0122"
  },
  {
      "name": "Dobromyl",
      "lon": "22.7833",
      "lat": "49.5667"
  },
  {
      "name": "Dobroslav",
      "lon": "30.9450",
      "lat": "46.8200"
  },
  {
      "name": "Dobrotvir",
      "lon": "24.3864",
      "lat": "50.2056"
  },
  {
      "name": "Dobrovelychkivka",
      "lon": "31.1667",
      "lat": "48.3500"
  },
  {
      "name": "Dobrovlyany",
      "lon": "25.7540",
      "lat": "48.6641"
  },
  {
      "name": "Dolyna",
      "lon": "24.0108",
      "lat": "48.9703"
  },
  {
      "name": "Dolynska",
      "lon": "32.7648",
      "lat": "48.1111"
  },
  {
      "name": "Domanivka",
      "lon": "30.9896",
      "lat": "47.6292"
  },
  {
      "name": "Donetsk",
      "lon": "37.8042",
      "lat": "48.0089"
  },
  {
      "name": "Doroshivtsi",
      "lon": "25.8931",
      "lat": "48.5872"
  },
  {
      "name": "Doslidnytske",
      "lon": "30.1478",
      "lat": "49.9219"
  },
  {
      "name": "Dovbysh",
      "lon": "27.9895",
      "lat": "50.3722"
  },
  {
      "name": "Dovhe",
      "lon": "23.2869",
      "lat": "48.3675"
  },
  {
      "name": "Dovzhansk",
      "lon": "39.6516",
      "lat": "48.0846"
  },
  {
      "name": "Dovzhok",
      "lon": "28.5261",
      "lat": "48.2392"
  },
  {
      "name": "Drabiv",
      "lon": "32.1481",
      "lat": "49.9603"
  },
  {
      "name": "Drachyntsi",
      "lon": "25.7003",
      "lat": "48.3164"
  },
  {
      "name": "Drohobych",
      "lon": "23.5000",
      "lat": "49.3500"
  },
  {
      "name": "Druzhkivka",
      "lon": "37.5278",
      "lat": "48.6203"
  },
  {
      "name": "Duba",
      "lon": "24.1533",
      "lat": "48.8481"
  },
  {
      "name": "Dubivskyi",
      "lon": "39.1569",
      "lat": "48.0822"
  },
  {
      "name": "Dubivtsi",
      "lon": "24.7736",
      "lat": "49.0814"
  },
  {
      "name": "Dubno",
      "lon": "25.7350",
      "lat": "50.3931"
  },
  {
      "name": "Dubove",
      "lon": "23.8863",
      "lat": "48.1781"
  },
  {
      "name": "Dubrovytsya",
      "lon": "26.5667",
      "lat": "51.5667"
  },
  {
      "name": "Dubyshche",
      "lon": "25.3000",
      "lat": "50.9264"
  },
  {
      "name": "Dykanka",
      "lon": "34.5341",
      "lat": "49.8222"
  },
  {
      "name": "Dymer",
      "lon": "30.3117",
      "lat": "50.7872"
  },
  {
      "name": "Dyrdyn",
      "lon": "31.4467",
      "lat": "49.2428"
  },
  {
      "name": "Dzhankoi",
      "lon": "34.3933",
      "lat": "45.7086"
  },
  {
      "name": "Dzhulynka",
      "lon": "29.7475",
      "lat": "48.4417"
  },
  {
      "name": "Enerhodar",
      "lon": "34.6558",
      "lat": "47.4989"
  },
  {
      "name": "Fastiv",
      "lon": "29.9181",
      "lat": "50.0747"
  },
  {
      "name": "Fastovets",
      "lon": "30.0442",
      "lat": "50.0572"
  },
  {
      "name": "Fedorivka",
      "lon": "36.5555",
      "lat": "47.5455"
  },
  {
      "name": "Fedorivka",
      "lon": "32.8061",
      "lat": "46.8006"
  },
  {
      "name": "Fertesholmash",
      "lon": "22.9269",
      "lat": "47.9808"
  },
  {
      "name": "Fontanka",
      "lon": "30.8586",
      "lat": "46.5644"
  },
  {
      "name": "Gorishnyaya Vygnanka",
      "lon": "25.8067",
      "lat": "49.0267"
  },
  {
      "name": "Haisyn",
      "lon": "29.3906",
      "lat": "48.8094"
  },
  {
      "name": "Haivoron",
      "lon": "29.8500",
      "lat": "48.3333"
  },
  {
      "name": "Halych",
      "lon": "24.7217",
      "lat": "49.1128"
  },
  {
      "name": "Harasymiv",
      "lon": "25.2061",
      "lat": "48.7522"
  },
  {
      "name": "Havrylivka",
      "lon": "33.8769",
      "lat": "47.2219"
  },
  {
      "name": "Havryshivka",
      "lon": "28.6425",
      "lat": "49.2367"
  },
  {
      "name": "Henichesk",
      "lon": "34.7989",
      "lat": "46.1769"
  },
  {
      "name": "Hertsa",
      "lon": "26.2500",
      "lat": "48.1500"
  },
  {
      "name": "Hirne",
      "lon": "23.7342",
      "lat": "49.1806"
  },
  {
      "name": "Hirnyk",
      "lon": "37.3667",
      "lat": "48.0500"
  },
  {
      "name": "Hirsivka",
      "lon": "35.3940",
      "lat": "46.6403"
  },
  {
      "name": "Hleiuvatka",
      "lon": "33.4220",
      "lat": "48.0475"
  },
  {
      "name": "Hlobyne",
      "lon": "33.2632",
      "lat": "49.3886"
  },
  {
      "name": "Hlodosy",
      "lon": "31.3294",
      "lat": "48.4614"
  },
  {
      "name": "Hlukhiv",
      "lon": "33.9078",
      "lat": "51.6765"
  },
  {
      "name": "Hlukhivtsi",
      "lon": "28.7189",
      "lat": "49.7728"
  },
  {
      "name": "Hlushkiv",
      "lon": "25.4767",
      "lat": "48.6436"
  },
  {
      "name": "Hlyboka",
      "lon": "25.9333",
      "lat": "48.0833"
  },
  {
      "name": "Hlyboke",
      "lon": "29.6094",
      "lat": "45.7292"
  },
  {
      "name": "Hlyniany",
      "lon": "24.5167",
      "lat": "49.8233"
  },
  {
      "name": "Hlynsk",
      "lon": "28.4642",
      "lat": "49.5753"
  },
  {
      "name": "Hnivan",
      "lon": "28.3500",
      "lat": "49.0833"
  },
  {
      "name": "Hola Prystan",
      "lon": "32.5167",
      "lat": "46.5167"
  },
  {
      "name": "Holma",
      "lon": "29.8531",
      "lat": "47.9211"
  },
  {
      "name": "Hołoby",
      "lon": "25.0167",
      "lat": "51.0833"
  },
  {
      "name": "Holoskiv",
      "lon": "27.3431",
      "lat": "49.3808"
  },
  {
      "name": "Holovanivsk",
      "lon": "30.4472",
      "lat": "48.3800"
  },
  {
      "name": "Holovetsko",
      "lon": "22.8906",
      "lat": "49.3083"
  },
  {
      "name": "Holovkivka",
      "lon": "32.3383",
      "lat": "49.1203"
  },
  {
      "name": "Holovne",
      "lon": "24.0833",
      "lat": "51.3333"
  },
  {
      "name": "Holovy",
      "lon": "24.8789",
      "lat": "48.0619"
  },
  {
      "name": "Holovyne",
      "lon": "28.8281",
      "lat": "50.4725"
  },
  {
      "name": "Holubivka",
      "lon": "35.3246",
      "lat": "48.8853"
  },
  {
      "name": "Holubivske",
      "lon": "38.6433",
      "lat": "48.6375"
  },
  {
      "name": "Holubyne",
      "lon": "22.9697",
      "lat": "48.5714"
  },
  {
      "name": "Holubynka",
      "lon": "33.9153",
      "lat": "44.5972"
  },
  {
      "name": "Honcharivka",
      "lon": "24.7858",
      "lat": "49.8744"
  },
  {
      "name": "Hora",
      "lon": "30.8617",
      "lat": "50.3708"
  },
  {
      "name": "Hordiivka",
      "lon": "29.3175",
      "lat": "48.5206"
  },
  {
      "name": "Horenka",
      "lon": "30.3175",
      "lat": "50.5569"
  },
  {
      "name": "Horianivske",
      "lon": "34.8750",
      "lat": "48.5792"
  },
  {
      "name": "Horinchovo",
      "lon": "23.4339",
      "lat": "48.2697"
  },
  {
      "name": "Horishni Plavni",
      "lon": "33.6562",
      "lat": "49.0107"
  },
  {
      "name": "Horlivka",
      "lon": "38.0925",
      "lat": "48.3336"
  },
  {
      "name": "Hornostaivka",
      "lon": "33.7280",
      "lat": "47.0070"
  },
  {
      "name": "Horodenka",
      "lon": "25.5003",
      "lat": "48.6675"
  },
  {
      "name": "Horodnia",
      "lon": "31.5833",
      "lat": "51.8833"
  },
  {
      "name": "Horodnytsia",
      "lon": "27.3183",
      "lat": "50.8094"
  },
  {
      "name": "Horodok",
      "lon": "26.5667",
      "lat": "49.1667"
  },
  {
      "name": "Horodok",
      "lon": "23.6436",
      "lat": "49.7822"
  },
  {
      "name": "Horodok",
      "lon": "25.4792",
      "lat": "51.3700"
  },
  {
      "name": "Horodyshche",
      "lon": "31.4581",
      "lat": "49.2925"
  },
  {
      "name": "Horodyshche",
      "lon": "39.6514",
      "lat": "49.0511"
  },
  {
      "name": "Horodyshche",
      "lon": "28.1036",
      "lat": "49.3669"
  },
  {
      "name": "Horokhiv",
      "lon": "24.7650",
      "lat": "50.4994"
  },
  {
      "name": "Horonda",
      "lon": "22.5681",
      "lat": "48.3786"
  },
  {
      "name": "Horoshova",
      "lon": "26.1050",
      "lat": "48.5457"
  },
  {
      "name": "Horyhliady",
      "lon": "25.1481",
      "lat": "48.8756"
  },
  {
      "name": "Hoshcha",
      "lon": "26.6753",
      "lat": "50.5986"
  },
  {
      "name": "Hostomel",
      "lon": "30.2653",
      "lat": "50.5692"
  },
  {
      "name": "Hozhuly",
      "lon": "34.4479",
      "lat": "49.6056"
  },
  {
      "name": "Hrabiv",
      "lon": "23.9989",
      "lat": "48.9047"
  },
  {
      "name": "Hranitne",
      "lon": "29.3522",
      "lat": "50.7428"
  },
  {
      "name": "Hrebinka",
      "lon": "32.4396",
      "lat": "50.1180"
  },
  {
      "name": "Hrebinky",
      "lon": "30.1714",
      "lat": "49.9564"
  },
  {
      "name": "Hreblya",
      "lon": "23.0494",
      "lat": "48.2831"
  },
  {
      "name": "Hrechane",
      "lon": "34.5094",
      "lat": "48.7383"
  },
  {
      "name": "Hrechyshkyne",
      "lon": "38.8950",
      "lat": "48.8642"
  },
  {
      "name": "Hrunyky",
      "lon": "23.6658",
      "lat": "48.1456"
  },
  {
      "name": "Hrushivtsi",
      "lon": "26.8214",
      "lat": "48.5478"
  },
  {
      "name": "Hryshkivtsi",
      "lon": "28.6017",
      "lat": "49.9356"
  },
  {
      "name": "Hubnyk",
      "lon": "29.3306",
      "lat": "48.6192"
  },
  {
      "name": "Hubynykha",
      "lon": "35.2535",
      "lat": "48.8084"
  },
  {
      "name": "Huiva",
      "lon": "28.6553",
      "lat": "50.2108"
  },
  {
      "name": "Huliaipole",
      "lon": "34.1495",
      "lat": "48.1211"
  },
  {
      "name": "Hulsk",
      "lon": "27.7211",
      "lat": "50.5192"
  },
  {
      "name": "Hulyaypole",
      "lon": "36.2632",
      "lat": "47.6644"
  },
  {
      "name": "Hupalivka",
      "lon": "34.7277",
      "lat": "49.1034"
  },
  {
      "name": "Hurzuf",
      "lon": "34.2875",
      "lat": "44.5528"
  },
  {
      "name": "Huta",
      "lon": "24.1264",
      "lat": "51.6289"
  },
  {
      "name": "Hvardiys’ke",
      "lon": "35.3110",
      "lat": "48.7328"
  },
  {
      "name": "Hvizdets",
      "lon": "25.2831",
      "lat": "48.5753"
  },
  {
      "name": "Hyryavi Iskivtsi",
      "lon": "33.3134",
      "lat": "50.4247"
  },
  {
      "name": "Ichki",
      "lon": "34.9292",
      "lat": "45.3413"
  },
  {
      "name": "Ichnia",
      "lon": "32.4000",
      "lat": "50.8500"
  },
  {
      "name": "Ilarionove",
      "lon": "35.2734",
      "lat": "48.4059"
  },
  {
      "name": "Illintsi",
      "lon": "29.2000",
      "lat": "49.1000"
  },
  {
      "name": "Iltsi",
      "lon": "24.7600",
      "lat": "48.1531"
  },
  {
      "name": "Imeni Shevchenko",
      "lon": "37.1453",
      "lat": "48.2200"
  },
  {
      "name": "Imstychovo",
      "lon": "23.1969",
      "lat": "48.2953"
  },
  {
      "name": "Inkerman",
      "lon": "33.6083",
      "lat": "44.6142"
  },
  {
      "name": "Irpin",
      "lon": "30.2500",
      "lat": "50.5167"
  },
  {
      "name": "Irshansk",
      "lon": "28.7167",
      "lat": "50.7167"
  },
  {
      "name": "Irshava",
      "lon": "23.0375",
      "lat": "48.3172"
  },
  {
      "name": "Isaiky",
      "lon": "30.8150",
      "lat": "49.4833"
  },
  {
      "name": "Isliam-Terek",
      "lon": "35.2033",
      "lat": "45.2256"
  },
  {
      "name": "Ivana Franka",
      "lon": "23.3206",
      "lat": "49.3619"
  },
  {
      "name": "Ivanivka",
      "lon": "38.9525",
      "lat": "48.2325"
  },
  {
      "name": "Ivanivka",
      "lon": "34.5755",
      "lat": "48.7276"
  },
  {
      "name": "Ivanivka",
      "lon": "36.6427",
      "lat": "48.0985"
  },
  {
      "name": "Ivanivka",
      "lon": "37.3175",
      "lat": "47.5778"
  },
  {
      "name": "Ivanivka",
      "lon": "30.4697",
      "lat": "46.9756"
  },
  {
      "name": "Ivanivka",
      "lon": "34.5500",
      "lat": "46.7100"
  },
  {
      "name": "Ivanivske",
      "lon": "35.5536",
      "lat": "49.4489"
  },
  {
      "name": "Ivanivtsi",
      "lon": "27.0147",
      "lat": "48.4847"
  },
  {
      "name": "Ivankiv",
      "lon": "29.9000",
      "lat": "50.9333"
  },
  {
      "name": "Ivankov",
      "lon": "26.1724",
      "lat": "48.8242"
  },
  {
      "name": "Ivano-Frankivsk",
      "lon": "24.7106",
      "lat": "48.9228"
  },
  {
      "name": "Ivanopil",
      "lon": "28.2156",
      "lat": "49.8586"
  },
  {
      "name": "Ivanopillia",
      "lon": "37.7589",
      "lat": "48.4794"
  },
  {
      "name": "Ivanychi",
      "lon": "24.3606",
      "lat": "50.6419"
  },
  {
      "name": "Ivashkivtsi",
      "lon": "27.9475",
      "lat": "48.7439"
  },
  {
      "name": "Iverske",
      "lon": "36.9608",
      "lat": "48.6367"
  },
  {
      "name": "Iziaslav",
      "lon": "26.8000",
      "lat": "50.1167"
  },
  {
      "name": "Izium",
      "lon": "37.2915",
      "lat": "49.2238"
  },
  {
      "name": "Izmail",
      "lon": "28.8333",
      "lat": "45.3500"
  },
  {
      "name": "Izobilne",
      "lon": "34.3533",
      "lat": "44.7014"
  },
  {
      "name": "Kachanivka",
      "lon": "27.8969",
      "lat": "49.6392"
  },
  {
      "name": "Kaharlyk",
      "lon": "30.8092",
      "lat": "49.8522"
  },
  {
      "name": "Kaihador",
      "lon": "35.3553",
      "lat": "44.9633"
  },
  {
      "name": "Kakhovka",
      "lon": "33.4667",
      "lat": "46.8000"
  },
  {
      "name": "Kalanchak",
      "lon": "33.2906",
      "lat": "46.2550"
  },
  {
      "name": "Kalmiuske",
      "lon": "38.0667",
      "lat": "47.6667"
  },
  {
      "name": "Kalush",
      "lon": "24.3597",
      "lat": "49.0442"
  },
  {
      "name": "Kalynivka",
      "lon": "28.5231",
      "lat": "49.4472"
  },
  {
      "name": "Kalynivka",
      "lon": "30.2319",
      "lat": "50.2256"
  },
  {
      "name": "Kalynivka",
      "lon": "30.8211",
      "lat": "50.5592"
  },
  {
      "name": "Kalynivske",
      "lon": "32.9747",
      "lat": "47.1150"
  },
  {
      "name": "Kalyta",
      "lon": "31.0264",
      "lat": "50.7503"
  },
  {
      "name": "Kam”yane",
      "lon": "35.3985",
      "lat": "47.8742"
  },
  {
      "name": "Kamianets-Podilskyi",
      "lon": "26.5806",
      "lat": "48.6806"
  },
  {
      "name": "Kamiani Potoky",
      "lon": "33.5186",
      "lat": "48.9859"
  },
  {
      "name": "Kamianka-Dniprovska",
      "lon": "34.4232",
      "lat": "47.4792"
  },
  {
      "name": "Kamianske",
      "lon": "34.6132",
      "lat": "48.5076"
  },
  {
      "name": "Kamianske",
      "lon": "22.9386",
      "lat": "48.2797"
  },
  {
      "name": "Kamin-Kashyrskyi",
      "lon": "24.9606",
      "lat": "51.6242"
  },
  {
      "name": "Kaniv",
      "lon": "31.4558",
      "lat": "49.7447"
  },
  {
      "name": "Kapulivka",
      "lon": "34.2266",
      "lat": "47.5476"
  },
  {
      "name": "Kapytolivka",
      "lon": "37.3542",
      "lat": "49.1936"
  },
  {
      "name": "Kariv",
      "lon": "23.7989",
      "lat": "50.3469"
  },
  {
      "name": "Karnaukhivka",
      "lon": "34.7376",
      "lat": "48.4698"
  },
  {
      "name": "Karpylivka",
      "lon": "25.8406",
      "lat": "50.8483"
  },
  {
      "name": "Kashperivka",
      "lon": "29.6814",
      "lat": "49.4311"
  },
  {
      "name": "Kashperivka",
      "lon": "27.5281",
      "lat": "50.2714"
  },
  {
      "name": "Katerynivka",
      "lon": "36.1312",
      "lat": "48.0141"
  },
  {
      "name": "Kaydanovo",
      "lon": "22.5758",
      "lat": "48.4725"
  },
  {
      "name": "Kazanka",
      "lon": "32.8261",
      "lat": "47.8381"
  },
  {
      "name": "Kaznacheyivka",
      "lon": "35.0811",
      "lat": "48.7958"
  },
  {
      "name": "Kehychivka",
      "lon": "35.7622",
      "lat": "49.2858"
  },
  {
      "name": "Keleberda",
      "lon": "31.5611",
      "lat": "49.7442"
  },
  {
      "name": "Kelmentsi",
      "lon": "26.8360",
      "lat": "48.4615"
  },
  {
      "name": "Kernitsa",
      "lon": "23.7556",
      "lat": "49.7811"
  },
  {
      "name": "Kharkiv",
      "lon": "36.2292",
      "lat": "50.0000"
  },
  {
      "name": "Khartsyzk",
      "lon": "38.1500",
      "lat": "48.0333"
  },
  {
      "name": "Kherson",
      "lon": "32.6000",
      "lat": "46.6333"
  },
  {
      "name": "Khmelnytskyi",
      "lon": "27.0000",
      "lat": "49.4200"
  },
  {
      "name": "Khmilnyk",
      "lon": "27.9667",
      "lat": "49.5500"
  },
  {
      "name": "Khodoriv",
      "lon": "24.3094",
      "lat": "49.4100"
  },
  {
      "name": "Khodorkiv",
      "lon": "29.3081",
      "lat": "50.0972"
  },
  {
      "name": "Khomenky",
      "lon": "28.2306",
      "lat": "48.6853"
  },
  {
      "name": "Khomutets",
      "lon": "33.7235",
      "lat": "50.0619"
  },
  {
      "name": "Khorol",
      "lon": "33.2589",
      "lat": "49.7840"
  },
  {
      "name": "Khoroshe",
      "lon": "36.4766",
      "lat": "48.5549"
  },
  {
      "name": "Khoroshiv",
      "lon": "28.4500",
      "lat": "50.6000"
  },
  {
      "name": "Khotiv",
      "lon": "30.4664",
      "lat": "50.3333"
  },
  {
      "name": "Khotyn",
      "lon": "26.4860",
      "lat": "48.5078"
  },
  {
      "name": "Khreshchatytske",
      "lon": "37.9269",
      "lat": "47.2331"
  },
  {
      "name": "Khrestivka",
      "lon": "38.3667",
      "lat": "48.1500"
  },
  {
      "name": "Khroly",
      "lon": "36.3687",
      "lat": "49.9014"
  },
  {
      "name": "Khrustalnyi",
      "lon": "38.9453",
      "lat": "48.1214"
  },
  {
      "name": "Khrystoforivka",
      "lon": "33.0877",
      "lat": "47.9822"
  },
  {
      "name": "Khrystynivka",
      "lon": "29.9667",
      "lat": "48.8333"
  },
  {
      "name": "Khust",
      "lon": "23.2978",
      "lat": "48.1814"
  },
  {
      "name": "Khymchyn",
      "lon": "25.1497",
      "lat": "48.3839"
  },
  {
      "name": "Kiliia",
      "lon": "29.2667",
      "lat": "45.4503"
  },
  {
      "name": "Kitsman",
      "lon": "25.7614",
      "lat": "48.4425"
  },
  {
      "name": "Kivertsi",
      "lon": "25.4614",
      "lat": "50.8331"
  },
  {
      "name": "Klavdiyevo-Tarasove",
      "lon": "30.0053",
      "lat": "50.5825"
  },
  {
      "name": "Klembivka",
      "lon": "28.4064",
      "lat": "48.3894"
  },
  {
      "name": "Klenovyi",
      "lon": "39.4564",
      "lat": "48.1189"
  },
  {
      "name": "Kniazhdvir",
      "lon": "24.9128",
      "lat": "48.5581"
  },
  {
      "name": "Kobeliaky",
      "lon": "34.1993",
      "lat": "49.1474"
  },
  {
      "name": "Kobyletska Poliana",
      "lon": "24.0747",
      "lat": "48.0822"
  },
  {
      "name": "Kocherezhky",
      "lon": "35.6895",
      "lat": "48.6681"
  },
  {
      "name": "Kochubeyev",
      "lon": "26.3919",
      "lat": "48.8242"
  },
  {
      "name": "Kodra",
      "lon": "29.5667",
      "lat": "50.5942"
  },
  {
      "name": "Kodyma",
      "lon": "29.1167",
      "lat": "48.1000"
  },
  {
      "name": "Koktebel",
      "lon": "35.2406",
      "lat": "44.9600"
  },
  {
      "name": "Kolchyno",
      "lon": "22.7667",
      "lat": "48.4667"
  },
  {
      "name": "Kolky",
      "lon": "25.6667",
      "lat": "51.0992"
  },
  {
      "name": "Kolochava",
      "lon": "23.6984",
      "lat": "48.4266"
  },
  {
      "name": "Kolodribka",
      "lon": "26.0215",
      "lat": "48.6332"
  },
  {
      "name": "Kolomyia",
      "lon": "25.0333",
      "lat": "48.5167"
  },
  {
      "name": "Kolybaivka",
      "lon": "26.5450",
      "lat": "48.6411"
  },
  {
      "name": "Kolychivka",
      "lon": "31.3042",
      "lat": "51.4136"
  },
  {
      "name": "Komariv",
      "lon": "26.9883",
      "lat": "48.5597"
  },
  {
      "name": "Komariv",
      "lon": "28.6639",
      "lat": "49.1417"
  },
  {
      "name": "Komarno",
      "lon": "23.7000",
      "lat": "49.6333"
  },
  {
      "name": "Kompaniivka",
      "lon": "32.2000",
      "lat": "48.2500"
  },
  {
      "name": "Komysh-Zoria",
      "lon": "36.6931",
      "lat": "47.3275"
  },
  {
      "name": "Komyshuvakha",
      "lon": "35.5241",
      "lat": "47.7155"
  },
  {
      "name": "Konotop",
      "lon": "33.2027",
      "lat": "51.2369"
  },
  {
      "name": "Kopachivka",
      "lon": "25.2267",
      "lat": "50.8819"
  },
  {
      "name": "Kopaihorod",
      "lon": "27.8019",
      "lat": "48.8550"
  },
  {
      "name": "Kopashnovo",
      "lon": "23.4822",
      "lat": "48.2156"
  },
  {
      "name": "Korchyn",
      "lon": "23.5364",
      "lat": "49.0961"
  },
  {
      "name": "Koreiz",
      "lon": "34.0872",
      "lat": "44.4331"
  },
  {
      "name": "Koriukivka",
      "lon": "32.2500",
      "lat": "51.7833"
  },
  {
      "name": "Korniyivka",
      "lon": "31.4533",
      "lat": "50.4183"
  },
  {
      "name": "Kornyn",
      "lon": "29.5375",
      "lat": "50.0839"
  },
  {
      "name": "Korolevo",
      "lon": "23.1333",
      "lat": "48.1500"
  },
  {
      "name": "Korop",
      "lon": "32.9508",
      "lat": "51.5661"
  },
  {
      "name": "Koropets",
      "lon": "25.1794",
      "lat": "48.9386"
  },
  {
      "name": "Korosten",
      "lon": "28.6500",
      "lat": "50.9500"
  },
  {
      "name": "Korostyshiv",
      "lon": "29.0592",
      "lat": "50.3186"
  },
  {
      "name": "Korsun-Shevchenkivskyi",
      "lon": "31.2806",
      "lat": "49.4261"
  },
  {
      "name": "Korytne",
      "lon": "25.3753",
      "lat": "48.3336"
  },
  {
      "name": "Kosari",
      "lon": "32.1817",
      "lat": "49.0450"
  },
  {
      "name": "Kosiv",
      "lon": "25.0953",
      "lat": "48.3150"
  },
  {
      "name": "Kosmach",
      "lon": "24.3686",
      "lat": "48.7497"
  },
  {
      "name": "Kostiantynivka",
      "lon": "37.7167",
      "lat": "48.5333"
  },
  {
      "name": "Kostopil",
      "lon": "26.4431",
      "lat": "50.8833"
  },
  {
      "name": "Kosyno",
      "lon": "22.7994",
      "lat": "48.5125"
  },
  {
      "name": "Kotovka",
      "lon": "34.9428",
      "lat": "49.1301"
  },
  {
      "name": "Kotsyubyns’ke",
      "lon": "30.3331",
      "lat": "50.4883"
  },
  {
      "name": "Kovalivka",
      "lon": "34.7000",
      "lat": "49.6060"
  },
  {
      "name": "Kovalivka",
      "lon": "30.0131",
      "lat": "49.9847"
  },
  {
      "name": "Kovel",
      "lon": "24.7167",
      "lat": "51.2167"
  },
  {
      "name": "Koviahy",
      "lon": "35.5586",
      "lat": "49.9044"
  },
  {
      "name": "Kozelets",
      "lon": "31.1147",
      "lat": "50.9164"
  },
  {
      "name": "Kozelshchyna",
      "lon": "33.8518",
      "lat": "49.2155"
  },
  {
      "name": "Kozhanka",
      "lon": "29.7647",
      "lat": "49.9681"
  },
  {
      "name": "Kozhukhivka",
      "lon": "30.2333",
      "lat": "50.2536"
  },
  {
      "name": "Koziatyn",
      "lon": "28.8333",
      "lat": "49.7167"
  },
  {
      "name": "Kozova",
      "lon": "25.1544",
      "lat": "49.4318"
  },
  {
      "name": "Kozyn",
      "lon": "30.6500",
      "lat": "50.2278"
  },
  {
      "name": "Kozyriany",
      "lon": "26.6461",
      "lat": "48.3711"
  },
  {
      "name": "Kramatorsk",
      "lon": "37.5556",
      "lat": "48.7208"
  },
  {
      "name": "Krasnodon",
      "lon": "39.7333",
      "lat": "48.3000"
  },
  {
      "name": "Krasnohrad",
      "lon": "35.4569",
      "lat": "49.3719"
  },
  {
      "name": "Krasnoillia",
      "lon": "24.9050",
      "lat": "48.1081"
  },
  {
      "name": "Krasnoilsk",
      "lon": "25.5833",
      "lat": "48.0167"
  },
  {
      "name": "Krasnokamianka",
      "lon": "34.2931",
      "lat": "44.5625"
  },
  {
      "name": "Krasnokutsk",
      "lon": "35.1492",
      "lat": "50.0567"
  },
  {
      "name": "Krasnopilka",
      "lon": "29.7178",
      "lat": "48.8000"
  },
  {
      "name": "Krasnopillya",
      "lon": "35.2717",
      "lat": "50.7732"
  },
  {
      "name": "Krasnosilka",
      "lon": "29.6214",
      "lat": "48.5064"
  },
  {
      "name": "Krasnostavtsi",
      "lon": "25.4831",
      "lat": "48.5328"
  },
  {
      "name": "Krasnostavtsy",
      "lon": "26.3981",
      "lat": "48.7972"
  },
  {
      "name": "Krasnyi Kut",
      "lon": "38.7767",
      "lat": "48.2119"
  },
  {
      "name": "Krasnyk",
      "lon": "24.7364",
      "lat": "48.1444"
  },
  {
      "name": "Kremenchuk",
      "lon": "33.4239",
      "lat": "49.0775"
  },
  {
      "name": "Kremenets",
      "lon": "25.7275",
      "lat": "50.1081"
  },
  {
      "name": "Kropyvnytskyi",
      "lon": "32.2667",
      "lat": "48.5103"
  },
  {
      "name": "Kruhlyakivka",
      "lon": "37.7125",
      "lat": "49.5278"
  },
  {
      "name": "Krupske",
      "lon": "24.0300",
      "lat": "49.4619"
  },
  {
      "name": "Kryklyvets",
      "lon": "28.9786",
      "lat": "48.3217"
  },
  {
      "name": "Krylos",
      "lon": "24.6886",
      "lat": "49.0883"
  },
  {
      "name": "Krynychky",
      "lon": "38.0294",
      "lat": "48.1264"
  },
  {
      "name": "Krynychky",
      "lon": "34.4644",
      "lat": "48.3686"
  },
  {
      "name": "Krynychne",
      "lon": "28.6678",
      "lat": "45.5358"
  },
  {
      "name": "Krynychne",
      "lon": "39.7383",
      "lat": "47.9528"
  },
  {
      "name": "Kryukivshchyna",
      "lon": "30.3681",
      "lat": "50.3683"
  },
  {
      "name": "Kryve Ozero",
      "lon": "30.3333",
      "lat": "47.9333"
  },
  {
      "name": "Kryvorivnia",
      "lon": "24.8964",
      "lat": "48.1750"
  },
  {
      "name": "Kryvyi Rih",
      "lon": "33.3433",
      "lat": "47.9086"
  },
  {
      "name": "Kryzhopil",
      "lon": "28.8625",
      "lat": "48.3842"
  },
  {
      "name": "Kubei",
      "lon": "28.7475",
      "lat": "45.7925"
  },
  {
      "name": "Kuchakiv",
      "lon": "31.1264",
      "lat": "50.3756"
  },
  {
      "name": "Kuchurhan",
      "lon": "29.9775",
      "lat": "46.7236"
  },
  {
      "name": "Kukavka",
      "lon": "27.7050",
      "lat": "48.6036"
  },
  {
      "name": "Kumachove",
      "lon": "38.2642",
      "lat": "47.6239"
  },
  {
      "name": "Kupiansk",
      "lon": "37.6167",
      "lat": "49.7064"
  },
  {
      "name": "Kurman",
      "lon": "34.3011",
      "lat": "45.5010"
  },
  {
      "name": "Kurylivka",
      "lon": "34.6104",
      "lat": "48.5732"
  },
  {
      "name": "Kushnytsia",
      "lon": "23.2581",
      "lat": "48.4517"
  },
  {
      "name": "Kushuhum",
      "lon": "35.2192",
      "lat": "47.7106"
  },
  {
      "name": "Kuty",
      "lon": "25.1736",
      "lat": "48.2636"
  },
  {
      "name": "Kutyshche",
      "lon": "25.1192",
      "lat": "48.9078"
  },
  {
      "name": "Kvasyliv",
      "lon": "26.2675",
      "lat": "50.5569"
  },
  {
      "name": "Kvitky",
      "lon": "31.2458",
      "lat": "49.3158"
  },
  {
      "name": "Kvitneve",
      "lon": "29.5158",
      "lat": "49.9847"
  },
  {
      "name": "Kyinka",
      "lon": "31.1983",
      "lat": "51.4544"
  },
  {
      "name": "Kyiv",
      "lon": "30.5236",
      "lat": "50.4500"
  },
  {
      "name": "Kyrnasivka",
      "lon": "28.9800",
      "lat": "48.5914"
  },
  {
      "name": "Kyrylivka",
      "lon": "35.3675",
      "lat": "46.3731"
  },
  {
      "name": "Kyslychuvata",
      "lon": "34.7262",
      "lat": "47.8508"
  },
  {
      "name": "Kytaihorod",
      "lon": "29.4969",
      "lat": "48.9667"
  },
  {
      "name": "Ladychin",
      "lon": "25.5703",
      "lat": "49.3778"
  },
  {
      "name": "Ladyzhyn",
      "lon": "29.2167",
      "lat": "48.6667"
  },
  {
      "name": "Lanchyn",
      "lon": "24.7517",
      "lat": "48.5475"
  },
  {
      "name": "Lanivtsi",
      "lon": "26.0782",
      "lat": "49.8644"
  },
  {
      "name": "Lany",
      "lon": "23.8672",
      "lat": "49.6206"
  },
  {
      "name": "Lativka",
      "lon": "30.7114",
      "lat": "46.5642"
  },
  {
      "name": "Lavky",
      "lon": "22.6944",
      "lat": "48.4800"
  },
  {
      "name": "Lazeshchyna",
      "lon": "24.4186",
      "lat": "48.2692"
  },
  {
      "name": "Lazurne",
      "lon": "32.5200",
      "lat": "46.0808"
  },
  {
      "name": "Lazy",
      "lon": "23.6450",
      "lat": "48.0581"
  },
  {
      "name": "Lebedyn",
      "lon": "34.4823",
      "lat": "50.5831"
  },
  {
      "name": "Lemeshivka",
      "lon": "32.0767",
      "lat": "50.3125"
  },
  {
      "name": "Lenkivtsi",
      "lon": "26.7586",
      "lat": "48.5056"
  },
  {
      "name": "Lepetykha",
      "lon": "33.0503",
      "lat": "47.3283"
  },
  {
      "name": "Letychiv",
      "lon": "27.6167",
      "lat": "49.3833"
  },
  {
      "name": "Lisnyky",
      "lon": "30.5158",
      "lat": "50.3039"
  },
  {
      "name": "Lisohirka",
      "lon": "27.4206",
      "lat": "49.3742"
  },
  {
      "name": "Lisova Lysiivka",
      "lon": "28.6114",
      "lat": "49.3647"
  },
  {
      "name": "Lisovi Hrynivtsi",
      "lon": "27.0158",
      "lat": "49.4744"
  },
  {
      "name": "Lisovychi",
      "lon": "30.4664",
      "lat": "49.5131"
  },
  {
      "name": "Lityn",
      "lon": "28.0872",
      "lat": "49.3255"
  },
  {
      "name": "Liubar",
      "lon": "27.7592",
      "lat": "49.9205"
  },
  {
      "name": "Liubashivka",
      "lon": "30.2500",
      "lat": "47.8333"
  },
  {
      "name": "Liubech",
      "lon": "30.6617",
      "lat": "51.7052"
  },
  {
      "name": "Liubotyn",
      "lon": "35.9306",
      "lat": "49.9489"
  },
  {
      "name": "Livadiia",
      "lon": "34.1439",
      "lat": "44.4708"
  },
  {
      "name": "Livyntsi",
      "lon": "26.6081",
      "lat": "48.4081"
  },
  {
      "name": "Lokachi",
      "lon": "24.6372",
      "lat": "50.7383"
  },
  {
      "name": "Lokhvytsya",
      "lon": "33.2652",
      "lat": "50.3610"
  },
  {
      "name": "Loshkarivka",
      "lon": "34.1539",
      "lat": "47.9350"
  },
  {
      "name": "Losynivka",
      "lon": "31.9200",
      "lat": "50.8300"
  },
  {
      "name": "Lozova",
      "lon": "36.3161",
      "lat": "48.8892"
  },
  {
      "name": "Lozova",
      "lon": "28.0108",
      "lat": "48.6728"
  },
  {
      "name": "Lozuvatka",
      "lon": "33.2927",
      "lat": "48.0610"
  },
  {
      "name": "Lozuvatka",
      "lon": "33.8825",
      "lat": "48.4665"
  },
  {
      "name": "Lubny",
      "lon": "32.9869",
      "lat": "50.0186"
  },
  {
      "name": "Luchyste",
      "lon": "34.3711",
      "lat": "44.7436"
  },
  {
      "name": "Luhansk",
      "lon": "39.3333",
      "lat": "48.5833"
  },
  {
      "name": "Luhy",
      "lon": "29.1411",
      "lat": "48.2217"
  },
  {
      "name": "Luhyny",
      "lon": "28.3833",
      "lat": "51.0667"
  },
  {
      "name": "Luka",
      "lon": "33.2907",
      "lat": "50.4602"
  },
  {
      "name": "Lukiv",
      "lon": "24.3475",
      "lat": "51.2333"
  },
  {
      "name": "Lukovo",
      "lon": "23.2108",
      "lat": "48.3197"
  },
  {
      "name": "Lupareve",
      "lon": "31.9794",
      "lat": "46.6969"
  },
  {
      "name": "Lutsk",
      "lon": "25.3244",
      "lat": "50.7478"
  },
  {
      "name": "Lviv",
      "lon": "24.0315",
      "lat": "49.8419"
  },
  {
      "name": "Lychkove",
      "lon": "35.2078",
      "lat": "49.0918"
  },
  {
      "name": "Lykhivka",
      "lon": "33.9228",
      "lat": "48.6874"
  },
  {
      "name": "Lyman",
      "lon": "37.8111",
      "lat": "48.9861"
  },
  {
      "name": "Lyman",
      "lon": "36.4700",
      "lat": "49.5894"
  },
  {
      "name": "Lymanske",
      "lon": "29.9708",
      "lat": "46.6639"
  },
  {
      "name": "Lypcha",
      "lon": "23.3819",
      "lat": "48.2628"
  },
  {
      "name": "Lypetska Poliana",
      "lon": "23.3594",
      "lat": "48.3344"
  },
  {
      "name": "Lypne",
      "lon": "26.0344",
      "lat": "51.0189"
  },
  {
      "name": "Lypovets",
      "lon": "29.0561",
      "lat": "49.2161"
  },
  {
      "name": "Lysets",
      "lon": "24.6047",
      "lat": "48.8717"
  },
  {
      "name": "Lysianka",
      "lon": "30.8207",
      "lat": "49.2542"
  },
  {
      "name": "Lysychansk",
      "lon": "38.4306",
      "lat": "48.9169"
  },
  {
      "name": "Lysychovo",
      "lon": "23.2742",
      "lat": "48.4908"
  },
  {
      "name": "Lytvynivka",
      "lon": "39.4414",
      "lat": "49.3111"
  },
  {
      "name": "Lyubeshiv",
      "lon": "25.4992",
      "lat": "51.7631"
  },
  {
      "name": "Lyublynets’",
      "lon": "24.6167",
      "lat": "51.1833"
  },
  {
      "name": "Lyuboml’",
      "lon": "24.0408",
      "lat": "51.2158"
  },
  {
      "name": "Lyubymivka",
      "lon": "35.1772",
      "lat": "48.3721"
  },
  {
      "name": "Lyutens’ki Budyshcha",
      "lon": "34.2328",
      "lat": "50.1837"
  },
  {
      "name": "Machukhy",
      "lon": "34.4297",
      "lat": "49.5296"
  },
  {
      "name": "Mahdalynivka",
      "lon": "34.9154",
      "lat": "48.9147"
  },
  {
      "name": "Maidan",
      "lon": "23.5019",
      "lat": "48.6117"
  },
  {
      "name": "Maidan",
      "lon": "24.5611",
      "lat": "49.0075"
  },
  {
      "name": "Maidanetske",
      "lon": "30.7100",
      "lat": "48.8169"
  },
  {
      "name": "Makariv",
      "lon": "29.8167",
      "lat": "50.4667"
  },
  {
      "name": "Makariv Yar",
      "lon": "39.7169",
      "lat": "48.5744"
  },
  {
      "name": "Makhnivka",
      "lon": "28.6769",
      "lat": "49.7219"
  },
  {
      "name": "Makiivka",
      "lon": "37.9611",
      "lat": "48.0556"
  },
  {
      "name": "Mala Danylivka",
      "lon": "36.1675",
      "lat": "50.0614"
  },
  {
      "name": "Mala Petrykivka",
      "lon": "34.6603",
      "lat": "48.7141"
  },
  {
      "name": "Mala Uhol’ka",
      "lon": "23.6383",
      "lat": "48.1769"
  },
  {
      "name": "Mala Vyska",
      "lon": "31.6333",
      "lat": "48.6500"
  },
  {
      "name": "Mali Kopani",
      "lon": "32.7289",
      "lat": "46.4356"
  },
  {
      "name": "Malokaterynivka",
      "lon": "35.2591",
      "lat": "47.6570"
  },
  {
      "name": "Malomykolaivka",
      "lon": "39.0219",
      "lat": "48.3069"
  },
  {
      "name": "Malyi Kobeliachok",
      "lon": "34.2180",
      "lat": "49.3429"
  },
  {
      "name": "Malyn",
      "lon": "29.2700",
      "lat": "50.7689"
  },
  {
      "name": "Malyy Khodachkov",
      "lon": "25.8358",
      "lat": "49.4869"
  },
  {
      "name": "Malyy Rakovets’",
      "lon": "23.2064",
      "lat": "48.2642"
  },
  {
      "name": "Manevychi",
      "lon": "25.5503",
      "lat": "51.2925"
  },
  {
      "name": "Manhush",
      "lon": "37.3000",
      "lat": "47.0500"
  },
  {
      "name": "Mankivka",
      "lon": "29.6281",
      "lat": "48.4819"
  },
  {
      "name": "Mardarivka",
      "lon": "29.7333",
      "lat": "47.5333"
  },
  {
      "name": "Marhanets",
      "lon": "34.6167",
      "lat": "47.6480"
  },
  {
      "name": "Marianivka",
      "lon": "33.5294",
      "lat": "48.3118"
  },
  {
      "name": "Mariiampil",
      "lon": "24.8525",
      "lat": "49.0383"
  },
  {
      "name": "Mariupol",
      "lon": "37.5639",
      "lat": "47.1306"
  },
  {
      "name": "Masandra",
      "lon": "34.1833",
      "lat": "44.5167"
  },
  {
      "name": "Mashivka",
      "lon": "34.8758",
      "lat": "49.4449"
  },
  {
      "name": "Matroska",
      "lon": "28.7758",
      "lat": "45.3450"
  },
  {
      "name": "Matviyivka",
      "lon": "35.3046",
      "lat": "47.9026"
  },
  {
      "name": "Mazurivka",
      "lon": "28.8142",
      "lat": "48.6569"
  },
  {
      "name": "Medenychi",
      "lon": "23.7500",
      "lat": "49.4333"
  },
  {
      "name": "Medvyn",
      "lon": "30.7847",
      "lat": "49.3903"
  },
  {
      "name": "Medynia",
      "lon": "24.5769",
      "lat": "49.0917"
  },
  {
      "name": "Medzhybizh",
      "lon": "27.3950",
      "lat": "49.4360"
  },
  {
      "name": "Mel’nyky",
      "lon": "23.9350",
      "lat": "51.5497"
  },
  {
      "name": "Melekyne",
      "lon": "37.3897",
      "lat": "46.9561"
  },
  {
      "name": "Melioratyvne",
      "lon": "35.3477",
      "lat": "48.6222"
  },
  {
      "name": "Melitopol",
      "lon": "35.3667",
      "lat": "46.8333"
  },
  {
      "name": "Melnyky",
      "lon": "32.2969",
      "lat": "49.1433"
  },
  {
      "name": "Mena",
      "lon": "32.2167",
      "lat": "51.5167"
  },
  {
      "name": "Menchykury",
      "lon": "34.8041",
      "lat": "47.0711"
  },
  {
      "name": "Mezhova",
      "lon": "36.7313",
      "lat": "48.2563"
  },
  {
      "name": "Mezhyrich",
      "lon": "26.4750",
      "lat": "50.3011"
  },
  {
      "name": "Mikhailivka",
      "lon": "28.0944",
      "lat": "48.2733"
  },
  {
      "name": "Milove",
      "lon": "40.1306",
      "lat": "49.3778"
  },
  {
      "name": "Miusynsk",
      "lon": "38.9002",
      "lat": "48.0727"
  },
  {
      "name": "Mizhhiria",
      "lon": "23.5019",
      "lat": "48.5286"
  },
  {
      "name": "Mliiv",
      "lon": "31.5364",
      "lat": "49.3475"
  },
  {
      "name": "Mohyliv-Podilskyi",
      "lon": "27.7833",
      "lat": "48.4500"
  },
  {
      "name": "Molochansk",
      "lon": "35.5985",
      "lat": "47.2038"
  },
  {
      "name": "Molodkiv",
      "lon": "24.5085",
      "lat": "48.6568"
  },
  {
      "name": "Molodohvardiisk",
      "lon": "39.6583",
      "lat": "48.3444"
  },
  {
      "name": "Monastyrets",
      "lon": "23.4278",
      "lat": "48.2928"
  },
  {
      "name": "Monastyryshche",
      "lon": "29.8011",
      "lat": "48.9900"
  },
  {
      "name": "Monastyryska",
      "lon": "25.1694",
      "lat": "49.0889"
  },
  {
      "name": "Morshyn",
      "lon": "23.8725",
      "lat": "49.1550"
  },
  {
      "name": "Morske",
      "lon": "34.8014",
      "lat": "44.8306"
  },
  {
      "name": "Moshanets",
      "lon": "26.6939",
      "lat": "48.4733"
  },
  {
      "name": "Moshny",
      "lon": "31.7442",
      "lat": "49.5117"
  },
  {
      "name": "Moshoryne",
      "lon": "32.7219",
      "lat": "48.6158"
  },
  {
      "name": "Mostove",
      "lon": "30.9883",
      "lat": "47.4172"
  },
  {
      "name": "Mukacheve",
      "lon": "22.7136",
      "lat": "48.4414"
  },
  {
      "name": "Murovani Kurylivtsi",
      "lon": "27.5150",
      "lat": "48.7222"
  },
  {
      "name": "Myhove",
      "lon": "25.3806",
      "lat": "48.1500"
  },
  {
      "name": "Mykhailivka",
      "lon": "35.2248",
      "lat": "47.2717"
  },
  {
      "name": "Mykhailivka",
      "lon": "38.9025",
      "lat": "48.4964"
  },
  {
      "name": "Mykhailivka",
      "lon": "28.2906",
      "lat": "48.8075"
  },
  {
      "name": "Mykhailivka",
      "lon": "29.5447",
      "lat": "48.8350"
  },
  {
      "name": "Mykhailivka",
      "lon": "32.1781",
      "lat": "49.9242"
  },
  {
      "name": "Mykhailivtsi",
      "lon": "27.5211",
      "lat": "48.8756"
  },
  {
      "name": "Mykhailo-Kotsiubynske",
      "lon": "31.0772",
      "lat": "51.4550"
  },
  {
      "name": "Mykhaylivka",
      "lon": "35.2650",
      "lat": "47.9527"
  },
  {
      "name": "Mykolaiv",
      "lon": "32.0000",
      "lat": "46.9667"
  },
  {
      "name": "Mykolaiv",
      "lon": "23.9814",
      "lat": "49.5266"
  },
  {
      "name": "Mykolaivka",
      "lon": "34.3820",
      "lat": "50.9422"
  },
  {
      "name": "Mykolaivka",
      "lon": "34.1545",
      "lat": "47.9850"
  },
  {
      "name": "Mykolaivka",
      "lon": "30.2489",
      "lat": "47.5322"
  },
  {
      "name": "Mykolaivka",
      "lon": "34.6806",
      "lat": "48.3567"
  },
  {
      "name": "Mykolaivka",
      "lon": "34.7086",
      "lat": "48.5437"
  },
  {
      "name": "Mykolaivka",
      "lon": "30.7528",
      "lat": "47.5389"
  },
  {
      "name": "Mykolayiv",
      "lon": "24.9692",
      "lat": "50.3400"
  },
  {
      "name": "Mykolayivka",
      "lon": "36.3086",
      "lat": "48.3823"
  },
  {
      "name": "Mykolayivka",
      "lon": "35.1796",
      "lat": "48.7867"
  },
  {
      "name": "Myrhorod",
      "lon": "33.6124",
      "lat": "49.9640"
  },
  {
      "name": "Myrne",
      "lon": "35.4431",
      "lat": "46.9502"
  },
  {
      "name": "Myrne",
      "lon": "24.8939",
      "lat": "50.5928"
  },
  {
      "name": "Myrnohrad",
      "lon": "37.2614",
      "lat": "48.3022"
  },
  {
      "name": "Myroliubivka",
      "lon": "28.8386",
      "lat": "48.2586"
  },
  {
      "name": "Myronivka",
      "lon": "30.9833",
      "lat": "49.6500"
  },
  {
      "name": "Myropil",
      "lon": "27.7058",
      "lat": "50.1075"
  },
  {
      "name": "Myropillya",
      "lon": "35.2603",
      "lat": "51.0225"
  },
  {
      "name": "Mytchenky",
      "lon": "32.9500",
      "lat": "51.2833"
  },
  {
      "name": "Mytlashivka",
      "lon": "32.3122",
      "lat": "49.9764"
  },
  {
      "name": "Nadezhdivka",
      "lon": "32.3617",
      "lat": "46.7067"
  },
  {
      "name": "Nadvirna",
      "lon": "24.5833",
      "lat": "48.6333"
  },
  {
      "name": "Nahirne",
      "lon": "23.2206",
      "lat": "49.4817"
  },
  {
      "name": "Nahiryanka",
      "lon": "25.7342",
      "lat": "48.9308"
  },
  {
      "name": "Napadovka",
      "lon": "26.0357",
      "lat": "49.8852"
  },
  {
      "name": "Naraivka",
      "lon": "29.6842",
      "lat": "48.9019"
  },
  {
      "name": "Narodychi",
      "lon": "29.0823",
      "lat": "51.2029"
  },
  {
      "name": "Nasypne",
      "lon": "35.2958",
      "lat": "45.0458"
  },
  {
      "name": "Nedaivoda",
      "lon": "33.3758",
      "lat": "48.1400"
  },
  {
      "name": "Nedryhayliv",
      "lon": "33.8799",
      "lat": "50.8332"
  },
  {
      "name": "Nehrovets",
      "lon": "23.6406",
      "lat": "48.4617"
  },
  {
      "name": "Nehrovo",
      "lon": "22.9094",
      "lat": "48.3719"
  },
  {
      "name": "Nekhvoroshch",
      "lon": "28.9561",
      "lat": "49.9633"
  },
  {
      "name": "Nelypivtsi",
      "lon": "26.9200",
      "lat": "48.4200"
  },
  {
      "name": "Nemishayeve",
      "lon": "30.0925",
      "lat": "50.5624"
  },
  {
      "name": "Nemyriv",
      "lon": "28.8439",
      "lat": "48.9794"
  },
  {
      "name": "Nemyriv",
      "lon": "23.4344",
      "lat": "50.1039"
  },
  {
      "name": "Nerubaiske",
      "lon": "30.6306",
      "lat": "46.5467"
  },
  {
      "name": "Netishyn",
      "lon": "26.6400",
      "lat": "50.3300"
  },
  {
      "name": "Nikita",
      "lon": "34.2353",
      "lat": "44.5111"
  },
  {
      "name": "Nikolske",
      "lon": "37.3128",
      "lat": "47.2019"
  },
  {
      "name": "Nikopol",
      "lon": "34.3575",
      "lat": "47.5772"
  },
  {
      "name": "Nizhyn",
      "lon": "31.9000",
      "lat": "51.0500"
  },
  {
      "name": "Nosivka",
      "lon": "31.5800",
      "lat": "50.9300"
  },
  {
      "name": "Nova Borova",
      "lon": "28.6367",
      "lat": "50.6922"
  },
  {
      "name": "Nova Dacha",
      "lon": "36.2110",
      "lat": "48.5494"
  },
  {
      "name": "Nova Haleshchyna",
      "lon": "33.7584",
      "lat": "49.1688"
  },
  {
      "name": "Nova Hreblia",
      "lon": "28.7644",
      "lat": "49.4667"
  },
  {
      "name": "Nova Kakhovka",
      "lon": "33.3667",
      "lat": "46.7667"
  },
  {
      "name": "Nova Maiachka",
      "lon": "33.2283",
      "lat": "46.6033"
  },
  {
      "name": "Nova Odesa",
      "lon": "31.7833",
      "lat": "47.3167"
  },
  {
      "name": "Nova Ushytsia",
      "lon": "27.2672",
      "lat": "48.8330"
  },
  {
      "name": "Novgorodskoye",
      "lon": "37.8839",
      "lat": "48.3156"
  },
  {
      "name": "Novhorod-Siverskyi",
      "lon": "33.2667",
      "lat": "51.9833"
  },
  {
      "name": "Novhorodka",
      "lon": "32.6466",
      "lat": "48.3565"
  },
  {
      "name": "Novi Bilokorovychi",
      "lon": "28.0519",
      "lat": "51.0475"
  },
  {
      "name": "Novi Kryvotuly",
      "lon": "24.9039",
      "lat": "48.7936"
  },
  {
      "name": "Novi Sanzhary",
      "lon": "34.3162",
      "lat": "49.3354"
  },
  {
      "name": "Novoaidar",
      "lon": "39.0194",
      "lat": "48.9592"
  },
  {
      "name": "Novoarkhanhelsk",
      "lon": "30.8186",
      "lat": "48.6589"
  },
  {
      "name": "Novoazovsk",
      "lon": "38.0833",
      "lat": "47.1167"
  },
  {
      "name": "Novoderkul",
      "lon": "39.6203",
      "lat": "49.1294"
  },
  {
      "name": "Novoekonomichne",
      "lon": "37.3319",
      "lat": "48.3278"
  },
  {
      "name": "Novohrad-Volynskyi",
      "lon": "27.6333",
      "lat": "50.5833"
  },
  {
      "name": "Novohuivynske",
      "lon": "28.6850",
      "lat": "50.2022"
  },
  {
      "name": "Novohupalivka",
      "lon": "35.4233",
      "lat": "48.0238"
  },
  {
      "name": "Novokrasnyanka",
      "lon": "38.2431",
      "lat": "49.1433"
  },
  {
      "name": "Novomoskovsk",
      "lon": "35.2239",
      "lat": "48.6328"
  },
  {
      "name": "Novomykolaivka",
      "lon": "34.3771",
      "lat": "48.5556"
  },
  {
      "name": "Novomykolaivka",
      "lon": "34.8618",
      "lat": "48.3092"
  },
  {
      "name": "Novomykolayivka",
      "lon": "35.9099",
      "lat": "47.9779"
  },
  {
      "name": "Novomyrhorod",
      "lon": "31.6500",
      "lat": "48.7833"
  },
  {
      "name": "Novooleksandrivka",
      "lon": "34.9969",
      "lat": "48.3454"
  },
  {
      "name": "Novooleksandrivka",
      "lon": "39.2789",
      "lat": "49.1336"
  },
  {
      "name": "Novoozerne",
      "lon": "33.1200",
      "lat": "45.3858"
  },
  {
      "name": "Novopavlivka",
      "lon": "36.7827",
      "lat": "48.1376"
  },
  {
      "name": "Novopetrivka",
      "lon": "36.8944",
      "lat": "46.8266"
  },
  {
      "name": "Novopidhorodne",
      "lon": "36.9008",
      "lat": "48.2482"
  },
  {
      "name": "Novopillia",
      "lon": "33.5278",
      "lat": "47.9539"
  },
  {
      "name": "Novopokrovka",
      "lon": "34.6132",
      "lat": "48.0552"
  },
  {
      "name": "Novopoltavka",
      "lon": "32.5011",
      "lat": "47.5483"
  },
  {
      "name": "Novosamarka",
      "lon": "29.5244",
      "lat": "47.5081"
  },
  {
      "name": "Novoselytsia",
      "lon": "26.2667",
      "lat": "48.2167"
  },
  {
      "name": "Novoselytsia",
      "lon": "26.9814",
      "lat": "48.4333"
  },
  {
      "name": "Novosilky",
      "lon": "30.4544",
      "lat": "50.3544"
  },
  {
      "name": "Novotaromske",
      "lon": "34.6784",
      "lat": "48.4015"
  },
  {
      "name": "Novotroitske",
      "lon": "34.3335",
      "lat": "46.3559"
  },
  {
      "name": "Novoukrainka",
      "lon": "31.5269",
      "lat": "48.3156"
  },
  {
      "name": "Novovasylivka",
      "lon": "35.7543",
      "lat": "46.8314"
  },
  {
      "name": "Novovolynsk",
      "lon": "24.1667",
      "lat": "50.7333"
  },
  {
      "name": "Novovorontsovka",
      "lon": "33.9230",
      "lat": "47.4962"
  },
  {
      "name": "Novoyavorovskoye",
      "lon": "23.5731",
      "lat": "49.9311"
  },
  {
      "name": "Novozarivka",
      "lon": "38.1311",
      "lat": "47.6406"
  },
  {
      "name": "Novyi Bilous",
      "lon": "31.1853",
      "lat": "51.5356"
  },
  {
      "name": "Novyi Buh",
      "lon": "32.5000",
      "lat": "47.6833"
  },
  {
      "name": "Novyi Kalyniv",
      "lon": "23.3044",
      "lat": "49.5606"
  },
  {
      "name": "Novyi Kropyvnyk",
      "lon": "23.3103",
      "lat": "49.2167"
  },
  {
      "name": "Novyi Rozdil",
      "lon": "24.1300",
      "lat": "49.4703"
  },
  {
      "name": "Novyi Yarychiv",
      "lon": "24.3033",
      "lat": "49.9019"
  },
  {
      "name": "Novyy Svit",
      "lon": "34.9128",
      "lat": "44.8292"
  },
  {
      "name": "Nyzhni Sirohozy",
      "lon": "34.3760",
      "lat": "46.8395"
  },
  {
      "name": "Nyzhnia Krynka",
      "lon": "38.1606",
      "lat": "48.1144"
  },
  {
      "name": "Nyzhnie Selyshche",
      "lon": "23.4475",
      "lat": "48.1997"
  },
  {
      "name": "Nyzhnii Bystryi",
      "lon": "23.5272",
      "lat": "48.3628"
  },
  {
      "name": "Nyzhniy Dubovets’",
      "lon": "23.9089",
      "lat": "48.1592"
  },
  {
      "name": "Nyzhnohirskyi",
      "lon": "34.7344",
      "lat": "45.4464"
  },
  {
      "name": "Nyzhnya Syrovatka",
      "lon": "34.8382",
      "lat": "50.7814"
  },
  {
      "name": "Obertyn",
      "lon": "25.1700",
      "lat": "48.6894"
  },
  {
      "name": "Obolon",
      "lon": "32.8765",
      "lat": "49.6040"
  },
  {
      "name": "Obroshino",
      "lon": "23.8686",
      "lat": "49.7853"
  },
  {
      "name": "Obukhiv",
      "lon": "30.6167",
      "lat": "50.1000"
  },
  {
      "name": "Obukhivka",
      "lon": "34.8664",
      "lat": "48.5442"
  },
  {
      "name": "Ochakiv",
      "lon": "31.5392",
      "lat": "46.6186"
  },
  {
      "name": "Odesa",
      "lon": "30.7326",
      "lat": "46.4775"
  },
  {
      "name": "Okhtyrka",
      "lon": "34.9016",
      "lat": "50.3074"
  },
  {
      "name": "Oleksandriia",
      "lon": "33.1167",
      "lat": "48.6667"
  },
  {
      "name": "Oleksandriiske",
      "lon": "32.9889",
      "lat": "48.6019"
  },
  {
      "name": "Oleksandrivka",
      "lon": "37.5750",
      "lat": "47.9208"
  },
  {
      "name": "Oleksandrivka",
      "lon": "35.2304",
      "lat": "48.5173"
  },
  {
      "name": "Oleksandrivka",
      "lon": "33.5318",
      "lat": "47.7329"
  },
  {
      "name": "Oleksandrivka",
      "lon": "35.4897",
      "lat": "46.5371"
  },
  {
      "name": "Oleksandrivka",
      "lon": "32.2333",
      "lat": "48.9667"
  },
  {
      "name": "Oleksandrivsk",
      "lon": "39.1833",
      "lat": "48.5833"
  },
  {
      "name": "Oleksiivka",
      "lon": "34.2377",
      "lat": "47.5943"
  },
  {
      "name": "Oleksiivka",
      "lon": "36.9497",
      "lat": "48.0186"
  },
  {
      "name": "Olenivka",
      "lon": "37.6500",
      "lat": "47.8333"
  },
  {
      "name": "Olenivka",
      "lon": "32.5333",
      "lat": "45.3833"
  },
  {
      "name": "Olenivka",
      "lon": "34.9841",
      "lat": "48.9372"
  },
  {
      "name": "Oleshky",
      "lon": "32.7167",
      "lat": "46.6167"
  },
  {
      "name": "Olevsk",
      "lon": "27.6481",
      "lat": "51.2278"
  },
  {
      "name": "Oleyëvo-Korolëvka",
      "lon": "25.9935",
      "lat": "48.7421"
  },
  {
      "name": "Olyka",
      "lon": "25.8167",
      "lat": "50.7167"
  },
  {
      "name": "Onufriivka",
      "lon": "33.4464",
      "lat": "48.9023"
  },
  {
      "name": "Opishnya",
      "lon": "34.6120",
      "lat": "49.9564"
  },
  {
      "name": "Opytne",
      "lon": "38.0169",
      "lat": "48.5542"
  },
  {
      "name": "Orativ",
      "lon": "29.5289",
      "lat": "49.1876"
  },
  {
      "name": "Orikhiv",
      "lon": "35.7849",
      "lat": "47.5677"
  },
  {
      "name": "Orilka",
      "lon": "36.0075",
      "lat": "48.9805"
  },
  {
      "name": "Orzhytsia",
      "lon": "32.7015",
      "lat": "49.7910"
  },
  {
      "name": "Osiy",
      "lon": "23.1194",
      "lat": "48.3611"
  },
  {
      "name": "Ostapovo",
      "lon": "26.0358",
      "lat": "49.3786"
  },
  {
      "name": "Oster",
      "lon": "30.8811",
      "lat": "50.9486"
  },
  {
      "name": "Ostriv",
      "lon": "24.1697",
      "lat": "50.3939"
  },
  {
      "name": "Ostroh",
      "lon": "26.5167",
      "lat": "50.3333"
  },
  {
      "name": "Osynove",
      "lon": "39.0675",
      "lat": "49.5636"
  },
  {
      "name": "Otyniia",
      "lon": "24.8569",
      "lat": "48.7339"
  },
  {
      "name": "Ovidiopol",
      "lon": "30.4333",
      "lat": "46.2667"
  },
  {
      "name": "Ovruch",
      "lon": "28.8081",
      "lat": "51.3244"
  },
  {
      "name": "Ozaryntsi",
      "lon": "27.8069",
      "lat": "48.5406"
  },
  {
      "name": "Ozeriany",
      "lon": "32.9039",
      "lat": "50.4957"
  },
  {
      "name": "Ozerne",
      "lon": "28.7361",
      "lat": "50.1794"
  },
  {
      "name": "Palahychi",
      "lon": "24.9956",
      "lat": "48.9028"
  },
  {
      "name": "Palanka",
      "lon": "30.0983",
      "lat": "48.7294"
  },
  {
      "name": "Parafiivka",
      "lon": "32.6464",
      "lat": "50.8850"
  },
  {
      "name": "Partenit",
      "lon": "34.3397",
      "lat": "44.5764"
  },
  {
      "name": "Partyzanske",
      "lon": "34.8143",
      "lat": "48.5871"
  },
  {
      "name": "Pashkivtsi",
      "lon": "27.1319",
      "lat": "49.7686"
  },
  {
      "name": "Pasika",
      "lon": "22.9058",
      "lat": "48.5292"
  },
  {
      "name": "Pasytsely",
      "lon": "29.6500",
      "lat": "47.8364"
  },
  {
      "name": "Pavlivka",
      "lon": "28.4653",
      "lat": "49.4411"
  },
  {
      "name": "Pavlohrad",
      "lon": "35.8700",
      "lat": "48.5200"
  },
  {
      "name": "Pechenihy",
      "lon": "36.9364",
      "lat": "49.8647"
  },
  {
      "name": "Pechenizhyn",
      "lon": "24.8892",
      "lat": "48.5100"
  },
  {
      "name": "Perebykivtsi",
      "lon": "26.1358",
      "lat": "48.5861"
  },
  {
      "name": "Perechyn",
      "lon": "22.4667",
      "lat": "48.7333"
  },
  {
      "name": "Peredilske",
      "lon": "39.1489",
      "lat": "48.7569"
  },
  {
      "name": "Perehinske",
      "lon": "24.1819",
      "lat": "48.8103"
  },
  {
      "name": "Peremoha",
      "lon": "33.9418",
      "lat": "51.5482"
  },
  {
      "name": "Peremyl",
      "lon": "25.1642",
      "lat": "50.3961"
  },
  {
      "name": "Peremyshliany",
      "lon": "24.5594",
      "lat": "49.6700"
  },
  {
      "name": "Pereshchepyne",
      "lon": "35.3598",
      "lat": "49.0179"
  },
  {
      "name": "Perevalsk",
      "lon": "38.8167",
      "lat": "48.4333"
  },
  {
      "name": "Pereyaslav-Khmel’nyts’kyy",
      "lon": "31.4450",
      "lat": "50.0650"
  },
  {
      "name": "Perkivtsi",
      "lon": "26.6561",
      "lat": "48.4489"
  },
  {
      "name": "Pershotravensk",
      "lon": "36.4044",
      "lat": "48.3464"
  },
  {
      "name": "Pershotravensk",
      "lon": "27.6339",
      "lat": "50.2011"
  },
  {
      "name": "Pershotravneve",
      "lon": "28.8684",
      "lat": "51.3929"
  },
  {
      "name": "Pervomaisk",
      "lon": "38.5167",
      "lat": "48.6333"
  },
  {
      "name": "Pervomaisk",
      "lon": "30.8500",
      "lat": "48.0500"
  },
  {
      "name": "Pervomaiske",
      "lon": "33.8608",
      "lat": "45.7169"
  },
  {
      "name": "Pervomaiskyi",
      "lon": "36.2142",
      "lat": "49.3869"
  },
  {
      "name": "Pervomaiskyi",
      "lon": "38.7875",
      "lat": "47.9736"
  },
  {
      "name": "Petropavlivka",
      "lon": "36.4394",
      "lat": "48.4549"
  },
  {
      "name": "Petropavlivka",
      "lon": "39.2628",
      "lat": "48.8044"
  },
  {
      "name": "Petropavlivs’ka Borshchahivka",
      "lon": "30.3439",
      "lat": "50.4378"
  },
  {
      "name": "Petrove",
      "lon": "33.2682",
      "lat": "48.3312"
  },
  {
      "name": "Petrushiv",
      "lon": "23.8064",
      "lat": "48.0767"
  },
  {
      "name": "Petrykivka",
      "lon": "34.6288",
      "lat": "48.7281"
  },
  {
      "name": "Piatkivka",
      "lon": "29.3833",
      "lat": "48.3189"
  },
  {
      "name": "Piatyhory",
      "lon": "29.9089",
      "lat": "49.3397"
  },
  {
      "name": "Piatykhatky",
      "lon": "33.7034",
      "lat": "48.4126"
  },
  {
      "name": "Pidhaitsi",
      "lon": "25.1333",
      "lat": "49.2667"
  },
  {
      "name": "Pidhorodna",
      "lon": "30.8895",
      "lat": "48.1070"
  },
  {
      "name": "Pidhorodne",
      "lon": "35.0966",
      "lat": "48.5737"
  },
  {
      "name": "Pidlisne",
      "lon": "32.2531",
      "lat": "48.7842"
  },
  {
      "name": "Pidplesha",
      "lon": "23.8003",
      "lat": "48.1314"
  },
  {
      "name": "Pidvolochysk",
      "lon": "26.1467",
      "lat": "49.5311"
  },
  {
      "name": "Piilo",
      "lon": "24.3036",
      "lat": "49.0028"
  },
  {
      "name": "Pishcha",
      "lon": "23.8100",
      "lat": "51.6050"
  },
  {
      "name": "Pishchane",
      "lon": "38.9511",
      "lat": "49.2692"
  },
  {
      "name": "Pishchanka",
      "lon": "28.8889",
      "lat": "48.2058"
  },
  {
      "name": "Piskivka",
      "lon": "29.5950",
      "lat": "50.7078"
  },
  {
      "name": "Pivdenne",
      "lon": "36.0687",
      "lat": "49.8849"
  },
  {
      "name": "Pivdenne",
      "lon": "34.3610",
      "lat": "47.6674"
  },
  {
      "name": "Plodorodne",
      "lon": "35.3162",
      "lat": "47.1651"
  },
  {
      "name": "Ploske",
      "lon": "31.1003",
      "lat": "50.5378"
  },
  {
      "name": "Pluzhnoye",
      "lon": "26.5628",
      "lat": "50.1803"
  },
  {
      "name": "Pnikut",
      "lon": "23.1383",
      "lat": "49.7110"
  },
  {
      "name": "Poberezhzhia",
      "lon": "24.8225",
      "lat": "49.0200"
  },
  {
      "name": "Podilsk",
      "lon": "29.5350",
      "lat": "47.7419"
  },
  {
      "name": "Podishor",
      "lon": "23.8658",
      "lat": "48.0422"
  },
  {
      "name": "Podove",
      "lon": "34.1403",
      "lat": "46.5561"
  },
  {
      "name": "Pohreby",
      "lon": "32.1889",
      "lat": "50.0950"
  },
  {
      "name": "Pohrebyshche",
      "lon": "29.2733",
      "lat": "49.4869"
  },
  {
      "name": "Pokrov",
      "lon": "34.0811",
      "lat": "47.6632"
  },
  {
      "name": "Pokrovsk",
      "lon": "37.1833",
      "lat": "48.2833"
  },
  {
      "name": "Pokrovske",
      "lon": "36.2367",
      "lat": "47.9853"
  },
  {
      "name": "Poliana",
      "lon": "22.9697",
      "lat": "48.6253"
  },
  {
      "name": "Polianka",
      "lon": "27.6881",
      "lat": "50.2584"
  },
  {
      "name": "Polohy",
      "lon": "36.2611",
      "lat": "47.4796"
  },
  {
      "name": "Polohy",
      "lon": "30.1147",
      "lat": "49.9156"
  },
  {
      "name": "Polovynkyne",
      "lon": "38.9150",
      "lat": "49.2250"
  },
  {
      "name": "Poltava",
      "lon": "34.5686",
      "lat": "49.5744"
  },
  {
      "name": "Poltavka",
      "lon": "36.4821",
      "lat": "47.7192"
  },
  {
      "name": "Pomichna",
      "lon": "31.4167",
      "lat": "48.2500"
  },
  {
      "name": "Pomynyk",
      "lon": "30.2872",
      "lat": "48.9017"
  },
  {
      "name": "Poninka",
      "lon": "27.5333",
      "lat": "50.1833"
  },
  {
      "name": "Popasne",
      "lon": "35.5320",
      "lat": "48.8139"
  },
  {
      "name": "Popeli",
      "lon": "23.3850",
      "lat": "49.3092"
  },
  {
      "name": "Popelnaste",
      "lon": "33.7131",
      "lat": "48.6611"
  },
  {
      "name": "Popilnia",
      "lon": "29.4433",
      "lat": "49.9664"
  },
  {
      "name": "Popivtsi",
      "lon": "27.8334",
      "lat": "48.9033"
  },
  {
      "name": "Potashnia",
      "lon": "29.6122",
      "lat": "48.3131"
  },
  {
      "name": "Potik",
      "lon": "31.0542",
      "lat": "49.7622"
  },
  {
      "name": "Potoky",
      "lon": "33.5784",
      "lat": "49.0973"
  },
  {
      "name": "Preobrazhenka",
      "lon": "35.8038",
      "lat": "47.5784"
  },
  {
      "name": "Preobrazhenka",
      "lon": "34.6129",
      "lat": "48.9716"
  },
  {
      "name": "Preslav",
      "lon": "36.2135",
      "lat": "46.6879"
  },
  {
      "name": "Priadivka",
      "lon": "34.7067",
      "lat": "48.9198"
  },
  {
      "name": "Pridberezzia",
      "lon": "24.6186",
      "lat": "50.5417"
  },
  {
      "name": "Pristromy",
      "lon": "31.4311",
      "lat": "50.2253"
  },
  {
      "name": "Prosyana",
      "lon": "36.3743",
      "lat": "48.1174"
  },
  {
      "name": "Pryazovske",
      "lon": "35.6416",
      "lat": "46.7378"
  },
  {
      "name": "Prybuzhzhia",
      "lon": "31.2422",
      "lat": "47.6719"
  },
  {
      "name": "Prydniprovske",
      "lon": "34.4506",
      "lat": "47.6182"
  },
  {
      "name": "Prykolotne",
      "lon": "37.3367",
      "lat": "50.1586"
  },
  {
      "name": "Pryluky",
      "lon": "32.4000",
      "lat": "50.6000"
  },
  {
      "name": "Prymorsk",
      "lon": "36.3596",
      "lat": "46.7333"
  },
  {
      "name": "Prymorske",
      "lon": "35.2943",
      "lat": "47.6244"
  },
  {
      "name": "Prymorske",
      "lon": "37.9439",
      "lat": "47.3208"
  },
  {
      "name": "Pryshyb",
      "lon": "35.3239",
      "lat": "47.2564"
  },
  {
      "name": "Pryshyb",
      "lon": "36.7510",
      "lat": "49.5115"
  },
  {
      "name": "Pryvillya",
      "lon": "38.2948",
      "lat": "48.9999"
  },
  {
      "name": "Pryvilne",
      "lon": "34.7188",
      "lat": "48.2099"
  },
  {
      "name": "Pryvitne",
      "lon": "34.6778",
      "lat": "44.8222"
  },
  {
      "name": "Pryvitne",
      "lon": "24.7489",
      "lat": "50.6372"
  },
  {
      "name": "Puhachivka",
      "lon": "25.6192",
      "lat": "50.5669"
  },
  {
      "name": "Pulyny",
      "lon": "28.2778",
      "lat": "50.4664"
  },
  {
      "name": "Pustomyty",
      "lon": "23.9108",
      "lat": "49.7139"
  },
  {
      "name": "Putyla",
      "lon": "25.0908",
      "lat": "47.9919"
  },
  {
      "name": "Putyvl",
      "lon": "33.8686",
      "lat": "51.3347"
  },
  {
      "name": "Pysarivka",
      "lon": "28.3956",
      "lat": "48.3264"
  },
  {
      "name": "Pysarivka",
      "lon": "26.4458",
      "lat": "49.5200"
  },
  {
      "name": "Pysarivka",
      "lon": "28.6011",
      "lat": "49.1939"
  },
  {
      "name": "Pysmenne",
      "lon": "35.8057",
      "lat": "48.2030"
  },
  {
      "name": "Rachky",
      "lon": "28.9058",
      "lat": "48.9933"
  },
  {
      "name": "Radisne",
      "lon": "30.3397",
      "lat": "46.9997"
  },
  {
      "name": "Radomyshl",
      "lon": "29.2333",
      "lat": "50.4947"
  },
  {
      "name": "Radovel",
      "lon": "27.8356",
      "lat": "51.1489"
  },
  {
      "name": "Radushne",
      "lon": "33.5029",
      "lat": "47.8220"
  },
  {
      "name": "Radyvyliv",
      "lon": "25.2500",
      "lat": "50.1333"
  },
  {
      "name": "Rakhiv",
      "lon": "24.2167",
      "lat": "48.0500"
  },
  {
      "name": "Rashkiv",
      "lon": "26.2689",
      "lat": "48.5111"
  },
  {
      "name": "Ratne",
      "lon": "24.5333",
      "lat": "51.6500"
  },
  {
      "name": "Rava-Rus’ka",
      "lon": "23.6167",
      "lat": "50.2500"
  },
  {
      "name": "Razdory",
      "lon": "35.7045",
      "lat": "48.3285"
  },
  {
      "name": "Reia",
      "lon": "28.6219",
      "lat": "50.0219"
  },
  {
      "name": "Reni",
      "lon": "28.2833",
      "lat": "45.4500"
  },
  {
      "name": "Repuzhyntsi",
      "lon": "25.7931",
      "lat": "48.6531"
  },
  {
      "name": "Reshetylivka",
      "lon": "34.0763",
      "lat": "49.5636"
  },
  {
      "name": "Richytsya",
      "lon": "24.6575",
      "lat": "51.7589"
  },
  {
      "name": "Rivne",
      "lon": "26.2514",
      "lat": "50.6197"
  },
  {
      "name": "Rivne",
      "lon": "31.7492",
      "lat": "48.2403"
  },
  {
      "name": "Rivne",
      "lon": "34.7569",
      "lat": "46.3661"
  },
  {
      "name": "Rogozno",
      "lon": "23.3397",
      "lat": "49.8747"
  },
  {
      "name": "Rohatyn",
      "lon": "24.6167",
      "lat": "49.4167"
  },
  {
      "name": "Roishche",
      "lon": "31.2636",
      "lat": "51.6539"
  },
  {
      "name": "Rokyni",
      "lon": "25.2833",
      "lat": "50.8333"
  },
  {
      "name": "Rokytne",
      "lon": "30.4751",
      "lat": "49.6897"
  },
  {
      "name": "Romaniv",
      "lon": "27.9392",
      "lat": "50.1517"
  },
  {
      "name": "Romny",
      "lon": "33.4879",
      "lat": "50.7428"
  },
  {
      "name": "Ropcha",
      "lon": "25.7925",
      "lat": "48.1175"
  },
  {
      "name": "Rosishka",
      "lon": "24.0697",
      "lat": "47.9850"
  },
  {
      "name": "Rososhany",
      "lon": "26.9994",
      "lat": "48.3986"
  },
  {
      "name": "Rotmistrivka",
      "lon": "31.7158",
      "lat": "49.1489"
  },
  {
      "name": "Rovenky",
      "lon": "39.3667",
      "lat": "48.0833"
  },
  {
      "name": "Rozdilna",
      "lon": "30.0773",
      "lat": "46.8473"
  },
  {
      "name": "Rozdolne",
      "lon": "33.4909",
      "lat": "45.7702"
  },
  {
      "name": "Rozhniativ",
      "lon": "24.1585",
      "lat": "48.9354"
  },
  {
      "name": "Rozhyshche",
      "lon": "25.2700",
      "lat": "50.9131"
  },
  {
      "name": "Rozivka",
      "lon": "37.0694",
      "lat": "47.3929"
  },
  {
      "name": "Rozsosha",
      "lon": "26.8803",
      "lat": "49.3392"
  },
  {
      "name": "Rozsoshentsi",
      "lon": "34.5042",
      "lat": "49.5406"
  },
  {
      "name": "Rozvazh",
      "lon": "26.5150",
      "lat": "50.3669"
  },
  {
      "name": "Rubanivka",
      "lon": "34.1694",
      "lat": "46.9953"
  },
  {
      "name": "Rubizhne",
      "lon": "38.3667",
      "lat": "49.0167"
  },
  {
      "name": "Rudkivka",
      "lon": "31.2964",
      "lat": "50.7700"
  },
  {
      "name": "Rudno",
      "lon": "23.8747",
      "lat": "49.8404"
  },
  {
      "name": "Rudnyky",
      "lon": "23.9136",
      "lat": "49.4489"
  },
  {
      "name": "Rudnyky",
      "lon": "25.7619",
      "lat": "51.0336"
  },
  {
      "name": "Rudnytsia",
      "lon": "28.9333",
      "lat": "48.2667"
  },
  {
      "name": "Ruska Mokra",
      "lon": "23.9008",
      "lat": "48.3483"
  },
  {
      "name": "Rusov",
      "lon": "25.5250",
      "lat": "48.5153"
  },
  {
      "name": "Ruzhyn",
      "lon": "29.2187",
      "lat": "49.7217"
  },
  {
      "name": "Rybakivka",
      "lon": "31.3514",
      "lat": "46.6203"
  },
  {
      "name": "Rzhyshchiv",
      "lon": "31.0436",
      "lat": "49.9611"
  },
  {
      "name": "Sabatynivka",
      "lon": "30.1844",
      "lat": "48.1783"
  },
  {
      "name": "Sadky",
      "lon": "33.4602",
      "lat": "49.0090"
  },
  {
      "name": "Sadove",
      "lon": "29.2742",
      "lat": "46.0233"
  },
  {
      "name": "Saivka",
      "lon": "33.8810",
      "lat": "48.3457"
  },
  {
      "name": "Saksahan",
      "lon": "33.8406",
      "lat": "48.3468"
  },
  {
      "name": "Saky",
      "lon": "33.5772",
      "lat": "45.1336"
  },
  {
      "name": "Samarske",
      "lon": "36.4621",
      "lat": "48.4799"
  },
  {
      "name": "Samary-Orikhovi",
      "lon": "24.6633",
      "lat": "51.8517"
  },
  {
      "name": "Sambir",
      "lon": "23.2000",
      "lat": "49.5167"
  },
  {
      "name": "Samchyky",
      "lon": "27.3869",
      "lat": "49.7592"
  },
  {
      "name": "Samhorodok",
      "lon": "28.8417",
      "lat": "49.5306"
  },
  {
      "name": "Sarata",
      "lon": "29.6631",
      "lat": "46.0232"
  },
  {
      "name": "Sarazhynka",
      "lon": "29.4475",
      "lat": "48.0878"
  },
  {
      "name": "Sarny",
      "lon": "26.6331",
      "lat": "51.3269"
  },
  {
      "name": "Satanov",
      "lon": "26.2667",
      "lat": "49.2500"
  },
  {
      "name": "Savran",
      "lon": "30.0794",
      "lat": "48.1300"
  },
  {
      "name": "Savyntsi",
      "lon": "37.0617",
      "lat": "49.4105"
  },
  {
      "name": "Savyntsi",
      "lon": "29.0544",
      "lat": "48.4775"
  },
  {
      "name": "Sedlyshche",
      "lon": "25.3847",
      "lat": "51.6753"
  },
  {
      "name": "Sedniv",
      "lon": "31.5689",
      "lat": "51.6433"
  },
  {
      "name": "Seliatyn",
      "lon": "25.1861",
      "lat": "47.8736"
  },
  {
      "name": "Selydove",
      "lon": "37.3000",
      "lat": "48.1500"
  },
  {
      "name": "Semenivka",
      "lon": "32.5797",
      "lat": "52.1772"
  },
  {
      "name": "Semenivka",
      "lon": "31.0594",
      "lat": "47.9347"
  },
  {
      "name": "Semenivka",
      "lon": "33.1875",
      "lat": "49.6017"
  },
  {
      "name": "Semykozivka",
      "lon": "39.5678",
      "lat": "49.2433"
  },
  {
      "name": "Senkevychivka",
      "lon": "25.0333",
      "lat": "50.5333"
  },
  {
      "name": "Serby",
      "lon": "29.0667",
      "lat": "48.1014"
  },
  {
      "name": "Serbynivtsi",
      "lon": "27.9279",
      "lat": "49.0929"
  },
  {
      "name": "Serdyte",
      "lon": "38.3883",
      "lat": "48.0417"
  },
  {
      "name": "Serednye",
      "lon": "22.5000",
      "lat": "48.5333"
  },
  {
      "name": "Sernyky",
      "lon": "26.2358",
      "lat": "51.8217"
  },
  {
      "name": "Sevastopol",
      "lon": "33.5333",
      "lat": "44.6000"
  },
  {
      "name": "Severynivka",
      "lon": "27.9458",
      "lat": "49.0511"
  },
  {
      "name": "Shabelkivka",
      "lon": "37.4881",
      "lat": "48.7608"
  },
  {
      "name": "Shakhtarsk",
      "lon": "38.4833",
      "lat": "48.0333"
  },
  {
      "name": "Shalyhyne",
      "lon": "34.1197",
      "lat": "51.5676"
  },
  {
      "name": "Shamraivka",
      "lon": "29.8328",
      "lat": "49.7719"
  },
  {
      "name": "Shandra",
      "lon": "31.1519",
      "lat": "49.7864"
  },
  {
      "name": "Sharhorod",
      "lon": "28.0833",
      "lat": "48.7500"
  },
  {
      "name": "Sharivka",
      "lon": "35.4411",
      "lat": "50.0272"
  },
  {
      "name": "Sharovechka",
      "lon": "26.8986",
      "lat": "49.4150"
  },
  {
      "name": "Shatsk",
      "lon": "23.9297",
      "lat": "51.4878"
  },
  {
      "name": "Shchastia",
      "lon": "39.2311",
      "lat": "48.7381"
  },
  {
      "name": "Shchebetovka",
      "lon": "35.1583",
      "lat": "44.9389"
  },
  {
      "name": "Shcherbani",
      "lon": "34.5385",
      "lat": "49.5334"
  },
  {
      "name": "Sheludkivka",
      "lon": "36.5433",
      "lat": "49.6778"
  },
  {
      "name": "Shepetivka",
      "lon": "27.0667",
      "lat": "50.1833"
  },
  {
      "name": "Shepit",
      "lon": "24.8567",
      "lat": "48.2653"
  },
  {
      "name": "Sheshory",
      "lon": "24.9911",
      "lat": "48.3364"
  },
  {
      "name": "Shevchenkove",
      "lon": "37.1794",
      "lat": "49.6939"
  },
  {
      "name": "Sholokhove",
      "lon": "34.0238",
      "lat": "47.6981"
  },
  {
      "name": "Shostka",
      "lon": "33.4766",
      "lat": "51.8657"
  },
  {
      "name": "Shpykiv",
      "lon": "28.5642",
      "lat": "48.7870"
  },
  {
      "name": "Shramkivka",
      "lon": "32.1333",
      "lat": "50.1333"
  },
  {
      "name": "Shulhivka",
      "lon": "34.3924",
      "lat": "48.7434"
  },
  {
      "name": "Shyriaieve",
      "lon": "30.1911",
      "lat": "47.3878"
  },
  {
      "name": "Shyroke",
      "lon": "33.2654",
      "lat": "47.6882"
  },
  {
      "name": "Shyshaky",
      "lon": "34.0071",
      "lat": "49.8769"
  },
  {
      "name": "Sievierodonetsk",
      "lon": "38.4833",
      "lat": "48.9500"
  },
  {
      "name": "Simeiz",
      "lon": "34.0111",
      "lat": "44.4069"
  },
  {
      "name": "Simer",
      "lon": "22.5169",
      "lat": "48.7322"
  },
  {
      "name": "Simferopol",
      "lon": "34.1000",
      "lat": "44.9484"
  },
  {
      "name": "Skadovsk",
      "lon": "32.9167",
      "lat": "46.1167"
  },
  {
      "name": "Skalat",
      "lon": "25.9833",
      "lat": "49.4333"
  },
  {
      "name": "Skelivka",
      "lon": "22.9625",
      "lat": "49.5353"
  },
  {
      "name": "Skhidnytsia",
      "lon": "23.3617",
      "lat": "49.2013"
  },
  {
      "name": "Skole",
      "lon": "23.5139",
      "lat": "49.0378"
  },
  {
      "name": "Skomoroshky",
      "lon": "29.4408",
      "lat": "49.3292"
  },
  {
      "name": "Skvyra",
      "lon": "29.6833",
      "lat": "49.7333"
  },
  {
      "name": "Slatyne",
      "lon": "36.1525",
      "lat": "50.2161"
  },
  {
      "name": "Slavhorod",
      "lon": "35.5109",
      "lat": "48.1097"
  },
  {
      "name": "Slavutych",
      "lon": "30.7569",
      "lat": "51.5206"
  },
  {
      "name": "Slobodka-Mushkatovka",
      "lon": "26.1010",
      "lat": "48.8114"
  },
  {
      "name": "Slobozhanske",
      "lon": "35.0749",
      "lat": "48.5342"
  },
  {
      "name": "Slobozhanske",
      "lon": "36.4136",
      "lat": "50.1928"
  },
  {
      "name": "Slov”yanka",
      "lon": "36.7152",
      "lat": "48.3997"
  },
  {
      "name": "Sloviansk",
      "lon": "37.6250",
      "lat": "48.8700"
  },
  {
      "name": "Smila",
      "lon": "31.8667",
      "lat": "49.2167"
  },
  {
      "name": "Smyha",
      "lon": "25.7658",
      "lat": "50.2400"
  },
  {
      "name": "Sniatyn",
      "lon": "25.5667",
      "lat": "48.4500"
  },
  {
      "name": "Snihurivka",
      "lon": "32.7997",
      "lat": "47.0708"
  },
  {
      "name": "Snizhne",
      "lon": "38.7667",
      "lat": "48.0167"
  },
  {
      "name": "Snovsk",
      "lon": "31.9500",
      "lat": "51.8167"
  },
  {
      "name": "Sofiivka",
      "lon": "38.1847",
      "lat": "48.2683"
  },
  {
      "name": "Sofiivka",
      "lon": "33.8937",
      "lat": "48.0727"
  },
  {
      "name": "Sofiyivs’ka Borshchahivka",
      "lon": "30.3692",
      "lat": "50.4114"
  },
  {
      "name": "Sokal",
      "lon": "24.2833",
      "lat": "50.4833"
  },
  {
      "name": "Sokilnyky",
      "lon": "23.9614",
      "lat": "49.7769"
  },
  {
      "name": "Sokolivka",
      "lon": "28.9922",
      "lat": "48.4419"
  },
  {
      "name": "Sokolove",
      "lon": "36.1958",
      "lat": "49.7167"
  },
  {
      "name": "Sokyriany",
      "lon": "27.4167",
      "lat": "48.4500"
  },
  {
      "name": "Solochyn",
      "lon": "22.9564",
      "lat": "48.6003"
  },
  {
      "name": "Solomonovo",
      "lon": "22.1639",
      "lat": "48.4306"
  },
  {
      "name": "Solone",
      "lon": "34.8686",
      "lat": "48.2054"
  },
  {
      "name": "Solonka",
      "lon": "24.0300",
      "lat": "49.7400"
  },
  {
      "name": "Solotvyn",
      "lon": "24.5333",
      "lat": "48.7000"
  },
  {
      "name": "Solotvyno",
      "lon": "23.8669",
      "lat": "47.9597"
  },
  {
      "name": "Somaky",
      "lon": "28.1058",
      "lat": "49.1147"
  },
  {
      "name": "Sosnivka",
      "lon": "24.2525",
      "lat": "50.2946"
  },
  {
      "name": "Sosnivka",
      "lon": "34.0175",
      "lat": "50.2916"
  },
  {
      "name": "Sosnytsia",
      "lon": "32.5017",
      "lat": "51.5222"
  },
  {
      "name": "Spaske",
      "lon": "35.0499",
      "lat": "48.6579"
  },
  {
      "name": "Stakhanov",
      "lon": "38.6361",
      "lat": "48.5472"
  },
  {
      "name": "Stanislavchyk",
      "lon": "28.1028",
      "lat": "48.9728"
  },
  {
      "name": "Stanytsia Luhanska",
      "lon": "39.4667",
      "lat": "48.6667"
  },
  {
      "name": "Stara Huta",
      "lon": "24.2436",
      "lat": "51.4119"
  },
  {
      "name": "Stara Kulna",
      "lon": "29.3150",
      "lat": "47.6961"
  },
  {
      "name": "Stara Sil",
      "lon": "22.9656",
      "lat": "49.4894"
  },
  {
      "name": "Stara Syniava",
      "lon": "27.6167",
      "lat": "49.6000"
  },
  {
      "name": "Stara Vyzhivka",
      "lon": "24.4373",
      "lat": "51.4396"
  },
  {
      "name": "Stare Selo",
      "lon": "24.1917",
      "lat": "49.7036"
  },
  {
      "name": "Stari Kodaky",
      "lon": "35.1332",
      "lat": "48.3792"
  },
  {
      "name": "Stari Kryvotuly",
      "lon": "24.8556",
      "lat": "48.7858"
  },
  {
      "name": "Stari Petrivtsi",
      "lon": "30.4158",
      "lat": "50.6525"
  },
  {
      "name": "Stari Sanzhary",
      "lon": "34.4474",
      "lat": "49.4284"
  },
  {
      "name": "Stari Troiany",
      "lon": "29.1703",
      "lat": "45.6719"
  },
  {
      "name": "Starobilsk",
      "lon": "38.9167",
      "lat": "49.2667"
  },
  {
      "name": "Staryi Mizun",
      "lon": "23.8739",
      "lat": "48.9206"
  },
  {
      "name": "Staryi Ostropil",
      "lon": "27.5593",
      "lat": "49.8096"
  },
  {
      "name": "Staryi Saltiv",
      "lon": "36.7933",
      "lat": "50.0778"
  },
  {
      "name": "Staryi Sambir",
      "lon": "23.0000",
      "lat": "49.4333"
  },
  {
      "name": "Staryy Chortoryys’k",
      "lon": "25.8825",
      "lat": "51.2242"
  },
  {
      "name": "Staryy Skalat",
      "lon": "25.9822",
      "lat": "49.4639"
  },
  {
      "name": "Stavchany",
      "lon": "23.8392",
      "lat": "49.7575"
  },
  {
      "name": "Stavky",
      "lon": "29.7803",
      "lat": "48.3819"
  },
  {
      "name": "Stavnytsia",
      "lon": "27.4264",
      "lat": "49.4478"
  },
  {
      "name": "Stavyshche",
      "lon": "30.1917",
      "lat": "49.3914"
  },
  {
      "name": "Stepanivka",
      "lon": "34.6334",
      "lat": "50.9430"
  },
  {
      "name": "Stepanivka",
      "lon": "28.7656",
      "lat": "49.1306"
  },
  {
      "name": "Stepnohirsk",
      "lon": "35.3638",
      "lat": "47.5861"
  },
  {
      "name": "Stepove",
      "lon": "34.9063",
      "lat": "48.6387"
  },
  {
      "name": "Stina",
      "lon": "28.4211",
      "lat": "48.4525"
  },
  {
      "name": "Stinka",
      "lon": "25.2504",
      "lat": "48.9172"
  },
  {
      "name": "Storozhynets",
      "lon": "25.7150",
      "lat": "48.1597"
  },
  {
      "name": "Stratiivka",
      "lon": "29.4258",
      "lat": "48.1450"
  },
  {
      "name": "Strilkove",
      "lon": "34.8811",
      "lat": "45.8964"
  },
  {
      "name": "Strilky",
      "lon": "22.9717",
      "lat": "49.3264"
  },
  {
      "name": "Stryi",
      "lon": "23.8500",
      "lat": "49.2500"
  },
  {
      "name": "Stryzhavka",
      "lon": "28.4808",
      "lat": "49.3103"
  },
  {
      "name": "Stryzhivka",
      "lon": "27.7419",
      "lat": "49.9081"
  },
  {
      "name": "Stryzhivka",
      "lon": "28.9858",
      "lat": "50.3019"
  },
  {
      "name": "Studenytsia",
      "lon": "28.8972",
      "lat": "50.3386"
  },
  {
      "name": "Sudak",
      "lon": "34.9725",
      "lat": "44.8514"
  },
  {
      "name": "Sudiivka",
      "lon": "34.4305",
      "lat": "49.5086"
  },
  {
      "name": "Sudova Vyshnya",
      "lon": "23.3722",
      "lat": "49.7892"
  },
  {
      "name": "Sukha",
      "lon": "23.2997",
      "lat": "48.4292"
  },
  {
      "name": "Sukhodilsk",
      "lon": "39.7167",
      "lat": "48.3500"
  },
  {
      "name": "Sumy",
      "lon": "34.7992",
      "lat": "50.9068"
  },
  {
      "name": "Suprunivka",
      "lon": "34.4270",
      "lat": "49.5812"
  },
  {
      "name": "Sursko-Lytovske",
      "lon": "34.9355",
      "lat": "48.3364"
  },
  {
      "name": "Sursko-Mykhailivka",
      "lon": "34.7276",
      "lat": "48.2720"
  },
  {
      "name": "Suskovo",
      "lon": "22.9153",
      "lat": "48.5422"
  },
  {
      "name": "Sutysky",
      "lon": "28.4208",
      "lat": "49.0422"
  },
  {
      "name": "Suvorove",
      "lon": "33.6911",
      "lat": "46.0872"
  },
  {
      "name": "Svalyava",
      "lon": "22.9861",
      "lat": "48.5472"
  },
  {
      "name": "Svatove",
      "lon": "38.1619",
      "lat": "49.4092"
  },
  {
      "name": "Svesa",
      "lon": "33.9367",
      "lat": "51.9481"
  },
  {
      "name": "Sviatylivka",
      "lon": "32.8108",
      "lat": "49.4628"
  },
  {
      "name": "Svitlohirske",
      "lon": "34.5089",
      "lat": "48.3447"
  },
  {
      "name": "Svitlovodsk",
      "lon": "33.2500",
      "lat": "49.0833"
  },
  {
      "name": "Svyatets",
      "lon": "26.2975",
      "lat": "49.8439"
  },
  {
      "name": "Svyatohirs’k",
      "lon": "37.5833",
      "lat": "49.0333"
  },
  {
      "name": "Synelnykove",
      "lon": "35.5119",
      "lat": "48.3178"
  },
  {
      "name": "Syniukhyn Brid",
      "lon": "30.8208",
      "lat": "48.1458"
  },
  {
      "name": "Synkiv",
      "lon": "25.9572",
      "lat": "48.6172"
  },
  {
      "name": "Sytkivtsi",
      "lon": "29.2022",
      "lat": "48.9066"
  },
  {
      "name": "Takhtaulove",
      "lon": "34.5294",
      "lat": "49.6616"
  },
  {
      "name": "Talalaivka",
      "lon": "33.1485",
      "lat": "50.8299"
  },
  {
      "name": "Talne",
      "lon": "30.7027",
      "lat": "48.8863"
  },
  {
      "name": "Tarashcha",
      "lon": "30.5000",
      "lat": "49.5500"
  },
  {
      "name": "Tarasivka",
      "lon": "34.3491",
      "lat": "50.2464"
  },
  {
      "name": "Tartak",
      "lon": "29.4119",
      "lat": "48.2022"
  },
  {
      "name": "Tarutyne",
      "lon": "29.1495",
      "lat": "46.1846"
  },
  {
      "name": "Tatarbunary",
      "lon": "29.6147",
      "lat": "45.8355"
  },
  {
      "name": "Tatariv",
      "lon": "24.5778",
      "lat": "48.3436"
  },
  {
      "name": "Tavriiske",
      "lon": "34.8484",
      "lat": "46.5850"
  },
  {
      "name": "Tavrychanka",
      "lon": "33.8203",
      "lat": "46.5533"
  },
  {
      "name": "Teplodar",
      "lon": "30.3244",
      "lat": "46.5036"
  },
  {
      "name": "Teplyk",
      "lon": "29.7539",
      "lat": "48.6594"
  },
  {
      "name": "Tereshky",
      "lon": "34.6227",
      "lat": "49.5471"
  },
  {
      "name": "Teresva",
      "lon": "23.6992",
      "lat": "48.0000"
  },
  {
      "name": "Ternivka",
      "lon": "36.0826",
      "lat": "48.5231"
  },
  {
      "name": "Ternivka",
      "lon": "33.7444",
      "lat": "44.5819"
  },
  {
      "name": "Ternivka",
      "lon": "28.9019",
      "lat": "48.3944"
  },
  {
      "name": "Ternivka",
      "lon": "29.9678",
      "lat": "48.5403"
  },
  {
      "name": "Ternopil",
      "lon": "25.6000",
      "lat": "49.5667"
  },
  {
      "name": "Ternuvate",
      "lon": "36.1276",
      "lat": "47.8305"
  },
  {
      "name": "Tetiiv",
      "lon": "29.6900",
      "lat": "49.3708"
  },
  {
      "name": "Tiachiv",
      "lon": "23.5722",
      "lat": "48.0114"
  },
  {
      "name": "Tiudiv",
      "lon": "25.1303",
      "lat": "48.2394"
  },
  {
      "name": "Tlumach",
      "lon": "25.0012",
      "lat": "48.8669"
  },
  {
      "name": "Tokari",
      "lon": "33.4274",
      "lat": "50.4148"
  },
  {
      "name": "Tokmak",
      "lon": "35.7058",
      "lat": "47.2514"
  },
  {
      "name": "Tomakivka",
      "lon": "34.7471",
      "lat": "47.8163"
  },
  {
      "name": "Tomashhorod",
      "lon": "27.0250",
      "lat": "51.3122"
  },
  {
      "name": "Tomashpil",
      "lon": "28.5157",
      "lat": "48.5471"
  },
  {
      "name": "Topchyno",
      "lon": "23.8528",
      "lat": "48.0389"
  },
  {
      "name": "Torchyn",
      "lon": "25.0000",
      "lat": "50.7667"
  },
  {
      "name": "Toretsk",
      "lon": "37.8333",
      "lat": "48.4000"
  },
  {
      "name": "Trebukhivtsi",
      "lon": "27.4106",
      "lat": "49.4297"
  },
  {
      "name": "Troiandove",
      "lon": "30.8611",
      "lat": "46.8944"
  },
  {
      "name": "Troianiv",
      "lon": "28.5231",
      "lat": "50.1133"
  },
  {
      "name": "Trokhizbenka",
      "lon": "38.9633",
      "lat": "48.7575"
  },
  {
      "name": "Trostianets",
      "lon": "29.2137",
      "lat": "48.5120"
  },
  {
      "name": "Trostianets",
      "lon": "28.2317",
      "lat": "48.3578"
  },
  {
      "name": "Troyits’ke",
      "lon": "35.8668",
      "lat": "48.4140"
  },
  {
      "name": "Trudove",
      "lon": "29.3967",
      "lat": "45.6183"
  },
  {
      "name": "Trushki",
      "lon": "29.9428",
      "lat": "49.7544"
  },
  {
      "name": "Truskavets",
      "lon": "23.5050",
      "lat": "49.2806"
  },
  {
      "name": "Tsarychanka",
      "lon": "34.4748",
      "lat": "48.9432"
  },
  {
      "name": "Tsuman",
      "lon": "25.8833",
      "lat": "50.8333"
  },
  {
      "name": "Tsybuleve",
      "lon": "32.4878",
      "lat": "48.8144"
  },
  {
      "name": "Tsybuliv",
      "lon": "29.8472",
      "lat": "49.0733"
  },
  {
      "name": "Tulchyn",
      "lon": "28.8497",
      "lat": "48.6744"
  },
  {
      "name": "Turbiv",
      "lon": "28.7244",
      "lat": "49.3463"
  },
  {
      "name": "Turiia",
      "lon": "31.6519",
      "lat": "48.8717"
  },
  {
      "name": "Turiys’k",
      "lon": "24.5333",
      "lat": "51.0833"
  },
  {
      "name": "Turka",
      "lon": "23.0300",
      "lat": "49.1544"
  },
  {
      "name": "Tynytsia",
      "lon": "32.9167",
      "lat": "51.1333"
  },
  {
      "name": "Tysmenytsia",
      "lon": "24.8492",
      "lat": "48.9008"
  },
  {
      "name": "Tyvriv",
      "lon": "28.5011",
      "lat": "49.0116"
  },
  {
      "name": "Uhroyidy",
      "lon": "35.2688",
      "lat": "50.8626"
  },
  {
      "name": "Ukrainka",
      "lon": "30.7519",
      "lat": "50.1500"
  },
  {
      "name": "Ukrainsk",
      "lon": "37.3667",
      "lat": "48.1000"
  },
  {
      "name": "Ulashkivtsi",
      "lon": "25.8186",
      "lat": "48.8994"
  },
  {
      "name": "Uman",
      "lon": "30.2167",
      "lat": "48.7500"
  },
  {
      "name": "Uniatychi",
      "lon": "23.4158",
      "lat": "49.3736"
  },
  {
      "name": "Urzuf",
      "lon": "37.0936",
      "lat": "46.9119"
  },
  {
      "name": "Uspenivka",
      "lon": "36.3992",
      "lat": "47.7815"
  },
  {
      "name": "Uspenka",
      "lon": "39.1536",
      "lat": "48.3939"
  },
  {
      "name": "Ust-Chorna",
      "lon": "23.9389",
      "lat": "48.3192"
  },
  {
      "name": "Ustia",
      "lon": "29.6606",
      "lat": "48.3778"
  },
  {
      "name": "Ustia",
      "lon": "26.0868",
      "lat": "48.6134"
  },
  {
      "name": "Ustyluh",
      "lon": "24.1569",
      "lat": "50.8600"
  },
  {
      "name": "Ustynivka",
      "lon": "32.5333",
      "lat": "47.9500"
  },
  {
      "name": "Utoropy",
      "lon": "24.9831",
      "lat": "48.3864"
  },
  {
      "name": "Uzhhorod",
      "lon": "22.2950",
      "lat": "48.6239"
  },
  {
      "name": "Uzyn",
      "lon": "30.4425",
      "lat": "49.8242"
  },
  {
      "name": "V”yazivok",
      "lon": "35.7708",
      "lat": "48.6430"
  },
  {
      "name": "Vakhnivka",
      "lon": "28.8433",
      "lat": "49.3200"
  },
  {
      "name": "Vakhrusheve",
      "lon": "38.8389",
      "lat": "48.1606"
  },
  {
      "name": "Vakulenchuk",
      "lon": "28.3031",
      "lat": "49.9417"
  },
  {
      "name": "Vakulove",
      "lon": "33.9327",
      "lat": "47.8984"
  },
  {
      "name": "Valky",
      "lon": "35.6217",
      "lat": "49.8386"
  },
  {
      "name": "Vapniarka",
      "lon": "28.7500",
      "lat": "48.5333"
  },
  {
      "name": "Varash",
      "lon": "25.8508",
      "lat": "51.3400"
  },
  {
      "name": "Vasyliv",
      "lon": "25.8417",
      "lat": "48.6042"
  },
  {
      "name": "Vasylivka",
      "lon": "35.2808",
      "lat": "47.4344"
  },
  {
      "name": "Vasylkiv",
      "lon": "30.3217",
      "lat": "50.1775"
  },
  {
      "name": "Vasylkivka",
      "lon": "36.0253",
      "lat": "48.2084"
  },
  {
      "name": "Vatutine",
      "lon": "31.0667",
      "lat": "49.0167"
  },
  {
      "name": "Velbivka",
      "lon": "34.0463",
      "lat": "50.3430"
  },
  {
      "name": "Velikiy Khodachkov",
      "lon": "25.4372",
      "lat": "49.4869"
  },
  {
      "name": "Velyka Andrusivka",
      "lon": "32.9544",
      "lat": "49.0533"
  },
  {
      "name": "Velyka Bahachka",
      "lon": "33.7207",
      "lat": "49.7944"
  },
  {
      "name": "Velyka Bilozerka",
      "lon": "34.6947",
      "lat": "47.2720"
  },
  {
      "name": "Velyka Burimka",
      "lon": "32.6381",
      "lat": "49.6089"
  },
  {
      "name": "Velyka Byihan",
      "lon": "22.5747",
      "lat": "48.2481"
  },
  {
      "name": "Velyka Dymerka",
      "lon": "30.9103",
      "lat": "50.5928"
  },
  {
      "name": "Velyka Kyriivka",
      "lon": "29.6247",
      "lat": "48.3772"
  },
  {
      "name": "Velyka Lepetykha",
      "lon": "33.9381",
      "lat": "47.1639"
  },
  {
      "name": "Velyka Linyna",
      "lon": "22.9067",
      "lat": "49.3853"
  },
  {
      "name": "Velyka Mykhailivka",
      "lon": "29.8533",
      "lat": "47.0783"
  },
  {
      "name": "Velyka Oleksandrivka",
      "lon": "33.2942",
      "lat": "47.3108"
  },
  {
      "name": "Velyka Pavlivka",
      "lon": "34.2683",
      "lat": "50.2369"
  },
  {
      "name": "Velyki Komiaty",
      "lon": "22.9789",
      "lat": "48.2386"
  },
  {
      "name": "Velyki Korovyntsi",
      "lon": "28.2947",
      "lat": "49.9714"
  },
  {
      "name": "Velyki Luchky",
      "lon": "22.5611",
      "lat": "48.4200"
  },
  {
      "name": "Velyki Mosty",
      "lon": "24.1394",
      "lat": "50.2400"
  },
  {
      "name": "Velyki Sorochyntsi",
      "lon": "33.9477",
      "lat": "50.0253"
  },
  {
      "name": "Velykodolynske",
      "lon": "30.5653",
      "lat": "46.3425"
  },
  {
      "name": "Velykomykhaylivka",
      "lon": "36.4723",
      "lat": "47.9720"
  },
  {
      "name": "Velykyi Burluk",
      "lon": "37.3906",
      "lat": "50.0456"
  },
  {
      "name": "Velykyi Bychkiv",
      "lon": "24.0047",
      "lat": "47.9714"
  },
  {
      "name": "Velykyi Dalnyk",
      "lon": "30.5583",
      "lat": "46.4658"
  },
  {
      "name": "Velykyi Khutir",
      "lon": "32.1053",
      "lat": "49.8617"
  },
  {
      "name": "Velykyi Liubin",
      "lon": "23.7336",
      "lat": "49.7239"
  },
  {
      "name": "Velykyi Rakovets",
      "lon": "23.1444",
      "lat": "48.2708"
  },
  {
      "name": "Velykyi Trostianets",
      "lon": "34.5390",
      "lat": "49.4975"
  },
  {
      "name": "Velykyi Zhvanchyk",
      "lon": "26.9631",
      "lat": "48.7617"
  },
  {
      "name": "Velykyy Bereznyy",
      "lon": "22.4586",
      "lat": "48.8922"
  },
  {
      "name": "Vendychany",
      "lon": "27.7944",
      "lat": "48.6130"
  },
  {
      "name": "Verbivka",
      "lon": "36.8297",
      "lat": "49.4883"
  },
  {
      "name": "Verbka",
      "lon": "29.2847",
      "lat": "48.2139"
  },
  {
      "name": "Verbka",
      "lon": "28.5689",
      "lat": "48.2883"
  },
  {
      "name": "Verbky",
      "lon": "35.8967",
      "lat": "48.5911"
  },
  {
      "name": "Verchany",
      "lon": "23.8992",
      "lat": "49.2619"
  },
  {
      "name": "Verkhivka",
      "lon": "29.1606",
      "lat": "48.4419"
  },
  {
      "name": "Verkhivtseve",
      "lon": "34.2488",
      "lat": "48.4812"
  },
  {
      "name": "Verkhivtsi",
      "lon": "23.1006",
      "lat": "49.6353"
  },
  {
      "name": "Verkhnia Stynava",
      "lon": "23.6136",
      "lat": "49.1603"
  },
  {
      "name": "Verkhnii Luzhok",
      "lon": "23.0181",
      "lat": "49.3617"
  },
  {
      "name": "Verkhnii Rohachyk",
      "lon": "34.3600",
      "lat": "47.2414"
  },
  {
      "name": "Verkhnii Yaseniv",
      "lon": "24.9453",
      "lat": "48.1614"
  },
  {
      "name": "Verkhnodniprovsk",
      "lon": "34.3283",
      "lat": "48.6561"
  },
  {
      "name": "Verkhnosadove",
      "lon": "33.7056",
      "lat": "44.6889"
  },
  {
      "name": "Verkhovyna",
      "lon": "24.8136",
      "lat": "48.1517"
  },
  {
      "name": "Veryn",
      "lon": "23.9903",
      "lat": "49.4844"
  },
  {
      "name": "Vesela Dolyna",
      "lon": "29.3167",
      "lat": "46.2333"
  },
  {
      "name": "Vesela Hora",
      "lon": "39.2497",
      "lat": "48.7117"
  },
  {
      "name": "Vesele",
      "lon": "34.9124",
      "lat": "47.0160"
  },
  {
      "name": "Vesele",
      "lon": "36.6133",
      "lat": "48.2317"
  },
  {
      "name": "Veselivka",
      "lon": "29.8625",
      "lat": "48.6239"
  },
  {
      "name": "Veselynove",
      "lon": "31.2397",
      "lat": "47.3583"
  },
  {
      "name": "Viitivtsi",
      "lon": "27.9014",
      "lat": "49.6239"
  },
  {
      "name": "Viktoriya",
      "lon": "32.2880",
      "lat": "50.2406"
  },
  {
      "name": "Vil’bivne",
      "lon": "26.5667",
      "lat": "50.3597"
  },
  {
      "name": "Vil’khivtsi-Lazy",
      "lon": "23.6975",
      "lat": "48.1258"
  },
  {
      "name": "Vil’nyans’k",
      "lon": "35.4331",
      "lat": "47.9445"
  },
  {
      "name": "Vilkhivka",
      "lon": "23.0656",
      "lat": "48.2633"
  },
  {
      "name": "Vilkhovets",
      "lon": "27.3575",
      "lat": "48.6986"
  },
  {
      "name": "Vilne",
      "lon": "34.3064",
      "lat": "45.5656"
  },
  {
      "name": "Vilne",
      "lon": "35.2941",
      "lat": "48.7427"
  },
  {
      "name": "Vilnohirsk",
      "lon": "34.0189",
      "lat": "48.4824"
  },
  {
      "name": "Vilshanka",
      "lon": "28.6256",
      "lat": "48.2458"
  },
  {
      "name": "Vilshanka",
      "lon": "30.8779",
      "lat": "48.2322"
  },
  {
      "name": "Vilshany",
      "lon": "35.8847",
      "lat": "50.0533"
  },
  {
      "name": "Vilshany",
      "lon": "23.6197",
      "lat": "48.3500"
  },
  {
      "name": "Vinkivtsi",
      "lon": "27.2333",
      "lat": "49.0333"
  },
  {
      "name": "Vinnytsia",
      "lon": "28.4672",
      "lat": "49.2372"
  },
  {
      "name": "Vistria",
      "lon": "25.1311",
      "lat": "48.9247"
  },
  {
      "name": "Vladychen",
      "lon": "28.6039",
      "lat": "45.5656"
  },
  {
      "name": "Voinivka",
      "lon": "33.0611",
      "lat": "48.7086"
  },
  {
      "name": "Voinyliv",
      "lon": "24.4936",
      "lat": "49.1194"
  },
  {
      "name": "Volitsa",
      "lon": "23.0878",
      "lat": "49.8100"
  },
  {
      "name": "Volnovakha",
      "lon": "37.4836",
      "lat": "47.5978"
  },
  {
      "name": "Volodarka",
      "lon": "29.9153",
      "lat": "49.5200"
  },
  {
      "name": "Volodkova Divytsia",
      "lon": "31.7894",
      "lat": "50.9436"
  },
  {
      "name": "Volodymyr-Volynskyi",
      "lon": "24.3222",
      "lat": "50.8481"
  },
  {
      "name": "Volosianka",
      "lon": "22.8072",
      "lat": "48.9808"
  },
  {
      "name": "Voloske",
      "lon": "35.1394",
      "lat": "48.3049"
  },
  {
      "name": "Volovets",
      "lon": "23.2000",
      "lat": "48.7242"
  },
  {
      "name": "Volytsia",
      "lon": "24.3475",
      "lat": "50.3914"
  },
  {
      "name": "Vorokhta",
      "lon": "24.5667",
      "lat": "48.2833"
  },
  {
      "name": "Voronovytsia",
      "lon": "28.6831",
      "lat": "49.0989"
  },
  {
      "name": "Vorotsev",
      "lon": "23.8178",
      "lat": "49.8572"
  },
  {
      "name": "Vorozhba",
      "lon": "34.2299",
      "lat": "51.1749"
  },
  {
      "name": "Vorzel",
      "lon": "30.1500",
      "lat": "50.5500"
  },
  {
      "name": "Voskresenka",
      "lon": "36.3570",
      "lat": "47.4707"
  },
  {
      "name": "Vovchansk",
      "lon": "36.9461",
      "lat": "50.2881"
  },
  {
      "name": "Vovche",
      "lon": "22.9094",
      "lat": "49.2111"
  },
  {
      "name": "Vovchynets",
      "lon": "26.9128",
      "lat": "48.4528"
  },
  {
      "name": "Vovkovyntsi",
      "lon": "27.6560",
      "lat": "49.2085"
  },
  {
      "name": "Voziluv",
      "lon": "25.3126",
      "lat": "48.8552"
  },
  {
      "name": "Voznesensk",
      "lon": "31.3119",
      "lat": "47.5725"
  },
  {
      "name": "Vradiivka",
      "lon": "30.5931",
      "lat": "47.8617"
  },
  {
      "name": "Vremivka",
      "lon": "36.8133",
      "lat": "47.8344"
  },
  {
      "name": "Vyhoda",
      "lon": "23.9500",
      "lat": "48.9667"
  },
  {
      "name": "Vylok",
      "lon": "22.8333",
      "lat": "48.1000"
  },
  {
      "name": "Vynnyky",
      "lon": "24.1297",
      "lat": "49.8156"
  },
  {
      "name": "Vynohrad",
      "lon": "30.5472",
      "lat": "49.2364"
  },
  {
      "name": "Vynohradiv",
      "lon": "23.0331",
      "lat": "48.1397"
  },
  {
      "name": "Vynohradne",
      "lon": "37.6603",
      "lat": "47.0906"
  },
  {
      "name": "Vyrishal’ne",
      "lon": "33.4488",
      "lat": "50.1914"
  },
  {
      "name": "Vyshcheolchedaiv",
      "lon": "27.6842",
      "lat": "48.7236"
  },
  {
      "name": "Vyshhorod",
      "lon": "30.5000",
      "lat": "50.5833"
  },
  {
      "name": "Vyshkovo",
      "lon": "23.4164",
      "lat": "48.0581"
  },
  {
      "name": "Vyshneve",
      "lon": "30.3667",
      "lat": "50.3833"
  },
  {
      "name": "Vyshneve",
      "lon": "33.9185",
      "lat": "48.4369"
  },
  {
      "name": "Vyshnivchyk",
      "lon": "26.4672",
      "lat": "49.0211"
  },
  {
      "name": "Vysokopillia",
      "lon": "35.4203",
      "lat": "49.9186"
  },
  {
      "name": "Vysokopillia",
      "lon": "33.5300",
      "lat": "47.4797"
  },
  {
      "name": "Vysunsk",
      "lon": "32.8189",
      "lat": "47.2564"
  },
  {
      "name": "Vytylivka",
      "lon": "25.8011",
      "lat": "48.4072"
  },
  {
      "name": "Vyzhnytsia",
      "lon": "25.1917",
      "lat": "48.2500"
  },
  {
      "name": "Yablunets",
      "lon": "28.0667",
      "lat": "50.8000"
  },
  {
      "name": "Yabluniv",
      "lon": "24.9387",
      "lat": "48.4042"
  },
  {
      "name": "Yablunytsia",
      "lon": "24.5033",
      "lat": "48.3161"
  },
  {
      "name": "Yahotyn",
      "lon": "31.7817",
      "lat": "50.2569"
  },
  {
      "name": "Yakymivka",
      "lon": "35.1664",
      "lat": "46.6967"
  },
  {
      "name": "Yalta",
      "lon": "34.1553",
      "lat": "44.4994"
  },
  {
      "name": "Yalta",
      "lon": "37.2667",
      "lat": "46.9667"
  },
  {
      "name": "Yampil",
      "lon": "28.2819",
      "lat": "48.2414"
  },
  {
      "name": "Yany Kapu",
      "lon": "33.8003",
      "lat": "45.9675"
  },
  {
      "name": "Yaremche",
      "lon": "24.5564",
      "lat": "48.4536"
  },
  {
      "name": "Yasinia",
      "lon": "24.3747",
      "lat": "48.2728"
  },
  {
      "name": "Yasnohirka",
      "lon": "37.5506",
      "lat": "48.7725"
  },
  {
      "name": "Yasynuvata",
      "lon": "37.8333",
      "lat": "48.1167"
  },
  {
      "name": "Yavoriv",
      "lon": "23.3931",
      "lat": "49.9469"
  },
  {
      "name": "Yedy-Kuiu",
      "lon": "35.7748",
      "lat": "45.2977"
  },
  {
      "name": "Yelanets",
      "lon": "31.8544",
      "lat": "47.6978"
  },
  {
      "name": "Yelizavetivka",
      "lon": "34.6496",
      "lat": "48.6197"
  },
  {
      "name": "Yemilchyne",
      "lon": "27.8028",
      "lat": "50.8708"
  },
  {
      "name": "Yenakiieve",
      "lon": "38.2053",
      "lat": "48.2311"
  },
  {
      "name": "Yerky",
      "lon": "30.9919",
      "lat": "48.9781"
  },
  {
      "name": "Yevhenivka",
      "lon": "32.9003",
      "lat": "47.0886"
  },
  {
      "name": "Yevpatoriia",
      "lon": "33.3583",
      "lat": "45.2000"
  },
  {
      "name": "Yezupil",
      "lon": "24.7764",
      "lat": "49.0431"
  },
  {
      "name": "Yur”yivka",
      "lon": "36.0216",
      "lat": "48.7397"
  },
  {
      "name": "Yuvileine",
      "lon": "39.1742",
      "lat": "48.5531"
  },
  {
      "name": "Yuzhne",
      "lon": "31.1008",
      "lat": "46.6222"
  },
  {
      "name": "Z·hurivka",
      "lon": "31.7739",
      "lat": "50.4976"
  },
  {
      "name": "Zabolotiv",
      "lon": "25.2833",
      "lat": "48.4667"
  },
  {
      "name": "Zabolottya",
      "lon": "24.2667",
      "lat": "51.6333"
  },
  {
      "name": "Zabuzhzhia",
      "lon": "24.2628",
      "lat": "50.4853"
  },
  {
      "name": "Zahirne",
      "lon": "23.9761",
      "lat": "49.2750"
  },
  {
      "name": "Zalishchyky",
      "lon": "25.7374",
      "lat": "48.6392"
  },
  {
      "name": "Zaliznychne",
      "lon": "36.1662",
      "lat": "47.6504"
  },
  {
      "name": "Zaliznyi Port",
      "lon": "32.2983",
      "lat": "46.1222"
  },
  {
      "name": "Zalukva",
      "lon": "24.7111",
      "lat": "49.1192"
  },
  {
      "name": "Zaluzh’ye",
      "lon": "23.4292",
      "lat": "49.9661"
  },
  {
      "name": "Zamahora",
      "lon": "24.8217",
      "lat": "48.1022"
  },
  {
      "name": "Zaozerne",
      "lon": "33.2747",
      "lat": "45.1600"
  },
  {
      "name": "Zaperedillia",
      "lon": "23.5042",
      "lat": "48.4747"
  },
  {
      "name": "Zaporizhzhia",
      "lon": "35.1383",
      "lat": "47.8378"
  },
  {
      "name": "Zarichany",
      "lon": "28.6500",
      "lat": "50.2300"
  },
  {
      "name": "Zarichchia",
      "lon": "24.2975",
      "lat": "50.8383"
  },
  {
      "name": "Zarichne",
      "lon": "28.7939",
      "lat": "48.7017"
  },
  {
      "name": "Zarih",
      "lon": "32.6541",
      "lat": "49.8085"
  },
  {
      "name": "Zasluchne",
      "lon": "26.7747",
      "lat": "49.6581"
  },
  {
      "name": "Zastavna",
      "lon": "25.8500",
      "lat": "48.5167"
  },
  {
      "name": "Zatyshshia",
      "lon": "29.8708",
      "lat": "47.3353"
  },
  {
      "name": "Zavadiv",
      "lon": "23.7650",
      "lat": "49.2533"
  },
  {
      "name": "Zavadov",
      "lon": "23.3925",
      "lat": "50.0606"
  },
  {
      "name": "Zavodske",
      "lon": "33.3908",
      "lat": "50.4002"
  },
  {
      "name": "Zavorychi",
      "lon": "31.1328",
      "lat": "50.7056"
  },
  {
      "name": "Zaytseve",
      "lon": "35.6711",
      "lat": "48.4312"
  },
  {
      "name": "Zboriv",
      "lon": "25.1469",
      "lat": "49.6616"
  },
  {
      "name": "Zdvyzhivka",
      "lon": "30.0692",
      "lat": "50.6722"
  },
  {
      "name": "Zelena",
      "lon": "26.7250",
      "lat": "48.3628"
  },
  {
      "name": "Zelenkiv",
      "lon": "30.6497",
      "lat": "48.7797"
  },
  {
      "name": "Zelenky",
      "lon": "30.9286",
      "lat": "49.7467"
  },
  {
      "name": "Zelenodolsk",
      "lon": "33.6524",
      "lat": "47.5631"
  },
  {
      "name": "Zelenohirske",
      "lon": "30.0978",
      "lat": "47.8728"
  },
  {
      "name": "Zhabotyn",
      "lon": "32.1506",
      "lat": "49.1575"
  },
  {
      "name": "Zhashkiv",
      "lon": "30.1000",
      "lat": "49.2500"
  },
  {
      "name": "Zhdanivka",
      "lon": "35.0637",
      "lat": "48.9623"
  },
  {
      "name": "Zhdeniievo",
      "lon": "22.9833",
      "lat": "48.7667"
  },
  {
      "name": "Zhmerynka",
      "lon": "28.0992",
      "lat": "49.0425"
  },
  {
      "name": "Zhniatyno",
      "lon": "22.5958",
      "lat": "48.3506"
  },
  {
      "name": "Zhovkva",
      "lon": "23.9667",
      "lat": "50.0667"
  },
  {
      "name": "Zhovte",
      "lon": "33.5401",
      "lat": "48.5041"
  },
  {
      "name": "Zhovti Vody",
      "lon": "33.5167",
      "lat": "48.3500"
  },
  {
      "name": "Zhukotyn",
      "lon": "25.0642",
      "lat": "48.6778"
  },
  {
      "name": "Zhuky",
      "lon": "34.5007",
      "lat": "49.6749"
  },
  {
      "name": "Zhuravlivka",
      "lon": "28.7292",
      "lat": "48.6394"
  },
  {
      "name": "Zhuravne",
      "lon": "28.1781",
      "lat": "49.5081"
  },
  {
      "name": "Zhvyrka",
      "lon": "24.2567",
      "lat": "50.4650"
  },
  {
      "name": "Zhydachiv",
      "lon": "24.1333",
      "lat": "49.3833"
  },
  {
      "name": "Zhytomyr",
      "lon": "28.6578",
      "lat": "50.2544"
  },
  {
      "name": "Zinkiv",
      "lon": "34.3668",
      "lat": "50.2081"
  },
  {
      "name": "Zinkiv",
      "lon": "27.0722",
      "lat": "49.0769"
  },
  {
      "name": "Zmiiv",
      "lon": "36.3558",
      "lat": "49.6878"
  },
  {
      "name": "Znamenivka",
      "lon": "35.4561",
      "lat": "48.6344"
  },
  {
      "name": "Znamianka",
      "lon": "32.6733",
      "lat": "48.7136"
  },
  {
      "name": "Zolochiv",
      "lon": "24.9031",
      "lat": "49.8075"
  },
  {
      "name": "Zolote",
      "lon": "38.5167",
      "lat": "48.6833"
  },
  {
      "name": "Zolotonosha",
      "lon": "32.0333",
      "lat": "49.6833"
  },
  {
      "name": "Zoria",
      "lon": "29.6989",
      "lat": "45.9917"
  },
  {
      "name": "Zoryane",
      "lon": "36.8260",
      "lat": "48.4985"
  },
  {
      "name": "Zvenyhorod",
      "lon": "24.2469",
      "lat": "49.7328"
  },
  {
      "name": "Zvenyhorodka",
      "lon": "30.9667",
      "lat": "49.0833"
  }
]

export default cities;
