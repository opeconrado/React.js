import React from "react";
import "./App.css";
// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  adress: string;
  city: string;
}
// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, adress, city }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Your adress is {adress}, in the city of {city}.</p>
    </div>
  );
};
function App() {
  return (
  <div className='App'>
  <Welcome name='Alice' age={25} adress="Rua Wilson" city="Beraba"/>
  <Welcome name='Bob' age={30} adress="Rua Watson" city="Berlandia"/>
  <Welcome name='Charlie' age={35} adress="Rua Welson" city="Araguari"/>

  </div>
  );
 }
 export default App;