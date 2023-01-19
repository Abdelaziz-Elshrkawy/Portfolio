//global variables
const navUl = document.getElementById('nav-content')
const upBtn = document.getElementById('up');
const resumeAnchor = document.getElementsByClassName('resumeAnchor');
const certificates = document.getElementById('certificates');
const skillsList = document.getElementById('skills-list');
const projects = document.getElementById('projects');
const copyBtn = document.getElementById('copy');
const email = document.getElementById('email-text');
const section = document.querySelectorAll('section');
const pageTitle = document.getElementById('page-title');
const titleAnchor = document.getElementById('title-anchor');
// this function is here just to invoke the scroll event on line 305 to to invoke smooth scroll nested function in line 336
// because with out autoScroll function the first click on nav bar without scrolling
// will not have the smooth scroll effect
(function autoScroll() {
    window.scroll(0, 1);
})()

// object to store changeable data
const data = {
    info: {
        email: 'abdelaziz_elshrkawy53@yahoo.com'
    },
    skills: [
        {
            name: 'html',
            percent: '90%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
        },
        {
            name: 'css',
            percent: '70%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
        },
        {
            name: 'javascript',
            percent: '70%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
        },
        {
            name: 'typescript',
            percent: '70%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
        },
        {
            name: 'node.js',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
        },
        {
            name: 'express.js',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg'
        },
        {
            name: 'postgresql',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
        },
        {
            name: 'mongodb',
            percent: '50%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
        },
        {
            name: 'reactjs',
            percent: '60%',
            logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
        },
        {
            name: 'angular',
            percent: '50%',
            logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
        },
        {
            name: 'Jasmine',
            percent: '50%',
            logo: 'https://jasmine.github.io/images/jasmine-white-circle.svg',
            style: [
                {
                    'background-color': '#a75f98'
                }
            ]
        },
        {
            name: 'Illustrator',
            percent: '30%',
            logo: 'https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg'
        }
    ],
    resumeLink: 'https://drive.google.com/file/d/1kWHapGO0FfpJzy1EK26kz1etRbuPoMX6/view?usp=share_link',
    certificates: [
        {
            name: 'Challenger',
            link: 'https://drive.google.com/file/d/1hI7BT0vrBByRjzr1RVJrjAZx2h0Cv_B7/view',
            date: 'JAN 2022'
        },
        {
            name: 'Advanced Full Stack NanoDegree',
            link: 'https://graduation.udacity.com/confirm/LMVD9N2T',
            date: 'AUG 2022',
            projects: [
                {
                    name: 'image Processing API',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/Imag-Processing-API'
                },
                {
                    name: 'Store Front API',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/Store-Front-API'
                },
                {
                    name: 'Hosting a Full Stack Application',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/Hosting-a-Full-Stack-Application'
                }
            ],
        },
        {
            name: 'Angular NanoDegree',
            link: 'https://graduation.udacity.com/confirm/GAG2YEXD',
            date: 'OCT 2022',
            projects: [
                {
                    name: 'MyStore',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/MyStore-Udacity-Angular'
                }
            ]
        },
        {
            name: 'Professional Front-End Web Development',
            link: 'https://graduation.udacity.com/confirm/LRVLGJCE',
            date: 'DEC 2022',
            projects: [
                {
                    name: 'Landing Page (Portfolio)',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/Portfolio'
                },
                {
                    name: 'Weather Journal App',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/weather-journal-app'
                }
            ]
        },
        {
            name: 'React Development Cross-Skilling',
            link: 'https://confirm.udacity.com/XGRXWG5Z',
            date: 'JAN 2023',
            projects: [
                {
                    name: 'My Reads',
                    link: 'https://github.com/Abdelaziz-Elshrkawy/Udacity-ReactND-My-Reads'
                }
            ]
        }
    ],
    provider: [
        {
            name: 'udacity',
            logo: 'https://auth.udacity.com//static/media/logo.08dc9669.svg',
            website: 'https://www.udacity.com'
        },
        {
            name: 'egfwd',
            logo: 'https://benaeducation.com/wp-content/uploads/2021/03/Egypt_fwd_logo-1.png',
            website: 'https://www.egfwd.com/'
        }
    ]
};

