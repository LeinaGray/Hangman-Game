// TOPIC 10: SOFTWARE LICENSING

const wordList = [
  {
    word: "software license",
    hints: [
      "Legal document for using software.",
      "Defines user permissions.",
      "Governs the use of programs.",
      "Relates to intellectual property.",
      "Agreement for software utilization.",
      "A contract outlining software usage."
    ]
  },
  {
    word: "end user license agreement",
    hints: [
      "Contract between user and provider.",
      "Often abbreviated as EULA.",
      "Details acceptable software use.",
      "Must be agreed to for installation.",
      "Governs the \"end\" user.",
      "Specifies terms for the final consumer."
    ]
  },
  {
    word: "grant of rights",
    hints: [
      "Specifies what users are allowed to do.",
      "Permission to use the software.",
      "Can include copying or modifying.",
      "A key part of the license.",
      "What the license provides to the user.",
      "Outlines the user's authorized actions."
    ]
  },
  {
    word: "restrictions",
    hints: [
      "Limitations on software usage.",
      "Actions the user is NOT allowed to do.",
      "Can involve reverse engineering.",
      "Protects the software owner.",
      "Boundaries defined in the license.",
      "Specifies prohibited user activities."
    ]
  },
  {
    word: "terms and conditions",
    hints: [
      "Overall rules of the software agreement.",
      "Covers various aspects of usage.",
      "Can include warranty disclaimers.",
      "Essential part of any legal contract.",
      "The fine print of the license.",
      "Comprehensive stipulations of the agreement."
    ]
  },
  {
    word: "intellectual property",
    hints: [
      "Creations of the mind, legally protected.",
      "Software code falls under this.",
      "Includes copyrights and patents.",
      "What software licenses protect.",
      "Ownership of creative work.",
      "Intangible assets with legal rights."
    ]
  },
  {
    word: "copyright",
    hints: [
      "Legal right protecting original works.",
      "Covers the expression of an idea.",
      "Automatic upon creation.",
      "Protects the software's code and design.",
      "Prevents unauthorized copying.",
      "Exclusive rights to reproduce and distribute."
    ]
  },
  {
    word: "trademark",
    hints: [
      "Symbol or name identifying a brand.",
      "Protects brand identity.",
      "Can be a logo or slogan.",
      "Distinguishes software products.",
      "Associated with brand recognition.",
      "A mark legally registered to represent a company."
    ]
  },
  {
    word: "patent",
    hints: [
      "Exclusive rights for an invention.",
      "Protects how software works.",
      "Granted by a government authority.",
      "Can cover algorithms or processes.",
      "Protects the functional aspects.",
      "Legal monopoly over an invention for a set period."
    ]
  },
  {
    word: "trade secret",
    hints: [
      "Confidential business information.",
      "Provides a competitive edge.",
      "Not publicly disclosed.",
      "Can include software algorithms.",
      "Protected by secrecy.",
      "Proprietary information kept confidential."
    ]
  },
  {
    word: "proprietary",
    hints: [
      "Software with restricted usage rights.",
      "Source code usually not available.",
      "Often requires purchasing a license.",
      "Developer retains control.",
      "\"Closed source\" is a common term.",
      "Exclusive ownership and control by the vendor."
    ]
  },
  {
    word: "usage metered license",
    hints: [
      "Payment based on how much it's used.",
      "Can track features accessed.",
      "Cost varies with consumption.",
      "Like paying for utilities.",
      "Measured software utilization.",
      "Billing determined by the extent of use."
    ]
  },
  {
    word: "concurrent user license",
    hints: [
      "Limits the number of simultaneous users.",
      "Allows a set number to use it at once.",
      "Often used in organizations.",
      "Tracks active sessions.",
      "Simultaneous access is controlled.",
      "Restricts the number of users accessing at the same time."
    ]
  },
  {
    word: "floating license",
    hints: [
      "License shared across a network.",
      "Users can access when available.",
      "Number of users is limited at any time.",
      "License moves between users.",
      "Dynamic access for network users.",
      "A limited number of licenses shared among many users."
    ]
  },
  {
    word: "site license",
    hints: [
      "Allows use within a specific location.",
      "Covers all users at one \"site.\"",
      "Often cost-effective for organizations.",
      "Geographic limitation on usage.",
      "Covers an entire premises.",
      "Permits usage by all users within a defined area."
    ]
  },
  {
    word: "shareware",
    hints: [
      "Offered for trial before purchase.",
      "\"Try before you buy\" model.",
      "May have limited functionality.",
      "Encourages later registration.",
      "Free for a limited time.",
      "Software provided for evaluation before buying."
    ]
  },
  {
    word: "freeware",
    hints: [
      "Software available at no cost.",
      "Can have restrictions on modification.",
      "\"Gratis\" software.",
      "Developer retains copyright.",
      "No payment required for use.",
      "Software distributed without charge."
    ]
  },
  {
    word: "open source",
    hints: [
      "Source code is publicly accessible.",
      "Allows modification and distribution.",
      "Often collaborative development.",
      "Grants significant user freedoms.",
      "Transparency of the code.",
      "Software with publicly available and modifiable source."
    ]
  },
  {
    word: "strong copyleft",
    hints: [
      "Requires derivative works to also be open source.",
      "A \"viral\" open source license.",
      "Aims to keep software free.",
      "Example is the GPL.",
      "Enforces open source inheritance.",
      "Any modifications must also be released under the same license."
    ]
  },
  {
    word: "gnu",
    hints: [
      "Project promoting free software.",
      "Stands for \"GNU's Not Unix!\".",
      "Associated with strong copyleft licenses.",
      "Developed the GPL.",
      "A key player in free software movement.",
      "An operating system and extensive collection of free software."
    ]
  },
  {
    word: "weak copyleft",
    hints: [
      "Allows combining with proprietary code.",
      "Modifications to open source part must be open.",
      "More permissive than strong copyleft.",
      "Example is the Mozilla Public License.",
      "Flexibility in combining code.",
      "Only modifications to the licensed code need to be open source."
    ]
  },
  {
    word: "mozilla public license",
    hints: [
      "A type of weak copyleft license.",
      "Allows linking with proprietary code.",
      "Requires changes to MPL code to be open.",
      "Used by Firefox.",
      "Balances openness and proprietary use.",
      "A free and open-source software license by Mozilla."
    ]
  },
  {
    word: "permissive",
    hints: [
      "Very flexible open source license.",
      "Minimal restrictions on use.",
      "Allows proprietary derivatives.",
      "Examples include MIT and BSD.",
      "Grants broad freedoms to users.",
      "Open source licenses with few requirements on redistribution."
    ]
  },
  {
    word: "mit",
    hints: [
      "A short and simple permissive license.",
      "Allows almost any use with attribution.",
      "Widely used open source license.",
      "Very few conditions.",
      "Known for its brevity.",
      "A highly permissive open-source license."
    ]
  },
  {
    word: "bsd",
    hints: [
      "Family of permissive open source licenses.",
      "Allows redistribution with minimal restrictions.",
      "Various versions exist.",
      "Originated at the University of California.",
      "Another popular permissive option.",
      "A family of permissive free software licenses."
    ]
  },
  {
    word: "apache",
    hints: [
      "Permissive license with patent grant.",
      "Explicitly addresses patent rights.",
      "Used by many large projects.",
      "Encourages open collaboration.",
      "Focuses on community and stability.",
      "A permissive free software license by the Apache Foundation."
    ]
  },
  {
    word: "unlicensed",
    hints: [
      "Software with no explicit license.",
      "Usage rights are unclear.",
      "Treat with caution.",
      "Default copyright applies.",
      "Lack of defined permissions.",
      "Software whose use, modification, and distribution are undefined."
    ]
  },
  {
    word: "creative commons zero",
    hints: [
      "Dedicated to the public domain.",
      "Waives all copyright rights.",
      "Allows maximum freedom of use.",
      "Treated as if no copyright existed.",
      "Aims for complete openness.",
      "A public dedication tool which allows creators to waive all copyright."
    ]
  },
  {
    word: "public domain",
    hints: [
      "Not protected by copyright.",
      "Free for anyone to use.",
      "Can occur after copyright expires.",
      "No restrictions on usage.",
      "Belongs to everyone.",
      "Works where intellectual property rights have expired, have been forfeited, or are inapplicable."
    ]
  }
];

