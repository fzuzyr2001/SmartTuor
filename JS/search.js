function  search1(){
//输入提示
let autoOptions = {
    input: "tipinput"
};

AMap.plugin(['AMap.PlaceSearch','AMap.AutoComplete'], function(){
    let auto = new AMap.AutoComplete(autoOptions);
    let placeSearch = new AMap.PlaceSearch({
        map: map
    });  //构造地点查询类
    auto.on("select", select);//注册监听，当选中某条记录时会触发
    function select(e) {
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name);  //关键字查询查询
    }
});
}