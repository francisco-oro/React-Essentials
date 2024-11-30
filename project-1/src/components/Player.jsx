import React, {useState} from 'react'

function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing(true);
    }
    let btnCaption = isEditing ? 'Save' : 'Edit';
    let playerName = isEditing ? <input autoFocus={true}/> : <span className={'player-name'}>{name}</span>
    return (<li>
        <span className={'player'}>
            {playerName}
            <span className={'player-symbol'}>{symbol}</span>
        </span>
        <button onClick={handleEdit}>{btnCaption}</button>
        </li>)
}

export default Player
