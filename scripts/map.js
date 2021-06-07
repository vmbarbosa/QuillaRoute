let myMap = L.map('myMap').setView([10.9878, -74.7889], 13)

//############### Icon Structure ###############

var Stadium_icon = L.ExtraMarkers.icon({
    icon: 'fa-futbol',
    markerColor: 'purple',
    shape: 'square',
    prefix: 'fa'
  });

var baseball_icon = L.ExtraMarkers.icon({
  icon: 'fa-baseball-ball',
  markerColor: 'purple',
  shape: 'square',
  prefix: 'fa'
});

var zoo_icon = L.ExtraMarkers.icon({
  icon: 'fa-otter',
  markerColor: 'green',
  shape: 'square',
  prefix: 'fa'
});

var malecon_rio_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-water',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var mirador_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-chess-rook',
  markerColor: 'red',
  shape: 'square',
  prefix: 'fa'
});

var hotel_danncar_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-bed',
  markerColor: 'pink',
  shape: 'square',
  prefix: 'fa'
});

var plaza_paz_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-tree',
  markerColor: 'green',
  shape: 'square',
  prefix: 'fa'
});

var castillo_sal_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-chess-rook',
  markerColor: 'red',
  shape: 'square',
  prefix: 'fa'
});

var museo_car_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-building',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var futbol_icon = L.ExtraMarkers.icon({
  icon: 'far fa-futbol',
  markerColor: 'purple',
  shape: 'square',
  prefix: 'fa'
});

var camera_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-camera',
  markerColor: 'purple',
  shape: 'square',
  prefix: 'fa'
});

var paseo_bol_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-monument',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var museo_moder_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-building',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var plaza_santodom_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-tree',
  markerColor: 'green',
  shape: 'square',
  prefix: 'fa'
});

var barr_prado_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-home',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var intendencia_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-landmark',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var intend_rec_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-landmark',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var museo_rom_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-building',
  markerColor: 'blue',
  shape: 'square',
  prefix: 'fa'
});

var parque_virgen_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-tree',
  markerColor: 'green',
  shape: 'square',
  prefix: 'fa'
});

var cubiertos_icon = L.ExtraMarkers.icon({
  icon: 'fas fa-utensils',
  markerColor: 'green',
  shape: 'square',
  prefix: 'fa'
});

//############### Markers ###############

var Stadium = L.marker([10.993591464586146, -74.8069963064242], {icon: Stadium_icon, title: "Estadio Romelio Martinez"}).addTo(myMap);
Stadium.bindPopup("<h2>Estadio Romelio Martinez</h2><br>El estadio Romelio Martínez es un escenario para la práctica del fútbol en Barranquilla, Colombia.El diseño arquitectónico de su tribuna norte corresponde al estilo art déco. El escenario lleva el nombre de un destacado atleta barranquillero de las décadas de 1930 y 1940.​<br><br><b>Población: </b>8600<br><b>Dirección: </b>Cra. 46, Av. Olaya Herrera #72-155, Barranquilla, Atlántico<br>★★★★✩ (10000)<br><br><img src=\"https://images.adsttc.com/media/images/5ce5/a31b/284d/d120/cd00/002f/slideshow/07_05_2018_ROMELIO_%283%29.jpg?1558553343\" width=\"300\" height=\"200\">");

var baseball = L.marker([10.995668666372552, -74.7841407242097], {icon: baseball_icon, title: "Estadio Édgar Rentería"}).addTo(myMap);
baseball .bindPopup("<b>Estadio Édgar Rentería</b><br>El estadio de béisbol Edgar Rentería en Barranquilla es un hermoso escenario de talla internacional.En el 2018 fue sede de los Juegos centroamericanos y del Caribe.​<br><b>Población: </b>8600<br><b>Dirección: </b>a 56-120, Cl. 47 #56-12, Barranquilla, Atlántico<br>★★★★✩ (3500)<br><img src=\"https://lh5.googleusercontent.com/p/AF1QipOwJ0HZstBXQPXos2atxNX7HeUUC6PbByu5v9ws=w408-h306-k-no\" width=\"300\" height=\"200\">");

