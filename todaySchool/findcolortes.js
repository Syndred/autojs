auto.waitFor();
//等待截屏权限申请并同意
threads.start(function () {
    packageName("com.android.systemui").text("立即开始").waitFor();
    text("立即开始").click();
});
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

//截图
var img =  captureScreen("/sdcard/" + 2 + ".png");

//获取在点(100, 100)的颜色值
var color = images.pixel(img, 479, 232);
//显示该颜色值
console.log(colors.toString(color));

//循环找色，找到红色(#ff0000)时停止并报告坐标
// while(true){
//     var img = captureScreen();
//     var point = findColor(img, "#ff0000");
//     if(point){
//         toast("找到红色，坐标为(" + point.x + ", " + point.y + ")");
//     }
// }