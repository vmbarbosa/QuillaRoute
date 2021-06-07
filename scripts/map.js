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

//############### Markers ###############

var Stadium = L.marker([10.993591464586146, -74.8069963064242], {icon: Stadium_icon}).addTo(myMap);
Stadium.bindPopup("<h2>Estadio Romelio Martinez</h2><br>El estadio Romelio Martínez es un escenario para la práctica del fútbol en Barranquilla, Colombia.El diseño arquitectónico de su tribuna norte corresponde al estilo art déco. El escenario lleva el nombre de un destacado atleta barranquillero de las décadas de 1930 y 1940.​<br><br><b>Población: </b>8600<br><b>Dirección: </b>Cra. 46, Av. Olaya Herrera #72-155, Barranquilla, Atlántico<br>★★★★✩ (10000)<br><br><img src=\"https://images.adsttc.com/media/images/5ce5/a31b/284d/d120/cd00/002f/slideshow/07_05_2018_ROMELIO_%283%29.jpg?1558553343\" width=\"300\" height=\"200\">");

var baseball = L.marker([10.995668666372552, -74.7841407242097], {icon: baseball_icon}).addTo(myMap);
baseball .bindPopup("<b>Estadio Édgar Rentería</b><br>El estadio de béisbol Edgar Rentería en Barranquilla es un hermoso escenario de talla internacional.En el 2018 fue sede de los Juegos centroamericanos y del Caribe.​<br><b>Población: </b>8600<br><b>Dirección: </b>a 56-120, Cl. 47 #56-12, Barranquilla, Atlántico<br>★★★★✩ (3500)<br><img src=\"https://lh5.googleusercontent.com/p/AF1QipOwJ0HZstBXQPXos2atxNX7HeUUC6PbByu5v9ws=w408-h306-k-no\" width=\"300\" height=\"200\">");

var zoo = L.marker([11.011139000569473, -74.7978993600308], {icon: zoo_icon}).addTo(myMap);
zoo  .bindPopup("<h2>Zoológico de Barranquilla</h2><br>El zoológico de Barranquilla mantiene diversas especies animales para la contemplación del público en Barranquilla, Colombia. Operado por la La Fundación Botánica y Zoológica de Barranquilla, tiene una área de 10 000 m².​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Población: </b>112<br><b>Dirección: </b>Esquina, Cl. 76 con Carrera 68, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53600314<br>★★★★✩ (213)<br><br><img src=\"https://cr00.epimg.net/radio/imagenes/2020/08/18/barranquilla/1597709757_233825_1597709895_noticia_normal_recorte1.jpg\" width=\"300\" height=\"200\">");

var malecon_rio = L.marker([11.02623, -74.79962], {icon: malecon_rio_icon}).addTo(myMap);
malecon_rio  .bindPopup("<h2>Gran Malecon del Rio-Sector Puerta De Oro</h2><br>Conectará dos polos de desarrollo de la ciudad y se construirá una nueva Barranquilla al pie del río. Las inversiones son el catalizador para el desarrollo de las 429hectáreas que traerán crecimiento a la ciudad.​<br><br><b>Horario: </b>06:00 a 22:00<br><b>Población: </b>2000000+<br><b>Dirección: </b>Vía 40 con calle 79b, Barranquilla, Atlántico<br><b>Telefono: </b>(57+5) 3789664<br>★★★★✩ (260)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNK8hUrVqzgS6bqLAl1X_BAbRD5CLB6NGS9d5am=w408-h306-k-no\" width=\"300\" height=\"200\">");