var zoo = L.marker([11.011139000569473, -74.7978993600308], {icon: zoo_icon, title: "Zoológico de Barranquilla"}).addTo(myMap);
zoo  .bindPopup("<h2>Zoológico de Barranquilla</h2><br>El zoológico de Barranquilla mantiene diversas especies animales para la contemplación del público en Barranquilla, Colombia. Operado por la La Fundación Botánica y Zoológica de Barranquilla, tiene una área de 10 000 m².​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Población: </b>112<br><b>Dirección: </b>Esquina, Cl. 76 con Carrera 68, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53600314<br>★★★★✩ (213)<br><br><img src=\"https://cr00.epimg.net/radio/imagenes/2020/08/18/barranquilla/1597709757_233825_1597709895_noticia_normal_recorte1.jpg\" width=\"300\" height=\"200\">");

var malecon_rio = L.marker([11.02623, -74.79962], {icon: malecon_rio_icon, title: "Gran Malecon del Rio"}).addTo(myMap);
malecon_rio  .bindPopup("<h2>Gran Malecon del Rio-Sector Puerta De Oro</h2><br>Conectará dos polos de desarrollo de la ciudad y se construirá una nueva Barranquilla al pie del río. Las inversiones son el catalizador para el desarrollo de las 429hectáreas que traerán crecimiento a la ciudad.​<br><br><b>Horario: </b>06:00 a 22:00<br><b>Población: </b>2000000+<br><b>Dirección: </b>Vía 40 con calle 79b, Barranquilla, Atlántico<br><b>Telefono: </b>(57+5) 3789664<br>★★★★✩ (260)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNK8hUrVqzgS6bqLAl1X_BAbRD5CLB6NGS9d5am=w408-h306-k-no\" width=\"300\" height=\"200\">");

var mirador = L.marker([10.99230, -74.82908], {icon: mirador_icon, title: "Mirador cerro de Los Nogales"}).addTo(myMap);
mirador  .bindPopup("<h2>Mirador cerro de Los Nogales</h2><br>El alcalde de Barranquilla, Jaime Pumarejo Heins, el mandatario distrital hizo entrega del Mirador de Los Nogales, un nuevo escenario en el que predominan las zonas verdes y áreas de descanso​. El espacio puesto al servicio de los barranquilleros tiene una extensión de 1.326 metros cuadrados, de los cuales 1.124 son áreas verdes.<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. #84- a, Cra. 42a 1, Barranquilla, Atlántico<br>★★★★✩ (200)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNVO-C0WtNl_u2ZTfIitgXk7ZroN5pGAnVD28AI=w408-h306-k-no\" width=\"300\" height=\"200\">");

var hotel_danncar = L.marker([11.01292, -74.82699], {icon: hotel_danncar_icon, title: "Hotel Dann Carlton Barranquilla"}).addTo(myMap);
hotel_danncar  .bindPopup("<h2>Hotel Dann Carlton Barranquilla</h2><br>Este hotel de 4 estrellas, ideal para visitantes, con vistas al mar Caribe, se encuentra a 5 km de las exposiciones de arte del Museo Romántico y a 6 del Teatro Amira de la Rosa.​<br><br><b>Horario: </b>Entrada: 15:00 - Salida: 13:00<br><b>Dirección: </b>Cl. 98 #52B-10, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53677777<br>★★★★✩ (1500)<br><br><img src=\"https://lh4.googleusercontent.com/proxy/Bu0z_m6PnEzlW1ms3JK3POZ0_TUQkCDO9Dbd5IGIFbwBSQEgh4zg446E8RMx-0S2WOpDmiJzL_8WJM_iWz9AQZvISzYj4tyEZ960AYwUaBnqVYOEWcsH0EbZF5tKHNuLvhPnsvOmdppGiUKyHkeWvSoFB3QsyDI=w408-h271-k-no\" width=\"300\" height=\"200\">");

