import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Data from "./data.js"

function App() {

  const trip = Data.map((entry) => {
    return (
      < Entry 
        key={entry.id}
        {...entry}
        // img={data.img}
        // title= {data.title}
        // country={data.country}
        // googleMapsLink = {data.googleMapsLink}
        // dates = {data.dates}
        // text = {data.text}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {trip}
        {/* < Entry 
          img = {{ 
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji"
          }}
          title = "Mount Fuji"
          country = "Japan"
          googleMapsLink = "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
          dates = "12 Jan, 2021 - 24 Jan, 2021"
          text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        /> */}
        
      </main>
    </>
  )
}

export default App
