/**
 * 初始查看器
 * 1.可传入初始化参数去除地图默认组件
 * 2.默认底图为bing，可通过imageryProvider修改
 */
const viewer = new Cesium.Viewer('cesium-viewer',{
  baseLayerPicker: false,
  timeline: false,
  vrButton: false,
  geocoder: false,
  homeButton: false,
  sceneModePicker: false,
  selectionIndicator: false,
  navigationHelpButton: false,
  fullscreenButton: false
})
// 显示帧数信息
viewer.scene.debugShowFramesPerSecond = true