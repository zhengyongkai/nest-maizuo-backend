# 使用之前需要注意

### 需要自己注册支付宝开发者平台获取沙盒支付

然后 打开 `src\constants\common.ts` 进行填写

沙盒支付平台为 `https://openhome.alipay.com/develop/sandbox/account`

### 导入数据库后执行 保证定时器能够执行

```js
SET GLOBAL event_scheduler = ON;
```

### 环境文件

```js
src\env\dev.ts
src\env\prod.ts
```

### 生产环境执行 （记得先修改 `src\env\dev.ts`）

```js
npm run start:prod
```

### 开发环境则执行

```js
npm run start
```
