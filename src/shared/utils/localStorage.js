export default {
  set(key, value) { // 存储单个属性
    window.localStorage[key] = value;
  },
  get(key) { // 读取单个属性
    return window.localStorage[key];
  },
  setObject(key, value) { // 存储对象，以JSON格式
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  getObject(key) { // 读取对象，以JSON格式
    return JSON.parse(window.localStorage.getItem(key));
  }
};
