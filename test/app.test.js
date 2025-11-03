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
        expect(s2.getSurfaceAire()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});