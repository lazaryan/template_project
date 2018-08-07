if (typeof Element.prototype.addEventListener === 'undefined') {
    Element.prototype.addEventListener = function (e, callback) {
      e = 'on' + e;
      return this.attachEvent(e, callback);
    };
};
