export class customTileModel {

    constructor(tile) {
        this.typeId = tile.id
        Object.keys(tile.properties).forEach(prop => {
            this[prop] = tile.properties[prop];
        })
    }
}
