import './style.css'
import { initializeExperienceToggler, renderExperience } from './inject-work-experience'

function main() {
    initializeExperienceToggler()
    renderExperience("work-experience-container")
}

main()
