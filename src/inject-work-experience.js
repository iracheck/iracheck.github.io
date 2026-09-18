const workExperienceData = [
    {
        company: "Lionchase North America",
        role: "Platform Engineering Intern",
        duration: "September 2026 - Present",
        description: ["Modernizing a legacy website using HTML/CSS and ReactJS",
            "Engineering a custom CRUD dashboard using React and Firebase that decoupled content management from the source code, empowering a non-technical stakeholder to update business hours and service descriptions in real-time",
            "Modernizing security protocol, solving existing gaps in security for online visitors",
            "Implementing semantic HTML and SEO best practices to increase organic search visibility for the shop within the Lehigh Valley area"],
        highlight: true,
        technical: true
    },
    {
        company: "Broken Spoke Bicycle Shop",
        role: "IT & Web Developer",
        duration: "August 2026 - September 2026",
        description: ["Modernizing a legacy website using HTML/CSS and ReactJS",
            "Engineering a custom CRUD dashboard using React and Firebase that decoupled content management from the source code, empowering a non-technical stakeholder to update business hours and service descriptions in real-time",
            "Modernizing security protocol, solving existing gaps in security for online visitors",
            "Implementing semantic HTML and SEO best practices to increase organic search visibility for the shop within the Lehigh Valley area"],
        highlight: true,
        technical: true
    },
    {
        company: "Chick-fil-A",
        role: "BOH Team Member",
        duration: "May 2026 - Present",
        description: ["Starting on May 12th, 2026"],
        highlight: false
    },
    {
        company: "Giant Food Stores",
        role: "Center Store Associate",
        duration: "May 2024 - September 2025",
        description: ["Assumed responsibility for inventory recording when senior staff members were on a leave of absence",
                      "Trained new employees on Center Store operations", "Obtained OSHA certification with power jacks and power lifts"],
        highlight: false
    },
    {
        company: "Burger King",
        role: "Team Member",
        duration: "August 2022 - February 2023",
        description: ["Worked with a team to produce sub 1:30 drive-thru times and a positive experience for all customers",
                      "Trained new employees on speciality and burger boards"],
        highlight: false
    }
]

export function initializeExperienceToggler() {
    const technicalToggle = document.getElementById('toggle-technical');

    technicalToggle.addEventListener("change", (event => {
        renderExperience("work-experience-container");
    }))
}

export function renderExperience(containerID) {
    const container = document.getElementById(containerID);
    const technicalToggle = document.getElementById('toggle-technical');

    let filter = technicalToggle.checked;

    container.innerHTML = '';

    workExperienceData.forEach(job => {
        if (filter && !job.highlight) {
            return
        }

        let descriptionText = ``;
        job.description.forEach(bullet => {
            descriptionText += `<p class="paragraph-text">‣ ${bullet}</p>`;
        })

        let cardClass = job.highlight ? "highlighted-job-card" : "job-card";

        container.innerHTML += `        <div class="${cardClass}">
          <div class="flex flex-wrap items-baseline mb-2 gap-x-2">
            <p class="subheader-text">${job.role}</p>
            <p class="paragraph-text">@ ${job.company}</p>
            <p class="paragraph-text ml-auto mini-text">${job.duration}</p>
          </div>
          ${descriptionText}
        </div>`
    });
}