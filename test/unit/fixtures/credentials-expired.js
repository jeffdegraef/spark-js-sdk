/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 */

'use strict';

/* eslint camelcase: [0] */

module.exports = {
  access_token: 'EXPIREDACCESSTOKEN',
  token_type: 'Bearer',
  expires: Date.now() - 1000000,
  expires_in: 3599,
  refresh_token: 'REFRESHTOKEN',
  refresh_token_expires: Date.now() + 2000000,
  refresh_token_expires_in: 35999
};
