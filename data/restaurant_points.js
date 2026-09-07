/* Restaurants (amenity=restaurant) inside the Prali comune boundary.
   Static snapshot pulled from the OpenStreetMap Overpass API,
   query: area["name"="Prali"]["boundary"="administrative"]; nwr[amenity=restaurant](area);
   1 result is a point node; the other is an area outline (way), for which
   the coordinate here is that way's computed center (Overpass "out center").
   Fetched: 2026-09-07. Data (c) OpenStreetMap contributors, ODbL 1.0 - www.openstreetmap.org/copyright
   To refresh: re-run the same Overpass query and regenerate this file. */
var json_restaurant_points = {"type":"FeatureCollection","name":"restaurant_points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[
{"type":"Feature","properties":{"osm_type":"node","osm_id":4353158838,"name":"Osteria Lo zio Gil","osm_url":"https://www.openstreetmap.org/node/4353158838"},"geometry":{"type":"Point","coordinates":[7.0532366,44.9192416]}},
{"type":"Feature","properties":{"osm_type":"way","osm_id":173210734,"name":"La Capannina","osm_url":"https://www.openstreetmap.org/way/173210734"},"geometry":{"type":"Point","coordinates":[7.0620217,44.8737796]}}
]};
