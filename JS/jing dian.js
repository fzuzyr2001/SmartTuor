//兴趣点搜索，右边显示景点数据
function searchJingDian(){
let map = new AMap.Map("container", {
    resizeEnable: true
});
AMap.service(["AMap.PlaceSearch"], function() {
    //构造地点查询类
    let placeSearch = new AMap.PlaceSearch({
        pageSize: 50, // 单页显示结果条数
        pageIndex: 1, // 页码
        city: "福州", // 兴趣点城市
        citylimit: true,  //是否强制限制在设置的城市内搜索
        map: map, // 展现结果的地图实例
        panel: "panel", // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    });
    //关键字查询
    placeSearch.search('景点');
});

}