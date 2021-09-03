parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

    // if we cannot find the module within our internal map or
    // cache jump to the current global require ie. the last bundle
    // that was added to the page.
    var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
    if (!jumped && currentRequire) {
      return currentRequire(name, true);
    }

    // If there are other bundles on this page the require from the
    // previous one is saved to 'previousRequire'. Repeat this as
    // many times as there are bundles until the module is found or
    // we exhaust the require chain.
    if (previousRequire) {
      return previousRequire(name, true);
    }

    // Try the node require function if it exists.
    if (nodeRequire && typeof name === 'string') {
      return nodeRequire(name);
    }

    var err = new Error('Cannot find module \'' + name + '\'');
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (key === "default" || key === "__esModule") {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });
  return dest;
}

var $parcel$global = this;
// ASSET: ..\node_modules\@popperjs\core\lib\index.js
var $vePw$exports = {};
// ASSET: ..\node_modules\@popperjs\core\lib\enums.js
var $XHUo$exports = {};
var $XHUo$export$top = 'top';
$XHUo$exports.top = $XHUo$export$top;
var $XHUo$export$bottom = 'bottom';
$XHUo$exports.bottom = $XHUo$export$bottom;
var $XHUo$export$right = 'right';
$XHUo$exports.right = $XHUo$export$right;
var $XHUo$export$left = 'left';
$XHUo$exports.left = $XHUo$export$left;
var $XHUo$export$auto = 'auto';
$XHUo$exports.auto = $XHUo$export$auto;
var $XHUo$export$basePlacements = [$XHUo$export$top, $XHUo$export$bottom, $XHUo$export$right, $XHUo$export$left];
$XHUo$exports.basePlacements = $XHUo$export$basePlacements;
var $XHUo$export$start = 'start';
$XHUo$exports.start = $XHUo$export$start;
var $XHUo$export$end = 'end';
$XHUo$exports.end = $XHUo$export$end;
var $XHUo$export$clippingParents = 'clippingParents';
$XHUo$exports.clippingParents = $XHUo$export$clippingParents;
var $XHUo$export$viewport = 'viewport';
$XHUo$exports.viewport = $XHUo$export$viewport;
var $XHUo$export$popper = 'popper';
$XHUo$exports.popper = $XHUo$export$popper;
var $XHUo$export$reference = 'reference';
$XHUo$exports.reference = $XHUo$export$reference;
var $XHUo$export$variationPlacements = /*#__PURE__*/$XHUo$export$basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
}, []);
$XHUo$exports.variationPlacements = $XHUo$export$variationPlacements;
var $XHUo$export$placements = /*#__PURE__*/[].concat($XHUo$export$basePlacements, [$XHUo$export$auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
}, []); // modifiers that need to read the DOM

$XHUo$exports.placements = $XHUo$export$placements;
var $XHUo$export$beforeRead = 'beforeRead';
$XHUo$exports.beforeRead = $XHUo$export$beforeRead;
var $XHUo$export$read = 'read';
$XHUo$exports.read = $XHUo$export$read;
var $XHUo$export$afterRead = 'afterRead'; // pure-logic modifiers

$XHUo$exports.afterRead = $XHUo$export$afterRead;
var $XHUo$export$beforeMain = 'beforeMain';
$XHUo$exports.beforeMain = $XHUo$export$beforeMain;
var $XHUo$export$main = 'main';
$XHUo$exports.main = $XHUo$export$main;
var $XHUo$export$afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

$XHUo$exports.afterMain = $XHUo$export$afterMain;
var $XHUo$export$beforeWrite = 'beforeWrite';
$XHUo$exports.beforeWrite = $XHUo$export$beforeWrite;
var $XHUo$export$write = 'write';
$XHUo$exports.write = $XHUo$export$write;
var $XHUo$export$afterWrite = 'afterWrite';
$XHUo$exports.afterWrite = $XHUo$export$afterWrite;
var $XHUo$export$modifierPhases = [$XHUo$export$beforeRead, $XHUo$export$read, $XHUo$export$afterRead, $XHUo$export$beforeMain, $XHUo$export$main, $XHUo$export$afterMain, $XHUo$export$beforeWrite, $XHUo$export$write, $XHUo$export$afterWrite];
$XHUo$exports.modifierPhases = $XHUo$export$modifierPhases;

