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
// var num = dialogs.input("请输入几号场");
// var total = dialogs.input("请输入可选场数（一行出现的预约按钮数）");
var arr = className("android.widget.Button").text("点击预约").find();
while (arr.length <= 0) {
    click(680, 778);
    sleep(200);
    arr = className("android.widget.Button").text("点击预约").find();
}
sleep(200);
circleOrder(3, 20);

// 验证码识别函数
function PostPic(img) {
    var headers = {
        Connection: "Keep-Alive",
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)",
    };

    img_base64 = images.toBase64(img);
    img.recycle(); // 回收图片，注意 caputerScreen()返回的图片不需要回收，可把此行注释掉。

    var datas = {
        codetype: 1004,
        user: "Syndred",
        pass: "a75306537",
        softid: "cf1301ed6ae298d5840b3fc54ba96727",
        file_base64: img_base64,
    };
    r = http.post(
        "http://upload.chaojiying.net/Upload/Processing.php",
        (data = datas),
        (headers = headers),
    );

    return r.body.json();
}
// 订场函数
function order() {
    // 获取控件对象
    // var targetView = className("android.widget.Image").findOne();

    // // 截取控件内容
    // var viewImg = captureView(targetView);

    // // 保存截图到文件
    // images.save(viewImg, "/sdcard/target_view.png");

    // // 显示提示信息
    // toast("控件截图已保存到 /sdcard/target_view.png");

    sleep(500);
    captureScreen("/sdcard/" + 1 + ".png");
    var src = images.read("/sdcard/1.png");
    var clip = images.clip(src, 830, 1400, 400, 200);
    images.save(clip, "/sdcard/clip.png");
    sleep(100);
    var img = images.read("/sdcard/clip.png"); //读取图片要确保路径正确
    res = PostPic(img);
    setText(res.pic_str);
    sleep(100);
    click("确定");
    className("android.widget.Button").text("确定").clickable(true).depth(12).findOne().click();
}

// 订多个时间段
function circleOrder(num, total) {
    for (let i = num - 1; i < arr.length; i += total) {
        // 验证码输入错误判断
        if (className("android.widget.TextView").text("验证码错误！").exists()) {
            click("确定");

            console.log("验证码输入错误");
        }
        arr[i].click();
        order();
        sleep(500);
    }
}
