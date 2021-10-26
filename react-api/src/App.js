import "./App.css";
import Users from "./components/users";
import { UsersProvider } from "./components/usersContext";
import UsersRedu from "./components/users_redu";

function App() {
  return (
    <UsersProvider>
      <UsersRedu />
    </UsersProvider>
  );
}

export default App;
