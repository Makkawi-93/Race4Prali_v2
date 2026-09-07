/* Cafes (amenity=cafe) inside the Prali comune boundary.
   Static snapshot pulled from the OpenStreetMap Overpass API,
   query: area["name"="Prali"]["boundary"="administrative"]; nwr[amenity=cafe](area);
   The 1 result is a point node.
   Fetched: 2026-09-07. Data (c) OpenStreetMap contributors, ODbL 1.0 - www.openstreetmap.org/copyright
   To refresh: re-run the same Overpass query and regenerate this file. */
var json_cafe_points = {"type":"FeatureCollection","name":"cafe_points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[
{"type":"Feature","properties":{"osm_type":"node","osm_id":12110711339,"name":"Bardour","osm_url":"https://www.openstreetmap.org/node/12110711339"},"geometry":{"type":"Point","coordinates":[7.0469007,44.8872643]}}
]};
