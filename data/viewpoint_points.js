/* Viewpoints (tourism=viewpoint) inside the Prali comune boundary.
   Static snapshot pulled from the OpenStreetMap Overpass API (overpass-api.de),
   query: area["name"="Prali"]["boundary"="administrative"]; nwr[tourism=viewpoint](area);
   All 3 results are point nodes. None carry a `name` tag.
   Fetched: 2026-09-04. Data (c) OpenStreetMap contributors, ODbL 1.0 - www.openstreetmap.org/copyright
   To refresh: re-run the same Overpass query and regenerate this file. */
var json_viewpoint_points = {"type":"FeatureCollection","name":"viewpoint_points","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[
{"type":"Feature","properties":{"osm_type":"node","osm_id":1845158877,"name":null,"osm_url":"https://www.openstreetmap.org/node/1845158877"},"geometry":{"type":"Point","coordinates":[7.0710064,44.8708563]}},
{"type":"Feature","properties":{"osm_type":"node","osm_id":9113314734,"name":null,"osm_url":"https://www.openstreetmap.org/node/9113314734"},"geometry":{"type":"Point","coordinates":[7.0552960,44.9116617]}},
{"type":"Feature","properties":{"osm_type":"node","osm_id":12951533109,"name":null,"osm_url":"https://www.openstreetmap.org/node/12951533109"},"geometry":{"type":"Point","coordinates":[7.0307220,44.8326067]}}
]};
