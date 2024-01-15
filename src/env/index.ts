import Dev from './dev';
import Prod from './prod';

export default function () {
  const env = process.env.RUNNING_ENV;
  return env === 'dev' ? Dev : Prod;
}
