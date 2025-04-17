function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  endpoints.addEndpoint("1", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temp. Acum.1 Grupo 1 - Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temp. Acum.1 Grupo 2 - Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Salida Grifos ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temp. Acum.2 Grupo 1 - BCA", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temp. Acum.3 Grupo 1 - BCA", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Temp. Acum.2 Grupo 2 - BCA", endpointType.temperatureSensor);
  endpoints.addEndpoint("9", "Temp. Acum.3 Grupo 2 - BCA", endpointType.temperatureSensor);

  // ESTO SERIA LO QUE SE HA DE AÑADIR EN MELIA ###################################
  s1 = endpoints.addEndpoint("10", "Registro habitación", endpointType.genericSensor);
  s1.variableTypeId = 1371;
  s2 = endpoints.addEndpoint("11", "Habitación registrada", endpointType.genericSensor);
  s2.variableTypeId = 1403;
  s3 = endpoints.addEndpoint("12", "Cloro regitrado", endpointType.genericSensor);
  s3.variableTypeId = 1372;
  s4 = endpoints.addEndpoint("13", "Ph registrado", endpointType.genericSensor);
  s4.variableTypeId = 1403;
  s5 = endpoints.addEndpoint("14", "Turbidez registrada", endpointType.genericSensor);
  s5.variableTypeId = 1370;
  s6 = endpoints.addEndpoint("15", "Temperatura ACS registrada", endpointType.genericSensor);
  s6.variableTypeId = 1375;

  
  /*var s1 = endpoints.addEndpoint("10", "MP B.Retorno ACS", endpointType.genericSensor);
  s1.variableTypeId = 1380;
  var s2 = endpoints.addEndpoint("12", "MP B.Legionella", endpointType.genericSensor); 
  s2.variableTypeId = 1380;
  var s3 = endpoints.addEndpoint("13", "MP B.Primario Solar", endpointType.genericSensor);
  s3.variableTypeId = 1380;
  var s4 = endpoints.addEndpoint("14", "MP B.Primario ACS", endpointType.genericSensor);
  s4.variableTypeId = 1380;
  var s5 = endpoints.addEndpoint("15", "Alarma exceso temp.Solar", endpointType.genericSensor);
  s5.variableTypeId = 1378;
  var s6 = endpoints.addEndpoint("16", "Alarma presion caldera baja", endpointType.genericSensor);
  s6.variableTypeId = 1378;
  var s7 = endpoints.addEndpoint("17", "Alarma fallo caldera", endpointType.genericSensor);
  s7.variableTypeId = 1378;
  var s8 = endpoints.addEndpoint("18", "Alarma fallo termico 1", endpointType.genericSensor);
  s8.variableTypeId = 1378;
  var s9 = endpoints.addEndpoint("19", "Alarma fallo termico 2", endpointType.genericSensor);
  s9.variableTypeId = 1378;
  var s10 = endpoints.addEndpoint("20", "Alarma control cloro alto", endpointType.genericSensor);
  s10.variableTypeId = 1378;
  var s11 = endpoints.addEndpoint("21", "Alarma control cloro bajo", endpointType.genericSensor);
  s11.variableTypeId = 1378;
  var s12 = endpoints.addEndpoint("22", "Alarma disparo seta", endpointType.genericSensor);
  s12.variableTypeId = 1378; 

  endpoints.addEndpoint("23", "Temperatura Agua fría", endpointType.temperatureSensor); //Esta viene de vestuario de futbol
*/
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}