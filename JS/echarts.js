// 调用时候要用echarts(D)，D的数值改成你要用来放柱状图的div的id
D="echarts"
function echartsD(s){
          // 数据
          var data = [
     { name: '仓山区', value: 222},
     { name: '福清市', value: 651 },
     { name: '鼓楼区', value: 78 },
     { name: '晋安区', value: 164 },
     { name: '连江县', value: 288 },
     { name: '罗源县', value: 138 },
     { name: '马尾区', value: 147 },
     { name: '闽侯县', value: 396 },
     { name: '闽清县', value: 219 },
     { name: '平潭县', value: 215 },
     { name: '台江区', value: 54 },
     { name: '永泰县', value: 240 },
     { name: '长乐区', value: 485 }
 ];
 

 // 获取放置图表的 DOM 元素
 var chartContainer = document.getElementById(s);

 // 初始化 ECharts 图表
 var myChart = echarts.init(chartContainer);

 // 准备柱状图数据
 var names = data.map(function (item) {
     return item.name;
 });
 var values = data.map(function (item) {
     return item.value;
 });

 // 配置柱状图选项
 var option = {
     title: {
         text: '各区域旅游景点数量',
         left: 'center'
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     xAxis: {
         type: 'category',
         data: names
     },
     yAxis: {
         type: 'value',
         name: '数量'
     },
     series: [{
         type: 'bar',
         data: values,
         label: {
             show: true,
             position: 'top'
         }
     }]
 };

 // 使用配置项设置图表
 myChart.setOption(option);
}
    