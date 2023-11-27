function Person({ name, age, hobbies }) {
    // Display only the first six characters of the name if it's longer than 8 characters
    const shortName = name.length > 8 ? name.substring(0, 6) : name;
  
    return (
      <div>
        <p>Learn some information about this person</p>
        <p>Name: {shortName}</p>
        <p>Age: {age}</p>
        {age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
        <ul>
          {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
      </div>
    );
  }
  
function App() {
  return (
    <div>
      <Person name="Cameron" age={32} hobbies={["Sports", "Gaming", "Coding"]} />
      <Person name="Alexandra" age={17} hobbies={["Dancing", "Drawing"]} />
      <Person name="Jonathan" age={25} hobbies={["Cooking", "Hiking"]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));