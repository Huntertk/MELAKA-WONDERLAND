import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1707216096/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/melaka-wonderland_swk8ln.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MelakaWonderlandWaterThemeParkTicket-KlookMalaysia_eevdtb.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1707216099/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/Slide-2_m9lmz9.jpg",
        ],
        title:"MELAKA WONDERLAND WATERPARK",
        desc:": Water theme park in Ayer Keroh, Melaka, Malaysia, with exciting slides, a wave pool, and family-friendly attractions, offering a refreshing escape and enjoyable water activities.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:42,
                    child:36,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:42,
                    child:36,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW1_brg2hr.webp",
        title:"Water Slides",
        desc:"Take advantage of a variety of water slides that offer varying degrees of excitement and terror"
    },
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW3_vgttik.jpg",
        title:"Enjoy the excitement of a wave pool",
        desc:"where man-made waves resemble surfers on the beach."
    },   
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW5_nyrjof.jpg",
        title:"Lazy River",
        desc:"Take a leisurely trip down a lazy river, floating gently in the gentle current."
    },  
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216100/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW7_k7zpli.jpg",
        title:"Children's Play Section",
        desc:"To ensure that young guests have a fun and safe experience, Melaka Wonderland frequently has a separate section with smaller slides, water sprays, and shallow pools."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Melaka Wonderland offers exclusive attractions that guarantee boundless enjoyment, providing each visitor with an exhilarating experience and captivating views of apristine natural forest.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216102/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW8_ncu3zx.webp"
    },
    {
        id: uuidv4(),
        desc:"This distinctive water-themed park boasts 11 attractions.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216097/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/fit_xtwhui.jpg"
    },
    {
        id: uuidv4(),
        desc:"The recently introduced tourist spot captures the interest of both local residents and international visitors, generating enthusiasm among families, children, teenagers, and adventure enthusiasts alike.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1707216098/Malaysia%20Experience/Melaka%20Wonderland%20Waterpark/MW6_pocsib.webp"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Open Tues - Sun ( 10am - 6pm )",
            "Closed every Monday",
            "Except School and Public Holidays"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age 13 - 59 years old",
            "Child below 3 years old enter for Free",
            "Senior Citizen 60 years old and above",
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Information",
        ans:[
            "Senior citizen and OKU may purchase the ticket at the counter directly.",
            "Ticket is applicable for Weekend and Weekday.",
            "Ticket is applicable for Malaysian and Non-Malaysian.",
            "Ticket does not include meals, cabana, tube and Locker.",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Is there any discount for OKU or disabled person ?",
        ans:"Yes, you may purchase your tickets at the counter for special price."
    },
    {
        id: uuidv4(),
        ques:"Can I re-enter the Themepark once entered ?",
        ans:"No. The ticket is only for ONE time entry."
    },
    {
        id: uuidv4(),
        ques:"Can I bring my own food inside the park ?",
        ans:"No, outside food and drinks are not allowed inside the park."
    },
    {
        id: uuidv4(),
        ques:"If I don't play, can I just enter with my kids without ticket?",
        ans:"No. You need to have an entrance ticket in order to enter the park."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = []