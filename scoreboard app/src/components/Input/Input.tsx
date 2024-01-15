import React from 'react'
import { UserCreate } from '../../interface/user.interface';
import './Input.scss'
export default function Input(props: any) {
    return (
        <div className='input'>
            <form className='form' onSubmit={(e) => {
                e.preventDefault();
                let user: UserCreate = {
                    name: (e.target as any).name.value
                }
                props.addUser(user);
            }}>
                <input className='form-control' type="text" name="name" />
                <button className='btn btn-light' type="submit">
                    Add
                </button>
            </form>

        </div>
    )
}
