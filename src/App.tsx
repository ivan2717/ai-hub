import "./App.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="http://101.35.252.91:9091/"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}

export default App;
