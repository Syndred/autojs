var open = open();
if (open) {
    // engines.execScriptFile("/sdcard/脚本/noOpenTest.js", { delay: 5000 });
    engines.execScriptFile("/sdcard/脚本/noOpenOrder.js", { delay: 5000 });
}
// 打开今日校园
function open() {
    // setScreenMetrics(1260, 2800);
    app.launchApp("今日校园");
    while (!click("场馆预约"));
    var isEnter = className("android.widget.Button").depth("16").text("去预约").findOne(10000);
    if (isEnter) {
        var toOrder = className("android.widget.Button").depth("16").text("去预约").untilFind();
        // toOrder[6].click();
        toOrder[3].click();
        // 处理周三报错
        if (
            className("android.widget.TextView")
                .packageName("com.wisedu.cpdaily")
                .depth("13")
                .text("未获取到场次信息，请联系管理员!")
                .exists()
        ) {
            click("确定");
        }
        return true;
    } else {
        back();
    }
}
