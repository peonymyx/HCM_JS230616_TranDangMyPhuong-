import { useDispatch, useSelector } from "react-redux";
import { User, UserCreate } from "./interface/user.interface"
import { useEffect, useState } from "react";
import { userActions } from "./store/slice/user.slice";
import './App.scss'
import Navbar from "./components/Nav/Navbar";
import TableUser from "./components/Table/Table";
import Input from "./components/Input/Input";
function App() {
  const userStore = useSelector(store => (store as any).userStore);
  const [players, setPlayers] = useState<User[]>([]);
  const dispatch = useDispatch();
  const [scoreMax, setScoreMax] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("players")) {
      setPlayers(JSON.parse(localStorage.getItem("players")!))
      dispatch(userActions.setData(players))
      getScoreMax()
    }
  }, [userStore])
  function getScoreMax() {
    setScoreMax(Math.max(...players.map((player: User) => player.score)))
  }

  function addUser(user: UserCreate) {
    players.push({
      id: Date.now() * Math.random(),
      name: user.name,
      score: 0,
    });
    localStorage.setItem("players", JSON.stringify(players));
    dispatch(userActions.setData(players))
    setPlayers(players);
  }
  return (
    <div className="App">
      <div className="content">
        <Navbar players={players} />
        <TableUser players={players} setPlayers={setPlayers} scoreMax={scoreMax} setScoreMax={setScoreMax} />
        {players.length == 0 && <h2>No Player</h2>}
        <Input addUser={addUser} />
      </div>
    </div>

  )
}

export default App
