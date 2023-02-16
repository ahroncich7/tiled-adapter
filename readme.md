# <span style="color:green">**|**</span> Tiled-Adapter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ![badge](https://img.shields.io/badge/Status-in%20progress-yellowgreen) ![version](https://img.shields.io/npm/v/tiled-adapter)

*NPM module. Export a json map from [Tiled](https://www.mapeditor.org/) and get a map object*

<br>

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
<br>

You will obtain an object like this:

![map example](https://i.ibb.co/WGrjZbP/image.png)

<br>

## <span style="color:green">**|**</span> Incoming

- Test coverage (DEV)
- Documentation improve (DEV)
- Add custom terrain (FEAT)
- Add custom map properties (FEAT)
