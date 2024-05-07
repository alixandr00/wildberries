import { useRef } from "react";
import { Main1 } from "./components/landing/main1/Main1";
import { Main2 } from "./components/landing/main2/Main2";
import { Main3 } from "./components/landing/main3/Main3";
import { Tarif } from "./components/landing/tarif/Tarif";
// import { Lessons } from "./components/landing/lessons/Lessons";
import { Profile } from "./components/profile/Profile";
import { Counter } from "./components/counter/Counter";
// import { Forma } from "./components/landing/forma/Forma";
// import { Profile } from "./components/profile/Profile";
// import { Forma } from "./components/landing/Forma";

function App() {
  const tarifRef = useRef(null);

  return (
    <div>
      <Main1 tarifRef={tarifRef} />
      <Profile />
      <Main2 />
      {/* <Lessons /> */}
      <Main3 />
      <Counter />
      <Tarif tarifRef={tarifRef} />
      {/* <Forma /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
