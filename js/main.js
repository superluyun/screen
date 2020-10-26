window.onload = function(){
	function bar(){
		var myChart = echarts.init(document.getElementById('bar'),'macarons');
		var option = {
			title:{
				text:'{a|柱状图}',
				left: "center",
				// right:'50%'
				textStyle:{
					rich:{
						a:{
							fontSize:24
							// color:'red'
							// margin:"0 auto"
						}
					}
				}
			},
			tooltip: {},
			grid:{
				show:true,
				left:24,
				right:0,
				bottom:20,
				backgroundColor:'transparent',
				borderColor: 'transparent',
				// top:,
			},
			xAxis: {
				data: ["A","B","C","D","E","F","E","G","H"],
				axisLabel:{
					color:'rgba(255,255,255,0.5)'
				}
			},
			yAxis: {
				axisLabel:{
					color:'rgba(255,255,255,0.5)'
				}
			},
			series: [{
				name: '',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20,10,30,50,60,10],
				barWidth: 25,
				itemStyle:{
					barBorderRadius:5
				},
			}]
		};
		myChart.setOption(option);
		window.addEventListener('resize',function(){
			myChart.resize()
		})
	}
	bar()

}