import {useState, useRef} from 'react';

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);


  // function handleChange(event) {
  //   setEnteredPlayerNameß(event.target.value);
  // }

  function handClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''; 
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      {/* <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> */}
      <p>
        <input ref = {playerName} type="text" />
        <button onClick={handClick}>Set Name</button>
      </p>
    </section>
  );
}
