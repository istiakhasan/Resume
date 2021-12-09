import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import YouTube from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Language from '@mui/icons-material/Language';
let resumeData={
    Name:'Istiak Hasan',
    Title:'Front end developer',

    Birthday:'7th September 1996',
    Email:'istiak@gmail.com',
    address:'Jamalpur-2000',
    phone:'01306910346',
    socials:{
        Facebook:{
            link:'https://www.facebook.com/istieak',
            text:'IstiakCoding',
            icon: <FacebookIcon />,
        },
        
            Twiter:{
                link:'https://twiter/istiak',
                text:'My twiter',
                icon: <TwitterIcon />,
            },
            
                GitHub:{
                    link:'https://www.github.istiakhasan',
                    text:'my github',
                    icon: <LinkedInIcon />,
                }
          },
          AboutMe: 'Hi, I’m Istiak, and this is my site. I live in Uttara. I was born in Jamalpur. I love online gaming and creating web site. I’m happiest when I’m playing games, designing, or building something that didn’t exist before. \n\n I am a Web Designer based in Dhaka, specializing in User Interface Design and Development. I build clean, appealing, and functional interfaces which comply with the latest web standards. But that’s just a part of it. Design is my life. It’s my five-star spa. It’s my roller-coaster. It’s something I do before going to bed, and something I can’t wait to do in the mornings. Without it, my world would be black and white.',
         experiences:[
             {
                 title:"Freelancher ",
                 date:'2020-2021',
                 description:'SEO in Fiver.com'
             },
             {
                title:"Elance IT",
                date:'2018-2019',
                description:'Junior web Designer '
            },
            {
                title:"Russell IT Soft",
                date:'2021-present',
                description:'Graphics Designer'
            }
         ],

          education:[
             {
                 title:"BSC",
                 date:'2016-2021',
                 description:'Computer Science and Engineering At Uttara University'
             },
             {
                title:"HSC",
                date:'2014-2015',
                description:'Govt Ashikh Mahmud Collage'
            },
            {
                title:"SSC",
                date:'2007-2013',
                description:'Sharifpur High School'
            }
         ],
         services:[
             {
                 title:'web dev',
                 description:'I have been a badass web developer for a 10 years',
                 icon:<WebOutlinedIcon />
                },
                {
                    title:'Branding Identity',
                    description:'I have been a badass web developer for a 10 years',
                    icon:<AssignmentOutlinedIcon />
                   } ,
                   {
                    title:'Illustrator',
                    description:'I have been a badass web developer for a 10 years',
                    icon:<WebOutlinedIcon />
                   }
         ],
         skills:[{ 
             title:"Front-end",
             description:[
                 "ReactJs",
                 "Javascript",
                 "Bootstrap",
                 "TypeScript",
                 "Material UI"
             ]
            },
            {
                title:"Back-end",
                description:['NodeJs','Java','C']
            },
            {
                title:"Database",
                description:['Firebase','Ms sql server','MySql']
            },
            {
                title:"Source Control",
                description:['Git','GitHub']
            }
         ],
         projects:[
             {
                 tag:'React',
                 images:['https://www.creative-tim.com/blog/content/images/wordpress/2021/01/blog-4-1.jpg',
                 'https://themeselection.com/wp-content/uploads/2021/06/react-social-media.png'
             ],
                     
                 title:'React Project 1',
                 caption:'short description',
                 description:"This is my project 1,please fill in it",
                 links:[
                     {link:'https://www.google.com',icon:<YouTube />},
                     {link:'https://www.google.com',icon:<GitHubIcon />},
                     {link:'https://www.google.com',icon:<Language />},
                 ]
             },
           
                {
                    tag:'React',
                    images:['https://www.dunebook.com/wp-content/uploads/2020/06/images-11.png',
                    'https://i.pinimg.com/originals/07/3a/6f/073a6fd744eee9e94c1c240f6ebd7dab.png'
                ],
                 title:'React Project 2',
                    caption:'short description',
                    description:"This is my project 1,please fill in it",
                    links:[
                        {link:'https://www.google.com',icon:<YouTube />},
                        {link:'https://www.google.com',icon:<GitHubIcon />},
                        {link:'https://www.google.com',icon:<Language />},
                    ]
                },
               
                    {
                        tag:'Java',
                        images:['https://www.crio.do/blog/content/images/2021/04/Java-projects---breakout-ball-game.png',
                        'https://1.bp.blogspot.com/-PahLAdpFYfg/XaK82UnRXMI/AAAAAAAAG2A/QVzCNlkp8_4PolHNqdQCPv7KnqveNolzQCEwYBhgL/s1600/list-todo.PNG'
                    ],
                           
                        title:'Java Project 1',
                        caption:'short description',
                        description:"This is my project 1,please fill in it",
                        links:[
                            {link:'https://www.google.com',icon:<YouTube />},
                            {link:'https://www.google.com',icon:<GitHubIcon />},
                            {link:'https://www.google.com',icon:<Language />},
                        ]
                    },
                    
                        {
                            tag:'Python',
                            images:['https://i1.wp.com/techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/05/content-aggregator-output3.png?ssl=1',
                            'https://d2gdtie5ivbdow.cloudfront.net/articles/github-django/django-oscar.PNG'
                        ],
                            
                            title:'Python Project 1',
                            caption:'short description',
                            description:"This is my project 1,please fill in it",
                            links:[
                                {link:'https://www.google.com',icon:<YouTube />},
                                {link:'https://www.google.com',icon:<GitHubIcon />},
                                {link:'https://www.google.com',icon:<Language />},
                            ]
                        },
         ]
          
    }
    export default resumeData
   
     

    
    
