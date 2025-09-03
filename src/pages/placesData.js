// src/data/places.js
import image1 from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
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
        history: [
            "Kanchenjunga is worshipped as a deity by Sikkim's indigenous people.",
            "Many monasteries and holy sites are nestled amid the peaks."
        ]
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
        history: [
            "Sikkim's valleys and meadows have long been considered sacred by locals.",
            "Eco-tourism efforts help preserve these pristine environments."
        ]
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
        history: [
            "Historic trade routes once linked India and Tibet through these paths.",
            "Today, the roads reveal new perspectives of its incredible scenery."
        ]
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
        history: [
            "Transport has opened up once-isolated regions to visitors.",
            "Classic jeeps and taxis are iconic sights on Sikkim’s roads."
        ]
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
        history: [
            "Sikkim has hosted cycling rallies to promote healthy tourism.",
            "Villages often welcome cyclists with local hospitality."
        ]
    },
    {
        id: "green-valley",
        title: "Green Valley",
        subtitle: "Nature's Bounty",
        location: "Dzongu Valley",
        image: image6,
        description: [
            "Verdant valleys are the heart of Sikkim’s agriculture and natural heritage.",
            "Step into a world filled with terraced fields and tranquil rivers."
        ],
        history: [
            "Traditional farming practices sustain valley communities.",
            "Many cultural festivals celebrate harvest and fertility."
        ]
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
        history: [
            "Prayer flags are a centuries-old Buddhist tradition.",
            "Local artisans handcraft flags for festivals and rituals."
        ]
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
        history: [
            "Flag placement reflects sacred geography and community bonds.",
            "Sikkim's monasteries host seasonal ceremonies for new flags."
        ]
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
        history: [
            "Many waterfalls are considered holy and are sites for rituals.",
            "They are tied deeply with local folklore and legends."
        ]
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
        history: [
            "Named after Guru Padmasambhava who visited in the 8th century.",
            "The lake is revered by Buddhists and Hindus alike."
        ]
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
        history: [
            "It was the first capital of Sikkim in 1642.",
            "The coronation throne still remains as a heritage site."
        ]
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
        history: [
            "Locals consider it sacred and perform rituals on its banks.",
            "The lake changes colors with seasons, adding to its mystique."
        ]
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
        history: [
            "Once a quiet town, Namchi has become a hub for cultural festivals.",
            "The Samdruptse Monastery stands as its spiritual landmark."
        ]
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
        history: [
            "Pelling was once a small village that grew into a tourist hub.",
            "Its monasteries are among the oldest in Sikkim."
        ]
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
        history: [
            "It became popular after the Buddha Park was built here.",
            "Traditional fairs and dances are still celebrated in the town."
        ]
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
        history: [
            "Historically, Lachung was a trading post between India and Tibet.",
            "Its monasteries hold cultural importance for the local people."
        ]
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
        history: [
            "It is part of a protected sanctuary for rare Himalayan flora.",
            "Yumthang has been a pilgrimage site for centuries."
        ]
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
        history: [
            "Originally built in the 16th century and rebuilt in the 20th century.",
            "It remains a key spiritual and cultural center."
        ]
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
        history: [
            "Zero Point lies close to the Indo-China border.",
            "It became a tourist attraction due to its unique location."
        ]
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
        history: [
            "The range has been an ancient trade route and pilgrimage trail.",
            "It remains a hotspot for adventure seekers today."
        ]
    }
];

export default places;
