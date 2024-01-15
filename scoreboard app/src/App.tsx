import { User, UserCreate } from "./interface/user.interface"
import { useEffect, useState } from "react";
function App() {
  const [players, setPlayers] = useState<User[]>([]);
  useEffect(()=>{
    if(localStorage.getItem("players")){
      setPlayers(JSON.parse(localStorage.getItem("players")!))
    }
  }, [])
  function addUser(user: UserCreate) {
    console.log(user.name)
    players.push({
      id: Date.now() * Math.random(),
      name: user.name,
      score: 0,
    });
    setPlayers(players);
    localStorage.setItem("players", JSON.stringify(players));

  }
  return (
    <>
      <header>
        <h1> Bảng Điểm</h1>
      </header>
      <table className="table">
        <tbody>
          {
            players.map((player, i) => {
              return (
                <tr key={player.id}>
                  <td scope="row">{i+1}</td>
                  <td><i className="fa-regular fa-star"></i></td>
                  <td>{player.name}</td>
                  <td>{player.score}</td>
                  <td>X</td>
                </tr>
              )
            })
          }
          <tr>
            <th scope="row">1</th>
            <td><i className="fa-regular fa-star"></i></td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

        </tbody>
      </table>
      <div className="Create">
        <form onSubmit={(e) => {
          e.preventDefault();
          addUser((e.target as any).name.value);
        }}>
          <input type="text" name="name" />
          <button type="submit">
            Add
          </button>
        </form>

      </div>
    </>
  )
}

export default App
