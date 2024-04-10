ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:7851").setExtent([496797.464346, 8071402.568733, 498795.796155, 8073336.020528]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: "Roads",
                interactive: true,
                title: '<img src="styles/legend/Roads_1.png" /> Roads'
            });
var format_BuriedServices_2 = new ol.format.GeoJSON();
var features_BuriedServices_2 = format_BuriedServices_2.readFeatures(json_BuriedServices_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_BuriedServices_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuriedServices_2.addFeatures(features_BuriedServices_2);
var lyr_BuriedServices_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuriedServices_2, 
                style: style_BuriedServices_2,
                popuplayertitle: "Buried Services",
                interactive: true,
    title: 'Buried Services<br />\
    <img src="styles/legend/BuriedServices_2_0.png" /> CSM Air 110mm<br />\
    <img src="styles/legend/BuriedServices_2_1.png" /> Cable Trays<br />\
    <img src="styles/legend/BuriedServices_2_2.png" /> CSM Comms 100mm<br />\
    <img src="styles/legend/BuriedServices_2_3.png" /> CSM Elec 100mm<br />\
    <img src="styles/legend/BuriedServices_2_4.png" /> CSM FUEL LINE<br />\
    <img src="styles/legend/BuriedServices_2_5.png" /> Gate<br />\
    <img src="styles/legend/BuriedServices_2_6.png" /> Generator<br />\
    <img src="styles/legend/BuriedServices_2_7.png" /> CSM GRP 1100mm<br />\
    <img src="styles/legend/BuriedServices_2_8.png" /> CSM Irig Sleeve 100<br />\
    <img src="styles/legend/BuriedServices_2_9.png" /> Culverts<br />\
    <img src="styles/legend/BuriedServices_2_10.png" /> Poly Pipe<br />\
    <img src="styles/legend/BuriedServices_2_11.png" /> CSM Sewer 100<br />\
    <img src="styles/legend/BuriedServices_2_12.png" /> SMSB<br />\
    <img src="styles/legend/BuriedServices_2_13.png" /> CSM Structure Building<br />\
    <img src="styles/legend/BuriedServices_2_14.png" /> CSM Water 900<br />\
    <img src="styles/legend/BuriedServices_2_15.png" /> Hydraulic<br />\
    <img src="styles/legend/BuriedServices_2_16.png" /> CSM Structure Concrete<br />\
    <img src="styles/legend/BuriedServices_2_17.png" /> CSM Structure Fence<br />\
    <img src="styles/legend/BuriedServices_2_18.png" /> CSM Water Copper 25<br />\
    <img src="styles/legend/BuriedServices_2_19.png" /> CSM Water Fire 100<br />\
    <img src="styles/legend/BuriedServices_2_20.png" /> CSM Water Fire 160<br />\
    <img src="styles/legend/BuriedServices_2_21.png" /> CSM Water Fire 225<br />\
    <img src="styles/legend/BuriedServices_2_22.png" /> CSM Water Fire 63<br />\
    <img src="styles/legend/BuriedServices_2_23.png" /> CSM Water Pipe 110<br />\
    <img src="styles/legend/BuriedServices_2_24.png" /> CSM Water Pipe 125<br />\
    <img src="styles/legend/BuriedServices_2_25.png" /> CSM Water Pipe 25<br />\
    <img src="styles/legend/BuriedServices_2_26.png" /> CSM Water Pipe 32<br />\
    <img src="styles/legend/BuriedServices_2_27.png" /> CSM Water Pipe 40<br />\
    <img src="styles/legend/BuriedServices_2_28.png" /> CSM Water Pipe 50<br />\
    <img src="styles/legend/BuriedServices_2_29.png" /> CSM Water Pipe 63<br />\
    <img src="styles/legend/BuriedServices_2_30.png" /> CSM Water Pipe 90<br />\
    <img src="styles/legend/BuriedServices_2_31.png" /> CSM Water Pit<br />\
    <img src="styles/legend/BuriedServices_2_32.png" /> CSM Water Process 140<br />\
    <img src="styles/legend/BuriedServices_2_33.png" /> CSM Water Process 160<br />\
    <img src="styles/legend/BuriedServices_2_34.png" /> CSM Water Process 63<br />\
    <img src="styles/legend/BuriedServices_2_35.png" /> CSM Water Process 90<br />\
    <img src="styles/legend/BuriedServices_2_36.png" /> CSM Water Retic 63<br />\
    <img src="styles/legend/BuriedServices_2_37.png" /> CSM Water Stop Valve<br />\
    <img src="styles/legend/BuriedServices_2_38.png" /> CSM Water Tank<br />\
    <img src="styles/legend/BuriedServices_2_39.png" /> CSM Water Waste 63<br />\
    <img src="styles/legend/BuriedServices_2_40.png" /> CSM Water Waste 90<br />\
    <img src="styles/legend/BuriedServices_2_41.png" /> CSM Water Waste oily 63<br />\
    <img src="styles/legend/BuriedServices_2_42.png" /> CSM Water Waste oily 90<br />\
    <img src="styles/legend/BuriedServices_2_43.png" /> CSM Sewer 150<br />\
    <img src="styles/legend/BuriedServices_2_44.png" /> CSM Sewer 225<br />\
    <img src="styles/legend/BuriedServices_2_45.png" /> CSM Sewer 63<br />\
    <img src="styles/legend/BuriedServices_2_46.png" /> CSM Sewer Control box<br />\
    <img src="styles/legend/BuriedServices_2_47.png" /> CSM Sewer Inspection Opening<br />\
    <img src="styles/legend/BuriedServices_2_48.png" /> CSM Sewer Pit<br />\
    <img src="styles/legend/BuriedServices_2_49.png" /> CSM Sewer rising main 100<br />\
    <img src="styles/legend/BuriedServices_2_50.png" /> CSM Sewer rising main 63<br />\
    <img src="styles/legend/BuriedServices_2_51.png" /> CSM Irig Sleeve 150<br />\
    <img src="styles/legend/BuriedServices_2_52.png" /> CSM Irig Sleeve 300<br />\
    <img src="styles/legend/BuriedServices_2_53.png" /> CSM Irig Sleeve 400<br />\
    <img src="styles/legend/BuriedServices_2_54.png" /> CSM Irig Sleeve 50<br />\
    <img src="styles/legend/BuriedServices_2_55.png" /> CSM GRP 600mm<br />\
    <img src="styles/legend/BuriedServices_2_56.png" /> CSM GRP T PIECE<br />\
    <img src="styles/legend/BuriedServices_2_57.png" /> CSM FUEL TANK<br />\
    <img src="styles/legend/BuriedServices_2_58.png" /> CSM Elec 150mm<br />\
    <img src="styles/legend/BuriedServices_2_59.png" /> CSM Elec 32mm<br />\
    <img src="styles/legend/BuriedServices_2_60.png" /> CSM Elec 50mm<br />\
    <img src="styles/legend/BuriedServices_2_61.png" /> CSM Elec 63mm<br />\
    <img src="styles/legend/BuriedServices_2_62.png" /> CSM Elec 80mm<br />\
    <img src="styles/legend/BuriedServices_2_63.png" /> CSM Elec cable 25mm<br />\
    <img src="styles/legend/BuriedServices_2_64.png" /> CSM Elec cable 25mm2<br />\
    <img src="styles/legend/BuriedServices_2_65.png" /> CSM Elec cable 35mm2<br />\
    <img src="styles/legend/BuriedServices_2_66.png" /> CSM Elec cable 50mm2<br />\
    <img src="styles/legend/BuriedServices_2_67.png" /> CSM Elec cable 6mm2<br />\
    <img src="styles/legend/BuriedServices_2_68.png" /> CSM Elec cable 75mm<br />\
    <img src="styles/legend/BuriedServices_2_69.png" /> CSM Elec conduit unknown<br />\
    <img src="styles/legend/BuriedServices_2_70.png" /> CSM Elec Earth pit<br />\
    <img src="styles/legend/BuriedServices_2_71.png" /> CSM Elec Earthwire<br />\
    <img src="styles/legend/BuriedServices_2_72.png" /> CSM Elec Light Pole<br />\
    <img src="styles/legend/BuriedServices_2_73.png" /> CSM Elec Lightning Mast<br />\
    <img src="styles/legend/BuriedServices_2_74.png" /> CSM Elec Pillar<br />\
    <img src="styles/legend/BuriedServices_2_75.png" /> CSM Elec Pit<br />\
    <img src="styles/legend/BuriedServices_2_76.png" /> CSM Elec switch board<br />\
    <img src="styles/legend/BuriedServices_2_77.png" /> CSM Comms 50mm<br />\
    <img src="styles/legend/BuriedServices_2_78.png" /> CSM Comms Fibre<br />\
    <img src="styles/legend/BuriedServices_2_79.png" /> CSM Comms pit<br />\
    <img src="styles/legend/BuriedServices_2_80.png" /> CSM Air 63mm<br />'
        });
