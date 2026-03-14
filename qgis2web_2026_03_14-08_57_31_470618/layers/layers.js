var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab 1',
                interactive: false,
                title: '<img src="styles/legend/lab1_2.png" /> lab 1'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: false,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: false,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_3.setVisible(true);lyr_building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_building_3,lyr_building_4,lyr_highway_5,lyr_highway_6];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'building:part': 'building:part', });
lyr_building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'description': 'description', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'waterway': 'waterway', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'addr:place': 'addr:place', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'name:ru': 'name:ru', 'name': 'name', 'crossing': 'crossing', 'railway': 'railway', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'smoothness': 'smoothness', 'name': 'name', 'surface': 'surface', 'layer': 'layer', 'lanes': 'lanes', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_lab1_2.set('fieldImages', {'fid': '', 'name': 'TextEdit', });
lyr_building_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:postcode': '', 'addr:city': '', 'building:part': '', });
lyr_building_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'tourism': 'TextEdit', 'addr:street': 'TextEdit', 'description': 'TextEdit', 'religion': 'TextEdit', 'training': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'waterway': 'TextEdit', 'voltage': 'TextEdit', 'substation': 'TextEdit', 'power': 'TextEdit', 'operator': 'TextEdit', 'location': 'TextEdit', 'gas_insulated': 'TextEdit', 'frequency': 'TextEdit', 'branch': 'TextEdit', 'addr:place': 'TextEdit', 'name:ru': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'building:levels': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'bench': '', 'public_transport': '', 'bus': '', 'name:ru': '', 'name': '', 'crossing': '', 'railway': '', });
lyr_highway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'service': '', 'footway': '', 'ford': '', 'depth': '', 'ref': '', 'old_ref': '', 'oneway': '', 'smoothness': '', 'name': '', 'surface': '', 'layer': '', 'lanes': '', 'bridge': '', 'bicycle': '', 'access': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'building:part': 'no label', });
lyr_building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'description': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'addr:place': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'name:ru': 'no label', 'name': 'no label', 'crossing': 'no label', 'railway': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'name': 'no label', 'surface': 'no label', 'layer': 'no label', 'lanes': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_highway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});