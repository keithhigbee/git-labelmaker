/**
 *    Returns a promise that attempts to read the git config file and resolve with the contents
 *    @dep    {node}     fs
 *    @return {Promise}  Promise that resolves with the contents of the git config file
 */
"use strict";
const parse = require('parse-git-config');
const err = require("../utils/errorGenerator")("GIT_CONFIG")("Unable to read git config file!")

module.exports = () => {
  return new Promise((res, rej)=>{
    parse(function (e, config) {
      if (e) rej(err);
      res( config );
    });
  });
};
