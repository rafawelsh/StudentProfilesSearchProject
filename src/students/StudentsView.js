import React, {useState} from 'react'
import IndividualStudent from './IndividualStudent'
import SearchBar from '../searchBar/SearchBar'

function StudentsView(students) {
    const [searchTerm, setSearchTerm] = useState('');

    if (!students.students) return null
    students = students.students

    return (
        <div>
            <input type="text" placeholder="Search.." onChange={(event) => {setSearchTerm(event.target.value)}}/>

            {students.filter((search) => {
                if (searchTerm === '') {
                    return search
                } else if (search.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || search.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return search
                }
            }).map(student => {
                return (
                    <IndividualStudent student={student} />
                )
            })}
        </div>
    )
}

export default StudentsView
