# Casos de Prueba Funcionales - Semana 2
## Fecha: [Fecha actual]
## Tester: QA Junior

#Epica Loging
## 📋 **Casos de Prueba - Login**

### **FT-001: Login con credenciales válidas**
**Descripción:** Verificar que el usuario puede iniciar sesión correctamente con credenciales válidas

**User Stories:**
Como usuario quiero poder ingresar mi usuario y contraseña e iniciar sesion

**Aceptacion**
El sistema debera poder iniciar sesion con el usuario y contraseña correcto

**Funcional**
El sistema podra hacer el inicio de sesion

**Error Handillng**
Si el sistema no puede iniciar sesion debera mostrar un mensaje de error

**Criterios de aceptacion**
Poder ingresr los valores requeridos de las credenciales
Poder realizar el loging

**Clasificacion de prueba**
-[Prueba por Objetivo: Prueba funcional]
**Tipo de prueba** [Prueba Por Nivel: Pruebas unitarias, Pruebas de Integracion, Prueba de aceptacion, Pruebas de Sistema; 
Prueba por Objetivo: Pruebas Funcionales, Pruebas no Funcionales, Preubas de Rendimiento;
Prueba por Enfoque: Pruebas exploratorias, Pruebas basadas en casos de uso, Pruebas combinadas/ de pares]

**Prioridad**
-[Alta]
**Prioridades**:[Baja, Media, Alta]

**Precondiciones:**
- Aplicación ejecutándose en http://localhost:3000
- Usuario registrado en el sistema

**Pasos de prueba:**
1. Abrir navegador y navegar a http://localhost:3000
2. Ingresar username: `user1`
3. Ingresar password: `pass1`
4. Hacer clic en botón "Login"

**Resultado esperado:**
- ✅ Usuario redirigido al dashboard
- ✅ Dashboard muestra saldo correcto ($1000)
- ✅ Nombre de usuario visible en la interfaz

**Resultado obtenido:**
- [Pass] 

**Estado:** [PENDING/PASS/FAIL]


---

### **FT-002: Login con credenciales inválidas - Usuario incorrecto**
**Descripción:** Verificar que el sistema rechaza login con usuario no existente

**User Stories:**
Como usuario quiero poder ingresar mi usuario  si no es valido no ingresar

**Aceptacion**
El sistema debera poder evitar iniciar sesoin si no se ingresa el usuario correcto

**Funcional**
El sistema no podra iniciar session al ingresar el usuario incorrecto

**Error Handillng**
Si el sistema no puede iniciar sesion debera mostrar un mensaje de error diciendo que el usuario es invalido

**Criterios de aceptacion**
NO ingresar la sesion cuando hay credenciales invalidas

**Clasificacion de prueba**
-[Prueba por Objetivo: Prueba funcional]

**Tipo de prueba** [Prueba Por Nivel: Pruebas unitarias, Pruebas de Integracion, Prueba de aceptacion, Pruebas de Sistema; 
Prueba por Objetivo: Pruebas Funcionales, Pruebas no Funcionales, Preubas de Rendimiento;
Prueba por Enfoque: Pruebas exploratorias, Pruebas basadas en casos de uso, Pruebas combinadas/ de pares]

**Prioridad**
-[Alta]
**Prioridades**:[Baja, Media, Alta]

**Precondiciones:**
- Aplicación ejecutándose en http://localhost:3000

**Pasos de prueba:**
1. Navegar a http://localhost:3000
2. Ingresar username: `usuario_inexistente`
3. Ingresar password: `pass1`
4. Hacer clic en botón "Login"

**Resultado esperado:**
- ❌ Mensaje de error: "Usuario o contraseña incorrectos"
- ❌ Usuario permanece en página de login
- ❌ No se redirige al dashboard

**Resultado obtenido:**
- [Pass] 

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-003: Login con credenciales inválidas - Contraseña incorrecta**
**Descripción:** Verificar que el sistema rechaza login con contraseña incorrecta

**User Stories:**
Como usuario quiero poder ingresar mi contraseña e iniciar sesion

**Aceptacion**
El sistema no debera poder iniciar sesion con contraseña incorrecta

**Funcional**
El sistema no ingresa ala sesion por contraseña incorrecta

**Error Handillng**
Si el sistema no puede iniciar sesion debera mostrar un mensaje de error

**Criterios de aceptacion**
No ingresar la sesion por credenciales invalidas

