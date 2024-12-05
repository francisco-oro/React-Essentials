import React, {useState} from 'react'

function Player({name, symbol, isActive}) {
    const [player, setPlayer] = useState(name)
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing((isEditing) => !isEditing);
    }
    const handleChange = (event) => {
        setPlayer(event.target.value);
    }

    let btnCaption = isEditing ? 'Save' : 'Edit';
    let playerName = isEditing ? <input
        autoFocus={true}
        required={true}
        defaultValue={name}
        onChange={handleChange} /> :
        <span className={'player-name'}>{player}</span>
    return (<li className={isActive ? 'active' : ''}>
        <span className={'player'}>
            {playerName}
            <span className={'player-symbol'}>{symbol}</span>
        </span>
        <button onClick={handleEdit}>{btnCaption}</button>
        </li>)
}

export default Player
