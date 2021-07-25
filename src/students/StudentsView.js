import React, {useState} from 'react'
import IndividualStudent from './IndividualStudent'
import './StudentsView.css';

function StudentsView(students) {
    const [searchTerm, setSearchTerm] = useState('');

    if (!students.students) return null
    students = students.students

    return (
        <div className="mainGrid">
            <input className="searchBar" type="text" placeholder="Search by name" onChange={(event) => {setSearchTerm(event.target.value)}}/>

            <div className="studentGird">
                {students.filter((search) => {
                    if (searchTerm === '') {
                        return search
                    } else if (search.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || search.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return search
                    }
                }).map(student => {
                    return (
                        <>
                        <IndividualStudent key={student.id} student={student} />
                        <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default StudentsView
