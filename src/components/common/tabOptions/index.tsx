import React from 'react'
import "./TabOptions.css";

type TabOptionProps = {
  activeTab: string,
  setActiveTab: string
}

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "#FCEEC0",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
  {
    id: 2,
    name: "Dining Out",
    active_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    backdrop: "#E5F3F3",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
  {
    id: 3,
    name: "Nightlife",
    active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "#EDf4FF",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
]

const TabOptions = ({activeTab, setActiveTab}:TabOptionProps) => {
  return (
    <div className='tab-options'>
      <div className="max-width options-wrapper">
        {tabs.map((tab)=>{
          return(
            // @ts-ignore
            <div onClick={() => setActiveTab(tab.name)} className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}>
              <div className="tab-image-container absolute-center" style={{backgroundColor: `${activeTab===tab.name ? tab.backdrop: ""}`}}>
                <img src={activeTab===tab.name ? tab.active_img:tab.inactive_img} alt={tab.name} className="tab-image" />
              </div>
              {/* name */}
               <div className="tab-name">{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabOptions