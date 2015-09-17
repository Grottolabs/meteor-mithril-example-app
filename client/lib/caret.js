caret = function () {
  var pos, length, e;
  return {
    save   : function () {
      e = document.activeElement;
      if (e.value) {
        pos = e.selectionStart;
        length = e.value.length
      }
    },
    restore: function () {
      m.redraw();
      if (length) {
        newPos = pos + e.value.length - length;
        e.setSelectionRange(newPos, newPos);
      }
    },
    redraw : function () {
      caret.save();
      caret.restore();
    },
    data   : function () {
      return {pos: pos, length: length}
    }
  }
}();