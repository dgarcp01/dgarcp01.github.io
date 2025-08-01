
import ReactECharts  from 'echarts-for-react';


// Propiedades(parámetros de entrada)

//     x: las coordenadas x
//     y: las coordenadas y
//     height: la altura de la gráfica
//     width: el ancho de la gráfica


export default function LineChart({ title, x, y, height, width, colors,range,labels }) {
  
  const default_colors = ['#8B5CF6','#10B981','#FACC15']
  if (!colors)
    colors = default_colors;
  if (!labels)
    labels = y.map((item, idx) => " ")
  if (!range)
    range= [null, null]
  
  const series = y.map((item,idx) => ({
                                      data: item,
                                      name: labels[idx],
                                      type: 'line',
                                      showSymbol: false,
                                      smooth: false,                                                                       
                                      color:colors[idx]
                                    }))
  const option = {
    title: {
      text: title,
      textStyle: {
        color: '#AAAAAA', // color del título
        fontSize: 15,
        //fontWeight: 'bold',
      },
    },
    legend: {
      textStyle: {
        color: '#AAAAAA', // color del título
        fontSize: 15,
        //fontWeight: 'bold',
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      top: 60,
      bottom: 60,
      
      //containLabel: true,
      //backgroundColor: '#000000', // ⚙️ solo visible si usas un tema custom
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: x,
      name:"t",
        
    },
    yAxis: {
      type: 'value',
      min: range[0],
      max: range[1], 
    },
    series: series,

  dataZoom: [
    // {
    //   type: 'inside',   // Zoom con scroll o gesto pinch
    //   xAxisIndex: 0,
    // },
    // {
    //   type: 'slider',   // Barra de zoom visible
    //   xAxisIndex: 0,
    // },
    {
      type: 'inside',   // Zoom vertical con scroll
      yAxisIndex: 0,
    },
    // {
    //   type: 'slider',   // Barra de zoom vertical
    //   yAxisIndex: 0,
    // },
  ],
  };

  return <ReactECharts option={option} style={{ height: height, width: width}} />;
}