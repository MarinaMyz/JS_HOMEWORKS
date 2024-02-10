'use strict';

function parseUrl(url) {
    const parser = document.createElement('a');
    parser.href = url;

    return {
        protocol: parser.protocol,
        host: parser.host,
        path: parser.pathname,
        hash: parser.hash
    };
}
const url = 'https://example.com:8080/path/name?query=123#hash';
const parsedUrl = parseUrl(url);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.path);
console.log(parsedUrl.hash);