# Proyecto React

Proyecto desarrollado con React y Vite, que incluye enrutamiento con React Router y validación de código con ESLint.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js) o **yarn**
- Un editor de código (recomendado: [VS Code](https://code.visualstudio.com/))

## Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar las dependencias**

   Abre una terminal en la carpeta del proyecto y ejecuta:

   ```bash
   npm install
   ```

   O si utilizas yarn:

   ```bash
   yarn install
   ```

## Ejecución

### Modo de Desarrollo

Para ejecutar el proyecto en modo de desarrollo con HMR (Hot Module Replacement):

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Esto iniciará un servidor local. La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

### Compilación para Producción

Para crear una compilación optimizada para producción:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Los archivos compilados se guardarán en la carpeta `dist/`.

### Vista Previa de Producción

Para ver cómo se verá la compilación de producción:

```bash
npm run preview
```

O con yarn:

```bash
yarn preview
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run preview` - Vista previa de la compilación de producción
- `npm run lint` - Ejecuta ESLint para verificar la calidad del código

## Estructura del Proyecto

```
Proyecto/
├── src/
│   ├── Components/      # Componentes reutilizables
│   ├── Pages/          # Páginas de la aplicación
│   ├── assets/         # Imágenes y otros recursos
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── App.css         # Estilos globales
├── public/             # Archivos estáticos públicos
├── package.json        # Dependencias del proyecto
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## Dependencias Principales

- **React** - Librería de interfaz de usuario
- **React DOM** - Renderizado de React en el navegador
- **React Router DOM** - Enrutamiento en la aplicación

## Notas Importantes

- Asegúrate de estar en el directorio raíz del proyecto antes de ejecutar los comandos
- En Windows, si tienes problemas, intenta ejecutar el terminal como administrador
- Si los puertos están en uso, Vite automáticamente utilizará el siguiente puerto disponible

## Problemas Comunes

**Puerto ya en uso:** Si el puerto 5173 está en uso, Vite automáticamente usará otro puerto. Revisa la terminal para ver el puerto asignado.

**Dependencias no instalan:** Intenta eliminar `node_modules` y `package-lock.json`, luego ejecuta `npm install` nuevamente.