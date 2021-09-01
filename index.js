/**
 * @type {[{stack: string, responsibilities: string[], project: {name: string, url: string}, description: string, company: string, dates: string, position: string}]}
 */
const workExperienceArr = [
    {
        company: 'Krusche & Company',
        dates: 'May 2021 - Present',
        project: {
            name: 'NDA',
            url: '#'
        },
        position: 'Angular developer',
        description: 'Working as a web developer on an enterprise translation system.',
        responsibilities: [
            'Developing new interface for existing website',
            'Architecture building',
            'App optimisation'
        ],
        stack: 'Typescript, Angular (v11), Angular Universal, webpack, SCSS, etc.',
    },
    {
        company: 'Sciforce, Lviv',
        dates: 'May 2018 - May 2021',
        project: {
            name: 'Transparent Language, Inc.',
            url: 'https://www.transparent.com/',
        },
        position: 'Angular developer',
        description: 'Worked as an outstaff developer in a customer’s team on an enterprise education system for language courses and managing interactive learning that is used in schools, libraries, military centers and as a free to-use service.',
        responsibilities: [
            'The project support, improving and bug fixing',
            'New features designing and developing',
            'Requirements clarification and communication with the stakeholders'
        ],
        stack: 'Typescript, Angular (v4-11), webpack, SCSS, Node.js, etc.',
    },
    {
        company: 'GoITeens',
        dates: 'May 2021 - Jul 2021',
        project: {
            name: 'GoITeens',
            url: '#',
        },
        position: 'Frontend teacher',
        description: 'Worked as a teacher for kids.',
        responsibilities: null,
        stack: 'HTML 5, CSS, SCSS',
    },
    {
        company: 'Nextgen',
        dates: 'Dec 2019 - Jun 2021',
        project: {
            name: 'Nextgen',
            url: 'https://nextgen.us.org/',
        },
        position: 'Key Full Stack Developer, TechLead',
        description: 'A US startup for an egg cell donation and surrogacy.',
        responsibilities: [
            'The system design and implementation, front- and back-end',
            'Deploy, Promouting configuration',
            'Developing PoC, MVP',
            'Estimating and planning'
        ],
        stack: 'Typescript, Angular (v9-11), Python 3, Django 3, Django Rest Framework, JWT',
    },
    {
        company: 'Sciforce, Lviv',
        dates: 'Feb 2021 - May 2021',
        project: {
            name: 'ACCA Publishing House',
            url: 'https://www.acca.ua/',
        },
        position: 'Web developer',
        description: 'Redesigned ukrainian books E-store.',
        responsibilities: [
            'Codebase updating',
            'Rendering optimization and speed-up',
            'New features developing',
            'Requirements clarification for the stakeholders'
        ],
        stack: 'Django Render, jQuery, Ajax, SCSS, Gulp',
    },
    {
        company: 'Own Project',
        dates: '',
        project: {
            name: 'Currency Tracker',
            url: 'https://currency-tracker.cyou/'
        },
        position: 'Full Stack developer',
        description: 'Free Ukraine popular banks currency tracking tool',
        responsibilities: [],
        stack: 'Typescript, Angular (v11-12), Python 3, Django 3, Django Rest Framework, Beautiful Soup'
    }
];

/**
 * @type {[{type: string, items: string[]}]}
 */
const technicalSkills = [
    {
        type: 'Frontend',
        items: [
            'JavaScript, TypeScript, OOP',
            'Angular (v4-11), Vue.js (v2), jQuery, Ajax',
            'CSS (LESS, SCSS), Bootstrap, Material UI',
            'Grid, Flexbox',
            'NPM',
            'RxJS',
            'Adaptive, Responsive',
        ]
    },
    {
        type: 'Backend',
        items: [
            'Python 3, Django (inc. DRF',
            'NodeJS, Express, Nest JS',
            'PostgreSQL, MySQL, SQLite'
        ]
    },
    {
        type: 'Utils',
        items: [
            'Docker, Docker-compose',
            'Nginx',
            'Git',
            'Jira, Confluence, Trello'
        ]
    },
    {
        type: 'Some experience in',
        items: [
            'Electron.js, Cordova, Ionic',
            'Flutter, Dart',
        ]
    }
];

const loader = document.getElementById('loader');
const content = document.getElementById('content');

/**
 * @param {string} header
 * @param {string[]} items
 * @return {HTMLDivElement}
 */
function createList(header, items) {
    const list = document.createElement('div');
    list.classList.add('list-block');

    const listHeader = document.createElement('div');
    listHeader.classList.add('list__header');
    listHeader.innerText = header + ':';

    const ul = document.createElement('ul');
    items.forEach(function (responsibility) {
        const li = document.createElement('li');
        li.innerText = responsibility;
        ul.append(li);
    })

    list.append(listHeader);
    list.append(ul);
    return list;
}

function main() {
    const workExperienceBlock = document.getElementById('workExperienceBlock');
    const technicalSkillsBlock = document.getElementById('technicalSkillsBlock')
    workExperienceArr.forEach(function (el) {
        const infoBlock = document.createElement('div');
        infoBlock.classList.add('info-block');

        const infoBlockHeader = document.createElement('div');
        infoBlockHeader.classList.add('flex', 'space-between', 'mb-10', 'info-block__head');
        infoBlockHeader.innerHTML = `
                <h3 class="text-red">${el.company}</h3>
                <h3 class="info-block__dates">${el.dates}</h3>
        `;

        const infoBlockProject = document.createElement('p');
        infoBlockProject.innerHTML = `
            <a href="${el.project.url}" target="_blank">${el.project.name}</a> - ${el.position}
        `;

        const infoBlockDesc = document.createElement('p');
        infoBlockDesc.innerText = el.description;

        var infoBlockResponsibilities = '';
        if (el.responsibilities && el.responsibilities.length > 0) {
            infoBlockResponsibilities = document.createElement('div');
            infoBlockResponsibilities.append(createList('Responsibilities', el.responsibilities));
        }

        const infoBlockStack = document.createElement('div');
        infoBlockStack.innerHTML = `
            <b>Stack:</b> ${el.stack}
        `;

        [
            infoBlockHeader,
            infoBlockProject,
            infoBlockDesc,
            infoBlockResponsibilities,
            infoBlockStack
        ].forEach(function (block) {
            infoBlock.append(block)
        })
        workExperienceBlock.append(infoBlock);
    })
    technicalSkills.forEach(function (skill) {
        technicalSkillsBlock.append(createList(skill.type, skill.items));
    });
}

/**
 * @param {Function} fn - Function to run;
 * @param {Number} time - Time to wait
 * @return {Promise}
 */
function wait(fn, time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            fn();
            resolve();
        }, time)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    main();
    wait(() => loader.classList.add('fade'), 1000)
        .then(() => wait(() => {content.style.display = 'block'; loader.style.display = 'none';}, 500))
        .then(() => wait(() => content.classList.remove('fade'), 500))
        .then();
}, false);
