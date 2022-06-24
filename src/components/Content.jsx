import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Content = () => {

  //consumer
  const theme = useContext(ThemeContext);

  return (
    <div className='content' style={theme}>

      <p>
        The game is centered around Geralt of Rivia, who is found unconscious 
        and suffering from amnesia at the beginning of the game. 
        He gradually learns that he was a renowned witcher, and 
        that he has friends and enemies almost everywhere (who do not suffer from amnesia...).
        Through the player's actions, he will redefine those 
        relationships and choose his path in the political intrigue that surrounds him.
      </p>

    </div>
  )
}

export default Content