## AWS deployment
- https://docs.protomaps.com/deploy/aws

## PMTiles Viewer
- https://pmtiles.io/

## Lambda Tile Function 
- https://i5me3i3lvk5egx5fjtxrn4o3h40xfglt.lambda-url.us-east-2.on.aws/
- test url
    - https://i5me3i3lvk5egx5fjtxrn4o3h40xfglt.lambda-url.us-east-2.on.aws/jun_10y_us/12/655/1577.png

-- 7.526254735223647, 1.1298365895020286  (lat lon)

## CloudFront 
- response header policy 
    - wo-tile-cors

## Tile preprocessing workflow 
- upload .tif to s3 processing folder
- kick off ECS task cuz it'll be >15 minutes ([info](https://stackoverflow.com/questions/72059214/alternative-to-lambda-for-serverless-long-running-tasks))
    - dependencies
        - gdal
        - pmtiles 
### GDAL commands
- given a single gray band (e.g. jun_10y_us.tif) apply a color map using `gdaldem color_relief`
  - band dtype needs to be byte or uint16 ([source](https://gis.stackexchange.com/questions/104196/how-to-add-a-color-table-to-a-one-band-tiff-using-gdal#:~:text=your%20gdalinfo%20outputs%20inform%20you%20that%20your%20original%20file%20is%20in%20Float%2C%20while%20the%20use%20of%20color%20tables%20requires%20Byte%20or%20UInt16.))
  - you can export a QGIS color ramp as an `.sld` file then use `./scripts/sld-to-color-txt.py` to convert it into `elevation_value r g b` text format.
  - update the nodata value in the output text file (e.g. 1 from `48 18 59` to `0 0 0`)
  - run command
    - `gdaldem color-relief -co COMPRESS=LZW -co PREDICTOR=2 -co NUM_THREADS=ALL_CPUS -co GDAL_CACHEMAX=1024 jun_10y_us_copy.tif turbo_style.txt jun_10y_us_cm.tif` <span style="color:yellow">4m</span>
- convert tif to mbtiles file 
    - `gdal_translate -of MBTiles jun_10y_us_cm.tif jun_10y_us.mbtiles` <span style="color:red">2h</span>
- set nodata value
    - `gdal_edit -a_nodata 0 jun_10y_us.mbtiles` <span style="color:green">1s</span>
- add overviews to mbtiles file 
    - `gdaladdo -co GDAL_CACHEMAX=1024 jun_10y_us.mbtiles 2 4 8 16 32 64 128 256 512 1024 2056`
        - gdaladdo can calculate overviews for you but it was ending up trying to use 1023 which will cause an error because it's not a power of 2 so i added the exact overview levels in the command.
- convert mbtiles to pmtiles
    - `pmtiles convert jun_10y_us.mbtiles jun_10y_us.pmtiles`
- upload file to s3 (TODO)
    - `aws s3 cp jun_10y_us.pmtiles s3://wo-test-tile-bucket`

## pmtiles proxy server
- gdal_translate .tif to .mbtiles will output only the highest zoom level matching the resolution of the input image. 
- to ensure data is visible across multiple zoom levels it's necessary to build overviews for the mbtiles file.

## Information
- route to consume the tiles from the proxy server is http://localhost:8080/{FILENAME}/{z}/{x}/{y}.png
    - FILENAME corrersponds to the .pmfile filename ( exclude the file extension )

## Resources 
- https://enonline.supermap.com/iServer9D/Subject_introduce/Cache/MapCache/TileFormat/ZXY_format.htm
- https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Lon..2Flat._to_tile_numbers_2