var plaza_paz = L.marker([10.98796, -74.78883], {icon: plaza_paz_icon, title: "Plaza de la Paz"}).addTo(myMap);
plaza_paz  .bindPopup("<h2>Plaza de la Paz</h2><br>Principal plaza de la ciudad de Barranquilla. Una plaza emblemática y céntrica. Se realizan todo tipo de eventos en ella... Desde manifestaciones o propuestas hasta festivales de música o eventos de carnaval. Tiene un parque lineal a su lado, recientemente remodelado y ampliado, además la Catedral Metropolitana María Reina está en frente y a un lado se encuentra una de las estaciones del sistema integrado de transporte de la ciudad.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. 53 #46-07, Barranquilla, Atlántico<br>★★★★✩ (2000)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipN7kPaCN_n8lMY3LqVktrtrRp8TDnWlOBtrWrK2=w408-h306-k-no\" width=\"300\" height=\"200\">");

var castillo_sal = L.marker([11.01824, -74.94162], {icon: castillo_sal_icon, title: "Castillo de Salgar"}).addTo(myMap);
castillo_sal  .bindPopup("<h2>Castillo de Salgar</h2><br>Castillo construido por los españoles sobre una colina en 1848, que alberga un restaurante con vistas al mar.​<br><br><b>Horario: </b>08:00 a 18:00<br><b>Población: </b>112<br><b>Dirección: </b>Cl. 9, Salgar, Puerto Colombia, Atlántico<br><b>Telefono: </b>+57 53207300<br>★★★★✩ (4000)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipO1FSzqFbPKIoiwLPmQkE23BmWUiC95thQlaMPH=w426-h240-k-no\" width=\"300\" height=\"200\">");

var museo_car = L.marker([10.98627, -74.77856], {icon: museo_car_icon, title: "Museo del Caribe"}).addTo(myMap);
museo_car  .bindPopup("<h2>Museo del Caribe, Gabriel García Márquez</h2><br>Museo amplio con exposiciones sobre la geografía, la cultura y la historia del Caribe colombiano.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Población: </b>2000<br><b>Dirección: </b>Cl. 36 #46 - 66, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53720581<br>★★★★✩ (1700)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNKbUa-pesgCgqPaPDwsMmDpfRMPg4bCFoJ1t-g=w408-h271-k-no\" width=\"300\" height=\"200\">");

var estadio_metro = L.marker([10.92698, -74.80053], {icon: futbol_icon, title: "Estadio Metropolitano Roberto Meléndez"}).addTo(myMap);
estadio_metro .bindPopup("<b>Estadio Metropolitano Roberto Meléndez</b><br>El estadio Metropolitano Roberto Meléndez es un escenario para la práctica del fútbol y el atletismo de Barranquilla, Colombia. Fue inaugurado el 11 de mayo de 1986 sustituyendo al estadio Romelio Martínez.​<br>★★★★✩<br><img src=\"https://lh5.googleusercontent.com/p/AF1QipMxYYO2Q9Xdz5JQU2nwapo-3xwqqunofPJgoLrs=w426-h240-k-no\" width=\"300\" height=\"200\">");

var boca_ceniza = L.marker([11.10631, -74.85472], {icon: camera_icon, title: "Bocas de Ceniza"}).addTo(myMap);
boca_ceniza  .bindPopup("<h2>Bocas de Ceniza</h2><br>Un impresionante lugar con hermosa vista de la desembocadura del río Magdalena, demasiado atractivo el paisaje oceánico y el ambiente tropical del lugar. La cultura pescadora y cangrejos alrededor.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Destapada Bocas De Ceniza, Barranquilla, Magdalena<br><b>Telefono: </b>+57 3002791730<br>★★★★✩ (600)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNUX4usKGa1jivrDw5WAHf-QyOB7PuOAT8W3Asc=w408-h272-k-no\" width=\"300\" height=\"200\">");