**Clasificacion de prueba**
-[Prueba por Objetivo: Prueba Funcional]
**Tipo de prueba** [Prueba Por Nivel: Pruebas unitarias, Pruebas de Integracion, Prueba de aceptacion, Pruebas de Sistema; 
Prueba por Objetivo: Pruebas Funcionales, Pruebas no Funcionales, Preubas de Rendimiento;
Prueba por Enfoque: Pruebas exploratorias, Pruebas basadas en casos de uso, Pruebas combinadas/ de pares]

**Prioridad**
-[Alta]
**Prioridades**:[Baja, Media, Alta]

**Precondiciones:**
- Aplicación ejecutándose en http://localhost:3000

**Pasos de prueba:**
1. Navegar a http://localhost:3000
2. Ingresar username: `user1`
3. Ingresar password: `contraseña_incorrecta`
4. Hacer clic en botón "Login"

**Resultado esperado:**
- ❌ Mensaje de error: "Usuario o contraseña incorrectos"
- ❌ Usuario permanece en página de login

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-004: Login con campos vacíos**
**Descripción:** Verificar validación cuando no se ingresa ningún dato

**User Stories:**
Como usuario quiero poder ingresar mi usuario y contraseña y si hay campos vacios que me lo diga el sistema

**Aceptacion**
El sistema no debera poder iniciar sesion si alguno de los campos esta vacio

**Funcional**
El sistema no podra hacer el inicio de sesion

**Error Handillng**
Si el sistema no puede iniciar sesion debera mostrar un mensaje de error

**Criterios de aceptacion**
No poder ingresar al login si hay credenciales vacias

**Clasificacion de prueba**
-[Prueba por Objetivos: Prueba funcional]
**Tipo de prueba** [Prueba Por Nivel: Pruebas unitarias, Pruebas de Integracion, Prueba de aceptacion, Pruebas de Sistema; 
Prueba por Objetivo: Pruebas Funcionales, Pruebas no Funcionales, Preubas de Rendimiento;
Prueba por Enfoque: Pruebas exploratorias, Pruebas basadas en casos de uso, Pruebas combinadas/ de pares]

**Prioridad**
-[Alta]
**Prioridades**:[Baja, Media, Alta]

**Precondiciones:**
- Aplicación ejecutándose en http://localhost:3000

**Pasos de prueba:**
1. Navegar a http://localhost:3000
2. Dejar campos username y password vacíos
3. Hacer clic en botón "Login"

**Resultado esperado:**
- ❌ Mensaje de error solicitando campos obligatorios
- ❌ Usuario permanece en página de login

**Resultado obtenido:**
- [Pass] 

**Estado:** [PENDING/PASS/FAIL]

---
##Epica **Dashboard**
## 📋 **Casos de Prueba - Dashboard**

### **FT-005: Visualización correcta del saldo**
**Descripción:** Verificar que el dashboard muestra el saldo correcto del usuario

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Login exitoso con user1/pass1
2. Verificar saldo mostrado en dashboard

**Resultado esperado:**
- ✅ Saldo mostrado: $1000
- ✅ Formato correcto (con símbolo $)

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-006: Visualización del historial de transacciones inicial**
**Descripción:** Verificar que el historial está vacío inicialmente

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Login exitoso con user1/pass1
2. Revisar sección de transacciones recientes

**Resultado esperado:**
- ✅ Historial vacío o mensaje "No hay transacciones recientes"
- ✅ Interfaz limpia y legible

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-007: Navegación a página de transferencias**
**Descripción:** Verificar que el botón de transferencias funciona correctamente

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Desde dashboard, hacer clic en "Hacer Transferencia"

**Resultado esperado:**
- ✅ Redirección a página de transferencias
- ✅ Campos de formulario visibles y funcionales

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📋 **Casos de Prueba - Transferencias**

### **FT-008: Transferencia exitosa entre usuarios**
**Descripción:** Verificar transferencia completa entre dos usuarios válidos

**Precondiciones:**
- Usuario logueado como `user1` (saldo $1000)
- Usuario destino `user2` existe

**Pasos de prueba:**
1. Desde dashboard user1, hacer clic "Hacer Transferencia"
2. Ingresar destinatario: `user2`
3. Ingresar monto: `100`
4. Hacer clic en "Transferir"

