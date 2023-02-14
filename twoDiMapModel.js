import { mapModel } from "./mapModel.js";

export class twoDiMapModel extends mapModel{

    constructor(map){
        super(map);
        this.grid = this.getTwoDiGrid(map.layers[0].data);
    }

    getTwoDiGrid(grid){
        let $grid = [];
        for (let x = 0; x < this.width; x++) {
            let row = []
            for (let y = 0; y < this.height; y++) {
                row.push(grid[this.width*y+x])
            }
            $grid.push(row)
        }
        return $grid;
    }
}