const workExperienceData = [
    {
        company: "Broken Spoke Bicycle Shop",
        role: "IT & Web Developer",
        duration: "May 2026 - Present",
        description: ["TBA"],
        highlight: true
    },
    {
        company: "Chick-fil-A",
        role: "BOH Team Member",
        duration: "May 2026 - Present",
        description: ["TBA"],
        highlight: false
    },
    {
        company: "The Giant Company",
        role: "Center Store Associate",
        duration: "May 2024 - September 2025",
        description: ["TBA"],
        highlight: false
    },
    {
        company: "Burger King",
        role: "Team Member",
        duration: "August 2022 - February 2023",
        description: ["TBA", "Test"],
        highlight: false
    }
]

export function renderExperience(containerID) {
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
