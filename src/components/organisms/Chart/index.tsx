import React, { useRef, useEffect } from "react";
import * as echarts from "echarts/core";
import { BarChart, PieChart } from "echarts/charts";
import { GridComponent, ToolboxComponent, TitleComponent, TooltipComponent } from "echarts/components";
import { SVGRenderer, SkiaChart } from "@wuba/react-native-echarts";
import { getCategoryChart } from "../../../utils/strings";

echarts.use([SVGRenderer, BarChart, PieChart, GridComponent, ToolboxComponent, TitleComponent, TooltipComponent]);

export const ChartBar = ({ record }: any) => {
  const skiaRef = useRef<any>(null);
  useEffect(() => {
    const option = {
      title: {
        text: record.title,
      },
      grid: {
        left: 0,
        right: "5%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: {
        type: "category",
        splitLine: { show: false },
        axisLabel: { showMaxLabel: true },
        data: record.labels.map((item: any, index: any) => {
          return getCategoryChart(item);
        }),
      },
      xAxis: {
        type: "value",
        axisLabel: { show: false },
      },
      series: [
        {
          type: "bar",
          label: {
            show: true,
            position: "insideLeft",
            formatter: function (params: any) {
              return "R$ " + params.value;
            },
          },
          data: record.data.map((item: any, index: any) => {
            return {
              value: item,
              itemStyle: {
                color: record.title === "Saidas" ? "red" : "green",
              },
            };
          }),
        },
      ],
    };

    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: 380,
        height: parseInt((record.labels.length / 3).toFixed()) * 100,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [record]);

  return <SkiaChart ref={skiaRef} />;
};

export const ChartPie = ({ record, defaultColor }: any) => {
  const skiaRef = useRef<any>(null);

  const color = (item: any) => {
    if (defaultColor) {
      return;
    }
    return { color: item.name === "Essencial" ? "green" : "red" };
  };
  useEffect(() => {
    const option = {
      title: {
        text: record.title,
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          type: "pie",
          radius: "70%",
          data: record.data.map((item: any, index: any) => {
            return {
              value: item.value,
              name: item.name,
              itemStyle: color(item),
            };
          }),
          label: {
            show: true,
            position: "left",
          },
        },
      ],
    };

    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: 400,
        height: 300,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [record]);

  return <SkiaChart ref={skiaRef} />;
};