**Resultado esperado:**
- ✅ Mensaje de éxito: "Transferencia realizada exitosamente"
- ✅ Redirección al dashboard
- ✅ Saldo actualizado: $900
- ✅ Transacción aparece en historial: "Transferencia a user2: $100"

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-009: Transferencia con monto insuficiente**
**Descripción:** Verificar que no permite transferencias mayores al saldo disponible

**Precondiciones:**
- Usuario logueado como `user1` (saldo $1000)

**Pasos de prueba:**
1. Hacer clic "Hacer Transferencia"
2. Ingresar destinatario: `user2`
3. Ingresar monto: `1500` (mayor al saldo)
4. Hacer clic en "Transferir"

**Resultado esperado:**
- ❌ Mensaje de error: "Saldo insuficiente"
- ❌ Transferencia no se realiza
- ❌ Saldo permanece $1000

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-010: Transferencia a usuario inexistente**
**Descripción:** Verificar validación cuando el destinatario no existe

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Hacer clic "Hacer Transferencia"
2. Ingresar destinatario: `usuario_inexistente`
3. Ingresar monto: `100`
4. Hacer clic en "Transferir"

**Resultado esperado:**
- ❌ Mensaje de error: "Usuario destinatario no encontrado"
- ❌ Transferencia no se realiza

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-011: Transferencia con monto cero o negativo**
**Descripción:** Verificar validación de montos inválidos

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Hacer clic "Hacer Transferencia"
2. Ingresar destinatario: `user2`
3. Ingresar monto: `0`
4. Hacer clic en "Transferir"

**Resultado esperado:**
- ❌ Mensaje de error: "Monto debe ser mayor a cero"
- ❌ Transferencia no se realiza

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

**Repetir con monto negativo (-100)**

---

### **FT-012: Transferencia a uno mismo**
**Descripción:** Verificar que no permite transferencias al mismo usuario

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Hacer clic "Hacer Transferencia"
2. Ingresar destinatario: `user1` (mismo usuario)
3. Ingresar monto: `100`
4. Hacer clic en "Transferir"

**Resultado esperado:**
- ❌ Mensaje de error: "No puedes transferir a tu propia cuenta"
- ❌ Transferencia no se realiza

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📋 **Casos de Prueba - Logout**

### **FT-013: Logout exitoso**
**Descripción:** Verificar que el logout funciona correctamente

**Precondiciones:**
- Usuario logueado

**Pasos de prueba:**
1. Desde dashboard, hacer clic en "Cerrar Sesión"

**Resultado esperado:**
- ✅ Redirección a página de login
- ✅ Sesión terminada
- ✅ No se puede acceder al dashboard sin login

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-014: Actualización de saldo y historial después de transferencia**
**Descripción:** Verificar que dashboard refleja cambios post-transferencia

**Precondiciones:**
- Usuario logueado como `user1` (saldo inicial $1000)
- Transferencia reciente realizada

**Pasos de prueba:**
1. Realizar transferencia exitosa de $100 a user2
2. Volver al dashboard
3. Verificar saldo mostrado
4. Verificar historial de transacciones

**Resultado esperado:**
- ✅ Saldo actualizado: $900
- ✅ Transacción visible en historial con detalles correctos
- ✅ Fecha/hora de transacción presente

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **FT-015: Logout y protección de sesión**
**Descripción:** Verificar que logout protege la sesión adecuadamente

**Precondiciones:**
- Usuario logueado como `user1`

**Pasos de prueba:**
1. Hacer logout
2. Intentar navegar directamente a /dashboard.html
3. Verificar redirección automática

**Resultado esperado:**
- ✅ Redirección automática a login
- ✅ No se muestra información del usuario anterior
- ✅ Sesión completamente terminada

**Resultado obtenido:**
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📊 **Resumen de Ejecución**

| Categoría | Total | Pass | Fail | Pending |
|-----------|-------|------|------|---------|
| Login | 4 | 0 | 0 | 4 |
| Dashboard | 4 | 0 | 0 | 4 |
| Transferencias | 5 | 0 | 0 | 5 |
| Logout | 2 | 0 | 0 | 2 |
| **TOTAL** | **15** | **0** | **0** | **15** |

## 🔍 **Observaciones y Comentarios**
- [Escribe aquí tus observaciones durante la ejecución]
- [Problemas encontrados]
- [Sugerencias de mejora]

## 📝 **Notas para el reporte semanal**
- [Qué aprendiste sobre casos de prueba funcionales]
- [Dificultades encontradas]
- [Mejores prácticas identificadas]
