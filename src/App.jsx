import './App.css'
import StudentCard from './components/StudentCard/StudentCard'

import Image1 from './assets/Image1.svg'
import Image2 from './assets/Image2.svg'
import Image3 from './assets/Image3.svg'

function App() {

  const userData = [
    {
        userName: 'Vaishali',
        userDescription: 'Student, Coder, Critical Thinker etc.',
        image: Image1,
    },
    {
        userName: 'Kanika',
        userDescription: 'Student, Problem Solver etc.',
        image: Image2,
    },
    {
        userName: 'Kanishka',
        userDescription: 'Student, ambitious etc.',
        image: Image3,
    }
        
]

  return (
    <>
      <StudentCard userData = {userData} age = {20} name = {"hello"}></StudentCard>
    </>
  )
}

export default App
