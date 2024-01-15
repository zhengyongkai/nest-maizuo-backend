export const messageMap = new Map();

messageMap.set(
  '1',
  formatRobotMessage(
    'text',
    'React+React-tooltik+Antd-Mobile+SocketIo+NESTJS',
    null,
  ),
);
messageMap.set(
  '2',
  formatRobotMessage(
    'text',
    '输入单号+[单号]即可查看订单，比如 单号+3123',
    null,
  ),
);

function formatRobotMessage(type, title, data) {
  return {
    type,
    title,
    date: new Date(),
    from: 'Robot',
    fromId: -1,
    data,
  };
}

function formatChatMessage(type, title, from, fromId, data) {
  return {
    type,
    title,
    date: new Date(),
    from,
    fromId,
    data,
  };
}

export const helloMessage = formatChatMessage(
  'text',
  '您好，您可以用微信扫一扫，扫描一下卡片背面的兑票二维码或者微信关注公众号“卖座网”--点击“用户中心”--“我的订单”--“卖座券”-- 添加新的卖座券 -- 输入卡号密码进行查询即可，感谢您对卖座网的理解与支持，祝您生活愉快。',
  'Robot',
  -1,
  null,
);

export const robotMessage = formatChatMessage(
  'selected',
  '欢迎使用,输入票号可以直接查询当前订单',
  'Robot',
  -1,
  [
    {
      title: '使用语言？',
      url: '',
      id: '1',
    },
    {
      title: '怎么查看订单',
      url: '',
      id: '2',
    },
  ],
);
