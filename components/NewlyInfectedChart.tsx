import React, { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
import Chart from "./Chart";

type Props = {};

const NewlyInfectedChart: FC<Props> = () => {
  const data = [
    {
      country: "AD",
      "hot dog": 44,
      "hot dogColor": "hsl(43, 70%, 50%)",
      burger: 115,
      burgerColor: "hsl(359, 70%, 50%)",
      sandwich: 158,
      sandwichColor: "hsl(82, 70%, 50%)",
      kebab: 1,
      kebabColor: "hsl(317, 70%, 50%)",
      fries: 61,
      friesColor: "hsl(8, 70%, 50%)",
      donut: 189,
      donutColor: "hsl(100, 70%, 50%)"
    },
    {
      country: "AE",
      "hot dog": 107,
      "hot dogColor": "hsl(328, 70%, 50%)",
      burger: 47,
      burgerColor: "hsl(138, 70%, 50%)",
      sandwich: 19,
      sandwichColor: "hsl(168, 70%, 50%)",
      kebab: 151,
      kebabColor: "hsl(129, 70%, 50%)",
      fries: 186,
      friesColor: "hsl(228, 70%, 50%)",
      donut: 7,
      donutColor: "hsl(100, 70%, 50%)"
    },
    {
      country: "AF",
      "hot dog": 48,
      "hot dogColor": "hsl(351, 70%, 50%)",
      burger: 82,
      burgerColor: "hsl(272, 70%, 50%)",
      sandwich: 79,
      sandwichColor: "hsl(316, 70%, 50%)",
      kebab: 58,
      kebabColor: "hsl(73, 70%, 50%)",
      fries: 134,
      friesColor: "hsl(156, 70%, 50%)",
      donut: 185,
      donutColor: "hsl(236, 70%, 50%)"
    },
    {
      country: "AG",
      "hot dog": 36,
      "hot dogColor": "hsl(189, 70%, 50%)",
      burger: 134,
      burgerColor: "hsl(108, 70%, 50%)",
      sandwich: 185,
      sandwichColor: "hsl(149, 70%, 50%)",
      kebab: 200,
      kebabColor: "hsl(333, 70%, 50%)",
      fries: 134,
      friesColor: "hsl(338, 70%, 50%)",
      donut: 61,
      donutColor: "hsl(333, 70%, 50%)"
    },
    {
      country: "AI",
      "hot dog": 152,
      "hot dogColor": "hsl(54, 70%, 50%)",
      burger: 120,
      burgerColor: "hsl(270, 70%, 50%)",
      sandwich: 105,
      sandwichColor: "hsl(35, 70%, 50%)",
      kebab: 87,
      kebabColor: "hsl(130, 70%, 50%)",
      fries: 86,
      friesColor: "hsl(213, 70%, 50%)",
      donut: 62,
      donutColor: "hsl(253, 70%, 50%)"
    },
    {
      country: "AL",
      "hot dog": 31,
      "hot dogColor": "hsl(221, 70%, 50%)",
      burger: 32,
      burgerColor: "hsl(299, 70%, 50%)",
      sandwich: 69,
      sandwichColor: "hsl(154, 70%, 50%)",
      kebab: 38,
      kebabColor: "hsl(14, 70%, 50%)",
      fries: 25,
      friesColor: "hsl(184, 70%, 50%)",
      donut: 38,
      donutColor: "hsl(283, 70%, 50%)"
    },
    {
      country: "AM",
      "hot dog": 9,
      "hot dogColor": "hsl(100, 70%, 50%)",
      burger: 169,
      burgerColor: "hsl(7, 70%, 50%)",
      sandwich: 89,
      sandwichColor: "hsl(333, 70%, 50%)",
      kebab: 76,
      kebabColor: "hsl(25, 70%, 50%)",
      fries: 83,
      friesColor: "hsl(250, 70%, 50%)",
      donut: 49,
      donutColor: "hsl(272, 70%, 50%)"
    }
  ];
  return (
    <Chart title="ผู้ติดเชื้อรายใหม่ รายวัน">
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "fries"
            },
            id: "dots"
          },
          {
            match: {
              id: "sandwich"
            },
            id: "lines"
          }
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
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