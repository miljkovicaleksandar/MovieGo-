class Show {
    constructor({id = "", name, image, rating = "", summary = "", _embedded = ""}) {
        this.id = id;
        this.name = name;
        this.img = image.medium;
        this.imgLarge = image.original;
        this.rating = rating.average;
        this.summary = summary;
        this.cast = _embedded.cast;
    }
    getData() {
        return `${this.id} ${this.name} ${this.rating}`
    }
}

export default Show;