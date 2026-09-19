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
        description: [
            "Built the computer vision pipeline that reads the physical board state from an overhead camera",
            "Wrote the serial communication layer bridging the control application and the arm's microcontroller",
            "Implemented the checkers game logic and move validation shared across the vision and hardware layers"
        ],
        skills: ["Python", "OpenCV", "C", "Arduino"],
        links: [["SOURCE CODE", "https://github.com/iracheck/checkers-bot"]]
    },
    {
        img_src: "src/assets/linkedin_logo.png",
        name: "AI Simulation Game Mod",
        category: "game dev",
        duration: "June 2025 - January 2026",
        description: [
            "Built a GTA V mod that layers more dynamic AI behavior on top of the base simulation",
            "Shipped and maintained public releases on Nexus Mods resulting in 500 user downloads, while providing user support for installation and bugfixes"
        ],
        skills: ["C#", "ScriptHookVDotNet"],
        links: [["DOWNLOAD (VERSION 1.1)", "https://www.nexusmods.com/gta5/mods/1430?tab=files"], ["SOURCE CODE", "https://github.com/iracheck/DynamicSimulationMod"]]
    },
    {
        img_src: "src/assets/linkedin_logo.png",
        name: "Input Remapper Tool",
        category: "full stack",
        duration: "February 2025",
        description: [
            "Developed a tool that converts XInput into mouse, keyboard, and media control inputs",
            "Wrote a power saving mode that results in less than 20% of active power usage, while remaining responsive to wake-up calls"
        ],
        skills: ["C#", "WPF", "XAML"],
        links: [["SOURCE CODE", "https://github.com/iracheck/pcremote-csharp"]]
    },
    {
        img_src: "src/assets/linkedin_logo.png",
        name: "Portfolio Website",
        category: "web",
        duration: "July 2026",
        description: [
            "Designed and built this site from scratch with Vite and Tailwind CSS",
            "Implemented category filtering and dynamic rendering for the projects and work experience sections"
        ],
        skills: ["JavaScript", "Vite", "Tailwind CSS", "HTML"],
        links: [["SOURCE CODE", "https://github.com/iracheck/iracheck.github.io"]]
    },
];

const filterState = {
    "full stack": false,
    "web": false,
    "embedded": false,
    "game dev": false
};

const categoryLabels = {
    "full stack": "Full stack",
    "web": "Web",
    "embedded": "Embedded",
    "game dev": "Game dev",
    "other": "Other"
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

            let skillsText = '<p class="mini-text mt-auto pt-3"> ';
            proj.skills.forEach((skill, index) => {
                skillsText += `${skill}${index < proj.skills.length - 1 ? ' · ' : ''}`;
            });
            skillsText += '</p>';

            let linksText = '<div class="flex gap-2 flex-wrap justify-end mt-3">';
            if (Array.isArray(proj.links)) {
                proj.links.forEach(([label, url]) => {
                    linksText += `<a href="${url}" target="_blank" class="card-link">${label}</a>`;
                });
            }
            linksText += '</div>';

            const categoryLabel = categoryLabels[proj.category] || proj.category;

            container.innerHTML += `
                <div class="project-card">
                    <p class="mini-text mb-1">${categoryLabel}</p>
                    <p class="subheader-text">${proj.name}</p>
                    <p class="paragraph-text mb-2 mini-text">${proj.duration}</p>
                    ${descriptionText}
                    ${skillsText}
                    ${linksText}
                </div>`;
        }
    });
}