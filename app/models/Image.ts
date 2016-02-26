export class Image {
    public path: string;
    public availability: boolean;
}

export class Images {
    public images: Image[] = new Array<Image>();
    constructor(objets) {
        for (var key in objets) {
            var obj = objets[key];
            var image = new Image();

            for (var prop in obj) {
                image[prop] = obj[prop];
            }

            this.images.push(image);
        }
    }
    
}