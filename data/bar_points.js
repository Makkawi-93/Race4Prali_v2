/* Bars (amenity=bar) inside the Prali comune boundary.
   Static snapshot pulled from the OpenStreetMap Overpass API,
   query: area["name"="Prali"]["boundary"="administrative"]; nwr[amenity=bar](area);
   Both results are point nodes.
   Fetched: 2026-09-07. Data (c) OpenStreetMap contributors, ODbL 1.0 - www.openstreetmap.org/copyright
   To refresh: re-run the same Overpass query and regenerate this file. */
var json_bar_points = {"type":"FeatureCollection","name":"bar_points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[
{"type":"Feature","properties":{"osm_type":"node","osm_id":1839770751,"name":"Caffetteria delle Alpi","osm_url":"https://www.openstreetmap.org/node/1839770751"},"geometry":{"type":"Point","coordinates":[7.0487073,44.8888005]}},
{"type":"Feature","properties":{"osm_type":"node","osm_id":1839770753,"name":"Carlie","osm_url":"https://www.openstreetmap.org/node/1839770753"},"geometry":{"type":"Point","coordinates":[7.0493838,44.8893053]}}
]};
