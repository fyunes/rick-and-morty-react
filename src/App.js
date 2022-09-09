
import Rickandmortyfetch from "./components/Rickandmortyfetch";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="App">
        <Form />
      </div>
      <div className="col mt-5">     
        <Rickandmortyfetch />      
      </div>
    </>
  );
}

export default App;