var mirador = L.marker([10.99230, -74.82908], {icon: mirador_icon}).addTo(myMap);
mirador  .bindPopup("<h2>Mirador cerro de Los Nogales</h2><br>El alcalde de Barranquilla, Jaime Pumarejo Heins, el mandatario distrital hizo entrega del Mirador de Los Nogales, un nuevo escenario en el que predominan las zonas verdes y áreas de descanso​. El espacio puesto al servicio de los barranquilleros tiene una extensión de 1.326 metros cuadrados, de los cuales 1.124 son áreas verdes.<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. #84- a, Cra. 42a 1, Barranquilla, Atlántico<br>★★★★✩ (200)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNVO-C0WtNl_u2ZTfIitgXk7ZroN5pGAnVD28AI=w408-h306-k-no\" width=\"300\" height=\"200\">");

var hotel_danncar = L.marker([11.01292, -74.82699], {icon: hotel_danncar_icon}).addTo(myMap);
hotel_danncar  .bindPopup("<h2>Hotel Dann Carlton Barranquilla</h2><br>Este hotel de 4 estrellas, ideal para visitantes, con vistas al mar Caribe, se encuentra a 5 km de las exposiciones de arte del Museo Romántico y a 6 del Teatro Amira de la Rosa.​<br><br><b>Horario: </b>Entrada: 15:00 - Salida: 13:00<br><b>Dirección: </b>Cl. 98 #52B-10, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53677777<br>★★★★✩ (1500)<br><br><img src=\"https://lh4.googleusercontent.com/proxy/Bu0z_m6PnEzlW1ms3JK3POZ0_TUQkCDO9Dbd5IGIFbwBSQEgh4zg446E8RMx-0S2WOpDmiJzL_8WJM_iWz9AQZvISzYj4tyEZ960AYwUaBnqVYOEWcsH0EbZF5tKHNuLvhPnsvOmdppGiUKyHkeWvSoFB3QsyDI=w408-h271-k-no\" width=\"300\" height=\"200\">");

var plaza_paz = L.marker([10.98796, -74.78883], {icon: plaza_paz_icon}).addTo(myMap);
plaza_paz  .bindPopup("<h2>Plaza de la Paz</h2><br>Principal plaza de la ciudad de Barranquilla. Una plaza emblemática y céntrica. Se realizan todo tipo de eventos en ella... Desde manifestaciones o propuestas hasta festivales de música o eventos de carnaval. Tiene un parque lineal a su lado, recientemente remodelado y ampliado, además la Catedral Metropolitana María Reina está en frente y a un lado se encuentra una de las estaciones del sistema integrado de transporte de la ciudad.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. 53 #46-07, Barranquilla, Atlántico<br>★★★★✩ (2000)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipN7kPaCN_n8lMY3LqVktrtrRp8TDnWlOBtrWrK2=w408-h306-k-no\" width=\"300\" height=\"200\">");

var castillo_sal = L.marker([11.01824, -74.94162], {icon: castillo_sal_icon}).addTo(myMap);
castillo_sal  .bindPopup("<h2>Castillo de Salgar</h2><br>Castillo construido por los españoles sobre una colina en 1848, que alberga un restaurante con vistas al mar.​<br><br><b>Horario: </b>08:00 a 18:00<br><b>Población: </b>112<br><b>Dirección: </b>Cl. 9, Salgar, Puerto Colombia, Atlántico<br><b>Telefono: </b>+57 53207300<br>★★★★✩ (4000)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipO1FSzqFbPKIoiwLPmQkE23BmWUiC95thQlaMPH=w426-h240-k-no\" width=\"300\" height=\"200\">");

var museo_car = L.marker([10.98627, -74.77856], {icon: museo_car_icon}).addTo(myMap);
museo_car  .bindPopup("<h2>Museo del Caribe, Gabriel García Márquez</h2><br>Museo amplio con exposiciones sobre la geografía, la cultura y la historia del Caribe colombiano.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Población: </b>2000<br><b>Dirección: </b>Cl. 36 #46 - 66, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53720581<br>★★★★✩ (1700)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNKbUa-pesgCgqPaPDwsMmDpfRMPg4bCFoJ1t-g=w408-h271-k-no\" width=\"300\" height=\"200\">");

