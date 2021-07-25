import React, {useState} from 'react'
import IndividualStudent from './IndividualStudent'

function StudentsView(students) {
    const [searchTerm, setSearchTerm] = useState('');

    if (!students.students) return null

    students = students.students

    return (
        <div>
            {students.map(student => {
                return (
                    <IndividualStudent student={student} />
                )
            })}
        </div>
    )
}

export default StudentsView