var format_DisturbanceOutline_3 = new ol.format.GeoJSON();
var features_DisturbanceOutline_3 = format_DisturbanceOutline_3.readFeatures(json_DisturbanceOutline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_DisturbanceOutline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisturbanceOutline_3.addFeatures(features_DisturbanceOutline_3);
var lyr_DisturbanceOutline_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisturbanceOutline_3, 
                style: style_DisturbanceOutline_3,
                popuplayertitle: "Disturbance Outline",
                interactive: true,
                title: '<img src="styles/legend/DisturbanceOutline_3.png" /> Disturbance Outline'
            });
var format_PlantLocations_4 = new ol.format.GeoJSON();
var features_PlantLocations_4 = format_PlantLocations_4.readFeatures(json_PlantLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7851'});
var jsonSource_PlantLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantLocations_4.addFeatures(features_PlantLocations_4);
var lyr_PlantLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantLocations_4, 
                style: style_PlantLocations_4,
                popuplayertitle: "Plant Locations",
                interactive: true,
                title: '<img src="styles/legend/PlantLocations_4.png" /> Plant Locations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_BuriedServices_2.setVisible(true);lyr_DisturbanceOutline_3.setVisible(true);lyr_PlantLocations_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Roads_1,lyr_BuriedServices_2,lyr_DisturbanceOutline_3,lyr_PlantLocations_4];
lyr_Roads_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'project': 'project', 'length': 'length', 'display': 'display', 'id': 'id', });
lyr_BuriedServices_2.set('fieldAliases', {'fid': 'fid', 'serviceType': 'serviceType', });
lyr_DisturbanceOutline_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'permit number': 'permit number', 'land use': 'land use', 'description': 'description', 'tenement': 'tenement', 'date cleared': 'date cleared', 'mrf category': 'mrf category', 'area (ha)': 'area (ha)', 'layer': 'layer', 'path': 'path', });
lyr_PlantLocations_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'alpha_order': 'alpha_order', });
lyr_Roads_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'project': 'TextEdit', 'length': 'TextEdit', 'display': '', 'id': 'TextEdit', });
lyr_BuriedServices_2.set('fieldImages', {'fid': 'TextEdit', 'serviceType': 'TextEdit', });
lyr_DisturbanceOutline_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'permit number': 'TextEdit', 'land use': 'TextEdit', 'description': 'TextEdit', 'tenement': 'TextEdit', 'date cleared': 'DateTime', 'mrf category': 'TextEdit', 'area (ha)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PlantLocations_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'alpha_order': 'Range', });
lyr_Roads_1.set('fieldLabels', {'name': 'no label', 'type': 'no label', 'project': 'no label', 'length': 'no label', 'display': 'no label', 'id': 'no label', });
lyr_BuriedServices_2.set('fieldLabels', {'fid': 'hidden field', 'serviceType': 'header label - always visible', });
lyr_DisturbanceOutline_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'permit number': 'no label', 'land use': 'no label', 'description': 'no label', 'tenement': 'no label', 'date cleared': 'no label', 'mrf category': 'no label', 'area (ha)': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PlantLocations_4.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', 'alpha_order': 'hidden field', });
lyr_PlantLocations_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});