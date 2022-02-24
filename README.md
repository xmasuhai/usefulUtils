# usefulUtils

- 原文章链接：[dev.to/ruppysuppy/…](https://dev.to/ruppysuppy/6-killer-utility-functions-in-javascript-1j68)
- 文章包含的代码片段，没有任何副作用，可以放心拷贝使用

## 1. 校验一个元素是否在可视区域内

- 网页开发时，常常需要了解某个元素是否进入了"视口"（`viewport`），即用户能不能看到它
- 以使用 `IntersectionObserver` 这个 API
- `options` 参数能自定义 `Observer` 的行为
- `threshold` 属性一般用的比较多
- 它定义的是 `Observer` 触发时，需要出现在可视区域中元素的可见百分比
- 参考：
  - [IntersectionObserver API 使用教程- 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)
  - [Intersection Observer MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
  - [如何使用IntersectionObserver实现无限滚动加载的vue自定义指令](https://juejin.cn/post/7068075514748993550?utm_source=gold_browser_extension)

> `ifEnterView.ts`

```ts
```

## 2. 识别设备

- 通常使用 `window.navigator.userAgent` 获取当前设备的细节来进行识别
- [userAgent是什么?如何根据它判断浏览器信息](https://juejin.cn/post/7068080777195421709?utm_source=gold_browser_extension)

> `identifyClient.ts`

```ts
```

## 3. 隐藏元素

- CSS 隐藏元素通常有两种方法：
  - 可以使用 `style.visibility` 切换元素的可见性
  - 从整个渲染流中移除该元素，使用 `style.display` 属性
- 参考文章
  - [CSS 隐藏元素的八种方法](https://juejin.cn/post/6844903456545701901)

```css
* {
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  display: none;
  position: absolute;
  clip: rect(top, right, bottom, left);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px); /*/ inset() / polygon();*/
  z-index: -1000;
  transform: scaleY(0);
}
```

> `hideElement.ts`

```ts
```

- 如果不从渲染流中移除元素，只是隐藏可见性，元素仍然会被绘制，且占用视图空间
- 当渲染长列表时，配合上方 `IntersectionObserver` 这个 API
  - 使用 `style.display` 属性来隐藏不在可视区域内的元素，能较大提升渲染性能
  - [如何使用IntersectionObserver实现无限滚动加载的vue自定义指令](https://juejin.cn/post/7068075514748993550?utm_source=gold_browser_extension)


## 4. 获取 `URL` 上的 `query` 参数

- 推荐使用 `URL` 这个对象
- `URL` 接口用于解析，构造，规范化和编码 `URLs`
- 用它可以很方便获取链接上的 `query` 参数
- 参考文章
  - [`URLSearchParams.get() MDN`](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/get)

> `getURLQuery.ts`

```ts
```

## 5. 简单的数据深拷贝

- 利用 `JSON` 方法先转化成 `string` 再转换为对象

> `dataCopy.ts`

```ts
```

## 6. `waitMacroAsync` 方法

- 虽然有 `setTimeout` 方法来实现等待并异步执行，但是该方法不会返回 `Promise`
- 如果用在 `async` 函数中不是很方便，因此，可以自己实现一个 `waitMacroAsync` 方法

> `waitMacroAsync.ts`

```ts
```
