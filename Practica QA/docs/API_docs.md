# Documentación de API - Banco Simulado Web

Base URL: `http://localhost:3000/api`

## Endpoints

### POST /api/login
- **Descripción**: Autentica al usuario y genera un token.
- **Parámetros de entrada** (JSON):
  - `username`: string
  - `password`: string
- **Respuesta exitosa** (200):
  ```json
  {
    "success": true,
    "token": "token_user1_1234567890",
    "message": "Login exitoso"
  }
  ```
- **Respuesta de error** (401):
  ```json
  {
    "success": false,
    "message": "Credenciales inválidas"
  }
  ```

### GET /api/balance
- **Descripción**: Obtiene el saldo del usuario autenticado.
- **Headers**: `Authorization: token`
- **Respuesta exitosa** (200):
  ```json
  {
    "success": true,
    "balance": 1000
  }
  ```
- **Respuesta de error** (403):
  ```json
  {
    "success": false,
    "message": "Token inválido"
  }
  ```

### POST /api/transfer
- **Descripción**: Realiza una transferencia a otro usuario.
- **Headers**: `Authorization: token`
- **Parámetros de entrada** (JSON):
  - `amount`: number
  - `toUser`: string
- **Respuesta exitosa** (200):
  ```json
  {
    "success": true,
    "message": "Transferencia exitosa",
    "newBalance": 500
  }
  ```
- **Respuesta de error** (400):
  ```json
  {
    "success": false,
    "message": "Fondos insuficientes o usuario destino inválido"
  }
  ```

### GET /api/transactions
- **Descripción**: Obtiene el historial de transacciones del usuario.
- **Headers**: `Authorization: token`
- **Respuesta exitosa** (200):
  ```json
  {
    "success": true,
    "transactions": [
      {
        "from": "user1",
        "to": "user2",
        "amount": 100,
        "date": "2023-10-29T12:00:00.000Z"
      }
    ]
  }
  ```
- **Respuesta de error** (403):
  ```json
  {
    "success": false,
    "message": "Token inválido"
  }
  ```

## Notas
- Todos los endpoints requieren autenticación excepto `/api/login`.
- Usar HTTPS en producción (no implementado aquí por simplicidad).
- Manejo básico de errores; en producción, agregar logging y rate limiting.
