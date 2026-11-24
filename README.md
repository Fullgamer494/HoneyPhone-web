# HoneyPhone Web

Landing de HoneyPhone construida con Next.js App Router. Es un proyecto separado de Android y de la API.

## Desarrollo local

Requiere Node.js 20.9 o posterior.

```bash
cd HoneyPhone-web
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Producción

Next genera el sitio estático en `out/`; la imagen de producción lo sirve con Nginx en el puerto 80. La guía de publicación en la EC2 está en el archivo raíz del workspace `../operacion/landing-ec2-publicar.md`.
