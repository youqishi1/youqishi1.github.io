var posts=["2024/07/04/测试/","2024/07/04/小王/","2024/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };