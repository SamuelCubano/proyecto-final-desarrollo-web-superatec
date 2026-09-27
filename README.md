# Astro Resorts — Experiencias Exclusivas

Sitio web estático de reservas de lujo para la marca **Astro Resorts**, orientado a mostrar paquetes turísticos exclusivos, servicios premium y experiencias inolvidables en destinos cuidadosamente seleccionados.

## Características

- Sitio multipágina (SPA-like) con HTML, CSS y JavaScript vanilla.
- Diseño responsive y mobile-first.
- Accesibilidad (ARIA labels, roles, navegación por teclado).
- Animaciones suaves con scroll reveal.
- Catálogo de paquetes con filtros interactivos.
- Formulario de cotización personalizada (modal).
- Formulario de contacto con validación.
- Sección de preguntas frecuentes (FAQ) con `<details>`/`<summary>`.
- Newsletter con validación de correo.
- Slider de testimonios con navegación accesible.
- Enlaces ancla entre vistas.

## Stack Tecnológico

- **HTML5** semántico
- **CSS3** modular por vistas
- **JavaScript** vanilla (sin frameworks ni dependencias)
- **Google Fonts**: Playfair Display + Inter

## Estructura del Proyecto

```
retofinalsuperatec/
├── index.html                 # Redirección a views/index.html
├── views/
│   ├── index.html             # Página principal (hero, destinos, experiencias, testimonios)
│   ├── paquetes.html          # Catálogo de paquetes con filtros
│   ├── servicios.html         # Servicios premium y extras
│   ├── contacto.html          # Información de contacto + formulario
│   ├── localizacion.html      # Mapa y ubicación de destinos
│   ├── sobre-nosotros.html    # Historia y valores de la marca
│   └── terminos-y-condiciones.html
├── css/
│   ├── base.css               # Variables, reset, utilidades y componentes base
│   ├── index.css              # Estilos específicos de la home
│   ├── paquetes.css           # Estilos específicos de paquetes
│   ├── servicios.css          # Estilos específicos de servicios
│   ├── contacto.css           # Estilos específicos de contacto
│   ├── localizacion.css
│   ├── sobre-nosotros.css
│   └── terminos-y-condiciones.css
├── js/
│   ├── index.js               # Datos y lógica de la home
│   ├── paquetes.js            # Lógica de filtros y paquetes
│   ├── servicios.js           # Lógica de servicios y extras
│   ├── contacto.js            # Lógica del formulario de contacto
│   ├── localizacion.js
│   ├── sobre-nosotros.js
│   └── terminos-y-condiciones.js
└── img/
    ├── hero-bg.svg
    ├── destino-1.svg
    ├── destino-2.svg
    ├── destino-3.svg
    ├── destino-4.svg
    ├── packages-hero.svg
    ├── servicios-hero.svg
    ├── contacto-hero.svg
    ├── localizacion-hero.svg
    └── about-hero.svg
```

## Vistas Principales

| Vista | Descripción |
|-------|-------------|
| **Inicio** | Hero, destinos destacados, experiencias, testimonios, newsletter y exploración rápida. |
| **Paquetes** | Catálogo filtrable (Relax / Aventura / Romance), FAQ y modal de cotización. |
| **Servicios** | Servicios premium (spa, observatorio, gastronomía) y extras personalizables. |
| **Contacto** | Canales directos, formulario de mensaje y FAQ rápida. |
| **Localización** | Información geográfica de los destinos. |
| **Sobre Nosotros** | Historia y valores de la marca. |
| **Términos** | Términos y condiciones de uso. |

## Accesibilidad

- Uso de roles ARIA (`banner`, `navigation`, `main`, `contentinfo`, `dialog`).
- Etiquetas semánticas y `aria-label` en navegación, sliders y formularios.
- Navegación por teclado y estados `focus` visibles.
- Atributos `aria-current`, `aria-expanded`, `aria-pressed` y `aria-live`.

## Cómo Visualizar

Abrir `index.html` en un navegador moderno. El sitio redirige automáticamente a `views/index.html`.

```bash
# Opción 1: abrir directamente
start index.html

# Opción 2: servir con un servidor estático simple
npx serve .
# o
python -m http.server 8080
```

## Datos de Contacto

- **Correo**: reservas@beigehotels.com
- **Teléfono**: +1 (555) 021-0288
- **Dirección**: Avenida Principal 127, Centro

## Próximos Pasos / Mejoras Documentadas

- Documentar datos JSON de paquetes, servicios y destinos.
- Documentar API de back-end (si se integra).
- Añadir diagrama de arquitectura.
- Documentar proceso de despliegue.

## Licencia

&copy; 2026 Astro Resorts. Todos los derechos reservados.
