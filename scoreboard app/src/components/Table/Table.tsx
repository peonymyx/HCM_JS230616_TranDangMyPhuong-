import React from 'react'
import { useDispatch} from 'react-redux';
import { User} from "../../interface/user.interface"
import './Table.scss'
import { userActions } from "../../store/slice/user.slice";
export default function TableUser(props: any) {
    const players = props.players;
    const dispatch = useDispatch();
    function getScoreMax() {
        props.setScoreMax(Math.max(...players.map((player : User) => player.score)))
      }
    return (
        <div className='tableUser'>
            <table className="table">
            <tbody>
                {
                    players?.map((player: User) => {
                        return (
                            <tr key={player.id}>
                                <td scope="row"><button type="button" className="btn btn-light" onClick={() => {
                                    localStorage.setItem("players", JSON.stringify(props.players.filter((item: any) => item.id !== player.id)))
                                    props.setPlayers(props.players.filter((item: any) => item.id !== player.id))
                                }}>X</button></td>
                                <td>{player.score == props.scoreMax ? <i className="fa-regular fa-star" style={{ color: "#FFD43B" }} /> :
                                    <i className="fa-regular fa-star" />}</td>
                                <td>{player.name}</td>
                                <td><button type="button" className="btn btn-light" onClick={() => {
                                    if (player.score > 0) {
                                        player.score--;
                                        localStorage.setItem("players", JSON.stringify(players))
                                        props.setPlayers(players);
                                        dispatch(userActions.setData(players))
                                        getScoreMax()
                                    }
                                }}>-</button></td>
                                <td>{player.score}</td>
                                <td><button type="button" className="btn btn-light" onClick={() => {
                                    player.score++;
                                    localStorage.setItem("players", JSON.stringify(players))
                                    props.setPlayers(players);
                                    dispatch(userActions.setData(players))
                                    getScoreMax()
                                }}>+</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
