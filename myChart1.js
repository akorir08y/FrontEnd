const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');


var local_church_offering = {
  "totalAmount": "1020912.00",
  "sessionNumber": 0,
  "payload": {
    "localChurchFunds": {
      "Pathfinders": 60,
      "Singles_Water_Project": 5900,
      "Church_Budget": 28350,
      "Sabbath_School": 7400,
      "Youths": 440,
      "Local_Church": 1320,
      "Welfare": 48830,
      "Elders": 1200,
      "Adventurers": 560,
      "Development": 517670,
      "Camp_Meeting_Expenses": 26800,
      "Children": 260,
      "Singles": 1600,
      "Adventist_Muslim_Relations": 60,
      "Communication": 300,
      "Msamaria": 500,
      "Chaplaincy": 9970,
      "Pathfinders_Tents": 12650,
      "Amo": 5120,
      "local_combined_offerings": 12650,
      "Crusade": 200,
      "Special_Needs": 100,
      "Evangelism": 100,
      "Ambassadors": 110,
      "Health_Hiv_And_Aids": 250,
      "Master_Guide": 60,
      "Church_Choir": 2520,
      "Deaconry": 2800,
      "Vocational_Bible_School": 1980
    },
    "members": [
      {
        "totalAmount": "20.00",
        "memberNumber": "254702824549",
        "memberName": "Owere Dockens",
        "Deaconry": 20,
        "transactionDate": "2024-02-03 20:32:42.398141",
        "meansOfPayment": "Cash",
        "receiptNumber": "11071677"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254723836757",
        "tithe": "50",
        "memberName": "Walter Nyachae",
        "transactionDate": "2024-02-03 20:44:40.449136",
        "meansOfPayment": "Cash",
        "receiptNumber": "11072200"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "BS3137",
        "Singles_Water_Project": 300,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-13 17:30:18.488892",
        "meansOfPayment": "USSD",
        "receiptNumber": "11225414"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CN8353",
        "Welfare": 300,
        "memberName": "Edwin Mokaya",
        "transactionDate": "2024-02-14 04:02:49.61497",
        "meansOfPayment": "USSD",
        "receiptNumber": "11230629"
      },
      {
        "totalAmount": "1900.00",
        "memberNumber": "CN8350",
        "tithe": "1600",
        "memberName": "Judith Mobisa",
        "transactionDate": "2024-02-13 22:11:12.02893",
        "meansOfPayment": "USSD",
        "receiptNumber": "11229190",
        "camp": "300"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0437",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Catherine Bosibori",
        "combined": "25",
        "transactionDate": "2024-02-14 12:30:33.984315",
        "meansOfPayment": "USSD",
        "receiptNumber": "11234104"
      },
      {
        "totalAmount": "12650.00",
        "Pathfinders_Tents": 12650,
        "memberNumber": "CN8350",
        "memberName": "Judith Mobisa",
        "transactionDate": "2024-02-15 19:04:58.556678",
        "meansOfPayment": "USSD",
        "receiptNumber": "11241180"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8250",
        "Welfare": 500,
        "memberName": "Odhiambo Joshua",
        "transactionDate": "2024-02-16 10:51:23.888865",
        "meansOfPayment": "USSD",
        "receiptNumber": "11244444"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2007",
        "Welfare": 500,
        "memberName": "Simon Omuono",
        "transactionDate": "2024-02-16 07:49:42.375225",
        "meansOfPayment": "USSD",
        "receiptNumber": "11244190"
      },
      {
        "totalAmount": "2030.00",
        "memberNumber": "CN4509",
        "tithe": "2030",
        "memberName": "Rose Atieno Omiti",
        "transactionDate": "2024-02-16 09:10:17.792311",
        "meansOfPayment": "USSD",
        "receiptNumber": "11244015"
      },
      {
        "totalAmount": "5200.00",
        "memberNumber": "CN8502",
        "local_combined_offerings": 100,
        "tithe": "4800",
        "memberName": "Janet Ouma",
        "combined": "100",
        "transactionDate": "2024-02-16 19:57:56.010215",
        "meansOfPayment": "USSD",
        "Church_Budget": 200,
        "receiptNumber": "11247902"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8502",
        "Welfare": 500,
        "memberName": "Janet Ouma",
        "transactionDate": "2024-02-16 18:00:38.02409",
        "meansOfPayment": "USSD",
        "receiptNumber": "11247920"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CO2789",
        "local_combined_offerings": 150,
        "tithe": "500",
        "memberName": "Philemon Juma",
        "combined": "150",
        "transactionDate": "2024-02-16 20:49:21.485897",
        "meansOfPayment": "USSD",
        "receiptNumber": "11248417",
        "camp": "200"
      },
      {
        "totalAmount": "800.00",
        "memberNumber": "CN9726",
        "local_combined_offerings": 50,
        "Welfare": 600,
        "tithe": "100",
        "memberName": "Jennifer Hayanga",
        "combined": "50",
        "transactionDate": "2024-02-17 08:50:25.754687",
        "meansOfPayment": "USSD",
        "receiptNumber": "11254596"
      },
      {
        "totalAmount": "1800.00",
        "memberNumber": "CN8353",
        "tithe": "1800",
        "memberName": "Edwin Mokaya",
        "transactionDate": "2024-02-17 11:16:06.018977",
        "meansOfPayment": "USSD",
        "receiptNumber": "11255980"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "254711884338",
        "local_combined_offerings": 75,
        "memberName": "Naomi Chepkirui",
        "combined": "75",
        "transactionDate": "2024-02-17 16:24:15.277693",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271328"
      },
      {
        "totalAmount": "4000.00",
        "memberNumber": "CN2245",
        "tithe": "4000",
        "memberName": "Benard Mutethia",
        "transactionDate": "2024-02-03 20:15:05.468216",
        "meansOfPayment": "Cash",
        "receiptNumber": "11071061"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CU6007",
        "local_combined_offerings": 250,
        "memberName": "Eva Achieng ",
        "combined": "250",
        "transactionDate": "2024-02-17 13:01:32.565539",
        "meansOfPayment": "USSD",
        "receiptNumber": "11263567"
      },
      {
        "totalAmount": "100.00",
        "Amo": 50,
        "memberNumber": "CN9729",
        "Special_Needs": 50,
        "memberName": "Paulsam Ondieki",
        "transactionDate": "2024-02-17 15:55:13.803568",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270261"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN4474",
        "memberName": "Queenter Olima ",
        "Children": 50,
        "transactionDate": "2024-02-17 16:01:31.01264",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270509"
      },
      {
        "totalAmount": "710.00",
        "memberNumber": "BS3137",
        "local_combined_offerings": 177.5,
        "tithe": "355",
        "memberName": "Phoebe Omune",
        "combined": "177.5",
        "transactionDate": "2024-02-17 19:18:23.157318",
        "meansOfPayment": "USSD",
        "receiptNumber": "11278209"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "transactionDate": "2024-02-17 14:08:10.651837",
        "meansOfPayment": "USSD",
        "receiptNumber": "11270736",
        "camp": "150"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO2785",
        "tithe": "50",
        "memberName": "Judith Anyango Okoth",
        "transactionDate": "2024-02-17 16:08:51.85707",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270758"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8261",
        "Welfare": 500,
        "memberName": "Paul Nyambane",
        "transactionDate": "2024-02-19 17:40:26.522822",
        "meansOfPayment": "USSD",
        "receiptNumber": "11316619"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0413",
        "Welfare": 200,
        "memberName": "Margaret Kibagendi",
        "transactionDate": "2024-02-21 19:21:01.339231",
        "meansOfPayment": "USSD",
        "receiptNumber": "11333376"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CQ4376",
        "tithe": "50",
        "memberName": "Dominic  Ogora Mauti",
        "transactionDate": "2024-02-24 12:13:22.942307",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364177"
      },
      {
        "totalAmount": "600.00",
        "memberNumber": "CO2440",
        "local_combined_offerings": 50,
        "Development": 500,
        "memberName": "James Ombura",
        "combined": "50",
        "transactionDate": "2024-02-24 12:13:55.245938",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364282"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2510",
        "tithe": "500",
        "memberName": "Phyllis Ongeri",
        "transactionDate": "2024-02-24 10:17:54.63162",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364667"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0417",
        "Welfare": 500,
        "memberName": "Jane Oloo",
        "transactionDate": "2024-02-24 10:26:53.291572",
        "meansOfPayment": "USSD",
        "receiptNumber": "11365461"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8216",
        "tithe": "200",
        "memberName": "Everlyne Nyamweya",
        "transactionDate": "2024-02-24 12:18:57.884759",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364753"
      },
      {
        "local_combined_offerings": 25,
        "Pathfinders": 20,
        "memberName": "Ombaye Matianyi",
        "Ambassadors": 20,
        "transactionDate": "2024-02-24 09:51:40.153914",
        "thirteenth": "20",
        "Church_Budget": 50,
        "camp": "50",
        "Master_Guide": 20,
        "totalAmount": "590.00",
        "Youths": 20,
        "memberNumber": "CN8384",
        "Elders": 100,
        "Adventurers": 20,
        "Development": 100,
        "Camp_Meeting_Expenses": 100,
        "combined": "25",
        "Children": 20,
        "meansOfPayment": "USSD",
        "receiptNumber": "11361434"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8226",
        "tithe": "100",
        "memberName": "Lillian Akoth",
        "transactionDate": "2024-02-24 12:13:41.624256",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364241"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN5267",
        "local_combined_offerings": 25,
        "tithe": "100",
        "memberName": "Pamela Auma",
        "combined": "25",
        "transactionDate": "2024-02-24 18:07:38.244432",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384767",
        "camp": "50"
      },
      {
        "totalAmount": "1500.00",
        "memberNumber": "CN8390",
        "Welfare": 500,
        "tithe": "1000",
        "memberName": "Alice Mokeira Mose",
        "transactionDate": "2024-02-24 17:40:25.623148",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383545"
      },
      {
        "totalAmount": "200.00",
        "Youths": 50,
        "memberNumber": "CQ8882",
        "Local_Church": 50,
        "memberName": "Sharon Anyango",
        "transactionDate": "2024-02-24 16:04:00.194932",
        "meansOfPayment": "USSD",
        "receiptNumber": "11378490",
        "camp": "100"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "CN8216",
        "Welfare": 2000,
        "memberName": "Everlyne Nyamweya",
        "transactionDate": "2024-02-24 17:43:52.568306",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383725"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "AR9722",
        "local_combined_offerings": 25,
        "memberName": "Mary Onyango",
        "combined": "25",
        "transactionDate": "2024-02-24 17:45:34.215716",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383816"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8395",
        "Welfare": 500,
        "tithe": "500",
        "memberName": "James Morara",
        "transactionDate": "2024-02-24 17:51:56.016637",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384085"
      },
      {
        "totalAmount": "530.00",
        "memberNumber": "CO4074",
        "Welfare": 530,
        "memberName": "Tom Koyo Lwanga",
        "transactionDate": "2024-02-25 11:23:26.58883",
        "meansOfPayment": "USSD",
        "receiptNumber": "11415454"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CM1593",
        "Welfare": 500,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-25 13:42:42.459277",
        "meansOfPayment": "USSD",
        "receiptNumber": "11419137"
      },
      {
        "Msamaria": 500,
        "tithe": "27750",
        "memberName": "Susan Kuria",
        "transactionDate": "2024-02-27 11:34:05.567594",
        "thirteenth": "500",
        "camp": "2000",
        "totalAmount": "32950.00",
        "memberNumber": "CN8424",
        "Local_Church": 500,
        "Adventurers": 500,
        "Children": 200,
        "Deaconry": 1000,
        "meansOfPayment": "USSD",
        "receiptNumber": "11453426"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8424",
        "Welfare": 500,
        "memberName": "Susan Kuria",
        "transactionDate": "2024-02-27 09:35:38.971191",
        "meansOfPayment": "USSD",
        "receiptNumber": "11453439"
      },
      {
        "totalAmount": "20300.00",
        "memberNumber": "CN8643",
        "local_combined_offerings": 5000,
        "tithe": "10300",
        "memberName": "Merseline Achola",
        "combined": "5000",
        "transactionDate": "2024-02-27 19:35:35.409516",
        "meansOfPayment": "USSD",
        "receiptNumber": "11457874"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "BS3137",
        "Singles_Water_Project": 300,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-01 18:14:28.237843",
        "meansOfPayment": "USSD",
        "receiptNumber": "11023972"
      },
      {
        "totalAmount": "50000.00",
        "memberNumber": "CM1593",
        "Development": 50000,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-28 00:00:22.470001",
        "meansOfPayment": "USSD",
        "receiptNumber": "11459792"
      },
      {
        "totalAmount": "5200.00",
        "memberNumber": "CN2286",
        "tithe": "5200",
        "memberName": "Sophia Otuol ",
        "transactionDate": "2024-02-01 21:30:51.693127",
        "meansOfPayment": "USSD",
        "receiptNumber": "11024548"
      },
      {
        "totalAmount": "7400.00",
        "memberNumber": "CN4910",
        "memberName": "Kengere  Charles",
        "transactionDate": "2024-02-27 20:02:26.384251",
        "meansOfPayment": "USSD",
        "receiptNumber": "11459301",
        "Sabbath_School": 7400
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "AX8192",
        "Development": 500,
        "memberName": "Colline Barasa",
        "transactionDate": "2024-02-29 07:09:42.85247",
        "meansOfPayment": "USSD",
        "receiptNumber": "11466757"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8243",
        "Welfare": 500,
        "memberName": "Dorothy Amuka",
        "transactionDate": "2024-02-29 08:06:32.685239",
        "meansOfPayment": "USSD",
        "receiptNumber": "11467051"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "BS3137",
        "Welfare": 500,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-29 08:25:39.173955",
        "meansOfPayment": "USSD",
        "receiptNumber": "11467170"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2311",
        "Welfare": 500,
        "memberName": "Isaac Khaemba",
        "transactionDate": "2024-02-29 09:38:35.164537",
        "meansOfPayment": "USSD",
        "receiptNumber": "11467595"
      },
      {
        "totalAmount": "60.00",
        "memberNumber": "CO0403",
        "memberName": "Calvin Bosire",
        "transactionDate": "2024-02-03 08:07:22.303186",
        "meansOfPayment": "USSD",
        "receiptNumber": "11034162",
        "Adventist_Muslim_Relations": 60
      },
      {
        "totalAmount": "2350.00",
        "memberNumber": "CN8261",
        "tithe": "2350",
        "memberName": "Paul Nyambane",
        "transactionDate": "2024-02-03 12:16:37.343049",
        "meansOfPayment": "USSD",
        "receiptNumber": "11048459"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN2240",
        "tithe": "1000",
        "memberName": "Esther Ochieng",
        "transactionDate": "2024-02-03 12:17:10.215372",
        "meansOfPayment": "USSD",
        "receiptNumber": "11048573"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CP1681",
        "tithe": "150",
        "memberName": "Wesley Osoro",
        "transactionDate": "2024-02-03 13:23:04.304378",
        "meansOfPayment": "USSD",
        "receiptNumber": "11058609"
      },
      {
        "totalAmount": "11000.00",
        "memberNumber": "BH2209",
        "tithe": "11000",
        "memberName": "John Ochieng Oyuke",
        "transactionDate": "2024-02-05 07:16:50.987339",
        "meansOfPayment": "USSD",
        "receiptNumber": "11100499"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "BS3137",
        "Development": 2000,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-08 08:33:06.417438",
        "meansOfPayment": "USSD",
        "receiptNumber": "11129645"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CO1288",
        "local_combined_offerings": 150,
        "memberName": "Erick A Sangili",
        "combined": "150",
        "transactionDate": "2024-02-10 10:29:23.39031",
        "meansOfPayment": "USSD",
        "receiptNumber": "11146318"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN8212",
        "local_combined_offerings": 20,
        "tithe": "10",
        "memberName": "Naftal Mokua Mabuka",
        "combined": "20",
        "transactionDate": "2024-02-10 17:31:18.970252",
        "meansOfPayment": "USSD",
        "receiptNumber": "11172806"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8326",
        "local_combined_offerings": 50,
        "memberName": "Naftal Onyiego",
        "combined": "50",
        "transactionDate": "2024-02-03 20:17:46.626584",
        "meansOfPayment": "Cash",
        "receiptNumber": "11071125"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0493",
        "local_combined_offerings": 50,
        "memberName": "Everlyne Nyaboke ",
        "combined": "50",
        "transactionDate": "2024-02-03 21:06:06.588823",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073022"
      },
      {
        "totalAmount": "3349.00",
        "memberNumber": "CN8363",
        "local_combined_offerings": 837.5,
        "tithe": "1674",
        "memberName": "Valary Anyango",
        "combined": "837.5",
        "transactionDate": "2024-02-05 08:48:04.915859",
        "meansOfPayment": "USSD",
        "receiptNumber": "11100285"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CO4058",
        "local_combined_offerings": 25,
        "tithe": "100",
        "memberName": "Owuor Elijah Ochieng",
        "combined": "25",
        "transactionDate": "2024-02-03 12:19:35.66949",
        "meansOfPayment": "USSD",
        "receiptNumber": "11048929"
      },
      {
        "totalAmount": "250.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "Camp_Meeting_Expenses": 150,
        "Deaconry": 50,
        "transactionDate": "2024-02-03 12:46:02.515247",
        "meansOfPayment": "USSD",
        "Church_Budget": 50,
        "receiptNumber": "11050682"
      },
      {
        "totalAmount": "650.00",
        "memberNumber": "CN8301",
        "tithe": "650",
        "memberName": "Caroline Nyaboke",
        "transactionDate": "2024-02-03 12:06:55.780034",
        "meansOfPayment": "USSD",
        "receiptNumber": "11046274"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0459",
        "tithe": "100",
        "memberName": "Belinda Sidho",
        "transactionDate": "2024-02-03 11:25:01.607635",
        "meansOfPayment": "USSD",
        "receiptNumber": "11038917"
      },
      {
        "totalAmount": "1100.00",
        "memberNumber": "CN8420",
        "local_combined_offerings": 50,
        "tithe": "200",
        "memberName": "Josephat Mose",
        "combined": "50",
        "transactionDate": "2024-02-02 23:08:41.657855",
        "meansOfPayment": "USSD",
        "Church_Budget": 100,
        "receiptNumber": "11032876",
        "camp": "700"
      },
      {
        "totalAmount": "13000.00",
        "memberNumber": "BS3137",
        "Development": 13000,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-07 10:00:45.028214",
        "meansOfPayment": "USSD",
        "receiptNumber": "11121213"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO2758",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Daniel Omari",
        "combined": "25",
        "transactionDate": "2024-02-03 10:42:22.108031",
        "meansOfPayment": "USSD",
        "receiptNumber": "11036476"
      },
      {
        "totalAmount": "600.00",
        "memberNumber": "CN8356",
        "tithe": "600",
        "memberName": "Eucabeth Nyanduko",
        "transactionDate": "2024-02-10 22:33:29.058263",
        "meansOfPayment": "USSD",
        "receiptNumber": "11185069"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO4058",
        "tithe": "100",
        "memberName": "Owuor Elijah Ochieng",
        "transactionDate": "2024-02-03 20:20:07.456617",
        "meansOfPayment": "USSD",
        "receiptNumber": "11071218"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO0447",
        "local_combined_offerings": 200,
        "memberName": "Egra Nyaboke Osoro",
        "combined": "200",
        "transactionDate": "2024-02-10 09:00:44.5023",
        "meansOfPayment": "USSD",
        "receiptNumber": "11147799"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8226",
        "tithe": "100",
        "memberName": "Lillian Akoth",
        "transactionDate": "2024-02-10 12:00:33.830757",
        "meansOfPayment": "USSD",
        "receiptNumber": "11154687"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CT6452",
        "local_combined_offerings": 75,
        "cdf": "150",
        "tithe": "400",
        "memberName": "Mwalo Abel Ochieng ",
        "combined": "75",
        "transactionDate": "2024-02-10 12:02:27.999543",
        "meansOfPayment": "USSD",
        "thirteenth": "150",
        "receiptNumber": "11155124",
        "camp": "150"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0403",
        "Development": 200,
        "memberName": "Calvin Bosire",
        "transactionDate": "2024-02-11 16:54:34.604681",
        "meansOfPayment": "USSD",
        "receiptNumber": "11200993"
      },
      {
        "totalAmount": "60.00",
        "memberNumber": "CN8508",
        "local_combined_offerings": 15,
        "tithe": "30",
        "memberName": "Rose Okuto",
        "combined": "15",
        "transactionDate": "2024-02-12 11:09:50.196114",
        "meansOfPayment": "USSD",
        "receiptNumber": "11209580"
      },
      {
        "totalAmount": "320.00",
        "memberNumber": "CN9725",
        "tithe": "320",
        "memberName": "Caroline Mose",
        "transactionDate": "2024-02-03 20:41:35.457081",
        "meansOfPayment": "Cash",
        "receiptNumber": "11072048"
      },
      {
        "totalAmount": "2520.00",
        "Church_Choir": 2520,
        "memberNumber": "CO2311",
        "memberName": "Isaac Khaemba",
        "transactionDate": "2024-02-15 16:44:24.386135",
        "meansOfPayment": "USSD",
        "receiptNumber": "11240508"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN9731",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Naomi Aketch Bollo",
        "combined": "25",
        "transactionDate": "2024-02-10 17:17:57.779862",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172149"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "254708139238",
        "memberName": "Hesbon Omboga",
        "Deaconry": 100,
        "transactionDate": "2024-02-10 17:26:38.824073",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172581"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CN8508",
        "local_combined_offerings": 100,
        "tithe": "200",
        "memberName": "Rose Okuto",
        "combined": "100",
        "transactionDate": "2024-02-15 11:15:33.0822",
        "meansOfPayment": "USSD",
        "receiptNumber": "11238799"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0332",
        "Development": 100,
        "memberName": "Miller Getanda",
        "transactionDate": "2024-02-15 07:25:56.264694",
        "meansOfPayment": "USSD",
        "receiptNumber": "11238234"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8356",
        "Welfare": 500,
        "memberName": "Eucabeth Nyanduko",
        "transactionDate": "2024-02-15 11:56:09.10572",
        "meansOfPayment": "USSD",
        "receiptNumber": "11239003"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8212",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Naftal Mokua Mabuka",
        "combined": "50",
        "transactionDate": "2024-02-16 21:58:15.85567",
        "meansOfPayment": "USSD",
        "receiptNumber": "11249618"
      },
      {
        "totalAmount": "100.00",
        "Youths": 50,
        "memberNumber": "CQ8882",
        "Local_Church": 50,
        "memberName": "Sharon Anyango",
        "transactionDate": "2024-02-17 07:29:54.015047",
        "meansOfPayment": "USSD",
        "receiptNumber": "11251408"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0451",
        "Welfare": 500,
        "memberName": "Geoffrey Karani",
        "transactionDate": "2024-02-17 07:54:51.154094",
        "meansOfPayment": "USSD",
        "receiptNumber": "11251614"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8508",
        "memberName": "Rose Okuto",
        "Camp_Meeting_Expenses": 1000,
        "transactionDate": "2024-02-17 06:11:30.834994",
        "meansOfPayment": "USSD",
        "receiptNumber": "11251785"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8365",
        "tithe": "500",
        "memberName": "Regina Omutamba",
        "transactionDate": "2024-02-17 04:47:56.939621",
        "meansOfPayment": "USSD",
        "receiptNumber": "11251194"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN8270",
        "local_combined_offerings": 25,
        "memberName": "Yunes Moraa N.",
        "combined": "25",
        "transactionDate": "2024-02-02 15:48:11.169428",
        "meansOfPayment": "Cash",
        "receiptNumber": "11028529"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CL2130",
        "local_combined_offerings": 250,
        "Local_Church": 500,
        "memberName": "Esther Kamande ",
        "combined": "250",
        "transactionDate": "2024-02-02 15:58:32.316256",
        "meansOfPayment": "Cash",
        "receiptNumber": "11028600"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN9724",
        "local_combined_offerings": 25,
        "memberName": "Rose Mecha",
        "combined": "25",
        "transactionDate": "2024-02-17 16:32:38.745296",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271669"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "AT0827",
        "tithe": "100",
        "memberName": "Geoffrey Ronoh",
        "transactionDate": "2024-02-17 16:53:03.387261",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272446"
      },
      {
        "totalAmount": "1335.00",
        "memberNumber": "CN8368",
        "memberName": "Esther Ombaye",
        "Children": 1335,
        "transactionDate": "2024-02-17 16:56:17.420706",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272584"
      },
      {
        "totalAmount": "1601.00",
        "memberNumber": "CN4901",
        "memberName": "Rose Charles",
        "transactionDate": "2024-02-17 16:56:55.920274",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272608",
        "Sabbath_School": 1601
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "254720836634",
        "Development": 2000,
        "memberName": "Hon. Mosiria",
        "transactionDate": "2024-02-17 15:52:19.075381",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270135"
      },
      {
        "totalAmount": "700.00",
        "memberNumber": "CN8254",
        "local_combined_offerings": 50,
        "Welfare": 500,
        "tithe": "100",
        "memberName": "Rachel Atambo",
        "combined": "50",
        "transactionDate": "2024-02-17 17:10:18.184742",
        "meansOfPayment": "Cash",
        "receiptNumber": "11273151"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "AF2996",
        "local_combined_offerings": 200,
        "memberName": "Flavian Mutamba",
        "combined": "200",
        "transactionDate": "2024-02-17 15:58:48.378154",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270408"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "BN5435",
        "tithe": "150",
        "memberName": "Jacob Oyugi",
        "transactionDate": "2024-02-17 16:15:36.649491",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271015"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CO2756",
        "local_combined_offerings": 15,
        "tithe": "120",
        "memberName": "Naomy Kerubo",
        "combined": "15",
        "transactionDate": "2024-02-17 16:34:43.178171",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271735"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO0413",
        "Welfare": 50,
        "memberName": "Margaret Kibagendi",
        "transactionDate": "2024-02-17 16:18:28.345063",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271126"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8315",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Grace Anyango ",
        "combined": "25",
        "transactionDate": "2024-02-17 16:26:07.576001",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271411"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CU1364",
        "tithe": "300",
        "memberName": "Veronica Mtwanguo ",
        "transactionDate": "2024-02-18 15:10:51.604594",
        "meansOfPayment": "USSD",
        "receiptNumber": "11299582"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "BH2209",
        "Welfare": 500,
        "memberName": "John Ochieng Oyuke",
        "transactionDate": "2024-02-20 15:33:42.792925",
        "meansOfPayment": "USSD",
        "receiptNumber": "11324078"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "BS3137",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Phoebe Omune",
        "combined": "50",
        "transactionDate": "2024-02-20 14:21:43.570757",
        "meansOfPayment": "USSD",
        "receiptNumber": "11324419"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8252",
        "local_combined_offerings": 100,
        "memberName": "Zipporah K. Michira",
        "combined": "100",
        "transactionDate": "2024-02-20 15:48:02.243858",
        "meansOfPayment": "USSD",
        "receiptNumber": "11325280"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CO2758",
        "tithe": "1000",
        "memberName": "Daniel Omari",
        "transactionDate": "2024-02-22 00:10:30.882804",
        "meansOfPayment": "USSD",
        "receiptNumber": "11334965"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO1165",
        "Welfare": 500,
        "memberName": "Bernard Omae",
        "transactionDate": "2024-02-22 00:57:35.168922",
        "meansOfPayment": "USSD",
        "receiptNumber": "11334998"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8261",
        "tithe": "1000",
        "memberName": "Paul Nyambane",
        "transactionDate": "2024-02-24 10:25:18.184681",
        "meansOfPayment": "USSD",
        "receiptNumber": "11365259"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN9724",
        "local_combined_offerings": 50,
        "memberName": "Rose Mecha",
        "combined": "50",
        "transactionDate": "2024-02-24 17:46:28.884283",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383860"
      },
      {
        "totalAmount": "1240.00",
        "memberNumber": "CN4901",
        "memberName": "Rose Charles",
        "transactionDate": "2024-02-24 18:03:56.90273",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384609",
        "Sabbath_School": 1240
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN8857",
        "tithe": "50",
        "memberName": "Judith Auma Oidah",
        "transactionDate": "2024-02-24 16:25:50.491984",
        "meansOfPayment": "Cash",
        "receiptNumber": "11379551"
      },
      {
        "totalAmount": "980.00",
        "memberNumber": "CN8368",
        "memberName": "Esther Ombaye",
        "Vocational_Bible_School": 980,
        "transactionDate": "2024-02-24 18:05:01.737937",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384661"
      },
      {
        "totalAmount": "2020.00",
        "memberNumber": "CN4964",
        "memberName": "Eric Onsongo Mwebi",
        "Deaconry": 2020,
        "transactionDate": "2024-02-24 18:05:57.072313",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384700"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "BS3137",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Phoebe Omune",
        "combined": "50",
        "transactionDate": "2024-02-24 16:56:39.718196",
        "meansOfPayment": "USSD",
        "Church_Budget": 100,
        "receiptNumber": "11381082"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0412",
        "local_combined_offerings": 50,
        "memberName": "Ednah Kwamboka Isaac",
        "combined": "50",
        "transactionDate": "2024-02-24 17:35:19.809736",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383286"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "254792149664",
        "memberName": "Melvin Awuor",
        "transactionDate": "2024-02-03 17:13:54.563509",
        "meansOfPayment": "Cash",
        "receiptNumber": "11064062",
        "camp": "200"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO3967",
        "Welfare": 500,
        "memberName": "Stanford Bogeni",
        "transactionDate": "2024-02-27 15:08:44.427349",
        "meansOfPayment": "USSD",
        "receiptNumber": "11456792"
      },
      {
        "totalAmount": "80.00",
        "memberNumber": "CO4060",
        "tithe": "80",
        "memberName": "Phanuel Odero",
        "transactionDate": "2024-02-28 18:30:13.83701",
        "meansOfPayment": "USSD",
        "receiptNumber": "11464344"
      },
      {
        "totalAmount": "250.00",
        "memberNumber": "BR6290",
        "tithe": "50",
        "Development": 200,
        "memberName": "Linah Kemunto",
        "transactionDate": "2024-02-03 09:29:17.559211",
        "meansOfPayment": "USSD",
        "receiptNumber": "11039190"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CN8216",
        "tithe": "300",
        "memberName": "Everlyne Nyamweya",
        "transactionDate": "2024-02-03 08:50:41.786999",
        "meansOfPayment": "USSD",
        "receiptNumber": "11036895"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO2783",
        "memberName": "Helda Kwamboka ",
        "transactionDate": "2024-02-03 09:11:02.213486",
        "meansOfPayment": "USSD",
        "receiptNumber": "11037944",
        "camp": "200"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CS6602",
        "tithe": "200",
        "memberName": "Nelson Nyabaga",
        "transactionDate": "2024-02-03 11:58:14.873307",
        "meansOfPayment": "USSD",
        "receiptNumber": "11044337",
        "camp": "100"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8321",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Agatha Wamalwa",
        "combined": "25",
        "transactionDate": "2024-02-03 10:39:35.021708",
        "meansOfPayment": "USSD",
        "receiptNumber": "11036379"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN4509",
        "local_combined_offerings": 25,
        "memberName": "Rose Atieno Omiti",
        "combined": "25",
        "transactionDate": "2024-02-03 08:40:53.810029",
        "meansOfPayment": "USSD",
        "receiptNumber": "11036432"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN9731",
        "local_combined_offerings": 25,
        "cdf": "20",
        "tithe": "100",
        "memberName": "Naomi Aketch Bollo",
        "combined": "25",
        "transactionDate": "2024-02-03 20:00:56.115009",
        "meansOfPayment": "Cash",
        "receiptNumber": "11070509"
      },
      {
        "totalAmount": "50.00",
        "Youths": 50,
        "memberNumber": "CN4596",
        "memberName": "Margaret Mumbua ",
        "transactionDate": "2024-02-03 17:18:09.380047",
        "meansOfPayment": "Cash",
        "receiptNumber": "11064256"
      },
      {
        "totalAmount": "2790.00",
        "memberNumber": "CN4964",
        "memberName": "Eric Onsongo Mwebi",
        "Deaconry": 2790,
        "transactionDate": "2024-02-04 11:54:32.283708",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086844"
      },
      {
        "totalAmount": "250.00",
        "memberNumber": "CM1593",
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-06 16:55:14.258946",
        "meansOfPayment": "USSD",
        "Health_Hiv_And_Aids": 250,
        "receiptNumber": "11117014"
      },
      {
        "totalAmount": "1500.00",
        "memberNumber": "CN8188",
        "tithe": "500",
        "Development": 1000,
        "memberName": "Swenex Onkundi",
        "transactionDate": "2024-02-06 20:11:47.103602",
        "meansOfPayment": "USSD",
        "receiptNumber": "11117604"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2789",
        "local_combined_offerings": 50,
        "tithe": "300",
        "memberName": "Philemon Juma",
        "combined": "50",
        "transactionDate": "2024-02-10 08:29:28.173344",
        "meansOfPayment": "USSD",
        "receiptNumber": "11146323",
        "camp": "100"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "transactionDate": "2024-02-10 08:42:08.124977",
        "meansOfPayment": "USSD",
        "receiptNumber": "11146833",
        "camp": "150"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "Camp_Meeting_Expenses": 150,
        "transactionDate": "2024-02-10 10:44:21.55412",
        "meansOfPayment": "USSD",
        "receiptNumber": "11146955"
      },
      {
        "totalAmount": "350.00",
        "memberNumber": "CN8216",
        "tithe": "350",
        "memberName": "Everlyne Nyamweya",
        "transactionDate": "2024-02-10 11:02:35.570254",
        "meansOfPayment": "USSD",
        "receiptNumber": "11147931"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0316",
        "local_combined_offerings": 50,
        "memberName": "Peter Ososi Musa ",
        "combined": "50",
        "transactionDate": "2024-02-10 11:06:49.213757",
        "meansOfPayment": "USSD",
        "receiptNumber": "11148164"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0404",
        "local_combined_offerings": 50,
        "memberName": "Justin Matai",
        "combined": "50",
        "transactionDate": "2024-02-10 12:00:35.07106",
        "meansOfPayment": "USSD",
        "receiptNumber": "11154695"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CO0285",
        "Welfare": 1000,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-13 15:08:54.559039",
        "meansOfPayment": "USSD",
        "receiptNumber": "11225065"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CM1593",
        "Welfare": 500,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-13 16:03:37.785987",
        "meansOfPayment": "USSD",
        "receiptNumber": "11224380"
      },
      {
        "totalAmount": "540.00",
        "memberNumber": "BS3137",
        "local_combined_offerings": 135,
        "tithe": "270",
        "memberName": "Phoebe Omune",
        "combined": "135",
        "transactionDate": "2024-02-13 17:28:40.573326",
        "meansOfPayment": "USSD",
        "receiptNumber": "11225369"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "BS3137",
        "Welfare": 500,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-13 15:32:09.000447",
        "meansOfPayment": "USSD",
        "receiptNumber": "11225460"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO1288",
        "Welfare": 500,
        "memberName": "Erick A Sangili",
        "transactionDate": "2024-02-14 14:10:22.552123",
        "meansOfPayment": "USSD",
        "receiptNumber": "11233966"
      },
      {
        "totalAmount": "70.00",
        "memberNumber": "CO0403",
        "tithe": "70",
        "memberName": "Calvin Bosire",
        "transactionDate": "2024-02-16 17:15:56.930183",
        "meansOfPayment": "USSD",
        "receiptNumber": "11246716"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN9494",
        "Welfare": 500,
        "memberName": "Caleb Mokaya",
        "transactionDate": "2024-02-16 22:21:46.87622",
        "meansOfPayment": "USSD",
        "receiptNumber": "11250620"
      },
      {
        "totalAmount": "315.00",
        "memberNumber": "CO0278",
        "Local_Church": 100,
        "tithe": "215",
        "memberName": "Julian Moraa Nyairo ",
        "transactionDate": "2024-02-16 23:28:54.079659",
        "meansOfPayment": "USSD",
        "receiptNumber": "11250481"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8314",
        "memberName": "Sylvia Omede",
        "transactionDate": "2024-02-03 21:23:57.311907",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073774",
        "camp": "100"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CM7209",
        "local_combined_offerings": 50,
        "memberName": "Calvin Moreka",
        "combined": "50",
        "transactionDate": "2024-02-17 12:18:41.750177",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261773"
      },
      {
        "totalAmount": "30.00",
        "memberNumber": "AY7401",
        "Local_Church": 10,
        "tithe": "20",
        "memberName": "Joseph Odhiambo",
        "transactionDate": "2024-02-03 21:27:19.904242",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073932"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO3967",
        "Welfare": 500,
        "memberName": "Stanford Bogeni",
        "transactionDate": "2024-02-17 20:42:38.255348",
        "meansOfPayment": "USSD",
        "receiptNumber": "11281074"
      },
      {
        "totalAmount": "1200.00",
        "memberNumber": "CN8375",
        "tithe": "1200",
        "memberName": "Geoffrey Maranga",
        "transactionDate": "2024-02-17 16:20:06.010997",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271200"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8403",
        "memberName": "Naomi Moindi",
        "Singles": 200,
        "transactionDate": "2024-02-17 16:23:15.682373",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271304"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8321",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Agatha Wamalwa",
        "combined": "50",
        "transactionDate": "2024-02-17 16:28:22.801525",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271499"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4910",
        "Welfare": 500,
        "memberName": "Kengere  Charles",
        "transactionDate": "2024-02-18 20:10:00.140216",
        "meansOfPayment": "USSD",
        "receiptNumber": "11306617"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4910",
        "Welfare": 500,
        "memberName": "Kengere  Charles",
        "transactionDate": "2024-02-18 22:08:32.442447",
        "meansOfPayment": "USSD",
        "receiptNumber": "11306583"
      },
      {
        "totalAmount": "2500.00",
        "memberNumber": "CN9729",
        "Welfare": 2500,
        "memberName": "Paulsam Ondieki",
        "transactionDate": "2024-02-18 19:22:04.878694",
        "meansOfPayment": "USSD",
        "receiptNumber": "11305307"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8420",
        "Welfare": 500,
        "memberName": "Josephat Mose",
        "transactionDate": "2024-02-18 22:20:38.257954",
        "meansOfPayment": "USSD",
        "receiptNumber": "11306796"
      },
      {
        "totalAmount": "500.00",
        "Chaplaincy": 500,
        "memberNumber": "CN2286",
        "memberName": "Sophia Otuol ",
        "transactionDate": "2024-02-19 21:52:46.350632",
        "meansOfPayment": "USSD",
        "receiptNumber": "11318770"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8307",
        "Welfare": 500,
        "memberName": "Josheck  Mogaka",
        "transactionDate": "2024-02-20 10:40:03.868335",
        "meansOfPayment": "USSD",
        "receiptNumber": "11322753"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8426",
        "Welfare": 500,
        "memberName": "Serah Mwangi",
        "transactionDate": "2024-02-21 06:01:26.358559",
        "meansOfPayment": "USSD",
        "receiptNumber": "11329066"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "BS3137",
        "Singles_Water_Project": 2000,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-22 20:12:21.878289",
        "meansOfPayment": "USSD",
        "receiptNumber": "11340122"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4910",
        "Welfare": 500,
        "memberName": "Kengere  Charles",
        "transactionDate": "2024-02-23 19:38:19.576137",
        "meansOfPayment": "USSD",
        "receiptNumber": "11349246"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CT6452",
        "tithe": "100",
        "memberName": "Mwalo Abel Ochieng ",
        "transactionDate": "2024-02-24 10:13:49.192797",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364256"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2176",
        "Welfare": 500,
        "memberName": "Washington Muga Amoke",
        "transactionDate": "2024-02-24 10:27:50.190046",
        "meansOfPayment": "USSD",
        "receiptNumber": "11354301"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0076",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Moses Onyinge Nyamagera",
        "combined": "25",
        "transactionDate": "2024-02-24 09:02:35.060885",
        "meansOfPayment": "USSD",
        "receiptNumber": "11355997"
      },
      {
        "totalAmount": "700.00",
        "memberNumber": "CN8441",
        "Welfare": 500,
        "memberName": "Grace Achieng",
        "Deaconry": 200,
        "transactionDate": "2024-02-24 13:26:53.903099",
        "meansOfPayment": "USSD",
        "receiptNumber": "11376317"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8330",
        "Welfare": 500,
        "memberName": "Dennis Maranga ",
        "transactionDate": "2024-02-24 22:18:22.149122",
        "meansOfPayment": "USSD",
        "receiptNumber": "11396702"
      },
      {
        "totalAmount": "4370.00",
        "Chaplaincy": 4370,
        "memberNumber": "CO2783",
        "memberName": "Helda Kwamboka ",
        "transactionDate": "2024-02-26 11:47:50.163281",
        "meansOfPayment": "USSD",
        "receiptNumber": "11437473"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8188",
        "tithe": "500",
        "memberName": "Swenex Onkundi",
        "transactionDate": "2024-02-02 06:02:34.964528",
        "meansOfPayment": "USSD",
        "receiptNumber": "11025578"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0285",
        "Welfare": 500,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-29 14:05:31.64422",
        "meansOfPayment": "USSD",
        "receiptNumber": "11468814"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "BS3137",
        "Welfare": 500,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-29 10:41:11.475714",
        "meansOfPayment": "USSD",
        "receiptNumber": "11468404"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8403",
        "Welfare": 500,
        "memberName": "Naomi Moindi",
        "transactionDate": "2024-02-29 13:54:16.312771",
        "meansOfPayment": "USSD",
        "receiptNumber": "11468763"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "BS3137",
        "Singles_Water_Project": 1000,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-29 12:39:50.164036",
        "meansOfPayment": "USSD",
        "receiptNumber": "11468397"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CU1259",
        "tithe": "50",
        "memberName": "Mitchell Debra",
        "Ambassadors": 50,
        "transactionDate": "2024-02-03 10:46:14.407164",
        "meansOfPayment": "USSD",
        "Church_Budget": 50,
        "receiptNumber": "11036647"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8226",
        "tithe": "100",
        "memberName": "Lillian Akoth",
        "transactionDate": "2024-02-03 12:23:47.324362",
        "meansOfPayment": "USSD",
        "receiptNumber": "11049305"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CS9479",
        "local_combined_offerings": 150,
        "memberName": "Robert Okongo",
        "combined": "150",
        "transactionDate": "2024-02-03 21:20:15.061666",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073637"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN3235",
        "local_combined_offerings": 50,
        "memberName": "Christine Kwamboka",
        "combined": "50",
        "transactionDate": "2024-02-03 21:09:28.755732",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073160"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8254",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Rachel Atambo",
        "combined": "50",
        "transactionDate": "2024-02-03 17:09:40.514171",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063902"
      },
      {
        "totalAmount": "2090.00",
        "memberNumber": "CO2671",
        "local_combined_offerings": 517.5,
        "tithe": "1035",
        "memberName": "Rose Juma",
        "combined": "517.5",
        "transactionDate": "2024-02-03 16:39:06.553865",
        "meansOfPayment": "Cash",
        "receiptNumber": "11062635"
      },
      {
        "totalAmount": "460.00",
        "memberNumber": "CR3922",
        "local_combined_offerings": 50,
        "tithe": "340",
        "memberName": "Brainah Rugut",
        "combined": "50",
        "transactionDate": "2024-02-03 16:50:59.558487",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063145"
      },
      {
        "totalAmount": "900.00",
        "memberNumber": "CO0412",
        "local_combined_offerings": 50,
        "tithe": "300",
        "memberName": "Ednah Kwamboka Isaac",
        "combined": "50",
        "transactionDate": "2024-02-03 16:53:01.72249",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063202"
      },
      {
        "totalAmount": "25.00",
        "memberNumber": "254790880621",
        "memberName": "Kepher Maruka",
        "Deaconry": 25,
        "transactionDate": "2024-02-04 12:30:09.653004",
        "meansOfPayment": "Cash",
        "receiptNumber": "11087577"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CU1901",
        "tithe": "400",
        "memberName": "Jedidah Mingo",
        "transactionDate": "2024-02-04 12:30:47.589965",
        "meansOfPayment": "Cash",
        "receiptNumber": "11087590"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0417",
        "local_combined_offerings": 50,
        "memberName": "Jane Oloo",
        "combined": "50",
        "transactionDate": "2024-02-04 12:31:33.43145",
        "meansOfPayment": "Cash",
        "receiptNumber": "11087606"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8857",
        "tithe": "100",
        "memberName": "Judith Auma Oidah",
        "transactionDate": "2024-02-04 12:36:52.447633",
        "meansOfPayment": "Cash",
        "receiptNumber": "11087719"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CO4081",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Valentine Moraa Morris",
        "combined": "50",
        "transactionDate": "2024-02-04 12:41:10.241637",
        "meansOfPayment": "Cash",
        "receiptNumber": "11087814",
        "camp": "100"
      },
      {
        "totalAmount": "5000.00",
        "Chaplaincy": 5000,
        "memberNumber": "CO2783",
        "memberName": "Helda Kwamboka ",
        "transactionDate": "2024-02-04 13:58:20.997371",
        "meansOfPayment": "USSD",
        "receiptNumber": "11089082"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CP1427",
        "tithe": "100",
        "memberName": "Evalyne Kwamboka Matagaro",
        "transactionDate": "2024-02-04 12:33:00.933399",
        "meansOfPayment": "Cash",
        "receiptNumber": "11087636"
      },
      {
        "totalAmount": "220.00",
        "memberNumber": "CO0278",
        "tithe": "220",
        "memberName": "Julian Moraa Nyairo ",
        "transactionDate": "2024-02-04 10:38:29.62708",
        "meansOfPayment": "USSD",
        "receiptNumber": "11085331"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0404",
        "local_combined_offerings": 50,
        "memberName": "Justin Matai",
        "combined": "50",
        "transactionDate": "2024-02-03 12:15:08.143951",
        "meansOfPayment": "USSD",
        "receiptNumber": "11048121"
      },
      {
        "local_combined_offerings": 50,
        "Pathfinders": 20,
        "memberName": "Ombaye Matianyi",
        "Ambassadors": 20,
        "transactionDate": "2024-02-03 10:22:58.522568",
        "Church_Budget": 50,
        "camp": "50",
        "Master_Guide": 20,
        "totalAmount": "540.00",
        "Youths": 20,
        "memberNumber": "CN8384",
        "Local_Church": 20,
        "Elders": 100,
        "Adventurers": 20,
        "Camp_Meeting_Expenses": 50,
        "combined": "50",
        "Children": 20,
        "Deaconry": 50,
        "meansOfPayment": "USSD",
        "receiptNumber": "11049254"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "transactionDate": "2024-02-03 12:44:15.194873",
        "meansOfPayment": "USSD",
        "receiptNumber": "11050589",
        "camp": "150"
      },
      {
        "totalAmount": "100.00",
        "Youths": 50,
        "memberNumber": "CQ8882",
        "local_combined_offerings": 25,
        "memberName": "Sharon Anyango",
        "combined": "25",
        "transactionDate": "2024-02-03 12:53:09.141508",
        "meansOfPayment": "USSD",
        "receiptNumber": "11051116"
      },
      {
        "totalAmount": "1200.00",
        "memberNumber": "CO2496",
        "local_combined_offerings": 100,
        "tithe": "1000",
        "memberName": "Eric Ondieki",
        "combined": "100",
        "transactionDate": "2024-02-03 13:55:01.478628",
        "meansOfPayment": "USSD",
        "receiptNumber": "11054215"
      },
      {
        "totalAmount": "415.00",
        "memberNumber": "CO4060",
        "tithe": "415",
        "memberName": "Phanuel Odero",
        "transactionDate": "2024-02-07 12:38:49.759015",
        "meansOfPayment": "USSD",
        "receiptNumber": "11123208"
      },
      {
        "totalAmount": "1113.00",
        "memberNumber": "CO0459",
        "tithe": "1113",
        "memberName": "Belinda Sidho",
        "transactionDate": "2024-02-03 15:07:19.004829",
        "meansOfPayment": "USSD",
        "receiptNumber": "11057715"
      },
      {
        "totalAmount": "3911.00",
        "memberNumber": "CO2355",
        "local_combined_offerings": 150,
        "tithe": "3611",
        "memberName": "Felister Kwamboka",
        "combined": "150",
        "transactionDate": "2024-02-03 16:00:45.247096",
        "meansOfPayment": "USSD",
        "receiptNumber": "11060678"
      },
      {
        "totalAmount": "450.00",
        "memberNumber": "CN8228",
        "Local_Church": 90,
        "tithe": "360",
        "memberName": "Olpha Mokeira",
        "transactionDate": "2024-02-10 18:05:35.50461",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174348"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0434",
        "tithe": "200",
        "memberName": "Omingo Robert",
        "transactionDate": "2024-02-10 18:55:41.376171",
        "meansOfPayment": "Cash",
        "receiptNumber": "11176553"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CT5037",
        "tithe": "300",
        "memberName": "Mary K. Nyaanga",
        "transactionDate": "2024-02-10 17:37:40.797935",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173109"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8350",
        "memberName": "Judith Mobisa",
        "Vocational_Bible_School": 1000,
        "transactionDate": "2024-02-10 16:20:14.775387",
        "meansOfPayment": "Cash",
        "receiptNumber": "11169634"
      },
      {
        "totalAmount": "1690.00",
        "memberNumber": "CN4901",
        "memberName": "Rose Charles",
        "transactionDate": "2024-02-10 16:22:11.511054",
        "meansOfPayment": "Cash",
        "receiptNumber": "11169734",
        "Sabbath_School": 1690
      },
      {
        "totalAmount": "930.00",
        "memberNumber": "CO2671",
        "local_combined_offerings": 232.5,
        "tithe": "465",
        "memberName": "Rose Juma",
        "combined": "232.5",
        "transactionDate": "2024-02-10 16:24:42.146411",
        "meansOfPayment": "Cash",
        "receiptNumber": "11169837"
      },
      {
        "totalAmount": "800.00",
        "memberNumber": "CO0412",
        "local_combined_offerings": 50,
        "Welfare": 500,
        "tithe": "200",
        "memberName": "Ednah Kwamboka Isaac",
        "combined": "50",
        "transactionDate": "2024-02-10 17:31:48.494041",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172834"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO0413",
        "Welfare": 50,
        "memberName": "Margaret Kibagendi",
        "transactionDate": "2024-02-10 17:54:56.648448",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173877"
      },
      {
        "totalAmount": "1100.00",
        "memberNumber": "BT2702",
        "tithe": "100",
        "memberName": "Calcina Okumu",
        "transactionDate": "2024-02-10 17:56:59.739122",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173977",
        "camp": "1000"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN8857",
        "tithe": "50",
        "memberName": "Judith Auma Oidah",
        "transactionDate": "2024-02-10 17:33:48.091628",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172936"
      },
      {
        "totalAmount": "600.00",
        "memberNumber": "CN8254",
        "local_combined_offerings": 100,
        "tithe": "400",
        "memberName": "Rachel Atambo",
        "combined": "100",
        "transactionDate": "2024-02-10 18:52:24.616931",
        "meansOfPayment": "Cash",
        "receiptNumber": "11176434"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "AT4650",
        "local_combined_offerings": 50,
        "memberName": "Rose Obure",
        "combined": "50",
        "transactionDate": "2024-02-10 18:58:45.858",
        "meansOfPayment": "Cash",
        "receiptNumber": "11176698"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO2176",
        "local_combined_offerings": 100,
        "tithe": "200",
        "memberName": "Washington Muga Amoke",
        "combined": "100",
        "transactionDate": "2024-02-24 10:32:05.281087",
        "meansOfPayment": "USSD",
        "receiptNumber": "11354438"
      },
      {
        "totalAmount": "1300.00",
        "memberNumber": "CO3014",
        "Welfare": 1100,
        "tithe": "200",
        "memberName": "Joseph Ayieko",
        "transactionDate": "2024-02-24 10:15:14.466065",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364417"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0417",
        "tithe": "100",
        "memberName": "Jane Oloo",
        "transactionDate": "2024-02-24 10:24:40.641344",
        "meansOfPayment": "USSD",
        "receiptNumber": "11365191"
      },
      {
        "totalAmount": "5697.00",
        "memberNumber": "CN8382",
        "tithe": "5697",
        "memberName": "Sarah Kibagendi",
        "transactionDate": "2024-02-25 16:11:55.701206",
        "meansOfPayment": "USSD",
        "receiptNumber": "11419909"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CM1593",
        "Welfare": 500,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-25 13:35:14.902514",
        "meansOfPayment": "USSD",
        "receiptNumber": "11418895"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2811",
        "Welfare": 500,
        "memberName": "Calister Kemunto",
        "transactionDate": "2024-02-26 06:09:37.466434",
        "meansOfPayment": "USSD",
        "receiptNumber": "11433518"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8226",
        "Welfare": 500,
        "memberName": "Lillian Akoth",
        "transactionDate": "2024-02-26 10:55:10.493697",
        "meansOfPayment": "USSD",
        "receiptNumber": "11438659"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO1269",
        "Welfare": 500,
        "memberName": "Fredrick Odhiambo Odiawo",
        "transactionDate": "2024-02-26 12:12:11.174761",
        "meansOfPayment": "USSD",
        "receiptNumber": "11437911"
      },
      {
        "totalAmount": "150000.00",
        "memberNumber": "CM1593",
        "Development": 150000,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-27 00:03:07.416674",
        "meansOfPayment": "USSD",
        "receiptNumber": "11449468"
      },
      {
        "totalAmount": "150000.00",
        "memberNumber": "CM1593",
        "Development": 150000,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-26 19:33:22.148489",
        "meansOfPayment": "USSD",
        "receiptNumber": "11447056"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8253",
        "Welfare": 1000,
        "memberName": "Benjamin Onchaba",
        "transactionDate": "2024-02-26 21:02:27.132477",
        "meansOfPayment": "USSD",
        "receiptNumber": "11448993"
      },
      {
        "totalAmount": "150000.00",
        "memberNumber": "CM1593",
        "Development": 150000,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-27 00:12:09.011543",
        "meansOfPayment": "USSD",
        "receiptNumber": "11449488"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0285",
        "Welfare": 500,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-26 22:20:36.580766",
        "meansOfPayment": "USSD",
        "receiptNumber": "11448284"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "BS3137",
        "Welfare": 500,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-27 10:19:38.639484",
        "meansOfPayment": "USSD",
        "receiptNumber": "11453933"
      },
      {
        "totalAmount": "782.00",
        "memberNumber": "CO4060",
        "tithe": "782",
        "memberName": "Phanuel Odero",
        "transactionDate": "2024-02-27 14:44:30.725015",
        "meansOfPayment": "USSD",
        "receiptNumber": "11455559"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CR9671",
        "Welfare": 500,
        "memberName": "Margaret Mumbua Muindi ",
        "transactionDate": "2024-02-28 09:37:01.340508",
        "meansOfPayment": "USSD",
        "receiptNumber": "11460981"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2678",
        "Welfare": 500,
        "memberName": "Dolce Bosibori Otiso ",
        "transactionDate": "2024-02-28 09:56:08.049964",
        "meansOfPayment": "USSD",
        "receiptNumber": "11461178"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0285",
        "Welfare": 500,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-28 12:01:51.243267",
        "meansOfPayment": "USSD",
        "receiptNumber": "11462074"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0285",
        "Welfare": 500,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-29 15:12:42.393373",
        "meansOfPayment": "USSD",
        "receiptNumber": "11469289"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN2240",
        "Welfare": 500,
        "memberName": "Esther Ochieng",
        "transactionDate": "2024-02-29 14:10:15.02214",
        "meansOfPayment": "USSD",
        "receiptNumber": "11469635"
      },
      {
        "totalAmount": "800.00",
        "memberNumber": "CO1165",
        "Welfare": 800,
        "memberName": "Bernard Omae",
        "transactionDate": "2024-02-29 18:05:45.794229",
        "meansOfPayment": "USSD",
        "receiptNumber": "11470373"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN7864",
        "Welfare": 500,
        "memberName": "Cherest Njuguna ",
        "transactionDate": "2024-02-29 17:04:54.632517",
        "meansOfPayment": "USSD",
        "receiptNumber": "11469922"
      },
      {
        "totalAmount": "1600.00",
        "memberNumber": "CN8508",
        "local_combined_offerings": 400,
        "tithe": "800",
        "memberName": "Rose Okuto",
        "combined": "400",
        "transactionDate": "2024-02-29 16:40:01.224488",
        "meansOfPayment": "USSD",
        "receiptNumber": "11469787"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8330",
        "local_combined_offerings": 50,
        "memberName": "Dennis Maranga ",
        "combined": "50",
        "transactionDate": "2024-02-03 21:11:36.516613",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073293"
      },
      {
        "local_combined_offerings": 50,
        "cdf": "100",
        "tithe": "600",
        "memberName": "Bonface Nyambati",
        "transactionDate": "2024-02-04 20:34:31.701767",
        "camp": "100",
        "totalAmount": "1000.00",
        "memberNumber": "CO0460",
        "Local_Church": 50,
        "Development": 50,
        "combined": "50",
        "meansOfPayment": "Cash",
        "receiptNumber": "11095144"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO2789",
        "local_combined_offerings": 50,
        "tithe": "300",
        "memberName": "Philemon Juma",
        "combined": "50",
        "transactionDate": "2024-02-05 22:18:47.279541",
        "meansOfPayment": "USSD",
        "receiptNumber": "11109545"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "BS3137",
        "memberName": "Phoebe Omune",
        "Singles": 100,
        "transactionDate": "2024-02-09 17:07:40.844203",
        "meansOfPayment": "USSD",
        "receiptNumber": "11139759"
      },
      {
        "totalAmount": "1680.00",
        "memberNumber": "CN8243",
        "tithe": "1680",
        "memberName": "Dorothy Amuka",
        "transactionDate": "2024-02-10 07:15:42.11178",
        "meansOfPayment": "USSD",
        "receiptNumber": "11143814"
      },
      {
        "totalAmount": "5000.00",
        "memberNumber": "CO0451",
        "tithe": "5000",
        "memberName": "Geoffrey Karani",
        "transactionDate": "2024-02-10 07:16:29.902228",
        "meansOfPayment": "USSD",
        "receiptNumber": "11143822"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO2747",
        "local_combined_offerings": 200,
        "memberName": "Diviah Nyambane",
        "combined": "200",
        "transactionDate": "2024-02-10 10:16:43.032449",
        "meansOfPayment": "USSD",
        "receiptNumber": "11157089"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO2368",
        "local_combined_offerings": 50,
        "memberName": "Caleb Mekubo ",
        "combined": "50",
        "transactionDate": "2024-02-10 10:52:08.018995",
        "meansOfPayment": "USSD",
        "receiptNumber": "11147299"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CT7903",
        "tithe": "100",
        "memberName": "Emmanuel Okeyo Otieno ",
        "transactionDate": "2024-02-10 10:05:09.079556",
        "meansOfPayment": "USSD",
        "receiptNumber": "11155676"
      },
      {
        "totalAmount": "1838.00",
        "memberNumber": "CN8261",
        "local_combined_offerings": 250,
        "tithe": "1338",
        "memberName": "Paul Nyambane",
        "combined": "250",
        "transactionDate": "2024-02-10 12:07:50.764431",
        "meansOfPayment": "USSD",
        "receiptNumber": "11156095"
      },
      {
        "totalAmount": "300.00",
        "Youths": 100,
        "memberNumber": "CO2755",
        "local_combined_offerings": 100,
        "memberName": "Michael Onuko",
        "combined": "100",
        "transactionDate": "2024-02-10 10:15:50.056495",
        "meansOfPayment": "USSD",
        "receiptNumber": "11157006"
      },
      {
        "totalAmount": "5000.00",
        "memberNumber": "CM7209",
        "tithe": "5000",
        "memberName": "Calvin Moreka",
        "transactionDate": "2024-02-10 10:54:03.628753",
        "meansOfPayment": "USSD",
        "receiptNumber": "11147398"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8188",
        "Welfare": 500,
        "memberName": "Swenex Onkundi",
        "transactionDate": "2024-02-16 07:33:14.260881",
        "meansOfPayment": "USSD",
        "receiptNumber": "11243473"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO2440",
        "local_combined_offerings": 50,
        "memberName": "James Ombura",
        "combined": "50",
        "transactionDate": "2024-02-17 09:27:56.914079",
        "meansOfPayment": "USSD",
        "receiptNumber": "11256824"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CN8216",
        "tithe": "300",
        "memberName": "Everlyne Nyamweya",
        "transactionDate": "2024-02-17 11:16:24.554849",
        "meansOfPayment": "USSD",
        "receiptNumber": "11255987"
      },
      {
        "totalAmount": "1100.00",
        "memberNumber": "CN8406",
        "Welfare": 1000,
        "Elders": 100,
        "memberName": "Paul Akoko",
        "transactionDate": "2024-02-17 12:17:07.103036",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261665"
      },
      {
        "totalAmount": "1300.00",
        "memberNumber": "CM3699",
        "Elders": 200,
        "tithe": "1000",
        "memberName": "Harun Mwangi Kabue",
        "Deaconry": 100,
        "transactionDate": "2024-02-17 12:19:55.207555",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261804"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0076",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Moses Onyinge Nyamagera",
        "combined": "25",
        "transactionDate": "2024-02-17 10:20:33.507268",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261824"
      },
      {
        "totalAmount": "250.00",
        "memberNumber": "CT6452",
        "local_combined_offerings": 25,
        "cdf": "50",
        "tithe": "50",
        "memberName": "Mwalo Abel Ochieng ",
        "combined": "25",
        "transactionDate": "2024-02-17 12:15:51.831785",
        "meansOfPayment": "USSD",
        "thirteenth": "50",
        "receiptNumber": "11261584",
        "camp": "50"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CM7209",
        "Welfare": 500,
        "memberName": "Calvin Moreka",
        "transactionDate": "2024-02-17 10:21:43.522087",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261919"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "Camp_Meeting_Expenses": 150,
        "transactionDate": "2024-02-17 14:10:31.86055",
        "meansOfPayment": "USSD",
        "receiptNumber": "11270837"
      },
      {
        "totalAmount": "40.00",
        "memberNumber": "CP1353",
        "local_combined_offerings": 20,
        "memberName": "Rachel Ongaro",
        "combined": "20",
        "transactionDate": "2024-02-17 16:41:32.704249",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272000"
      },
      {
        "totalAmount": "305.00",
        "memberNumber": "CU1131",
        "local_combined_offerings": 25,
        "tithe": "255",
        "memberName": "Albert Chuma Nyabuto",
        "combined": "25",
        "transactionDate": "2024-02-17 16:42:00.358197",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272030"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254723836757",
        "tithe": "50",
        "memberName": "Walter Obuchi",
        "transactionDate": "2024-02-17 16:46:32.371794",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272195"
      },
      {
        "totalAmount": "3000.00",
        "memberNumber": "254723032659",
        "tithe": "3000",
        "memberName": "Jemutai Nyakundi",
        "transactionDate": "2024-02-17 16:49:30.54272",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272284"
      },
      {
        "totalAmount": "1600.00",
        "memberNumber": "BI4459",
        "local_combined_offerings": 250,
        "Welfare": 500,
        "tithe": "500",
        "memberName": "Mary Seka",
        "combined": "250",
        "transactionDate": "2024-02-17 16:50:54.165196",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272339",
        "camp": "100"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4910",
        "Welfare": 500,
        "memberName": "Kengere  Charles",
        "transactionDate": "2024-02-18 18:27:09.871254",
        "meansOfPayment": "USSD",
        "receiptNumber": "11302429"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8226",
        "Welfare": 500,
        "memberName": "Lillian Akoth",
        "transactionDate": "2024-02-18 17:43:08.3009",
        "meansOfPayment": "USSD",
        "receiptNumber": "11303373"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0316",
        "Welfare": 500,
        "memberName": "Peter Ososi Musa ",
        "transactionDate": "2024-02-20 09:35:56.906168",
        "meansOfPayment": "USSD",
        "receiptNumber": "11321368"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8412",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Antony Ouma",
        "combined": "50",
        "transactionDate": "2024-02-24 06:30:37.885431",
        "meansOfPayment": "USSD",
        "receiptNumber": "11352575"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO2368",
        "local_combined_offerings": 25,
        "memberName": "Caleb Mekubo ",
        "combined": "25",
        "transactionDate": "2024-02-24 12:48:57.030206",
        "meansOfPayment": "USSD",
        "receiptNumber": "11367096"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CP1801",
        "tithe": "200",
        "memberName": "Leperes Mathew",
        "transactionDate": "2024-02-24 11:12:54.007105",
        "meansOfPayment": "USSD",
        "receiptNumber": "11356747"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CT7903",
        "tithe": "100",
        "memberName": "Emmanuel Okeyo Otieno ",
        "transactionDate": "2024-02-24 12:13:17.322602",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364167"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CO2789",
        "local_combined_offerings": 150,
        "tithe": "500",
        "memberName": "Philemon Juma",
        "combined": "150",
        "transactionDate": "2024-02-24 10:22:27.790928",
        "meansOfPayment": "USSD",
        "receiptNumber": "11354181",
        "camp": "200"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0274",
        "tithe": "100",
        "memberName": "Benard Ongangi Otuke",
        "transactionDate": "2024-02-24 10:12:51.86185",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364122"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO2360",
        "local_combined_offerings": 100,
        "memberName": "Evans Mochache",
        "combined": "100",
        "transactionDate": "2024-02-24 12:12:54.44621",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364128"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0278",
        "Local_Church": 150,
        "tithe": "350",
        "memberName": "Julian Moraa Nyairo ",
        "transactionDate": "2024-02-24 12:52:48.579995",
        "meansOfPayment": "USSD",
        "receiptNumber": "11367302"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CN8353",
        "local_combined_offerings": 25,
        "memberName": "Edwin Mokaya",
        "combined": "25",
        "Deaconry": 50,
        "transactionDate": "2024-02-24 11:25:54.430634",
        "meansOfPayment": "USSD",
        "receiptNumber": "11357935",
        "Communication": 300
      },
      {
        "totalAmount": "660.00",
        "memberNumber": "CN8508",
        "local_combined_offerings": 40,
        "Welfare": 500,
        "tithe": "80",
        "memberName": "Rose Okuto",
        "combined": "40",
        "transactionDate": "2024-02-24 11:10:37.847795",
        "meansOfPayment": "USSD",
        "receiptNumber": "11356588"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8252",
        "local_combined_offerings": 50,
        "memberName": "Zipporah K. Michira",
        "combined": "50",
        "transactionDate": "2024-02-24 09:28:27.918062",
        "meansOfPayment": "USSD",
        "receiptNumber": "11358242"
      },
      {
        "totalAmount": "1500.00",
        "memberNumber": "CN2240",
        "Welfare": 1500,
        "memberName": "Esther Ochieng",
        "transactionDate": "2024-02-24 18:10:12.220724",
        "meansOfPayment": "USSD",
        "receiptNumber": "11384890"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "CN8335",
        "local_combined_offerings": 150,
        "cdf": "100",
        "tithe": "1000",
        "memberName": "Charles Arogo",
        "combined": "150",
        "transactionDate": "2024-02-25 09:04:13.783407",
        "meansOfPayment": "USSD",
        "thirteenth": "100",
        "receiptNumber": "11408391",
        "camp": "500"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CP1546",
        "tithe": "1000",
        "memberName": "Joram Kashmir",
        "transactionDate": "2024-02-03 16:55:29.578204",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063282"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CM1593",
        "Welfare": 500,
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-25 11:12:33.434434",
        "meansOfPayment": "USSD",
        "receiptNumber": "11415205"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CR9795",
        "Welfare": 1000,
        "memberName": "Joyce Mwango Maranga",
        "transactionDate": "2024-02-25 13:51:00.751234",
        "meansOfPayment": "USSD",
        "receiptNumber": "11416098"
      },
      {
        "totalAmount": "52700.00",
        "memberNumber": "CM1593",
        "tithe": "26350",
        "memberName": "Margaret Wakesho Mwasigwa ",
        "transactionDate": "2024-02-02 09:52:19.11572",
        "meansOfPayment": "USSD",
        "Church_Budget": 26350,
        "receiptNumber": "11026707"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "BS3137",
        "Singles_Water_Project": 2000,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-02 17:21:08.423747",
        "meansOfPayment": "USSD",
        "receiptNumber": "11029962"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "BH4372",
        "Welfare": 500,
        "memberName": "Lilian Burudi",
        "transactionDate": "2024-02-28 11:50:03.32704",
        "meansOfPayment": "USSD",
        "receiptNumber": "11462662"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2360",
        "Welfare": 500,
        "memberName": "Evans Mochache",
        "transactionDate": "2024-02-29 17:54:10.802641",
        "meansOfPayment": "USSD",
        "receiptNumber": "11471190"
      },
      {
        "totalAmount": "3400.00",
        "memberNumber": "CO0459",
        "tithe": "3400",
        "memberName": "Belinda Sidho",
        "transactionDate": "2024-02-29 20:42:40.519946",
        "meansOfPayment": "USSD",
        "receiptNumber": "11471586"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO2496",
        "Welfare": 500,
        "memberName": "Eric Ondieki",
        "transactionDate": "2024-02-29 19:50:17.601859",
        "meansOfPayment": "USSD",
        "receiptNumber": "11471169"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4964",
        "Welfare": 500,
        "memberName": "Eric Onsongo Mwebi",
        "transactionDate": "2024-02-29 18:30:13.036651",
        "meansOfPayment": "USSD",
        "receiptNumber": "11470557"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8643",
        "Welfare": 500,
        "memberName": "Merseline Achola",
        "transactionDate": "2024-02-29 19:28:58.04895",
        "meansOfPayment": "USSD",
        "receiptNumber": "11471989"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4964",
        "Welfare": 500,
        "memberName": "Eric Onsongo Mwebi",
        "transactionDate": "2024-02-29 21:39:42.906484",
        "meansOfPayment": "USSD",
        "receiptNumber": "11472095"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0285",
        "Welfare": 500,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-29 21:42:11.673587",
        "meansOfPayment": "USSD",
        "receiptNumber": "11472118"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8353",
        "local_combined_offerings": 50,
        "memberName": "Edwin Mokaya",
        "combined": "50",
        "transactionDate": "2024-02-03 11:55:43.043467",
        "meansOfPayment": "USSD",
        "receiptNumber": "11043705",
        "camp": "100"
      },
      {
        "totalAmount": "1300.00",
        "memberNumber": "CO0257",
        "Welfare": 1300,
        "memberName": "Herbert Nyamweya Mokora",
        "transactionDate": "2024-02-29 22:40:40.38066",
        "meansOfPayment": "USSD",
        "receiptNumber": "11472582"
      },
      {
        "totalAmount": "1500.00",
        "memberNumber": "CO0285",
        "Welfare": 1500,
        "memberName": "Shadrack Makori",
        "transactionDate": "2024-02-29 20:44:53.980955",
        "meansOfPayment": "USSD",
        "receiptNumber": "11472622"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO0410",
        "tithe": "50",
        "memberName": "Kemunto Mose",
        "transactionDate": "2024-02-03 11:56:17.286942",
        "meansOfPayment": "USSD",
        "receiptNumber": "11043894"
      },
      {
        "totalAmount": "130.00",
        "memberNumber": "CO0459",
        "tithe": "130",
        "memberName": "Belinda Sidho",
        "transactionDate": "2024-02-04 19:33:46.008272",
        "meansOfPayment": "USSD",
        "receiptNumber": "11096603"
      },
      {
        "totalAmount": "2778.00",
        "memberNumber": "CU2493",
        "tithe": "2678",
        "memberName": "Phenne Nyamari",
        "transactionDate": "2024-02-09 17:34:01.361014",
        "meansOfPayment": "USSD",
        "receiptNumber": "11139085",
        "camp": "100"
      },
      {
        "totalAmount": "28.00",
        "memberNumber": "CO4060",
        "tithe": "28",
        "memberName": "Phanuel Odero",
        "transactionDate": "2024-02-09 15:14:37.713403",
        "meansOfPayment": "USSD",
        "receiptNumber": "11138966"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8301",
        "Local_Church": 100,
        "Special_Needs": 50,
        "Evangelism": 50,
        "memberName": "Caroline Nyaboke",
        "transactionDate": "2024-02-10 12:09:09.895038",
        "meansOfPayment": "USSD",
        "receiptNumber": "11156285"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8253",
        "local_combined_offerings": 250,
        "tithe": "500",
        "memberName": "Benjamin Onchaba",
        "combined": "250",
        "transactionDate": "2024-02-10 10:13:13.902203",
        "meansOfPayment": "USSD",
        "receiptNumber": "11156729"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8307",
        "local_combined_offerings": 150,
        "Elders": 200,
        "tithe": "300",
        "memberName": "Josheck  Mogaka",
        "combined": "150",
        "Deaconry": 200,
        "transactionDate": "2024-02-10 11:18:56.830035",
        "meansOfPayment": "USSD",
        "receiptNumber": "11148934"
      },
      {
        "totalAmount": "250.00",
        "memberNumber": "CO0278",
        "tithe": "250",
        "memberName": "Julian Moraa Nyairo ",
        "transactionDate": "2024-02-10 12:04:53.088976",
        "meansOfPayment": "USSD",
        "receiptNumber": "11155620"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "CN8457",
        "tithe": "2000",
        "memberName": "Knight Moindi",
        "transactionDate": "2024-02-10 10:54:52.715367",
        "meansOfPayment": "USSD",
        "receiptNumber": "11147473"
      },
      {
        "Amo": 20,
        "local_combined_offerings": 25,
        "Pathfinders": 20,
        "memberName": "Ombaye Matianyi",
        "Ambassadors": 20,
        "transactionDate": "2024-02-10 12:11:26.396466",
        "Church_Budget": 50,
        "camp": "50",
        "Master_Guide": 20,
        "totalAmount": "490.00",
        "memberNumber": "CN8384",
        "Local_Church": 50,
        "Elders": 100,
        "Adventurers": 20,
        "Development": 20,
        "Camp_Meeting_Expenses": 50,
        "combined": "25",
        "Children": 20,
        "meansOfPayment": "USSD",
        "receiptNumber": "11156548"
      },
      {
        "totalAmount": "100.00",
        "Youths": 50,
        "memberNumber": "CQ8882",
        "Local_Church": 50,
        "memberName": "Sharon Anyango",
        "transactionDate": "2024-02-10 12:06:48.281262",
        "meansOfPayment": "USSD",
        "receiptNumber": "11155940"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO6432",
        "tithe": "100",
        "memberName": "Tom Koyo",
        "transactionDate": "2024-02-10 17:23:36.501663",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172426"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8371",
        "Local_Church": 100,
        "tithe": "500",
        "memberName": "Marcel Okola",
        "Camp_Meeting_Expenses": 100,
        "transactionDate": "2024-02-10 17:20:23.389164",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172274",
        "camp": "300"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CO0432",
        "local_combined_offerings": 57.5,
        "tithe": "15",
        "memberName": "Millicent Achieng Otieno",
        "combined": "57.5",
        "transactionDate": "2024-02-03 16:48:51.752364",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063065"
      },
      {
        "totalAmount": "240.00",
        "memberNumber": "CN8403",
        "tithe": "240",
        "memberName": "Naomi Moindi",
        "transactionDate": "2024-02-10 17:32:45.221226",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172881"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8403",
        "tithe": "200",
        "memberName": "Naomi Moindi",
        "transactionDate": "2024-02-03 20:38:32.083144",
        "meansOfPayment": "Cash",
        "receiptNumber": "11071903"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO0421",
        "tithe": "50",
        "memberName": "Rebeccah Bosibori",
        "transactionDate": "2024-02-03 20:40:01.162016",
        "meansOfPayment": "Cash",
        "receiptNumber": "11071969"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8441",
        "memberName": "Grace Achieng",
        "Deaconry": 200,
        "transactionDate": "2024-02-03 21:18:57.068568",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073569"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CT5037",
        "tithe": "200",
        "memberName": "Mary K. Nyaanga",
        "transactionDate": "2024-02-03 21:22:15.796808",
        "meansOfPayment": "Cash",
        "receiptNumber": "11073710"
      },
      {
        "totalAmount": "3000.00",
        "memberNumber": "CN8368",
        "local_combined_offerings": 300,
        "tithe": "2400",
        "memberName": "Esther Ombaye",
        "combined": "300",
        "transactionDate": "2024-02-10 17:50:49.062971",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173658"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254723836757",
        "memberName": "Walter Nyachae",
        "Deaconry": 50,
        "transactionDate": "2024-02-10 18:01:43.950727",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174176"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0432",
        "local_combined_offerings": 90,
        "tithe": "20",
        "memberName": "Millicent Achieng Otieno",
        "combined": "90",
        "transactionDate": "2024-02-10 17:22:11.421064",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172364"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0417",
        "local_combined_offerings": 50,
        "memberName": "Jane Oloo",
        "combined": "50",
        "transactionDate": "2024-02-10 17:35:54.772492",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173028"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0413",
        "memberName": "Margaret Kibagendi",
        "transactionDate": "2024-02-03 17:16:30.273085",
        "meansOfPayment": "Cash",
        "receiptNumber": "11064178"
      },
      {
        "totalAmount": "1410.00",
        "memberNumber": "CN4901",
        "memberName": "Rose Charles",
        "transactionDate": "2024-02-03 16:34:18.378308",
        "meansOfPayment": "Cash",
        "receiptNumber": "11062405",
        "Sabbath_School": 1410
      },
      {
        "totalAmount": "1250.00",
        "memberNumber": "CN8228",
        "Local_Church": 110,
        "tithe": "1140",
        "memberName": "Olpha Mokeira",
        "transactionDate": "2024-02-03 16:40:23.260882",
        "meansOfPayment": "Cash",
        "receiptNumber": "11062692"
      },
      {
        "totalAmount": "25.00",
        "memberNumber": "CS1003",
        "tithe": "25",
        "memberName": "Hyrine Atuti",
        "transactionDate": "2024-02-04 11:28:40.713664",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086308"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO6686",
        "tithe": "100",
        "memberName": "George Momanyi",
        "transactionDate": "2024-02-04 11:48:24.092676",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086745"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CO2803",
        "tithe": "200",
        "memberName": "Dan Mingo",
        "transactionDate": "2024-02-04 11:49:48.048269",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086767",
        "camp": "100"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CO0428",
        "Local_Church": 100,
        "tithe": "400",
        "memberName": "Margaret Muteithia",
        "transactionDate": "2024-02-10 18:04:23.387183",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174294"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8432",
        "Welfare": 500,
        "memberName": "Caroline Otieno",
        "transactionDate": "2024-02-17 11:11:25.121046",
        "meansOfPayment": "USSD",
        "receiptNumber": "11255758"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO2789",
        "tithe": "200",
        "memberName": "Philemon Juma",
        "transactionDate": "2024-02-01 22:40:21.69812",
        "meansOfPayment": "USSD",
        "receiptNumber": "11025057",
        "camp": "200"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN4509",
        "Welfare": 500,
        "memberName": "Rose Atieno Omiti",
        "transactionDate": "2024-02-17 08:37:50.501857",
        "meansOfPayment": "USSD",
        "receiptNumber": "11253992"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CM3699",
        "Welfare": 500,
        "memberName": "Harun Mwangi Kabue",
        "transactionDate": "2024-02-17 12:37:15.216423",
        "meansOfPayment": "USSD",
        "receiptNumber": "11262650"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CS1003",
        "tithe": "50",
        "memberName": "Hyrine Atuti",
        "transactionDate": "2024-02-17 16:52:38.597083",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272427"
      },
      {
        "totalAmount": "2555.00",
        "memberNumber": "CN4964",
        "memberName": "Eric Onsongo Mwebi",
        "Deaconry": 2555,
        "transactionDate": "2024-02-17 16:58:10.760271",
        "meansOfPayment": "Cash",
        "receiptNumber": "11272658"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8226",
        "tithe": "100",
        "memberName": "Lillian Akoth",
        "transactionDate": "2024-02-17 10:13:20.279852",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261410"
      },
      {
        "totalAmount": "4200.00",
        "memberNumber": "CN8406",
        "tithe": "4200",
        "memberName": "Paul Akoko",
        "transactionDate": "2024-02-17 10:14:48.828593",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261494"
      },
      {
        "totalAmount": "5000.00",
        "Amo": 5000,
        "memberNumber": "CM7209",
        "memberName": "Calvin Moreka",
        "transactionDate": "2024-02-17 13:27:54.262183",
        "meansOfPayment": "USSD",
        "receiptNumber": "11264551"
      },
      {
        "totalAmount": "150.00",
        "Youths": 50,
        "memberNumber": "CO2755",
        "local_combined_offerings": 50,
        "memberName": "Michael Onuko",
        "combined": "50",
        "transactionDate": "2024-02-17 10:10:17.696915",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261185"
      },
      {
        "totalAmount": "1600.00",
        "Amo": 100,
        "memberNumber": "CN8307",
        "local_combined_offerings": 200,
        "Local_Church": 200,
        "Elders": 100,
        "tithe": "800",
        "memberName": "Josheck  Mogaka",
        "combined": "200",
        "transactionDate": "2024-02-17 12:15:31.744137",
        "meansOfPayment": "USSD",
        "receiptNumber": "11261569"
      },
      {
        "totalAmount": "340.00",
        "memberNumber": "BG4892",
        "local_combined_offerings": 25,
        "tithe": "100",
        "memberName": "Phelix Adoo",
        "combined": "25",
        "transactionDate": "2024-02-03 17:07:42.021712",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063819",
        "camp": "50"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CP1681",
        "tithe": "150",
        "memberName": "Wesley Osoro",
        "transactionDate": "2024-02-17 14:26:51.421294",
        "meansOfPayment": "USSD",
        "receiptNumber": "11266984"
      },
      {
        "totalAmount": "370.00",
        "memberNumber": "BG4892",
        "local_combined_offerings": 50,
        "Local_Church": 35,
        "tithe": "100",
        "Development": 35,
        "memberName": "Phelix Adoo",
        "combined": "50",
        "transactionDate": "2024-02-17 16:29:46.166247",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271545",
        "camp": "100"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "AR9722",
        "local_combined_offerings": 50,
        "memberName": "Mary Onyango",
        "combined": "50",
        "transactionDate": "2024-02-17 16:32:11.376831",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271651"
      },
      {
        "Msamaria": 100,
        "totalAmount": "150.00",
        "memberNumber": "CR5324",
        "Local_Church": 50,
        "memberName": "Jannes Maumba",
        "transactionDate": "2024-02-17 16:38:45.63004",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271866"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CR5338",
        "tithe": "80",
        "memberName": "Caroline Aoko Akuno",
        "transactionDate": "2024-02-17 17:12:44.192594",
        "meansOfPayment": "Cash",
        "receiptNumber": "11273245",
        "camp": "20"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "BT2702",
        "tithe": "200",
        "memberName": "Calcina Okumu",
        "transactionDate": "2024-02-17 17:15:16.038796",
        "meansOfPayment": "Cash",
        "receiptNumber": "11273348"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO4051",
        "tithe": "50",
        "memberName": "Leonida Bonareri Akinga",
        "transactionDate": "2024-02-17 16:04:29.803743",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270608"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8323",
        "local_combined_offerings": 35,
        "tithe": "30",
        "memberName": "Robert Kebaso Orina ",
        "combined": "35",
        "transactionDate": "2024-02-17 16:06:27.992168",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270676"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN4910",
        "local_combined_offerings": 25,
        "Local_Church": 100,
        "tithe": "50",
        "memberName": "Kengere  Charles",
        "combined": "25",
        "transactionDate": "2024-02-17 17:17:28.773253",
        "meansOfPayment": "Cash",
        "receiptNumber": "11273437"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0493",
        "local_combined_offerings": 100,
        "memberName": "Everlyne Nyaboke ",
        "combined": "100",
        "transactionDate": "2024-02-17 16:08:11.411772",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270740"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CR3922",
        "tithe": "100",
        "memberName": "Brainah Rugut",
        "transactionDate": "2024-02-17 16:11:54.139124",
        "meansOfPayment": "Cash",
        "receiptNumber": "11270884"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "254708139238",
        "memberName": "Hesbon Omboga ",
        "Deaconry": 100,
        "transactionDate": "2024-02-17 16:17:26.025889",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271091"
      },
      {
        "totalAmount": "750.00",
        "memberNumber": "CN8228",
        "Local_Church": 90,
        "tithe": "660",
        "memberName": "Olpha Mokeira",
        "transactionDate": "2024-02-17 16:34:15.905959",
        "meansOfPayment": "Cash",
        "receiptNumber": "11271719"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CO1288",
        "local_combined_offerings": 150,
        "memberName": "Erick A Sangili",
        "combined": "150",
        "transactionDate": "2024-02-18 09:38:52.289626",
        "meansOfPayment": "USSD",
        "receiptNumber": "11293476"
      },
      {
        "totalAmount": "250.00",
        "memberNumber": "CO4058",
        "tithe": "250",
        "memberName": "Owuor Elijah Ochieng",
        "transactionDate": "2024-02-10 21:06:14.052737",
        "meansOfPayment": "USSD",
        "receiptNumber": "11181788"
      },
      {
        "totalAmount": "50.00",
        "Youths": 50,
        "memberNumber": "CO0403",
        "memberName": "Calvin Bosire",
        "transactionDate": "2024-02-24 05:39:34.194909",
        "meansOfPayment": "USSD",
        "receiptNumber": "11351978"
      },
      {
        "totalAmount": "51700.00",
        "memberNumber": "CM1593",
        "tithe": "26350",
        "memberName": "Margaret Wakesho Mwasigwa ",
        "Camp_Meeting_Expenses": 25000,
        "transactionDate": "2024-02-24 07:53:14.730161",
        "meansOfPayment": "USSD",
        "Church_Budget": 350,
        "receiptNumber": "11352118"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "Camp_Meeting_Expenses": 150,
        "Deaconry": 50,
        "transactionDate": "2024-02-24 08:26:09.3716",
        "meansOfPayment": "USSD",
        "receiptNumber": "11352516"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8508",
        "memberName": "Rose Okuto",
        "transactionDate": "2024-02-24 06:26:53.087182",
        "meansOfPayment": "USSD",
        "receiptNumber": "11352524",
        "camp": "1000"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CM1593",
        "memberName": "Margaret Wakesho Mwasigwa ",
        "Singles": 1000,
        "transactionDate": "2024-02-24 05:54:17.199105",
        "meansOfPayment": "USSD",
        "receiptNumber": "11352132"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN7864",
        "memberName": "Cherest Njuguna ",
        "transactionDate": "2024-02-24 06:25:25.936782",
        "meansOfPayment": "USSD",
        "receiptNumber": "11352507",
        "camp": "150"
      },
      {
        "totalAmount": "1500.00",
        "Chaplaincy": 100,
        "memberNumber": "CM3699",
        "Elders": 300,
        "tithe": "1000",
        "memberName": "Harun Mwangi Kabue",
        "Deaconry": 100,
        "transactionDate": "2024-02-24 10:19:36.385895",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364819"
      },
      {
        "totalAmount": "3000.00",
        "memberNumber": "BH2209",
        "memberName": "John Ochieng Oyuke",
        "transactionDate": "2024-02-24 12:20:01.229912",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364852",
        "camp": "3000"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8301",
        "Local_Church": 50,
        "Special_Needs": 50,
        "Development": 50,
        "Evangelism": 50,
        "memberName": "Caroline Nyaboke",
        "transactionDate": "2024-02-24 12:20:44.31839",
        "meansOfPayment": "USSD",
        "receiptNumber": "11364909"
      },
      {
        "totalAmount": "2050.00",
        "memberNumber": "CN2245",
        "tithe": "2050",
        "memberName": "Benard Mutethia",
        "transactionDate": "2024-02-24 17:53:02.11584",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384128"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254713341710",
        "Development": 50,
        "memberName": "Emilly Achieng",
        "transactionDate": "2024-02-24 16:50:02.932861",
        "meansOfPayment": "Cash",
        "receiptNumber": "11380762"
      },
      {
        "totalAmount": "5000.00",
        "memberNumber": "CO4100",
        "tithe": "5000",
        "memberName": "Victor Jared Mayi",
        "transactionDate": "2024-02-24 17:32:34.644668",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383140"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CS3047",
        "tithe": "50",
        "memberName": "Elizabeth Ongera ",
        "transactionDate": "2024-02-24 17:34:22.713161",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383229"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CS9479",
        "local_combined_offerings": 100,
        "memberName": "Robert Okongo",
        "combined": "100",
        "transactionDate": "2024-02-24 16:34:15.656048",
        "meansOfPayment": "Cash",
        "receiptNumber": "11379958"
      },
      {
        "totalAmount": "550.00",
        "memberNumber": "CN8255",
        "Welfare": 500,
        "tithe": "50",
        "memberName": "Rose Moraa",
        "transactionDate": "2024-02-24 17:42:17.088036",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383635"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CS3048",
        "Crusade": 100,
        "memberName": "Benedict Gumbo",
        "transactionDate": "2024-02-24 17:54:38.236293",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384191"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8315",
        "local_combined_offerings": 25,
        "tithe": "50",
        "memberName": "Grace Anyango ",
        "combined": "25",
        "transactionDate": "2024-02-24 17:57:56.409601",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384343"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CT5037",
        "tithe": "100",
        "memberName": "Mary K. Nyaanga",
        "transactionDate": "2024-02-24 18:03:09.143544",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384566"
      },
      {
        "totalAmount": "1800.00",
        "memberNumber": "CO2671",
        "local_combined_offerings": 450,
        "tithe": "900",
        "memberName": "Rose Juma",
        "combined": "450",
        "transactionDate": "2024-02-24 17:31:25.679023",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383068"
      },
      {
        "totalAmount": "4000.00",
        "memberNumber": "CO2732",
        "tithe": "4000",
        "memberName": "Jack Line Orwa",
        "transactionDate": "2024-02-24 17:36:24.134049",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383346"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "254792021912",
        "tithe": "100",
        "memberName": "Stellah Mongina",
        "transactionDate": "2024-02-24 17:38:29.678593",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383458"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO0413",
        "Welfare": 50,
        "memberName": "Margaret Kibagendi",
        "transactionDate": "2024-02-24 17:39:19.098595",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383496"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8403",
        "tithe": "200",
        "memberName": "Naomi Moindi",
        "transactionDate": "2024-02-24 17:47:15.168453",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383892"
      },
      {
        "totalAmount": "110.00",
        "memberNumber": "AY7401",
        "tithe": "110",
        "memberName": "Joseph Odhiambo",
        "transactionDate": "2024-02-24 17:49:41.2064",
        "meansOfPayment": "Cash",
        "receiptNumber": "11383987"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "254707714071",
        "tithe": "100",
        "memberName": "Maureen Awino",
        "transactionDate": "2024-02-24 16:44:47.341783",
        "meansOfPayment": "Cash",
        "receiptNumber": "11380541"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8328",
        "tithe": "100",
        "memberName": "Lillian Momanyi",
        "transactionDate": "2024-02-24 17:50:56.913641",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384044"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CQ2325",
        "memberName": "Valentine Moraa Morris ",
        "transactionDate": "2024-02-24 17:55:29.186361",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384235",
        "camp": "1000"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "BS3137",
        "Singles_Water_Project": 300,
        "memberName": "Phoebe Omune",
        "transactionDate": "2024-02-24 16:54:52.786179",
        "meansOfPayment": "USSD",
        "receiptNumber": "11380983"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CO0460",
        "Local_Church": 50,
        "Crusade": 50,
        "tithe": "100",
        "memberName": "Bonface Nyambati",
        "transactionDate": "2024-02-24 17:57:07.301897",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384310",
        "camp": "100"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "BS3137",
        "memberName": "Phoebe Omune",
        "Singles": 200,
        "transactionDate": "2024-02-24 17:26:00.420256",
        "meansOfPayment": "Cash",
        "receiptNumber": "11382751"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CN8405",
        "Welfare": 500,
        "tithe": "500",
        "memberName": "Pamela Adhiambo",
        "transactionDate": "2024-02-24 17:26:56.377943",
        "meansOfPayment": "Cash",
        "receiptNumber": "11382801"
      },
      {
        "totalAmount": "60.00",
        "memberNumber": "254707328669",
        "memberName": "Metrine Khatunyi",
        "Deaconry": 60,
        "transactionDate": "2024-02-24 18:00:00.092343",
        "meansOfPayment": "Cash",
        "receiptNumber": "11384435"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8395",
        "tithe": "200",
        "memberName": "James Morara",
        "transactionDate": "2024-02-03 17:02:48.638843",
        "meansOfPayment": "Cash",
        "receiptNumber": "11063595"
      },
      {
        "totalAmount": "1115.00",
        "memberNumber": "CN8368",
        "Adventurers": 1115,
        "memberName": "Esther Ombaye",
        "transactionDate": "2024-02-03 16:35:55.571253",
        "meansOfPayment": "Cash",
        "receiptNumber": "11062480"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CO0434",
        "tithe": "150",
        "memberName": "Omingo Robert",
        "transactionDate": "2024-02-03 16:42:10.230477",
        "meansOfPayment": "Cash",
        "receiptNumber": "11062770"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CS1316",
        "Welfare": 500,
        "memberName": "Merystellah Khayi Weremba ",
        "transactionDate": "2024-02-25 23:39:06.588988",
        "meansOfPayment": "USSD",
        "receiptNumber": "11430625"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8264",
        "Welfare": 500,
        "memberName": "Lillian Akoko",
        "transactionDate": "2024-02-25 21:29:12.273054",
        "meansOfPayment": "USSD",
        "receiptNumber": "11427500"
      },
      {
        "totalAmount": "3000.00",
        "memberNumber": "CO0454",
        "Welfare": 2500,
        "memberName": "Rose Omondi",
        "Singles": 500,
        "transactionDate": "2024-02-10 16:18:14.234876",
        "meansOfPayment": "USSD",
        "receiptNumber": "11174927"
      },
      {
        "totalAmount": "12000.00",
        "memberNumber": "BS3137",
        "local_combined_offerings": 1500,
        "tithe": "5000",
        "memberName": "Phoebe Omune",
        "combined": "1500",
        "Deaconry": 1000,
        "transactionDate": "2024-02-01 12:24:45.663359",
        "meansOfPayment": "USSD",
        "Church_Budget": 1000,
        "receiptNumber": "11021760",
        "camp": "2000"
      },
      {
        "totalAmount": "500.00",
        "memberNumber": "CN8350",
        "Welfare": 500,
        "memberName": "Judith Mobisa",
        "transactionDate": "2024-02-28 21:47:06.430031",
        "meansOfPayment": "USSD",
        "receiptNumber": "11465704"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254706415699",
        "local_combined_offerings": 25,
        "memberName": "Evalyne Mwita",
        "combined": "25",
        "transactionDate": "2024-02-04 11:27:41.034397",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086290"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8851",
        "tithe": "100",
        "memberName": "Milka Odoyo",
        "transactionDate": "2024-02-04 11:29:19.860713",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086327"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CN8317",
        "tithe": "50",
        "memberName": "Isabellah Nyambane ",
        "transactionDate": "2024-02-04 11:29:57.894929",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086339"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CQ1827",
        "local_combined_offerings": 12.5,
        "tithe": "25",
        "memberName": "Beatrice Keya",
        "combined": "12.5",
        "transactionDate": "2024-02-04 11:30:50.790218",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086355"
      },
      {
        "totalAmount": "570.00",
        "memberNumber": "BS3137",
        "memberName": "Phoebe Omune",
        "Singles": 570,
        "transactionDate": "2024-02-04 11:32:43.531082",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086406"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "BN5435",
        "tithe": "150",
        "memberName": "Jacob Oyugi",
        "transactionDate": "2024-02-04 11:35:33.390597",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086477"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO5211",
        "local_combined_offerings": 10,
        "tithe": "30",
        "memberName": "Wyclife Odongo ",
        "combined": "10",
        "transactionDate": "2024-02-04 11:40:30.780767",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086592"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CU1133",
        "local_combined_offerings": 20,
        "tithe": "110",
        "memberName": "Alex Anunda Machogu",
        "combined": "20",
        "transactionDate": "2024-02-04 11:41:26.449104",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086611"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "AT4650",
        "local_combined_offerings": 100,
        "memberName": "Rose Obure",
        "combined": "100",
        "transactionDate": "2024-02-04 11:42:59.87787",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086648"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO2759",
        "Local_Church": 100,
        "tithe": "300",
        "memberName": "Risper Nyakambi",
        "transactionDate": "2024-02-04 11:43:44.267095",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086657"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO6445",
        "local_combined_offerings": 25,
        "memberName": "Samwel Amisi",
        "combined": "25",
        "transactionDate": "2024-02-04 11:44:40.104213",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086681"
      },
      {
        "totalAmount": "20.00",
        "memberNumber": "CO4051",
        "memberName": "Leonida Bonareri Akinga",
        "Deaconry": 20,
        "transactionDate": "2024-02-04 11:49:07.977742",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086757"
      },
      {
        "totalAmount": "100.00",
        "Youths": 50,
        "memberNumber": "CN9729",
        "Special_Needs": 50,
        "memberName": "Paulsam Ondieki",
        "transactionDate": "2024-02-04 11:50:38.928406",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086783"
      },
      {
        "totalAmount": "27220.00",
        "memberNumber": "CP9823",
        "tithe": "27220",
        "memberName": "Gekone Evans",
        "transactionDate": "2024-02-05 17:10:47.455048",
        "meansOfPayment": "USSD",
        "receiptNumber": "11105846"
      },
      {
        "totalAmount": "1000.00",
        "memberNumber": "CO6161",
        "local_combined_offerings": 25,
        "cdf": "50",
        "tithe": "800",
        "memberName": "Jeliah Oyaro",
        "combined": "25",
        "transactionDate": "2024-02-04 06:03:57.098914",
        "meansOfPayment": "USSD",
        "thirteenth": "50",
        "receiptNumber": "11080508",
        "camp": "50"
      },
      {
        "totalAmount": "2180.00",
        "memberNumber": "CN4964",
        "memberName": "Eric Onsongo Mwebi",
        "Deaconry": 2180,
        "transactionDate": "2024-02-02 15:49:13.274219",
        "meansOfPayment": "Cash",
        "receiptNumber": "11028537"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "AV8793",
        "local_combined_offerings": 25,
        "memberName": "Sherly Nabwile Juma",
        "combined": "25",
        "transactionDate": "2024-02-02 15:50:30.916753",
        "meansOfPayment": "Cash",
        "receiptNumber": "11028544"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CU1131",
        "local_combined_offerings": 10,
        "Local_Church": 50,
        "tithe": "30",
        "memberName": "Albert Chuma Nyabuto",
        "combined": "10",
        "transactionDate": "2024-02-02 15:54:22.583539",
        "meansOfPayment": "Cash",
        "receiptNumber": "11028568"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN4474",
        "tithe": "100",
        "memberName": "Queenter Olima ",
        "transactionDate": "2024-02-10 18:03:24.298818",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174248"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CU1131",
        "local_combined_offerings": 15,
        "tithe": "70",
        "memberName": "Albert Chuma Nyabuto",
        "combined": "15",
        "transactionDate": "2024-02-03 20:11:35.369119",
        "meansOfPayment": "Cash",
        "receiptNumber": "11070914"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CO0405",
        "local_combined_offerings": 75,
        "memberName": "Joyce Morangi",
        "combined": "75",
        "transactionDate": "2024-02-04 11:51:30.019908",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086800"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "254706903499",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Dolphine Kwamboka",
        "combined": "50",
        "transactionDate": "2024-02-04 11:53:51.974644",
        "meansOfPayment": "Cash",
        "receiptNumber": "11086837"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CR5338",
        "tithe": "100",
        "memberName": "Caroline Aoko Akuno",
        "transactionDate": "2024-02-10 17:19:25.103634",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172226",
        "camp": "50"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "254715207748",
        "tithe": "100",
        "memberName": "Martha K. Omwanza",
        "transactionDate": "2024-02-10 16:32:20.606174",
        "meansOfPayment": "Cash",
        "receiptNumber": "11170194"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "CO6445",
        "tithe": "300",
        "memberName": "Samwel Amisi",
        "transactionDate": "2024-02-10 17:31:30.165045",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172819"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0405",
        "local_combined_offerings": 50,
        "Local_Church": 100,
        "memberName": "Joyce Morangi",
        "combined": "50",
        "transactionDate": "2024-02-10 17:10:51.848578",
        "meansOfPayment": "Cash",
        "receiptNumber": "11171878"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CO0404",
        "local_combined_offerings": 50,
        "memberName": "Justin Matai",
        "combined": "50",
        "transactionDate": "2024-02-17 10:57:58.866009",
        "meansOfPayment": "USSD",
        "receiptNumber": "11255013"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254113625690",
        "Local_Church": 50,
        "memberName": "Farachi Mokoro",
        "transactionDate": "2024-02-03 17:23:38.735875",
        "meansOfPayment": "Cash",
        "receiptNumber": "11064490"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CO0460",
        "Local_Church": 50,
        "Crusade": 50,
        "memberName": "Bonface Nyambati",
        "transactionDate": "2024-02-11 07:12:50.105404",
        "meansOfPayment": "Cash",
        "receiptNumber": "11189571",
        "camp": "100"
      },
      {
        "totalAmount": "3365.00",
        "memberNumber": "CN4964",
        "memberName": "Eric Onsongo Mwebi",
        "Deaconry": 3365,
        "transactionDate": "2024-02-10 18:21:01.168534",
        "meansOfPayment": "Cash",
        "receiptNumber": "11175071"
      },
      {
        "totalAmount": "30.00",
        "memberNumber": "254700876508",
        "tithe": "30",
        "memberName": "Cyndy Akoth",
        "transactionDate": "2024-02-10 18:14:36.134808",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174769"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "254702824549",
        "memberName": "Owere D",
        "Deaconry": 100,
        "transactionDate": "2024-02-10 17:49:28.600443",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173608"
      },
      {
        "totalAmount": "100.00",
        "memberNumber": "CN8323",
        "local_combined_offerings": 35,
        "tithe": "30",
        "memberName": "Robert Kebaso Orina ",
        "combined": "35",
        "transactionDate": "2024-02-10 16:45:35.449623",
        "meansOfPayment": "Cash",
        "receiptNumber": "11170803"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CU1133",
        "local_combined_offerings": 15,
        "tithe": "100",
        "memberName": "Alex Anunda Machogu",
        "combined": "15",
        "transactionDate": "2024-02-10 16:48:53.904825",
        "meansOfPayment": "Cash",
        "Church_Budget": 20,
        "receiptNumber": "11170928"
      },
      {
        "totalAmount": "300.00",
        "memberNumber": "BN5435",
        "tithe": "300",
        "memberName": "Jacob Oyugi",
        "transactionDate": "2024-02-10 16:55:43.230693",
        "meansOfPayment": "Cash",
        "receiptNumber": "11171253"
      },
      {
        "totalAmount": "2000.00",
        "memberNumber": "254712510311",
        "memberName": "Eva Otieno",
        "transactionDate": "2024-02-10 17:30:01.86797",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172741",
        "camp": "2000"
      },
      {
        "totalAmount": "150.00",
        "memberNumber": "CN8328",
        "tithe": "150",
        "memberName": "Lillian Momanyi",
        "transactionDate": "2024-02-10 17:26:43.668663",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172585"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN8308",
        "tithe": "200",
        "memberName": "Wyckliff Onsase",
        "transactionDate": "2024-02-10 17:12:19.919692",
        "meansOfPayment": "Cash",
        "receiptNumber": "11171932"
      },
      {
        "totalAmount": "400.00",
        "memberNumber": "CO2759",
        "Local_Church": 100,
        "tithe": "300",
        "memberName": "Risper Nyakambi",
        "transactionDate": "2024-02-10 17:15:05.318563",
        "meansOfPayment": "Cash",
        "receiptNumber": "11172018"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CS3047",
        "tithe": "50",
        "memberName": "Elizabeth Ongera ",
        "transactionDate": "2024-02-10 17:36:55.277051",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173078"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN9726",
        "local_combined_offerings": 50,
        "tithe": "100",
        "memberName": "Jennifer Hayanga",
        "combined": "50",
        "transactionDate": "2024-02-10 17:40:42.640989",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173227"
      },
      {
        "totalAmount": "590.00",
        "memberNumber": "CU1131",
        "local_combined_offerings": 25,
        "tithe": "490",
        "Development": 20,
        "memberName": "Albert Chuma Nyabuto",
        "combined": "25",
        "transactionDate": "2024-02-10 17:44:30.624971",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173404",
        "camp": "30"
      },
      {
        "totalAmount": "80.00",
        "memberNumber": "254716700061",
        "tithe": "80",
        "memberName": "Beatrice Aminga",
        "transactionDate": "2024-02-10 17:53:31.833852",
        "meansOfPayment": "Cash",
        "receiptNumber": "11173798"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO4051",
        "tithe": "50",
        "memberName": "Leonida Bonareri Akinga",
        "transactionDate": "2024-02-10 18:15:38.481505",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174815"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "CO6686",
        "tithe": "50",
        "memberName": "George Momanyi",
        "transactionDate": "2024-02-10 18:16:50.259575",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174864"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CN2245",
        "Local_Church": 200,
        "memberName": "Benard Mutethia",
        "transactionDate": "2024-02-10 18:20:02.702605",
        "meansOfPayment": "Cash",
        "receiptNumber": "11175019"
      },
      {
        "totalAmount": "50.00",
        "memberNumber": "254751805075",
        "tithe": "50",
        "memberName": "Judith Anyango Okutio",
        "transactionDate": "2024-02-10 18:10:21.20325",
        "meansOfPayment": "Cash",
        "receiptNumber": "11174570"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "254112787406",
        "tithe": "180",
        "Development": 20,
        "memberName": "Daniel Munial",
        "transactionDate": "2024-02-10 19:02:47.962669",
        "meansOfPayment": "Cash",
        "receiptNumber": "11176893"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "CU4240",
        "tithe": "200",
        "memberName": "Precillah Adhiambo",
        "transactionDate": "2024-02-10 19:12:16.239385",
        "meansOfPayment": "Cash",
        "receiptNumber": "11177365"
      },
      {
        "totalAmount": "200.00",
        "memberNumber": "254721603087",
        "tithe": "200",
        "memberName": "Dinah Nyangechi",
        "transactionDate": "2024-02-10 18:54:40.223628",
        "meansOfPayment": "Cash",
        "receiptNumber": "11176516"
      },
      {
        "totalAmount": "1020912.00",
        "local_combined_offerings": 4710,
        "cdf": "120",
        "tithe": "42910",
        "combined": "4710",
        "transactionDate": "19 Mar,24 10:47",
        "camp": "5500"
      },
      {
        "totalAmount": "1020912.00",
        "local_combined_offerings": 12650,
        "cdf": "350",
        "tithe": "213476",
        "combined": "12650",
        "transactionDate": "19 Mar,24 10:47",
        "thirteenth": "870",
        "camp": "11800"
      }
    ],
    "meansOfPayment": [
      "Cash",
      "USSD",
      "Bank Deposits",
      "Mobile Money"
    ],
    "trustFunds": {
      "cdf": "350",
      "tithe": "213476",
      "combined": "12650",
      "thirteenth": "870",
      "camp": "11800"
    }
  },
  "function": "getLocalChurchNonTrustFundsOfferingsReport",
  "status": 0
};

