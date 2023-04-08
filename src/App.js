import MainTitle from "./components/MainTitle";
import ProjectDescription from "./components/ProjectDescription";
import ChartComponent from "./components/ChartComponent";
import * as AlcoholChartData from './data/AlcoholChartData';
import * as CigarettesChartData from './data/CigarettesChartData';
import * as JunkFoodChartData from './data/JunkFoodChartData';
import * as FruitChartData from './data/FruitChartData';
import * as TravelSlovakiaChartData from './data/TravelSlovakiaChartData';
import * as TravelForeignChartData from './data/TravelForeignChartData';
import * as TransportChartData from './data/TransportChartData';
import * as PopUpChartData from './data/PopUpChartData';
import * as BudgetChartData from './data/BudgetChartData';

import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import SubTitle from "./components/SubTitle";
import BarChartComponent from "./components/BarChartComponent";
import PopUpChart from "./components/PopUpChart";
import ProjectSummary from "./components/ProjectSummary";
import Footer from "./components/Footer";
import DoghnutChartComponent from "./components/DoghnutChartComponent";
import 'reactjs-popup/dist/index.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function App() {
  return (
    <div>
      <div>
        <MainTitle text={'Prieskum: sociálne dopady pandémie'}></MainTitle>
        <ProjectDescription></ProjectDescription>
      </div>

      <SubTitle text={'Zmenila sa konzumácia alkoholu a tabaku u respondentov?'}></SubTitle>

      <div style={{ height: "50vh", margin: 'auto 10%' }}>
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <ChartComponent data={AlcoholChartData.data} options={AlcoholChartData.options}></ChartComponent>
          <ChartComponent data={CigarettesChartData.data} options={CigarettesChartData.options}></ChartComponent>
        </div>
      </div>

      <SubTitle text={'Ako sa zmenila konzumácia potravín u respondentov?'}></SubTitle>

      <div style={{ height: "50vh", margin: 'auto 10%' }}>
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <ChartComponent data={JunkFoodChartData.data} options={JunkFoodChartData.options}></ChartComponent>
          <ChartComponent data={FruitChartData.data} options={FruitChartData.options}></ChartComponent>
        </div>
      </div>


      <SubTitle text={'Ako zmenila sa frekvencia využívania dopravných prostriedkov?'}></SubTitle>

      <div style={{ height: "80vh", margin: 'auto 10%' }}>
        <BarChartComponent data={TransportChartData.data} options={TransportChartData.options}></BarChartComponent>


      </div>

      <SubTitle text={'Mali respondenti v pláne vycestovať na dovolenku od zavedenia opatrení?'}></SubTitle>
      <div style={{ height: "50vh", margin: 'auto 10%' }}>
        <div style={{ height: "50vh", display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <ChartComponent data={TravelForeignChartData.data} options={TravelForeignChartData.options}></ChartComponent>
          <ChartComponent data={TravelSlovakiaChartData.data} options={TravelSlovakiaChartData.options}></ChartComponent>
        </div>
      </div>

      <PopUpChart data={PopUpChartData.data} options={PopUpChartData.options}></PopUpChart>

      <SubTitle text={'Ako pandémia respondentom zmenila rozpočet na dovolenky?'}></SubTitle>
      <div style={{ height: "80vh", margin: 'auto 10%' }}>
        <DoghnutChartComponent data={BudgetChartData.data} options={BudgetChartData.options}></DoghnutChartComponent>
      </div>



      
      <div style={{ backgroundColor: '#2B3467' }}>
        <SubTitle text={'Aký mala pandémia psychologický vplyv na našich respondentov?'}></SubTitle>
        <ProjectSummary></ProjectSummary>
      </div>

      <div style={{ backgroundColor: '#2B5267' }}>
        <Footer></Footer>
      </div>

    </div>

  );
}

export default App;
