# Product Requirements Document (PRD) - Banco Simulado Web

## Visión General
El Banco Simulado Web es una aplicación web básica que simula operaciones bancarias simples para fines de demostración y pruebas QA. Permite a los usuarios iniciar sesión, ver su saldo, realizar transferencias y revisar historial de transacciones.

## Objetivos
- Proporcionar una interfaz web segura para operaciones bancarias básicas.
- Garantizar autenticación y autorización segura.
- Permitir transferencias entre usuarios registrados.
- Mostrar saldo y historial de transacciones en tiempo real.

## Funcionalidades Principales
1. **Autenticación**
   - Inicio de sesión con usuario y contraseña.
   - Sesiones basadas en tokens.

2. **Dashboard**
   - Visualización del saldo actual.
   - Lista de transacciones recientes.
   - Enlaces a transferencias y cierre de sesión.

3. **Transferencias**
   - Transferencia de fondos a otros usuarios registrados.
   - Validación de fondos suficientes.
   - Confirmación de transacción.

## Requisitos No Funcionales
- **Seguridad**: Protección contra ataques comunes (OWASP Top 10).
- **Usabilidad**: Interfaz simple y accesible.
- **Rendimiento**: Respuestas rápidas (< 2s).
- **Compatibilidad**: Funciona en navegadores modernos (Chrome, Firefox, Safari).

## Usuarios Objetivo
- Clientes bancarios que necesitan acceso web a operaciones básicas.

## Criterios de Aceptación
- Usuario puede iniciar sesión con credenciales válidas.
- Saldo se actualiza correctamente después de transferencias.
- Transacciones se registran y muestran en el historial.
- Errores se manejan con mensajes claros.

## Riesgos y Mitigaciones
- Riesgo de seguridad: Implementar validaciones básicas y tokens.
- Riesgo de usabilidad: Diseño simple y mensajes claros.

## Alcance Fuera
- Operaciones avanzadas como pagos de facturas.
- Integración con sistemas reales de pago.
