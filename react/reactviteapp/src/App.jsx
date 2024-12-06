import React from 'react'
import Student from './Student'
import Statehandling from './statehandling'

function App() {
  // const studentdata = [{
  //   image: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
  //   name: "abhishek gupta",
  //   roll: "12345",
  //   college: "Abes engineering College"
  // },
  // {

  //   image: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
  //   name: "ashish gupta",
  //   roll: "123456",
  //   college: "Abes engineering College"
  // },
  // {
  //   image: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
  //   name: "alok gupta",
  //   roll: "1234567",
  //   college: "Abes engineering College"
  // }
  // ]
  return (
    
  //     <div>
  //       <h2 style={{ color: 'red' }}>Hello react JS</h2>
  //       <div>

  //         {/* < Student image={<img src={'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'}height={100}width={100}/>} name="abhishek Gupta" roll="12345"college="ABES Engineering College"/>/* */}
  //         {

  //           studentdata.map((ele) => {
  //             return (
  //               <Student data={ele} />

  //             )
  //           })
      //     }
      //   </div>
      // </div>
      <Statehandling/>
      )
}
export default App