var PAGE_OBJECT_MAP = {
   "home": "/home"
};
module.exports.getPageObjects = function (pageName) {
   return require(PAGE_OBJECT_MAP[pageName]);
};