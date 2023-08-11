import { star, shield, send, airbnb, binance, dropbox, coinbase } from '../assets/index'
import {
    BsInstagram,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

export const navigationLinks = [
    {
        id: 'home',
        title: 'Bosh sahifa'
    },
    {
        id: 'praduct',
        title: 'Maxsulot'
    },
    {
        id: 'features',
        title: 'Xizmatlar'
    },
    {
        id: 'cliens',
        title: 'Mijozlar'
    }
]

export const statistica = [
    {
        id: 1,
        title: 'Foydalanuvchi Faol',
        value: '9300+'
    },
    {
        id: 2,
        title: 'Kompaniya Homiligida',
        value: '100+'
    },
    {
        id: 1,
        title: 'Tranzaksiya',
        value: '110M+'
    }
]

export const features = [
    {
        id: 1,
        icon: star,
        title: 'Mukofotlar',
        content: 'Eng yaxshi kiridet kartalari aksiyalar va sovrunlarning ajoyib kombinatsiyasini taklif qiladi'
    },
    {
        id: 2,
        icon: shield,
        title: '100% Himoyalangan',
        content: 'Malumotlaringiz va tranzaksiyalaringiz xavsiz ekanligiga ishonch hosil qilish uchun faol choralar:'
    },
    {
        id: 3,
        icon: send,
        title: "Balansni o'tgazish",
        content: 'Balansni o\'tgazish kridet kartasi sizga foizlarni to\'lashda ko\'p pul tejash imkonini beradi.'
    }
]

export const feedback = [
    {
        id: 1,
        name: "Herman Janes",
        title: 'Founder & Loader',
        content: 'Eng yaxshi kiridet kartalari aksiyalar va sovrunlarning ajoyib kombinatsiyasini taklif qiladi'
    },
    {
        id: 2,
        name: "Steve Mark",
        title: 'Founder & Loader',
        content: 'Malumotlaringiz va tranzaksiyalaringiz xavsiz ekanligiga ishonch hosil qilish uchun faol choralar:'
    },
    {
        id: 3,
        name: 'Kenns Gulleks',
        title: "Founder & Loader",
        content: 'Balansni o\'tgazish kridet kartasi sizga foizlarni to\'lashda ko\'p pul tejash imkonini beradi.'
    }
]

export const clients = [
    {
        id: 'client-1',
        logo: airbnb,
    },
    {
        id: 'client-2',
        logo: binance,
    },
    {
        id: 'client-3',
        logo: dropbox,
    },
    {
        id: 'client-4',
        logo: coinbase,
    }
]


export const footerLinks = [
    {
        title: "Jamiyat",
        links: [
            { name: "Yordam markazi", link: "https://www.hoobank.com/help-center/" },
            { name: "Hamkorlar", link: "https://www.hoobank.com/partners/" },
            { name: "Takliflar", link: "https://www.hoobank.com/suggestions/" },
            { name: "Blog", link: "https://www.hoobank.com/blog/" },
            { name: "Yangiliklar", link: "https://www.hoobank.com/newsletters/" },
        ],
    },

    {
        title: "Foydali Havolalar",
        links: [
            { name: "Content", link: "https://www.sammi.ac/content/" },
            { name: "Qanday ishlaydi", link: "https://www.sammi.ac/how-it-works/" },
            {
                name: "Shartlar & xizmatlar",
                link: "https://www.sammi.ac/terms-and-services/",
            },
        ],
    },

    {
        title: "Hamkor",
        links: [
            {
                name: "Bizning hamkorimiz",
                link: "https://www.sammi.ac/our-partner/",
            },
            {
                name: "Hamkor bo'ling",
                link: "https://www.sammi.ac/become-a-partner/",
            },
        ],
    },
];


export const socialMedia = [
    {
        id: "social-media-1",
        icon: (
            <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
        ),
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: (
            <FaFacebookF className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
        ),
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: (
            <FiTwitter className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
        ),
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: (
            <FiLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer icons hover:translate-y-[-3px] transition-all duration-300" />
        ),
        link: "https://www.linkedin.com/",
    },
];