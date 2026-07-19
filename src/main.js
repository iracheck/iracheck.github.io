import './style.css'
import { initializeExperienceToggler, renderExperience } from './inject-work-experience'
import { renderProjects } from './inject-projects'

function main() {
    initializeExperienceToggler()
    renderExperience("work-experience-container")
    renderProjects("project-container")
}

main()