var paseo_bol = L.marker([10.98295, -74.77766], {icon: paseo_bol_icon, title: "Paseo Bolívar"}).addTo(myMap);
paseo_bol  .bindPopup("<h2>Paseo Bolívar</h2><br>El sitio más popular e histórico de Barranquilla, está ubicado en el centro histórico de la ciudad, un lindo lugar  donde en sus alrededores podrás encontrar variedad de productos con unos excelentes precios.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Carrera 44 #34, Barranquilla, Atlántico<br>★★★★✩ (4000)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNCUyTlX5k454yogbyYIMsPZuNBa_FeoVHnPUNA=w408-h306-k-no\" width=\"300\" height=\"200\">");

var museo_moder = L.marker([10.98698, -74.77799], {icon: museo_moder_icon, title: "Museo de Arte Moderno de Barranquilla"}).addTo(myMap);
museo_moder  .bindPopup("<h2>Museo de Arte Moderno de Barranquilla</h2><br>Tiene un área construida de 3500 metros cuadrados aproximadamente, se constituye como un hito y emblema del conjunto expositivo del Parque Cultural del Caribe y de la transformación urbana y cultural que se viene gestando a lo largo de los años en la ciudad.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Dirección: </b>Cra. 56 No 74-22, Barranquilla, Atlántico<br><b>Telefono: </b>+57 3008516975<br>★★★✩✩ (60)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipOH495iaJX0e9dU7_AwuMZ39F8WQoiTJiK5GOPe=w408-h306-k-no\" width=\"300\" height=\"200\">");

var plaza_santodom = L.marker([10.98643, -74.77802], {icon: plaza_santodom_icon, title: "Plaza Mario Santodomingo"}).addTo(myMap);
plaza_santodom  .bindPopup("<h2>Plaza Mario Santodomingo</h2><br>Parque.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. 36 #4-6 esquina, Barranquilla, Atlántico<br>★★✩✩✩ (30)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipMp6JPuWwuyaAdNpKBhpgtyQo1q6iT0jkgl38oQ=w408-h240-k-no-pi-19.919615-ya128.21544-ro0-fo100\" width=\"300\" height=\"200\">");

var barr_prado = L.marker([10.99748, -74.79807], {icon: barr_prado_icon, title: "Barrio El Prado"}).addTo(myMap);
barr_prado  .bindPopup("<h2>Barrio El Prado</h2><br>Uno de los hitos históricos y urbanos de Barranquilla es el Barrio El Prado, cuya importancia radica por ser uno de los legados arquitectónicos del siglo XX que hoy lucha por sobrevivir a la modernidad. En tu recorrido encontrarás enormes casas de estilo europeo que embellecen la zona con sus hermosos jardines.​<br><br><b>Dirección: </b>Barranquilla, Atlántico<br>★★★★✩ (400)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipM-HNLZoNjcQQuzrDcmR0WPKtnIU7ovUo4Y16Xh=w493-h240-k-no\" width=\"300\" height=\"200\">");

var intendencia_fluv = L.marker([10.98572, -74.77585], {icon: intendencia_icon, title: "Intendencia Fluvial Barranquilla"}).addTo(myMap);
intendencia_fluv  .bindPopup("<h2>Intendencia Fluvial Barranquilla</h2><br>Lugar histórico de la ciudad ubicado en el centro histórico y recuperado en el año 2014. Se encuentra ubicado en la Plaza Grande del río de la Magdalena y un brazo de este mismo río llega hasta dicha plaza.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Dirección: </b>Av. del Rio, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53708653<br>★★★★✩ (340)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipMHLqUPftsQ4AC_XoST1srtq5ARx8WIeLB8yojx=w408-h408-k-no\" width=\"300\" height=\"200\">");

var intend_rec = L.marker([10.98732, -74.77698], {icon: intend_rec_icon, title: "Intendencia Fluvial Recuperada"}).addTo(myMap);
intend_rec  .bindPopup("<h2>Intendencia Fluvial Recuperada</h2><br>Lugar histórico de la ciudad ubicado en el centro histórico y recuperado en el año 2014. Se encuentra ubicado en la Plaza Grande del río de la Magdalena y un brazo de este mismo río llega hasta dicha plaza.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Dirección: </b>Vía Cuarenta, Barranquilla, Atlántico<br>★★★★✩ (300)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNZOYcagQYOicQPMMLCHtxlwnt3vMAVoOfz5WVh=w408-h306-k-no\" width=\"300\" height=\"200\">");

