const ProjectInfo = [
  {
    id: "flickr",
    header: {
      desc: "A second of enlightenment each time a new tab is opened showing a Flickr photo.",
      client: 'Flickr Community',
      role: 'Research, Concept, Ideation, Visual, UX/UI',
      duration: 'Summer 2017',
      websiteURL: null,
      finalPDF: 'case-studies/flickr/yocum_intern.pdf',
      PDFtitle: 'Intern Deck'
    },
    desktopPrototype: {
      title: 'Flickr Chrometab - <span class="caption">Marvel Prototype</span>',
      url: 'https://marvelapp.com/34e5853?emb=1'
    },
      mobilePrototype: {
        title: '07 - iMessage Extension',
        text: 'I created an iMessage Extension for Flickr during the last sprint session of my internship, this product was never created for Flickr before so I had free concept and ideation. It was designed in collaboration with a development intern and user tested in the Research Labs at in Sunnyvale. Overall, it was great to flex my design skills for mobile design and work at a fast pace, it challenged me to make certain decisions faster and stick to my overall design and product goals, view the Invision Prototype ',
        url: '<iframe class="prototype" width="438" height="930" src="//invis.io/TQF4J625A" frameborder="0" allowfullscreen></iframe>',
        secondaryImage: 'flickr/mobile_images-min.png'
    },
    overview: {
      statement: "Over the summer of 2017 I was the <strong>Design Intern at Flickr / YAHOO</strong> in San Francisco, and worked in collaboration with the design and development teams on various Flickr products. During my internship, I responsible for the redesign of Flickr's Chrometab and iMessage Extensions by creating product concepts and research, user flows, wireframes, and visual designs for features of the experiences.",
      problem: "The old Flickr Chrometab was outdated, loaded slow and was not an innovative product and limited in functionality. My challenge was to redesign the Flickr Chrometab under measured KPIs in collaboration with a Development Intern and Product Manager, while being mentored by the Head of Design. Some current problems faced by users before the redesign:<span><br><br></span><span class='colored bold'>- Limited in functionality<span><br><br></span>- No customizability or preferences for a user<span><br><br></span>- Can't view past photos<span><br><br></span> - Randomly generated images based on no user preference</span>",
      teamImageURL: 'flickr/intro_image-new.png'
    },
    headingSlider: [
      {
        url: 'flickr/01_slider1/image1-min.png',
      },
       {
        url: 'flickr/01_slider1/image2-min.png',
      }
    ],
    sliderTwo: [
      {
        url: 'flickr/goal2/userflow_02_photo1-min.png'
      },
      {
        url: 'flickr/goal2/userflow_02_photo2-min.png'
      }
    ],
    sliderThree: [
      {
        url: 'flickr/goal3/userflow_03_photo1-min.png'
      },
      {
        url: 'flickr/goal3/userflow_03_photo2-min.png'
      },
      {
        url: 'flickr/goal3/userflow_03_photo3-min.png'
      }
    ],
    sectionThree: {
      title: '03 - MVP #1',
      text: '<span class="colored">The Flickr Chrometab was designed through two major MVPs, which lead it to the final product based on a user first and research approach. At first, I was given certain KPIs to work the redesign towards and a previous history of user research conducted by the Flickr Team to work from.</span>',
      imageURL: 'flickr/sketch_01-min.png'
    },
    sectionThreeGoals: [
      {
        title: 'Provide a photo interaction.',
        text: 'Allow users to see high quality and past photos that were displayed each time they open a new tab and a Flickr photo is shown, and favorite or share a photo.'
      },
      {
        title: 'Promote user preferences.',
        text: 'Once upon login through an connected Flickr or YAHOO account, users are able to change simple preferences such as color of the extension and the sources of their photos.'
      },{
        title: 'Personalize with a Flickr account.',
        text: 'A key point in the previous user research was a way to show a user’s Flickr photos, to start with MVP #1 and to test the functionality of Chrome Extensions, I decided to test photos pulled from Flickr Explore, Favorites, and Groups.'
      }
    ],
    sectionFour: {
      title: '04 - User Testing',
      text: '<span class="colored bold">I user tested for the first time ever!</span> It was a great and thrilling experience to see actual users interacting with my design in front of my own eyes, while I can’t show the lab or the overall videos or feedback from the sessions, I can elaborate on the KPIs and direction I took on MVP #2, or current Flickr Chrometab.',
      secondaryText: [
        {
          title: 'Positives',
          text: "- Usability passed within the design<br><br>- Users understood logging into Yahoo / Flickr account<br><br>- Like the idea of Preferences and Sources of photos<br><br>- And were able to 'Favorite' a photo"
        },
        {
          title: 'Negatives',
          text: "- Users didn't understand the concept of a photo History<br><br>- Wanted to show their own photos with the Chrome Extension"
        }
      ]
    },
    sectionFive: {
      title: '06 - Final Product',
      text: 'Back to the drawing board, considering the user testing results, suggestions from the user testing manager, and with the mentoring of the Head of Design. I worked on simplifying the interace into a singular panel and minimizing the concept of a photo history taking over a whole area of the design, <span class="colored"><a href="#" target="blank">view the Invision Prototype</a></span',
      imageURL: 'flickr/sketch_02-min.png'
    },
    approach: [
     {
        heading: 'Guide the user, on-boarding the Flickr extension.',
        text: 'When a user first downloads the extension they are greeted with simple user on-boarding tooltips, just enough to draw their attention but not take them outside the experience, one that shows the capabilities of Chromtab and to connect a Flickr account to the extension.',
        hasImg: true,
        imageURL: 'flickr/goal_01/userflow_01-min.png',
      },
      {
        heading: 'Interactivity with the photos, favoriting and sharing a photo.', 
        text: 'A high-quality Flickr photo is shown each time a tab is opened on chrome, allowing users to interact with it. It show’s the photographer and title of the image, linking to it on the Flickr website. Also, a user is able to Favorite and Share a photo on social outlets.',
        hasImg: true,
        imageURL: 'flickr/goal2/userflow_02-min.png',
      },
      {
        heading: 'Customizing and personalizing the Flickr photos shown.',
        text: 'Users are able to change their Preferences, Sources, and see a History of the Flickr photos shown on their extension. Also, a mosaic layout option is present along with a dark or light theme, and the sources of photos varies from a user’s Explore, Favorites, or Groups.',
        hasImg: true,
        imageURL: 'flickr/goal3/userflow_03-min.png'
      },
      {
        heading: 'A second of enlightenment each time a new tab is opened.',
        text: 'The final product of the Flickr Chrometab passed the user testing round with flying colors and is set to be shipped within the next year. This is the first corporate and industry product I helped create and will distributed to over +70,000 users.',
        hasImg: false
      }
    ],
    approachFullImages: [
      {
        imageURL: 'flickr/wireframe-min.jpg',
        caption: 'Final Wireframe to Visual Design / MVP #1'
      },
      {
        imageURL: 'flickr/mockup01-min.png'
      },
      {
        imageURL: 'flickr/goal_01/userflow_01_goal-min.png'
      },
      {
        imageURL: 'flickr/mockup02-min.png'
      },
      {
        imageURL: 'flickr/overall_userflow-min.png'
      }
    ],
    takeaway: {
      heading: '"Work hard and be nice to everyone."',
      text: 'An summer worth a lifetime of memories, I couldn’t thank you to the Flickr team enough for taking me under their wings and teaching me more about what I love to do everyday. If I were to add on onto the project, it would be allowing users to connect directly to their Flickr account photos and continue to simplify the interace.',
      websiteURL: null,
      caption: null,
      imageURL: 'flickr/takeaway-min.png',
      finalPDF: 'case-studies/flickr/yocum_intern.pdf',
      PDFtitle: 'Intern Deck'
    }
  },
  {
    id: "ripple",
    header: {
    	desc: "Find consistent, high quality work by collaborating with other freelancers and forming virtual agencies.",
    	client: 'Startup Team, Investors & Ripple Users',
    	role: 'Co-founder and Product Designer',
    	duration: 'Fall 2016 - Present',
    	websiteURL: 'http://www.rippleplatform.io',
      finalPDF: 'Ripple-Final.pdf',
      PDFtitle: 'Or view the investor pitch deck',
      websiteTitle: 'View Website'	
    },
    headingSlider: [
      {
        url: 'ripple/slider1/Optimized-mockup1.jpg',
      },
       {
        url: 'ripple/slider1/Optimized-mockup2.jpg',
      },
      {
        url: 'ripple/slider1/Optimized-mockup3.jpg',
      }
    ],
    overview: {
      statement: 'Ripple is a startup I co-founded along with my team in 2016, and is a company I am currently help leading and working on. At a glance, Ripple is an online community where freelancers can collaborate on projects to obtain a consistent income while keeping their flexible work schedule. Users can search for potential team members, create a virtual agency, and collaborate on their freelance projects. ',
      problem: 'The primary goal our team is trying to achieve is alleviating the stresses of freelancing and bringing it into a new era for users. The main problems with freelancing today are:<span><br><br></span>- Freelance work is being commoditized<span><br><br></span>- Agencies have an unfair advantage on larger projects<span><br><br></span>- No easy way to collaborate while keeping desired lifestyle',
      teamImageURL: 'ripple/team1.png'
    },
    videoSection: { 
      linkURL: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z4sHQDI_nkg?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    },
    researchSection: {
      summary: 'For customer discovery and research of our current target market we conducted <span class="blue">108+ interviews</span> with respondents ranging in freelance industries of design, development, and writing and working part time or fulltime. The interviews were conducted in-person, video, and over the phone.',
      findings: [
        {
          percent: '58%',
          desc: 'find freelancing difficult to collaborate online.'
        },
        {
          percent: '62%',
          desc: 'have experienced an inconsistent income.'
        }
      ],
      imageURL: 'ripple/quotes.png'
    },
    sketchesImg: 'ripple/Optimized-whiteboard.png',
    approach: [
      {
        heading: 'Define the product and user experience.',
        text: null,
        hasImg: false, 
        nonImg: {
          title: 'Value Proposition',
          text: 'For full-time freelancers in development, design and writing who want to compete with top agencies and keep their flexible work schedule, Ripple provides a selective community where accepted users can collaborate and work alongside other high quality freelancers at an average subscription fee of $20 per month.'
        }
      },
      {
        heading: 'Showcase and promote who the freelancer is.',
        text: 'Freelancer cards show who the freelancer is and how they work to fit their lifestyle. The user inputs their own title of choice, tags associated with their skillsets, and logistical information for other freelancers to contact them.',
        hasImg: true,
        imageURL: 'ripple/approach_02.png',
      },
      {
        heading: 'Connect freelancers with the right team members.',
        text: 'For freelancers to find their desired team members who can work with them, a search featured is implemented for the platform. After a search is conducted freelancer cards are shown and users have the opportunity to message another freelancer to join their team.',
        hasImg: true,
        imageURL: 'ripple/approach_03.png'
      },
      {
        heading: 'Form virtual teams and establish collaboration.',
        text: 'Once a virtual agency and team is established, it’s important to showcase who they are and promote their team for future work and prospects. The team page / portfolio page shows simple casestudies of the freelancing work they have done, and allows clients to message and learn more about the team.',
        hasImg: true,
        imageURL: 'ripple/approach_04.png'
      }
    ],
    approachFullImages: [
      {
        imageURL: 'ripple/approach_01.png'
      },
      {
        imageURL: 'ripple/approach_02_pic.png'
      },
      {
        imageURL: 'ripple/approach_03_pic.png'
      },
      {
        imageURL: 'ripple/approach_04_pic.png'
      }
    ],
    sliderTwo: [
      {
        url: 'ripple/slider2/01.jpg'
      },
      {
        url: 'ripple/slider2/02.jpg'
      },
      {
        url: 'ripple/slider2/03.jpg'
      }
    ],
    takeaway: {
      heading: '“Success is not what you have, but who you are.” <span class="quote">- Bo Bennet</span>',
      text: 'The story of Ripple is just starting, we were <span class="blue"><a href="https://cias.rit.edu/news/509" target="blank">recently featured at RIT</a></span> on our journey so far, and I can’t wait to learn more about product, design, and entrepreneurship as each of us and our company grows.',
      websiteURL: 'http://www.rippleplatform.io',
      caption: 'At Demo Day, the last day to pitch ideas to investors and VCs after the RIT - Simone Center Summer Start Incubator.',
      imageURL: 'ripple/team2-min.png',
      finalPDF: 'Ripple-Final.pdf',
      PDFtitle: 'Or view the investor pitch deck',
      websiteTitle: 'View Website'
    }
  },
  {
    id: "mycourses",
    header: {
      desc: "Creating a simple, collaborative and task oriented platform to enhance the user academic life.",
      client: 'Class Project',
      role: 'Research, Concept, Visual, UX/UI',
      duration: 'Fall 2017',
      websiteURL: null,
      finalPDF: 'case-studies/mycourses/mycourses_deck.pdf',
      PDFtitle: 'Process Deck'
    },
    desktopPrototype: {
      title: 'Mycourses - <span class="caption">Marvel Prototype</span>',
      url: 'https://marvelapp.com/1119g286?emb=1'
    },
      mobilePrototype: {
        title: '06 - Mobile Interaction',
        text: 'MyCourses is currently not made for a mobile device, and I wanted to expand on what it was as a product and service. I decided to create an app for MyCourses on the Iphone X and IOS, following the design grid present and common user patterns. I chose to focus on a flow where a user receives a notification for a comment on a Submission page and replies back, view Marvel Prototype',
        url: '<iframe class="prototype" src="https://marvelapp.com/b2bjj54?emb=1" width="453" height="884" allowTransparency="true" frameborder="0"></iframe>',
        secondaryImage: 'mycourses/mobile_userflow-min.png'
    },
    overview: {
      statement: "MyCourses is the current web based platform and course management system at the Rochester Institute of Technology, which It is used to organize course content, facilitate faculty and student interaction, and be a guide for a student during their academic years. Several features are available within MyCourses to promote these key features, but are lacking in an innovative and streamlined user experience.",
      problem: "The main purpose of the MyCourses redesign is to design an effective and modern solution that gets students excited to use the platform, effectively and collaboratively. I chose to focus on creating a simple, collaborative and task-oriented platform to enhance the user academic life. Several of the current problems students face while using the platform are:<span><br><br></span>- Lacking a collaborative and simplified environment<span><br><br></span>- Faculty engagement is low, and professors use outside software<span><br><br></span>- No way to check what is weekly assigned by professors<span><br><br></span>",
      teamImageURL: null
    },
    headingSlider: [
      {
        url: 'mycourses/01_header_slider/header_01-min.png',
      },
      {
        url: 'mycourses/01_header_slider/header_02-min.png',
      },
      {
        url: 'mycourses/01_header_slider/header_03-min.png',
      }
    ],
    sliderTwo: [
      {
        url: 'mycourses/02_approach_slider/03_01-min.png'
      },
      {
        url: 'mycourses/02_approach_slider/03_02-min.png'
      },
      {
        url: 'mycourses/02_approach_slider/03_03-min.png'
      },
      {
        url: 'mycourses/02_approach_slider/03_04-min.png'
      },
      {
        url: 'mycourses/02_approach_slider/03_05-min.png'
      }
    ],
    sliderThree: [
      {
        url: 'mycourses/02_approach_slider/04_01-min.png'
      },
      {
        url: 'mycourses/02_approach_slider/04_02-min.png'
      }
    ],
    sliderFour: [
      {
        url: 'mycourses/02_approach_slider/05_01-min.png'
      },
      {
        url: 'mycourses/02_approach_slider/05_02-min.png'
      }
    ],
    researchSection: {
      summary: 'I conducted primary research from early September in the form of a Google Forms survey. Collecting <span class="colored bold">16 responses from varying students and professors in different majors</span> and year levels, each gave a unique perspective to their experience using the platform in their academic lives. Overall, it is concluded that users complained of the new redesign and it still did not solve their existing problems. Over 80% of students and faculty access the platform over 10x per week, relying on the software to view information from their classes.',
      findings: [
        {
          percent: '61%',
          desc: 'use MyCourses for up to 30mins a day.'
        },
        {
          percent: '62%',
          desc: 'primary features are used during a session.'
        },
        {
          percent: 'Key Features',
          desc: 'used were the Course Content, Dropboxes, and Grades.'
        },
        {
          percent: 'User expressed',
          desc: 'assignments and course material wasn’t streamlined.'
        }
      ],
      imageURL: null,
      finalPDF: 'case-studies/mycourses/mycourses_research.pdf',
      PDFtitle: 'Research Document'
    },
    sketchesImg: 'mycourses/whiteboard2-min.png',
    sectionFive: {
      title: '06 - Final Product',
      text: 'Back to the drawing board, considering the user testing results, suggestions from the user testing manager, and with the mentoring of the Head of Design. I worked on simplifying the interace into a singular panel and minimizing the concept of a photo history taking over a whole area of the design, <span class="colored"><a href="#" target="blank">view the Invision Prototype</a></span',
      imageURL: 'flickr/sketch_02-min.png'
    },
    approach: [
     {
        heading: 'Define the experience and redesign direction',
        text: null,
        hasImg: false, 
        nonImg: {
          title: 'Goals',
          text: 'Focusing on the main goals I set for the platform I created a user experience based on a collaborative platform, simplified experience, increasing faculty engagement KPIs, and adding a task management system. Overall, this created a structured and streamlined platform students and professors would use as a companion to their academic lifestyles. Below is the sitemap for the current MyCourses before the redesign.'
        }
      },
      {
        heading: 'Creating a task management system.',
        text: 'Improve the current information hierarchy, navigational experience, and homepage to promote task management of course content. Each weeks students ask what is due or already keep their own task-lists through another source, if it was a key component of MyCourses students would not only use it more but also rely on the system promoting engagement.',
        hasImg: true,
        imageURL: 'mycourses/userflow_02-min.png',
      },
      {
        heading: 'Streamlining a user experience.',
        text: 'Cut down on the steps needed for a user to accomplish a certain goal, therefore establishing an efficient interface. I chose to focus on the Dropbox feature, <span class="colored bold">which I called Submissions a living document that closes once a deadline is passed</span> and the content within a course.',
        hasImg: true,
        imageURL: 'mycourses/userflow_03-min.png'
      },
      {
        heading: 'Collaboration and communication is key.',
        text: 'Create a collaborative platform based on communication between the professor and student, and also between students by using MyCourses. This is achieved through a highlighted commenting system and responses.',
        hasImg: true,
        imageURL: 'mycourses/userflow_04-min.png'
      },
      {
        heading: 'Increasing professor content and engagement.',
        text: 'Encourage faculty to use MyCourses as their only platform and keep their classes consistent through intuitive and customizable features, by doing this it allows MyCourses to be the only platform used by professors in most use cases. Each course is given the same navigational treatment and distribution of course content.',
        hasImg: true,
        imageURL: 'mycourses/userflow_05-min.png'
      },
      {
        heading: 'Receiving a notification and viewing the conversation.',
        text: 'A push notification is sent to a user showing that a comment was received on their latest Submission they created and are able to view this within Notifications and respond to the comment.',
        hasImg: false
      },
      {
        heading: 'Replying to a comment within a Submission.',
        text: 'A highlighted area indicates a comment is said about certain content within the Submission, a user taps the highlighted area and sees the conversation. Upon viewing the comment, they are able to reply or resolve the comment from their mobile device.',
        hasImg: false
      }
    ],
    approachFullImages: [
      {
        imageURL: 'mycourses/userflow_01-min.png'
      },
      {
        imageURL: 'mycourses/02_approach_slider/02_01-min.png'
      },
      {
        imageURL: 'mycourses/mobile_01-min.png'
      },
      {
        imageURL: 'mycourses/mobile_02-min.png'
      },
      {
        imageURL: 'mycourses/mobile_03-min.png'
      },
      {
        imageURL: 'mycourses/mobile_04-min.png'
      },
      {
        imageURL: 'mycourses/mobile_05-min.png'
      }
    ],
    takeaway: {
      heading: '"The fundamental role of design is problem solving for a user."',
      text: 'MyCourses was a project I wanted to push to the best of my abilities and grow as a interaction and experience designer. I plan to iterate on the concepts and focus on other user problems to solve within the redesign, and grow the project to a full product and business related casestudy focusing on the mobile possibilites.',
      websiteURL: null,
      caption: null,
      imageURL: 'mycourses/07-takeaway-min.png',
      finalPDF: 'case-studies/flickr/yocum_intern.pdf',
      PDFtitle: 'Process Deck'
    }
  }
];

export default ProjectInfo;