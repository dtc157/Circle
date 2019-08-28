//封装操作localstorage本地存储的方法

var Cookies = {
  //存储
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  //取出数据
  get(key) {
    return localStorage.getItem(key);
  },
  // 删除数据
  remove(key) {
    localStorage.removeItem(key);
  }

}

// 暴露给外部访问
export default Cookies
