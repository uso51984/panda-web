import Mock from 'mockjs';
import articleAPI from './article';
// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
});

// 文章相关
Mock.mock('/test2323', 'get', articleAPI.getList);

export default Mock;
