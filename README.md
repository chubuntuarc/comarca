# PropertyPro - Sistema de Gestión de Propiedades

PropertyPro es una aplicación web moderna desarrollada con Next.js para la gestión integral de propiedades de alquiler. Permite a los propietarios y administradores de propiedades gestionar eficientemente sus inmuebles, inquilinos, contratos de arrendamiento y solicitudes de mantenimiento.

## 🚀 Características Principales

### Dashboard Principal
- **Resumen financiero**: Rentas pendientes, pagos recibidos y solicitudes de mantenimiento
- **Actividad reciente**: Seguimiento de eventos importantes como firmas de contratos, pagos y mantenimiento
- **Métricas clave**: Visualización de KPIs importantes del negocio

### Gestión de Propiedades
- **Catálogo de propiedades**: Lista completa con detalles, fotos y estado
- **Estados de ocupación**: Ocupado, Vacante, En mantenimiento
- **Información detallada**: Tipo, habitaciones, baños, renta mensual
- **Búsqueda y filtros**: Herramientas para encontrar propiedades específicas

### Gestión de Inquilinos
- **Base de datos de inquilinos**: Información de contacto y detalles del arrendamiento
- **Estado de pagos**: Seguimiento de pagos al día, vencidos y próximos
- **Historial de pagos**: Registro completo de transacciones
- **Comunicación**: Herramientas para contactar inquilinos

### Contratos de Arrendamiento
- **Gestión de contratos**: Creación, edición y seguimiento de arrendamientos
- **Alertas de vencimiento**: Notificaciones para renovaciones próximas
- **Documentos PDF**: Generación y descarga de contratos
- **Estados**: Activo, Próximo a vencer, Vencido

### Mantenimiento
- **Solicitudes de mantenimiento**: Sistema completo de tickets
- **Prioridades**: Alta, Media, Baja
- **Estados**: Pendiente, En progreso, Completado
- **Asignación de trabajadores**: Gestión de personal de mantenimiento
- **Estimación de costos**: Control presupuestario

### Reportes
- **Reportes financieros**: Estados de ingresos, gastos y rentabilidad
- **Reportes de ocupación**: Análisis de vacantes y tendencias
- **Reportes de inquilinos**: Rotación y historial de pagos
- **Exportación**: Descarga de reportes en diferentes formatos

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Componentes**: Headless UI
- **Utilidades**: clsx, tailwind-merge

## 📦 Instalación

1. **Clonar el repositorio**:
```bash
git clone <repository-url>
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar en modo desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── page.tsx           # Dashboard principal
│   ├── properties/        # Gestión de propiedades
│   ├── tenants/          # Gestión de inquilinos
│   ├── leases/           # Contratos de arrendamiento
│   ├── maintenance/      # Solicitudes de mantenimiento
│   ├── reports/          # Reportes y análisis
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Estilos globales
├── components/           # Componentes reutilizables
│   └── Navigation.tsx    # Componente de navegación
```

## 🎨 Diseño y UX

La aplicación está diseñada con un enfoque en:
- **Interfaz limpia y moderna**: Diseño minimalista y profesional
- **Responsive**: Adaptable a dispositivos móviles y desktop
- **Accesibilidad**: Componentes accesibles y navegación por teclado
- **Consistencia**: Patrones de diseño uniformes en toda la aplicación

## 📱 Funcionalidades por Página

### Dashboard (/)
- Tarjetas de resumen con métricas clave
- Lista de actividad reciente
- Navegación rápida a otras secciones

### Propiedades (/properties)
- Grid de propiedades con imágenes y detalles
- Filtros por estado, tipo y ubicación
- Estadísticas de ocupación

### Inquilinos (/tenants)
- Lista detallada de inquilinos
- Estado de pagos y información de contacto
- Acciones rápidas para comunicación

### Contratos (/leases)
- Gestión completa de arrendamientos
- Alertas de vencimiento
- Descarga de documentos

### Mantenimiento (/maintenance)
- Sistema de tickets con prioridades
- Asignación de trabajadores
- Seguimiento de costos

### Reportes (/reports)
- Categorías de reportes organizadas
- Métricas financieras y operativas
- Historial de reportes generados

## 🔧 Personalización

### Colores y Temas
Los colores principales se pueden modificar en `tailwind.config.js`:
- Azul: Color principal de la marca
- Verde: Estados positivos y éxito
- Amarillo: Advertencias y estados pendientes
- Rojo: Errores y estados críticos

### Datos de Ejemplo
Los datos de ejemplo están definidos en cada página y pueden ser reemplazados por:
- API calls a un backend
- Base de datos
- CMS o sistema de gestión de contenido

## 🚀 Próximos Pasos

Para convertir esto en una aplicación completa de producción:

1. **Backend y Base de Datos**:
   - Implementar API REST o GraphQL
   - Configurar base de datos (PostgreSQL, MongoDB)
   - Sistema de autenticación y autorización

2. **Funcionalidades Avanzadas**:
   - Subida de imágenes para propiedades
   - Sistema de notificaciones en tiempo real
   - Integración con pasarelas de pago
   - Generación automática de documentos PDF

3. **Optimizaciones**:
   - Implementar caché y optimización de rendimiento
   - SEO y meta tags
   - PWA (Progressive Web App)
   - Tests unitarios y de integración

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.


## 📞 Soporte

Para soporte y preguntas:
- Crear un issue en GitHub
- Contactar al equipo de desarrollo

---

**PropertyPro** - Gestión de propiedades simplificada y eficiente.
