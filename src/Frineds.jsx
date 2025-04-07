import React, { useEffect, useState } from 'react'
import Friend from './Friend';

function Frineds() {
    const [friend, setFriend] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
  return (
    <div>
        <h2>Friends: {friend.length}</h2>
        {
            friend.map((frnd) => <Friend key={frnd.id} friend={frnd} />)
        }
    </div>
  )
}

export default Frineds