# Proyecto Meli-test

## Índice

1. [Descripción](#descripción)
2. [Tecnologías](#tecnologías)
3. [Arquitectura](#arquitectura)
4. [Instalación](#instalación)
5. [Uso](#uso)

## Descripción

Este proyecto es una aplicación que con la utilizacion de herramientas tanto de frontend como backend logramos consultar endpoint algunos funcionales de mercado libre y mostrar su contenido segun lineamientos especificos.

La aplicacion consta de 3 pantallas:

- _home_ "/"
- _ListItems_ "/items"
- _Preview_ "/items/:id/descripcion"

## Tecnologías

Las bases de Las tecnologías utilizadas en este proyecto:
FRONT > react con typescript
BACKEND > node con typescript y express.

## Arquitectura

<ul>
    <li>
     <strong>
       meli-test-bff
      </strong>
   <ul>
  <li>
    <strong>
       environments: 
    </strong>
       archivos de entorno
  </li>
  </ul>
    <ul>
      <li>
        <strong>
          src
        </strong>
          <ul>
            <li>
             <strong>
                modules
              </strong>
                  servicios bff
              <ul>
             </ul>
            </li>
            <li>
              - app.ts
            </li>
            <li>
              - index.ts
            </li>
          </ul>
      </li>
    </ul>
  </li>

  <li>
  <strong>
    meli-test-front
  </strong>
  <ul>
  <li>
    <strong>
       environments: 
    </strong>
       archivos de entorno
  </li>

  <li>
    <strong>
       public: 
    </strong>
  </li>

  <li>
    <strong>
       src: 
    </strong>
    <ul>
      <li>
        <strong>
          componets
          </strong>
          Componentes reutilizables e imagenes.
      </li>
      <li>
        <strong>
          constants
          </strong>
          Constantes de estilos reutilibles.
      </li>
      <li>
        <strong>
          helpers
        </strong>
         Definimos y tipamos actions para el store
      </li>
      <li>
        <strong>
          pages
          </strong>
          Todas las pages que se van a utilizar en la navegacion
      </li>
      <li>
        <strong>
          services
        </strong>
        servicios para ser consumidos en el store
      </li>
      <li>
        <strong>
          store
        </strong>
      </li>
      <li>
        <strong>
          types
        </strong>
          typados, modelos
      </li>
    </ul>
  </li>

  </ul>
  </li>
</ul>

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

<ol style="
list-style-type: upper-roman; 
border: 1px solid red;
border-radius: 5px;
 ">
  <li style="margin: 15px 0px;">
    Clona el repositorio desde GitHub: `git clone https://github.com/angelliambo/proyect.git`
  </li>

  <li style="margin-bottom: 10px;">
    Desde la terminal navega al backend del proyecto: `cd proyect/meli-test-bff`
  </li>

  <li style="margin-bottom: 10px;">
    Instala las dependencias: `yarn`
  </li>

  <li style="margin-bottom: 10px;">
    Desde la terminal navega al frontend del proyecto: `cd proyect/meli-test-front`
  </li>

  <li style="margin-bottom: 10px;">
    Instala las dependencias: `yarn`
  </li>

  <li style="margin-bottom: 10px;">
    Ejecuta BFF: 
    <br />
    - BFF en modo desarrollo desde una terminal navega al bff (paso: 2), y ejecuta el comando <strong>`yarn start:dev`</strong>
  </li>

  <li style="margin: 15px 0px;">
    Ejecuta FRONT: 
    <br />
    - Desde otra terminal navega al front (paso: 4), y ejecuta el comando <strong>`yarn start`</strong>
  </li>
</ol>

## Uso

Una vez que la aplicación esté en funcionamiento, puedes acceder a ella a través de tu navegador web en la siguiente dirección: `http://localhost:3000`, realiza una busqueda.
