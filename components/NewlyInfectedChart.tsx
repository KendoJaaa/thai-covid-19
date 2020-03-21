import React, { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
import Chart from "./Chart";

type Data = {
  date: string,
  confirmed: number
  recovered: number
  inhospital: number
  died: number  
  crosscheck: number  
  new: number  
  critical: number
}

type Propsja = {
  dataSet: Data[]
};

function NewlyInfectedChart ({ dataSet }: Propsja) {

  const formattedData = dataSet.map((data) => ({
    date: data.date,
    amount: data.new,
    amountColor: "hsl(43, 70%, 50%)"
  }))

  return (
    <Chart title="ผู้ติดเชื้อรายใหม่ รายวัน">
      <ResponsiveBar
        data={formattedData}
        keys={["amount"]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "วันที่",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "จำนวน(คน)",
          legendPosition: "middle",
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Chart>
  );
};


export default NewlyInfectedChart