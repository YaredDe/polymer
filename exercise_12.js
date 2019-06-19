var finalGrade = (exam, projects) => {
    if (Number(exam) > 90 || Number(projects) > 10) {
        console.log(100)
    }
    else if (Number(exam) > 75 && Number(projects) >= 5) {
        console.log(90)
    }
    else if (Number(exam) > 50 && Number(projects) >=2) {
        console.log(75)
    }
    else {
        console.log(0)
    }
}

finalGrade(82, 1)