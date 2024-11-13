// 定义一个函数用于提取歌曲信息
function extractSongsFromUI() {
  var songsList = []; // 用于保存歌曲信息的数组
  var canScroll = true; // 控制是否可以继续滑动

  while (canScroll) {
    var c = className("android.widget.RelativeLayout").find(); // 找到所有相应的相对布局
    if (c.empty()) {
      toast("没找到╭(╯^╰)╮");
      break;
    }

    for (var i = 0; i < c.size(); i++) {
      var contentDescription = c[i].getContentDescription(); // 获取内容描述

      // 过滤掉内容描述为null或为空
      if (contentDescription && contentDescription.length > 0) {
        let songTitle = ""; // 用于保存提取的歌曲名称

        // 过滤条件
        if (contentDescription.includes("VIP")) {
          songTitle = contentDescription.split("VIP")[0].trim(); // 取VIP前面的内容
        } else if (contentDescription.includes("蝰蛇母带")) {
          songTitle = contentDescription.split("蝰蛇母带")[0].trim(); // 取蝰蛇母带前面的内容
        } else if (contentDescription.includes("MV")) {
          songTitle = contentDescription.split("MV")[0].trim(); // 取MV前面的内容
        } else {
          songTitle = contentDescription; // 直接取整个内容
        }

        if (songTitle) {
          songsList.push(songTitle); // 保存提取的歌曲名称
        }
      }
    }

    // 滑动操作：向上滑动
    var result = swipe(500, 2200, 500, 600, 400); // 适当的滑动参数，根据实际屏幕调整
    if (result == null || result == false) {
      canScroll = false; // 如果滑动失败，停止循环
      console.log(songsList);
    }

    // 等待一段时间以确保页面更新
    sleep(1000);
  }

  // 去重处理
  var uniqueSongsList = [];
  for (var i = 0; i < songsList.length; i++) {
    if (uniqueSongsList.indexOf(songsList[i]) === -1) {
      uniqueSongsList.push(songsList[i]); // 将不重复的歌曲名称添加到去重后的数组中
    }
  }

  // 导出数据到文本文件
  var text = uniqueSongsList.join(",\n"); // 将去重后的数组转换为字符串
  files.write("/sdcard/music.txt", text); // 将内容写入文件
  toast("已导出 " + uniqueSongsList.length + " 首歌曲信息至 /sdcard/music.txt");

  // 用其他应用查看文件
  app.viewFile("/sdcard/music.txt");
}

// 执行数据提取函数
extractSongsFromUI();
