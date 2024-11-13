/**
 * 报错返分
 * @param {用户名} username
 * @param {密码} password
 * @param {软件id} soft_id
 * @param {报错题目的图片ID} pic_id
 * @returns 报错后返回结果
 */
function ReportError(username, password, soft_id, pic_id) {
    var headers = {
        Connection: "Keep-Alive",
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)",
    };
    var datas = {
        id: pic_id, //报错题目的图片ID
        user: username,
        pass: password,
        softid: soft_id,
    };
    r = http.post(
        "http://upload.chaojiying.net/Upload/ReportError.php",
        (data = datas),
        (headers = headers),
    );
    return r.body.json();
}

/**
 * 查询用户点数
 * @param {用户名} username
 * @param {密码} password
 * @returns
 */
function GetScore() {
    var datas = {
        user: "Syndred",
        pass: "a75306537",
    };
    r = http.post("http://upload.chaojiying.net/Upload/GetScore.php", (data = datas));
    return r.body.json();
}

res = GetScore();
console.log("返回结果:", res);
console.log("返回代码:", res.err_no);
console.log("返回信息:", res.err_str);
console.log("题分:", res.tifen);
console.log("锁定题分:", res.tifen_lock);
