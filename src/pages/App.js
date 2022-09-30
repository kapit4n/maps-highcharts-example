import './App.css';
import React, { useState } from 'react'
import WorldMapContainer from '../containers/WorldMapContainer';
import BoliviaMapContainer from '../containers/BoliviaMapContainer';
import BarChart from '../components/BarChart';
import TabContainer from '../components/TabContainer';
import TabHeader from '../components/TabHeader';
import LineChart from '../components/LineChart';
import GridContainer from '../components/GridContainer';
import Card from '../components/Card'
import LoaderTwo from '../components/loading/LoaderTwo';
import LoaderThree from '../components/loading/LoaderThree';
import LoaderFour from '../components/loading/LoaderFour';
import LoaderSix from '../components/loading/LoaderSix';
import BoxContainer from '../decorator/BoxContainer';

const TAB_INDEX = 'indexz'
const TAB_BOLIVIA = 'bolivia'
const TAB_CHARTS = 'charts'
const TAB_BAR_CHART = 'barchart'
const TAB_GRID = 'index'
const TAB_LOADING = 'loading'

const description = {
  golang: "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
  scala: "Scala is a strong statically typed general-purpose programming language which supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are aimed to address criticisms of Java.",
  react: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  d3: "D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards. It is the successor to the earlier Protovis framework.",
  javascript: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
}

function App() {

  const [selectedTab, setSelectedTab] = useState('index')

  return (
    <div>
      <TabHeader tabNames={[TAB_INDEX, TAB_BOLIVIA, TAB_CHARTS, TAB_BAR_CHART, TAB_GRID, TAB_LOADING]} selectedTab={selectedTab} onChange={setSelectedTab} />

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
        <LineChart categories={['cat1']} data1={[1, 2, 3]} data2={[4, 5, 6]} data3={[1, 4, 7]} />
      </TabContainer>

      <TabContainer tabKey={TAB_GRID} selectedTab={selectedTab}>
        <GridContainer>
          <Card title="GOLANG" description={description.golang} />
          <Card title="SCALA" description={description.scala} />
          <Card title="D3" description={description.d3} />
          <Card title="JAVASCRIPT" description={description.javascript} />
          <Card title="REACT" description={description.react} />
        </GridContainer>
      </TabContainer>
      <TabContainer tabKey={TAB_LOADING} selectedTab={selectedTab}>
        <div>
          <h2>Loader Two</h2>
          <BoxContainer component={<LoaderTwo />} />   
          <h2>Loader Three</h2>
          <BoxContainer component={<LoaderThree />} />   
          <h2>Loader Four</h2>
          <BoxContainer component={<LoaderFour />} />   
          <h2>Loader Five Does not work</h2>
          LoaderFive(react-bones)
          <h2>Loader Six</h2>
          <BoxContainer component={<LoaderSix />} />   
        </div>
      </TabContainer>
    </div>
  );
}

export default App;
