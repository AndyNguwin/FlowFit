import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="flex flex-col gap-10">
      <NavBar></NavBar>
      <WelcomeMessage/>
      {/* <HeatMap/> */}

    </div>
  )
}


export default App;

function WelcomeMessage(){
  return (
    <div className="griddy">
      <Card id="welcome">
        <Metric>Good morning! 🌞 Welcome to a new day of fitness and wellness. Let's make it count! 💪 #MorningMotivation #FitnessGoals 🔥🔥🔥</Metric>
      </Card>
    </div>
  )
}