var museo_rom = L.marker([10.99493, -74.79428], {icon: museo_rom_icon, title: "Museo Romántico"}).addTo(myMap);
museo_rom  .bindPopup("<h2>Museo Romántico</h2><br>Museo peculiar en una casa de época que alberga obras de arte locales y diversos objetos históricos.<br><br><b>Horario: </b>08:00 a 17:00<br><b>Población: </b>50<br><b>Dirección: </b>Cra. 54 #59-199, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53399000<br>★★★★✩ (600)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipM9CRYzIj6JPVRut6bMMxYYDqZ9oGVicU-kIjvi=w427-h240-k-no\" width=\"300\" height=\"200\">");

var plaza_aduana = L.marker([10.98834, -74.77898], {icon: camera_icon, title: "Plaza De La Aduana"}).addTo(myMap);
plaza_aduana  .bindPopup("<h2>Plaza De La Aduana</h2><br>Uno de los lugares históricos en Barranquilla para visitar es la Plaza de la Aduana, la cual entre sus colores y encantadora arquitectura cautiva a turistas y lugareños. Aquí podrás encontrar el edificio de La Aduana en el que se albergan varios archivos.<br><br><b>Horario: </b>24 horas<br><b>Población: </b>50<br><b>Dirección: </b>Vía Cuarenta, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53792949<br>★★★★✩ (900)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipPvFQARp6A0nirWPsBYqdSB-vwsgk6Lmw4LU7HA=w426-h240-k-no\" width=\"300\" height=\"200\">");

var parque_virgen = L.marker([10.95260, -74.82203], {icon: parque_virgen_icon, title: "Parque La Virgencita Del Bosque"}).addTo(myMap);
parque_virgen  .bindPopup("<h2>Parque La Virgencita Del Bosque</h2><br>Parque.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. 76 No 8, Barranquilla, Atlántico<br>★✩✩✩✩ (5)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipOqLnNBCUhQbDhcwsBN6eqlElrSqTKVcbsP2t_R=w426-h240-k-no\" width=\"300\" height=\"200\">");

var restaur_ceci = L.marker([11.02105, -74.80638], {icon: cubiertos_icon, title: "Restaurante Doña Ceci"}).addTo(myMap);
restaur_ceci  .bindPopup("<h2>Restaurante Doña Ceci</h2><br>Restaurante.​<br><br><b>Horario: </b>10:30 a 15:00<br><b>Dirección: </b>Cl. 82b ##76-29, Barranquilla, Atlántico<br><b>Telefono: </b>+57 3216593184<br>★★★★★ (10)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNy_JizpStaWX3qQ8JQ3jxqwcncJmtUy3oIMECj=w426-h240-k-no\" width=\"300\" height=\"200\">");

//############### Search ###############

var searchLayer = L.layerGroup();

searchLayer.addLayer(baseball);
searchLayer.addLayer(Stadium);
searchLayer.addLayer(zoo);
searchLayer.addLayer(malecon_rio);
searchLayer.addLayer(mirador);
searchLayer.addLayer(hotel_danncar);
searchLayer.addLayer(plaza_paz);
searchLayer.addLayer(castillo_sal);
searchLayer.addLayer(museo_car);
searchLayer.addLayer(estadio_metro);
searchLayer.addLayer(boca_ceniza);
searchLayer.addLayer(paseo_bol);
searchLayer.addLayer(museo_moder);
searchLayer.addLayer(plaza_santodom);
searchLayer.addLayer(barr_prado);
searchLayer.addLayer(intendencia_fluv);
searchLayer.addLayer(intend_rec);
searchLayer.addLayer(museo_rom);
searchLayer.addLayer(plaza_aduana);
searchLayer.addLayer(parque_virgen);