// TOPIC 11: SOCIAL NETWORKING
const wordList2 = [ //change to wordList and uncomment above to start hangman game here
  {
    word: "viral marketing",
    hints: [
      "It's a strategy that spreads a message like a contagious trend",
      "One person shares it, then many more follow—just like a chain reaction",
      "This type of promotion relies on people passing it along",
      "Think of it as word-of-mouth advertising powered by social media",
      "It grows fast, like a meme or video everyone suddenly talks about",
      "The goal is organic sharing that reaches a large audience quickly."
    ]
  },
  {
    word: "company owned networking website",
    hints: [
      "It’s a social site built and run by a business for its own community",
      "This platform helps connect customers or employees in a brand-centered space",
      "The company has full control over the site's design and content",
      "Think of it as Facebook, but made just for one company’s needs",
      "It’s a private online space where the company manages all interactions",
      "Facilitates communication and engagement within a specific organization."
    ]
  },
  {
    word: "data misuse",
    hints: [
      "It involves using personal information for purposes not originally intended.",
      "Companies collecting your online activity need to handle it responsibly.",
      "This can lead to privacy violations and security risks.",
      "Regulations like GDPR aim to prevent this unethical practice.",
      "Understanding privacy policies is important to protect yourself.",
      "The unauthorized or inappropriate use of collected information."
    ]
  },
  {
    word: "social networking",
    hints: [
      "It's all about building relationships and communities over the internet",
      "It’s where people connect online regardless of where they are in the world",
      "This platform lets users share their thoughts, photos, and life updates",
      "It breaks down distance and time by keeping everyone socially connected online",
      "You can meet friends, join groups, and stay updated—all in one place",
      "The use of dedicated websites and applications to interact with others."
    ]
  },
  {
    word: "cyberstalking",
    hints: [
      "It's a pattern of online behavior that makes someone feel afraid.",
      "This can include monitoring someone's online activities without consent.",
      "Perpetrators may use social media to track their victims.",
      "It's a serious offense with legal consequences.",
      "Feeling constantly watched or followed online is a sign.",
      "Repeated online harassment that includes threats or monitoring."
    ]
  },
  {
    word: "social network in hiring",
    hints: [
      "Employers now check Facebook or LinkedIn when scouting talent",
      "It’s how recruiters use social platforms to find future employees",
      "Social media has become a tool in the recruitment process",
      "It’s the modern way of hiring through online connections",
      "A tweet or post might just land you a job—or cost you one",
      "Utilizing online platforms to identify and recruit potential candidates."
    ]
  },
  {
    word: "deepfake",
    hints: [
      "It's a manipulated video or audio that looks and sounds real.",
      "Artificial intelligence is often used to create these.",
      "They can spread misinformation or damage someone's reputation.",
      "Spotting them can be difficult, but there are clues to look for.",
      "The technology behind them is rapidly advancing.",
      "Synthetically altered media that convincingly portrays someone doing or saying something they didn't."
    ]
  },
  {
    word: "direct advertising",
    hints: [
      "Think of banner ads popping up while you scroll through social media",
      "You’ve likely seen it as sponsored posts or sidebar ads on websites",
      "It’s when businesses pay to show ads straight to users online",
      "This method uses paid placements to promote products or services",
      "It targets users directly with promotional messages on digital platforms",
      "A form of paid online promotion delivered straight to the audience."
    ]
  },
  {
    word: "cyberbullying",
    hints: [
      "It involves using digital devices to harm or harass someone.",
      "Online platforms can be a space for this negative behavior.",
      "It can take many forms, like spreading rumors or threats online.",
      "The victim often feels trapped and isolated by these actions.",
      "Social media moderation tries to combat this harmful content.",
      "Repeated and hostile behavior using electronic communication."
    ]
  },
  {
    word: "digital addiction",
    hints: [
      "It's an excessive reliance on electronic devices and online platforms.",
      "Spending too much time on social media can be a sign.",
      "It can negatively impact mental and physical well-being.",
      "Setting time limits and taking breaks can help manage it.",
      "Feeling anxious when unable to access devices is a symptom.",
      "Compulsive and harmful overuse of digital technologies."
    ]
  }
];





























  
