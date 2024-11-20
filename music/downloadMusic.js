// 读取文件内容
var fileContent = files.read("/sdcard/music.txt");

// 将内容按行分割
var songsArray = fileContent.split(",\n");

// 输出数组以确认结果
// log(songsArray);

let success = 0;
let fail = 0;
for (var i = 0; i < songsArray.length; i++) {
  searchMusic(songsArray[i]);
  sleep(1000);
  let cleanedText = getMusicList();
  if (songsArray[i] === cleanedText) {
    className("android.view.View").depth(10).findOne().click();
    downloadMusic();
    success++;
    console.log("下载成功：" + songsArray[i], success, fail);

    continue;
  } else {
    // 点击音源一;
    var button = className("android.view.View").descContains("音源一").findOne();
    button.click();
    sleep(500);
    let cleanedText = getMusicList();
    if (songsArray[i] === cleanedText) {
      className("android.view.View").depth(10).findOne().click();
      downloadMusic();
      success++;
      console.log("下载成功：" + songsArray[i], success, fail);
      continue;
    } else {
      click(991, 231);
      fail++;
      console.log("下载失败：" + songsArray[i], success, fail);
      continue;
    }
  }
}

// 输入内容
function searchMusic(content) {
  // 输入框输入
  // 等待输入框出现
  var input = className("android.widget.EditText").text("请输入要搜索的内容").findOne();

  // 点击输入框
  input.click();

  sleep(500);
  // 设置输入框的文本
  input.setText(content);
  sleep(500);
  var centerX = (1075 + 1243) / 2;
  var centerY = (133 + 329) / 2;

  // 点击搜索按钮中心
  click(centerX, centerY);
}

// 获取歌曲列表
function getMusicList() {
  var songs = className("android.view.View").depth(10).findOne();
  return songs.contentDescription.replace(/\n/g, "");
}

// 点击下载按钮下载
function downloadMusic() {
  var downloadButton = className("android.widget.ImageView").depth(11).untilFind();
  for (let element of downloadButton) {
    if (element.contentDescription === "极高音质（320K MP3）") {
      element.click();
      className("android.view.View").descContains("音源一").waitFor();
      sleep(500);
      click(991, 231);
      return;
    }
  }
}
