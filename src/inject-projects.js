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


    workExperienceData.forEach(job => {
        let descriptionText = ``
        job.description.forEach(bullet => {
            descriptionText += `<p class="paragraph-text">‣ ${bullet}</p>`
        })

        let highlight = "highlighted-job-card"
        if (!job.highlight) {
            highlight = "job-card"
        }

        container.innerHTML += `        <div class="${highlight}">
          <div class="flex">
            <h1 class="subheader-text">${job.role}</h1>
            <p class="paragraph-text my-1.5 mx-1">@ ${job.company}</p>
            <p class="paragraph-text my-1.5 ml-auto">${job.duration}</p>
          </div>
          <p class="paragraph-text">${descriptionText}</p>
        </div>`
    });
}
