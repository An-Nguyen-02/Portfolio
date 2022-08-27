const data = [
    {
        id: 1,
        name: "First landing page",
        type: ["Web development"],
        brief:"Simple website to subscribe to my email",
        date: "January, 02 2022",
        images: [
            "https://flic.kr/p/2nAHehc",
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

        ],
        url: null,
        sourceCode: "https://github.com/An-Nguyen-02/Audio_project",
        technologies: ["Python"],
        detail: "The human auditory system is very effective in identifying a musical piece performed by different people (this could also be different instrumental renditions) at a different pace. The aim of this project – music synchronization- is to replicate this human ability using audio processing tools. Dynamic Time Warping is an algorithm used in measuring the similarities between two signals (which might be of different speeds). DTW is employed in this project to find the warping path between the extracted features of the given audios of different lengths (ie different speeds). The Librosa library has a function that can carry out DTW efficiently. The aim of this project is to find the similarities between the reference audio and the comparing audios then set the pace of the other audio to that of the reference audio."
    },
    {
        id: 7,
        name: "Robo Search",
        type: ["Web development"],
        brief: "An interactive website that sort robots by name",
        date: "January, 2 2022",
        images:[

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