const S = require('sanctuary');
const $ = require('sanctuary-def');

// def :: String -> StrMap (Array TypeClass) -> Array Type -> Function -> Function
const def = $.create({checkTypes: true, env: $.env});

const a = $.TypeVariable('a');
const f = $.UnaryTypeVariable('f');

// nth :: NonNegativeInteger -> Array a -> Maybe a
//
// Retrieving the n-th element
//
// > nth(1)([])
// S.Nothing
// > nth(1)([1, 2, 3])
// S.Just(2)
const _nth = index => array =>
  index < array.length ? S.Just(array[index]) : S.Nothing;
const nth = def('nth')({})([$.NonNegativeInteger, $.Array(a), $.Maybe(a)])(
  _nth
);

module.exports = {nth};
