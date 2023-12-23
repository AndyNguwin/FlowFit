import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="flex flex-col gap-10">
      <NavBar></NavBar>
      
      <div>
        <div className="grid grid-cols-3 grid-rows-4">

          <div class="Welcome Message" className="col-span-2">
            <Card className="bg-content-card">
              <Metric>Good morning! 🌞 Welcome to a new day of fitness and wellness. Let's make it count! 💪 #MorningMotivation #FitnessGoals 🔥🔥🔥</Metric>
            </Card>
          </div>
    
          <div class="Heatmap" className="col-span-1">
            <Card className="bg-content-card">
              <Metric>Heatmap</Metric>
            </Card>
          </div>
          
          <div class="" className="col-span-2 ">
            <Card className="bg-content-card">
              <Metric>Weekly Calendar</Metric>
            </Card>
          </div>

          <div class="" className="col-span-1">
            <Card className="bg-content-card">
              <Metric>Graph 1</Metric>
            </Card>
          </div>

          <div class="Week" className="col-span-2">
            <Card className="bg-content-card">
              <Metric>Days of the Week</Metric>
            </Card>
          </div>

          <div class="" className="col-span-1">
            <Card className="bg-content-card">
              <Metric>Graph 2</Metric>
            </Card>
          </div>

        </div>

      </div>


    </div>
  )
}


export default App;

