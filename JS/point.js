function addpoint(){
  function pointData(){ 
    var positions = [ [119.28,26.08]];
    for(let i=0;i<features.length;i++){
        positions.push(features[i].geometry.coordinates);
    }
    return positions
}

var map = new AMap.Map('container', {
    zoom: 9,
    viewMode:'3D',
    center: [119.28, 26.08],  //设置地图中心点经纬度
    zoom:13, //地图的缩放比例
    resizeEnable: true,
    mapStyle: 'amap://styles/whitesmoke',
    showLabel: false,
    showIndoorMap: false,
});
map.on('complete', function () {
  // 创建 AMap.LabelsLayer 图层
  var layer = new AMap.LabelsLayer({
      zooms: [3, 20],
      zIndex: 1000,
      collision: false
  });

  // 将图层添加到地图
  map.add(layer);
  var markers = [];
  var positions = pointData();
  var icon = {
      type: 'image',
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
      size: [6, 9],
      anchor: 'bottom-center',
  };

  for (var i = 0; i < positions.length; i++) {
      var curPosition = positions[i];
      var curData = {
          position: curPosition,
          icon
      };

      var labelMarker = new AMap.LabelMarker(curData);

      markers.push(labelMarker);

      // 给marker绑定事件
      labelMarker.on('mouseover', function(e){
          var position = e.data.data && e.data.data.position;

          if(position){
              normalMarker.setContent(
                  '<div class="amap-info-window">'
                      + position +
                      '<div class="amap-info-sharp"></div>' +
                  '</div>');
              normalMarker.setPosition(position);
              map.add(normalMarker);
          }
      });

      labelMarker.on('mouseout', function(){
          map.remove(normalMarker);
      });
  }

  // 一次性将海量点添加到图层
 
  layer.add(markers);
 
  


  // 普通点
  var normalMarker = new AMap.Marker({
      anchor: 'bottom-center',
      offset: [0, -15],
  });
});


}


 