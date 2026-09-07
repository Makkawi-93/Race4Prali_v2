/* Public toilets (amenity=toilets) inside the Prali comune boundary.
   Static snapshot pulled from the OpenStreetMap Overpass API (overpass-api.de),
   query: area["name"="Prali"]["boundary"="administrative"]; nwr[amenity=toilets](area);
   All 3 results are mapped as building outlines (ways), not points, so the
   coordinates here are each way's computed center (Overpass "out center").
   Fetched: 2026-09-03. Data (c) OpenStreetMap contributors, ODbL 1.0 - www.openstreetmap.org/copyright
   To refresh: re-run the same Overpass query and regenerate this file. */
var json_toilet_points = {"type":"FeatureCollection","name":"toilet_points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[
{"type":"Feature","properties":{"osm_type":"way","osm_id":1307778923,"name":null,"access":"yes","fee":"no","wheelchair":"no","building":"toilets","osm_url":"https://www.openstreetmap.org/way/1307778923"},"geometry":{"type":"Point","coordinates":[7.0471085,44.8879065]}},
{"type":"Feature","properties":{"osm_type":"way","osm_id":1307778928,"name":null,"access":"yes","fee":"no","wheelchair":null,"building":"toilets","osm_url":"https://www.openstreetmap.org/way/1307778928"},"geometry":{"type":"Point","coordinates":[7.0486046,44.8910334]}},
{"type":"Feature","properties":{"osm_type":"way","osm_id":1512386366,"name":null,"access":null,"fee":null,"wheelchair":null,"building":"yes","osm_url":"https://www.openstreetmap.org/way/1512386366"},"geometry":{"type":"Point","coordinates":[7.0403044,44.8799541]}}
]};
