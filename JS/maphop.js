//地图热点
function mapHop(){
let map = new AMap.Map('container', {
    resizeEnable: true,
    center: [119.28, 26.08],
    zoom: 13,
    isHotspot: true
});
let placeSearch = new AMap.PlaceSearch();  //构造地点查询类
let infoWindow=new AMap.AdvancedInfoWindow({});
map.on('hotspotover', function(result) {
    placeSearch.getDetails(result.id, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            placeSearch_CallBack(result);
        }
    });
});
//回调函数
function placeSearch_CallBack(data) { //infoWindow.open(map, result.lnglat);
    let poiArr = data.poiList.pois;
    let location = poiArr[0].location;
    infoWindow.setContent(createContent(poiArr[0]));
    infoWindow.open(map,location);
}
function createContent(poi) {  //信息窗体内容
    let s = [];
    s.push('<div class="info-title">'+poi.name+'</div><div class="info-content">'+"地址：" + poi.address);
    s.push("电话：" + poi.tel);
    s.push("类型：" + poi.type);
    s.push('<div>');
    return s.join("<br>");
}
}