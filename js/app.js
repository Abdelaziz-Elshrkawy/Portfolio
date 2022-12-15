//global variables
const navUl = document.getElementById('nav-content')
const upBtn = document.getElementById('up');
const resumeAnchor = document.getElementsByClassName('resumeAnchor');
const certificates = document.getElementById('certificates');
const skillsList = document.getElementById('skills-list');
const copyBtn = document.getElementById('copy');
const email = document.getElementById('email-text');
const section = document.querySelectorAll('section');
const pageTitle = document.getElementById('page-title');
const titleAnchor = document.getElementById('title-anchor');

// object to store changeable data
const data = {
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
            name: 'angular',
            percent: '50%',
            logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
        }
    ],
    resumeLink: 'https://docs.google.com/document/d/1aBY0Y8nd-RnYy24lyWNM5UBSwfTM139p/edit',
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
            projects: {

            }
        },
        {
            name: 'Angular NanoDegree',
            link: 'https://graduation.udacity.com/confirm/GAG2YEXD',
            date: 'OCT 2022'
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
        let id = clickedElement.getAttribute('href').slice(1);
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
})()

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
    const text = email.value
    await navigator.clipboard.writeText(text)
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
        if (e.id === 'contactMe' && elementPosition.top <= 850 && elementPosition.bottom <= 950) {
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
