# 📋 Guía de Ejecución - Semana 2
## Casos de Prueba Funcionales y API

## 🎯 **Objetivos de la Semana 2**
- Crear y ejecutar **31 casos de prueba** en total
- Practicar testing manual tanto de UI como de API
- Documentar resultados de manera profesional
- Identificar bugs y oportunidades de mejora

## 📋 **Archivos de Casos de Prueba**

### **1. functional_tests.md** (13 casos)
Casos de prueba para la interfaz de usuario:
- **Login** (4 casos): credenciales válidas, inválidas, campos vacíos
- **Dashboard** (3 casos): visualización saldo, historial, navegación
- **Transferencias** (5 casos): exitosas, insuficiente, inválidas
- **Logout** (1 caso): cierre de sesión

### **2. api_tests.md** (18 casos)
Casos de prueba para endpoints REST:
- **/api/login** (5 casos): autenticación exitosa y errores
- **/api/balance** (4 casos): consulta saldo con/sin token
- **/api/transfer** (6 casos): transferencias válidas e inválidas
- **/api/transactions** (3 casos): historial de transacciones

## 🚀 **Cómo Ejecutar las Pruebas**

### **Pre-requisitos**
1. **Aplicación ejecutándose:**
   ```bash
   cd project/bank-app
   npm start
   ```
   Verificar: http://localhost:3000

2. **Herramientas para API testing:**
   - **Postman** (recomendado)
   - **Thunder Client** (extensión VS Code)
   - **curl** (línea de comandos)

### **Paso 1: Pruebas Funcionales (UI)**
1. Abrir navegador en http://localhost:3000
2. Seguir cada caso de prueba en `functional_tests.md`
3. Marcar resultado: ✅ PASS / ❌ FAIL / ⏳ PENDING
4. Documentar evidencia (capturas si es necesario)

### **Paso 2: Pruebas API**
1. **Obtener token JWT primero:**
   - Ejecutar API-001 (login exitoso)
   - Copiar el token de la respuesta

2. **Ejecutar casos de API:**
   - Usar el token en headers: `Authorization: Bearer [TOKEN]`
   - Verificar status codes y responses JSON
   - Documentar resultados

### **Paso 3: Documentar Resultados**
1. **Actualizar archivos de casos:**
   - Cambiar `[ ] PENDING` por `[x] PASS` o `[x] FAIL`
   - Llenar campos de "Resultado obtenido"
   - Agregar observaciones

2. **Crear reporte semanal:**
   - Copiar `reports/week1_report.md` como base
   - Actualizar con hallazgos de Semana 2
   - Incluir estadísticas: Pass/Fail/Pending

## 📊 **Métricas Esperadas**
- **Funcionales:** 13/13 casos ejecutados
- **API:** 18/18 casos ejecutados
- **Tasa de éxito:** >80% (algunos casos negativos deben fallar intencionalmente)

## 🐛 **Reportar Bugs**
Si encuentras comportamientos inesperados:
1. Documentar en sección "Observaciones"
2. Incluir pasos para reproducir
3. Sugerir solución si es posible

## 🛠️ **Herramientas Recomendadas**

### **Para UI Testing:**
- Navegador Chrome/Firefox
- DevTools (F12) para inspeccionar elementos

### **Para API Testing:**
- **Postman:** Interfaz gráfica intuitiva
- **curl:** Para testing desde terminal
  ```bash
  curl -X POST http://localhost:3000/api/login \
    -H "Content-Type: application/json" \
    -d '{"username":"user1","password":"pass1"}'
  ```

### **Para Documentación:**
- Editor de texto (VS Code recomendado)
- Markdown para formateo profesional

## ⏰ **Tiempo Estimado**
- **Funcionales:** 45-60 minutos
- **API:** 60-90 minutos
- **Documentación:** 30-45 minutos
- **Total Semana 2:** 2.5-4 horas

## 📝 **Entregables**
- [ ] `functional_tests.md` con resultados actualizados
- [ ] `api_tests.md` con resultados actualizados
- [ ] `reports/week2_report.md` nuevo
- [ ] Capturas de evidencia (opcional)

## 💡 **Tips para QA Junior**
- **Sé sistemático:** Sigue el orden de los casos
- **Documenta todo:** Tanto éxitos como fallos
- **Sé curioso:** Prueba escenarios edge case
- **Comunica claramente:** Describe bugs con precisión
- **Aprende de errores:** Los casos que fallan enseñan más

## 🎓 **Aprendizajes Esperados**
- Estructura profesional de casos de prueba
- Testing manual de UI y API
- Documentación de resultados
- Identificación de bugs
- Mejores prácticas de QA

¡Éxito en tu Semana 2! 🚀

