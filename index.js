/**
 * Load image
 * @param {string} src
 * @param {object} [opt]
 * @param {string} [opt.crossOrigin]
 * @param {function} callback
 */
function Loadim(src, opt, callback) {
    if (typeof src !== 'string')
        throw new Error('src must be a valid image path');

    if (typeof opt === 'function') {
        callback = opt;
        opt = null;
    }

    if (typeof callback !== 'function')
        throw new Error('callback must be a function');

    var image = new Image();

    image.onload = function () {
        callback(null, this);
    };

    image.onerror = function () {
        callback(new Error('Unable to load image: ' + src), this);
    };

    if (opt && opt.crossOrigin) {
        image.crossOrigin = opt.crossOrigin;
    }

    image.src = src;

    return image;
}

if (typeof window !== 'undefined')
    window.loadim = Loadim;

if (typeof module !== 'undefined')
    module.exports = Loadim;