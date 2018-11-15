import React, { useState, useEffect, useRef } from 'react'
import styled from 'react-emotion'

const Door = ({videoSrc, imgSrc, text}) => {
  const [doorOpen, setDoorOpen] = useState(false)
  const videoTag = useRef(null)

  useEffect(
    () => {
      if(doorOpen && videoTag.current){
        videoTag.current.currentTime = 0
        videoTag.current.play()
      }
    }, [doorOpen]
  )

  const handleDoorRest = () => {
    if(!doorOpen && videoTag.current){
      videoTag.current.pause()
    }
  }

  return (
    <Wrapper onClick={()=>{setDoorOpen(!doorOpen)}}>
      <DoorFront
        style={doorOpen ? {
          transform: 'rotate3d(0,1,0, -90deg)',
          zIndex: 99
        } : undefined}
        onTransitionEnd={handleDoorRest}
      />
      <VideoWrapper>
        {
          videoSrc &&
          <Video innerRef={videoTag} onEnded={() => {setDoorOpen(!doorOpen)}}>
            <source src={videoSrc}/>
          </Video>
        }
        {
          imgSrc &&
          <Img src={imgSrc} />
        }
        {
          text &&
          <Text>{text}</Text>
        }
      </VideoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  flex: '1 1 auto',
  // width: '33.3333%',
  position: 'relative',
  // perspective: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const DoorFront = styled('div')({
  background: 'rgba(0, 0, 0, 1)',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  transition: 'transform 400ms',
  transformOrigin: 'left',
  zIndex: 10
})

const VideoWrapper = styled('div')({
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // flex: '1 1 auto',
  height: '100%',
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
})

const Video = styled('video')({
  objectFit: 'cover',
  // flex: '1 1 auto',
  height: '100%',
  minWidth: '100%'
})

const Img = styled('img')({
  height: '100%',
  minWidth: '100%',
  objectFit: 'cover',
})

const Text = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background:'rgb(70, 63, 194)',
  color: '#ffffff',
  fontFamily: 'sans-serif',
  fontSize: '4vh',
  padding: '3vh',
  fontWeight: 600,
  textAlign: 'center'
})

export default Door