var estadio_metro = L.marker([10.92698, -74.80053], {icon: futbol_icon}).addTo(myMap);
estadio_metro .bindPopup("<b>Estadio Metropolitano Roberto Meléndez</b><br>El estadio Metropolitano Roberto Meléndez es un escenario para la práctica del fútbol y el atletismo de Barranquilla, Colombia. Fue inaugurado el 11 de mayo de 1986 sustituyendo al estadio Romelio Martínez.​<br>★★★★✩<br><img src=\"https://lh5.googleusercontent.com/p/AF1QipMxYYO2Q9Xdz5JQU2nwapo-3xwqqunofPJgoLrs=w426-h240-k-no\" width=\"300\" height=\"200\">");

var boca_ceniza = L.marker([11.10631, -74.85472], {icon: camera_icon}).addTo(myMap);
boca_ceniza  .bindPopup("<h2>Bocas de Ceniza</h2><br>Un impresionante lugar con hermosa vista de la desembocadura del río Magdalena, demasiado atractivo el paisaje oceánico y el ambiente tropical del lugar. La cultura pescadora y cangrejos alrededor.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Destapada Bocas De Ceniza, Barranquilla, Magdalena<br><b>Telefono: </b>+57 3002791730<br>★★★★✩ (600)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNUX4usKGa1jivrDw5WAHf-QyOB7PuOAT8W3Asc=w408-h272-k-no\" width=\"300\" height=\"200\">");

var paseo_bol = L.marker([10.98295, -74.77766], {icon: paseo_bol_icon}).addTo(myMap);
paseo_bol  .bindPopup("<h2>Paseo Bolívar</h2><br>El sitio más popular e histórico de Barranquilla, está ubicado en el centro histórico de la ciudad, un lindo lugar  donde en sus alrededores podrás encontrar variedad de productos con unos excelentes precios.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Carrera 44 #34, Barranquilla, Atlántico<br>★★★★✩ (4000)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNCUyTlX5k454yogbyYIMsPZuNBa_FeoVHnPUNA=w408-h306-k-no\" width=\"300\" height=\"200\">");

var museo_moder = L.marker([10.98698, -74.77799], {icon: museo_moder_icon}).addTo(myMap);
museo_moder  .bindPopup("<h2>Museo de Arte Moderno de Barranquilla</h2><br>Tiene un área construida de 3500 metros cuadrados aproximadamente, se constituye como un hito y emblema del conjunto expositivo del Parque Cultural del Caribe y de la transformación urbana y cultural que se viene gestando a lo largo de los años en la ciudad.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Dirección: </b>Cra. 56 No 74-22, Barranquilla, Atlántico<br><b>Telefono: </b>+57 3008516975<br>★★★✩✩ (60)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipOH495iaJX0e9dU7_AwuMZ39F8WQoiTJiK5GOPe=w408-h306-k-no\" width=\"300\" height=\"200\">");

var plaza_santodom = L.marker([10.98643, -74.77802], {icon: plaza_santodom_icon}).addTo(myMap);
plaza_santodom  .bindPopup("<h2>Plaza Mario Santodomingo</h2><br>Parque.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. 36 #4-6 esquina, Barranquilla, Atlántico<br>★★✩✩✩ (30)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipMp6JPuWwuyaAdNpKBhpgtyQo1q6iT0jkgl38oQ=w408-h240-k-no-pi-19.919615-ya128.21544-ro0-fo100\" width=\"300\" height=\"200\">");

var barr_prado = L.marker([10.99748, -74.79807], {icon: barr_prado_icon}).addTo(myMap);
barr_prado  .bindPopup("<h2>Barrio El Prado</h2><br>Uno de los hitos históricos y urbanos de Barranquilla es el Barrio El Prado, cuya importancia radica por ser uno de los legados arquitectónicos del siglo XX que hoy lucha por sobrevivir a la modernidad. En tu recorrido encontrarás enormes casas de estilo europeo que embellecen la zona con sus hermosos jardines.​<br><br><b>Dirección: </b>Barranquilla, Atlántico<br>★★★★✩ (400)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipM-HNLZoNjcQQuzrDcmR0WPKtnIU7ovUo4Y16Xh=w493-h240-k-no\" width=\"300\" height=\"200\">");

