// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  const onNameChange = e => setName(e.target.value)
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

function App() {
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      {/* <Display name={name} animal={animal} /> */}
      <Display animal={animal} />
    </form>
  )
}

export default App
