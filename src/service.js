/**
 * @file service.js
 * @author deo
 *
 * service
 */

import { get } from './util/request';

export const getUserInfo = () => get(`/user`);
