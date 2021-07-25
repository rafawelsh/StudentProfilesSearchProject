import {useState, useEffect} from 'react'
import './App.css';
import StudentsView from './students/StudentsView'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    callData()
  }, [setData]);

  const callData = async () => {
    await fetch('https://api.hatchways.io/assessment/students')
      .then(result => result.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(err => console.log(err))
  };

  const students = Object.values(data)[0]
  console.log(students)

  return (
    <main>
      <p>Hellow World</p>
    </main>
  );
}

export default App;
