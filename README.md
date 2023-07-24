# Teamknowlogy-Challenge
API REST para detección de mutaciones de ADN

Esta API REST, desarrollada en Node.js con Express, permite analizar una secuencia de ADN y detectar mutaciones. Se basa en la identificación de secuencias de cuatro letras (A, T, C y G) que se repiten en la matriz de ADN, indicando la presencia de una mutación.

# Instalación
Clona este repositorio en tu máquina local o descarga el código fuente desde: https://github.com/AgustinPulido/Teamknowlogy-Challenge.git.

Instala las dependencias del proyecto ejecutando:

npm install

# Configuración
La API no requiere configuración adicional para su funcionamiento local. Sin embargo, en un entorno de producción, es posible que debas ajustar ciertos parámetros según tus necesidades.

# Ejecución
Una vez que hayas completado la instalación y configuración, puedes ejecutar la API en tu máquina local. Para hacerlo, sigue los siguientes pasos:

Abre una terminal y navega al directorio del proyecto.

Ejecuta el siguiente comando para iniciar la API:

npm start

La API ahora está en funcionamiento y escuchando en el puerto especificado (por defecto, en el puerto 3000). Puedes acceder a ella a través de herramientas como Postman.

El servicio "/mutation/" permite enviar por un POST un JSON con el formato:

{
  “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}

# Google App Engine

La API REST esta desplegada en un cloud computing libre, la URL de la misma es: https://teamknowlogy-393817.uc.r.appspot.com/mutation/
