function projectsTimeCalculation(name, projects) {
    let projectsNum = Number(projects)
    let hoursPerProject = 3
    
    let neededTime = projectsNum * hoursPerProject

    console.log(`The architect ${name} will need ${neededTime} hours to complete ${projects} project/s.`)

}

projectsTimeCalculation('George', 4)