import React from 'react'
import Slide from '../layout/Slide'
import Community from '../community/Community'
import Group from '../group/Group'
import Success from '../success/Success'

const Home = () => {
  return (
    <div>
      <Slide />
        <Community />
        <Group />
        <Success />
    </div>
  )
}

export default Home
