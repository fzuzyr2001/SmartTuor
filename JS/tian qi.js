//天气预报
function weatherShow(){
let map = new AMap.Map('container', {
    resizeEnable: true,
    center: [119.28, 26.08],
    zoom: 12
});
AMap.plugin('AMap.Weather', function() {
    let weather = new AMap.Weather();
    //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
    weather.getLive('福州市', function(err, data) {
        if (!err) {
            let str = [];
            str.push('<h4 >实时天气' + '</h4><hr>');
            str.push('<p>城市/区：' + data.city + '</p>');
            str.push('<p>天气：' + data.weather + '</p>');
            str.push('<p>温度：' + data.temperature + '℃</p>');
            str.push('<p>风向：' + data.windDirection + '</p>');
            str.push('<p>风力：' + data.windPower + ' 级</p>');
            str.push('<p>空气湿度：' + data.humidity + '</p>');
            str.push('<p>发布时间：' + data.reportTime + '</p>');
            let marker = new AMap.Marker({map: map, position: map.getCenter()});
            let infoWin = new AMap.InfoWindow({
                content: '<div class="info" style="position:inherit;margin-bottom:0;">'+str.join('')+'</div><div class="sharp"></div>',
                isCustom:true,
                offset: new AMap.Pixel(0, -37)
            });
            infoWin.open(map, marker.getPosition());
            marker.on('mouseover', function() {
                infoWin.open(map, marker.getPosition());
            });
        }
    });
    //未来4天天气预报
    weather.getForecast('福州市', function(err, data) {
        if (err) {return;}
        let str = [];
        for (let i = 0,dayWeather; i < data.forecasts.length; i++) {
            dayWeather = data.forecasts[i];
            str.push(dayWeather.date+' <span class="weather">'+dayWeather.dayWeather+'</span> '+ dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
        }
        document.getElementById('forecast').innerHTML = str.join('<br>');
    });
});
    document.getElementById("weather1").style.display="block";

}