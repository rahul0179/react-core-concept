import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks = ['Salman Khan', 'Aamir Khan', 'Ranbir Kapoor', 'Akshay Khan']
  const job = ['actor']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }








      {/* <Person name={nayoks[0]} job={job[0]}></Person>
      <Person name={nayoks[1]} job={job[0]}></Person>
      <Person name={nayoks[2]} job={job[0]}></Person>

      <Person></Person>
      <h1>indian cricket</h1>
      <OtherPerson></OtherPerson> */}




      {
        <Person name='Rahul '></Person>

      }



    </div>
  )

}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name} </h1>
      <h3>{props.job}</h3>
    </div>


  )

}
function OtherPerson() {
  return (
    <div className='other'>
      <h1>Virat Kholi</h1>
      <h3>indian Cricketer</h3>
      <button id='btn'>click</button>

    </div>
  )
}

export default App;
