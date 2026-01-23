const portfolioConfig = {
    sections: {
        intro: {
            enabled: true,
            title: "Intro",
            navTitle: "Home",
            page: "index.html"
        },
        funrock: {
            enabled: true,
            title: "FunRock Internship",
            navTitle: "FunRock",
            page: "funrock.html"
        },
        goap: {
            enabled: false,
            title: "GOAP System",
            navTitle: "GOAP",
            page: "goap.html"
        },
        catan: {
            enabled: false,
            title: "Catan Project",
            navTitle: "Catan",
            page: "catan.html"
        },
        futuregames: {
            enabled: true,
            title: "Futuregames Projects",
            navTitle: "Futuregames",
            page: "futuregames.html"
        },
        about: {
            enabled: false,
            title: "About Me / CV",
            navTitle: "About",
            page: "about.html"
        },
        contact: {
            enabled: true,
            title: "Contact",
            navTitle: "Contact",
            page: "#contact"
        }
    },
    subpageParents: {
        'futuregames-alien-appetite.html': 'futuregames.html',
        'futuregames-the-neglect.html': 'futuregames.html',
        'futuregames-iron-league.html': 'futuregames.html',
        'futuregames-neighbourhood-accident.html': 'futuregames.html'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

function initializePortfolio() {
    generateNavigation();
    highlightActivePage();
}

function generateNavigation() {
    const navMenu = document.getElementById('navMenu');
    navMenu.innerHTML = '';

    Object.keys(portfolioConfig.sections).forEach(sectionId => {
        const section = portfolioConfig.sections[sectionId];

        if (section.enabled) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = section.page;
            a.className = 'nav-link';
            a.textContent = section.navTitle;
            a.setAttribute('data-page', section.page);
            li.appendChild(a);
            navMenu.appendChild(li);
        }
    });
}

function highlightActivePage() {
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    if (portfolioConfig.subpageParents[currentPage]) {
        currentPage = portfolioConfig.subpageParents[currentPage];
    }

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');

        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

window.portfolioConfig = portfolioConfig;
