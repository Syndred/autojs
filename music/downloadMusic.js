// // 读取文件内容
// var fileContent = files.read("/sdcard/music.txt");

// // 将内容按行分割
// var songsArray = fileContent.split(",\n");

// // 输出数组以确认结果
// log(songsArray);

// 输入框输入
// 等待输入框出现
var input = className("android.widget.EditText").text("请输入要搜索的内容").findOne();

// 点击输入框
input.click();

sleep(500);
// 设置输入框的文本
input.setText("后退周杰伦");
sleep(500);
var centerX = (1075 + 1243) / 2;
var centerY = (133 + 329) / 2;

// 点击按钮中心
click(centerX, centerY);

// 点击音源一
// var button = className("android.view.View").descContains("音源一").findOne();
// button.click();

// 获取歌曲列表
var songs = className("android.view.View").scrollable(true).findOne().children();
console.log(songs[0].contentDescription);
