# <span style="color:green">**|**</span> Tiled-Adapter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ![badge](https://img.shields.io/badge/Status-in%20progress-yellowgreen) ![version](https://img.shields.io/npm/v/tiled-adapter)

*NPM module. Export a json map from [Tiled](https://www.mapeditor.org/) and get a map object*

<br>



## <span style="color:green">**|**</span> Update Log

<br>

- Add custom terrain (FEAT)
- Add custom map properties (FEAT)

## <span style="color:green">**|**</span> Get Started

<br>

Export your map in Tiled. In map window => File => Export As and select "JSON map files". Set file name and extension as follows:

![create map](https://i.ibb.co/FWH4Dfq/image.png)

Next, do the same with the tile set. First, you can edit your tile set to define custom properties for each tile, which will be catched by the tiled-adapter module:

![tile editor](https://i.ibb.co/BVCvFZd/image.png)

In the tileset window => File => Export As and select "JSON tileset files":

![create tileset](https://i.ibb.co/pxy7S4X/image.png)


<br>

### Install 
---
<br>

```
npm install tiled-adapter 
```

<br>

## <span style="color:green">**|**</span> Use

<br>

To get a javascript object map from the Tiled files:

```
import { adapter } from "tiledAdapter";

const map = adapter.createMapFromTiled({
    mapPath: "./map.json",
    tilesetPath: "./tileset.json"
})
```
The map variable will contain a JavaScript object that represents your Tiled map.
<br>

You will obtain an object like this:

```
{
    width: 10,
    height: 8,
    grid: [
        [{
            typeId: 0,
            type: "grass",
            onlyFeet: false,
            isPassable: true,
            defensiveBonus: 1,
            cost: 1,
            canEmbark: false
        },
        {
            typeId: 2,
            type: "woods",
            onlyFeet: true,
            isPassable: true,
            defensiveBonus: 2,
            cost: 2,
            canEmbark: false
        }]

    ],

    (...)

} 

```
### <span style="color:green">**|**</span> Creating custom maps

<br>

You can also create a custom map using only some of the functionalities provided by the adapter. For example, you can define a custom grid and a custom tileset and use them to create a new map object. Here's an example:

```
import { createMap, customTile } from "tiled-adapter";

const customGrid = {
    width: 4,
    height: 2,
    grid:[
        [0, 0],
        [0, 1],
        [2, 1],
        [1, 1]
    ]
};

const customTileSet = [
    new customTile({ id: 0, properties: { type: "grass", canBuild: true, isPassable: true, cost: 1 } }),
    new customTile({ id: 1, properties: { type: "hardGrass", canBuild: true, isPassable: true, cost: 2 } }),
    new customTile({ id: 0, properties: { type: "woods", canBuild: false, isPassable: false } }),
]

const customMap = createMap(customGrid, customTileSet);

```
In this example, we define a custom grid with a size of 4x2, and a custom tileset with three tiles, each with its own custom properties. We then use the createMap function to create a new map object with these custom settings.

Note that you can define any number of custom properties for each tile, as long as they are valid JavaScript objects.

```
{
    width: 4,
        height: 2,
            grid: [
                [
                    customTile {
                        typeId: 0,
                        type: 'grass',
                        canBuild: true,
                        isPassable: true,
                        cost: 1
                    },
                    customTile {
                        typeId: 0,
                        type: 'grass',
                        canBuild: true,
                        isPassable: true,
                        cost: 1
                    }
                ],
               [...],
               [...],
               [...]
}
```

<br>

## <span style="color:green">**|**</span> Incoming

- Test coverage (DEV)
- Documentation improve (DEV)