myMap.addLayer(searchLayer);


var controlSearch = new L.Control.Search({
  position:'topleft',		
  layer: searchLayer,
  initial: false,
  zoom: 20,
  marker: false
});

//... adding data in searchLayer ...
myMap.addControl( controlSearch );

// ############### Areas ###############

var sur_occidente = L.polygon([
  [10.9388371078298, -74.8494856268421],
  [10.944248715673004, -74.83866615838613], 
  [10.943046144691985, -74.83152122638691],
  [10.948488397430454, -74.81393004287884],
  [10.958709907302358, -74.80341678579428],
  [10.965023016445066, -74.79198489459552],
  [10.979753080216382, -74.78718758311032],
  [10.984262136580549, -74.80035467208032],
  [10.983030536367, -74.80179858905557],
  [10.98728139217821, -74.81959739294307],
  [10.984669402189656, -74.82414641906284],
  [10.985194430598755, -74.82759377154323],
  [10.98659593327441, -74.82878006257329],
  [10.98642741809746, -74.82981003081227],
  [10.982972835767852, -74.83272827415603],
  [10.982635801068156, -74.83719147064286],
  [10.980445066875813, -74.84611786204732],
  [10.980304008466925, -74.84740802852684],
  [10.953134113220818, -74.90288002343803],
  [10.951646011955834, -74.8928285295361],
  [10.946260583142768, -74.89311722840277],
  [10.946402306208146, -74.88315711750299]
], {color: 'blue'}).addTo(myMap);


var norte_centro_historico = L.polygon([
  [10.987211075850766, -74.8199651759904],
  [10.984686214026697, -74.82438789297211],
  [10.984514827093426, -74.82751827640956], 
  [10.986642326180165, -74.82829788201472],
  [10.986500622400666, -74.82959702691468],
  [10.9833831220397, -74.83212314199797],
  [10.9827454474554, -74.83630927556453],
  [10.980194735335001, -74.84670243514043],
  [10.95376522746908, -74.90256566710787],
  [10.958583651516221, -74.90191609465788],
  [10.962197418063383, -74.90032825089125],
  [10.965315141963249, -74.89679168977466],
  [10.966448851684282, -74.89527602060673],
  [10.969991666268035, -74.88769767535692],
  [10.975943499254727, -74.88040802883665],
  [10.979557053591376, -74.87860366092004],
  [10.985296137442038, -74.87218011093283],
  [10.993231476687649, -74.86900442339957],
  [10.999962177462375, -74.87131401433284],
  [11.004779847857414, -74.87788191354934],
  [11.00676357189353, -74.88055237813133],
  [11.011226901459056, -74.88141847473132],
  [11.01221874328692, -74.88019150454801],
  [11.013358204514638, -74.88382921611417],
  [11.01703703866653, -74.85390409751427],
  [11.017012141599636, -74.85075567397098],
  [11.012478054077539, -74.84252775627118],
  [11.004968317933745, -74.82809281264336],
  [11.001599888141465, -74.81926149687285],
  [11.006961685138686, -74.81659107261018],
  [11.007438284593805, -74.81659107261018],
  [11.011965940951974, -74.81076469240068],
  [11.01113190419411, -74.80736597038397],
  [11.008868078304396, -74.80408863151612],
  [11.008629779830025, -74.80214650477963],
  [11.011846792781661, -74.80020437754993],
  [11.017446694756858, -74.79704842160315],
  [11.020425322609059, -74.79340693397221],
  [11.018757294726631, -74.79255725352499],
  [11.01851900425721, -74.79085789263056],
  [11.008391480979904, -74.77908374929055],
  [10.994927293075527, -74.76828066901052],
  [10.984441482089276, -74.7619687571169],
  [10.978125984358067, -74.75990524745937],
  [10.978125984358067, -74.76985864698392],
  [10.975266091903425, -74.76985864698392],
  [10.977472348569489, -74.78021174754917],
  [10.981601067946468, -74.79454547220826],
  [10.981601067946468, -74.79454547220826],
  [10.98429734331791, -74.80021029752261],
  [10.983142656236645, -74.80181267275346]
], {color: 'coral'}).addTo(myMap);


