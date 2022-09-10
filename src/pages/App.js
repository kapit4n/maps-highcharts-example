import './App.css';
import React, { useState } from 'react'
import BoliviaMapContainer from '../containers/WorldMapContainer';
import WorldMapContainer from '../containers/BoliviaMapContainer';
import BarChart from '../components/BarChart';
import TabContainer from '../components/TabContainer';
import TabHeader from '../components/TabHeader';
import LineChart from '../components/LineChart';

const TAB_INDEX = 'index'
const TAB_BOLIVIA = 'bolivia'
const TAB_CHARTS = 'charts'
const TAB_BAR_CHART = 'barchart'

function App() {

  const [selectedTab, setSelectedTab] = useState('index')

  return (
    <div>
      <TabHeader tabNames={[TAB_INDEX, TAB_BOLIVIA, TAB_CHARTS, TAB_BAR_CHART]} selectedTab={selectedTab} onChange={setSelectedTab} />
      
      <TabContainer tabKey={TAB_INDEX} selectedTab={selectedTab}>
        <WorldMapContainer />
      </TabContainer>

      <TabContainer tabKey={TAB_BOLIVIA} selectedTab={selectedTab}>
          <BoliviaMapContainer />
      </TabContainer>

      <TabContainer tabKey={TAB_CHARTS} selectedTab={selectedTab}>
        <BarChart></BarChart>
      </TabContainer>

      <TabContainer tabKey={TAB_BAR_CHART} selectedTab={selectedTab}>
        <LineChart categories={['cat1']} data1={[1, 2, 3]} data2={[4, 5, 6]} data3={[1, 4, 7]}/>
      </TabContainer>
    
    </div>
  );
}

export default App;
