import fs from "fs";
import { gameMap } from "./gameMap.js";
import { twoDiMapModel } from "./twoDiMapModel.js";
import { tileModel } from "./tileModel.js";
import { mapModel } from "./mapModel.js";

export class tiledAdapter {

    static #readMap = (mapPath) => {
        let stringMap = "";
        try {
            stringMap = fs.readFileSync(mapPath)
        } catch (err) {
            throw new Error("Cant read the map file")
        }
        return JSON.parse(stringMap)
    }


    static #readTileset = (tilesetPath) => {

        //Read file and parse to a JS object

        let stringTileset = "";
        try {
            stringTileset = fs.readFileSync(tilesetPath)
        } catch (err) {
            throw new Error("Cant read the tileset file")
        }

        let jsonTileset = JSON.parse(stringTileset);

        //Get an object´s array from the JS object, containing each type of tile used
        //and their properties

        if (jsonTileset.tiles.length > 0) {
            return jsonTileset.tiles
        } else {
            throw new Error("Tileset must have a list of tile types")
        }

    }


    static #setTilesList(tileSet) { 

        //Deconstruct the list of types objects and models them into a clear array
        
        let tilesList = [];
        tileSet.forEach(tile => {
            let $tile = new tileModel(tile);
            tilesList.push($tile);
        });
        return tilesList;
    }


    static #setMap(grid, is2D) {

        let formatedMap = is2D? new twoDiMapModel(grid): new mapModel(grid); 
        return formatedMap;
    }


    static getTerrainTypes(tilesetPath = "./tileset.json") {
        let tileSet = tiledAdapter.#readTileset(tilesetPath)
        let terrainList = tiledAdapter.#setTilesList(tileSet)
        return terrainList;
    }

    static getMap(mapPath = "./map.json", is2D = true) {
        let map = tiledAdapter.#readMap(mapPath);
        let formatedMap = tiledAdapter.#setMap(map, is2D)
        return formatedMap;
    }

    static createMapFromTiled({mapPath = "./map.json", tilesetPath = "./tileset.json", is2D = true}) {
        //Take the paths of map and tileset json files from Tiled and return a map object with a grid containing
        //the tiles taked from the files 
        let terrainList = tiledAdapter.getTerrainTypes(tilesetPath);
        let mapGrid = tiledAdapter.getMap(mapPath, is2D);
        let map = new gameMap(mapGrid, terrainList)
        return map;
    }

}



