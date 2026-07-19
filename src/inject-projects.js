// categories:
// web
// full-stack
// game
// embedded
// other

const projectData = [
    {
        name: "Portfolio Site",
        category: "web",
        duration: "Date1 - Date2",
        description: [""],
        skills: [""]
    },
]

export function renderProjects(containerID) {
    const container = document.getElementById(containerID);

    container.innerHTML = '';


    projectData.forEach(proj => {
        let descriptionText = ``
        proj.description.forEach(bullet => {
            descriptionText += `<p class="paragraph-text">‣ ${bullet}</p>`
        })

        let skillsText = ``
        proj.skills.forEach(bullet => {
            skillsText += `<p class="paragraph-test">‣ ${bullet}</p>`
        })

        let highlight = "highlighted-job-card"
        if (!proj.highlight) {
            highlight = "job-card"
        }

        container.innerHTML += `test`
    });
}
