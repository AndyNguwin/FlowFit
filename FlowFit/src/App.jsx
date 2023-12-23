import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="flex flex-col gap-10">
      <NavBar></NavBar>
      
      <Grid numItems={2} numItemsSm={1} numItemsLg={2} className="gap-2">
        <Col numColSpan={1}>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 1</Metric>
          </Card>
        </Col>
        
        <Card>
          <Text>Title</Text>
          <Metric>KPI 2</Metric>
        </Card>

        <Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 3</Metric>
          </Card>
        </Col>
        
        <Card>
          <Text>Title</Text>
          <Metric>KPI 4</Metric>
        </Card>
        
        <Card>
          <Text>Title</Text>
          <Metric>KPI 5</Metric>
        </Card>
      </Grid>

    </div>
  )
}


export default App;

