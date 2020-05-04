import React from 'react'

const Tweet = ({name, message,}) => {
  return (
    <div>
          <div className='tweet'>
              <h1>{name}</h1>
              <p>{message}</p>
      </div>
    </div>
  );
}

export default Tweet
