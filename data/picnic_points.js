/* Picnic areas (tourism=picnic_site) inside the Prali comune boundary.
   Static snapshot pulled from the OpenStreetMap Overpass API (overpass-api.de),
   query: area["name"="Prali"]["boundary"="administrative"]; nwr[tourism=picnic_site](area);
   The 1 result is mapped as an area outline (way), not a point, so the
   coordinate here is that way's computed center (Overpass "out center").
   Fetched: 2026-09-03. Data (c) OpenStreetMap contributors, ODbL 1.0 - www.openstreetmap.org/copyright
   To refresh: re-run the same Overpass query and regenerate this file. */
var json_picnic_points = {"type":"FeatureCollection","name":"picnic_points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[
{"type":"Feature","properties":{"osm_type":"way","osm_id":1410837465,"name":null,"access":"yes","osm_url":"https://www.openstreetmap.org/way/1410837465"},"geometry":{"type":"Point","coordinates":[7.0396319,44.8757338]}}
]};