var local_church_funds = local_church_offering.payload.localChurchFunds;
var trust_funds = local_church_offering.payload.trustFunds;
const local_church_keys = Object.keys(local_church_funds);
const local_church_values = Object.values(local_church_funds);
var trust_funds_keys = Object.keys(trust_funds);
var trust_funds_values = Object.values(trust_funds);
var sized = local_church_offering.payload.members.length - 2;
var local_funds = local_church_keys.length;
var colors = [];
var colors1 = [];
document.getElementById("transactions").innerHTML = sized;
document.getElementById("total_amount").innerHTML = "Kshs: "+ local_church_offering.totalAmount;
document.getElementById("ussd_account").innerHTML = "Kshs: " + 926696;
document.getElementById("cash_account").innerHTML = "Kshs: " + 94216;

for (var i=0;i<local_church_keys.length;i++){
	colors.push('rgba(54, 162, 235, 1)');
}

for (var i=0;i<trust_funds_keys.length;i++){
	colors1.push('rgba(54, 162, 235, 1)');
}

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Cash', 'USSD',],
      datasets: [{
        label: 'Kshs',
        data: [94216, 926000],
		backgroundColor:[
		'rgba(0, 0, 0, 0.35)',
		'rgba(54, 162, 235, 1)'],
      }]
    },
    options: {
        responsive: true,
		maintainAspectRatio: false,
		events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
		plugins: {
		  legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Local Church Offering USSD and Cash Distribution'
		},
		tooltip: {
			mode: 'index',
			intersect: false
		}
		}
    }
	,animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutBounce',
        from: 1,
        to: 0,
        loop: true
      }
    }
	
  });
  
   new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: local_church_keys,
      datasets: [{
        label: 'Kshs',
        data: local_church_values,
		backgroundColor:colors,
      }]
    },
    options: {
		maintainAspectRatio: true,
        responsive: true,
		plugins: {		  
		  tooltip: {
			mode: 'index',
			intersect: false
		  },
		  title: {
			display: true,
			text: 'Local Church Non Trust Fund Distribution'
		  }
		},
		hover: {
		  mode: 'index',
		  intersec: false
		},
		scales: {
		  x: {
			title: {
			  display: true,
			  text: 'Local Church Non Trust Fund Accounts'
			}
		  },
		  y: {
			title: {
			  display: true,
			  text: 'Kshs'
			},
			// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
			suggestedMin: 500,

			// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
			suggestedMax: 500,
		  }
		}
    }
	,animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutBounce',
        from: 1,
        to: 0,
        loop: true
      }
    },
	events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
  });
  
   new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: trust_funds_keys,
      datasets: [{
        label: 'Kshs',
        data: trust_funds_values,
		backgroundColor:colors1,
      }]
    },
    options: {
		maintainAspectRatio: true,
        responsive: true,
		plugins: {		  
		  tooltip: {
			mode: 'index',
			intersect: false
		  },
		  title: {
			display: true,
			text: 'Local Church Trust Fund Distribution'
		  }
		},
		hover: {
		  mode: 'index',
		  intersec: false
		},
		scales: {
		  x: {
			title: {
			  display: true,
			  text: 'Local Church Trust Fund Accounts'
			}
		  },
		  y: {
			title: {
			  display: true,
			  text: 'Kshs'
			},
			// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
			suggestedMin: 500,

			// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
			suggestedMax: 500,
		  }
		}
    }
	,animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutBounce',
        from: 1,
        to: 0,
        loop: true
      }
    },
	events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
  });
  
 