export class tileModel {

    constructor(tiledTile){
        this.id = tiledTile.id
        tiledTile.properties = tiledTile.properties.reverse()
        tiledTile.properties.forEach(prop => {
            this[prop.name] = prop.value
        });
    }
}
