// import "./App.css";
// import Timer from "./components/Timer";
// import Message from "./components/Message";
// import Message2 from "./components/Message2";
// function App() {
//   return (
//     <div className="App">
//       <h1>Exemplo de React com TypeScript</h1>
//       <Timer />
//       <Message />
//       <Message2/>
//     </div>
//   );
// }
// export default App;

// import './App.css';
// import UserList from './components/UserList';
// import ToggleMessage from './components/ToggleMessage';
// function App() {
//  return (
//  <div className="App">
//  <h1>Exemplo de React com TypeScript</h1>
//  <UserList />
//  <ToggleMessage />
//  </div>
//  );
// }
// export default App;

import "./App.css";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorInput from "./components/ColorInput";
import WidthInput from "./components/WidthInput";
import WidthButton from "./components/WidthButton";
function App() {
  const [color, setColor] = useState<string>("white");
  const [width, setWidth] = useState<number>(80)
  return (
    <div className="App">
      <h1>Mudar Cor de Fundo com useEffect</h1>
      <ColorInput color={color} setColor={setColor} />
      <ColorBox color={color} />
      <WidthInput width={width} setWidth={setWidth} />
      <WidthButton width={width} />
    </div>
  );
}
export default App;