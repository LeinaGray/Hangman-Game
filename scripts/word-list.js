// TOPIC 10: SOFTWARE LICENSE
const wordList = [
  {
    word: "software license",
    hints: [
      "Legal document for using software.",
      "Defines user permissions.",
      "Governs the use of programs.",
      "Relates to intellectual property.",
      "Agreement for software utilization."
    ]
  },
  {
    word: "end user license agreement",
    hints: [
      "Contract between user and provider.",
      "Often abbreviated as EULA.",
      "Details acceptable software use.",
      "Must be agreed to for installation.",
      "Governs the \"end\" user."
    ]
  },
  {
    word: "grant of rights",
    hints: [
      "Specifies what users are allowed to do.",
      "Permission to use the software.",
      "Can include copying or modifying.",
      "A key part of the license.",
      "What the license provides to the user."
    ]
  },
  {
    word: "restrictions",
    hints: [
      "Limitations on software usage.",
      "Actions the user is NOT allowed to do.",
      "Can involve reverse engineering.",
      "Protects the software owner.",
      "Boundaries defined in the license."
    ]
  },
  {
    word: "terms and conditions",
    hints: [
      "Overall rules of the software agreement.",
      "Covers various aspects of usage.",
      "Can include warranty disclaimers.",
      "Essential part of any legal contract.",
      "The fine print of the license."
    ]
  },
  {
    word: "intellectual property",
    hints: [
      "Creations of the mind, legally protected.",
      "Software code falls under this.",
      "Includes copyrights and patents.",
      "What software licenses protect.",
      "Ownership of creative work."
    ]
  },
  {
    word: "copyright",
    hints: [
      "Legal right protecting original works.",
      "Covers the expression of an idea.",
      "Automatic upon creation.",
      "Protects the software's code and design.",
      "Prevents unauthorized copying."
    ]
  },
  {
    word: "trademark",
    hints: [
      "Symbol or name identifying a brand.",
      "Protects brand identity.",
      "Can be a logo or slogan.",
      "Distinguishes software products.",
      "Associated with brand recognition."
    ]
  },
  {
    word: "patent",
    hints: [
      "Exclusive rights for an invention.",
      "Protects how software works.",
      "Granted by a government authority.",
      "Can cover algorithms or processes.",
      "Protects the functional aspects."
    ]
  },
  {
    word: "trade secret",
    hints: [
      "Confidential business information.",
      "Provides a competitive edge.",
      "Not publicly disclosed.",
      "Can include software algorithms.",
      "Protected by secrecy."
    ]
  },
  {
    word: "proprietary",
    hints: [
      "Software with restricted usage rights.",
      "Source code usually not available.",
      "Often requires purchasing a license.",
      "Developer retains control.",
      "\"Closed source\" is a common term."
    ]
  },
  {
    word: "usage metered license",
    hints: [
      "Payment based on how much it's used.",
      "Can track features accessed.",
      "Cost varies with consumption.",
      "Like paying for utilities.",
      "Measured software utilization."
    ]
  },
  {
    word: "concurrent user license",
    hints: [
      "Limits the number of simultaneous users.",
      "Allows a set number to use it at once.",
      "Often used in organizations.",
      "Tracks active sessions.",
      "Simultaneous access is controlled."
    ]
  },
  {
    word: "floating license",
    hints: [
      "License shared across a network.",
      "Users can access when available.",
      "Number of users is limited at any time.",
      "License moves between users.",
      "Dynamic access for network users."
    ]
  },
  {
    word: "site license",
    hints: [
      "Allows use within a specific location.",
      "Covers all users at one \"site.\"",
      "Often cost-effective for organizations.",
      "Geographic limitation on usage.",
      "Covers an entire premises."
    ]
  },
  {
    word: "shareware",
    hints: [
      "Offered for trial before purchase.",
      "\"Try before you buy\" model.",
      "May have limited functionality.",
      "Encourages later registration.",
      "Free for a limited time."
    ]
  },
  {
    word: "freeware",
    hints: [
      "Software available at no cost.",
      "Can have restrictions on modification.",
      "\"Gratis\" software.",
      "Developer retains copyright.",
      "No payment required for use."
    ]
  },
  {
    word: "open source",
    hints: [
      "Source code is publicly accessible.",
      "Allows modification and distribution.",
      "Often collaborative development.",
      "Grants significant user freedoms.",
      "Transparency of the code."
    ]
  },
  {
    word: "strong copyleft",
    hints: [
      "Requires derivative works to also be open source.",
      "A \"viral\" open source license.",
      "Aims to keep software free.",
      "Example is the GPL.",
      "Enforces open source inheritance."
    ]
  },
  {
    word: "gnu license",
    hints: [
      "Project promoting free software.",
      "Stands for \"GNU's Not Unix!\".",
      "Associated with strong copyleft licenses.",
      "Developed the GPL.",
      "A key player in free software movement."
    ]
  },
  {
    word: "weak copyleft",
    hints: [
      "Allows combining with proprietary code.",
      "Modifications to open source part must be open.",
      "More permissive than strong copyleft.",
      "Example is the Mozilla Public License.",
      "Flexibility in combining code."
    ]
  },
  {
    word: "mozilla public license",
    hints: [
      "A type of weak copyleft license.",
      "Allows linking with proprietary code.",
      "Requires changes to MPL code to be open.",
      "Used by Firefox.",
      "Balances openness and proprietary use."
    ]
  },
  {
    word: "permissive",
    hints: [
      "Very flexible open source license.",
      "Minimal restrictions on use.",
      "Allows proprietary derivatives.",
      "Examples include MIT and BSD.",
      "Grants broad freedoms to users."
    ]
  },
  {
    word: "mit license",
    hints: [
      "A short and simple permissive license.",
      "Allows almost any use with attribution.",
      "Widely used open source license.",
      "Very few conditions.",
      "Known for its brevity."
    ]
  },
  {
    word: "bsd license",
    hints: [
      "Family of permissive open source licenses.",
      "Allows redistribution with minimal restrictions.",
      "Various versions exist.",
      "Originated at the University of California.",
      "Another popular permissive option."
    ]
  },
  {
    word: "apache license",
    hints: [
      "Permissive license with patent grant.",
      "Explicitly addresses patent rights.",
      "Used by many large projects.",
      "Encourages open collaboration.",
      "Focuses on community and stability."
    ]
  },
  {
    word: "unlicensed",
    hints: [
      "Software with no explicit license.",
      "Usage rights are unclear.",
      "Treat with caution.",
      "Default copyright applies.",
      "Lack of defined permissions."
    ]
  },
  {
    word: "creative commons zero",
    hints: [
      "Dedicated to the public domain.",
      "Waives all copyright rights.",
      "Allows maximum freedom of use.",
      "Treated as if no copyright existed.",
      "Aims for complete openness."
    ]
  },
  {
    word: "public domain",
    hints: [
      "Not protected by copyright.",
      "Free for anyone to use.",
      "Can occur after copyright expires.",
      "No restrictions on usage.",
      "Belongs to everyone."
    ]
  },
  //TOPIC 11
  {
    word: "viral marketing",
    hints: [
      "It's a strategy that spreads a message like a contagious trend",
      "One person shares it, then many more follow—just like a chain reaction",
      "This type of promotion relies on people passing it along",
      "Think of it as word-of-mouth advertising powered by social media",
      "It grows fast, like a meme or video everyone suddenly talks about"
     ]
  },
  {
    word: "company owned networking website",
    hints: [
      "It’s a social site built and run by a business for its own community",
      "The company has full control over the site's design and content",
      "This platform helps connect customers or employees in a brand-centered space",
      "Think of it as Facebook, but made just for one company’s needs",
      "It’s a private online space where the company manages all interactions",
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
     ]
  },
  {
    word: "direct advertising",
    hints: [
      "It’s when businesses pay to show ads straight to users online",
      "Think of banner ads popping up while you scroll through social media",
      "This method uses paid placements to promote products or services",
      "It targets users directly with promotional messages on digital platforms",
      "You’ve likely seen it as sponsored posts or sidebar ads on websites",
     ]
  }
];





























  
