// categories:
// web
// full stack
// game dev
// embedded
// other

const projectData = [
    {
        img_src: "src/assets/github_logo.png",
        name: "Checkers-playing Robotic Arm",
        category: "embedded",
        duration: "March 2026 - Present",
        description: ["test info", "more test info"],
        skills: ["Node.js", "Vite", "TailwindCSS", "HTML"],
        links: [["SOURCE CODE", "https://github.com/iracheck/checkers-bot"]]
    },
    {
        img_src: "src/assets/linkedin_logo.png",
        name: "AI Simulation Game Mod",
        category: "game dev",
        duration: "June 2025 - January 2026",
        description: ["some other test information", "interesting infromation about this project", "okay, i think i like this project"],
        skills: ["Node.js", "Vite", "TailwindCSS", "HTML"],
        links: [["DOWNLOAD (VERSION 1.1)", "https://www.nexusmods.com/gta5/mods/1430?tab=files"], ["SOURCE CODE", "https://github.com/iracheck/DynamicSimulationMod"]]
    },
    {
        img_src: "src/assets/linkedin_logo.png",
        name: "Portfolio Website",
        category: "web",
        duration: "July 2026",
        description: ["some other test information", "interesting infromation about this project", "okay, i think i like this project"],
        skills: ["Node.js", "Vite", "TailwindCSS", "HTML"],
        links: [["SOURCE CODE", "https://github.com/iracheck/iracheck.github.io"]]
    },
];

const filterState = {
    "full stack": false,
    "web": false,
    "embedded": false,
    "game dev": false
};

export function initializeCategorySelectors() {
    const fullstack = document.getElementById('fullstack-button');
    const web = document.getElementById('webdev-button');
    const embedded = document.getElementById('embedded-button');
    const game = document.getElementById('gamedev-button');

    defineAsToggleableButton(fullstack, "full stack");
    defineAsToggleableButton(web, "web");
    defineAsToggleableButton(embedded, "embedded");
    defineAsToggleableButton(game, "game dev");
}

export function defineAsToggleableButton(buttonElement, stateKey) {
    if (!buttonElement) return;

    buttonElement.addEventListener("click", (event) => {
        filterState[stateKey] = !filterState[stateKey];

        buttonElement.classList = filterState[stateKey]
            ? "selected-sorting-button"
            : "sorting-button";

        renderProjects("projects-container");
    });
}

function getAllowedProjects() {
    const allowedCategories = [];

    Object.keys(filterState).forEach((item) => {
        if (filterState[item]) {
            allowedCategories.push(item);
        }
    });

    if (allowedCategories.length === 0) {
        return Object.keys(filterState);
    }

    return allowedCategories;
}

export function renderProjects(containerID) {
    const container = document.getElementById(containerID);
    if (!container) return;

    const allowedProjects = getAllowedProjects();
    container.innerHTML = '';

    projectData.forEach((proj) => {
        if (allowedProjects.includes(proj.category)) {
            let descriptionText = '';
            proj.description.forEach((bullet) => {
                descriptionText += `<p class="paragraph-text">‣ ${bullet}</p>`;
            });

            let skillsText = '<p class="paragraph-text mt-auto"> Skills: ';
            proj.skills.forEach((skill, index) => {
                skillsText += `${skill}${index < proj.skills.length - 1 ? ', ' : ''}`;
            });
            skillsText += '</p>';

            let linksText = '<div class="flex gap-6 justify-end">';
            if (Array.isArray(proj.links)) {
                proj.links.forEach(([label, url]) => {
                    linksText += `<a href="${url}" target="_blank" class="navbutton">${label}</a>`;
                });
            }
            linksText += '</div>';

            container.innerHTML += `
                <div class="flex job-card flex-col w-full">
                    <p class="mini-text -mt-3 -ml-2">${proj.category.toUpperCase()}</p>
                    <img src="${proj.img_src}" alt="Reference photo of ${proj.name}" class="max-h-32 w-full object-contain mb-4 mt-1">
                    <p class="subheader-text">${proj.name}</p>
                    <p class="paragraph-text mb-3">${proj.duration}</p>
                    ${descriptionText}
                    <br>
                    ${skillsText}
                    ${linksText}
                </div>`;
        }
    });
}
