// src/data/places.js
import image1 from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image21.jpg";
import image5 from "../assets/image22.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.jpg";
import image19 from "../assets/image19.jpg";
import image20 from "../assets/image20.jpg";

const places = [
    {
        id: "mountains",
        title: "Mountains",
        subtitle: "The Majesty of Sikkim",
        location: "North Sikkim",
        image: image1,
        description: [
            "Sikkim is home to the highest peaks of the Himalayas, including Kanchenjunga, the world's third-highest mountain.",
            "The mountains attract trekkers, nature lovers, and spiritual seekers from around the globe."
        ],
        description_hi: [
            "सिक्किम हिमालय की सबसे ऊँची चोटियों का घर है, जिसमें कंचनजंघा शामिल है।",
            "ये पहाड़ दुनिया भर के यात्रियों और श्रद्धालुओं को आकर्षित करते हैं।"
        ],
        history: [
            "Kanchenjunga is worshipped as a deity by Sikkim's indigenous people.",
            "Many monasteries and holy sites are nestled amid the peaks."
        ],
        history_hi: [
            "कंचनजंघा को सिक्किम के स्थानीय लोग देवता मानते हैं।",
            "कई मठ और पवित्र स्थल इन पर्वतों के बीच बसे हुए हैं।"
        ],
        hotspots: [{
            front: "Sikkim is home to Kanchenjunga, the world's third highest mountain.",
            right: "Trekkers and nature lovers flock here.",
            back: "Worshipped as a sacred deity by locals.",
            left: "Home to monasteries and holy sites."
        }]
    },
    {
        id: "nature-view",
        title: "Nature View",
        subtitle: "Breathtaking Scenery",
        location: "East Sikkim",
        image: image2,
        description: [
            "Experience the lush greenery, flowing rivers, and vibrant rhododendron forests unique to Sikkim.",
            "Nature trails allow visitors to immerse themselves in serene landscapes."
        ],
        description_hi: [
            "सिक्किम की हरियाली, नदियाँ और रोडोडेंड्रोन के जंगल अनोखे हैं।",
            "यहाँ की पगडंडियाँ शांति और सुकून का अनुभव कराती हैं।"
        ],
        history: [
            "Sikkim's valleys and meadows have long been considered sacred by locals.",
            "Eco-tourism efforts help preserve these pristine environments."
        ],
        history_hi: [
            "सिक्किम की घाटियाँ और घास के मैदान पवित्र माने जाते हैं।",
            "ईको-टूरिज्म प्रयास इन स्थानों को सुरक्षित रखते हैं।"
        ],
        hotspots: [{
            front: "Lush greenery and rivers fill Sikkim.",
            right: "Nature trails bring peace.",
            back: "Valleys are sacred by tradition.",
            left: "Eco-tourism preserves the serenity."
        }]
    },
    {
        id: "scenic-road",
        title: "Scenic Road",
        subtitle: "Routes through Paradise",
        location: "South Sikkim",
        image: image3,
        description: [
            "Winding roads connect Sikkim's remote villages, monasteries, and adventure hotspots.",
            "Travelers are treated to panoramic vistas at every turn."
        ],
        description_hi: ["घुमावदार सड़कें गाँवों और मठों को जोड़ती हैं।", "हर मोड़ पर यात्रियों को अद्भुत दृश्य दिखाई देते हैं।"],
        history: [
            "Historic trade routes once linked India and Tibet here.",
            "Today, the roads are famous for scenic travel."
        ],
        history_hi: ["पुराने समय में ये रास्ते व्यापारिक मार्ग थे।", "आज ये सड़कें पर्यटन के लिए मशहूर हैं।"],
        hotspots: [{
            front: "Curvy roads connect remote villages.",
            right: "Every corner reveals new scenery.",
            back: "Ancient trade routes passed here.",
            left: "Adventure and exploration routes."
        }]
    },
    {
        id: "automobile",
        title: "Automobile",
        subtitle: "Journeys Across Sikkim",
        location: "Gangtok",
        image: image4,
        description: [
            "Explore Sikkim's beauty on four wheels—every road trip is an adventure.",
            "Local drivers share knowledge about the land and its customs."
        ],
        description_hi: ["गाड़ियों से सिक्किम की यात्रा रोमांचक अनुभव देती है।", "स्थानीय ड्राइवर अपनी संस्कृति और कहानियाँ साझा करते हैं।"],
        history: ["Transport opened new regions for visitors.", "Jeeps and taxis are iconic in Sikkim."],
        history_hi: ["यातायात ने अलग-थलग क्षेत्रों को खोला।", "जीप और टैक्सी यहाँ की पहचान हैं।"],
        hotspots: [{
            front: "Road trips offer adventures in Sikkim.",
            right: "Local drivers guide with stories.",
            back: "Transport opened up remote places.",
            left: "Classic jeeps dominate roads."
        }]
    },
    {
        id: "cycling",
        title: "Cycling",
        subtitle: "Pedal through Wonders",
        location: "West Sikkim",
        image: image5,
        description: [
            "Cycling is a sustainable and immersive way to explore Sikkim’s terrain.",
            "Riders enjoy off-road trails and scenic stretches along rivers and forests."
        ],
        description_hi: ["साइकिलिंग सिक्किम घूमने का टिकाऊ तरीका है।", "साइकिल सवार नदियों और जंगलों के बीच सफर करते हैं।"],
        history: ["Sikkim hosts cycling rallies for tourism.", "Villages welcome cyclists warmly."],
        history_hi: ["सिक्किम में साइकिल रैली आयोजित की जाती हैं।", "गाँववाले साइकिल चालकों का स्वागत करते हैं।"],
        hotspots: [{
            front: "Pedaling through nature.",
            right: "Forests and river trails included.",
            back: "Cycling rallies promote tourism.",
            left: "Villagers greet cyclists happily."
        }]
    },
    {
        id: "green-valley",
        title: "Green Valley",
        subtitle: "Nature's Bounty",
        location: "Dzongu Valley",
        image: image6,
        description: ["Verdant valleys form Sikkim’s agricultural heart.", "Terraced fields and rivers fill the scenery."],
        description_hi: ["हरी-भरी घाटियाँ सिक्किम की कृषि और संस्कृति का केंद्र हैं।", "यहाँ सीढ़ीदार खेत और शांत नदियाँ मिलती हैं।"],
        history: ["Traditional farming sustains lifestyles.", "Harvest festivals celebrate abundance."],
        history_hi: ["परंपरागत खेती यहाँ के लोगों का जीवन है।", "कई त्योहार फसल और समृद्धि का उत्सव मनाते हैं।"],
        hotspots: [{
            front: "Terraced valleys sustain agriculture.",
            right: "Tranquil rivers flow endlessly.",
            back: "Traditional farming keeps heritage alive.",
            left: "Festivals celebrate productivity."
        }]
    },

    {
        id: "prayer-flags-1",
        title: "Prayer Flags",
        subtitle: "Colors of Devotion",
        location: "Rumtek",
        image: image7,
        description: [
            "Brightly colored prayer flags flutter across Sikkim’s ridges and passes.",
            "Each color represents an element, carrying prayers on the wind."
        ],
        description_hi: [
            "रंगीन प्रार्थना झंडे सिक्किम की पहाड़ियों पर लहराते हैं।",
            "हर रंग एक तत्व का प्रतीक है।"
        ],
        history: [
            "Prayer flags are a centuries-old Buddhist tradition.",
            "Local artisans handcraft flags for festivals and rituals."
        ],
        history_hi: [
            "प्रार्थना झंडे बौद्ध परंपरा का हिस्सा हैं।",
            "कला-कार इन्हें त्योहारों के लिए बनाते हैं।"
        ],
        hotspots: [{
            front: "Colorful flags flutter on ridges.",
            right: "Each flag color is symbolic.",
            back: "Part of Buddhist tradition.",
            left: "Artisans craft for rituals."
        }]
    },
    {
        id: "prayer-flags-2",
        title: "Prayer Flags",
        subtitle: "Sacred Symbols",
        location: "Pemayangtse",
        image: image8,
        description: [
            "Prayer flags adorn Himalayan landscapes, blessing all who pass beneath.",
            "Their presence creates a sense of peace and connection."
        ],
        description_hi: [
            "प्रार्थना झंडे हिमालय की शोभा बढ़ाते हैं।",
            "इनसे शांति और आध्यात्मिकता का अनुभव होता है।"
        ],
        history: [
            "Flag placement reflects sacred geography and community bonds.",
            "Sikkim's monasteries host seasonal ceremonies for new flags."
        ],
        history_hi: [
            "झंडों की स्थापना धार्मिक मान्यताओं पर आधारित है।",
            "मठों में झंडे बदलने की रस्म होती है।"
        ],
        hotspots: [{
            front: "Flags bless Himalayan land.",
            right: "Spreads peace and unity.",
            back: "Flag ceremonies at monasteries.",
            left: "Sacred geography influences location."
        }]
    },
    {
        id: "waterfalls",
        title: "Waterfalls",
        subtitle: "Nature’s Flowing Beauty",
        location: "Lachung",
        image: image9,
        description: [
            "Sikkim is dotted with spectacular waterfalls that cascade from the mountains.",
            "They provide refreshing stops for travelers and trekkers alike."
        ],
        description_hi: [
            "सिक्किम में सुंदर झरने पहाड़ों से गिरते हैं।",
            "ये यात्रियों के लिए विश्राम स्थल हैं।"
        ],
        history: [
            "Many waterfalls are considered holy and sites for rituals.",
            "They are deeply tied to local folklore."
        ],
        history_hi: [
            "कई झरनों को पवित्र माना जाता है।",
            "इनसे स्थानीय कथाएँ जुड़ी हैं।"
        ],
        hotspots: [{
            front: "Waterfalls cascade from heights.",
            right: "Favorite refreshment for trekkers.",
            back: "Some are considered sacred.",
            left: "Part of Sikkim folklore."
        }]
    },
    {
        id: "lake-gurudongmar",
        title: "Gurudongmar Lake",
        subtitle: "A Sacred High-Altitude Lake",
        location: "North Sikkim",
        image: image10,
        description: [
            "One of the highest lakes in the world, Gurudongmar is breathtakingly beautiful.",
            "Its crystal waters are believed to be blessed and never completely freeze."
        ],
        description_hi: [
            "गुरुडोंगमार झील दुनिया की सबसे ऊँची झीलों में से एक है।",
            "इसका पानी कभी पूरी तरह नहीं जमता।"
        ],
        history: [
            "Named after Guru Padmasambhava who visited in the 8th century.",
            "The lake is revered by Buddhists and Hindus alike."
        ],
        history_hi: [
            "इसका नाम गुरु पद्मसंभव से जुड़ा है।",
            "हिंदू और बौद्ध दोनों इसे पवित्र मानते हैं।"
        ],
        hotspots: [{
            front: "High-altitude holy lake.",
            right: "Water never fully freezes.",
            back: "Visiting pilgrims come year-round.",
            left: "Name linked to Guru Padmasambhava."
        }]
    },
    {
        id: "yuksom",
        title: "Yuksom",
        subtitle: "Gateway to Kanchenjunga",
        location: "West Sikkim",
        image: image11,
        description: [
            "A historic town that serves as the base for Kanchenjunga treks.",
            "Yuksom is surrounded by lush forests and monasteries."
        ],
        description_hi: [
            "युक्सोम कंचनजंघा ट्रेक का मुख्य केंद्र है।",
            "यह जंगलों और मठों से घिरा है।"
        ],
        history: [
            "It was the first capital of Sikkim in 1642.",
            "The coronation throne still remains as heritage."
        ],
        history_hi: [
            "1642 में यह सिक्किम की पहली राजधानी थी।",
            "यहाँ का ताजपोशी स्थल अब भी मौजूद है।"
        ],
        hotspots: [{
            front: "Basecamp for Kanchenjunga trekkers.",
            right: "Rich in forest landscapes.",
            back: "First capital of Sikkim state.",
            left: "Ancient monasteries all around."
        }]
    },
    {
        id: "tsongmo-lake",
        title: "Tsomgo Lake",
        subtitle: "The Frozen Jewel",
        location: "East Sikkim",
        image: image12,
        description: [
            "This glacial lake is surrounded by snow-capped mountains.",
            "In spring, its shores bloom with wildflowers."
        ],
        description_hi: [
            "यह झील बर्फ से ढकी पहाड़ियों से घिरी है।",
            "वसंत ऋतु में यहाँ फूल खिलते हैं।"
        ],
        history: [
            "Locals consider it sacred and perform rituals on its banks.",
            "The lake changes colors with seasons."
        ],
        history_hi: [
            "इसे पवित्र माना जाता है और यहाँ पूजा होती है।",
            "यह झील मौसम के अनुसार रंग बदलती है।"
        ],
        hotspots: [{
            front: "Glacial lake ringed by mountains.",
            right: "Shore blooms with wildflowers.",
            back: "Color changes throughout seasons.",
            left: "Rituals held by locals."
        }]
    },
    {
        id: "namchi",
        title: "Namchi",
        subtitle: "Cultural Capital of South Sikkim",
        location: "South Sikkim",
        image: image13,
        description: [
            "Namchi is famous for its giant Guru Padmasambhava statue.",
            "The town blends spirituality, culture, and panoramic views."
        ],
        description_hi: [
            "नामची गुरु पद्मसंभव की विशाल मूर्ति के लिए प्रसिद्ध है।",
            "यहाँ संस्कृति और अध्यात्म का मेल है।"
        ],
        history: [
            "Once a quiet town, Namchi has become a hub for cultural festivals.",
            "The Samdruptse Monastery stands as its spiritual landmark."
        ],
        history_hi: [
            "पहले यह शांत कस्बा था, अब त्योहारों का केंद्र है।",
            "समद्रुप्त्से मठ इसकी पहचान है।"
        ],
        hotspots: [{
            front: "Famous for giant Guru statue.",
            right: "Spiritual and cultural events occur.",
            back: "Hub for vibrant Sikkimese festivals.",
            left: "Samdruptse Monastery stands tall."
        }]
    },
    {
        id: "pelling",
        title: "Pelling",
        subtitle: "Panoramic Vistas",
        location: "West Sikkim",
        image: image14,
        description: [
            "Known for unmatched views of Kanchenjunga.",
            "Pelling attracts trekkers, pilgrims, and peace seekers."
        ],
        description_hi: [
            "पेलिंग कंचनजंघा के दृश्यों के लिए मशहूर है।",
            "यह तीर्थयात्रियों और पर्यटकों को आकर्षित करता है।"
        ],
        history: [
            "Pelling was once a small village that grew into a tourist hub.",
            "Its monasteries are among the oldest in Sikkim."
        ],
        history_hi: [
            "पहले पेलिंग एक छोटा गाँव था।",
            "इसके मठ सिक्किम के सबसे पुराने मठों में हैं।"
        ],
        hotspots: [{
            front: "Best mountain views in West Sikkim.",
            right: "Pilgrimage and peace destinations.",
            back: "Ancient monasteries and heritage.",
            left: "Now a thriving tourist center."
        }]
    },
    {
        id: "ravangla",
        title: "Ravangla",
        subtitle: "A Serene Hill Station",
        location: "South Sikkim",
        image: image15,
        description: [
            "Ravangla offers panoramic Himalayan views and peaceful monasteries.",
            "It is known for birdwatching and tea gardens."
        ],
        description_hi: [
            "रवांगला हिमालयी दृश्यों और मठों के लिए प्रसिद्ध है।",
            "यह पक्षी दर्शन और चाय बागानों के लिए जाना जाता है।"
        ],
        history: [
            "It became popular after the Buddha Park was built here.",
            "Traditional fairs and dances are still celebrated in the town."
        ],
        history_hi: [
            "बुद्ध पार्क बनने के बाद यह लोकप्रिय हुआ।",
            "यहाँ मेले और नृत्य आज भी होते हैं।"
        ],
        hotspots: [{
            front: "Hill station with Himalayan views.",
            right: "Peaceful monasteries and gardens.",
            back: "Popular for Buddha Park.",
            left: "Birdwatching and local fairs."
        }]
    },
    {
        id: "lachung",
        title: "Lachung",
        subtitle: "Picturesque Mountain Village",
        location: "North Sikkim",
        image: image16,
        description: [
            "A charming village surrounded by snowy mountains.",
            "It serves as a base for visiting Yumthang Valley."
        ],
        description_hi: [
            "लाचुंग बर्फीली पहाड़ियों से घिरा गाँव है।",
            "यह युमथांग घाटी जाने का मार्ग है।"
        ],
        history: [
            "Historically, Lachung was a trading post between India and Tibet.",
            "Its monasteries hold cultural importance for the local people."
        ],
        history_hi: [
            "यह भारत-तिब्बत व्यापार का केंद्र था।",
            "यहाँ के मठ सांस्कृतिक दृष्टि से महत्वपूर्ण हैं।"
        ],
        hotspots: [{
            front: "Mountain village at snowline.",
            right: "Gateway to Yumthang Valley.",
            back: "Old trade post with Tibet.",
            left: "Important monasteries present."
        }]
    },
    {
        id: "yumthang-valley",
        title: "Yumthang Valley",
        subtitle: "Valley of Flowers",
        location: "North Sikkim",
        image: image17,
        description: [
            "A colorful valley known for its rhododendron blooms.",
            "Hot springs and rivers add to its charm."
        ],
        description_hi: [
            "युमथांग घाटी फूलों और रंगों से भरपूर है।",
            "गर्म पानी के झरने इसकी खूबसूरती बढ़ाते हैं।"
        ],
        history: [
            "It is part of a protected sanctuary for rare Himalayan flora.",
            "Yumthang has been a pilgrimage site for centuries."
        ],
        history_hi: [
            "यह दुर्लभ वनस्पतियों का संरक्षित क्षेत्र है।",
            "यह सदियों से तीर्थ स्थल रहा है।"
        ],
        hotspots: [{
            front: "Valley rich in rhododendrons.",
            right: "Accommodation near hot springs.",
            back: "Rare Himalayan flora preserved.",
            left: "Historic pilgrimage destination."
        }]
    },
    {
        id: "rumtek",
        title: "Rumtek Monastery",
        subtitle: "A Spiritual Landmark",
        location: "Near Gangtok",
        image: image18,
        description: [
            "One of the largest monasteries in Sikkim.",
            "It is the seat of the Karma Kagyu lineage of Tibetan Buddhism."
        ],
        description_hi: [
            "रूमटेक सिक्किम का सबसे बड़ा मठ है।",
            "यह कर्मा कग्यू परंपरा का मुख्य केंद्र है।"
        ],
        history: [
            "Originally built in the 16th century and rebuilt in the 20th century.",
            "It remains a key spiritual and cultural center."
        ],
        history_hi: [
            "यह 16वीं सदी में बना और 20वीं सदी में पुनर्निर्मित हुआ।",
            "यह आज भी आध्यात्मिक केंद्र है।"
        ],
        hotspots: [{
            front: "Largest monastery in Sikkim.",
            right: "Center of Karma Kagyu tradition.",
            back: "Spiritual and cultural landmark.",
            left: "Founded centuries ago."
        }]
    },
    {
        id: "zero-point",
        title: "Zero Point",
        subtitle: "Where Roads End",
        location: "North Sikkim",
        image: image19,
        description: [
            "A breathtaking high-altitude spot covered in snow most of the year.",
            "It offers unmatched views of the Himalayas."
        ],
        description_hi: [
            "जीरो पॉइंट अधिकतर समय बर्फ से ढका रहता है।",
            "यहाँ से हिमालय का अद्भुत दृश्य मिलता है।"
        ],
        history: [
            "Zero Point lies close to the Indo-China border.",
            "It became a tourist attraction due to its unique location."
        ],
        history_hi: [
            "यह भारत-चीन सीमा के पास है।",
            "यह अपनी स्थिति के कारण प्रसिद्ध हुआ।"
        ],
        hotspots: [{
            front: "End of accessible Sikkim roads.",
            right: "Snow almost year-round.",
            back: "Himalayan border viewpoint.",
            left: "Became famous among tourists."
        }]
    },
    {
        id: "singalila",
        title: "Singalila Range",
        subtitle: "The Great Himalayan Ridge",
        location: "West Sikkim",
        image: image20,
        description: [
            "A mountain range offering iconic trekking routes.",
            "Its forests are rich in biodiversity and rare wildlife."
        ],
        description_hi: [
            "सिंगालिला पर्वतमाला प्रसिद्ध ट्रेकिंग स्थल है।",
            "इसके जंगल जैव विविधता से भरपूर हैं।"
        ],
        history: [
            "The range has been an ancient trade route and pilgrimage trail.",
            "It remains a hotspot for adventure seekers today."
        ],
        history_hi: [
            "यह प्राचीन व्यापार और तीर्थ मार्ग रहा है।",
            "आज यह रोमांच प्रेमियों का केंद्र है।"
        ],
        hotspots: [{
            front: "Trek through Himalayan ridge.",
            right: "Dense forests with rich wildlife.",
            back: "Historic trade and pilgrimage trail.",
            left: "Famous among adventure seekers."
        }]
    }
];

export default places;
