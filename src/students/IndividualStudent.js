import React from 'react'
import './IndividualStudents.css'

function IndividualStudent(student) {
    if (!student.student) return null
    
    //removed from object then destructured items within array
    student = student.student
    const {id, pic, email, company, firstName, lastName, skill, grades} = student;

    const avgGrades = grades.reduce((acc, curr) => {
        return acc + curr / grades.length
    }, 0)

    return (
        <div className="studentCard">
            <img src={pic} alt='students from class' height='150px' width='150px'/>
            <div className="studentCardInfo">
                <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
                <p className="studentPersonalInfo">Email: {email}</p>
                <p className="studentPersonalInfo">Comapany: {company}</p>
                <p className="studentPersonalInfo">Skill: {skill}</p>
                <p className="studentPersonalInfo">Average: {avgGrades}%</p>
            </div>
        </div>
    )
}

export default IndividualStudent
