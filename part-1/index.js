function FirstComponent() {
    return <h1>My very first component</h1>
}

function NamedComponent(props) {
    return <p>My name is {props.name}</p>
}

function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Cameron" />
        </div>
    );
}

// Render app component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));