const Sphere = require('../src/app').Sphere;
const expect = require('chai').expect;

describe('Test fonction de la sphere', function() {
    it('1. Le rayon du sphere', function(done) {
        let s1 = new Sphere(5);
        expect(s1.getRayon()).to.equal(5);
        done();
    });
    
    it('2. L air de la surface de la sphere', function(done) {
        let s2 = new Sphere(5);
        expect(s2.getSurfaceAire()).to.be.closeTo(314.159, 0.001);
        done();
    });
    
    it('3. Le volume de la sphere', function(done) {
        let s3 = new Sphere(5);
        expect(s3.getVolume()).to.be.closeTo(523.599, 0.001);
        done();
    });
    
});