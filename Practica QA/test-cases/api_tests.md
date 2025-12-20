# Casos de Prueba API - Semana 2
## Fecha: [Fecha actual]
## Tester: QA Junior
## Herramienta: Postman / curl / Thunder Client

## 📋 **Casos de Prueba - Endpoint /api/login**

### **API-001: Login exitoso con credenciales válidas**
**Descripción:** Verificar autenticación exitosa con usuario y contraseña correctos

**Método:** POST
**URL:** http://localhost:3000/api/login
**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "username": "user1",
  "password": "pass1"
}
```

**Resultado esperado:**
- ✅ Status Code: 200 OK
- ✅ Response Body:
```json
{
  "success": true,
  "message": "Login exitoso",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "username": "user1",
      "balance": 1000
    }
  }
}
```
- ✅ Token JWT válido incluido

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-002: Login con usuario incorrecto**
**Descripción:** Verificar respuesta cuando el usuario no existe

**Método:** POST
**URL:** http://localhost:3000/api/login
**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "username": "usuario_inexistente",
  "password": "pass1"
}
```

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Usuario o contraseña incorrectos"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-003: Login con contraseña incorrecta**
**Descripción:** Verificar respuesta con contraseña inválida

**Método:** POST
**URL:** http://localhost:3000/api/login
**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "username": "user1",
  "password": "contraseña_incorrecta"
}
```

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Usuario o contraseña incorrectos"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-004: Login con campos faltantes - Sin username**
**Descripción:** Verificar validación cuando falta el campo username

**Método:** POST
**URL:** http://localhost:3000/api/login
**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "password": "pass1"
}
```

**Resultado esperado:**
- ❌ Status Code: 400 Bad Request
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Usuario y contraseña son requeridos"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-005: Login con JSON malformado**
**Descripción:** Verificar manejo de JSON inválido

**Método:** POST
**URL:** http://localhost:3000/api/login
**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "username": "user1",
  "password": "pass1"
  // JSON malformado - falta coma
}
```

**Resultado esperado:**
- ❌ Status Code: 400 Bad Request
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Error en el formato de los datos"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📋 **Casos de Prueba - Endpoint /api/balance**

### **API-006: Obtener saldo con token válido**
**Descripción:** Verificar consulta de saldo con autenticación correcta

**Precondición:** Obtener token JWT del login exitoso (API-001)

**Método:** GET
**URL:** http://localhost:3000/api/balance
**Headers:**
```
Authorization: Bearer [JWT_TOKEN_AQUI]
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ✅ Status Code: 200 OK
- ✅ Response Body:
```json
{
  "success": true,
  "data": {
    "balance": 1000,
    "username": "user1"
  }
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-007: Obtener saldo sin token de autenticación**
**Descripción:** Verificar que requiere autenticación

**Método:** GET
**URL:** http://localhost:3000/api/balance
**Headers:**
```
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Token de autenticación requerido"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-008: Obtener saldo con token inválido**
**Descripción:** Verificar validación de token JWT

**Método:** GET
**URL:** http://localhost:3000/api/balance
**Headers:**
```
Authorization: Bearer token_invalido_12345
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Token inválido"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-009: Obtener saldo con token expirado**
**Descripción:** Verificar manejo de tokens expirados

**Método:** GET
**URL:** http://localhost:3000/api/balance
**Headers:**
```
Authorization: Bearer [TOKEN_EXPIRADO]
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Token expirado"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📋 **Casos de Prueba - Endpoint /api/transfer**

### **API-010: Transferencia exitosa con token válido**
**Descripción:** Verificar transferencia completa entre usuarios

**Precondición:** Token JWT de user1 (saldo inicial: $1000)

**Método:** POST
**URL:** http://localhost:3000/api/transfer
**Headers:**
```
Authorization: Bearer [JWT_TOKEN_USER1]
Content-Type: application/json
```

**Body:**
```json
{
  "toUsername": "user2",
  "amount": 100
}
```

