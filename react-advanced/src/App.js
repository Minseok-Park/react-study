import { useRef, useState } from "react";
import "./App.css";
import Modal from "./components/modal";
import Myinputs from "./components/myinputs";

// class Foo extends Component {
//   componentDidMount() {
//     console.log("Foo ComponentDidMount");
//   }
//   componentWillUnmount() {
//     console.log("Foo componentWillUnMount");
//   }

//   static getDerivedStateFromProps(nextProps, prevProps) {
//     console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
//     return {};
//   }

//   render() {
//     console.log("Foo render");
//     return <p>Foo</p>;
//   }
// }

// class App extends Component {
//   // state = {
//   //   count: 0,
//   // };
//   // componentDidMount() {
//   //   setInterval(() => {
//   //     this.setState({ count: this.state.count + 1 });
//   //   }, 1000);
//   // }
//   // render() {
//   //   if (this.state.count % 2 === 0) {
//   //     return <Foo name="Mark" />;
//   //   }
//   //   return <Foo name="Anna" />;
//   // }
//   render() {
//     return <div>d</div>;
//   }
// }

// function App() {
//   const [visible, setVisible] = useState(false);
//   const open = () => {
//     setVisible(true);
//   };

//   const close = () => {
//     setVisible(false);
//   };

//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0, 0, 0, 0.5)",
//             }}
//             onClick={close}
//           >
//             Hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = useRef();

  const click = () => {
    console.log(myInputRef.current.value);
  };

  return (
    <div>
      <Myinputs ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
