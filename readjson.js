import fs from "fs";

function readMap(mapPath) {
    let stringMap = "";
    try {
        stringMap = fs.readFileSync(mapPath)
    } catch (err) {
        throw new Error("Cant read the map file")
    }
    return JSON.parse(stringMap)
}


function readTileset(tilesetPath) {

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

export {readMap, readTileset}