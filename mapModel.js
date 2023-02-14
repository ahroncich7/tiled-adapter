export class mapModel{

    constructor(map){
        this.width = map.width
        this.height = map.height
        this.grid = map.layers[0].data;
    }

}