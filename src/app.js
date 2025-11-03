class Sphere {

    constructor(rayon) {
        this.rayon = rayon;
    }

    getRayon() {

        return this.rayon;
    }

    getSurfaceAire() {

        return ((4 / 3) * Math.PI * Math.pow(this.rayon, 3));
    }

    getVolume() {

        return (4 * Math.PI * Math.pow(this.rayon, 2));
    }

}

module.exports = {
    Sphere:Sphere
}