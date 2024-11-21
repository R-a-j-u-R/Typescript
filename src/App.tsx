import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonLst from "./components/PersonLst";
import Status from "./components/Status";

const App = () => {
  const Name = {
    fname: "raju",
    lname: "r",
  };
  const nameList = [
    {
      fname: "raju",
      lname: "r",
    },
    {
      fname: "sadasd",
      lname: "rasdasdsa",
    },
  ];

  return (
    <>
      <Greet id={10} name="raju" isLoggedin={true} />
      <Person name={Name} />
      <PersonLst names={nameList} />
      <Status status="loading" />
      <Heading>Heading PlaceHolder</Heading>
      <Oscar>
        <Heading>OSACR GOES TO JAVASCRIPT</Heading>
      </Oscar>
    </>
  );
};

export default App;
