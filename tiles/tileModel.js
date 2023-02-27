export class tileModel {

    constructor(tiledTile){
        this.typeId = tiledTile.id
        tiledTile.properties = tiledTile.properties.reverse()
        tiledTile.properties.forEach(prop => {
            this[prop.name] = prop.value
        });
    }
}
