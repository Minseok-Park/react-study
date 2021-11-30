import "./App.css";
import Users from "./components/users";
import UsersProvider from "./components/usersContext";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
