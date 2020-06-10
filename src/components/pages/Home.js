import React from 'react'
import Slide from '../layout/Slide'
import Community from '../community/Community'
import Group from '../group/Group'
import Projects from '../pages/Projects'
import Success from '../success/Success'

const Home = () => {
  return (
    <div>
      <Slide />
        {/* <Community />
        <Group /> */}
        <Projects />
        <Success />
    </div>
  )
}

export default Home
