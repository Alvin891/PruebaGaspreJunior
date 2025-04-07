# Prueba Técnica - Backend Junior

Este proyecto es una API REST construida con Node.js, Express y Sequelize, conectada a una base de datos PostgreSQL. Su objetivo es administrar eventos y asistentes, permitiendo su registro y consulta.

##  Tecnologías utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- Dotenv
- Nodemon

##  Instalación y configuración

1. **Clona el repositorio:**

```bash
git clone https://github.com/Alvin891/PruebaGaspreJunior.git
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Configura las variables de entorno:**

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tu_base_de_datos
DB_HOST=localhost
DB_PORT=5432
```

4. **Ejecuta las migraciones:**

```bash
npx sequelize db:migrate
```

5. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

## 🧪 Endpoints disponibles

- `POST   /api/events` → Crear un nuevo evento.
- `POST   /api/attendees` → Crear un nuevo asistente.
- `POST   /api/events/:eventId/attendees` → Registrar un asistente a un evento.
- `GET    /api/events/:eventId/attendees` → Listar asistentes de un evento.
- `GET    /api/attendees/:attendeeId/events` → Listar eventos de un asistente.

## 📁 Estructura del proyecto

```
/src
├── controllers
├── routes
├── services
├── app.js
/models
/config
```

## ✅ Buenas prácticas aplicadas

- Arquitectura modular (MVC)
- Manejo de errores con try/catch
- Uso de variables de entorno con dotenv
- Uso de Sequelize con migraciones y modelos definidos
- Separación clara de responsabilidades
- Estructura limpia para escalabilidad

---

Desarrollado por Alvin para la prueba técnica de Backend Junior.
