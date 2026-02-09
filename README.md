# Adiestramiento MDQ - Angular 21

Landing page profesional para servicios de adiestramiento canino en Mar del Plata.

## Stack Tecnológico

- **Angular 21** - Framework principal
- **Standalone Components** - Arquitectura moderna sin módulos
- **TailwindCSS** - Estilos utility-first
- **TypeScript 5.6** - Tipado estático
- **Google Material Icons** - Iconografía

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes standalone
│   │   ├── navbar.component.ts
│   │   ├── header.component.ts
│   │   ├── problems.component.ts
│   │   ├── methodology.component.ts
│   │   ├── bio.component.ts
│   │   ├── testimonials.component.ts
│   │   ├── cta.component.ts
│   │   ├── footer.component.ts
│   │   └── whatsapp-button.component.ts
│   ├── app.component.ts     # Componente raíz
│   ├── app.config.ts        # Configuración de la app
│   └── app.routes.ts        # Definición de rutas
├── index.html               # HTML principal
├── main.ts                  # Punto de entrada
└── styles.scss             # Estilos globales
```

## Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm start
# La app estará en http://localhost:4200

# Producción
npm run build
# Los archivos estarán en dist/adiestramiento-mdq
```

## Características

✅ **Componentes standalone** - Sin NgModules, arquitectura moderna
✅ **Signals** - Sistema de reactividad de Angular 21
✅ **SSR Ready** - Preparado para Server-Side Rendering
✅ **Responsive** - Diseño adaptable mobile-first
✅ **Dark Mode** - Soporte nativo con Tailwind
✅ **SEO Optimizado** - Meta tags y estructura semántica
✅ **Performance** - Lazy loading y optimización de assets

## Componentes

### NavbarComponent
Navegación sticky con enlaces a secciones y botón de WhatsApp.

### HeaderComponent
Hero section con imagen de fondo, título principal y CTAs.

### ProblemsComponent
Grid de problemas comunes con iconos Material.

### MethodologyComponent
Proceso de trabajo en 3 pasos con timeline visual.

### BioComponent
Sección "Sobre mí" con imagen y lista de beneficios.

### TestimonialsComponent
Testimonios de clientes en grid responsivo.

### CtaComponent
Call-to-action final con patrón de fondo.

### FooterComponent
Pie de página con información de contacto y redes.

### WhatsappButtonComponent
Botón flotante de WhatsApp con hover animado.

## Personalización

### Colores (en index.html)
```javascript
colors: {
  "primary": "#17cf26",      // Verde principal
  "background-light": "#f6f8f6",
  "background-dark": "#112112",
  "earth-100": "#f0f2ef",
  "earth-200": "#e2e6e1",
  "earth-800": "#2d382e",
}
```

### WhatsApp
Actualizar el número en todos los componentes:
```typescript
href="https://wa.me/5492230000000"
```

## Deployment

### Netlify
```bash
npm run build
# Subir carpeta dist/adiestramiento-mdq
```

### Vercel
```bash
vercel --prod
```

### Firebase Hosting
```bash
ng build --configuration production
firebase deploy
```

## Próximos pasos recomendados

1. Configurar Angular Universal para SSR
2. Implementar lazy loading de imágenes
3. Agregar animaciones con @angular/animations
4. Integrar Google Analytics
5. Agregar formulario de contacto
6. Implementar i18n para múltiples idiomas

## Licencia

Proyecto propietario - Adiestramiento MDQ 2023
