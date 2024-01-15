import React, { useEffect, useState } from 'react'
import './Navbar.scss'
export default function Navbar(props:any) {
    let players = props.players;
    let [total, setTotal] = useState(0);
    useEffect(()=>{
        let number = 0;
        number = players.reduce((value: number, curr: any) =>{
            return value+= curr.score
        } , 0);
        setTotal(number)
    },[players])
  return (
    <div className='Navbar'>
        <div className='nav_info'>
            <table>
                <tr>
                    <td>Players:</td>
                    <td>{props.players.length}</td>
                </tr>
                <tr>
                    <td>Total Score:</td>
                    <td>{total}</td>
                </tr>
            </table>
        </div>
        <h1>BẢNG ĐIỂM</h1>
    </div>
  )
}
