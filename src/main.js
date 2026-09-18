import './style.css'
import { initializeExperienceToggler, renderExperience } from './inject-work-experience'
import { initializeCategorySelectors, renderProjects } from './inject-projects'

function main() {
    initializeExperienceToggler()
    initializeCategorySelectors()
    renderExperience("work-experience-container")
    renderProjects("projects-container")
}

main()