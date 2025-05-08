# 🤝 TechSafeSpace - Comunidad Tech para Mujeres

**TechSafeSpace** es una iniciativa que nace de la necesidad de crear un espacio seguro, accesible y sororo para mujeres y disidencias en el sector tecnológico.

Este proyecto no es solo una plataforma técnica, sino una declaración de intenciones: visibilizar, acompañar y empoderar a quienes tradicionalmente han sido infrarrepresentadas en el mundo digital. Desde el código hasta la comunidad, todo está pensado para fomentar la inclusión y el apoyo mutuo.

---
---

## 👩‍💻 Nuestro equipo

![Equipo TechSafeSpace](.https://videos.openai.com/vg-assets/assets%2Ftask_01jtpamehxfkabncc953ejex0x%2F1746653641_img_0.webp?st=2025-05-07T20%3A05%3A00Z&se=2025-05-13T21%3A05%3A00Z&sks=b&skt=2025-05-07T20%3A05%3A00Z&ske=2025-05-13T21%3A05%3A00Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=R3i4Y0vNiK8tsG1fnPJfSzUDWTY3kIZw30dl%2BV5m6QM%3D&az=oaivgprodscus)

| Nombre           | GitHub                                      |                                     
|------------------|---------------------------------------------|
| Mariona          | [@cuyass](https://github.com/cuyass)    | 
| Larissa          | [@saudlari](https://github.com/saudlari)      | 
| Milena           | [@MilenaOcoro](https://github.com/MilenaOcoro)      | 
| Einar            | [@einartech](https://github.com/einartech)      | 
| Alba             | [@rieradipe](https://github.com/rieradipe)      | 

---

## Enlace al backend

[Backend](https://github.com/codekraftians/backend)

---

## 🚀 Tecnologías utilizadas

- Javascript ES6
- React 19
- Vite 6.3.1
- TailwindCSS 4.1.4
- DaisyUI
- Axios
- Web Components (`calendar-ctx`)

---

## 🛠️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/codekraftians/front_end.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

El proyecto se ejecutará en: [http://localhost:5173](http://localhost:5173)

---

## 🔌 Conexión con backend

Asegúrate de que el backend esté corriendo en `http://localhost:8080`.

Ejemplo de petición `POST` para crear un usuario:

```js
axios.post('http://localhost:8080/api/v1/users', {
  name: "AdaLovelace",
  email: "ada@lovelace.dev",
  password: "SecurePass1!",
  userImageUrl: "https://i.pravatar.cc/150?img=3"
});
```

---

## 📁 Estructura de carpetas relevante

```
src/
│
├── components/
│   ├── searchFilter/
│   │   ├── Calendario.jsx
│   │   ├── PickDay.jsx
│   │   └── SelectCategory.jsx
│   ├── buttons/
│   │   └── ButtonApplyFilter.jsx
│
├── setupCally.js
├── main.jsx
├── App.jsx
└── index.css
```

---

## 🧪 Pruebas y comprobaciones

- El componente `calendar-ctx` se registra una única vez en `setupCally.js`
- El calendario funciona sin errores de doble registro
- Los datos de usuario pueden ser enviados correctamente al backend

---

## 👩‍💻 Autoría y contribución

Proyecto realizado por el equipo de **Mujeres y disidentes - CodeCraft F5**  
Sitio web: [FactoríaF5](https://factoriaf5.org/)

---

## 🌍 Impacto social y visión a futuro

TeachSafeSpace busca ir más allá del desarrollo de software. Este proyecto representa un punto de encuentro para mujeres que desean formarse, colaborar y crecer juntas en el mundo tecnológico.

Nuestro objetivo es:

- Reducir la brecha de género en el sector tech
- Fomentar el aprendizaje colaborativo desde un enfoque empático
- Ofrecer recursos, acompañamiento y visibilidad a nuevas voces en tecnología

Este es solo el comienzo. Creemos en un futuro donde todas tengamos un lugar seguro y reconocido en el universo digital.