var riomar = L.polygon([
  [11.008633798480803, -74.80237346883533],
  [11.008633798480803, -74.80396131260196],
  [11.009342263508723, -74.8053326322186], 
  [11.011255110570879, -74.8077865725852],
  [11.012034415070813, -74.81074573596847],
  [11.011113418622038, -74.81175618200177],
  [11.009909034303972, -74.81276662803508],
  [11.007712791396761, -74.81594231556834],
  [11.006366698939827, -74.81695276160166],
  [11.001974143932017, -74.8191180031016],
  [11.002328384666509, -74.82121106988488],
  [11.002682624975174, -74.82236586535151],
  [11.01163544734343, -74.8404504632658],
  [11.031873370622163, -74.83208068528603],
  [11.034678517399646, -74.83034548741216],
  [11.037183090105668, -74.82728337351712],
  [11.038786005430818, -74.82707923259079],
  [11.034077416773119, -74.83555108103373],
  [11.034377967240093, -74.8372862789076],
  [11.03307557966292, -74.83881733585511],
  [11.02956912288161, -74.8515761437511],
  [11.03147263337129, -74.86035420405906],
  [11.029969863105654, -74.86321217702776],
  [11.030070048029073, -74.86545772721746],
  [11.026062624461266, -74.86831570018616],
  [11.027264857267138, -74.87086746176537],
  [11.028968011993532, -74.87311301195506],
  [11.029969863105654, -74.87229644824973],
  [11.032565097035418, -74.87738757436568],
  [11.033627707492931, -74.87767627323234],
  [11.035115355677663, -74.87681017663235],
  [11.03908238067476, -74.87767627323234],
  [11.040995034296778, -74.87753192379901],
  [11.04078251784285, -74.87616060418237],
  [11.041349228044872, -74.87478928456574],
  [11.041207550596903, -74.87356231438244],
  [11.041136711847285, -74.87349013966578],
  [11.043499853974243, -74.87040662700176],
  [11.04653252428724, -74.86980581219568],
  [11.04990212121494, -74.86010694461199],
  [11.053861348154557, -74.85298299762574],
  [11.057230860898393, -74.84800481780404],
  [11.059673733424349, -74.84594488132609],
  [11.063211650644059, -74.84414243690787],
  [11.064138240953174, -74.84414243690787],
  [11.0629589436876, -74.84328413004206],
  [11.045605878349258, -74.8285212519501],
  [11.045184674674985, -74.82792043664371],
  [11.041141088729658, -74.8196806907319],
  [11.037350176333112, -74.81487417228337],
  [11.029852449983695, -74.80165624654984],
  [11.029009996866803, -74.80036878625111],
  [11.020248341228521, -74.7935023308053],
  [11.017805140756426, -74.79693555826854],
  [11.013255678931376, -74.79933881749282]
], {color: 'olive'}).addTo(myMap);


