import React, { useState } from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import TabOptions from '../../components/common/tabOptions'
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';

interface IProps{
  tab: string,
  activeTab: string,
}

const Home:React.FC = () => {
  const [activeTab, setActiveTab] =  useState("Nightlife");
  return (
    <div>
        <Header />
        {/* @ts-ignore */}
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* different screen changes acc to tab */}
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  )
};

const getCorrectScreen = (tab:string) =>{
  switch(tab){
    case "Delivery":
      return <Delivery />
      case "Dining Out":
        // @ts-ignore
        return <DiningOut />
    case "Nightlife":
        // @ts-ignore
      return <NightLife />
      default:
        return <Delivery />
  }
}

export default Home;