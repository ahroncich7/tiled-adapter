export class gameMap {

    constructor(mapGrid, tilesList) {
        
        this.width = mapGrid.width;

        this.height = mapGrid.height;
        
        if (mapGrid.grid[0].length){
            this.grid = this.#create2DGrid(mapGrid, tilesList);
            
        } else{
            this.grid = this.#createGrid(mapGrid, tilesList);
        }
    }

    #createGrid(mapGrid, tilesList) {
        return mapGrid.grid.map(cell => {
            let terrain = tilesList.find(type => type.id === Number(cell) - 1);
            if (terrain) {
                return terrain;
            } else {
                throw new Error("Type in map grid doesnt match any type in type list")
            }
        })

    }

    #create2DGrid(mapGrid, tilesList) {
        return mapGrid.grid.map(row => {
            return row.map(cell => {
                let terrain = tilesList.find(type => type.typeId === Number(cell));
                if (terrain) {
                    return terrain;
                } else {
                    throw new Error("Type in map grid doesnt match any type in type list")
                }
            })
        });
    }
}