var sur_oriente = L.polygon([
  [10.978094443948399, -74.75984007916837],
  [10.978048487429248, -74.76991248057298],
  [10.975167834451181, -74.76985347197359], 
  [10.97672265211351, -74.7770115208279],
  [10.979839801969018, -74.78706359504116],
  [10.970282876514243, -74.78986060882751],
  [10.969180600199339, -74.79007302904652],
  [10.964056451496836, -74.79213653870406],
  [10.952824721875245, -74.79723462148459],
  [10.950411482873799, -74.79975331726222],
  [10.950113550642136, -74.79987470016178],
  [10.942992884524235, -74.79960158858945],
  [10.940937095525372, -74.79951055139868],
  [10.94019224091959, -74.79932847701714],
  [10.921598379314595, -74.79934994040993],
  [10.921292162521715, -74.79907566666324],
  [10.92161247063686, -74.79907566666324],
  [10.921865737274002, -74.79881772795605],
  [10.921999353347372, -74.79845508400632],
  [10.92240684031049, -74.79813029778134],
  [10.923150945495712, -74.79798594834801],
  [10.92338126338936, -74.79731833221885],
  [10.923629297844245, -74.79693941495637],
  [10.923611581104337, -74.79733637589801],
  [10.923930482260852, -74.79780551155635],
  [10.92637537974576, -74.79769724948133],
  [10.926552545447633, -74.79701158967303],
  [10.927030892314445, -74.79699354599386],
  [10.92719034109873, -74.79674093448554],
  [10.927420655858095, -74.79677702184387],
  [10.927420655858095, -74.79773333683968],
  [10.92775726941567, -74.7970296333522],
  [10.928005300213758, -74.79688528391887],
  [10.928164748474488, -74.7967589781647],
  [10.928147032005306, -74.79657854137304],
  [10.92812931553507, -74.79654245401471],
  [10.9283773460222, -74.79639810458139],
  [10.92839506247763, -74.79600114363973],
  [10.928607659860338, -74.79556809533973],
  [10.929741510115475, -74.79500874119277],
  [10.930113553746969, -74.79457569289279],
  [10.930113553746969, -74.79457569289279],
  [10.93053874589742, -74.79416068827196],
  [10.931123384109286, -74.79325850431364],
  [10.931105667816754, -74.79226610195951],
  [10.931778886188857, -74.79138196168036],
  [10.933302480101686, -74.79098500069048],
  [10.933833964490344, -74.7895415062759],
  [10.93367451927656, -74.78836866713009],
  [10.936845691392769, -74.78340665524384],
  [10.93815666880777, -74.7807542344064],
  [10.940388860312193, -74.77945508945906],
  [10.940176271374623, -74.77866116757576],
  [10.940760890625395, -74.77830029390714],
  [10.94425086625019, -74.7724541417314],
  [10.944692504095306, -74.7696785989315],
  [10.945268733430972, -74.76949997562096],
  [10.944266594735602, -74.76669303788385],
  [10.94441691575599, -74.76574888609954],
  [10.94376552411785, -74.76528956895613],
  [10.94524368002006, -74.76365644145642],
  [10.944917985288319, -74.76143640888252],
  [10.94434175527049, -74.76064536279296],
  [10.945619481188713, -74.75911430584543],
  [10.945895068409426, -74.75939499961915],
  [10.951181282806125, -74.75880809436579],
  [10.971097688268067, -74.75891016483797],
  [10.977560837071154, -74.76016052801177]
  
], {color: 'purple'}).addTo(myMap);


var metropolitano = L.polygon([
  [10.964935276624484, -74.79198409051445],
  [10.959738624532026, -74.80162506524539],
  [10.958729447244618, -74.80343059198037], 
  [10.948531249838675, -74.81382884814944],
  [10.94316923549022, -74.83129515583136],
  [10.943181626323913, -74.8335789878739],
  [10.933024736893955, -74.83383900147903],
  [10.931128259426956, -74.83255750593457],
  [10.928447640790422, -74.82824870932129],
  [10.927772923441179, -74.8278215441398],
  [10.926131712674305, -74.828601584906],
  [10.922630432511875, -74.8270972204928],
  [10.921299205856888, -74.82490567738778],
  [10.923305161623318, -74.82254698252834],
  [10.925146981734065, -74.82252841012914],
  [10.925475225702519, -74.82208267254846],
  [10.922885735639376, -74.81628808386299],
  [10.922903971563834, -74.81114352928591],
  [10.922613980819143, -74.81056699803295],
  [10.922527235559972, -74.80950684942822],
  [10.921876645308384, -74.80941850371116],
  [10.922613980819143, -74.80513373643363],
  [10.921876645308384, -74.8007164505805],
  [10.921356172080731, -74.79947961054164],
  [10.940829923662216, -74.79961212915526],
  [10.950327792676656, -74.80005385774058],
  [10.953103368344197, -74.7973593131829],
  [10.961776873873077, -74.79342792877361]
  
], {color: 'yellow'}).addTo(myMap);

// ############### Map Style ###############

L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	attribution: '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