**Resultado esperado:**
- ✅ Status Code: 200 OK
- ✅ Response Body:
```json
{
  "success": true,
  "message": "Transferencia realizada exitosamente",
  "data": {
    "fromUser": "user1",
    "toUser": "user2",
    "amount": 100,
    "newBalance": 900
  }
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-011: Transferencia con saldo insuficiente**
**Descripción:** Verificar validación de saldo disponible

**Precondición:** Token JWT de user1

**Método:** POST
**URL:** http://localhost:3000/api/transfer
**Headers:**
```
Authorization: Bearer [JWT_TOKEN_USER1]
Content-Type: application/json
```

**Body:**
```json
{
  "toUsername": "user2",
  "amount": 2000
}
```

**Resultado esperado:**
- ❌ Status Code: 400 Bad Request
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Saldo insuficiente"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-012: Transferencia a usuario inexistente**
**Descripción:** Verificar validación de usuario destinatario

**Precondición:** Token JWT de user1

**Método:** POST
**URL:** http://localhost:3000/api/transfer
**Headers:**
```
Authorization: Bearer [JWT_TOKEN_USER1]
Content-Type: application/json
```

**Body:**
```json
{
  "toUsername": "usuario_inexistente",
  "amount": 100
}
```

**Resultado esperado:**
- ❌ Status Code: 404 Not Found
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Usuario destinatario no encontrado"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-013: Transferencia a uno mismo**
**Descripción:** Verificar que no permite auto-transferencias

**Precondición:** Token JWT de user1

**Método:** POST
**URL:** http://localhost:3000/api/transfer
**Headers:**
```
Authorization: Bearer [JWT_TOKEN_USER1]
Content-Type: application/json
```

**Body:**
```json
{
  "toUsername": "user1",
  "amount": 100
}
```

**Resultado esperado:**
- ❌ Status Code: 400 Bad Request
- ❌ Response Body:
```json
{
  "success": false,
  "message": "No puedes transferir a tu propia cuenta"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-014: Transferencia con monto cero o negativo**
**Descripción:** Verificar validación de montos

**Precondición:** Token JWT de user1

**Método:** POST
**URL:** http://localhost:3000/api/transfer
**Headers:**
```
Authorization: Bearer [JWT_TOKEN_USER1]
Content-Type: application/json
```

**Body:**
```json
{
  "toUsername": "user2",
  "amount": 0
}
```

**Resultado esperado:**
- ❌ Status Code: 400 Bad Request
- ❌ Response Body:
```json
{
  "success": false,
  "message": "El monto debe ser mayor a cero"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

**Repetir con amount: -100**

---

### **API-015: Transferencia sin autenticación**
**Descripción:** Verificar que requiere token

**Método:** POST
**URL:** http://localhost:3000/api/transfer
**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "toUsername": "user2",
  "amount": 100
}
```

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Token de autenticación requerido"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📋 **Casos de Prueba - Endpoint /api/transactions**

### **API-016: Obtener historial de transacciones**
**Descripción:** Verificar consulta de historial con autenticación

**Precondición:** Token JWT válido

**Método:** GET
**URL:** http://localhost:3000/api/transactions
**Headers:**
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ✅ Status Code: 200 OK
- ✅ Response Body:
```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": "trans_001",
        "fromUser": "user1",
        "toUser": "user2",
        "amount": 100,
        "timestamp": "2025-12-19T10:30:00Z",
        "type": "transfer"
      }
    ]
  }
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-017: Obtener historial sin transacciones**
**Descripción:** Verificar respuesta cuando no hay transacciones

**Precondición:** Token JWT de usuario sin transacciones

**Método:** GET
**URL:** http://localhost:3000/api/transactions
**Headers:**
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ✅ Status Code: 200 OK
- ✅ Response Body:
```json
{
  "success": true,
  "data": {
    "transactions": []
  }
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

### **API-018: Obtener historial sin autenticación**
**Descripción:** Verificar que requiere token

**Método:** GET
**URL:** http://localhost:3000/api/transactions
**Headers:**
```
Content-Type: application/json
```

**Body:** (vacío)

**Resultado esperado:**
- ❌ Status Code: 401 Unauthorized
- ❌ Response Body:
```json
{
  "success": false,
  "message": "Token de autenticación requerido"
}
```

**Resultado obtenido:**
- Status Code: [ ]
- Response: [ ]
- [ ] PENDING

**Estado:** [PENDING/PASS/FAIL]

---

## 📊 **Resumen de Ejecución API**

| Endpoint | Total | Pass | Fail | Pending |
|----------|-------|------|------|---------|
| /api/login | 5 | 0 | 0 | 5 |
| /api/balance | 4 | 0 | 0 | 4 |
| /api/transfer | 6 | 0 | 0 | 6 |
| /api/transactions | 3 | 0 | 0 | 3 |
| **TOTAL** | **18** | **0** | **0** | **18** |

## 🔍 **Observaciones y Comentarios API**
- [Escribe aquí tus observaciones durante la ejecución]
- [Problemas encontrados en la API]
- [Sugerencias de mejora en responses]
- [Consideraciones de seguridad identificadas]

## 📝 **Notas para el reporte semanal**
- [Qué aprendiste sobre pruebas API]
- [Dificultades con autenticación JWT]
- [Herramientas utilizadas (Postman, curl, etc.)]
- [Mejores prácticas de testing API identificadas]
