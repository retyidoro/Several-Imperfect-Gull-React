import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Several Imperfect Gull</title>
        <meta property="og:title" content="Several Imperfect Gull" />
      </Helmet>
      <div className="home-container1 bg-teal-500"></div>
      <h1 className="bg-purple-500">Heading</h1>
    </div>
  )
}

export default Home
