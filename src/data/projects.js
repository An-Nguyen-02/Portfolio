const data = [
    {
        id: 1,
        name: "First landing page",
        type: ["Web development"],
        brief:"Simple website to subscribe to my email",
        date: "January, 02 2022",
        images: [
            "https://live.staticflickr.com/65535/52244989799_84d991e457_b.jpg",
            `https://live.staticflickr.com/65535/52244716238_8b135884ed_b.jpg`
        ],
        url: "https://an-nguyen-02.github.io/First-landing-page/",
        sourceCode: "https://github.com/An-Nguyen-02/First-landing-page",
        technologies: ["HTML", "CSS", "Mail Chimp"],
        detail:"My first website to practice using HTML, CSS, Mail Chimp, publish a website on GitHub."
    },
    {
        id: 2,
        name: "Machine Learning Python",
        type: ["Machine Learning"],
        brief: "Showcase some machine learning algorithms I learnt through Python",
        date: "May, 15 2022",
        images:[
            "https://zen-networks.io/wp-content/uploads/2021/08/ml-dl-phyton.jpg",
            "https://live.staticflickr.com/65535/52348366755_8d514637e9_b.jpg",
            "https://live.staticflickr.com/65535/52346984612_ebece7b80a_b.jpg",
            "https://live.staticflickr.com/65535/52347939791_84b244cf74_b.jpg",
            "https://live.staticflickr.com/65535/52346984557_50c0f49777_b.jpg"
        ],
        url: null,
        sourceCode: "https://github.com/An-Nguyen-02/Machine-Learning-python",
        technologies: ["Python"],
        detail: "I cover machine learning algorithms: Bayesian, Linear regression, Nearest Neighbor, Neural Network, and Reinforcement Learning using Python on CIFAR10 dataset."
    },
    {
        id: 3,
        name: "Native Meal",
        type: ["Mobile App development"],
        brief: "A mobile app to other food from nearby restaurant",
        date: "March, 6 2022",
        images:[
            "https://live.staticflickr.com/65535/52346984887_7b70e395b2_b.jpg",
            "https://live.staticflickr.com/65535/52348258469_897c7e41cc_b.jpg",
            "https://live.staticflickr.com/65535/52346984947_ef8c6634f2_b.jpg",
            "https://live.staticflickr.com/65535/52348367105_babf8f1682_b.jpg",
            "https://live.staticflickr.com/65535/52347940161_d9656df240_b.jpg",
            "https://live.staticflickr.com/65535/52346984987_3450b35c21_b.jpg"
        ],
        url: null,
        sourceCode: "https://github.com/An-Nguyen-02/Native-Meals",
        technologies: ["Google Map","Firebase","React Native","Stripe"],
        detail: "An mobile app using React Native that let user register, save data to Firebase. Let user order some basic food from Local restaurants using information from Google Map API. Checkout using Stripe and running functions on FireBase."
    },
    {
        id: 4,
        name: "Face Recognition website",
        type: ["Web development"],
        brief: "A website to put in a png image url and it will detect faces in the image",
        date: "January, 2 2022",
        images:[
            "https://live.staticflickr.com/65535/52348185143_ce2c4d7e46_b.jpg",
            "https://live.staticflickr.com/65535/52346981807_0a30f514fb_b.jpg",
            "https://live.staticflickr.com/65535/52348185073_661de0430e_b.jpg",
            "https://live.staticflickr.com/65535/52348185118_6c5b0a74cf_b.jpg"
        ],
        url: "https://img-rec-web.herokuapp.com/",
        sourceCode: "https://github.com/An-Nguyen-02/img-rec-web-frontend",
        technologies: ["React", "Clarifai","Heroku"],
        detail: "A React face recognition website (using Clarifai) having register feature (user information is stored on Heroku). It's for fun and learning purpose, pulling API and see how it works together."
    },
    {
        id: 5,
        name: "Shopping website",
        type: ["Web development"],
        brief: "A fully responsive shopping website where user can buy and pay for different kind of clothings",
        date: "",
        images:[
            "https://live.staticflickr.com/65535/52347940636_eab14af50c_b.jpg",
            "https://live.staticflickr.com/65535/52348367640_2a0825f516_b.jpg",
            "https://live.staticflickr.com/65535/52346985412_f4a1e827ac_b.jpg",
            "https://live.staticflickr.com/65535/52348258999_08b18bff26_b.jpg"
        ],
        url: "https://shopping-react-2.herokuapp.com/",
        sourceCode: "https://github.com/An-Nguyen-02/Shopping-web",
        technologies: ["React", "Firebase", "Stripe", "Heroku"],
        detail: "A full fletch React Shopping website using FireStore for shop items, Stripe for payments and Register/Login function (can register via Google account as well). The most proud project I have done so far."
    },
    {
        id: 6,
        name: "Music synchronization",
        type: ["Signal processing"],
        brief: "A project to synchronize different singing of a same song using Dynamic Time Warping algorithm",
        date: "January, 23 2022",
        images:[
            "https://live.staticflickr.com/65535/52346985242_2d1af65653_b.jpg",
            "https://live.staticflickr.com/65535/52347940456_b7e159526f_b.jpg",
            "https://live.staticflickr.com/65535/52348367455_a145205769_b.jpg"
        ],
        url: null,
        sourceCode: "https://github.com/An-Nguyen-02/Audio_project",
        technologies: ["Python"],
        detail: `The human auditory system is very effective in identifying a musical piece performed by different people (this could also be different instrumental renditions) at a different pace. The aim of this project – music synchronization- is to replicate this human ability using audio processing tools. Dynamic Time Warping is an algorithm used in measuring the similarities between two signals (which might be of different speeds).
        Beside graphs are in layout 2*2. In which top-left is (1,1). We have (1,1) and (2,1) are sound amplitude vs time graphs before and after time-strech. (2,2) and (1,2) are the delta of warping path in comparision, which mean the more linear the graph is the better. We can see clear improvemnets from (1,2) to (2,2)`
    },
    {
        id: 7,
        name: "Robo Search",
        type: ["Web development"],
        brief: "An interactive website that sort robots by name",
        date: "January, 2 2022",
        images:[
            "https://live.staticflickr.com/65535/52347940331_6f36bc90f5_b.jpg",
            "https://live.staticflickr.com/65535/52347940316_f60244480b_b.jpg"
        ],
        url: "https://an-nguyen-02.github.io/Robo-search-update/",
        sourceCode: "https://github.com/An-Nguyen-02/Robo-search-update",
        technologies: ["React"],
        detail: "A basic website for practice purpose of API calling and basic sort function using Javascript."
    },
    {
        id: 8,
        name: "Pairs Game",
        type: ["Game"],
        brief: "A pair game, user after finding all the pair win the game",
        date: "July, 2021",
        images:[

        ],
        url: null,
        sourceCode: "https://github.com/An-Nguyen-02/Pairs-game",
        technologies: ["C++", "QT creator"],
        detail: "A pair game with UI created with QT creator and functions wrote in C++. The number of pairs/players each play is up to the user as well."
    },   

]

export {data};