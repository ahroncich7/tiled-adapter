import { readMap, readTileset } from "./readjson.js"
import { gameMap } from "./gameMap.js";
import { twoDiMapModel } from "./grid/twoDiMapModel.js";
import { tileModel } from "./tiles/tileModel.js";
import { mapModel } from "./grid/mapModel.js";

export class tiledAdapter {



    static #formatTilesList(tileSet) {

        //Deconstruct the list of types objects and models them into a clear array

        let tilesList = [];
        tileSet.forEach(tile => {
            let $tile = new tileModel(tile);
            tilesList.push($tile);
        });
        return tilesList;
    }


    static #setMap(grid, is2D) {

        let formatedMap = is2D ? new twoDiMapModel(grid) : new mapModel(grid);
        return formatedMap;
    }


    static getTerrainTypesFromFile(tilesetPath = "./tileset.json") {
        let tileSet = readTileset(tilesetPath)
        let terrainList = tiledAdapter.#formatTilesList(tileSet)
        return terrainList;
    }

    static getMapFromFile(mapPath = "./map.json", is2D = true) {
        let map = readMap(mapPath);
        let formatedMap = tiledAdapter.#setMap(map, is2D)
        return formatedMap;
    }

    static createMapFromTiled({ mapPath = "./map.json", tilesetPath = "./tileset.json", is2D = true }) {
        //Take the paths of map and tileset json files from Tiled and return a map object with a grid containing
        //the tiles taked from the files 
        let terrainList = tiledAdapter.getTerrainTypesFromFile(tilesetPath);
        let mapGrid = tiledAdapter.getMapFromFile(mapPath, is2D);
        return tiledAdapter.createMap(mapGrid, terrainList)
    }

    static createMap(mapGrid, terrainList) {
        let map = new gameMap(mapGrid, terrainList)
        return map;
    }

}