//function to add smooth scroll on elements
const smoothScroll = (element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        let clickedElement = event.target;
        //solving problem of nested elements inside anchors
        /* when an element nested inside anchor clicked (like the h1 element on the page title which contain Portfolio text) the element it self revoke the event so it initialize
        error of undefined href it can solved by adding the href to the nested element too but that doesn't make sense! */
        if (!clickedElement.getAttribute('href')) {
            clickedElement = event.target.parentElement;
        }
        const id = clickedElement.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    })
}

//adding resume link
for (let i = 0; i < resumeAnchor.length; i++) {
    resumeAnchor[i].setAttribute('href', data.resumeLink)
}

//nav bar content
const navLinks = (() => {
    const navFragment = new DocumentFragment();
    section.forEach((e) => {
        const id = e.id
        const li = document.createElement('li');
        li.innerHTML = `<a id='${id}-link' class='hover-link' href='#${id}'>${id.charAt(0).toUpperCase() + id.slice(1)}</a>`
        navFragment.appendChild(li)
    })
    navUl.appendChild(navFragment)
})()



// certificates section
const certificatesContent = (() => {
    const certificatesFragment = new DocumentFragment();
    for (let i = 0; i < data.certificates.length; i++) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const projectsDiv = document.createElement('div');
        const certificateLinkAnchor = document.createElement('a');
        const projectText = document.createElement('span');
        //projects link
        //project text title before the project
        projectText.setAttribute('class', 'project-text')
        projectText.textContent = 'Projects:'
        projectsDiv.appendChild(projectText)
        if (data.certificates[i].projects) {
            for (let z = 0; z < data.certificates[i].projects.length; z++) {
                const anchor = document.createElement('a');
                anchor.setAttribute('href', data.certificates[i].projects[z].link)
                anchor.setAttribute('target', 'blank')
                anchor.textContent = data.certificates[i].projects[z].name
                projectsDiv.appendChild(anchor);
            }
        }
        //defining div class
        div.setAttribute('class', 'container')
        projectsDiv.setAttribute('class', 'project-div')
        //main text
        p.innerHTML = `<span>${data.certificates[i].name}</span> track on (${data.certificates[i].date}) provided by <a target='blank' href='${data.provider[0].website}'>
                        <img id=${data.provider[0].name} src='${data.provider[0].logo}' alt='provider'  height='30'/></a>  and sponsored by 
                        <a target='blank' href='${data.provider[1].website}'><img id=${data.provider[1].name} src='${data.provider[1].logo}' alt='provider'  height='50'/></a>`
        div.appendChild(p)
        //certificate link
        certificateLinkAnchor.setAttribute('class', 'btn')
        certificateLinkAnchor.setAttribute('target', 'blank')
        certificateLinkAnchor.setAttribute('href', data.certificates[i].link)
        certificateLinkAnchor.innerHTML = '<button>Certificate link</button>'
        if (data.certificates[i].projects) { div.appendChild(projectsDiv) }
        div.appendChild(certificateLinkAnchor)
        //appending created elements to the documentFragment
        certificatesFragment.appendChild(div)
    }
    certificates.appendChild(certificatesFragment)
})()
/* <a class='btn' target='blank' href=${data.certificates[i].link}></a> */
/* const certificatesContent = (() => {
    const certificatesFragment = new DocumentFragment();
    const projectsFragment = new DocumentFragment();
    data.certificates.forEach((e) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        //adding content
        p.innerHTML = `${e.name} track on ${e.date} provided by <a target='blank' href='${data.provider[0].website}'>
                        <img id=${data.provider[0].name} src='${data.provider[0].logo}' alt='provider'  height='30'/></a>  and sponsored by 
                        <a target='blank' href='${data.provider[1].website}'><img id=${data.provider[1].name} src='${data.provider[1].logo}' alt='provider'  height='50'/></a> 
                        <a class='btn' target='blank' href=${e.link}><button>Certificate link</button></a>`
        div.appendChild(p)
        certificatesFragment.appendChild(div)
    })
    certificates.appendChild(certificatesFragment)
})() */

