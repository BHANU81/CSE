import React, { useState } from 'react'

function State() {
    const[total, settotal] = useState(0);
    return (
        <div>
          <button onClick = {() => { settotal(total + 1) }}
          >Bhadhta hua</button>
          <button onClick = {() => { settotal(total - 1) }}
          >Ghatta hua</button>
          <h2>{total}</h2>
        </div>
    )
}

export default State