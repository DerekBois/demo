var crypto = require('crypto');

function base64Encode(str) {
    return new Buffer(str).toString('base64');
}
function base64Decode(str) {
    return new Buffer(str, 'base64').toString();
}
function sign(str, key) {
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}
function verify(raw, secret, signature) {
    return signature === sign(raw, secret);
}

exports.encode = function(payload, secret) {
    var algorithm = 'HS256',
        header = {
            typ: 'JWT',
            alg: algorithm
        },
        jwt = base64Encode(JSON.stringify(header))+'.'+base64Encode(JSON.stringify(payload));

    return jwt + '.'+sign(jwt, secret);
}
exports.decode = function(token, secret) {
    var segments = token.split('.'),
        header = segments[0],
        payload = segments[1],
        rawSignature = header+'.'+payload;

    if (segments.length !== 3) {
        throw new Error("Token structure is incorrect");
    }
    header = JSON.parse(base64Decode(header));
    payload = JSON.parse(base64Decode(payload));

    if (!verify(rawSignature, secret, segments[2])) {
        throw new Error("Verification failed");
    }
    return payload;
}