//skills section
const skillContent = (() => {
    const skillsFragment = new DocumentFragment()
    data.skills.forEach((e) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span = document.createElement('span');
        const div = document.createElement('div');
        const innerDiv = document.createElement('div');
        //defining the id for every skill
        li.setAttribute('id', e.name)
        //defining the img element attributes
        img.setAttribute('src', e.logo)
        img.setAttribute('width', 25)
        img.setAttribute('height', 25)
        if (e.name.match(/\./g)) {
            img.setAttribute('alt', e.name.split('.').join(''))
            img.setAttribute('id', e.name.split('.').join(''))
        } else {
            img.setAttribute('alt', e.name)
            img.setAttribute('id', e.name)
        }
        //adding style attribute
        if (e.style) {
            let style = ``;
            for (let i = 0; i < e.style.length; i++) {
                style += `${Object.keys(e.style[i])}: ${Object.values(e.style[i])};`
            }
            img.setAttribute('style', style)
        }
        //defining the title of skill
        if (e.name === 'html' || e.name === 'css') {
            span.textContent = e.name.toUpperCase()
        } else {
            span.textContent = e.name.charAt(0).toUpperCase() + e.name.slice(1);
        }
        //setting the percent bar
        div.setAttribute('class', 'border');
        innerDiv.setAttribute('class', 'inner');
        innerDiv.setAttribute('id', `inner${e.name}`);
        innerDiv.textContent = e.percent
        innerDiv.style.width = e.percent
        //nesting elements
        //adding innerDiv inside div
        div.appendChild(innerDiv);
        //adding child elements to the parent
        li.appendChild(img)
        li.appendChild(span)
        li.appendChild(div)
        //adding the element to the document fragment
        skillsFragment.appendChild(li)
    })
    skillsList.appendChild(skillsFragment)
})()

//connect section
//email copying button
copyBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(data.info.email)
    copyBtn.classList.add('copied')
    copyBtn.textContent = 'Copied'
})

//scroll action
document.addEventListener('scroll', () => {
    //controlling scroll up button visibility
    if (window.scrollY > 300) {
        upBtn.style.display = 'inline'
    } else {
        upBtn.style.display = 'none'
    }
    // Add class 'active-section' to section when near top of viewport
    section.forEach((e) => {
        const elementPosition = e.getBoundingClientRect()
        //getting the matched nav link
        const linkId = `${e.id}-link`
        const navLink = document.getElementById(linkId);
        if (elementPosition.top <= 450 && elementPosition.bottom >= 450) {
            e.classList.add('active-section')
            navLink.classList.remove('hover-link')
            navLink.classList.add('active-link')
        } else {
            e.classList.remove('active-section')
            navLink.classList.remove('active-link')
            navLink.classList.add('hover-link')
        }
        //adding title attribute to page title when reaching the end of the page
        if (e.id == 'contactMe' && elementPosition.top <= 850 && elementPosition.bottom <= 950) {
            pageTitle.setAttribute('title', 'Click to Scroll Up')
        } else {
            pageTitle.removeAttribute('title', 'Click to Scroll Up')
        }
        //smooth scroll
        smoothScroll(navLink)
    })
})

//adding smooth scroll to scroll up button and page title
smoothScroll(upBtn)
smoothScroll(titleAnchor)

//obligating the first section to be active on page load
section[0].classList.add('active-section')
const firstLinkId = `${section[0].id}-link`
const firstLink = document.getElementById(firstLinkId)
firstLink.classList.add('active-link')
