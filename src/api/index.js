/*
包含N个接口请求的函数
 */
// ## 目录：
import ajax from './ajax'
//const BASE_URL = 'http://localhost:4000'
const BASE_URL='/api'
// [2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodCategorys = () => ajax(BASE_URL+'/category')
// [3、获取商品详情列表](#2获取食品分类列表)
export const reqGoodsDetails = () => ajax(BASE_URL+'/GoodsDetails')
