auto.waitFor();
//等待截屏权限申请并同意
setScreenMetrics(1260, 2800);
threads.start(function () {
    packageName("com.android.systemui").text("立即开始").waitFor();
    text("立即开始").click();
});
// app.launchApp("BOSS直聘");
// sleep(1000);
// textContains("附近").waitFor();
// sleep(1000);
// click(300, 860);

// sleep(2000);

// for (let i = 0; i < 10; i++) {
//     var arr = className("android.widget.LinearLayout").clickable(true).find();
//     for (let j = 0; j < arr.length - 1; j++) {
//         sleep(1000);
//         arr[j].click();
//         sleep(1000);
//         click(600, 2674);
//         sleep(1000);
//         back();
//         sleep(1000);
//         back();
//         sleep(1000);
//     }
//     swipe(600, 2500, 700, 200, 1000);
// }
var arr = className("android.widget.LinearLayout").clickable(true).find();
arr[1].click();
sleep(1000);
        click(600, 2674);
        sleep(1000);
        back();
        sleep(1000);
        back();
        sleep(1000);
back();
sleep(1000);
swipe(600, 2300, 700, 600, 1500);
var arr = className("android.widget.LinearLayout").clickable(true).find();
arr[0].click();
sleep(1000);

back();
sleep(1000);
// click(787, 2688);
// sleep(800);
// click(655, 766);
// sleep(2000);
// click(645, 560);
// var arr = className("android.widget.LinearLayout").clickable(true).find();
// for (let j = 0; j < arr.length-1; j++) {
//     sleep(1000);
//     arr[j].click();
//     sleep(1000);
//     click(600, 2674);
//     sleep(1000);
//     back();
//     sleep(1000);
//     back();
//     sleep(1000);
// }
