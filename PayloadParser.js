function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.variables) {
        var variables = parsed[0].payload.variables;

        var e1 = device.endpoints.byAddress("1");
        var e2 = device.endpoints.byAddress("2"); 
        var e3 = device.endpoints.byAddress("3"); 
        var e4 = device.endpoints.byAddress("4"); 
        var e5 = device.endpoints.byAddress("5"); 
        var e6 = device.endpoints.byAddress("6"); 
        var e7 = device.endpoints.byAddress("7"); 
        var e8 = device.endpoints.byAddress("8"); 
        var e9 = device.endpoints.byAddress("9"); 
       
        
        env.log(variables[0]);

        if (variables[0] != null && e1 != null) {
            e1.updateTemperatureSensorStatus(variables[0].temperatureCelsius1);
            }
        if (variables[0] != null && e2 != null) {
            e2.updateTemperatureSensorStatus(variables[0].temperatureCelsius2); 
            }
        if (variables[0] != null && e3 != null) {
            e3.updateTemperatureSensorStatus(variables[0].temperatureCelsius3);
            }
        if (variables[0] != null && e4 != null) {
            e4.updateTemperatureSensorStatus(variables[0].temperatureCelsius4); 
            }
        if (variables[0] != null && e5 != null) {
            e5.updateTemperatureSensorStatus(variables[0].temperatureCelsius5);
            }
        if (variables[0] != null && e6 != null) {
            e6.updateTemperatureSensorStatus(variables[0].temperatureCelsius6);
            }
        if (variables[0] != null && e7 != null) {
            e7.updateTemperatureSensorStatus(variables[0].temperatureCelsius7);
            }
        if (variables[0] != null && e8 != null) {
            e8.updateTemperatureSensorStatus(variables[0].temperatureCelsius8);
            }
        if (variables[0] != null && e9 != null) {
            e9.updateTemperatureSensorStatus(variables[0].temperatureCelsius9);
            }
        

    }
      // ESTO SERIA LO QUE SE HA DE AÑADIR EN MELIA ############################################
    var parsed2 = JSON.parse(payload.asString());
    env.log(parsed2);

    if (parsed2[0] && parsed2[0].payloade && parsed2[0].payloade.variables) {
        var variables = parsed2[0].payloade.variables;

        var e10 = device.endpoints.byAddress("10"); 
        var e11 = device.endpoints.byAddress("11"); 
        var e12 = device.endpoints.byAddress("12"); 
        var e13 = device.endpoints.byAddress("13"); 
        var e14 = device.endpoints.byAddress("14"); 
        var e15 = device.endpoints.byAddress("15"); 
        var e16 = device.endpoints.byAddress("16");
    
        if (variables[0] != null && e10 != null) {
            
            var dia = variables[0].dato1e1;
            var mes = variables[0].dato1e2-1;
            var ano = variables[0].dato1e3;
            var hora = variables[0].dato1e4;
            var minuto = variables[0].dato1e5; 


            var date = new Date(ano,mes,dia,hora,minuto).getTime() / 1000;
            
            e10.updateGenericSensorStatus(date);
            env.log(date);
           }
        if (variables[0] != null && e11 != null) {
            e11.updateGenericSensorStatus(variables[0].dato2e);
            //env.log(e11);
            //var t2 = e11.toString();
            }
        if (variables[0] != null && e12 != null) {
            e12.updateGenericSensorStatus(variables[0].dato3e);
            //env.log(e12);
            //var t3 = e12.toString();
            }
        if (variables[0] != null && e13 != null) {
            e13.updateGenericSensorStatus(variables[0].dato4e);
            }
        if (variables[0] != null && e14 != null) {
            e14.updateGenericSensorStatus(variables[0].dato5e);
            }
        if (variables[0] != null && e15 != null) {
            e15.updateGenericSensorStatus(variables[0].dato6e);
            }
       /*if (variables[0] != null && e16 != null) {
            //var texto = t1 //+ t2 + t3
            e16.updateGenericSensorStatus(texto);
            }*/

    }

}


function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}