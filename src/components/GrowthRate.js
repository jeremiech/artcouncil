import {serviceUser} from "./sideComponent"
import { BarChart,Pie,PieChart,Bar, ResponsiveContainer } from 'recharts';


import React from 'react'

function GrowthRate() {
  return (
    <div className="gRate">
        <div>
        <h2>Growth Rate Rwanda Art Council</h2>
        </div>
        <div className="arrange-Chart">
        <div className="bar">
        <h2>Grapgical BarChart Of category</h2>
        <ResponsiveContainer width="90%" height="80%">
        <BarChart width={150} height={30} data={serviceUser}>
          <Bar dataKey="value" fill="orange" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="pie">
    <h2>Grapgical Evolution Of category</h2>
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            isAnimationActive={false}
            endAngle={0}
            data={serviceUser}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          {/* <Tooltip/> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
        </div>
    </div>
  )
}

export default GrowthRate