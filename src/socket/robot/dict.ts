export default {
  hello: {
    type: 'selected',
    title: '欢迎使用,输入订单号+[订单号]可以直接查询当前订单,例如 单号+3123',
    data: [
      {
        title: '怎么使用',
        url: '',
        id: 'QA1001',
      },
      {
        title: '使用的语言',
        url: '',
        id: 'QA1002',
      },
    ],
  },
  QA1001: {
    type: 'text',
    title: '输入订单号+[订单号]可以直接查询当前订单,例如 单号+3123',
  },
  QA1002: {
    type: 'text',
    title: 'React+React-tooltik+Antd-Mobile+SocketIo+NESTJS',
  },
};
