import React from 'react'

function IndividualStudent(student) {
    if (!student.student) return null
    
    //removed from object then destructured items within array
    student = student.student
    const {id, pic, email, company, firstName, lastName, skill, grades} = student;

    const avgGrades = grades.reduce((acc, curr) => {
        return acc + curr / grades.length
    }, 0)

    return (
        <div key={id}>
            <img src={pic} alt='students from class' />
            <h2>{firstName} {lastName}</h2>
            <p>Email: {email}</p>
            <p>Comapany: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {avgGrades}%</p>
        </div>
    )
}

export default IndividualStudent
