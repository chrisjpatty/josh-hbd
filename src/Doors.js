import React from 'react'
import styled from 'react-emotion'
import Door from './Door'
//Import videos
import beeSrc from './videos/bee.mp4'
import beyonceSrc from './videos/beyonce.mp4'
import marilynSrc from './videos/marilyn.mp4'
import mrRogersSrc from './videos/mr_rogers.mp4'
import oldManSrc from './videos/oldman.mp4'
import reindeerSrc from './videos/reindeer.mp4'
//Import photos
import mhSrc from './img/mookheidi.jpg'
import jcSrc from './img/jc.jpg'
import disneySrc from './img/disney.jpg'

const Doors = () => {

  return (
    <Wrapper>
      <Door videoSrc={beyonceSrc} />
      <Door text="Hey best friend," />
      <Door videoSrc={oldManSrc} />
      <Door imgSrc={mhSrc} />
      <Door text="you're older this year than the last," />
      <Door videoSrc={reindeerSrc} />
      <Door videoSrc={beeSrc} />
      <Door imgSrc={jcSrc} />
      <Door videoSrc={mrRogersSrc} />
      <Door videoSrc={marilynSrc} />
      <Door imgSrc={disneySrc} />
      <Door text="and so I say, sure love ya." />
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
  overflow: 'hidden'
})

export default Doors
