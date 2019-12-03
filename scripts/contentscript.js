
(function(window, document, undefined) {
  if (!window) {
    return;
  }

  function _addEvent(object, type, callback) {
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
        return;
    }

    object.attachEvent('on' + type, callback);
  }

  function _handleKeyEvent(e) {
    keyCode = e.which || e.keyCode

    // F12 keyCode is 123
    if (keyCode == 123) {
      e.returnValue = false;
    }
  }

  _addEvent(document, 'keypress', _handleKeyEvent);
  _addEvent(document, 'keydown', _handleKeyEvent);
  _addEvent(document, 'keyup', _handleKeyEvent);

}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);

