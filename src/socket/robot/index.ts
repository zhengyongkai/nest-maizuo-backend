import dict from './dict';

export const map = new Map(Object.entries(dict));

export function getAutoMessage(key: string) {
  return {
    date: new Date(),
    from: 'Robot',
    fromId: -1,
    ...map.get(key),
  };
}

export function getEmptyMessage() {
  return {
    date: new Date(),
    from: 'Robot',
    fromId: -1,
    type: 'text',
    title: '不知道主人你在说什么，请输入关键词吧~',
  };
}

export function getOrderMessage(data) {
  const obj = {
    date: new Date(),
    from: 'Robot',
    fromId: -1,
    title: '订单详情',
  };
  if (data) {
    return {
      ...obj,
      data,
      type: 'order',
    };
  } else {
    return {
      ...obj,
      title: '找不到对应单号~',
      type: 'text',
    };
  }
}
