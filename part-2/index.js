function Tweet({ username, name, date, message}) {
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>@{username}</p>
            <p>{date}</p>
            <p>{message}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <tweet username="user1" name="User One" date="2023-11-27" message="This is my first tweet!" />
            <tweet username="user2" name="User Two" date="2023-11-26" message="Hello World!" />
            <tweet username="user3" name="User Three" date="2023-11-25" message="Setting up my new Twitter!" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));