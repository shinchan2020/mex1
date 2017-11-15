function auto_safelink() {
    auto_safeconvert()
}
function auto_safeconvert() {
    var _0x5885x3 = window['location']['hostname'];
    '' == protected_links || protected_links['match'](_0x5885x3) ? '' == protected_links && (protected_links = _0x5885x3) : protected_links += ', ' + _0x5885x3;
    var _0x5885x4 = '',
        _0x5885x5 = new Array,
        _0x5885x6 = 0;
    _0x5885x4 = document['getElementsByTagName']('a'), a_to_va = _0x5885x4['length'], _0x5885x5 = a_to_fa(), _0x5885x6 = _0x5885x5['length'];
    for (var _0x5885x7 = !1, _0x5885x8 = 0, _0x5885x9 = '', _0x5885xa = 0; a_to_va > _0x5885xa; _0x5885xa++) {
        for (_0x5885x7 = !1, _0x5885x8 = 0; 0 == _0x5885x7 && _0x5885x6 > _0x5885x8;) {
            _0x5885x9 = _0x5885x4[_0x5885xa]['href'], !_0x5885x9['match'](_0x5885x5[_0x5885x8]) && _0x5885x9 && _0x5885x9['match']('http') || (_0x5885x7 = !0), _0x5885x8++
        };
        if (0 == _0x5885x7) {
            var _0x5885xb = Base64['encode'](_0x5885x9);
            _0x5885x4[_0x5885xa]['href'] = http://www.mexmex.fast-page.org/2017/11/15/mexmex/?site=' + _0x5885xb + '&c=0&user=' + User_ID, _0x5885x4[_0x5885xa]['rel'] = 'nofollow', a_to_vb++, a_to_vc += _0x5885xa + ':::' + _0x5885x4[_0x5885xa]['href'] + '\x0A'
        }
    };
    var _0x5885xc = document['getElementById']('anonyminized'),
        _0x5885xd = document['getElementById']('found_links');
    _0x5885xc && (_0x5885xc['innerHTML'] += a_to_vb), _0x5885xd && (_0x5885xd['innerHTML'] += a_to_va)
}
function a_to_fa() {
    var _0x5885x3 = new Array;
    return protected_links = protected_links['replace'](' ', ''), _0x5885x3 = protected_links['split'](',')
}
var Base64 = {
    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    encode: function (_0x5885x3) {
        var _0x5885x4, _0x5885x5, _0x5885x6, _0x5885x7, _0x5885x8, _0x5885x9, _0x5885xa, _0x5885xb = '',
            _0x5885xc = 0;
        for (_0x5885x3 = Base64._utf8_encode(_0x5885x3); _0x5885xc < _0x5885x3['length'];) {
            _0x5885x4 = _0x5885x3['charCodeAt'](_0x5885xc++), _0x5885x5 = _0x5885x3['charCodeAt'](_0x5885xc++), _0x5885x6 = _0x5885x3['charCodeAt'](_0x5885xc++), _0x5885x7 = _0x5885x4 >> 2, _0x5885x8 = (3 & _0x5885x4) << 4 | _0x5885x5 >> 4, _0x5885x9 = (15 & _0x5885x5) << 2 | _0x5885x6 >> 6, _0x5885xa = 63 & _0x5885x6, isNaN(_0x5885x5) ? _0x5885x9 = _0x5885xa = 64 : isNaN(_0x5885x6) && (_0x5885xa = 64), _0x5885xb = _0x5885xb + this['_keyStr']['charAt'](_0x5885x7) + this['_keyStr']['charAt'](_0x5885x8) + this['_keyStr']['charAt'](_0x5885x9) + this['_keyStr']['charAt'](_0x5885xa)
        };
        return _0x5885xb
    },
    decode: function (_0x5885x3) {
        var _0x5885x4, _0x5885x5, _0x5885x6, _0x5885x7, _0x5885x8, _0x5885x9, _0x5885xa, _0x5885xb = '',
            _0x5885xc = 0;
        for (_0x5885x3 = _0x5885x3['replace'](/[^A-Za-z0-9\+\/\=]/g, ''); _0x5885xc < _0x5885x3['length'];) {
            _0x5885x7 = this['_keyStr']['indexOf'](_0x5885x3['charAt'](_0x5885xc++)), _0x5885x8 = this['_keyStr']['indexOf'](_0x5885x3['charAt'](_0x5885xc++)), _0x5885x9 = this['_keyStr']['indexOf'](_0x5885x3['charAt'](_0x5885xc++)), _0x5885xa = this['_keyStr']['indexOf'](_0x5885x3['charAt'](_0x5885xc++)), _0x5885x4 = _0x5885x7 << 2 | _0x5885x8 >> 4, _0x5885x5 = (15 & _0x5885x8) << 4 | _0x5885x9 >> 2, _0x5885x6 = (3 & _0x5885x9) << 6 | _0x5885xa, _0x5885xb += String['fromCharCode'](_0x5885x4), 64 != _0x5885x9 && (_0x5885xb += String['fromCharCode'](_0x5885x5)), 64 != _0x5885xa && (_0x5885xb += String['fromCharCode'](_0x5885x6))
        };
        return _0x5885xb = Base64._utf8_decode(_0x5885xb)
    },
    _utf8_encode: function (_0x5885x3) {
        _0x5885x3 = _0x5885x3['replace'](/\r\n/g, '\x0A');
        for (var _0x5885x4 = '', _0x5885x5 = 0; _0x5885x5 < _0x5885x3['length']; _0x5885x5++) {
            var _0x5885x6 = _0x5885x3['charCodeAt'](_0x5885x5);
            128 > _0x5885x6 ? _0x5885x4 += String['fromCharCode'](_0x5885x6) : _0x5885x6 > 127 && 2048 > _0x5885x6 ? (_0x5885x4 += String['fromCharCode'](_0x5885x6 >> 6 | 192), _0x5885x4 += String['fromCharCode'](63 & _0x5885x6 | 128)) : (_0x5885x4 += String['fromCharCode'](_0x5885x6 >> 12 | 224), _0x5885x4 += String['fromCharCode'](_0x5885x6 >> 6 & 63 | 128), _0x5885x4 += String['fromCharCode'](63 & _0x5885x6 | 128))
        };
        return _0x5885x4
    },
    _utf8_decode: function (_0x5885x3) {
        for (var _0x5885x4 = '', _0x5885x5 = 0, _0x5885x6 = c1 = c2 = 0; _0x5885x5 < _0x5885x3['length'];) {
            _0x5885x6 = _0x5885x3['charCodeAt'](_0x5885x5), 128 > _0x5885x6 ? (_0x5885x4 += String['fromCharCode'](_0x5885x6), _0x5885x5++) : _0x5885x6 > 191 && 224 > _0x5885x6 ? (c2 = _0x5885x3['charCodeAt'](_0x5885x5 + 1), _0x5885x4 += String['fromCharCode']((31 & _0x5885x6) << 6 | 63 & c2), _0x5885x5 += 2) : (c2 = _0x5885x3['charCodeAt'](_0x5885x5 + 1), c3 = _0x5885x3['charCodeAt'](_0x5885x5 + 2), _0x5885x4 += String['fromCharCode']((15 & _0x5885x6) << 12 | (63 & c2) << 6 | 63 & c3), _0x5885x5 += 3)
        };
        return _0x5885x4
    }
},
    encode = document['getElementById']('encode'),
    decode = document['getElementById']('decode'),
    output = document['getElementById']('output'),
    input = document['getElementById']('input'),
    User_ID = '',
    protected_links = '',
    a_to_va = 0,
    a_to_vb = 0,
    a_to_vc = ''