function $B1zX$export$default(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function $QiNa$export$default(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function $wsKO$export$isElement(node) {
  var OwnElement = $QiNa$export$default(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function $wsKO$export$isHTMLElement(node) {
  var OwnElement = $QiNa$export$default(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function $wsKO$export$isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = $QiNa$export$default(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function $D2nT$var$applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function $D2nT$var$effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var $D2nT$export$default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: $D2nT$var$applyStyles,
  effect: $D2nT$var$effect,
  requires: ['computeStyles']
};

function $QS9h$export$default(placement) {
  return placement.split('-')[0];
}

var $W8bA$var$round = Math.round;

function $W8bA$export$default(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if ($wsKO$export$isHTMLElement(element) && includeScale) {
    // Fallback to 1 in case both values are `0`
    scaleX = rect.width / element.offsetWidth || 1;
    scaleY = rect.height / element.offsetHeight || 1;
  }

  return {
    width: $W8bA$var$round(rect.width / scaleX),
    height: $W8bA$var$round(rect.height / scaleY),
    top: $W8bA$var$round(rect.top / scaleY),
    right: $W8bA$var$round(rect.right / scaleX),
    bottom: $W8bA$var$round(rect.bottom / scaleY),
    left: $W8bA$var$round(rect.left / scaleX),
    x: $W8bA$var$round(rect.left / scaleX),
    y: $W8bA$var$round(rect.top / scaleY)
  };
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function $wDsK$export$default(element) {
  var clientRect = $W8bA$export$default(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function $x3Ja$export$default(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && $wsKO$export$isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}

function $S6rb$export$default(element) {
  return $QiNa$export$default(element).getComputedStyle(element);
}

function $rK11$export$default(element) {
  return ['table', 'td', 'th'].indexOf($B1zX$export$default(element)) >= 0;
}

function $sJcE$export$default(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (($wsKO$export$isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function $IVKl$export$default(element) {
  if ($B1zX$export$default(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    $wsKO$export$isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $sJcE$export$default(element) // fallback

  );
}

function $CUhI$var$getTrueOffsetParent(element) {
  if (!$wsKO$export$isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  $S6rb$export$default(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function $CUhI$var$getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && $wsKO$export$isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = $S6rb$export$default(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = $IVKl$export$default(element);

  while ($wsKO$export$isHTMLElement(currentNode) && ['html', 'body'].indexOf($B1zX$export$default(currentNode)) < 0) {
    var css = $S6rb$export$default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function $CUhI$export$default(element) {
  var window = $QiNa$export$default(element);
  var offsetParent = $CUhI$var$getTrueOffsetParent(element);

  while (offsetParent && $rK11$export$default(offsetParent) && $S6rb$export$default(offsetParent).position === 'static') {
    offsetParent = $CUhI$var$getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ($B1zX$export$default(offsetParent) === 'html' || $B1zX$export$default(offsetParent) === 'body' && $S6rb$export$default(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || $CUhI$var$getContainingBlock(element) || window;
}

function $PMyK$export$default(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var $FuL6$export$max = Math.max;
var $FuL6$export$min = Math.min;
var $FuL6$export$round = Math.round;

function $FbIu$export$default(min, value, max) {
  return $FuL6$export$max(min, $FuL6$export$min(value, max));
}

function $a0QL$export$default() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function $SCz0$export$default(paddingObject) {
  return Object.assign({}, $a0QL$export$default(), paddingObject);
}

function $sYkG$export$default(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// eslint-disable-next-line import/no-unused-modules
var $zJlD$var$toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
};

function $zJlD$var$arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = $QS9h$export$default(state.placement);
  var axis = $PMyK$export$default(basePlacement);
  var isVertical = [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = $zJlD$var$toPaddingObject(options.padding, state);
  var arrowRect = $wDsK$export$default(arrowElement);
  var minProp = axis === 'y' ? $XHUo$export$top : $XHUo$export$left;
  var maxProp = axis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = $CUhI$export$default(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = $FbIu$export$default(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function $zJlD$var$effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("production" !== "production") {
    if (!$wsKO$export$isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!$x3Ja$export$default(state.elements.popper, arrowElement)) {
    if ("production" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var $zJlD$export$default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: $zJlD$var$arrow,
  effect: $zJlD$var$effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
// eslint-disable-next-line import/no-unused-modules
var $ebtt$var$unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function $ebtt$var$roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: $FuL6$export$round($FuL6$export$round(x * dpr) / dpr) || 0,
    y: $FuL6$export$round($FuL6$export$round(y * dpr) / dpr) || 0
  };
}

function $ebtt$export$mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? $ebtt$var$roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = $XHUo$export$left;
  var sideY = $XHUo$export$top;
  var win = window;

  if (adaptive) {
    var offsetParent = $CUhI$export$default(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === $QiNa$export$default(popper)) {
      offsetParent = $sJcE$export$default(popper);

      if ($S6rb$export$default(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === $XHUo$export$top) {
      sideY = $XHUo$export$bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === $XHUo$export$left) {
      sideX = $XHUo$export$right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && $ebtt$var$unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function $ebtt$var$computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("production" !== "production") {
    var transitionProperty = $S6rb$export$default(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: $QS9h$export$default(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var $ebtt$export$default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: $ebtt$var$computeStyles,
  data: {}
};
// eslint-disable-next-line import/no-unused-modules
var $psGJ$var$passive = {
  passive: true
};

function $psGJ$var$effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = $QiNa$export$default(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, $psGJ$var$passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, $psGJ$var$passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, $psGJ$var$passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, $psGJ$var$passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var $psGJ$export$default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: $psGJ$var$effect,
  data: {}
};
var $M6e4$var$hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function $M6e4$export$default(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return $M6e4$var$hash[matched];
  });
}

var $lLmA$var$hash = {
  start: 'end',
  end: 'start'
};

function $lLmA$export$default(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return $lLmA$var$hash[matched];
  });
}

function $oJ75$export$default(node) {
  var win = $QiNa$export$default(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function $zwcJ$export$default(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return $W8bA$export$default($sJcE$export$default(element)).left + $oJ75$export$default(element).scrollLeft;
}

function $E2lw$export$default(element) {
  var win = $QiNa$export$default(element);
  var html = $sJcE$export$default(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + $zwcJ$export$default(element),
    y: y
  };
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function $yEje$export$default(element) {
  var _element$ownerDocumen;

  var html = $sJcE$export$default(element);
  var winScroll = $oJ75$export$default(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = $FuL6$export$max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = $FuL6$export$max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + $zwcJ$export$default(element);
  var y = -winScroll.scrollTop;

  if ($S6rb$export$default(body || html).direction === 'rtl') {
    x += $FuL6$export$max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function $j3Hf$export$default(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = $S6rb$export$default(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function $Qnrt$export$default(node) {
  if (['html', 'body', '#document'].indexOf($B1zX$export$default(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ($wsKO$export$isHTMLElement(node) && $j3Hf$export$default(node)) {
    return node;
  }

  return $Qnrt$export$default($IVKl$export$default(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function $m3DJ$export$default(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = $Qnrt$export$default(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = $QiNa$export$default(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], $j3Hf$export$default(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat($m3DJ$export$default($IVKl$export$default(target)));
}

function $rB0G$export$default(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function $M7BJ$var$getInnerBoundingClientRect(element) {
  var rect = $W8bA$export$default(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function $M7BJ$var$getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === $XHUo$export$viewport ? $rB0G$export$default($E2lw$export$default(element)) : $wsKO$export$isHTMLElement(clippingParent) ? $M7BJ$var$getInnerBoundingClientRect(clippingParent) : $rB0G$export$default($yEje$export$default($sJcE$export$default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function $M7BJ$var$getClippingParents(element) {
  var clippingParents = $m3DJ$export$default($IVKl$export$default(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf($S6rb$export$default(element).position) >= 0;
  var clipperElement = canEscapeClipping && $wsKO$export$isHTMLElement(element) ? $CUhI$export$default(element) : element;

  if (!$wsKO$export$isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return $wsKO$export$isElement(clippingParent) && $x3Ja$export$default(clippingParent, clipperElement) && $B1zX$export$default(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function $M7BJ$export$default(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? $M7BJ$var$getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = $M7BJ$var$getClientRectFromMixedType(element, clippingParent);
    accRect.top = $FuL6$export$max(rect.top, accRect.top);
    accRect.right = $FuL6$export$min(rect.right, accRect.right);
    accRect.bottom = $FuL6$export$min(rect.bottom, accRect.bottom);
    accRect.left = $FuL6$export$max(rect.left, accRect.left);
    return accRect;
  }, $M7BJ$var$getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function $auH8$export$default(placement) {
  return placement.split('-')[1];
}

function $dvfD$export$default(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? $QS9h$export$default(placement) : null;
  var variation = placement ? $auH8$export$default(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case $XHUo$export$top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case $XHUo$export$bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case $XHUo$export$right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case $XHUo$export$left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? $PMyK$export$default(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case $XHUo$export$start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case $XHUo$export$end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

// eslint-disable-next-line import/no-unused-modules
function $Moke$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? $XHUo$export$clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? $XHUo$export$viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? $XHUo$export$popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
  var altContext = elementContext === $XHUo$export$popper ? $XHUo$export$reference : $XHUo$export$popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = $M7BJ$export$default($wsKO$export$isElement(element) ? element : element.contextElement || $sJcE$export$default(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = $W8bA$export$default(referenceElement);
  var popperOffsets = $dvfD$export$default({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = $rB0G$export$default(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === $XHUo$export$popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === $XHUo$export$popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [$XHUo$export$right, $XHUo$export$bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [$XHUo$export$top, $XHUo$export$bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function $HhJi$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? $XHUo$export$placements : _options$allowedAutoP;
  var variation = $auH8$export$default(placement);
  var placements = variation ? flipVariations ? $XHUo$export$variationPlacements : $XHUo$export$variationPlacements.filter(function (placement) {
    return $auH8$export$default(placement) === variation;
  }) : $XHUo$export$basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("production" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[$QS9h$export$default(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

// eslint-disable-next-line import/no-unused-modules
function $rNoN$var$getExpandedFallbackPlacements(placement) {
  if ($QS9h$export$default(placement) === $XHUo$export$auto) {
    return [];
  }

  var oppositePlacement = $M6e4$export$default(placement);
  return [$lLmA$export$default(placement), oppositePlacement, $lLmA$export$default(oppositePlacement)];
}

function $rNoN$var$flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = $QS9h$export$default(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [$M6e4$export$default(preferredPlacement)] : $rNoN$var$getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat($QS9h$export$default(placement) === $XHUo$export$auto ? $HhJi$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = $QS9h$export$default(placement);

    var isStartVariation = $auH8$export$default(placement) === $XHUo$export$start;
    var isVertical = [$XHUo$export$top, $XHUo$export$bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? $XHUo$export$right : $XHUo$export$left : isStartVariation ? $XHUo$export$bottom : $XHUo$export$top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = $M6e4$export$default(mainVariationSide);
    }

    var altVariationSide = $M6e4$export$default(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var $rNoN$export$default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: $rNoN$var$flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function $jhaw$var$getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function $jhaw$var$isAnySideFullyClipped(overflow) {
  return [$XHUo$export$top, $XHUo$export$right, $XHUo$export$bottom, $XHUo$export$left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function $jhaw$var$hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = $Moke$export$default(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = $Moke$export$default(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = $jhaw$var$getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = $jhaw$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = $jhaw$var$isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = $jhaw$var$isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var $jhaw$export$default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: $jhaw$var$hide
};

function $aUNc$export$distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = $QS9h$export$default(placement);
  var invertDistance = [$XHUo$export$left, $XHUo$export$top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function $aUNc$var$offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = $XHUo$export$placements.reduce(function (acc, placement) {
    acc[placement] = $aUNc$export$distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var $aUNc$export$default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: $aUNc$var$offset
};

function $Pf8x$var$popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = $dvfD$export$default({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var $Pf8x$export$default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: $Pf8x$var$popperOffsets,
  data: {}
};

function $YGKJ$export$default(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function $RwXk$var$preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = $Moke$export$default(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = $QS9h$export$default(state.placement);
  var variation = $auH8$export$default(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = $PMyK$export$default(basePlacement);
  var altAxis = $YGKJ$export$default(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? $XHUo$export$top : $XHUo$export$left;
    var altSide = mainAxis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === $XHUo$export$start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === $XHUo$export$start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? $wDsK$export$default(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : $a0QL$export$default();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = $FbIu$export$default(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && $CUhI$export$default(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(min, tetherMin) : min, offset, tether ? $FuL6$export$max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? $XHUo$export$top : $XHUo$export$left;

      var _altSide = mainAxis === 'x' ? $XHUo$export$bottom : $XHUo$export$right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(_min, tetherMin) : _min, _offset, tether ? $FuL6$export$max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var $RwXk$export$default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: $RwXk$var$preventOverflow,
  requiresIfExists: ['offset']
};

function $uy7N$export$default(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function $Cbix$export$default(node) {
  if (node === $QiNa$export$default(node) || !$wsKO$export$isHTMLElement(node)) {
    return $oJ75$export$default(node);
  } else {
    return $uy7N$export$default(node);
  }
}

function $FCaM$var$isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function $FCaM$export$default(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = $wsKO$export$isHTMLElement(offsetParent);
  var offsetParentIsScaled = $wsKO$export$isHTMLElement(offsetParent) && $FCaM$var$isElementScaled(offsetParent);
  var documentElement = $sJcE$export$default(offsetParent);
  var rect = $W8bA$export$default(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ($B1zX$export$default(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    $j3Hf$export$default(documentElement)) {
      scroll = $Cbix$export$default(offsetParent);
    }

    if ($wsKO$export$isHTMLElement(offsetParent)) {
      offsets = $W8bA$export$default(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = $zwcJ$export$default(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// source: https://stackoverflow.com/questions/49875255
function $mxvt$var$order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function $mxvt$export$default(modifiers) {
  // order based on dependencies
  var orderedModifiers = $mxvt$var$order(modifiers); // order based on phase

  return $XHUo$export$modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function $mGsv$export$default(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function $JD7L$export$default(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var $nr2q$var$INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var $nr2q$var$MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var $nr2q$var$VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function $nr2q$export$default(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if ($XHUo$export$modifierPhases.indexOf(modifier.phase) < 0) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + $XHUo$export$modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + $nr2q$var$VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error($JD7L$export$default($nr2q$var$MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function $AjzX$export$default(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function $pDli$export$default(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var $rg1d$var$INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var $rg1d$var$INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var $rg1d$var$DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function $rg1d$var$areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function $rg1d$export$popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? $rg1d$var$DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, $rg1d$var$DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: $wsKO$export$isElement(reference) ? $m3DJ$export$default(reference) : reference.contextElement ? $m3DJ$export$default(reference.contextElement) : [],
          popper: $m3DJ$export$default(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = $mxvt$export$default($pDli$export$default([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("production" !== "production") {
          var modifiers = $AjzX$export$default([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          $nr2q$export$default(modifiers);

          if ($QS9h$export$default(state.options.placement) === $XHUo$export$auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = $S6rb$export$default(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!$rg1d$var$areValidElements(reference, popper)) {
          if ("production" !== "production") {
            console.error($rg1d$var$INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: $FCaM$export$default(reference, $CUhI$export$default(popper), state.options.strategy === 'fixed'),
          popper: $wDsK$export$default(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("production" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error($rg1d$var$INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $mGsv$export$default(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!$rg1d$var$areValidElements(reference, popper)) {
      if ("production" !== "production") {
        console.error($rg1d$var$INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var $rg1d$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator(); // eslint-disable-next-line import/no-unused-modules

var $hwU4$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default];
var $hwU4$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
  defaultModifiers: $hwU4$export$defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var $cujj$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default, $aUNc$export$default, $rNoN$export$default, $RwXk$export$default, $zJlD$export$default, $jhaw$export$default];
var $cujj$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
  defaultModifiers: $cujj$export$defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

$parcel$exportWildcard($vePw$exports, $XHUo$exports);
$parcel$exportWildcard($vePw$exports, {}); // eslint-disable-next-line import/no-unused-modules

$vePw$exports.createPopperBase = $rg1d$export$createPopper;
$vePw$exports.detectOverflow = $Moke$export$default;
$vePw$exports.popperGenerator = $rg1d$export$popperGenerator;
$vePw$exports.createPopper = $cujj$export$createPopper;
$vePw$exports.createPopperLite = $hwU4$export$createPopper;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const $xqrD$var$MAX_UID = 1000000;
const $xqrD$var$MILLISECONDS_MULTIPLIER = 1000;
const $xqrD$var$TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const $xqrD$var$toType = obj => {
  if (obj === null || obj === undefined) {
    return `${obj}`;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const $xqrD$var$getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * $xqrD$var$MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const $xqrD$var$getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = `#${hrefAttr.split('#')[1]}`;
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

const $xqrD$var$getSelectorFromElement = element => {
  const selector = $xqrD$var$getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const $xqrD$var$getElementFromSelector = element => {
  const selector = $xqrD$var$getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const $xqrD$var$getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $xqrD$var$MILLISECONDS_MULTIPLIER;
};

const $xqrD$var$triggerTransitionEnd = element => {
  element.dispatchEvent(new Event($xqrD$var$TRANSITION_END));
};

const $xqrD$var$isElement = obj => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

const $xqrD$var$getElement = obj => {
  if ($xqrD$var$isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

const $xqrD$var$typeCheckConfig = (componentName, config, configTypes) => {
  Object.keys(configTypes).forEach(property => {
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && $xqrD$var$isElement(value) ? 'element' : $xqrD$var$toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    }
  });
};

const $xqrD$var$isVisible = element => {
  if (!$xqrD$var$isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

const $xqrD$var$isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const $xqrD$var$findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return $xqrD$var$findShadowRoot(element.parentNode);
};

const $xqrD$var$noop = () => {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const $xqrD$var$reflow = element => {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

const $xqrD$var$getjQuery = () => {
  const {
    jQuery
  } = window;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

const $xqrD$var$DOMContentLoadedCallbacks = [];

const $xqrD$var$onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!$xqrD$var$DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        $xqrD$var$DOMContentLoadedCallbacks.forEach(callback => callback());
      });
    }

    $xqrD$var$DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

const $xqrD$var$isRTL = () => document.documentElement.dir === 'rtl';

const $xqrD$var$defineJQueryPlugin = plugin => {
  $xqrD$var$onDOMContentLoaded(() => {
    const $ = $xqrD$var$getjQuery();
    /* istanbul ignore if */

    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

const $xqrD$var$execute = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

const $xqrD$var$executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    $xqrD$var$execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration = $xqrD$var$getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener($xqrD$var$TRANSITION_END, handler);
    $xqrD$var$execute(callback);
  };

  transitionElement.addEventListener($xqrD$var$TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      $xqrD$var$triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


const $xqrD$var$getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  const listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const $xqrD$var$stripNameRegex = /\..*/;
const $xqrD$var$stripUidRegex = /::\d+$/;
const $xqrD$var$eventRegistry = {}; // Events storage

let $xqrD$var$uidEvent = 1;
const $xqrD$var$customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const $xqrD$var$customEventsRegex = /^(mouseenter|mouseleave)/i;
const $xqrD$var$nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function $xqrD$var$getUidEvent(element, uid) {
  return uid && `${uid}::${$xqrD$var$uidEvent++}` || element.uidEvent || $xqrD$var$uidEvent++;
}

function $xqrD$var$getEvent(element) {
  const uid = $xqrD$var$getUidEvent(element);
  element.uidEvent = uid;
  $xqrD$var$eventRegistry[uid] = $xqrD$var$eventRegistry[uid] || {};
  return $xqrD$var$eventRegistry[uid];
}

function $xqrD$var$bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      $xqrD$var$EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function $xqrD$var$bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (let i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            // eslint-disable-next-line unicorn/consistent-destructuring
            $xqrD$var$EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function $xqrD$var$findHandler(events, handler, delegationSelector = null) {
  const uidEventList = Object.keys(events);

  for (let i = 0, len = uidEventList.length; i < len; i++) {
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function $xqrD$var$normalizeParams(originalTypeEvent, handler, delegationFn) {
  const delegation = typeof handler === 'string';
  const originalHandler = delegation ? delegationFn : handler;
  let typeEvent = $xqrD$var$getTypeEvent(originalTypeEvent);
  const isNative = $xqrD$var$nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function $xqrD$var$addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if ($xqrD$var$customEventsRegex.test(originalTypeEvent)) {
    const wrapFn = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  const [delegation, originalHandler, typeEvent] = $xqrD$var$normalizeParams(originalTypeEvent, handler, delegationFn);
  const events = $xqrD$var$getEvent(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFn = $xqrD$var$findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  const uid = $xqrD$var$getUidEvent(originalHandler, originalTypeEvent.replace($xqrD$var$namespaceRegex, ''));
  const fn = delegation ? $xqrD$var$bootstrapDelegationHandler(element, handler, delegationFn) : $xqrD$var$bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function $xqrD$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = $xqrD$var$findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function $xqrD$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(handlerKey => {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      $xqrD$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function $xqrD$var$getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace($xqrD$var$stripNameRegex, '');
  return $xqrD$var$customEvents[event] || event;
}

const $xqrD$var$EventHandler = {
  on(element, event, handler, delegationFn) {
    $xqrD$var$addHandler(element, event, handler, delegationFn, false);
  },

  one(element, event, handler, delegationFn) {
    $xqrD$var$addHandler(element, event, handler, delegationFn, true);
  },

  off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [delegation, originalHandler, typeEvent] = $xqrD$var$normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = $xqrD$var$getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      $xqrD$var$removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(elementEvent => {
        $xqrD$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(keyHandlers => {
      const handlerKey = keyHandlers.replace($xqrD$var$stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        $xqrD$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = $xqrD$var$getjQuery();
    const typeEvent = $xqrD$var$getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    const isNative = $xqrD$var$nativeEvents.has(typeEvent);
    let jQueryEvent;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(key => {
        Object.defineProperty(evt, key, {
          get() {
            return args[key];
          }

        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$elementMap = new Map();
var $xqrD$var$Data = {
  set(element, key, instance) {
    if (!$xqrD$var$elementMap.has(element)) {
      $xqrD$var$elementMap.set(element, new Map());
    }

    const instanceMap = $xqrD$var$elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if ($xqrD$var$elementMap.has(element)) {
      return $xqrD$var$elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!$xqrD$var$elementMap.has(element)) {
      return;
    }

    const instanceMap = $xqrD$var$elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      $xqrD$var$elementMap.delete(element);
    }
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$VERSION = '5.1.0';

class $xqrD$var$BaseComponent {
  constructor(element) {
    element = $xqrD$var$getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    $xqrD$var$Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  dispose() {
    $xqrD$var$Data.remove(this._element, this.constructor.DATA_KEY);
    $xqrD$var$EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
      this[propertyName] = null;
    });
  }

  _queueCallback(callback, element, isAnimated = true) {
    $xqrD$var$executeAfterTransition(callback, element, isAnimated);
  }
  /** Static */


  static getInstance(element) {
    return $xqrD$var$Data.get($xqrD$var$getElement(element), this.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return $xqrD$var$VERSION;
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $xqrD$var$enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  $xqrD$var$EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if ($xqrD$var$isDisabled(this)) {
      return;
    }

    const target = $xqrD$var$getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$NAME$d = 'alert';
const $xqrD$var$DATA_KEY$c = 'bs.alert';
const $xqrD$var$EVENT_KEY$c = `.${$xqrD$var$DATA_KEY$c}`;
const $xqrD$var$EVENT_CLOSE = `close${$xqrD$var$EVENT_KEY$c}`;
const $xqrD$var$EVENT_CLOSED = `closed${$xqrD$var$EVENT_KEY$c}`;
const $xqrD$var$CLASS_NAME_FADE$5 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Alert extends $xqrD$var$BaseComponent {
  // Getters
  static get NAME() {
    return $xqrD$var$NAME$d;
  } // Public


  close() {
    const closeEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains($xqrD$var$CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  } // Private


  _destroyElement() {
    this._element.remove();

    $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_CLOSED);
    this.dispose();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$enableDismissTrigger($xqrD$export$Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$c = 'button';
const $xqrD$var$DATA_KEY$b = 'bs.button';
const $xqrD$var$EVENT_KEY$b = `.${$xqrD$var$DATA_KEY$b}`;
const $xqrD$var$DATA_API_KEY$7 = '.data-api';
const $xqrD$var$CLASS_NAME_ACTIVE$3 = 'active';
const $xqrD$var$SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const $xqrD$var$EVENT_CLICK_DATA_API$6 = `click${$xqrD$var$EVENT_KEY$b}${$xqrD$var$DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Button extends $xqrD$var$BaseComponent {
  // Getters
  static get NAME() {
    return $xqrD$var$NAME$c;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle($xqrD$var$CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Button.getOrCreateInstance(this);

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$6, $xqrD$var$SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest($xqrD$var$SELECTOR_DATA_TOGGLE$5);
  const data = $xqrD$export$Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function $xqrD$var$normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function $xqrD$var$normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const $xqrD$var$Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${$xqrD$var$normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${$xqrD$var$normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = $xqrD$var$normalizeData(element.dataset[key]);
    });
    return attributes;
  },

  getDataAttribute(element, key) {
    return $xqrD$var$normalizeData(element.getAttribute(`data-bs-${$xqrD$var$normalizeDataKey(key)}`));
  },

  offset(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $xqrD$var$NODE_TEXT = 3;
const $xqrD$var$SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== $xqrD$var$NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },

  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
    return this.find(focusables, element).filter(el => !$xqrD$var$isDisabled(el) && $xqrD$var$isVisible(el));
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$b = 'carousel';
const $xqrD$var$DATA_KEY$a = 'bs.carousel';
const $xqrD$var$EVENT_KEY$a = `.${$xqrD$var$DATA_KEY$a}`;
const $xqrD$var$DATA_API_KEY$6 = '.data-api';
const $xqrD$var$ARROW_LEFT_KEY = 'ArrowLeft';
const $xqrD$var$ARROW_RIGHT_KEY = 'ArrowRight';
const $xqrD$var$TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const $xqrD$var$SWIPE_THRESHOLD = 40;
const $xqrD$var$Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
const $xqrD$var$DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
const $xqrD$var$ORDER_NEXT = 'next';
const $xqrD$var$ORDER_PREV = 'prev';
const $xqrD$var$DIRECTION_LEFT = 'left';
const $xqrD$var$DIRECTION_RIGHT = 'right';
const $xqrD$var$KEY_TO_DIRECTION = {
  [$xqrD$var$ARROW_LEFT_KEY]: $xqrD$var$DIRECTION_RIGHT,
  [$xqrD$var$ARROW_RIGHT_KEY]: $xqrD$var$DIRECTION_LEFT
};
const $xqrD$var$EVENT_SLIDE = `slide${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_SLID = `slid${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_KEYDOWN = `keydown${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_MOUSEENTER = `mouseenter${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_MOUSELEAVE = `mouseleave${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_TOUCHSTART = `touchstart${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_TOUCHMOVE = `touchmove${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_TOUCHEND = `touchend${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_POINTERDOWN = `pointerdown${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_POINTERUP = `pointerup${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_DRAG_START = `dragstart${$xqrD$var$EVENT_KEY$a}`;
const $xqrD$var$EVENT_LOAD_DATA_API$2 = `load${$xqrD$var$EVENT_KEY$a}${$xqrD$var$DATA_API_KEY$6}`;
const $xqrD$var$EVENT_CLICK_DATA_API$5 = `click${$xqrD$var$EVENT_KEY$a}${$xqrD$var$DATA_API_KEY$6}`;
const $xqrD$var$CLASS_NAME_CAROUSEL = 'carousel';
const $xqrD$var$CLASS_NAME_ACTIVE$2 = 'active';
const $xqrD$var$CLASS_NAME_SLIDE = 'slide';
const $xqrD$var$CLASS_NAME_END = 'carousel-item-end';
const $xqrD$var$CLASS_NAME_START = 'carousel-item-start';
const $xqrD$var$CLASS_NAME_NEXT = 'carousel-item-next';
const $xqrD$var$CLASS_NAME_PREV = 'carousel-item-prev';
const $xqrD$var$CLASS_NAME_POINTER_EVENT = 'pointer-event';
const $xqrD$var$SELECTOR_ACTIVE$1 = '.active';
const $xqrD$var$SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const $xqrD$var$SELECTOR_ITEM = '.carousel-item';
const $xqrD$var$SELECTOR_ITEM_IMG = '.carousel-item img';
const $xqrD$var$SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const $xqrD$var$SELECTOR_INDICATORS = '.carousel-indicators';
const $xqrD$var$SELECTOR_INDICATOR = '[data-bs-target]';
const $xqrD$var$SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const $xqrD$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $xqrD$var$POINTER_TYPE_TOUCH = 'touch';
const $xqrD$var$POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Carousel extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$a;
  }

  static get NAME() {
    return $xqrD$var$NAME$b;
  } // Public


  next() {
    this._slide($xqrD$var$ORDER_NEXT);
  }

  nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && $xqrD$var$isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    this._slide($xqrD$var$ORDER_PREV);
  }

  pause(event) {
    if (!event) {
      this._isPaused = true;
    }

    if ($xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_NEXT_PREV, this._element)) {
      $xqrD$var$triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  }

  cycle(event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  }

  to(index) {
    this._activeElement = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement);

    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      $xqrD$var$EventHandler.one(this._element, $xqrD$var$EVENT_SLID, () => this.to(index));
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    const order = index > activeIndex ? $xqrD$var$ORDER_NEXT : $xqrD$var$ORDER_PREV;

    this._slide(order, this._items[index]);
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$a,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$b, config, $xqrD$var$DefaultType$a);
    return config;
  }

  _handleSwipe() {
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= $xqrD$var$SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
      return;
    }

    this._slide(direction > 0 ? $xqrD$var$DIRECTION_RIGHT : $xqrD$var$DIRECTION_LEFT);
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_KEYDOWN, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSEENTER, event => this.pause(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSELEAVE, event => this.cycle(event));
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    const start = event => {
      if (this._pointerEvent && (event.pointerType === $xqrD$var$POINTER_TYPE_PEN || event.pointerType === $xqrD$var$POINTER_TYPE_TOUCH)) {
        this.touchStartX = event.clientX;
      } else if (!this._pointerEvent) {
        this.touchStartX = event.touches[0].clientX;
      }
    };

    const move = event => {
      // ensure swiping with one touch and not pinching
      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
    };

    const end = event => {
      if (this._pointerEvent && (event.pointerType === $xqrD$var$POINTER_TYPE_PEN || event.pointerType === $xqrD$var$POINTER_TYPE_TOUCH)) {
        this.touchDeltaX = event.clientX - this.touchStartX;
      }

      this._handleSwipe();

      if (this._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(event => this.cycle(event), $xqrD$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      }
    };

    $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
      $xqrD$var$EventHandler.on(itemImg, $xqrD$var$EVENT_DRAG_START, e => e.preventDefault());
    });

    if (this._pointerEvent) {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_POINTERDOWN, event => start(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_POINTERUP, event => end(event));

      this._element.classList.add($xqrD$var$CLASS_NAME_POINTER_EVENT);
    } else {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_TOUCHSTART, event => start(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_TOUCHMOVE, event => move(event));
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_TOUCHEND, event => end(event));
    }
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    const direction = $xqrD$var$KEY_TO_DIRECTION[event.key];

    if (direction) {
      event.preventDefault();

      this._slide(direction);
    }
  }

  _getItemIndex(element) {
    this._items = element && element.parentNode ? $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  }

  _getItemByOrder(order, activeElement) {
    const isNext = order === $xqrD$var$ORDER_NEXT;
    return $xqrD$var$getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
  }

  _triggerSlideEvent(relatedTarget, eventDirectionName) {
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex($xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element));

    return $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SLIDE, {
      relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  }

  _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      const activeIndicator = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const indicators = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_INDICATOR, this._indicatorsElement);

      for (let i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
          indicators[i].classList.add($xqrD$var$CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
        }
      }
    }
  }

  _updateInterval() {
    const element = this._activeElement || $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }

  _slide(directionOrOrder, element) {
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === $xqrD$var$ORDER_NEXT;
    const directionalClassName = isNext ? $xqrD$var$CLASS_NAME_START : $xqrD$var$CLASS_NAME_END;
    const orderClassName = isNext ? $xqrD$var$CLASS_NAME_NEXT : $xqrD$var$CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains($xqrD$var$CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    if (this._isSliding) {
      return;
    }

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    const triggerSlidEvent = () => {
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    };

    if (this._element.classList.contains($xqrD$var$CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      $xqrD$var$reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add($xqrD$var$CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
      };

      this._queueCallback(completeCallBack, activeElement, true);
    } else {
      activeElement.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$2);
      nextElement.classList.add($xqrD$var$CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      triggerSlidEvent();
    }

    if (isCycling) {
      this.cycle();
    }
  }

  _directionToOrder(direction) {
    if (![$xqrD$var$DIRECTION_RIGHT, $xqrD$var$DIRECTION_LEFT].includes(direction)) {
      return direction;
    }

    if ($xqrD$var$isRTL()) {
      return direction === $xqrD$var$DIRECTION_LEFT ? $xqrD$var$ORDER_PREV : $xqrD$var$ORDER_NEXT;
    }

    return direction === $xqrD$var$DIRECTION_LEFT ? $xqrD$var$ORDER_NEXT : $xqrD$var$ORDER_PREV;
  }

  _orderToDirection(order) {
    if (![$xqrD$var$ORDER_NEXT, $xqrD$var$ORDER_PREV].includes(order)) {
      return order;
    }

    if ($xqrD$var$isRTL()) {
      return order === $xqrD$var$ORDER_PREV ? $xqrD$var$DIRECTION_LEFT : $xqrD$var$DIRECTION_RIGHT;
    }

    return order === $xqrD$var$ORDER_PREV ? $xqrD$var$DIRECTION_RIGHT : $xqrD$var$DIRECTION_LEFT;
  } // Static


  static carouselInterface(element, config) {
    const data = $xqrD$export$Carousel.getOrCreateInstance(element, config);
    let {
      _config
    } = data;

    if (typeof config === 'object') {
      _config = { ..._config,
        ...config
      };
    }

    const action = typeof config === 'string' ? config : _config.slide;

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError(`No method named "${action}"`);
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      $xqrD$export$Carousel.carouselInterface(this, config);
    });
  }

  static dataApiClickHandler(event) {
    const target = $xqrD$var$getElementFromSelector(this);

    if (!target || !target.classList.contains($xqrD$var$CLASS_NAME_CAROUSEL)) {
      return;
    }

    const config = { ...$xqrD$var$Manipulator.getDataAttributes(target),
      ...$xqrD$var$Manipulator.getDataAttributes(this)
    };
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    $xqrD$export$Carousel.carouselInterface(target, config);

    if (slideIndex) {
      $xqrD$export$Carousel.getInstance(target).to(slideIndex);
    }

    event.preventDefault();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$5, $xqrD$var$SELECTOR_DATA_SLIDE, $xqrD$export$Carousel.dataApiClickHandler);
$xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_LOAD_DATA_API$2, () => {
  const carousels = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_RIDE);

  for (let i = 0, len = carousels.length; i < len; i++) {
    $xqrD$export$Carousel.carouselInterface(carousels[i], $xqrD$export$Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$a = 'collapse';
const $xqrD$var$DATA_KEY$9 = 'bs.collapse';
const $xqrD$var$EVENT_KEY$9 = `.${$xqrD$var$DATA_KEY$9}`;
const $xqrD$var$DATA_API_KEY$5 = '.data-api';
const $xqrD$var$Default$9 = {
  toggle: true,
  parent: null
};
const $xqrD$var$DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
const $xqrD$var$EVENT_SHOW$5 = `show${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_SHOWN$5 = `shown${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_HIDE$5 = `hide${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_HIDDEN$5 = `hidden${$xqrD$var$EVENT_KEY$9}`;
const $xqrD$var$EVENT_CLICK_DATA_API$4 = `click${$xqrD$var$EVENT_KEY$9}${$xqrD$var$DATA_API_KEY$5}`;
const $xqrD$var$CLASS_NAME_SHOW$7 = 'show';
const $xqrD$var$CLASS_NAME_COLLAPSE = 'collapse';
const $xqrD$var$CLASS_NAME_COLLAPSING = 'collapsing';
const $xqrD$var$CLASS_NAME_COLLAPSED = 'collapsed';
const $xqrD$var$CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const $xqrD$var$WIDTH = 'width';
const $xqrD$var$HEIGHT = 'height';
const $xqrD$var$SELECTOR_ACTIVES = '.show, .collapsing';
const $xqrD$var$SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Collapse extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = [];
    const toggleList = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) {
      const elem = toggleList[i];
      const selector = $xqrD$var$getSelectorFromElement(elem);
      const filterElement = $xqrD$var$SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._initializeChildren();

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return $xqrD$var$Default$9;
  }

  static get NAME() {
    return $xqrD$var$NAME$a;
  } // Public


  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }

    let actives = [];
    let activesData;

    if (this._config.parent) {
      const children = $xqrD$var$SelectorEngine.find(`.${$xqrD$var$CLASS_NAME_COLLAPSE} .${$xqrD$var$CLASS_NAME_COLLAPSE}`, this._config.parent);
      actives = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
    }

    const container = $xqrD$var$SelectorEngine.findOne(this._selector);

    if (actives.length) {
      const tempActiveData = actives.find(elem => container !== elem);
      activesData = tempActiveData ? $xqrD$export$Collapse.getInstance(tempActiveData) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    const startEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    actives.forEach(elemActive => {
      if (container !== elemActive) {
        $xqrD$export$Collapse.getOrCreateInstance(elemActive, {
          toggle: false
        }).hide();
      }

      if (!activesData) {
        $xqrD$var$Data.set(elemActive, $xqrD$var$DATA_KEY$9, null);
      }
    });

    const dimension = this._getDimension();

    this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSE);

    this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSING);

      this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSE, $xqrD$var$CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$5);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }

    const startEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    $xqrD$var$reflow(this._element);

    this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSING);

    this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSE, $xqrD$var$CLASS_NAME_SHOW$7);

    const triggerArrayLength = this._triggerArray.length;

    for (let i = 0; i < triggerArrayLength; i++) {
      const trigger = this._triggerArray[i];
      const elem = $xqrD$var$getElementFromSelector(trigger);

      if (elem && !this._isShown(elem)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove($xqrD$var$CLASS_NAME_COLLAPSING);

      this._element.classList.add($xqrD$var$CLASS_NAME_COLLAPSE);

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  }

  _isShown(element = this._element) {
    return element.classList.contains($xqrD$var$CLASS_NAME_SHOW$7);
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$9,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = $xqrD$var$getElement(config.parent);
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$a, config, $xqrD$var$DefaultType$9);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains($xqrD$var$CLASS_NAME_HORIZONTAL) ? $xqrD$var$WIDTH : $xqrD$var$HEIGHT;
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }

    const children = $xqrD$var$SelectorEngine.find(`.${$xqrD$var$CLASS_NAME_COLLAPSE} .${$xqrD$var$CLASS_NAME_COLLAPSE}`, this._config.parent);
    $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
      const selected = $xqrD$var$getElementFromSelector(element);

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    });
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }

    triggerArray.forEach(elem => {
      if (isOpen) {
        elem.classList.remove($xqrD$var$CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add($xqrD$var$CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      const data = $xqrD$export$Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$4, $xqrD$var$SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const selector = $xqrD$var$getSelectorFromElement(this);
  const selectorElements = $xqrD$var$SelectorEngine.find(selector);
  selectorElements.forEach(element => {
    $xqrD$export$Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$9 = 'dropdown';
const $xqrD$var$DATA_KEY$8 = 'bs.dropdown';
const $xqrD$var$EVENT_KEY$8 = `.${$xqrD$var$DATA_KEY$8}`;
const $xqrD$var$DATA_API_KEY$4 = '.data-api';
const $xqrD$var$ESCAPE_KEY$2 = 'Escape';
const $xqrD$var$SPACE_KEY = 'Space';
const $xqrD$var$TAB_KEY$1 = 'Tab';
const $xqrD$var$ARROW_UP_KEY = 'ArrowUp';
const $xqrD$var$ARROW_DOWN_KEY = 'ArrowDown';
const $xqrD$var$RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const $xqrD$var$REGEXP_KEYDOWN = new RegExp(`${$xqrD$var$ARROW_UP_KEY}|${$xqrD$var$ARROW_DOWN_KEY}|${$xqrD$var$ESCAPE_KEY$2}`);
const $xqrD$var$EVENT_HIDE$4 = `hide${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_HIDDEN$4 = `hidden${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_SHOW$4 = `show${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_SHOWN$4 = `shown${$xqrD$var$EVENT_KEY$8}`;
const $xqrD$var$EVENT_CLICK_DATA_API$3 = `click${$xqrD$var$EVENT_KEY$8}${$xqrD$var$DATA_API_KEY$4}`;
const $xqrD$var$EVENT_KEYDOWN_DATA_API = `keydown${$xqrD$var$EVENT_KEY$8}${$xqrD$var$DATA_API_KEY$4}`;
const $xqrD$var$EVENT_KEYUP_DATA_API = `keyup${$xqrD$var$EVENT_KEY$8}${$xqrD$var$DATA_API_KEY$4}`;
const $xqrD$var$CLASS_NAME_SHOW$6 = 'show';
const $xqrD$var$CLASS_NAME_DROPUP = 'dropup';
const $xqrD$var$CLASS_NAME_DROPEND = 'dropend';
const $xqrD$var$CLASS_NAME_DROPSTART = 'dropstart';
const $xqrD$var$CLASS_NAME_NAVBAR = 'navbar';
const $xqrD$var$SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const $xqrD$var$SELECTOR_MENU = '.dropdown-menu';
const $xqrD$var$SELECTOR_NAVBAR_NAV = '.navbar-nav';
const $xqrD$var$SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const $xqrD$var$PLACEMENT_TOP = $xqrD$var$isRTL() ? 'top-end' : 'top-start';
const $xqrD$var$PLACEMENT_TOPEND = $xqrD$var$isRTL() ? 'top-start' : 'top-end';
const $xqrD$var$PLACEMENT_BOTTOM = $xqrD$var$isRTL() ? 'bottom-end' : 'bottom-start';
const $xqrD$var$PLACEMENT_BOTTOMEND = $xqrD$var$isRTL() ? 'bottom-start' : 'bottom-end';
const $xqrD$var$PLACEMENT_RIGHT = $xqrD$var$isRTL() ? 'left-start' : 'right-start';
const $xqrD$var$PLACEMENT_LEFT = $xqrD$var$isRTL() ? 'right-start' : 'left-start';
const $xqrD$var$Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
const $xqrD$var$DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Dropdown extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$8;
  }

  static get DefaultType() {
    return $xqrD$var$DefaultType$8;
  }

  static get NAME() {
    return $xqrD$var$NAME$9;
  } // Public


  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }

  show() {
    if ($xqrD$var$isDisabled(this._element) || this._isShown(this._menu)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    }

    const parent = $xqrD$export$Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

    if (this._inNavbar) {
      $xqrD$var$Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
      this._createPopper(parent);
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest($xqrD$var$SELECTOR_NAVBAR_NAV)) {
      [].concat(...document.body.children).forEach(elem => $xqrD$var$EventHandler.on(elem, 'mouseover', $xqrD$var$noop));
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add($xqrD$var$CLASS_NAME_SHOW$6);

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW$6);

    $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$4, relatedTarget);
  }

  hide() {
    if ($xqrD$var$isDisabled(this._element) || !this._isShown(this._menu)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _completeHide(relatedTarget) {
    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(elem => $xqrD$var$EventHandler.off(elem, 'mouseover', $xqrD$var$noop));
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove($xqrD$var$CLASS_NAME_SHOW$6);

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    $xqrD$var$Manipulator.removeDataAttribute(this._menu, 'popper');
    $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$4, relatedTarget);
  }

  _getConfig(config) {
    config = { ...this.constructor.Default,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...config
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$9, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !$xqrD$var$isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${$xqrD$var$NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _createPopper(parent) {
    if (typeof $vePw$exports === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    let referenceElement = this._element;

    if (this._config.reference === 'parent') {
      referenceElement = parent;
    } else if ($xqrD$var$isElement(this._config.reference)) {
      referenceElement = $xqrD$var$getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }

    const popperConfig = this._getPopperConfig();

    const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
    this._popper = $cujj$export$createPopper(referenceElement, this._menu, popperConfig);

    if (isDisplayStatic) {
      $xqrD$var$Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
  }

  _isShown(element = this._element) {
    return element.classList.contains($xqrD$var$CLASS_NAME_SHOW$6);
  }

  _getMenuElement() {
    return $xqrD$var$SelectorEngine.next(this._element, $xqrD$var$SELECTOR_MENU)[0];
  }

  _getPlacement() {
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains($xqrD$var$CLASS_NAME_DROPEND)) {
      return $xqrD$var$PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains($xqrD$var$CLASS_NAME_DROPSTART)) {
      return $xqrD$var$PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains($xqrD$var$CLASS_NAME_DROPUP)) {
      return isEnd ? $xqrD$var$PLACEMENT_TOPEND : $xqrD$var$PLACEMENT_TOP;
    }

    return isEnd ? $xqrD$var$PLACEMENT_BOTTOMEND : $xqrD$var$PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(`.${$xqrD$var$CLASS_NAME_NAVBAR}`) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _selectMenuItem({
    key,
    target
  }) {
    const items = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter($xqrD$var$isVisible);

    if (!items.length) {
      return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    $xqrD$var$getNextActiveElement(items, target, key === $xqrD$var$ARROW_DOWN_KEY, !items.includes(target)).focus();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

  static clearMenus(event) {
    if (event && (event.button === $xqrD$var$RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== $xqrD$var$TAB_KEY$1)) {
      return;
    }

    const toggles = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) {
      const context = $xqrD$export$Dropdown.getInstance(toggles[i]);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      if (!context._isShown()) {
        continue;
      }

      const relatedTarget = {
        relatedTarget: context._element
      };

      if (event) {
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === $xqrD$var$TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
      }

      context._completeHide(relatedTarget);
    }
  }

  static getParentFromElement(element) {
    return $xqrD$var$getElementFromSelector(element) || element.parentNode;
  }

  static dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === $xqrD$var$SPACE_KEY || event.key !== $xqrD$var$ESCAPE_KEY$2 && (event.key !== $xqrD$var$ARROW_DOWN_KEY && event.key !== $xqrD$var$ARROW_UP_KEY || event.target.closest($xqrD$var$SELECTOR_MENU)) : !$xqrD$var$REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    const isActive = this.classList.contains($xqrD$var$CLASS_NAME_SHOW$6);

    if (!isActive && event.key === $xqrD$var$ESCAPE_KEY$2) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if ($xqrD$var$isDisabled(this)) {
      return;
    }

    const getToggleButton = this.matches($xqrD$var$SELECTOR_DATA_TOGGLE$3) ? this : $xqrD$var$SelectorEngine.prev(this, $xqrD$var$SELECTOR_DATA_TOGGLE$3)[0];
    const instance = $xqrD$export$Dropdown.getOrCreateInstance(getToggleButton);

    if (event.key === $xqrD$var$ESCAPE_KEY$2) {
      instance.hide();
      return;
    }

    if (event.key === $xqrD$var$ARROW_UP_KEY || event.key === $xqrD$var$ARROW_DOWN_KEY) {
      if (!isActive) {
        instance.show();
      }

      instance._selectMenuItem(event);

      return;
    }

    if (!isActive || event.key === $xqrD$var$SPACE_KEY) {
      $xqrD$export$Dropdown.clearMenus();
    }
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYDOWN_DATA_API, $xqrD$var$SELECTOR_DATA_TOGGLE$3, $xqrD$export$Dropdown.dataApiKeydownHandler);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYDOWN_DATA_API, $xqrD$var$SELECTOR_MENU, $xqrD$export$Dropdown.dataApiKeydownHandler);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$3, $xqrD$export$Dropdown.clearMenus);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYUP_DATA_API, $xqrD$export$Dropdown.clearMenus);
$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$3, $xqrD$var$SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  $xqrD$export$Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $xqrD$var$SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const $xqrD$var$SELECTOR_STICKY_CONTENT = '.sticky-top';

class $xqrD$var$ScrollBarHelper {
  constructor() {
    this._element = document.body;
  }

  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  hide() {
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes($xqrD$var$SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

    this._setElementAttributes($xqrD$var$SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
  }

  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
  }

  _setElementAttributes(selector, styleProp, callback) {
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      this._saveInitialAttribute(element, styleProp);

      const calculatedValue = window.getComputedStyle(element)[styleProp];
      element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  reset() {
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, 'paddingRight');

    this._resetElementAttributes($xqrD$var$SELECTOR_FIXED_CONTENT, 'paddingRight');

    this._resetElementAttributes($xqrD$var$SELECTOR_STICKY_CONTENT, 'marginRight');
  }

  _saveInitialAttribute(element, styleProp) {
    const actualValue = element.style[styleProp];

    if (actualValue) {
      $xqrD$var$Manipulator.setDataAttribute(element, styleProp, actualValue);
    }
  }

  _resetElementAttributes(selector, styleProp) {
    const manipulationCallBack = element => {
      const value = $xqrD$var$Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined') {
        element.style.removeProperty(styleProp);
      } else {
        $xqrD$var$Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _applyManipulationCallback(selector, callBack) {
    if ($xqrD$var$isElement(selector)) {
      callBack(selector);
    } else {
      $xqrD$var$SelectorEngine.find(selector, this._element).forEach(callBack);
    }
  }

  isOverflowing() {
    return this.getWidth() > 0;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


const $xqrD$var$Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
const $xqrD$var$DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
const $xqrD$var$NAME$8 = 'backdrop';
const $xqrD$var$CLASS_NAME_FADE$4 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$5 = 'show';
const $xqrD$var$EVENT_MOUSEDOWN = `mousedown.bs.${$xqrD$var$NAME$8}`;

class $xqrD$var$Backdrop {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  show(callback) {
    if (!this._config.isVisible) {
      $xqrD$var$execute(callback);
      return;
    }

    this._append();

    if (this._config.isAnimated) {
      $xqrD$var$reflow(this._getElement());
    }

    this._getElement().classList.add($xqrD$var$CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      $xqrD$var$execute(callback);
    });
  }

  hide(callback) {
    if (!this._config.isVisible) {
      $xqrD$var$execute(callback);
      return;
    }

    this._getElement().classList.remove($xqrD$var$CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      this.dispose();
      $xqrD$var$execute(callback);
    });
  } // Private


  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;

      if (this._config.isAnimated) {
        backdrop.classList.add($xqrD$var$CLASS_NAME_FADE$4);
      }

      this._element = backdrop;
    }

    return this._element;
  }

  _getConfig(config) {
    config = { ...$xqrD$var$Default$7,
      ...(typeof config === 'object' ? config : {})
    }; // use getElement() with the default "body" to get a fresh Element on each instantiation

    config.rootElement = $xqrD$var$getElement(config.rootElement);
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$8, config, $xqrD$var$DefaultType$7);
    return config;
  }

  _append() {
    if (this._isAppended) {
      return;
    }

    this._config.rootElement.append(this._getElement());

    $xqrD$var$EventHandler.on(this._getElement(), $xqrD$var$EVENT_MOUSEDOWN, () => {
      $xqrD$var$execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }

  dispose() {
    if (!this._isAppended) {
      return;
    }

    $xqrD$var$EventHandler.off(this._element, $xqrD$var$EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
  }

  _emulateAnimation(callback) {
    $xqrD$var$executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


const $xqrD$var$Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
const $xqrD$var$DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
const $xqrD$var$NAME$7 = 'focustrap';
const $xqrD$var$DATA_KEY$7 = 'bs.focustrap';
const $xqrD$var$EVENT_KEY$7 = `.${$xqrD$var$DATA_KEY$7}`;
const $xqrD$var$EVENT_FOCUSIN$1 = `focusin${$xqrD$var$EVENT_KEY$7}`;
const $xqrD$var$EVENT_KEYDOWN_TAB = `keydown.tab${$xqrD$var$EVENT_KEY$7}`;
const $xqrD$var$TAB_KEY = 'Tab';
const $xqrD$var$TAB_NAV_FORWARD = 'forward';
const $xqrD$var$TAB_NAV_BACKWARD = 'backward';

class $xqrD$var$FocusTrap {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  activate() {
    const {
      trapElement,
      autofocus
    } = this._config;

    if (this._isActive) {
      return;
    }

    if (autofocus) {
      trapElement.focus();
    }

    $xqrD$var$EventHandler.off(document, $xqrD$var$EVENT_KEY$7); // guard against infinite focus loop

    $xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_FOCUSIN$1, event => this._handleFocusin(event));
    $xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }

  deactivate() {
    if (!this._isActive) {
      return;
    }

    this._isActive = false;
    $xqrD$var$EventHandler.off(document, $xqrD$var$EVENT_KEY$7);
  } // Private


  _handleFocusin(event) {
    const {
      target
    } = event;
    const {
      trapElement
    } = this._config;

    if (target === document || target === trapElement || trapElement.contains(target)) {
      return;
    }

    const elements = $xqrD$var$SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === $xqrD$var$TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }

  _handleKeydown(event) {
    if (event.key !== $xqrD$var$TAB_KEY) {
      return;
    }

    this._lastTabNavDirection = event.shiftKey ? $xqrD$var$TAB_NAV_BACKWARD : $xqrD$var$TAB_NAV_FORWARD;
  }

  _getConfig(config) {
    config = { ...$xqrD$var$Default$6,
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$7, config, $xqrD$var$DefaultType$6);
    return config;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$NAME$6 = 'modal';
const $xqrD$var$DATA_KEY$6 = 'bs.modal';
const $xqrD$var$EVENT_KEY$6 = `.${$xqrD$var$DATA_KEY$6}`;
const $xqrD$var$DATA_API_KEY$3 = '.data-api';
const $xqrD$var$ESCAPE_KEY$1 = 'Escape';
const $xqrD$var$Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
const $xqrD$var$DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
const $xqrD$var$EVENT_HIDE$3 = `hide${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_HIDE_PREVENTED = `hidePrevented${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_HIDDEN$3 = `hidden${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_SHOW$3 = `show${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_SHOWN$3 = `shown${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_RESIZE = `resize${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_CLICK_DISMISS = `click.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${$xqrD$var$EVENT_KEY$6}`;
const $xqrD$var$EVENT_CLICK_DATA_API$2 = `click${$xqrD$var$EVENT_KEY$6}${$xqrD$var$DATA_API_KEY$3}`;
const $xqrD$var$CLASS_NAME_OPEN = 'modal-open';
const $xqrD$var$CLASS_NAME_FADE$3 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$4 = 'show';
const $xqrD$var$CLASS_NAME_STATIC = 'modal-static';
const $xqrD$var$SELECTOR_DIALOG = '.modal-dialog';
const $xqrD$var$SELECTOR_MODAL_BODY = '.modal-body';
const $xqrD$var$SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Modal extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._dialog = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollBar = new $xqrD$var$ScrollBarHelper();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$5;
  }

  static get NAME() {
    return $xqrD$var$NAME$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$3, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._scrollBar.hide();

    document.body.classList.add($xqrD$var$CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    $xqrD$var$EventHandler.on(this._dialog, $xqrD$var$EVENT_MOUSEDOWN_DISMISS, () => {
      $xqrD$var$EventHandler.one(this._element, $xqrD$var$EVENT_MOUSEUP_DISMISS, event => {
        if (event.target === this._element) {
          this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(() => this._showElement(relatedTarget));
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    this._focustrap.deactivate();

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$4);

    $xqrD$var$EventHandler.off(this._element, $xqrD$var$EVENT_CLICK_DISMISS);
    $xqrD$var$EventHandler.off(this._dialog, $xqrD$var$EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
  }

  dispose() {
    [window, this._dialog].forEach(htmlElement => $xqrD$var$EventHandler.off(htmlElement, $xqrD$var$EVENT_KEY$6));

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _initializeBackDrop() {
    return new $xqrD$var$Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }

  _initializeFocusTrap() {
    return new $xqrD$var$FocusTrap({
      trapElement: this._element
    });
  }

  _getConfig(config) {
    config = { ...$xqrD$var$Default$5,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$6, config, $xqrD$var$DefaultType$5);
    return config;
  }

  _showElement(relatedTarget) {
    const isAnimated = this._isAnimated();

    const modalBody = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (isAnimated) {
      $xqrD$var$reflow(this._element);
    }

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW$4);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }

      this._isTransitioning = false;
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
  }

  _setEscapeEvent() {
    if (this._isShown) {
      $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_KEYDOWN_DISMISS$1, event => {
        if (this._config.keyboard && event.key === $xqrD$var$ESCAPE_KEY$1) {
          event.preventDefault();
          this.hide();
        } else if (!this._config.keyboard && event.key === $xqrD$var$ESCAPE_KEY$1) {
          this._triggerBackdropTransition();
        }
      });
    } else {
      $xqrD$var$EventHandler.off(this._element, $xqrD$var$EVENT_KEYDOWN_DISMISS$1);
    }
  }

  _setResizeEvent() {
    if (this._isShown) {
      $xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_RESIZE, () => this._adjustDialog());
    } else {
      $xqrD$var$EventHandler.off(window, $xqrD$var$EVENT_RESIZE);
    }
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove($xqrD$var$CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._scrollBar.reset();

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$3);
    });
  }

  _showBackdrop(callback) {
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_CLICK_DISMISS, event => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }

      if (event.target !== event.currentTarget) {
        return;
      }

      if (this._config.backdrop === true) {
        this.hide();
      } else if (this._config.backdrop === 'static') {
        this._triggerBackdropTransition();
      }
    });

    this._backdrop.show(callback);
  }

  _isAnimated() {
    return this._element.classList.contains($xqrD$var$CLASS_NAME_FADE$3);
  }

  _triggerBackdropTransition() {
    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const {
      classList,
      scrollHeight,
      style
    } = this._element;
    const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains($xqrD$var$CLASS_NAME_STATIC)) {
      return;
    }

    if (!isModalOverflowing) {
      style.overflowY = 'hidden';
    }

    classList.add($xqrD$var$CLASS_NAME_STATIC);

    this._queueCallback(() => {
      classList.remove($xqrD$var$CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        this._queueCallback(() => {
          style.overflowY = '';
        }, this._dialog);
      }
    }, this._dialog);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !$xqrD$var$isRTL() || isBodyOverflowing && !isModalOverflowing && $xqrD$var$isRTL()) {
      this._element.style.paddingLeft = `${scrollbarWidth}px`;
    }

    if (isBodyOverflowing && !isModalOverflowing && !$xqrD$var$isRTL() || !isBodyOverflowing && isModalOverflowing && $xqrD$var$isRTL()) {
      this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = $xqrD$export$Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](relatedTarget);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$2, $xqrD$var$SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = $xqrD$var$getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  $xqrD$var$EventHandler.one(target, $xqrD$var$EVENT_SHOW$3, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    $xqrD$var$EventHandler.one(target, $xqrD$var$EVENT_HIDDEN$3, () => {
      if ($xqrD$var$isVisible(this)) {
        this.focus();
      }
    });
  });
  const data = $xqrD$export$Modal.getOrCreateInstance(target);
  data.toggle(this);
});
$xqrD$var$enableDismissTrigger($xqrD$export$Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$5 = 'offcanvas';
const $xqrD$var$DATA_KEY$5 = 'bs.offcanvas';
const $xqrD$var$EVENT_KEY$5 = `.${$xqrD$var$DATA_KEY$5}`;
const $xqrD$var$DATA_API_KEY$2 = '.data-api';
const $xqrD$var$EVENT_LOAD_DATA_API$1 = `load${$xqrD$var$EVENT_KEY$5}${$xqrD$var$DATA_API_KEY$2}`;
const $xqrD$var$ESCAPE_KEY = 'Escape';
const $xqrD$var$Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const $xqrD$var$DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
const $xqrD$var$CLASS_NAME_SHOW$3 = 'show';
const $xqrD$var$CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const $xqrD$var$OPEN_SELECTOR = '.offcanvas.show';
const $xqrD$var$EVENT_SHOW$2 = `show${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_SHOWN$2 = `shown${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_HIDE$2 = `hide${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_HIDDEN$2 = `hidden${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$EVENT_CLICK_DATA_API$1 = `click${$xqrD$var$EVENT_KEY$5}${$xqrD$var$DATA_API_KEY$2}`;
const $xqrD$var$EVENT_KEYDOWN_DISMISS = `keydown.dismiss${$xqrD$var$EVENT_KEY$5}`;
const $xqrD$var$SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Offcanvas extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  } // Getters


  static get NAME() {
    return $xqrD$var$NAME$5;
  }

  static get Default() {
    return $xqrD$var$Default$4;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$2, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) {
      new $xqrD$var$ScrollBarHelper().hide();
    }

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW$3);

    const completeCallBack = () => {
      if (!this._config.scroll) {
        this._focustrap.activate();
      }

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$2, {
        relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW$3);

    this._backdrop.hide();

    const completeCallback = () => {
      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._element.style.visibility = 'hidden';

      if (!this._config.scroll) {
        new $xqrD$var$ScrollBarHelper().reset();
      }

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN$2);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$4,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$5, config, $xqrD$var$DefaultType$4);
    return config;
  }

  _initializeBackDrop() {
    return new $xqrD$var$Backdrop({
      className: $xqrD$var$CLASS_NAME_BACKDROP,
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }

  _initializeFocusTrap() {
    return new $xqrD$var$FocusTrap({
      trapElement: this._element
    });
  }

  _addEventListeners() {
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_KEYDOWN_DISMISS, event => {
      if (this._config.keyboard && event.key === $xqrD$var$ESCAPE_KEY) {
        this.hide();
      }
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API$1, $xqrD$var$SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = $xqrD$var$getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if ($xqrD$var$isDisabled(this)) {
    return;
  }

  $xqrD$var$EventHandler.one(target, $xqrD$var$EVENT_HIDDEN$2, () => {
    // focus on trigger when it is closed
    if ($xqrD$var$isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const allReadyOpen = $xqrD$var$SelectorEngine.findOne($xqrD$var$OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    $xqrD$export$Offcanvas.getInstance(allReadyOpen).hide();
  }

  const data = $xqrD$export$Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
$xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_LOAD_DATA_API$1, () => $xqrD$var$SelectorEngine.find($xqrD$var$OPEN_SELECTOR).forEach(el => $xqrD$export$Offcanvas.getOrCreateInstance(el).show()));
$xqrD$var$enableDismissTrigger($xqrD$export$Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $xqrD$var$uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const $xqrD$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const $xqrD$var$SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
 */

const $xqrD$var$DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const $xqrD$var$allowedAttribute = (attr, allowedAttributeList) => {
  const attrName = attr.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attrName)) {
    if ($xqrD$var$uriAttrs.has(attrName)) {
      return Boolean($xqrD$var$SAFE_URL_PATTERN.test(attr.nodeValue) || $xqrD$var$DATA_URL_PATTERN.test(attr.nodeValue));
    }

    return true;
  }

  const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

  for (let i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attrName)) {
      return true;
    }
  }

  return false;
};

const $xqrD$var$DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', $xqrD$var$ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function $xqrD$var$sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const allowlistKeys = Object.keys(allowList);
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (let i = 0, len = elements.length; i < len; i++) {
    const el = elements[i];
    const elName = el.nodeName.toLowerCase();

    if (!allowlistKeys.includes(elName)) {
      el.remove();
      continue;
    }

    const attributeList = [].concat(...el.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
    attributeList.forEach(attr => {
      if (!$xqrD$var$allowedAttribute(attr, allowedAttributes)) {
        el.removeAttribute(attr.nodeName);
      }
    });
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $xqrD$var$NAME$4 = 'tooltip';
const $xqrD$var$DATA_KEY$4 = 'bs.tooltip';
const $xqrD$var$EVENT_KEY$4 = `.${$xqrD$var$DATA_KEY$4}`;
const $xqrD$var$CLASS_PREFIX$1 = 'bs-tooltip';
const $xqrD$var$DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const $xqrD$var$DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
const $xqrD$var$AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: $xqrD$var$isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: $xqrD$var$isRTL() ? 'right' : 'left'
};
const $xqrD$var$Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: $xqrD$var$DefaultAllowlist,
  popperConfig: null
};
const $xqrD$var$Event$2 = {
  HIDE: `hide${$xqrD$var$EVENT_KEY$4}`,
  HIDDEN: `hidden${$xqrD$var$EVENT_KEY$4}`,
  SHOW: `show${$xqrD$var$EVENT_KEY$4}`,
  SHOWN: `shown${$xqrD$var$EVENT_KEY$4}`,
  INSERTED: `inserted${$xqrD$var$EVENT_KEY$4}`,
  CLICK: `click${$xqrD$var$EVENT_KEY$4}`,
  FOCUSIN: `focusin${$xqrD$var$EVENT_KEY$4}`,
  FOCUSOUT: `focusout${$xqrD$var$EVENT_KEY$4}`,
  MOUSEENTER: `mouseenter${$xqrD$var$EVENT_KEY$4}`,
  MOUSELEAVE: `mouseleave${$xqrD$var$EVENT_KEY$4}`
};
const $xqrD$var$CLASS_NAME_FADE$2 = 'fade';
const $xqrD$var$CLASS_NAME_MODAL = 'modal';
const $xqrD$var$CLASS_NAME_SHOW$2 = 'show';
const $xqrD$var$HOVER_STATE_SHOW = 'show';
const $xqrD$var$HOVER_STATE_OUT = 'out';
const $xqrD$var$SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const $xqrD$var$SELECTOR_MODAL = `.${$xqrD$var$CLASS_NAME_MODAL}`;
const $xqrD$var$EVENT_MODAL_HIDE = 'hide.bs.modal';
const $xqrD$var$TRIGGER_HOVER = 'hover';
const $xqrD$var$TRIGGER_FOCUS = 'focus';
const $xqrD$var$TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Tooltip extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    if (typeof $vePw$exports === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$3;
  }

  static get NAME() {
    return $xqrD$var$NAME$4;
  }

  static get Event() {
    return $xqrD$var$Event$2;
  }

  static get DefaultType() {
    return $xqrD$var$DefaultType$3;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      const context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains($xqrD$var$CLASS_NAME_SHOW$2)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  }

  dispose() {
    clearTimeout(this._timeout);
    $xqrD$var$EventHandler.off(this._element.closest($xqrD$var$SELECTOR_MODAL), $xqrD$var$EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) {
      this.tip.remove();
    }

    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = $xqrD$var$findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }

    const tip = this.getTipElement();
    const tipId = $xqrD$var$getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    if (this._config.animation) {
      tip.classList.add($xqrD$var$CLASS_NAME_FADE$2);
    }

    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const {
      container
    } = this._config;
    $xqrD$var$Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = $cujj$export$createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add($xqrD$var$CLASS_NAME_SHOW$2);

    const customClass = this._resolvePossibleFunction(this._config.customClass);

    if (customClass) {
      tip.classList.add(...customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => {
        $xqrD$var$EventHandler.on(element, 'mouseover', $xqrD$var$noop);
      });
    }

    const complete = () => {
      const prevHoverState = this._hoverState;
      this._hoverState = null;
      $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

      if (prevHoverState === $xqrD$var$HOVER_STATE_OUT) {
        this._leave(null, this);
      }
    };

    const isAnimated = this.tip.classList.contains($xqrD$var$CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);
  }

  hide() {
    if (!this._popper) {
      return;
    }

    const tip = this.getTipElement();

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (this._hoverState !== $xqrD$var$HOVER_STATE_SHOW) {
        tip.remove();
      }

      this._cleanTipClass();

      this._element.removeAttribute('aria-describedby');

      $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove($xqrD$var$CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => $xqrD$var$EventHandler.off(element, 'mouseover', $xqrD$var$noop));
    }

    this._activeTrigger[$xqrD$var$TRIGGER_FOCUS] = false;
    this._activeTrigger[$xqrD$var$TRIGGER_HOVER] = false;
    const isAnimated = this.tip.classList.contains($xqrD$var$CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
  }

  update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected


  isWithContent() {
    return Boolean(this.getTitle());
  }

  getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    const element = document.createElement('div');
    element.innerHTML = this._config.template;
    const tip = element.children[0];
    this.setContent(tip);
    tip.classList.remove($xqrD$var$CLASS_NAME_FADE$2, $xqrD$var$CLASS_NAME_SHOW$2);
    this.tip = tip;
    return this.tip;
  }

  setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), $xqrD$var$SELECTOR_TOOLTIP_INNER);
  }

  _sanitizeAndSetContent(template, content, selector) {
    const templateElement = $xqrD$var$SelectorEngine.findOne(selector, template);

    if (!content && templateElement) {
      templateElement.remove();
      return;
    } // we use append for html objects to maintain js events


    this.setElementContent(templateElement, content);
  }

  setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if ($xqrD$var$isElement(content)) {
      content = $xqrD$var$getElement(content); // content is a DOM node or a jQuery

      if (this._config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.append(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this._config.html) {
      if (this._config.sanitize) {
        content = $xqrD$var$sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  }

  getTitle() {
    const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

    return this._resolvePossibleFunction(title);
  }

  updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private


  _initializeOnDelegatedTarget(event, context) {
    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _resolvePossibleFunction(content) {
    return typeof content === 'function' ? content.call(this._element) : content;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
      }],
      onFirstUpdate: data => {
        if (data.options.placement !== data.placement) {
          this._handlePopperPlacementChange(data);
        }
      }
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
  }

  _getAttachment(placement) {
    return $xqrD$var$AttachmentMap[placement.toUpperCase()];
  }

  _setListeners() {
    const triggers = this._config.trigger.split(' ');

    triggers.forEach(trigger => {
      if (trigger === 'click') {
        $xqrD$var$EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
      } else if (trigger !== $xqrD$var$TRIGGER_MANUAL) {
        const eventIn = trigger === $xqrD$var$TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === $xqrD$var$TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        $xqrD$var$EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
        $xqrD$var$EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
      }
    });

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    $xqrD$var$EventHandler.on(this._element.closest($xqrD$var$SELECTOR_MODAL), $xqrD$var$EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._config.selector) {
      this._config = { ...this._config,
        trigger: 'manual',
        selector: ''
      };
    } else {
      this._fixTitle();
    }
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  }

  _enter(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? $xqrD$var$TRIGGER_FOCUS : $xqrD$var$TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains($xqrD$var$CLASS_NAME_SHOW$2) || context._hoverState === $xqrD$var$HOVER_STATE_SHOW) {
      context._hoverState = $xqrD$var$HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = $xqrD$var$HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === $xqrD$var$HOVER_STATE_SHOW) {
        context.show();
      }
    }, context._config.delay.show);
  }

  _leave(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? $xqrD$var$TRIGGER_FOCUS : $xqrD$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = $xqrD$var$HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === $xqrD$var$HOVER_STATE_OUT) {
        context.hide();
      }
    }, context._config.delay.hide);
  }

  _isWithActiveTrigger() {
    for (const trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  }

  _getConfig(config) {
    const dataAttributes = $xqrD$var$Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => {
      if ($xqrD$var$DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });
    config = { ...this.constructor.Default,
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config.container = config.container === false ? document.body : $xqrD$var$getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    $xqrD$var$typeCheckConfig($xqrD$var$NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = $xqrD$var$sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    for (const key in this._config) {
      if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
      }
    } // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`


    return config;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
    const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  }

  _getBasicClassPrefix() {
    return $xqrD$var$CLASS_PREFIX$1;
  }

  _handlePopperPlacementChange(popperData) {
    const {
      state
    } = popperData;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Tooltip.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


$xqrD$var$defineJQueryPlugin($xqrD$export$Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$3 = 'popover';
const $xqrD$var$DATA_KEY$3 = 'bs.popover';
const $xqrD$var$EVENT_KEY$3 = `.${$xqrD$var$DATA_KEY$3}`;
const $xqrD$var$CLASS_PREFIX = 'bs-popover';
const $xqrD$var$Default$2 = { ...$xqrD$export$Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
};
const $xqrD$var$DefaultType$2 = { ...$xqrD$export$Tooltip.DefaultType,
  content: '(string|element|function)'
};
const $xqrD$var$Event$1 = {
  HIDE: `hide${$xqrD$var$EVENT_KEY$3}`,
  HIDDEN: `hidden${$xqrD$var$EVENT_KEY$3}`,
  SHOW: `show${$xqrD$var$EVENT_KEY$3}`,
  SHOWN: `shown${$xqrD$var$EVENT_KEY$3}`,
  INSERTED: `inserted${$xqrD$var$EVENT_KEY$3}`,
  CLICK: `click${$xqrD$var$EVENT_KEY$3}`,
  FOCUSIN: `focusin${$xqrD$var$EVENT_KEY$3}`,
  FOCUSOUT: `focusout${$xqrD$var$EVENT_KEY$3}`,
  MOUSEENTER: `mouseenter${$xqrD$var$EVENT_KEY$3}`,
  MOUSELEAVE: `mouseleave${$xqrD$var$EVENT_KEY$3}`
};
const $xqrD$var$SELECTOR_TITLE = '.popover-header';
const $xqrD$var$SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Popover extends $xqrD$export$Tooltip {
  // Getters
  static get Default() {
    return $xqrD$var$Default$2;
  }

  static get NAME() {
    return $xqrD$var$NAME$3;
  }

  static get Event() {
    return $xqrD$var$Event$1;
  }

  static get DefaultType() {
    return $xqrD$var$DefaultType$2;
  } // Overrides


  isWithContent() {
    return this.getTitle() || this._getContent();
  }

  setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), $xqrD$var$SELECTOR_TITLE);

    this._sanitizeAndSetContent(tip, this._getContent(), $xqrD$var$SELECTOR_CONTENT);
  } // Private


  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }

  _getBasicClassPrefix() {
    return $xqrD$var$CLASS_PREFIX;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Popover.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


$xqrD$var$defineJQueryPlugin($xqrD$export$Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$2 = 'scrollspy';
const $xqrD$var$DATA_KEY$2 = 'bs.scrollspy';
const $xqrD$var$EVENT_KEY$2 = `.${$xqrD$var$DATA_KEY$2}`;
const $xqrD$var$DATA_API_KEY$1 = '.data-api';
const $xqrD$var$Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
const $xqrD$var$DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
const $xqrD$var$EVENT_ACTIVATE = `activate${$xqrD$var$EVENT_KEY$2}`;
const $xqrD$var$EVENT_SCROLL = `scroll${$xqrD$var$EVENT_KEY$2}`;
const $xqrD$var$EVENT_LOAD_DATA_API = `load${$xqrD$var$EVENT_KEY$2}${$xqrD$var$DATA_API_KEY$1}`;
const $xqrD$var$CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const $xqrD$var$CLASS_NAME_ACTIVE$1 = 'active';
const $xqrD$var$SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const $xqrD$var$SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const $xqrD$var$SELECTOR_NAV_LINKS = '.nav-link';
const $xqrD$var$SELECTOR_NAV_ITEMS = '.nav-item';
const $xqrD$var$SELECTOR_LIST_ITEMS = '.list-group-item';
const $xqrD$var$SELECTOR_LINK_ITEMS = `${$xqrD$var$SELECTOR_NAV_LINKS}, ${$xqrD$var$SELECTOR_LIST_ITEMS}, .${$xqrD$var$CLASS_NAME_DROPDOWN_ITEM}`;
const $xqrD$var$SELECTOR_DROPDOWN$1 = '.dropdown';
const $xqrD$var$SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const $xqrD$var$METHOD_OFFSET = 'offset';
const $xqrD$var$METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$ScrollSpy extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    $xqrD$var$EventHandler.on(this._scrollElement, $xqrD$var$EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
  } // Getters


  static get Default() {
    return $xqrD$var$Default$1;
  }

  static get NAME() {
    return $xqrD$var$NAME$2;
  } // Public


  refresh() {
    const autoMethod = this._scrollElement === this._scrollElement.window ? $xqrD$var$METHOD_OFFSET : $xqrD$var$METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === $xqrD$var$METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_LINK_ITEMS, this._config.target);
    targets.map(element => {
      const targetSelector = $xqrD$var$getSelectorFromElement(element);
      const target = targetSelector ? $xqrD$var$SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [$xqrD$var$Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
      this._offsets.push(item[0]);

      this._targets.push(item[1]);
    });
  }

  dispose() {
    $xqrD$var$EventHandler.off(this._scrollElement, $xqrD$var$EVENT_KEY$2);
    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default$1,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    config.target = $xqrD$var$getElement(config.target) || document.documentElement;
    $xqrD$var$typeCheckConfig($xqrD$var$NAME$2, config, $xqrD$var$DefaultType$1);
    return config;
  }

  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }

  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }

  _process() {
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      const target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (let i = this._offsets.length; i--;) {
      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  }

  _activate(target) {
    this._activeTarget = target;

    this._clear();

    const queries = $xqrD$var$SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
    const link = $xqrD$var$SelectorEngine.findOne(queries.join(','), this._config.target);
    link.classList.add($xqrD$var$CLASS_NAME_ACTIVE$1);

    if (link.classList.contains($xqrD$var$CLASS_NAME_DROPDOWN_ITEM)) {
      $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_DROPDOWN_TOGGLE$1, link.closest($xqrD$var$SELECTOR_DROPDOWN$1)).classList.add($xqrD$var$CLASS_NAME_ACTIVE$1);
    } else {
      $xqrD$var$SelectorEngine.parents(link, $xqrD$var$SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $xqrD$var$SelectorEngine.prev(listGroup, `${$xqrD$var$SELECTOR_NAV_LINKS}, ${$xqrD$var$SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add($xqrD$var$CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        $xqrD$var$SelectorEngine.prev(listGroup, $xqrD$var$SELECTOR_NAV_ITEMS).forEach(navItem => {
          $xqrD$var$SelectorEngine.children(navItem, $xqrD$var$SELECTOR_NAV_LINKS).forEach(item => item.classList.add($xqrD$var$CLASS_NAME_ACTIVE$1));
        });
      });
    }

    $xqrD$var$EventHandler.trigger(this._scrollElement, $xqrD$var$EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _clear() {
    $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains($xqrD$var$CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove($xqrD$var$CLASS_NAME_ACTIVE$1));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(window, $xqrD$var$EVENT_LOAD_DATA_API, () => {
  $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DATA_SPY).forEach(spy => new $xqrD$export$ScrollSpy(spy));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME$1 = 'tab';
const $xqrD$var$DATA_KEY$1 = 'bs.tab';
const $xqrD$var$EVENT_KEY$1 = `.${$xqrD$var$DATA_KEY$1}`;
const $xqrD$var$DATA_API_KEY = '.data-api';
const $xqrD$var$EVENT_HIDE$1 = `hide${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_HIDDEN$1 = `hidden${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_SHOW$1 = `show${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_SHOWN$1 = `shown${$xqrD$var$EVENT_KEY$1}`;
const $xqrD$var$EVENT_CLICK_DATA_API = `click${$xqrD$var$EVENT_KEY$1}${$xqrD$var$DATA_API_KEY}`;
const $xqrD$var$CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const $xqrD$var$CLASS_NAME_ACTIVE = 'active';
const $xqrD$var$CLASS_NAME_FADE$1 = 'fade';
const $xqrD$var$CLASS_NAME_SHOW$1 = 'show';
const $xqrD$var$SELECTOR_DROPDOWN = '.dropdown';
const $xqrD$var$SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const $xqrD$var$SELECTOR_ACTIVE = '.active';
const $xqrD$var$SELECTOR_ACTIVE_UL = ':scope > li > .active';
const $xqrD$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const $xqrD$var$SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const $xqrD$var$SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Tab extends $xqrD$var$BaseComponent {
  // Getters
  static get NAME() {
    return $xqrD$var$NAME$1;
  } // Public


  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($xqrD$var$CLASS_NAME_ACTIVE)) {
      return;
    }

    let previous;
    const target = $xqrD$var$getElementFromSelector(this._element);

    const listElement = this._element.closest($xqrD$var$SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? $xqrD$var$SELECTOR_ACTIVE_UL : $xqrD$var$SELECTOR_ACTIVE;
      previous = $xqrD$var$SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    const hideEvent = previous ? $xqrD$var$EventHandler.trigger(previous, $xqrD$var$EVENT_HIDE$1, {
      relatedTarget: this._element
    }) : null;
    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW$1, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    const complete = () => {
      $xqrD$var$EventHandler.trigger(previous, $xqrD$var$EVENT_HIDDEN$1, {
        relatedTarget: this._element
      });
      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN$1, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private


  _activate(element, container, callback) {
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_ACTIVE_UL, container) : $xqrD$var$SelectorEngine.children(container, $xqrD$var$SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains($xqrD$var$CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) {
      active.classList.remove($xqrD$var$CLASS_NAME_SHOW$1);

      this._queueCallback(complete, element, true);
    } else {
      complete();
    }
  }

  _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove($xqrD$var$CLASS_NAME_ACTIVE);
      const dropdownChild = $xqrD$var$SelectorEngine.findOne($xqrD$var$SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove($xqrD$var$CLASS_NAME_ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add($xqrD$var$CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    $xqrD$var$reflow(element);

    if (element.classList.contains($xqrD$var$CLASS_NAME_FADE$1)) {
      element.classList.add($xqrD$var$CLASS_NAME_SHOW$1);
    }

    let parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') {
      parent = parent.parentNode;
    }

    if (parent && parent.classList.contains($xqrD$var$CLASS_NAME_DROPDOWN_MENU)) {
      const dropdownElement = element.closest($xqrD$var$SELECTOR_DROPDOWN);

      if (dropdownElement) {
        $xqrD$var$SelectorEngine.find($xqrD$var$SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add($xqrD$var$CLASS_NAME_ACTIVE));
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Tab.getOrCreateInstance(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$xqrD$var$EventHandler.on(document, $xqrD$var$EVENT_CLICK_DATA_API, $xqrD$var$SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if ($xqrD$var$isDisabled(this)) {
    return;
  }

  const data = $xqrD$export$Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.0): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $xqrD$var$NAME = 'toast';
const $xqrD$var$DATA_KEY = 'bs.toast';
const $xqrD$var$EVENT_KEY = `.${$xqrD$var$DATA_KEY}`;
const $xqrD$var$EVENT_MOUSEOVER = `mouseover${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_MOUSEOUT = `mouseout${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_FOCUSIN = `focusin${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_FOCUSOUT = `focusout${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_HIDE = `hide${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_HIDDEN = `hidden${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_SHOW = `show${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$EVENT_SHOWN = `shown${$xqrD$var$EVENT_KEY}`;
const $xqrD$var$CLASS_NAME_FADE = 'fade';
const $xqrD$var$CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const $xqrD$var$CLASS_NAME_SHOW = 'show';
const $xqrD$var$CLASS_NAME_SHOWING = 'showing';
const $xqrD$var$DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const $xqrD$var$Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $xqrD$export$Toast extends $xqrD$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  } // Getters


  static get DefaultType() {
    return $xqrD$var$DefaultType;
  }

  static get Default() {
    return $xqrD$var$Default;
  }

  static get NAME() {
    return $xqrD$var$NAME;
  } // Public


  show() {
    const showEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add($xqrD$var$CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOWING);

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_SHOWN);

      this._maybeScheduleHide();
    };

    this._element.classList.remove($xqrD$var$CLASS_NAME_HIDE); // @deprecated


    $xqrD$var$reflow(this._element);

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOW);

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  hide() {
    if (!this._element.classList.contains($xqrD$var$CLASS_NAME_SHOW)) {
      return;
    }

    const hideEvent = $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add($xqrD$var$CLASS_NAME_HIDE); // @deprecated


      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOWING);

      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW);

      $xqrD$var$EventHandler.trigger(this._element, $xqrD$var$EVENT_HIDDEN);
    };

    this._element.classList.add($xqrD$var$CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  dispose() {
    this._clearTimeout();

    if (this._element.classList.contains($xqrD$var$CLASS_NAME_SHOW)) {
      this._element.classList.remove($xqrD$var$CLASS_NAME_SHOW);
    }

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$xqrD$var$Default,
      ...$xqrD$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    $xqrD$var$typeCheckConfig($xqrD$var$NAME, config, this.constructor.DefaultType);
    return config;
  }

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  }

  _setListeners() {
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_FOCUSIN, event => this._onInteraction(event, true));
    $xqrD$var$EventHandler.on(this._element, $xqrD$var$EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $xqrD$export$Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}

$xqrD$var$enableDismissTrigger($xqrD$export$Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

$xqrD$var$defineJQueryPlugin($xqrD$export$Toast);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var $vCxL$var$extendStatics = function (d, b) {
  $vCxL$var$extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return $vCxL$var$extendStatics(d, b);
};

function $vCxL$export$__extends(d, b) {
  $vCxL$var$extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var $vCxL$export$__assign = function () {
  $vCxL$export$__assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return $vCxL$export$__assign.apply(this, arguments);
};

function $vCxL$export$__decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function $vCxL$export$__spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function $vCxL$export$__await(v) {
  return this instanceof $vCxL$export$__await ? (this.v = v, this) : new $vCxL$export$__await(v);
}

;
// ASSET: ..\node_modules\core-js\internals\fails.js
var $pWu7$exports = {};

$pWu7$exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// ASSET: ..\node_modules\core-js\internals\classof-raw.js
var $jUdy$exports = {};
var $jUdy$var$toString = {}.toString;

$jUdy$exports = function (it) {
  return $jUdy$var$toString.call(it).slice(8, -1);
};

// ASSET: ..\node_modules\core-js\internals\indexed-object.js
var $Nn1j$exports = {};
var $Nn1j$var$split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

$Nn1j$exports = $pWu7$exports(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return $jUdy$exports(it) == 'String' ? $Nn1j$var$split.call(it, '') : Object(it);
} : Object;
// ASSET: ..\node_modules\core-js\internals\require-object-coercible.js
var $RWPB$exports = {}; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

$RWPB$exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// ASSET: ..\node_modules\core-js\internals\to-indexed-object.js
var $ebRX$exports = {}; // toObject with fallback for non-array-like ES3 strings

$ebRX$exports = function (it) {
  return $Nn1j$exports($RWPB$exports(it));
};

// ASSET: ..\node_modules\core-js\internals\global.js
var $MVLi$exports = {};

var $MVLi$var$check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


$MVLi$exports = // eslint-disable-next-line es/no-global-this -- safe
$MVLi$var$check(typeof globalThis == 'object' && globalThis) || $MVLi$var$check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
$MVLi$var$check(typeof self == 'object' && self) || $MVLi$var$check(typeof $parcel$global == 'object' && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

// ASSET: ..\node_modules\core-js\internals\is-pure.js
var $tGwT$exports = {};
$tGwT$exports = false;
// ASSET: ..\node_modules\core-js\internals\set-global.js
var $ScNd$exports = {};

$ScNd$exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty($MVLi$exports, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    $MVLi$exports[key] = value;
  }

  return value;
};

// ASSET: ..\node_modules\core-js\internals\shared-store.js
var $VcUc$exports = {};
var $VcUc$var$SHARED = '__core-js_shared__';
var $VcUc$var$store = $MVLi$exports[$VcUc$var$SHARED] || $ScNd$exports($VcUc$var$SHARED, {});
$VcUc$exports = $VcUc$var$store;
// ASSET: ..\node_modules\core-js\internals\shared.js
var $B1yS$exports = {};
($B1yS$exports = function (key, value) {
  return $VcUc$exports[key] || ($VcUc$exports[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.16.4',
  mode: $tGwT$exports ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});
// ASSET: ..\node_modules\core-js\internals\to-object.js
var $Q9KC$exports = {};

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$Q9KC$exports = function (argument) {
  return Object($RWPB$exports(argument));
};

// ASSET: ..\node_modules\core-js\internals\has.js
var $jYdl$exports = {};
var $jYdl$var$hasOwnProperty = {}.hasOwnProperty;

$jYdl$exports = Object.hasOwn || function hasOwn(it, key) {
  return $jYdl$var$hasOwnProperty.call($Q9KC$exports(it), key);
};

// ASSET: ..\node_modules\core-js\internals\uid.js
var $bxyG$exports = {};
var $bxyG$var$id = 0;
var $bxyG$var$postfix = Math.random();

$bxyG$exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++$bxyG$var$id + $bxyG$var$postfix).toString(36);
};

// ASSET: ..\node_modules\core-js\internals\get-built-in.js
var $mLk8$exports = {};

var $mLk8$var$aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

$mLk8$exports = function (namespace, method) {
  return arguments.length < 2 ? $mLk8$var$aFunction($MVLi$exports[namespace]) : $MVLi$exports[namespace] && $MVLi$exports[namespace][method];
};

// ASSET: ..\node_modules\core-js\internals\engine-user-agent.js
var $ds3C$exports = {};
$ds3C$exports = $mLk8$exports('navigator', 'userAgent') || '';
// ASSET: ..\node_modules\core-js\internals\engine-v8-version.js
var $mpuz$exports = {};
var $mpuz$var$process = $MVLi$exports.process;
var $mpuz$var$Deno = $MVLi$exports.Deno;
var $mpuz$var$versions = $mpuz$var$process && $mpuz$var$process.versions || $mpuz$var$Deno && $mpuz$var$Deno.version;
var $mpuz$var$v8 = $mpuz$var$versions && $mpuz$var$versions.v8;
var $mpuz$var$match, $mpuz$var$version;

if ($mpuz$var$v8) {
  $mpuz$var$match = $mpuz$var$v8.split('.');
  $mpuz$var$version = $mpuz$var$match[0] < 4 ? 1 : $mpuz$var$match[0] + $mpuz$var$match[1];
} else if ($ds3C$exports) {
  $mpuz$var$match = $ds3C$exports.match(/Edge\/(\d+)/);

  if (!$mpuz$var$match || $mpuz$var$match[1] >= 74) {
    $mpuz$var$match = $ds3C$exports.match(/Chrome\/(\d+)/);
    if ($mpuz$var$match) $mpuz$var$version = $mpuz$var$match[1];
  }
}

$mpuz$exports = $mpuz$var$version && +$mpuz$var$version;
// ASSET: ..\node_modules\core-js\internals\native-symbol.js
var $PgsN$exports = {};
/* eslint-disable es/no-symbol -- required for testing */

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
$PgsN$exports = !!Object.getOwnPropertySymbols && !$pWu7$exports(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && $mpuz$exports && $mpuz$exports < 41;
});
// ASSET: ..\node_modules\core-js\internals\use-symbol-as-uid.js
var $zoTj$exports = {};
/* eslint-disable es/no-symbol -- required for testing */

$zoTj$exports = $PgsN$exports && !Symbol.sham && typeof Symbol.iterator == 'symbol';
// ASSET: ..\node_modules\core-js\internals\well-known-symbol.js
var $Q0EA$exports = {};
var $Q0EA$var$WellKnownSymbolsStore = $B1yS$exports('wks');
var $Q0EA$var$Symbol = $MVLi$exports.Symbol;
var $Q0EA$var$createWellKnownSymbol = $zoTj$exports ? $Q0EA$var$Symbol : $Q0EA$var$Symbol && $Q0EA$var$Symbol.withoutSetter || $bxyG$exports;

$Q0EA$exports = function (name) {
  if (!$jYdl$exports($Q0EA$var$WellKnownSymbolsStore, name) || !($PgsN$exports || typeof $Q0EA$var$WellKnownSymbolsStore[name] == 'string')) {
    if ($PgsN$exports && $jYdl$exports($Q0EA$var$Symbol, name)) {
      $Q0EA$var$WellKnownSymbolsStore[name] = $Q0EA$var$Symbol[name];
    } else {
      $Q0EA$var$WellKnownSymbolsStore[name] = $Q0EA$var$createWellKnownSymbol('Symbol.' + name);
    }
  }

  return $Q0EA$var$WellKnownSymbolsStore[name];
};

// ASSET: ..\node_modules\core-js\internals\is-object.js
var $AsqF$exports = {};

$AsqF$exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// ASSET: ..\node_modules\core-js\internals\an-object.js
var $eAPg$exports = {};

$eAPg$exports = function (it) {
  if (!$AsqF$exports(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

// ASSET: ..\node_modules\core-js\internals\descriptors.js
var $A8Ob$exports = {};
// Detect IE8's incomplete defineProperty implementation
$A8Ob$exports = !$pWu7$exports(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});
// ASSET: ..\node_modules\core-js\internals\document-create-element.js
var $tvdn$exports = {};
var $tvdn$var$document = $MVLi$exports.document; // typeof document.createElement is 'object' in old IE

var $tvdn$var$EXISTS = $AsqF$exports($tvdn$var$document) && $AsqF$exports($tvdn$var$document.createElement);

$tvdn$exports = function (it) {
  return $tvdn$var$EXISTS ? $tvdn$var$document.createElement(it) : {};
};

// ASSET: ..\node_modules\core-js\internals\ie8-dom-define.js
var $nSk9$exports = {};
// Thank's IE8 for his funny defineProperty
$nSk9$exports = !$A8Ob$exports && !$pWu7$exports(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty($tvdn$exports('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});
// ASSET: ..\node_modules\core-js\internals\is-symbol.js
var $iVZU$exports = {};
$iVZU$exports = $zoTj$exports ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = $mLk8$exports('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};
// ASSET: ..\node_modules\core-js\internals\ordinary-to-primitive.js
var $lpse$exports = {};

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$lpse$exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !$AsqF$exports(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !$AsqF$exports(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !$AsqF$exports(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

// ASSET: ..\node_modules\core-js\internals\to-primitive.js
var $wZyz$exports = {};
var $wZyz$var$TO_PRIMITIVE = $Q0EA$exports('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

$wZyz$exports = function (input, pref) {
  if (!$AsqF$exports(input) || $iVZU$exports(input)) return input;
  var exoticToPrim = input[$wZyz$var$TO_PRIMITIVE];
  var result;

  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!$AsqF$exports(result) || $iVZU$exports(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return $lpse$exports(input, pref);
};

// ASSET: ..\node_modules\core-js\internals\to-property-key.js
var $CrCy$exports = {};

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$CrCy$exports = function (argument) {
  var key = $wZyz$exports(argument, 'string');
  return $iVZU$exports(key) ? key : String(key);
};

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $AtXZ$var$$defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

var $AtXZ$export$f = $A8Ob$exports ? $AtXZ$var$$defineProperty : function defineProperty(O, P, Attributes) {
  $eAPg$exports(O);
  P = $CrCy$exports(P);
  $eAPg$exports(Attributes);
  if ($nSk9$exports) try {
    return $AtXZ$var$$defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
// ASSET: ..\node_modules\core-js\internals\to-integer.js
var $GwUC$exports = {};
var $GwUC$var$ceil = Math.ceil;
var $GwUC$var$floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

$GwUC$exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? $GwUC$var$floor : $GwUC$var$ceil)(argument);
};

// ASSET: ..\node_modules\core-js\internals\to-length.js
var $j9AG$exports = {};
var $j9AG$var$min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

$j9AG$exports = function (argument) {
  return argument > 0 ? $j9AG$var$min($GwUC$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

// ASSET: ..\node_modules\core-js\internals\to-absolute-index.js
var $QLhU$exports = {};
var $QLhU$var$max = Math.max;
var $QLhU$var$min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

$QLhU$exports = function (index, length) {
  var integer = $GwUC$exports(index);
  return integer < 0 ? $QLhU$var$max(integer + length, 0) : $QLhU$var$min(integer, length);
};

// ASSET: ..\node_modules\core-js\internals\array-includes.js
var $b2MC$exports = {};

// `Array.prototype.{ indexOf, includes }` methods implementation
var $b2MC$var$createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = $ebRX$exports($this);
    var length = $j9AG$exports(O.length);
    var index = $QLhU$exports(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

$b2MC$exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: $b2MC$var$createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: $b2MC$var$createMethod(false)
};
// ASSET: ..\node_modules\core-js\internals\hidden-keys.js
var $Ln6o$exports = {};
$Ln6o$exports = {};
// ASSET: ..\node_modules\core-js\internals\object-keys-internal.js
var $ijOr$exports = {};
var $ijOr$var$indexOf = $b2MC$exports.indexOf;

$ijOr$exports = function (object, names) {
  var O = $ebRX$exports(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !$jYdl$exports($Ln6o$exports, key) && $jYdl$exports(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if ($jYdl$exports(O, key = names[i++])) {
    ~$ijOr$var$indexOf(result, key) || result.push(key);
  }

  return result;
};

// ASSET: ..\node_modules\core-js\internals\enum-bug-keys.js
var $asST$exports = {}; // IE8- don't enum bug keys

$asST$exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
// ASSET: ..\node_modules\core-js\internals\object-keys.js
var $rmL3$exports = {};

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
$rmL3$exports = Object.keys || function keys(O) {
  return $ijOr$exports(O, $asST$exports);
};

// ASSET: ..\node_modules\core-js\internals\object-define-properties.js
var $ZdKd$exports = {};
// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$ZdKd$exports = $A8Ob$exports ? Object.defineProperties : function defineProperties(O, Properties) {
  $eAPg$exports(O);
  var keys = $rmL3$exports(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) $AtXZ$export$f(O, key = keys[index++], Properties[key]);

  return O;
};
// ASSET: ..\node_modules\core-js\internals\html.js
var $tTwY$exports = {};
$tTwY$exports = $mLk8$exports('document', 'documentElement');
// ASSET: ..\node_modules\core-js\internals\shared-key.js
var $OIOG$exports = {};
var $OIOG$var$keys = $B1yS$exports('keys');

$OIOG$exports = function (key) {
  return $OIOG$var$keys[key] || ($OIOG$var$keys[key] = $bxyG$exports(key));
};

// ASSET: ..\node_modules\core-js\internals\object-create.js
var $zWsZ$exports = {};
/* global ActiveXObject -- old IE, WSH */

var $zWsZ$var$GT = '>';
var $zWsZ$var$LT = '<';
var $zWsZ$var$PROTOTYPE = 'prototype';
var $zWsZ$var$SCRIPT = 'script';
var $zWsZ$var$IE_PROTO = $OIOG$exports('IE_PROTO');

var $zWsZ$var$EmptyConstructor = function () {
  /* empty */
};

var $zWsZ$var$scriptTag = function (content) {
  return $zWsZ$var$LT + $zWsZ$var$SCRIPT + $zWsZ$var$GT + content + $zWsZ$var$LT + '/' + $zWsZ$var$SCRIPT + $zWsZ$var$GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var $zWsZ$var$NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write($zWsZ$var$scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var $zWsZ$var$NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = $tvdn$exports('iframe');
  var JS = 'java' + $zWsZ$var$SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  $tTwY$exports.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write($zWsZ$var$scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var $zWsZ$var$activeXDocument;

var $zWsZ$var$NullProtoObject = function () {
  try {
    $zWsZ$var$activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  $zWsZ$var$NullProtoObject = typeof document != 'undefined' ? document.domain && $zWsZ$var$activeXDocument ? $zWsZ$var$NullProtoObjectViaActiveX($zWsZ$var$activeXDocument) // old IE
  : $zWsZ$var$NullProtoObjectViaIFrame() : $zWsZ$var$NullProtoObjectViaActiveX($zWsZ$var$activeXDocument); // WSH

  var length = $asST$exports.length;

  while (length--) delete $zWsZ$var$NullProtoObject[$zWsZ$var$PROTOTYPE][$asST$exports[length]];

  return $zWsZ$var$NullProtoObject();
};

$Ln6o$exports[$zWsZ$var$IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

$zWsZ$exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    $zWsZ$var$EmptyConstructor[$zWsZ$var$PROTOTYPE] = $eAPg$exports(O);
    result = new $zWsZ$var$EmptyConstructor();
    $zWsZ$var$EmptyConstructor[$zWsZ$var$PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[$zWsZ$var$IE_PROTO] = O;
  } else result = $zWsZ$var$NullProtoObject();

  return Properties === undefined ? result : $ZdKd$exports(result, Properties);
};

// ASSET: ..\node_modules\core-js\internals\add-to-unscopables.js
var $Tevp$exports = {};
var $Tevp$var$UNSCOPABLES = $Q0EA$exports('unscopables');
var $Tevp$var$ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if ($Tevp$var$ArrayPrototype[$Tevp$var$UNSCOPABLES] == undefined) {
  $AtXZ$export$f($Tevp$var$ArrayPrototype, $Tevp$var$UNSCOPABLES, {
    configurable: true,
    value: $zWsZ$exports(null)
  });
} // add a key to Array.prototype[@@unscopables]


$Tevp$exports = function (key) {
  $Tevp$var$ArrayPrototype[$Tevp$var$UNSCOPABLES][key] = true;
};

// ASSET: ..\node_modules\core-js\internals\iterators.js
var $xPuL$exports = {};
$xPuL$exports = {};
// ASSET: ..\node_modules\core-js\internals\inspect-source.js
var $DE9Q$exports = {};
var $DE9Q$var$functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof $VcUc$exports.inspectSource != 'function') {
  $VcUc$exports.inspectSource = function (it) {
    return $DE9Q$var$functionToString.call(it);
  };
}

$DE9Q$exports = $VcUc$exports.inspectSource;
// ASSET: ..\node_modules\core-js\internals\native-weak-map.js
var $Z7Ix$exports = {};
var $Z7Ix$var$WeakMap = $MVLi$exports.WeakMap;
$Z7Ix$exports = typeof $Z7Ix$var$WeakMap === 'function' && /native code/.test($DE9Q$exports($Z7Ix$var$WeakMap));
// ASSET: ..\node_modules\core-js\internals\create-property-descriptor.js
var $oNyT$exports = {};

$oNyT$exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

// ASSET: ..\node_modules\core-js\internals\create-non-enumerable-property.js
var $GwPZ$exports = {};
$GwPZ$exports = $A8Ob$exports ? function (object, key, value) {
  return $AtXZ$export$f(object, key, $oNyT$exports(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
// ASSET: ..\node_modules\core-js\internals\internal-state.js
var $vLSK$exports = {};
var $vLSK$var$OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var $vLSK$var$WeakMap = $MVLi$exports.WeakMap;
var $vLSK$var$set, $vLSK$var$get, $vLSK$var$has;

var $vLSK$var$enforce = function (it) {
  return $vLSK$var$has(it) ? $vLSK$var$get(it) : $vLSK$var$set(it, {});
};

var $vLSK$var$getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!$AsqF$exports(it) || (state = $vLSK$var$get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if ($Z7Ix$exports || $VcUc$exports.state) {
  var $vLSK$var$store = $VcUc$exports.state || ($VcUc$exports.state = new $vLSK$var$WeakMap());
  var $vLSK$var$wmget = $vLSK$var$store.get;
  var $vLSK$var$wmhas = $vLSK$var$store.has;
  var $vLSK$var$wmset = $vLSK$var$store.set;

  $vLSK$var$set = function (it, metadata) {
    if ($vLSK$var$wmhas.call($vLSK$var$store, it)) throw new TypeError($vLSK$var$OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    $vLSK$var$wmset.call($vLSK$var$store, it, metadata);
    return metadata;
  };

  $vLSK$var$get = function (it) {
    return $vLSK$var$wmget.call($vLSK$var$store, it) || {};
  };

  $vLSK$var$has = function (it) {
    return $vLSK$var$wmhas.call($vLSK$var$store, it);
  };
} else {
  var $vLSK$var$STATE = $OIOG$exports('state');
  $Ln6o$exports[$vLSK$var$STATE] = true;

  $vLSK$var$set = function (it, metadata) {
    if ($jYdl$exports(it, $vLSK$var$STATE)) throw new TypeError($vLSK$var$OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    $GwPZ$exports(it, $vLSK$var$STATE, metadata);
    return metadata;
  };

  $vLSK$var$get = function (it) {
    return $jYdl$exports(it, $vLSK$var$STATE) ? it[$vLSK$var$STATE] : {};
  };

  $vLSK$var$has = function (it) {
    return $jYdl$exports(it, $vLSK$var$STATE);
  };
}

$vLSK$exports = {
  set: $vLSK$var$set,
  get: $vLSK$var$get,
  has: $vLSK$var$has,
  enforce: $vLSK$var$enforce,
  getterFor: $vLSK$var$getterFor
};
var $sC3y$var$$propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $sC3y$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var $sC3y$var$NASHORN_BUG = $sC3y$var$getOwnPropertyDescriptor && !$sC3y$var$$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

var $sC3y$export$f = $sC3y$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = $sC3y$var$getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $sC3y$var$$propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $zm15$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

var $zm15$export$f = $A8Ob$exports ? $zm15$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = $ebRX$exports(O);
  P = $CrCy$exports(P);
  if ($nSk9$exports) try {
    return $zm15$var$$getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if ($jYdl$exports(O, P)) return $oNyT$exports(!$sC3y$export$f.call(O, P), O[P]);
};
// ASSET: ..\node_modules\core-js\internals\redefine.js
var $ztZs$exports = {};
var $ztZs$var$getInternalState = $vLSK$exports.get;
var $ztZs$var$enforceInternalState = $vLSK$exports.enforce;
var $ztZs$var$TEMPLATE = String(String).split('String');
($ztZs$exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !$jYdl$exports(value, 'name')) {
      $GwPZ$exports(value, 'name', key);
    }

    state = $ztZs$var$enforceInternalState(value);

    if (!state.source) {
      state.source = $ztZs$var$TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }

  if (O === $MVLi$exports) {
    if (simple) O[key] = value;else $ScNd$exports(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else $GwPZ$exports(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && $ztZs$var$getInternalState(this).source || $DE9Q$exports(this);
});
var $QFCk$var$hiddenKeys = $asST$exports.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

var $QFCk$export$f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $ijOr$exports(O, $QFCk$var$hiddenKeys);
};

var $uqTD$export$f = Object.getOwnPropertySymbols; // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe

// ASSET: ..\node_modules\core-js\internals\own-keys.js
var $uZDC$exports = {};

// all object keys, includes non-enumerable and symbols
$uZDC$exports = $mLk8$exports('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = $QFCk$export$f($eAPg$exports(it));
  var getOwnPropertySymbols = $uqTD$export$f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

// ASSET: ..\node_modules\core-js\internals\copy-constructor-properties.js
var $dZUE$exports = {};

$dZUE$exports = function (target, source) {
  var keys = $uZDC$exports(source);
  var defineProperty = $AtXZ$export$f;
  var getOwnPropertyDescriptor = $zm15$export$f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!$jYdl$exports(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

// ASSET: ..\node_modules\core-js\internals\is-forced.js
var $Y6Gi$exports = {};
var $Y6Gi$var$replacement = /#|\.prototype\./;

var $Y6Gi$var$isForced = function (feature, detection) {
  var value = $Y6Gi$var$data[$Y6Gi$var$normalize(feature)];
  return value == $Y6Gi$var$POLYFILL ? true : value == $Y6Gi$var$NATIVE ? false : typeof detection == 'function' ? $pWu7$exports(detection) : !!detection;
};

var $Y6Gi$var$normalize = $Y6Gi$var$isForced.normalize = function (string) {
  return String(string).replace($Y6Gi$var$replacement, '.').toLowerCase();
};

var $Y6Gi$var$data = $Y6Gi$var$isForced.data = {};
var $Y6Gi$var$NATIVE = $Y6Gi$var$isForced.NATIVE = 'N';
var $Y6Gi$var$POLYFILL = $Y6Gi$var$isForced.POLYFILL = 'P';
$Y6Gi$exports = $Y6Gi$var$isForced;
// ASSET: ..\node_modules\core-js\internals\export.js
var $rhEq$exports = {};
var $rhEq$var$getOwnPropertyDescriptor = $zm15$export$f;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
$rhEq$exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = $MVLi$exports;
  } else if (STATIC) {
    target = $MVLi$exports[TARGET] || $ScNd$exports(TARGET, {});
  } else {
    target = ($MVLi$exports[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = $rhEq$var$getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = $Y6Gi$exports(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      $dZUE$exports(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      $GwPZ$exports(sourceProperty, 'sham', true);
    } // extend global


    $ztZs$exports(target, key, sourceProperty, options);
  }
};

// ASSET: ..\node_modules\core-js\internals\correct-prototype-getter.js
var $x9wq$exports = {};
$x9wq$exports = !$pWu7$exports(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});
// ASSET: ..\node_modules\core-js\internals\object-get-prototype-of.js
var $xeyN$exports = {};
var $xeyN$var$IE_PROTO = $OIOG$exports('IE_PROTO');
var $xeyN$var$ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

$xeyN$exports = $x9wq$exports ? Object.getPrototypeOf : function (O) {
  O = $Q9KC$exports(O);
  if ($jYdl$exports(O, $xeyN$var$IE_PROTO)) return O[$xeyN$var$IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? $xeyN$var$ObjectPrototype : null;
};
// ASSET: ..\node_modules\core-js\internals\iterators-core.js
var $Fgxq$exports = {};
var $Fgxq$var$ITERATOR = $Q0EA$exports('iterator');
var $Fgxq$var$BUGGY_SAFARI_ITERATORS = false;

var $Fgxq$var$returnThis = function () {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var $Fgxq$var$IteratorPrototype, $Fgxq$var$PrototypeOfArrayIteratorPrototype, $Fgxq$var$arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  $Fgxq$var$arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in $Fgxq$var$arrayIterator)) $Fgxq$var$BUGGY_SAFARI_ITERATORS = true;else {
    $Fgxq$var$PrototypeOfArrayIteratorPrototype = $xeyN$exports($xeyN$exports($Fgxq$var$arrayIterator));
    if ($Fgxq$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $Fgxq$var$IteratorPrototype = $Fgxq$var$PrototypeOfArrayIteratorPrototype;
  }
}

var $Fgxq$var$NEW_ITERATOR_PROTOTYPE = $Fgxq$var$IteratorPrototype == undefined || $pWu7$exports(function () {
  var test = {}; // FF44- legacy iterators case

  return $Fgxq$var$IteratorPrototype[$Fgxq$var$ITERATOR].call(test) !== test;
});
if ($Fgxq$var$NEW_ITERATOR_PROTOTYPE) $Fgxq$var$IteratorPrototype = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if ((!$tGwT$exports || $Fgxq$var$NEW_ITERATOR_PROTOTYPE) && !$jYdl$exports($Fgxq$var$IteratorPrototype, $Fgxq$var$ITERATOR)) {
  $GwPZ$exports($Fgxq$var$IteratorPrototype, $Fgxq$var$ITERATOR, $Fgxq$var$returnThis);
}

$Fgxq$exports = {
  IteratorPrototype: $Fgxq$var$IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: $Fgxq$var$BUGGY_SAFARI_ITERATORS
};
// ASSET: ..\node_modules\core-js\internals\set-to-string-tag.js
var $kLCt$exports = {};
var $kLCt$var$defineProperty = $AtXZ$export$f;
var $kLCt$var$TO_STRING_TAG = $Q0EA$exports('toStringTag');

$kLCt$exports = function (it, TAG, STATIC) {
  if (it && !$jYdl$exports(it = STATIC ? it : it.prototype, $kLCt$var$TO_STRING_TAG)) {
    $kLCt$var$defineProperty(it, $kLCt$var$TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

// ASSET: ..\node_modules\core-js\internals\create-iterator-constructor.js
var $v9Wl$exports = {};
var $v9Wl$var$IteratorPrototype = $Fgxq$exports.IteratorPrototype;

var $v9Wl$var$returnThis = function () {
  return this;
};

$v9Wl$exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = $zWsZ$exports($v9Wl$var$IteratorPrototype, {
    next: $oNyT$exports(1, next)
  });
  $kLCt$exports(IteratorConstructor, TO_STRING_TAG, false, true);
  $xPuL$exports[TO_STRING_TAG] = $v9Wl$var$returnThis;
  return IteratorConstructor;
};

// ASSET: ..\node_modules\core-js\internals\a-possible-prototype.js
var $ckfP$exports = {};

$ckfP$exports = function (it) {
  if (!$AsqF$exports(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

// ASSET: ..\node_modules\core-js\internals\object-set-prototype-of.js
var $eDCX$exports = {};
/* eslint-disable no-proto -- safe */

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
$eDCX$exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    $eAPg$exports(O);
    $ckfP$exports(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);
// ASSET: ..\node_modules\core-js\internals\define-iterator.js
var $CpaJ$exports = {};
var $CpaJ$var$IteratorPrototype = $Fgxq$exports.IteratorPrototype;
var $CpaJ$var$BUGGY_SAFARI_ITERATORS = $Fgxq$exports.BUGGY_SAFARI_ITERATORS;
var $CpaJ$var$ITERATOR = $Q0EA$exports('iterator');
var $CpaJ$var$KEYS = 'keys';
var $CpaJ$var$VALUES = 'values';
var $CpaJ$var$ENTRIES = 'entries';

var $CpaJ$var$returnThis = function () {
  return this;
};

$CpaJ$exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  $v9Wl$exports(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!$CpaJ$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case $CpaJ$var$KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case $CpaJ$var$VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case $CpaJ$var$ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[$CpaJ$var$ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !$CpaJ$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = $xeyN$exports(anyNativeIterator.call(new Iterable()));

    if ($CpaJ$var$IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!$tGwT$exports && $xeyN$exports(CurrentIteratorPrototype) !== $CpaJ$var$IteratorPrototype) {
        if ($eDCX$exports) {
          $eDCX$exports(CurrentIteratorPrototype, $CpaJ$var$IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[$CpaJ$var$ITERATOR] != 'function') {
          $GwPZ$exports(CurrentIteratorPrototype, $CpaJ$var$ITERATOR, $CpaJ$var$returnThis);
        }
      } // Set @@toStringTag to native iterators


      $kLCt$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if ($tGwT$exports) $xPuL$exports[TO_STRING_TAG] = $CpaJ$var$returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (DEFAULT == $CpaJ$var$VALUES && nativeIterator && nativeIterator.name !== $CpaJ$var$VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!$tGwT$exports || FORCED) && IterablePrototype[$CpaJ$var$ITERATOR] !== defaultIterator) {
    $GwPZ$exports(IterablePrototype, $CpaJ$var$ITERATOR, defaultIterator);
  }

  $xPuL$exports[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod($CpaJ$var$VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod($CpaJ$var$KEYS),
      entries: getIterationMethod($CpaJ$var$ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if ($CpaJ$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        $ztZs$exports(IterablePrototype, KEY, methods[KEY]);
      }
    } else $rhEq$exports({
      target: NAME,
      proto: true,
      forced: $CpaJ$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

var $S91k$var$ARRAY_ITERATOR = 'Array Iterator';
var $S91k$var$setInternalState = $vLSK$exports.set;
var $S91k$var$getInternalState = $vLSK$exports.getterFor($S91k$var$ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
$xPuL$exports.Arguments = $xPuL$exports.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

$Tevp$exports('keys');
$Tevp$exports('values');
$Tevp$exports('entries');
// ASSET: ..\node_modules\core-js\internals\object-get-own-property-names-external.js
var $BNtO$exports = {};
/* eslint-disable es/no-object-getownpropertynames -- safe */

var $BNtO$var$$getOwnPropertyNames = $QFCk$export$f;
var $BNtO$var$toString = {}.toString;
var $BNtO$var$windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var $BNtO$var$getWindowNames = function (it) {
  try {
    return $BNtO$var$$getOwnPropertyNames(it);
  } catch (error) {
    return $BNtO$var$windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


$BNtO$exports.f = function getOwnPropertyNames(it) {
  return $BNtO$var$windowNames && $BNtO$var$toString.call(it) == '[object Window]' ? $BNtO$var$getWindowNames(it) : $BNtO$var$$getOwnPropertyNames($ebRX$exports(it));
};

// ASSET: ..\node_modules\core-js\internals\freezing.js
var $ZrZO$exports = {};
$ZrZO$exports = !$pWu7$exports(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});
// ASSET: ..\node_modules\core-js\internals\internal-metadata.js
var $Cjms$exports = {};
var $Cjms$var$defineProperty = $AtXZ$export$f;
var $Cjms$var$REQUIRED = false;
var $Cjms$var$METADATA = $bxyG$exports('meta');
var $Cjms$var$id = 0; // eslint-disable-next-line es/no-object-isextensible -- safe

var $Cjms$var$isExtensible = Object.isExtensible || function () {
  return true;
};

var $Cjms$var$setMetadata = function (it) {
  $Cjms$var$defineProperty(it, $Cjms$var$METADATA, {
    value: {
      objectID: 'O' + $Cjms$var$id++,
      // object ID
      weakData: {} // weak collections IDs

    }
  });
};

var $Cjms$var$fastKey = function (it, create) {
  // return a primitive with prefix
  if (!$AsqF$exports(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!$jYdl$exports(it, $Cjms$var$METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!$Cjms$var$isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    $Cjms$var$setMetadata(it); // return object ID
  }

  return it[$Cjms$var$METADATA].objectID;
};

var $Cjms$var$getWeakData = function (it, create) {
  if (!$jYdl$exports(it, $Cjms$var$METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!$Cjms$var$isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    $Cjms$var$setMetadata(it); // return the store of weak collections IDs
  }

  return it[$Cjms$var$METADATA].weakData;
}; // add metadata on freeze-family methods calling


var $Cjms$var$onFreeze = function (it) {
  if ($ZrZO$exports && $Cjms$var$REQUIRED && $Cjms$var$isExtensible(it) && !$jYdl$exports(it, $Cjms$var$METADATA)) $Cjms$var$setMetadata(it);
  return it;
};

var $Cjms$var$enable = function () {
  $Cjms$var$meta.enable = function () {
    /* empty */
  };

  $Cjms$var$REQUIRED = true;
  var getOwnPropertyNames = $QFCk$export$f;
  var splice = [].splice;
  var test = {};
  test[$Cjms$var$METADATA] = 1; // prevent exposing of metadata key

  if (getOwnPropertyNames(test).length) {
    $rhEq$exports({
      target: 'Object',
      stat: true,
      forced: true
    }, {
      getOwnPropertyNames: $BNtO$exports.f
    });
  }
};

var $Cjms$var$meta = $Cjms$exports = {
  enable: $Cjms$var$enable,
  fastKey: $Cjms$var$fastKey,
  getWeakData: $Cjms$var$getWeakData,
  onFreeze: $Cjms$var$onFreeze
};
$Ln6o$exports[$Cjms$var$METADATA] = true;
// ASSET: ..\node_modules\core-js\internals\is-array-iterator-method.js
var $XTOV$exports = {};
var $XTOV$var$ITERATOR = $Q0EA$exports('iterator');
var $XTOV$var$ArrayPrototype = Array.prototype; // check on default Array iterator

$XTOV$exports = function (it) {
  return it !== undefined && ($xPuL$exports.Array === it || $XTOV$var$ArrayPrototype[$XTOV$var$ITERATOR] === it);
};

// ASSET: ..\node_modules\core-js\internals\a-function.js
var $SOPX$exports = {};

$SOPX$exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

// ASSET: ..\node_modules\core-js\internals\function-bind-context.js
var $dEmF$exports = {};

// optional / simple context binding
$dEmF$exports = function (fn, that, length) {
  $SOPX$exports(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function () {
    return fn.apply(that, arguments);
  };
};

// ASSET: ..\node_modules\core-js\internals\to-string-tag-support.js
var $PN7D$exports = {};
var $PN7D$var$TO_STRING_TAG = $Q0EA$exports('toStringTag');
var $PN7D$var$test = {};
$PN7D$var$test[$PN7D$var$TO_STRING_TAG] = 'z';
$PN7D$exports = String($PN7D$var$test) === '[object z]';
// ASSET: ..\node_modules\core-js\internals\classof.js
var $rs2T$exports = {};
var $rs2T$var$TO_STRING_TAG = $Q0EA$exports('toStringTag'); // ES3 wrong here

var $rs2T$var$CORRECT_ARGUMENTS = $jUdy$exports(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var $rs2T$var$tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


$rs2T$exports = $PN7D$exports ? $jUdy$exports : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = $rs2T$var$tryGet(O = Object(it), $rs2T$var$TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : $rs2T$var$CORRECT_ARGUMENTS ? $jUdy$exports(O) // ES3 arguments fallback
  : (result = $jUdy$exports(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};
// ASSET: ..\node_modules\core-js\internals\get-iterator-method.js
var $VM64$exports = {};
var $VM64$var$ITERATOR = $Q0EA$exports('iterator');

$VM64$exports = function (it) {
  if (it != undefined) return it[$VM64$var$ITERATOR] || it['@@iterator'] || $xPuL$exports[$rs2T$exports(it)];
};

// ASSET: ..\node_modules\core-js\internals\get-iterator.js
var $Uult$exports = {};

$Uult$exports = function (it, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? $VM64$exports(it) : usingIterator;

  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  }

  return $eAPg$exports(iteratorMethod.call(it));
};

// ASSET: ..\node_modules\core-js\internals\iterator-close.js
var $mMyD$exports = {};

$mMyD$exports = function (iterator, kind, value) {
  var innerResult, innerError;
  $eAPg$exports(iterator);

  try {
    innerResult = iterator['return'];

    if (innerResult === undefined) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  $eAPg$exports(innerResult);
  return value;
};

// ASSET: ..\node_modules\core-js\internals\iterate.js
var $Oj1G$exports = {};

var $Oj1G$var$Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

$Oj1G$exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = $dEmF$exports(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) $mMyD$exports(iterator, 'return', condition);
    return new $Oj1G$var$Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      $eAPg$exports(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = $VM64$exports(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if ($XTOV$exports(iterFn)) {
      for (index = 0, length = $j9AG$exports(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof $Oj1G$var$Result) return result;
      }

      return new $Oj1G$var$Result(false);
    }

    iterator = $Uult$exports(iterable, iterFn);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      $mMyD$exports(iterator, 'throw', error);
    }

    if (typeof result == 'object' && result && result instanceof $Oj1G$var$Result) return result;
  }

  return new $Oj1G$var$Result(false);
};

// ASSET: ..\node_modules\core-js\internals\an-instance.js
var $pJoy$exports = {};

$pJoy$exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }

  return it;
};

// ASSET: ..\node_modules\core-js\internals\check-correctness-of-iteration.js
var $XOlJ$exports = {};
var $XOlJ$var$ITERATOR = $Q0EA$exports('iterator');
var $XOlJ$var$SAFE_CLOSING = false;

try {
  var $XOlJ$var$called = 0;
  var $XOlJ$var$iteratorWithReturn = {
    next: function () {
      return {
        done: !!$XOlJ$var$called++
      };
    },
    'return': function () {
      $XOlJ$var$SAFE_CLOSING = true;
    }
  };

  $XOlJ$var$iteratorWithReturn[$XOlJ$var$ITERATOR] = function () {
    return this;
  }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


  Array.from($XOlJ$var$iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

$XOlJ$exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !$XOlJ$var$SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[$XOlJ$var$ITERATOR] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

// ASSET: ..\node_modules\core-js\internals\inherit-if-required.js
var $e5oz$exports = {};

// makes subclassing work correct for wrapped built-ins
$e5oz$exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  $eDCX$exports && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && $AsqF$exports(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) $eDCX$exports($this, NewTargetPrototype);
  return $this;
};

// ASSET: ..\node_modules\core-js\internals\collection.js
var $eBDp$exports = {};

$eBDp$exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = $MVLi$exports[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    $ztZs$exports(NativePrototype, KEY, KEY == 'add' ? function add(value) {
      nativeMethod.call(this, value === 0 ? 0 : value);
      return this;
    } : KEY == 'delete' ? function (key) {
      return IS_WEAK && !$AsqF$exports(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
    } : KEY == 'get' ? function get(key) {
      return IS_WEAK && !$AsqF$exports(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
    } : KEY == 'has' ? function has(key) {
      return IS_WEAK && !$AsqF$exports(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
    } : function set(key, value) {
      nativeMethod.call(this, key === 0 ? 0 : key, value);
      return this;
    });
  };

  var REPLACE = $Y6Gi$exports(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !$pWu7$exports(function () {
    new NativeConstructor().entries().next();
  })));

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    $Cjms$exports.enable();
  } else if ($Y6Gi$exports(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = $pWu7$exports(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing

    var ACCEPT_ITERABLES = $XOlJ$exports(function (iterable) {
      new NativeConstructor(iterable);
    }); // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && $pWu7$exports(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;

      while (index--) $instance[ADDER](index, index);

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        $pJoy$exports(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = $e5oz$exports(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) $Oj1G$exports(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $rhEq$exports({
    global: true,
    forced: Constructor != NativeConstructor
  }, exported);
  $kLCt$exports(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

// ASSET: ..\node_modules\core-js\internals\redefine-all.js
var $oPIw$exports = {};

$oPIw$exports = function (target, src, options) {
  for (var key in src) $ztZs$exports(target, key, src[key], options);

  return target;
};

var $bDBP$var$SPECIES = $Q0EA$exports('species');
var $wHth$var$define;
var $wHth$var$fastKey = $Cjms$exports.fastKey;
var $wHth$var$setInternalState = $vLSK$exports.set;
var $wHth$var$internalStateGetterFor = $vLSK$exports.getterFor;
// ASSET: ..\node_modules\core-js\internals\object-to-string.js
var $oSqY$exports = {};
// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
$oSqY$exports = $PN7D$exports ? {}.toString : function toString() {
  return '[object ' + $rs2T$exports(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!$PN7D$exports) {
  $ztZs$exports(Object.prototype, 'toString', $oSqY$exports, {
    unsafe: true
  });
}

// ASSET: ..\node_modules\core-js\internals\to-string.js
var $q9IP$exports = {};

$q9IP$exports = function (argument) {
  if ($iVZU$exports(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};

// ASSET: ..\node_modules\core-js\internals\string-multibyte.js
var $FQEJ$exports = {};

// `String.prototype.codePointAt` methods implementation
var $FQEJ$var$createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = $q9IP$exports($RWPB$exports($this));
    var position = $GwUC$exports(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

$FQEJ$exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: $FQEJ$var$createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: $FQEJ$var$createMethod(true)
};
// ASSET: ..\node_modules\core-js\modules\es.string.iterator.js
var $PSYM$var$charAt = $FQEJ$exports.charAt;
var $PSYM$var$STRING_ITERATOR = 'String Iterator';
var $PSYM$var$setInternalState = $vLSK$exports.set;
var $PSYM$var$getInternalState = $vLSK$exports.getterFor($PSYM$var$STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

$CpaJ$exports(String, 'String', function (iterated) {
  $PSYM$var$setInternalState(this, {
    type: $PSYM$var$STRING_ITERATOR,
    string: $q9IP$exports(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = $PSYM$var$getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = $PSYM$var$charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});
// ASSET: ..\node_modules\core-js\internals\is-array.js
var $oqXF$exports = {};

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
$oqXF$exports = Array.isArray || function isArray(arg) {
  return $jUdy$exports(arg) == 'Array';
};

// ASSET: ..\node_modules\core-js\internals\array-species-constructor.js
var $i2S7$exports = {};
var $i2S7$var$SPECIES = $Q0EA$exports('species'); // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

$i2S7$exports = function (originalArray) {
  var C;

  if ($oqXF$exports(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || $oqXF$exports(C.prototype))) C = undefined;else if ($AsqF$exports(C)) {
      C = C[$i2S7$var$SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

// ASSET: ..\node_modules\core-js\internals\array-species-create.js
var $e6WL$exports = {};

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
$e6WL$exports = function (originalArray, length) {
  return new ($i2S7$exports(originalArray))(length === 0 ? 0 : length);
};

// ASSET: ..\node_modules\core-js\internals\array-iteration.js
var $EUh8$exports = {};
var $EUh8$var$push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var $EUh8$var$createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = $Q9KC$exports($this);
    var self = $Nn1j$exports(O);
    var boundFunction = $dEmF$exports(callbackfn, that, 3);
    var length = $j9AG$exports(self.length);
    var index = 0;
    var create = specificCreate || $e6WL$exports;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            $EUh8$var$push.call(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            $EUh8$var$push.call(target, value);
          // filterReject
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

$EUh8$exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: $EUh8$var$createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: $EUh8$var$createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: $EUh8$var$createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: $EUh8$var$createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: $EUh8$var$createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: $EUh8$var$createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: $EUh8$var$createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: $EUh8$var$createMethod(7)
};
// ASSET: ..\node_modules\core-js\internals\collection-weak.js
var $cqZs$exports = {};
var $cqZs$var$define;
var $cqZs$var$getWeakData = $Cjms$exports.getWeakData;
var $cqZs$var$setInternalState = $vLSK$exports.set;
var $cqZs$var$internalStateGetterFor = $vLSK$exports.getterFor;
var $cqZs$var$find = $EUh8$exports.find;
var $cqZs$var$findIndex = $EUh8$exports.findIndex;
var $cqZs$var$id = 0; // fallback for uncaught frozen keys

var $cqZs$var$uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new $cqZs$var$UncaughtFrozenStore());
};

var $cqZs$var$UncaughtFrozenStore = function () {
  this.entries = [];
};

var $cqZs$var$findUncaughtFrozen = function (store, key) {
  return $cqZs$var$find(store.entries, function (it) {
    return it[0] === key;
  });
};

$cqZs$var$UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = $cqZs$var$findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!$cqZs$var$findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = $cqZs$var$findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = $cqZs$var$findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};
$cqZs$exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      $pJoy$exports(that, C, CONSTRUCTOR_NAME);
      $cqZs$var$setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: $cqZs$var$id++,
        frozen: undefined
      });
      if (iterable != undefined) $Oj1G$exports(iterable, that[ADDER], {
        that: that,
        AS_ENTRIES: IS_MAP
      });
    });
    var getInternalState = $cqZs$var$internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = $cqZs$var$getWeakData($eAPg$exports(key), true);
      if (data === true) $cqZs$var$uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
      return that;
    };

    $oPIw$exports(C.prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!$AsqF$exports(key)) return false;
        var data = $cqZs$var$getWeakData(key);
        if (data === true) return $cqZs$var$uncaughtFrozenStore(state)['delete'](key);
        return data && $jYdl$exports(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!$AsqF$exports(key)) return false;
        var data = $cqZs$var$getWeakData(key);
        if (data === true) return $cqZs$var$uncaughtFrozenStore(state).has(key);
        return data && $jYdl$exports(data, state.id);
      }
    });
    $oPIw$exports(C.prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);

        if ($AsqF$exports(key)) {
          var data = $cqZs$var$getWeakData(key);
          if (data === true) return $cqZs$var$uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });
    return C;
  }
};
var $VLkh$var$enforceIternalState = $vLSK$exports.enforce;
var $VLkh$var$IS_IE11 = !$MVLi$exports.ActiveXObject && 'ActiveXObject' in $MVLi$exports; // eslint-disable-next-line es/no-object-isextensible -- safe

var $VLkh$var$isExtensible = Object.isExtensible;
var $VLkh$var$InternalWeakMap;

var $VLkh$var$wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}; // `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor


var $VLkh$var$$WeakMap = $eBDp$exports('WeakMap', $VLkh$var$wrapper, $cqZs$exports); // IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485

if ($Z7Ix$exports && $VLkh$var$IS_IE11) {
  $VLkh$var$InternalWeakMap = $cqZs$exports.getConstructor($VLkh$var$wrapper, 'WeakMap', true);
  $Cjms$exports.enable();
  var $VLkh$var$WeakMapPrototype = $VLkh$var$$WeakMap.prototype;
  var $VLkh$var$nativeDelete = $VLkh$var$WeakMapPrototype['delete'];
  var $VLkh$var$nativeHas = $VLkh$var$WeakMapPrototype.has;
  var $VLkh$var$nativeGet = $VLkh$var$WeakMapPrototype.get;
  var $VLkh$var$nativeSet = $VLkh$var$WeakMapPrototype.set;
  $oPIw$exports($VLkh$var$WeakMapPrototype, {
    'delete': function (key) {
      if ($AsqF$exports(key) && !$VLkh$var$isExtensible(key)) {
        var state = $VLkh$var$enforceIternalState(this);
        if (!state.frozen) state.frozen = new $VLkh$var$InternalWeakMap();
        return $VLkh$var$nativeDelete.call(this, key) || state.frozen['delete'](key);
      }

      return $VLkh$var$nativeDelete.call(this, key);
    },
    has: function has(key) {
      if ($AsqF$exports(key) && !$VLkh$var$isExtensible(key)) {
        var state = $VLkh$var$enforceIternalState(this);
        if (!state.frozen) state.frozen = new $VLkh$var$InternalWeakMap();
        return $VLkh$var$nativeHas.call(this, key) || state.frozen.has(key);
      }

      return $VLkh$var$nativeHas.call(this, key);
    },
    get: function get(key) {
      if ($AsqF$exports(key) && !$VLkh$var$isExtensible(key)) {
        var state = $VLkh$var$enforceIternalState(this);
        if (!state.frozen) state.frozen = new $VLkh$var$InternalWeakMap();
        return $VLkh$var$nativeHas.call(this, key) ? $VLkh$var$nativeGet.call(this, key) : state.frozen.get(key);
      }

      return $VLkh$var$nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if ($AsqF$exports(key) && !$VLkh$var$isExtensible(key)) {
        var state = $VLkh$var$enforceIternalState(this);
        if (!state.frozen) state.frozen = new $VLkh$var$InternalWeakMap();
        $VLkh$var$nativeHas.call(this, key) ? $VLkh$var$nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else $VLkh$var$nativeSet.call(this, key, value);

      return this;
    }
  });
}

// ASSET: ..\node_modules\core-js\internals\call-with-safe-iteration-closing.js
var $DQY6$exports = {};

// call something on iterator step with safe closing on error
$DQY6$exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn($eAPg$exports(value)[0], value[1]) : fn(value);
  } catch (error) {
    $mMyD$exports(iterator, 'throw', error);
  }
};

// ASSET: ..\node_modules\core-js\internals\create-property.js
var $qU9w$exports = {};

$qU9w$exports = function (object, key, value) {
  var propertyKey = $CrCy$exports(key);
  if (propertyKey in object) $AtXZ$export$f(object, propertyKey, $oNyT$exports(0, value));else object[propertyKey] = value;
};

// ASSET: ..\node_modules\core-js\internals\array-from.js
var $ITnL$exports = {};

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
$ITnL$exports = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = $Q9KC$exports(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = $VM64$exports(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = $dEmF$exports(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod != undefined && !(C == Array && $XTOV$exports(iteratorMethod))) {
    iterator = $Uult$exports(O, iteratorMethod);
    next = iterator.next;
    result = new C();

    for (; !(step = next.call(iterator)).done; index++) {
      value = mapping ? $DQY6$exports(iterator, mapfn, [step.value, index], true) : step.value;
      $qU9w$exports(result, index, value);
    }
  } else {
    length = $j9AG$exports(O.length);
    result = new C(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      $qU9w$exports(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var $Tzrg$var$INCORRECT_ITERATION = !$XOlJ$exports(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
}); // `Array.from` method
// https://tc39.es/ecma262/#sec-array.from

$rhEq$exports({
  target: 'Array',
  stat: true,
  forced: $Tzrg$var$INCORRECT_ITERATION
}, {
  from: $ITnL$exports
});
// ASSET: ..\node_modules\core-js\internals\object-assign.js
var $aWUw$exports = {};
// eslint-disable-next-line es/no-object-assign -- safe
var $aWUw$var$$assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var $aWUw$var$defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

$aWUw$exports = !$aWUw$var$$assign || $pWu7$exports(function () {
  // should have correct order of operations (Edge bug)
  if ($A8Ob$exports && $aWUw$var$$assign({
    b: 1
  }, $aWUw$var$$assign($aWUw$var$defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      $aWUw$var$defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $aWUw$var$$assign({}, A)[symbol] != 7 || $rmL3$exports($aWUw$var$$assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = $Q9KC$exports(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = $uqTD$export$f;
  var propertyIsEnumerable = $sC3y$export$f;

  while (argumentsLength > index) {
    var S = $Nn1j$exports(arguments[index++]);
    var keys = getOwnPropertySymbols ? $rmL3$exports(S).concat(getOwnPropertySymbols(S)) : $rmL3$exports(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!$A8Ob$exports || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $aWUw$var$$assign;
// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$rhEq$exports({
  target: 'Object',
  stat: true,
  forced: Object.assign !== $aWUw$exports
}, {
  assign: $aWUw$exports
});
var $aW5b$var$global = arguments[0];

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function $cmLq$export$default(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }

    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }

  return number;
}

/** Used to match a single whitespace character. */
var $u2to$var$reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */

function $u2to$export$default(string) {
  var index = string.length;

  while (index-- && $u2to$var$reWhitespace.test(string.charAt(index))) {}

  return index;
}

/** Used to match leading whitespace. */
var $R6PJ$var$reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */

function $R6PJ$export$default(string) {
  return string ? string.slice(0, $u2to$export$default(string) + 1).replace($R6PJ$var$reTrimStart, '') : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function $DTZk$export$default(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Detect free variable `global` from Node.js. */
var $iJ7y$export$default = typeof $parcel$global == 'object' && $parcel$global && $parcel$global.Object === Object && $parcel$global;

/** Detect free variable `self`. */
var $ygki$var$freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var $ygki$export$default = $iJ7y$export$default || $ygki$var$freeSelf || Function('return this')();

/** Built-in value references. */
var $Oi8n$export$default = $ygki$export$default.Symbol;

/** Used for built-in method references. */
var $InRc$var$objectProto = Object.prototype;
/** Used to check objects for own properties. */

var $InRc$var$hasOwnProperty = $InRc$var$objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var $InRc$var$nativeObjectToString = $InRc$var$objectProto.toString;
/** Built-in value references. */

var $InRc$var$symToStringTag = $Oi8n$export$default ? $Oi8n$export$default.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function $InRc$export$default(value) {
  var isOwn = $InRc$var$hasOwnProperty.call(value, $InRc$var$symToStringTag),
      tag = value[$InRc$var$symToStringTag];

  try {
    value[$InRc$var$symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = $InRc$var$nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[$InRc$var$symToStringTag] = tag;
    } else {
      delete value[$InRc$var$symToStringTag];
    }
  }

  return result;
}

/** Used for built-in method references. */
var $iwg4$var$objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var $iwg4$var$nativeObjectToString = $iwg4$var$objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function $iwg4$export$default(value) {
  return $iwg4$var$nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var $svpX$var$nullTag = '[object Null]',
    $svpX$var$undefinedTag = '[object Undefined]';
/** Built-in value references. */

var $svpX$var$symToStringTag = $Oi8n$export$default ? $Oi8n$export$default.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function $svpX$export$default(value) {
  if (value == null) {
    return value === undefined ? $svpX$var$undefinedTag : $svpX$var$nullTag;
  }

  return $svpX$var$symToStringTag && $svpX$var$symToStringTag in Object(value) ? $InRc$export$default(value) : $iwg4$export$default(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function $UKR9$export$default(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var $Z7xV$var$symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function $Z7xV$export$default(value) {
  return typeof value == 'symbol' || $UKR9$export$default(value) && $svpX$export$default(value) == $Z7xV$var$symbolTag;
}

/** Used as references for various `Number` constants. */
var $h7oO$var$NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */

var $h7oO$var$reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var $h7oO$var$reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var $h7oO$var$reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var $h7oO$var$freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function $h7oO$export$default(value) {
  if (typeof value == 'number') {
    return value;
  }

  if ($Z7xV$export$default(value)) {
    return $h7oO$var$NAN;
  }

  if ($DTZk$export$default(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = $DTZk$export$default(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = $R6PJ$export$default(value);
  var isBinary = $h7oO$var$reIsBinary.test(value);
  return isBinary || $h7oO$var$reIsOctal.test(value) ? $h7oO$var$freeParseInt(value.slice(2), isBinary ? 2 : 8) : $h7oO$var$reIsBadHex.test(value) ? $h7oO$var$NAN : +value;
}

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function $bP7q$export$default(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }

  if (upper !== undefined) {
    upper = $h7oO$export$default(upper);
    upper = upper === upper ? upper : 0;
  }

  if (lower !== undefined) {
    lower = $h7oO$export$default(lower);
    lower = lower === lower ? lower : 0;
  }

  return $cmLq$export$default($h7oO$export$default(number), lower, upper);
}

function $hBU2$export$range(min, max) {
  if (min === void 0) {
    min = -Infinity;
  }

  if (max === void 0) {
    max = Infinity;
  }

  return function (proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
      get: function () {
        return this[alias];
      },
      set: function (val) {
        Object.defineProperty(this, alias, {
          value: $bP7q$export$default(val, min, max),
          enumerable: false,
          writable: true,
          configurable: true
        });
      },
      enumerable: true,
      configurable: true
    });
  };
} //# sourceMappingURL=range.js.map


function $AK6q$export$boolean(proto, key) {
  var alias = "_" + key;
  Object.defineProperty(proto, key, {
    get: function () {
      return this[alias];
    },
    set: function (val) {
      Object.defineProperty(this, alias, {
        value: !!val,
        enumerable: false,
        writable: true,
        configurable: true
      });
    },
    enumerable: true,
    configurable: true
  });
} //# sourceMappingURL=boolean.js.map


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var $dHTG$export$default = function () {
  return $ygki$export$default.Date.now();
};

/** Error message constants. */
var $WAyo$var$FUNC_ERROR_TEXT = 'Expected a function';
/* Built-in method references for those with the same name as other `lodash` methods. */

var $WAyo$var$nativeMax = Math.max,
    $WAyo$var$nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */

function $WAyo$export$default(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError($WAyo$var$FUNC_ERROR_TEXT);
  }

  wait = $h7oO$export$default(wait) || 0;

  if ($DTZk$export$default(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? $WAyo$var$nativeMax($h7oO$export$default(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
    return maxing ? $WAyo$var$nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = $dHTG$export$default();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge($dHTG$export$default());
  }

  function debounced() {
    var time = $dHTG$export$default(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

function $amtm$export$debounce() {
  var options = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    options[_i] = arguments[_i];
  }

  return function (_proto, key, descriptor) {
    var fn = descriptor.value;
    return {
      get: function () {
        if (!this.hasOwnProperty(key)) {
          Object.defineProperty(this, key, {
            value: $WAyo$export$default.apply(void 0, $vCxL$export$__spreadArrays([fn], options))
          });
        }

        return this[key];
      }
    };
  };
} //# sourceMappingURL=debounce.js.map


var $tvqP$export$Options = function () {
  function Options(config) {
    var _this = this;

    if (config === void 0) {
      config = {};
    }
    /**
     * Momentum reduction damping factor, a float value between `(0, 1)`.
     * The lower the value is, the more smooth the scrolling will be
     * (also the more paint frames).
     */


    this.damping = 0.1;
    /**
     * Minimal size for scrollbar thumbs.
     */

    this.thumbMinSize = 20;
    /**
     * Render every frame in integer pixel values
     * set to `true` to improve scrolling performance.
     */

    this.renderByPixels = true;
    /**
     * Keep scrollbar tracks visible
     */

    this.alwaysShowTracks = false;
    /**
     * Set to `true` to allow outer scrollbars continue scrolling
     * when current scrollbar reaches edge.
     */

    this.continuousScrolling = true;
    /**
     * Delegate wheel events and touch events to the given element.
     * By default, the container element is used.
     * This option will be useful for dealing with fixed elements.
     */

    this.delegateTo = null;
    /**
     * Options for plugins. Syntax:
     *   plugins[pluginName] = pluginOptions: any
     */

    this.plugins = {};
    Object.keys(config).forEach(function (prop) {
      _this[prop] = config[prop];
    });
  }

  Object.defineProperty(Options.prototype, "wheelEventTarget", {
    get: function () {
      return this.delegateTo;
    },
    set: function (el) {
      console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.');
      this.delegateTo = el;
    },
    enumerable: true,
    configurable: true
  });
  $vCxL$export$__decorate([$hBU2$export$range(0, 1)], Options.prototype, "damping", void 0);
  $vCxL$export$__decorate([$hBU2$export$range(0, Infinity)], Options.prototype, "thumbMinSize", void 0);
  $vCxL$export$__decorate([$AK6q$export$boolean], Options.prototype, "renderByPixels", void 0);
  $vCxL$export$__decorate([$AK6q$export$boolean], Options.prototype, "alwaysShowTracks", void 0);
  $vCxL$export$__decorate([$AK6q$export$boolean], Options.prototype, "continuousScrolling", void 0);
  return Options;
}();

var $f2L0$var$eventListenerOptions;
var $f2L0$var$eventMap = new WeakMap();

function $f2L0$var$getOptions() {
  if ($f2L0$var$eventListenerOptions !== undefined) {
    return $f2L0$var$eventListenerOptions;
  }

  var supportPassiveEvent = false;

  try {
    var noop = function () {};

    var options = Object.defineProperty({}, 'passive', {
      get: function () {
        supportPassiveEvent = true;
      }
    });
    window.addEventListener('testPassive', noop, options);
    window.removeEventListener('testPassive', noop, options);
  } catch (e) {}

  $f2L0$var$eventListenerOptions = supportPassiveEvent ? {
    passive: false
  } : false;
  return $f2L0$var$eventListenerOptions;
}

function $f2L0$export$eventScope(scrollbar) {
  var configs = $f2L0$var$eventMap.get(scrollbar) || [];
  $f2L0$var$eventMap.set(scrollbar, configs);
  return function addEvent(elem, events, fn) {
    function handler(event) {
      // ignore default prevented events
      if (event.defaultPrevented) {
        return;
      }

      fn(event);
    }

    events.split(/\s+/g).forEach(function (eventName) {
      configs.push({
        elem: elem,
        eventName: eventName,
        handler: handler
      });
      elem.addEventListener(eventName, handler, $f2L0$var$getOptions());
    });
  };
}

function $f2L0$export$clearEventsOn(scrollbar) {
  var configs = $f2L0$var$eventMap.get(scrollbar);

  if (!configs) {
    return;
  }

  configs.forEach(function (_a) {
    var elem = _a.elem,
        eventName = _a.eventName,
        handler = _a.handler;
    elem.removeEventListener(eventName, handler, $f2L0$var$getOptions());
  });
  $f2L0$var$eventMap.delete(scrollbar);
} //# sourceMappingURL=event-hub.js.map


/**
 * Get pointer/touch data
 */
function $z4uS$export$getPointerData(evt) {
  // if is touch event, return last item in touchList
  // else return original event
  return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
} //# sourceMappingURL=get-pointer-data.js.map


/**
 * Get pointer/finger position
 */
function $RHc5$export$getPosition(evt) {
  var data = $z4uS$export$getPointerData(evt);
  return {
    x: data.clientX,
    y: data.clientY
  };
} //# sourceMappingURL=get-position.js.map


/**
 * Check if `a` is one of `[...b]`
 */
function $Teiw$export$isOneOf(a, b) {
  if (b === void 0) {
    b = [];
  }

  return b.some(function (v) {
    return a === v;
  });
} //# sourceMappingURL=is-one-of.js.map


var $tst7$var$VENDOR_PREFIX = ['webkit', 'moz', 'ms', 'o'];
var $tst7$var$RE = new RegExp("^-(?!(?:" + $tst7$var$VENDOR_PREFIX.join('|') + ")-)");

function $tst7$var$autoPrefix(styles) {
  var res = {};
  Object.keys(styles).forEach(function (prop) {
    if (!$tst7$var$RE.test(prop)) {
      res[prop] = styles[prop];
      return;
    }

    var val = styles[prop];
    prop = prop.replace(/^-/, '');
    res[prop] = val;
    $tst7$var$VENDOR_PREFIX.forEach(function (prefix) {
      res["-" + prefix + "-" + prop] = val;
    });
  });
  return res;
}

function $tst7$export$setStyle(elem, styles) {
  styles = $tst7$var$autoPrefix(styles);
  Object.keys(styles).forEach(function (prop) {
    var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function (_, $1) {
      return $1.toUpperCase();
    });
    elem.style[cssProp] = styles[prop];
  });
} //# sourceMappingURL=set-style.js.map


var $pvNn$export$Tracker = function () {
  function Tracker(touch) {
    this.updateTime = Date.now();
    this.delta = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.lastPosition = {
      x: 0,
      y: 0
    };
    this.lastPosition = $RHc5$export$getPosition(touch);
  }

  Tracker.prototype.update = function (touch) {
    var _a = this,
        velocity = _a.velocity,
        updateTime = _a.updateTime,
        lastPosition = _a.lastPosition;

    var now = Date.now();
    var position = $RHc5$export$getPosition(touch);
    var delta = {
      x: -(position.x - lastPosition.x),
      y: -(position.y - lastPosition.y)
    };
    var duration = now - updateTime || 16;
    var vx = delta.x / duration * 16;
    var vy = delta.y / duration * 16;
    velocity.x = vx * 0.9 + velocity.x * 0.1;
    velocity.y = vy * 0.9 + velocity.y * 0.1;
    this.delta = delta;
    this.updateTime = now;
    this.lastPosition = position;
  };

  return Tracker;
}();

var $pvNn$export$TouchRecord = function () {
  function TouchRecord() {
    this._touchList = {};
  }

  Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
    get: function () {
      return {
        x: 0,
        y: 0
      };
    },
    enumerable: true,
    configurable: true
  });

  TouchRecord.prototype.isActive = function () {
    return this._activeTouchID !== undefined;
  };

  TouchRecord.prototype.getDelta = function () {
    var tracker = this._getActiveTracker();

    if (!tracker) {
      return this._primitiveValue;
    }

    return $vCxL$export$__assign({}, tracker.delta);
  };

  TouchRecord.prototype.getVelocity = function () {
    var tracker = this._getActiveTracker();

    if (!tracker) {
      return this._primitiveValue;
    }

    return $vCxL$export$__assign({}, tracker.velocity);
  };

  TouchRecord.prototype.track = function (evt) {
    var _this = this;

    var targetTouches = evt.targetTouches;
    Array.from(targetTouches).forEach(function (touch) {
      _this._add(touch);
    });
    return this._touchList;
  };

  TouchRecord.prototype.update = function (evt) {
    var _this = this;

    var touches = evt.touches,
        changedTouches = evt.changedTouches;
    Array.from(touches).forEach(function (touch) {
      _this._renew(touch);
    });

    this._setActiveID(changedTouches);

    return this._touchList;
  };

  TouchRecord.prototype.release = function (evt) {
    var _this = this;

    delete this._activeTouchID;
    Array.from(evt.changedTouches).forEach(function (touch) {
      _this._delete(touch);
    });
  };

  TouchRecord.prototype._add = function (touch) {
    if (this._has(touch)) {
      return;
    }

    var tracker = new $pvNn$export$Tracker(touch);
    this._touchList[touch.identifier] = tracker;
  };

  TouchRecord.prototype._renew = function (touch) {
    if (!this._has(touch)) {
      return;
    }

    var tracker = this._touchList[touch.identifier];
    tracker.update(touch);
  };

  TouchRecord.prototype._delete = function (touch) {
    delete this._touchList[touch.identifier];
  };

  TouchRecord.prototype._has = function (touch) {
    return this._touchList.hasOwnProperty(touch.identifier);
  };

  TouchRecord.prototype._setActiveID = function (touches) {
    this._activeTouchID = touches[touches.length - 1].identifier;
  };

  TouchRecord.prototype._getActiveTracker = function () {
    var _a = this,
        _touchList = _a._touchList,
        _activeTouchID = _a._activeTouchID;

    return _touchList[_activeTouchID];
  };

  return TouchRecord;
}();

// ASSET: ..\node_modules\smooth-scrollbar\track\direction.js
var $W2Am$var$_temp;
var $W2Am$export$TrackDirection;

(function (TrackDirection) {
  TrackDirection["X"] = "x";
  TrackDirection["Y"] = "y";
})($W2Am$export$TrackDirection || ($W2Am$var$_temp = $W2Am$export$TrackDirection = {}, $W2Am$var$_temp)); //# sourceMappingURL=direction.js.map


var $g1qS$export$ScrollbarThumb = function () {
  function ScrollbarThumb(_direction, _minSize) {
    if (_minSize === void 0) {
      _minSize = 0;
    }

    this._direction = _direction;
    this._minSize = _minSize;
    /**
     * Thumb element
     */

    this.element = document.createElement('div');
    /**
     * Display size of the thumb
     * will always be greater than `scrollbar.options.thumbMinSize`
     */

    this.displaySize = 0;
    /**
     * Actual size of the thumb
     */

    this.realSize = 0;
    /**
     * Thumb offset to the top
     */

    this.offset = 0;
    this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
  }
  /**
   * Attach to track element
   *
   * @param trackEl Track element
   */


  ScrollbarThumb.prototype.attachTo = function (trackEl) {
    trackEl.appendChild(this.element);
  };

  ScrollbarThumb.prototype.update = function (scrollOffset, containerSize, pageSize) {
    // calculate thumb size
    // pageSize > containerSize -> scrollable
    this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
    this.displaySize = Math.max(this.realSize, this._minSize); // calculate thumb offset

    this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
    $tst7$export$setStyle(this.element, this._getStyle());
  };

  ScrollbarThumb.prototype._getStyle = function () {
    switch (this._direction) {
      case $W2Am$export$TrackDirection.X:
        return {
          width: this.displaySize + "px",
          '-transform': "translate3d(" + this.offset + "px, 0, 0)"
        };

      case $W2Am$export$TrackDirection.Y:
        return {
          height: this.displaySize + "px",
          '-transform': "translate3d(0, " + this.offset + "px, 0)"
        };

      default:
        return null;
    }
  };

  return ScrollbarThumb;
}();

var $gboF$export$ScrollbarTrack = function () {
  function ScrollbarTrack(direction, thumbMinSize) {
    if (thumbMinSize === void 0) {
      thumbMinSize = 0;
    }
    /**
     * Track element
     */


    this.element = document.createElement('div');
    this._isShown = false;
    this.element.className = "scrollbar-track scrollbar-track-" + direction;
    this.thumb = new $g1qS$export$ScrollbarThumb(direction, thumbMinSize);
    this.thumb.attachTo(this.element);
  }
  /**
   * Attach to scrollbar container element
   *
   * @param scrollbarContainer Scrollbar container element
   */


  ScrollbarTrack.prototype.attachTo = function (scrollbarContainer) {
    scrollbarContainer.appendChild(this.element);
  };
  /**
   * Show track immediately
   */


  ScrollbarTrack.prototype.show = function () {
    if (this._isShown) {
      return;
    }

    this._isShown = true;
    this.element.classList.add('show');
  };
  /**
   * Hide track immediately
   */


  ScrollbarTrack.prototype.hide = function () {
    if (!this._isShown) {
      return;
    }

    this._isShown = false;
    this.element.classList.remove('show');
  };

  ScrollbarTrack.prototype.update = function (scrollOffset, containerSize, pageSize) {
    $tst7$export$setStyle(this.element, {
      display: pageSize <= containerSize ? 'none' : 'block'
    });
    this.thumb.update(scrollOffset, containerSize, pageSize);
  };

  return ScrollbarTrack;
}();

var $LxsO$export$TrackController = function () {
  function TrackController(_scrollbar) {
    this._scrollbar = _scrollbar;
    var thumbMinSize = _scrollbar.options.thumbMinSize;
    this.xAxis = new $gboF$export$ScrollbarTrack($W2Am$export$TrackDirection.X, thumbMinSize);
    this.yAxis = new $gboF$export$ScrollbarTrack($W2Am$export$TrackDirection.Y, thumbMinSize);
    this.xAxis.attachTo(_scrollbar.containerEl);
    this.yAxis.attachTo(_scrollbar.containerEl);

    if (_scrollbar.options.alwaysShowTracks) {
      this.xAxis.show();
      this.yAxis.show();
    }
  }
  /**
   * Updates track appearance
   */


  TrackController.prototype.update = function () {
    var _a = this._scrollbar,
        size = _a.size,
        offset = _a.offset;
    this.xAxis.update(offset.x, size.container.width, size.content.width);
    this.yAxis.update(offset.y, size.container.height, size.content.height);
  };
  /**
   * Automatically hide tracks when scrollbar is in idle state
   */


  TrackController.prototype.autoHideOnIdle = function () {
    if (this._scrollbar.options.alwaysShowTracks) {
      return;
    }

    this.xAxis.hide();
    this.yAxis.hide();
  };

  $vCxL$export$__decorate([$amtm$export$debounce(300)], TrackController.prototype, "autoHideOnIdle", null);
  return TrackController;
}();

function $S8mt$export$getSize(scrollbar) {
  var containerEl = scrollbar.containerEl,
      contentEl = scrollbar.contentEl;
  var containerStyles = getComputedStyle(containerEl);
  var paddings = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'].map(function (prop) {
    return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
  });
  var verticalPadding = paddings[0] + paddings[1];
  var horizontalPadding = paddings[2] + paddings[3];
  return {
    container: {
      // requires `overflow: hidden`
      width: containerEl.clientWidth,
      height: containerEl.clientHeight
    },
    content: {
      // border width and paddings should be included
      width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
      height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
    }
  };
} //# sourceMappingURL=get-size.js.map


function $UEep$export$isVisible(scrollbar, elem) {
  var bounding = scrollbar.bounding;
  var targetBounding = elem.getBoundingClientRect(); // check overlapping

  var top = Math.max(bounding.top, targetBounding.top);
  var left = Math.max(bounding.left, targetBounding.left);
  var right = Math.min(bounding.right, targetBounding.right);
  var bottom = Math.min(bounding.bottom, targetBounding.bottom);
  return top < bottom && left < right;
} //# sourceMappingURL=is-visible.js.map


function $Iv0O$export$update(scrollbar) {
  var newSize = scrollbar.getSize();
  var limit = {
    x: Math.max(newSize.content.width - newSize.container.width, 0),
    y: Math.max(newSize.content.height - newSize.container.height, 0)
  }; // metrics

  var containerBounding = scrollbar.containerEl.getBoundingClientRect();
  var bounding = {
    top: Math.max(containerBounding.top, 0),
    right: Math.min(containerBounding.right, window.innerWidth),
    bottom: Math.min(containerBounding.bottom, window.innerHeight),
    left: Math.max(containerBounding.left, 0)
  }; // assign props

  scrollbar.size = newSize;
  scrollbar.limit = limit;
  scrollbar.bounding = bounding; // update tracks

  scrollbar.track.update(); // re-positioning

  scrollbar.setPosition();
} //# sourceMappingURL=update.js.map


function $n9rX$export$setPosition(scrollbar, x, y) {
  var options = scrollbar.options,
      offset = scrollbar.offset,
      limit = scrollbar.limit,
      track = scrollbar.track,
      contentEl = scrollbar.contentEl;

  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }

  x = $bP7q$export$default(x, 0, limit.x);
  y = $bP7q$export$default(y, 0, limit.y); // position changed -> show track for 300ms

  if (x !== offset.x) track.xAxis.show();
  if (y !== offset.y) track.yAxis.show();

  if (!options.alwaysShowTracks) {
    track.autoHideOnIdle();
  }

  if (x === offset.x && y === offset.y) {
    return null;
  }

  offset.x = x;
  offset.y = y;
  $tst7$export$setStyle(contentEl, {
    '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)"
  });
  track.update();
  return {
    offset: $vCxL$export$__assign({}, offset),
    limit: $vCxL$export$__assign({}, limit)
  };
} //# sourceMappingURL=set-position.js.map


var $Nm8X$var$animationIDStorage = new WeakMap();

function $Nm8X$export$scrollTo(scrollbar, x, y, duration, _a) {
  if (duration === void 0) {
    duration = 0;
  }

  var _b = _a === void 0 ? {} : _a,
      _c = _b.easing,
      easing = _c === void 0 ? $Nm8X$var$defaultEasing : _c,
      callback = _b.callback;

  var options = scrollbar.options,
      offset = scrollbar.offset,
      limit = scrollbar.limit;

  if (options.renderByPixels) {
    // ensure resolved with integer
    x = Math.round(x);
    y = Math.round(y);
  }

  var startX = offset.x;
  var startY = offset.y;
  var disX = $bP7q$export$default(x, 0, limit.x) - startX;
  var disY = $bP7q$export$default(y, 0, limit.y) - startY;
  var start = Date.now();

  function scroll() {
    var elapse = Date.now() - start;
    var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
    scrollbar.setPosition(startX + disX * progress, startY + disY * progress);

    if (elapse >= duration) {
      if (typeof callback === 'function') {
        callback.call(scrollbar);
      }
    } else {
      var animationID = requestAnimationFrame(scroll);
      $Nm8X$var$animationIDStorage.set(scrollbar, animationID);
    }
  }

  cancelAnimationFrame($Nm8X$var$animationIDStorage.get(scrollbar));
  scroll();
}
/**
 * easeOutCubic
 */


function $Nm8X$var$defaultEasing(t) {
  return Math.pow(t - 1, 3) + 1;
} //# sourceMappingURL=scroll-to.js.map


function $oEHP$export$scrollIntoView(scrollbar, elem, _a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.alignToTop,
      alignToTop = _c === void 0 ? true : _c,
      _d = _b.onlyScrollIfNeeded,
      onlyScrollIfNeeded = _d === void 0 ? false : _d,
      _e = _b.offsetTop,
      offsetTop = _e === void 0 ? 0 : _e,
      _f = _b.offsetLeft,
      offsetLeft = _f === void 0 ? 0 : _f,
      _g = _b.offsetBottom,
      offsetBottom = _g === void 0 ? 0 : _g;

  var containerEl = scrollbar.containerEl,
      bounding = scrollbar.bounding,
      offset = scrollbar.offset,
      limit = scrollbar.limit;
  if (!elem || !containerEl.contains(elem)) return;
  var targetBounding = elem.getBoundingClientRect();
  if (onlyScrollIfNeeded && scrollbar.isVisible(elem)) return;
  var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
  scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, $bP7q$export$default(delta, -offset.y, limit.y - offset.y));
} //# sourceMappingURL=scroll-into-view.js.map


var $hn3N$export$ScrollbarPlugin = function () {
  function ScrollbarPlugin(scrollbar, options) {
    var _newTarget = this.constructor;
    this.scrollbar = scrollbar;
    this.name = _newTarget.pluginName;
    this.options = $vCxL$export$__assign($vCxL$export$__assign({}, _newTarget.defaultOptions), options);
  }

  ScrollbarPlugin.prototype.onInit = function () {};

  ScrollbarPlugin.prototype.onDestroy = function () {};

  ScrollbarPlugin.prototype.onUpdate = function () {};

  ScrollbarPlugin.prototype.onRender = function (_remainMomentum) {};

  ScrollbarPlugin.prototype.transformDelta = function (delta, _evt) {
    return $vCxL$export$__assign({}, delta);
  };

  ScrollbarPlugin.pluginName = '';
  ScrollbarPlugin.defaultOptions = {};
  return ScrollbarPlugin;
}();

var $hn3N$export$globalPlugins = {
  order: new Set(),
  constructors: {}
};

function $hn3N$export$addPlugins() {
  var Plugins = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    Plugins[_i] = arguments[_i];
  }

  Plugins.forEach(function (P) {
    var pluginName = P.pluginName;

    if (!pluginName) {
      throw new TypeError("plugin name is required");
    }

    $hn3N$export$globalPlugins.order.add(pluginName);
    $hn3N$export$globalPlugins.constructors[pluginName] = P;
  });
}

function $hn3N$export$initPlugins(scrollbar, options) {
  return Array.from($hn3N$export$globalPlugins.order).filter(function (pluginName) {
    return options[pluginName] !== false;
  }).map(function (pluginName) {
    var Plugin = $hn3N$export$globalPlugins.constructors[pluginName];
    var instance = new Plugin(scrollbar, options[pluginName]); // bind plugin options to `scrollbar.options`

    options[pluginName] = instance.options;
    return instance;
  });
} //# sourceMappingURL=plugin.js.map


// ASSET: ..\node_modules\smooth-scrollbar\events\index.js
var $Rp0L$exports = {};
// ASSET: ..\node_modules\smooth-scrollbar\events\keyboard.js
var $CwMf$exports = {};
var $CwMf$var$KEY_CODE;

(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["TAB"] = 9] = "TAB";
  KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
  KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
  KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
  KEY_CODE[KEY_CODE["END"] = 35] = "END";
  KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
  KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
  KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
  KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
  KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})($CwMf$var$KEY_CODE || ($CwMf$var$KEY_CODE = {}));

function $CwMf$export$keyboardHandler(scrollbar) {
  var addEvent = $f2L0$export$eventScope(scrollbar);
  var container = scrollbar.containerEl;
  addEvent(container, 'keydown', function (evt) {
    var activeElement = document.activeElement;

    if (activeElement !== container && !container.contains(activeElement)) {
      return;
    }

    if ($CwMf$var$isEditable(activeElement)) {
      return;
    }

    var delta = $CwMf$var$getKeyDelta(scrollbar, evt.keyCode || evt.which);

    if (!delta) {
      return;
    }

    var x = delta[0],
        y = delta[1];
    scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
      if (willScroll) {
        evt.preventDefault();
      } else {
        scrollbar.containerEl.blur();

        if (scrollbar.parent) {
          scrollbar.parent.containerEl.focus();
        }
      }
    });
  });
}

$CwMf$exports.keyboardHandler = $CwMf$export$keyboardHandler;

function $CwMf$var$getKeyDelta(scrollbar, keyCode) {
  var size = scrollbar.size,
      limit = scrollbar.limit,
      offset = scrollbar.offset;

  switch (keyCode) {
    case $CwMf$var$KEY_CODE.TAB:
      return $CwMf$var$handleTabKey(scrollbar);

    case $CwMf$var$KEY_CODE.SPACE:
      return [0, 200];

    case $CwMf$var$KEY_CODE.PAGE_UP:
      return [0, -size.container.height + 40];

    case $CwMf$var$KEY_CODE.PAGE_DOWN:
      return [0, size.container.height - 40];

    case $CwMf$var$KEY_CODE.END:
      return [0, limit.y - offset.y];

    case $CwMf$var$KEY_CODE.HOME:
      return [0, -offset.y];

    case $CwMf$var$KEY_CODE.LEFT:
      return [-40, 0];

    case $CwMf$var$KEY_CODE.UP:
      return [0, -40];

    case $CwMf$var$KEY_CODE.RIGHT:
      return [40, 0];

    case $CwMf$var$KEY_CODE.DOWN:
      return [0, 40];

    default:
      return null;
  }
}

function $CwMf$var$handleTabKey(scrollbar) {
  // handle in next frame
  requestAnimationFrame(function () {
    scrollbar.scrollIntoView(document.activeElement, {
      offsetTop: scrollbar.size.container.height / 2,
      onlyScrollIfNeeded: true
    });
  });
}

function $CwMf$var$isEditable(elem) {
  if (elem.tagName === 'INPUT' || elem.tagName === 'SELECT' || elem.tagName === 'TEXTAREA' || elem.isContentEditable) {
    return !elem.disabled;
  }

  return false;
} //# sourceMappingURL=keyboard.js.map


$parcel$exportWildcard($Rp0L$exports, $CwMf$exports);
// ASSET: ..\node_modules\smooth-scrollbar\events\mouse.js
var $gquV$exports = {};
var $gquV$var$Direction;

(function (Direction) {
  Direction[Direction["X"] = 0] = "X";
  Direction[Direction["Y"] = 1] = "Y";
})($gquV$var$Direction || ($gquV$var$Direction = {}));

function $gquV$export$mouseHandler(scrollbar) {
  var addEvent = $f2L0$export$eventScope(scrollbar);
  var container = scrollbar.containerEl;
  var _a = scrollbar.track,
      xAxis = _a.xAxis,
      yAxis = _a.yAxis;

  function calcOffset(direction, clickPosition) {
    var size = scrollbar.size;

    if (direction === $gquV$var$Direction.X) {
      var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
      return clickPosition / totalWidth * size.content.width;
    }

    if (direction === $gquV$var$Direction.Y) {
      var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
      return clickPosition / totalHeight * size.content.height;
    }

    return 0;
  }

  function getTrackDirection(elem) {
    if ($Teiw$export$isOneOf(elem, [xAxis.element, xAxis.thumb.element])) {
      return $gquV$var$Direction.X;
    }

    if ($Teiw$export$isOneOf(elem, [yAxis.element, yAxis.thumb.element])) {
      return $gquV$var$Direction.Y;
    }

    return void 0;
  }

  var isMouseDown;
  var isMouseMoving;
  var startOffsetToThumb;
  var startTrackDirection;
  var containerRect;
  addEvent(container, 'click', function (evt) {
    if (isMouseMoving || !$Teiw$export$isOneOf(evt.target, [xAxis.element, yAxis.element])) {
      return;
    }

    var track = evt.target;
    var direction = getTrackDirection(track);
    var rect = track.getBoundingClientRect();
    var clickPos = $RHc5$export$getPosition(evt);
    var offset = scrollbar.offset,
        limit = scrollbar.limit;

    if (direction === $gquV$var$Direction.X) {
      var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
      scrollbar.setMomentum($bP7q$export$default(calcOffset(direction, offsetOnTrack) - offset.x, -offset.x, limit.x - offset.x), 0);
    }

    if (direction === $gquV$var$Direction.Y) {
      var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(0, $bP7q$export$default(calcOffset(direction, offsetOnTrack) - offset.y, -offset.y, limit.y - offset.y));
    }
  });
  addEvent(container, 'mousedown', function (evt) {
    if (!$Teiw$export$isOneOf(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
      return;
    }

    isMouseDown = true;
    var thumb = evt.target;
    var cursorPos = $RHc5$export$getPosition(evt);
    var thumbRect = thumb.getBoundingClientRect();
    startTrackDirection = getTrackDirection(thumb); // pointer offset to thumb

    startOffsetToThumb = {
      x: cursorPos.x - thumbRect.left,
      y: cursorPos.y - thumbRect.top
    }; // container bounding rectangle

    containerRect = container.getBoundingClientRect(); // prevent selection, see:
    // https://github.com/idiotWu/smooth-scrollbar/issues/48

    $tst7$export$setStyle(scrollbar.containerEl, {
      '-user-select': 'none'
    });
  });
  addEvent(window, 'mousemove', function (evt) {
    if (!isMouseDown) return;
    isMouseMoving = true;
    var offset = scrollbar.offset;
    var cursorPos = $RHc5$export$getPosition(evt);

    if (startTrackDirection === $gquV$var$Direction.X) {
      // get percentage of pointer position in track
      // then tranform to px
      // don't need easing
      var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
      scrollbar.setPosition(calcOffset(startTrackDirection, offsetOnTrack), offset.y);
    }

    if (startTrackDirection === $gquV$var$Direction.Y) {
      var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
      scrollbar.setPosition(offset.x, calcOffset(startTrackDirection, offsetOnTrack));
    }
  });
  addEvent(window, 'mouseup blur', function () {
    isMouseDown = isMouseMoving = false;
    $tst7$export$setStyle(scrollbar.containerEl, {
      '-user-select': ''
    });
  });
} //# sourceMappingURL=mouse.js.map


$gquV$exports.mouseHandler = $gquV$export$mouseHandler;
$parcel$exportWildcard($Rp0L$exports, $gquV$exports);
// ASSET: ..\node_modules\smooth-scrollbar\events\resize.js
var $FERt$exports = {};

function $FERt$export$resizeHandler(scrollbar) {
  var addEvent = $f2L0$export$eventScope(scrollbar);
  addEvent(window, 'resize', $WAyo$export$default(scrollbar.update.bind(scrollbar), 300));
} //# sourceMappingURL=resize.js.map


$FERt$exports.resizeHandler = $FERt$export$resizeHandler;
$parcel$exportWildcard($Rp0L$exports, $FERt$exports);
// ASSET: ..\node_modules\smooth-scrollbar\events\select.js
var $mFNt$exports = {};

function $mFNt$export$selectHandler(scrollbar) {
  var addEvent = $f2L0$export$eventScope(scrollbar);
  var containerEl = scrollbar.containerEl,
      contentEl = scrollbar.contentEl;
  var isSelected = false;
  var animationID;

  function scroll(_a) {
    var x = _a.x,
        y = _a.y;
    if (!x && !y) return;
    var offset = scrollbar.offset,
        limit = scrollbar.limit; // DISALLOW delta transformation

    scrollbar.setMomentum($bP7q$export$default(offset.x + x, 0, limit.x) - offset.x, $bP7q$export$default(offset.y + y, 0, limit.y) - offset.y);
    animationID = requestAnimationFrame(function () {
      scroll({
        x: x,
        y: y
      });
    });
  }

  addEvent(window, 'mousemove', function (evt) {
    if (!isSelected) return;
    cancelAnimationFrame(animationID);
    var dir = $mFNt$var$calcMomentum(scrollbar, evt);
    scroll(dir);
  });
  addEvent(contentEl, 'selectstart', function (evt) {
    evt.stopPropagation();
    cancelAnimationFrame(animationID);
    isSelected = true;
  });
  addEvent(window, 'mouseup blur', function () {
    cancelAnimationFrame(animationID);
    isSelected = false;
  }); // patch for touch devices

  addEvent(containerEl, 'scroll', function (evt) {
    evt.preventDefault();
    containerEl.scrollTop = containerEl.scrollLeft = 0;
  });
}

$mFNt$exports.selectHandler = $mFNt$export$selectHandler;

function $mFNt$var$calcMomentum(scrollbar, evt) {
  var _a = scrollbar.bounding,
      top = _a.top,
      right = _a.right,
      bottom = _a.bottom,
      left = _a.left;

  var _b = $RHc5$export$getPosition(evt),
      x = _b.x,
      y = _b.y;

  var res = {
    x: 0,
    y: 0
  };
  var padding = 20;
  if (x === 0 && y === 0) return res;

  if (x > right - padding) {
    res.x = x - right + padding;
  } else if (x < left + padding) {
    res.x = x - left - padding;
  }

  if (y > bottom - padding) {
    res.y = y - bottom + padding;
  } else if (y < top + padding) {
    res.y = y - top - padding;
  }

  res.x *= 2;
  res.y *= 2;
  return res;
} //# sourceMappingURL=select.js.map


$parcel$exportWildcard($Rp0L$exports, $mFNt$exports);
// ASSET: ..\node_modules\smooth-scrollbar\events\touch.js
var $zGaM$exports = {};
var $zGaM$var$activeScrollbar;

function $zGaM$export$touchHandler(scrollbar) {
  var MIN_EAING_MOMENTUM = 50;
  var EASING_MULTIPLIER = /Android/.test(navigator.userAgent) ? 3 : 2;
  var target = scrollbar.options.delegateTo || scrollbar.containerEl;
  var touchRecord = new $pvNn$export$TouchRecord();
  var addEvent = $f2L0$export$eventScope(scrollbar);
  var damping;
  var pointerCount = 0;
  addEvent(target, 'touchstart', function (evt) {
    // start records
    touchRecord.track(evt); // stop scrolling

    scrollbar.setMomentum(0, 0); // save damping

    if (pointerCount === 0) {
      damping = scrollbar.options.damping;
      scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
    }

    pointerCount++;
  });
  addEvent(target, 'touchmove', function (evt) {
    if ($zGaM$var$activeScrollbar && $zGaM$var$activeScrollbar !== scrollbar) return;
    touchRecord.update(evt);

    var _a = touchRecord.getDelta(),
        x = _a.x,
        y = _a.y;

    scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
      if (willScroll && evt.cancelable) {
        evt.preventDefault();
        $zGaM$var$activeScrollbar = scrollbar;
      }
    });
  });
  addEvent(target, 'touchcancel touchend', function (evt) {
    var velocity = touchRecord.getVelocity();
    var momentum = {
      x: 0,
      y: 0
    };
    Object.keys(velocity).forEach(function (dir) {
      var s = velocity[dir] / damping; // throw small values

      momentum[dir] = Math.abs(s) < MIN_EAING_MOMENTUM ? 0 : s * EASING_MULTIPLIER;
    });
    scrollbar.addTransformableMomentum(momentum.x, momentum.y, evt);
    pointerCount--; // restore damping

    if (pointerCount === 0) {
      scrollbar.options.damping = damping;
    }

    touchRecord.release(evt);
    $zGaM$var$activeScrollbar = null;
  });
} //# sourceMappingURL=touch.js.map


$zGaM$exports.touchHandler = $zGaM$export$touchHandler;
$parcel$exportWildcard($Rp0L$exports, $zGaM$exports);
// ASSET: ..\node_modules\smooth-scrollbar\events\wheel.js
var $CUVd$exports = {};

function $CUVd$export$wheelHandler(scrollbar) {
  var addEvent = $f2L0$export$eventScope(scrollbar);
  var target = scrollbar.options.delegateTo || scrollbar.containerEl;
  var eventName = 'onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0') ? 'wheel' : 'mousewheel';
  addEvent(target, eventName, function (evt) {
    var _a = $CUVd$var$normalizeDelta(evt),
        x = _a.x,
        y = _a.y;

    scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
      if (willScroll) {
        evt.preventDefault();
      }
    });
  });
} // Normalizing wheel delta


$CUVd$exports.wheelHandler = $CUVd$export$wheelHandler;
var $CUVd$var$DELTA_SCALE = {
  STANDARD: 1,
  OTHERS: -3
};
var $CUVd$var$DELTA_MODE = [1.0, 28.0, 500.0];

var $CUVd$var$getDeltaMode = function (mode) {
  return $CUVd$var$DELTA_MODE[mode] || $CUVd$var$DELTA_MODE[0];
};

function $CUVd$var$normalizeDelta(evt) {
  if ('deltaX' in evt) {
    var mode = $CUVd$var$getDeltaMode(evt.deltaMode);
    return {
      x: evt.deltaX / $CUVd$var$DELTA_SCALE.STANDARD * mode,
      y: evt.deltaY / $CUVd$var$DELTA_SCALE.STANDARD * mode
    };
  }

  if ('wheelDeltaX' in evt) {
    return {
      x: evt.wheelDeltaX / $CUVd$var$DELTA_SCALE.OTHERS,
      y: evt.wheelDeltaY / $CUVd$var$DELTA_SCALE.OTHERS
    };
  } // ie with touchpad


  return {
    x: 0,
    y: evt.wheelDelta / $CUVd$var$DELTA_SCALE.OTHERS
  };
} //# sourceMappingURL=wheel.js.map


$parcel$exportWildcard($Rp0L$exports, $CUVd$exports); //# sourceMappingURL=index.js.map

// DO NOT use WeakMap here
// .getAll() methods requires `scrollbarMap.values()`
var $aW5b$export$scrollbarMap = new Map();

var $aW5b$export$Scrollbar = function () {
  function Scrollbar(containerEl, options) {
    var _this = this;
    /**
     * Current scrolling offsets
     */


    this.offset = {
      x: 0,
      y: 0
    };
    /**
     * Max-allowed scrolling offsets
     */

    this.limit = {
      x: Infinity,
      y: Infinity
    };
    /**
     * Container bounding rect
     */

    this.bounding = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    this._plugins = [];
    this._momentum = {
      x: 0,
      y: 0
    };
    this._listeners = new Set();
    this.containerEl = containerEl;
    var contentEl = this.contentEl = document.createElement('div');
    this.options = new $tvqP$export$Options(options); // mark as a scroll element

    containerEl.setAttribute('data-scrollbar', 'true'); // make container focusable

    containerEl.setAttribute('tabindex', '-1');
    $tst7$export$setStyle(containerEl, {
      overflow: 'hidden',
      outline: 'none'
    }); // enable touch event capturing in IE, see:
    // https://github.com/idiotWu/smooth-scrollbar/issues/39

    if (window.navigator.msPointerEnabled) {
      containerEl.style.msTouchAction = 'none';
    } // mount content


    contentEl.className = 'scroll-content';
    Array.from(containerEl.childNodes).forEach(function (node) {
      contentEl.appendChild(node);
    });
    containerEl.appendChild(contentEl); // attach track

    this.track = new $LxsO$export$TrackController(this); // initial measuring

    this.size = this.getSize(); // init plugins

    this._plugins = $hn3N$export$initPlugins(this, this.options.plugins); // preserve scroll offset

    var scrollLeft = containerEl.scrollLeft,
        scrollTop = containerEl.scrollTop;
    containerEl.scrollLeft = containerEl.scrollTop = 0;
    this.setPosition(scrollLeft, scrollTop, {
      withoutCallbacks: true
    });
    var global = window;
    var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver; // observe

    if (typeof MutationObserver === 'function') {
      this._observer = new MutationObserver(function () {
        _this.update();
      });

      this._observer.observe(contentEl, {
        subtree: true,
        childList: true
      });
    }

    $aW5b$export$scrollbarMap.set(containerEl, this); // wait for DOM ready

    requestAnimationFrame(function () {
      _this._init();
    });
  }

  Object.defineProperty(Scrollbar.prototype, "parent", {
    /**
     * Parent scrollbar
     */
    get: function () {
      var elem = this.containerEl.parentElement;

      while (elem) {
        var parentScrollbar = $aW5b$export$scrollbarMap.get(elem);

        if (parentScrollbar) {
          return parentScrollbar;
        }

        elem = elem.parentElement;
      }

      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Scrollbar.prototype, "scrollTop", {
    /**
     * Gets or sets `scrollbar.offset.y`
     */
    get: function () {
      return this.offset.y;
    },
    set: function (y) {
      this.setPosition(this.scrollLeft, y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
    /**
     * Gets or sets `scrollbar.offset.x`
     */
    get: function () {
      return this.offset.x;
    },
    set: function (x) {
      this.setPosition(x, this.scrollTop);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns the size of the scrollbar container element
   * and the content wrapper element
   */

  Scrollbar.prototype.getSize = function () {
    return $S8mt$export$getSize(this);
  };
  /**
   * Forces scrollbar to update geometry infomation.
   *
   * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
   * You can call this method to force an update when you modified contents
   */


  Scrollbar.prototype.update = function () {
    $Iv0O$export$update(this);

    this._plugins.forEach(function (plugin) {
      plugin.onUpdate();
    });
  };
  /**
   * Checks if an element is visible in the current view area
   */


  Scrollbar.prototype.isVisible = function (elem) {
    return $UEep$export$isVisible(this, elem);
  };
  /**
   * Sets the scrollbar to the given offset without easing
   */


  Scrollbar.prototype.setPosition = function (x, y, options) {
    var _this = this;

    if (x === void 0) {
      x = this.offset.x;
    }

    if (y === void 0) {
      y = this.offset.y;
    }

    if (options === void 0) {
      options = {};
    }

    var status = $n9rX$export$setPosition(this, x, y);

    if (!status || options.withoutCallbacks) {
      return;
    }

    this._listeners.forEach(function (fn) {
      fn.call(_this, status);
    });
  };
  /**
   * Scrolls to given position with easing function
   */


  Scrollbar.prototype.scrollTo = function (x, y, duration, options) {
    if (x === void 0) {
      x = this.offset.x;
    }

    if (y === void 0) {
      y = this.offset.y;
    }

    if (duration === void 0) {
      duration = 0;
    }

    if (options === void 0) {
      options = {};
    }

    $Nm8X$export$scrollTo(this, x, y, duration, options);
  };
  /**
   * Scrolls the target element into visible area of scrollbar,
   * likes the DOM method `element.scrollIntoView().
   */


  Scrollbar.prototype.scrollIntoView = function (elem, options) {
    if (options === void 0) {
      options = {};
    }

    $oEHP$export$scrollIntoView(this, elem, options);
  };
  /**
   * Adds scrolling listener
   */


  Scrollbar.prototype.addListener = function (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
    }

    this._listeners.add(fn);
  };
  /**
   * Removes listener previously registered with `scrollbar.addListener()`
   */


  Scrollbar.prototype.removeListener = function (fn) {
    this._listeners.delete(fn);
  };
  /**
   * Adds momentum and applys delta transformers.
   */


  Scrollbar.prototype.addTransformableMomentum = function (x, y, fromEvent, callback) {
    this._updateDebounced();

    var finalDelta = this._plugins.reduce(function (delta, plugin) {
      return plugin.transformDelta(delta, fromEvent) || delta;
    }, {
      x: x,
      y: y
    });

    var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);

    if (willScroll) {
      this.addMomentum(finalDelta.x, finalDelta.y);
    }

    if (callback) {
      callback.call(this, willScroll);
    }
  };
  /**
   * Increases scrollbar's momentum
   */


  Scrollbar.prototype.addMomentum = function (x, y) {
    this.setMomentum(this._momentum.x + x, this._momentum.y + y);
  };
  /**
   * Sets scrollbar's momentum to given value
   */


  Scrollbar.prototype.setMomentum = function (x, y) {
    if (this.limit.x === 0) {
      x = 0;
    }

    if (this.limit.y === 0) {
      y = 0;
    }

    if (this.options.renderByPixels) {
      x = Math.round(x);
      y = Math.round(y);
    }

    this._momentum.x = x;
    this._momentum.y = y;
  };
  /**
   * Update options for specific plugin
   *
   * @param pluginName Name of the plugin
   * @param [options] An object includes the properties that you want to update
   */


  Scrollbar.prototype.updatePluginOptions = function (pluginName, options) {
    this._plugins.forEach(function (plugin) {
      if (plugin.name === pluginName) {
        Object.assign(plugin.options, options);
      }
    });
  };

  Scrollbar.prototype.destroy = function () {
    var _a = this,
        containerEl = _a.containerEl,
        contentEl = _a.contentEl;

    $f2L0$export$clearEventsOn(this);

    this._listeners.clear();

    this.setMomentum(0, 0);
    cancelAnimationFrame(this._renderID);

    if (this._observer) {
      this._observer.disconnect();
    }

    $aW5b$export$scrollbarMap.delete(this.containerEl); // restore contents

    var childNodes = Array.from(contentEl.childNodes);

    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }

    childNodes.forEach(function (el) {
      containerEl.appendChild(el);
    }); // reset scroll position

    $tst7$export$setStyle(containerEl, {
      overflow: ''
    });
    containerEl.scrollTop = this.scrollTop;
    containerEl.scrollLeft = this.scrollLeft; // invoke plugin.onDestroy

    this._plugins.forEach(function (plugin) {
      plugin.onDestroy();
    });

    this._plugins.length = 0;
  };

  Scrollbar.prototype._init = function () {
    var _this = this;

    this.update(); // init evet handlers

    Object.keys($Rp0L$exports).forEach(function (prop) {
      $Rp0L$exports[prop](_this);
    }); // invoke `plugin.onInit`

    this._plugins.forEach(function (plugin) {
      plugin.onInit();
    });

    this._render();
  };

  Scrollbar.prototype._updateDebounced = function () {
    this.update();
  }; // check whether to propagate monmentum to parent scrollbar
  // the following situations are considered as `true`:
  //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
  //         2. scrollbar reaches one side and is not about to scroll on the other direction


  Scrollbar.prototype._shouldPropagateMomentum = function (deltaX, deltaY) {
    if (deltaX === void 0) {
      deltaX = 0;
    }

    if (deltaY === void 0) {
      deltaY = 0;
    }

    var _a = this,
        options = _a.options,
        offset = _a.offset,
        limit = _a.limit;

    if (!options.continuousScrolling) return false; // force an update when scrollbar is "unscrollable", see #106

    if (limit.x === 0 && limit.y === 0) {
      this._updateDebounced();
    }

    var destX = $bP7q$export$default(deltaX + offset.x, 0, limit.x);
    var destY = $bP7q$export$default(deltaY + offset.y, 0, limit.y);
    var res = true; // offsets are not about to change
    // `&=` operator is not allowed for boolean types

    res = res && destX === offset.x;
    res = res && destY === offset.y; // current offsets are on the edge

    res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
    return res;
  };

  Scrollbar.prototype._render = function () {
    var _momentum = this._momentum;

    if (_momentum.x || _momentum.y) {
      var nextX = this._nextTick('x');

      var nextY = this._nextTick('y');

      _momentum.x = nextX.momentum;
      _momentum.y = nextY.momentum;
      this.setPosition(nextX.position, nextY.position);
    }

    var remain = $vCxL$export$__assign({}, this._momentum);

    this._plugins.forEach(function (plugin) {
      plugin.onRender(remain);
    });

    this._renderID = requestAnimationFrame(this._render.bind(this));
  };

  Scrollbar.prototype._nextTick = function (direction) {
    var _a = this,
        options = _a.options,
        offset = _a.offset,
        _momentum = _a._momentum;

    var current = offset[direction];
    var remain = _momentum[direction];

    if (Math.abs(remain) <= 0.1) {
      return {
        momentum: 0,
        position: current + remain
      };
    }

    var nextMomentum = remain * (1 - options.damping);

    if (options.renderByPixels) {
      nextMomentum |= 0;
    }

    return {
      momentum: nextMomentum,
      position: current + remain - nextMomentum
    };
  };

  $vCxL$export$__decorate([$amtm$export$debounce(100, {
    leading: true
  })], Scrollbar.prototype, "_updateDebounced", null);
  return Scrollbar;
}();

var $G05a$var$TRACK_BG = 'rgba(222, 222, 222, .75)';
var $G05a$var$THUMB_BG = 'rgba(0, 0, 0, .5)';
var $G05a$var$SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + $G05a$var$TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + $G05a$var$THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var $G05a$var$STYLE_ID = 'smooth-scrollbar-style';
var $G05a$var$isStyleAttached = false;

function $G05a$export$attachStyle() {
  if ($G05a$var$isStyleAttached || typeof window === 'undefined') {
    return;
  }

  var styleEl = document.createElement('style');
  styleEl.id = $G05a$var$STYLE_ID;
  styleEl.textContent = $G05a$var$SCROLLBAR_STYLE;

  if (document.head) {
    document.head.appendChild(styleEl);
  }

  $G05a$var$isStyleAttached = true;
}

function $G05a$export$detachStyle() {
  if (!$G05a$var$isStyleAttached || typeof window === 'undefined') {
    return;
  }

  var styleEl = document.getElementById($G05a$var$STYLE_ID);

  if (!styleEl || !styleEl.parentNode) {
    return;
  }

  styleEl.parentNode.removeChild(styleEl);
  $G05a$var$isStyleAttached = false;
} //# sourceMappingURL=style.js.map


/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var $fFeg$export$default = function (_super) {
  $vCxL$export$__extends(SmoothScrollbar, _super);

  function SmoothScrollbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * Initializes a scrollbar on the given element.
   *
   * @param elem The DOM element that you want to initialize scrollbar to
   * @param [options] Initial options
   */


  SmoothScrollbar.init = function (elem, options) {
    if (!elem || elem.nodeType !== 1) {
      throw new TypeError("expect element to be DOM Element, but got " + elem);
    } // attach stylesheet


    $G05a$export$attachStyle();

    if ($aW5b$export$scrollbarMap.has(elem)) {
      return $aW5b$export$scrollbarMap.get(elem);
    }

    return new $aW5b$export$Scrollbar(elem, options);
  };
  /**
   * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
   *
   * @param options Initial options
   */


  SmoothScrollbar.initAll = function (options) {
    return Array.from(document.querySelectorAll('[data-scrollbar]'), function (elem) {
      return SmoothScrollbar.init(elem, options);
    });
  };
  /**
   * Check if there is a scrollbar on given element
   *
   * @param elem The DOM element that you want to check
   */


  SmoothScrollbar.has = function (elem) {
    return $aW5b$export$scrollbarMap.has(elem);
  };
  /**
   * Gets scrollbar on the given element.
   * If no scrollbar instance exsits, returns `undefined`
   *
   * @param elem The DOM element that you want to check.
   */


  SmoothScrollbar.get = function (elem) {
    return $aW5b$export$scrollbarMap.get(elem);
  };
  /**
   * Returns an array that contains all scrollbar instances
   */


  SmoothScrollbar.getAll = function () {
    return Array.from($aW5b$export$scrollbarMap.values());
  };
  /**
   * Removes scrollbar on the given element
   */


  SmoothScrollbar.destroy = function (elem) {
    var scrollbar = $aW5b$export$scrollbarMap.get(elem);

    if (scrollbar) {
      scrollbar.destroy();
    }
  };
  /**
   * Removes all scrollbar instances from current document
   */


  SmoothScrollbar.destroyAll = function () {
    $aW5b$export$scrollbarMap.forEach(function (scrollbar) {
      scrollbar.destroy();
    });
  };
  /**
   * Attaches plugins to scrollbars
   *
   * @param ...Plugins Scrollbar plugin classes
   */


  SmoothScrollbar.use = function () {
    var Plugins = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      Plugins[_i] = arguments[_i];
    }

    return $hn3N$export$addPlugins.apply(void 0, Plugins);
  };
  /**
   * Attaches default style sheets to current document.
   * You don't need to call this method manually unless
   * you removed the default styles via `Scrollbar.detachStyle()`
   */


  SmoothScrollbar.attachStyle = function () {
    return $G05a$export$attachStyle();
  };
  /**
   * Removes default styles from current document.
   * Use this method when you want to use your own css for scrollbars.
   */


  SmoothScrollbar.detachStyle = function () {
    return $G05a$export$detachStyle();
  };

  SmoothScrollbar.version = "8.6.3";
  SmoothScrollbar.ScrollbarPlugin = $hn3N$export$ScrollbarPlugin;
  return SmoothScrollbar;
}($aW5b$export$Scrollbar);

var $Focm$var$options = {
  'damping': 0.06,
  'alwaysShowTracks': true
};
$fFeg$export$default.init(document.querySelector('#my-scroll'), $Focm$var$options);
return {
  "Focm": {}
};
});