# Guía de Configuración - Cuida tu comunidad

Esta guía te ayudará a configurar el entorno de desarrollo para ejecutar la aplicación de Cuida tu comunidad. Asegúrate de cumplir con los requisitos mínimos antes de comenzar.

## Requerimientos

Asegúrate de tener instalados lo siguiente en tu sistema:

- PHP 7 o superior
- Composer 2
- SQLite
- Node.js
- npm

## Configuración del Backend

Sigue estos pasos para configurar el backend de la aplicación:

1. Para configurar la base de datos desde una terminal dirígete a la carpeta de laravel y ejecuta los siguientes comandos:
    -php artisan migrate
    -php artisan db:seed --class=StatesTableSeeder
2. Para levantar el servidor ejecute el siguiente comando en la carpeta de laravel:
    -php artisan serve
Asegurese de que este en el puerto 8000(por defecto este es)

## Configuración del Frontend

Sigue estos pasos para configurar el frontend de la aplicación:

1. Desde una terminal dirígete a la carpeta de react y ejecute el siguiente comando:
    -npm install
2. Para levantar el servidor ejecute el siguiente comando en la carpeta de react:
    -npm start
