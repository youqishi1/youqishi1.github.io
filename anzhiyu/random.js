var posts=["2024/08/14/青龙面版保活文字教程/","2024/08/08/VPS代码合集/","2024/08/05/小猫疑难杂症01/","2024/08/01/网站收藏夹/","2024/07/30/B站看视频收藏01/","2024/07/04/小猫使用教程/","2024/07/04/小王/","2024/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };