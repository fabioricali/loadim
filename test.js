const loadim = require('./');
const be = require('bejs');
const IMG_SRC = 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';

describe('loadim', function () {
    before(function () {
        this.jsdom = require('jsdom-global')(undefined, {
            resources: 'usable'
        })
    });

    after(function () {
        this.jsdom()
    });

    it('should be loaded', function (done) {
        loadim(IMG_SRC, function(err, image) {
            console.log(image);
            be.err(done).equal(image.src, IMG_SRC);
        });
    });

    it('should be error loading', function (done) {
        loadim('not_found', function(err, image) {
            console.log(err);
            be.err(done).error(err);
        });
    });

    it('should be error src', function (done) {
        try {
            loadim();
        } catch (e) {
            console.log(e);
            done();
        }
    });

    it('should be error callback', function (done) {
        try {
            loadim('source', null);
        } catch (e) {
            console.log(e);
            done();
        }
    });

    it('should be crossOrigin param', function (done) {
        loadim(IMG_SRC, {crossOrigin: 'anonymous'}, function(err, image) {
            console.log(image.crossOrigin);
            be.err(done).equal(image.crossOrigin, 'anonymous');
        });
    });
});