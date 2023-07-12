import { request } from "../utils/request"
// 获取导航
export function listNav() {
  return request({
    url: "/nav/get",
    method: "POST"
  })
}
// 获取新闻列表
export function queryNews(data) {
  return request({
    url: "/news/get",
    method: "POST",
    data
  })
}
// 获取新闻详情
export function newsDetail(data) {
  return request({
    url: "/news/detail",
    method: "POST",
    data
  })
}

// 获取产品列表
export function getProduct(data){
  return request({
    url:"/product/getlist",
    method:"post",
    data
  })
}
export function getProductDetail(data){
  return request({
    url:"/product/detail",
    method:"post",
    data
  })
}