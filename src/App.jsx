import {useState} from "react";

function App() {

    const [person, setPerson] = useState({
        firstname: 'sidi',
        lastname: 'sidi',
        age : 18
    })

    const increment = () => {
        setPerson({...person, age: person.age+1})
    }

  return <>
      <div>
          <p>La personne : {person.firstname} à {person.age} ans.</p>
          <button onClick={increment}>{`Agmenter l'age`}</button>
      </div>
      </>
}

export default App