var intendencia_fluv = L.marker([10.98572, -74.77585], {icon: intendencia_icon}).addTo(myMap);
intendencia_fluv  .bindPopup("<h2>Intendencia Fluvial Barranquilla</h2><br>Lugar histórico de la ciudad ubicado en el centro histórico y recuperado en el año 2014. Se encuentra ubicado en la Plaza Grande del río de la Magdalena y un brazo de este mismo río llega hasta dicha plaza.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Dirección: </b>Av. del Rio, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53708653<br>★★★★✩ (340)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipMHLqUPftsQ4AC_XoST1srtq5ARx8WIeLB8yojx=w408-h408-k-no\" width=\"300\" height=\"200\">");

var intend_rec = L.marker([10.98732, -74.77698], {icon: intend_rec_icon}).addTo(myMap);
intend_rec  .bindPopup("<h2>Intendencia Fluvial Recuperada</h2><br>Lugar histórico de la ciudad ubicado en el centro histórico y recuperado en el año 2014. Se encuentra ubicado en la Plaza Grande del río de la Magdalena y un brazo de este mismo río llega hasta dicha plaza.​<br><br><b>Horario: </b>09:00 a 16:00<br><b>Dirección: </b>Vía Cuarenta, Barranquilla, Atlántico<br>★★★★✩ (300)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipNZOYcagQYOicQPMMLCHtxlwnt3vMAVoOfz5WVh=w408-h306-k-no\" width=\"300\" height=\"200\">");

var museo_rom = L.marker([10.99493, -74.79428], {icon: museo_rom_icon}).addTo(myMap);
museo_rom  .bindPopup("<h2>Museo Romántico</h2><br>Museo peculiar en una casa de época que alberga obras de arte locales y diversos objetos históricos.<br><br><b>Horario: </b>08:00 a 17:00<br><b>Población: </b>50<br><b>Dirección: </b>Cra. 54 #59-199, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53399000<br>★★★★✩ (600)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipM9CRYzIj6JPVRut6bMMxYYDqZ9oGVicU-kIjvi=w427-h240-k-no\" width=\"300\" height=\"200\">");

var plaza_aduana = L.marker([10.98834, -74.77898], {icon: camera_icon}).addTo(myMap);
plaza_aduana  .bindPopup("<h2>Plaza De La Aduana</h2><br>Uno de los lugares históricos en Barranquilla para visitar es la Plaza de la Aduana, la cual entre sus colores y encantadora arquitectura cautiva a turistas y lugareños. Aquí podrás encontrar el edificio de La Aduana en el que se albergan varios archivos.<br><br><b>Horario: </b>24 horas<br><b>Población: </b>50<br><b>Dirección: </b>Vía Cuarenta, Barranquilla, Atlántico<br><b>Telefono: </b>+57 53792949<br>★★★★✩ (900)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipPvFQARp6A0nirWPsBYqdSB-vwsgk6Lmw4LU7HA=w426-h240-k-no\" width=\"300\" height=\"200\">");

var parque_virgen = L.marker([10.95260, -74.82203], {icon: parque_virgen_icon}).addTo(myMap);
parque_virgen  .bindPopup("<h2>Parque La Virgencita Del Bosque</h2><br>Parque.​<br><br><b>Horario: </b>24 horas<br><b>Dirección: </b>Cl. 76 No 8, Barranquilla, Atlántico<br>★✩✩✩✩ (5)<br><br><img src=\"https://lh5.googleusercontent.com/p/AF1QipOqLnNBCUhQbDhcwsBN6eqlElrSqTKVcbsP2t_R=w426-h240-k-no\" width=\"300\" height=\"200\">");

L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
	attribution: '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

