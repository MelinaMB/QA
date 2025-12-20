# Reporte Semanal - Semana 1
## Fecha: 4 de noviembre de 2025

## 🎯 Objetivos Completados
- [x] Revisión de documentación (PRD, API Docs, Test Plan)
- [x] Configuración del entorno local
- [x] Prueba de la aplicación funcional

## 📚 Lo que aprendí
### Del PRD:
- La aplicación es un banco simulado web con operaciones básicas: login, dashboard, transferencias
- Objetivos: autenticación segura, transferencias entre usuarios, historial de transacciones
- Requisitos no funcionales: seguridad (OWASP Top 10), usabilidad, rendimiento (< 2s)

### De la API:
- Endpoints principales: /api/login, /api/balance, /api/transfer, /api/transactions
- Autenticación basada en tokens
- Respuestas JSON con estructura consistente (success, message, data)

### Del Test Plan:
- Tipos de pruebas: funcionales, API, seguridad, rendimiento, accesibilidad
- Entorno: Node.js + Express, navegadores modernos
- Usuarios de prueba: user1/pass1 ($1000), user2/pass2 ($500)

## 🛠️ Problemas encontrados y soluciones
### Problema con PowerShell:
- **Error:** "No se puede cargar el archivo npm.ps1 porque la ejecución de scripts está deshabilitada"
- **Solución:** La política de ejecución estaba en Restricted. Se intentó cambiar con Set-ExecutionPolicy pero fue invalidada por una política de ámbito superior (Bypass). Finalmente npm funcionó correctamente.
- **Lección:** En entornos corporativos, las políticas de PowerShell pueden estar configuradas a nivel de dominio/empresa.

### Configuración del entorno:
- **Problema inicial:** Comando `&&` no válido en PowerShell (usar `;` en su lugar)
- **Solución:** Ejecutar comandos por separado o usar sintaxis correcta de PowerShell

## 🔍 Exploración de la aplicación
### Funcionalidades probadas:
- ✅ **Login:** Funciona correctamente con credenciales válidas
- ✅ **Dashboard:** Muestra saldo correcto y lista de transacciones
- ✅ **Transferencias:** Permite transferir fondos entre usuarios con validación
- ✅ **Historial:** Registra y muestra transacciones correctamente
- ✅ **Logout:** Cierra sesión y redirige a login

### Observaciones:
- **Interfaz:** Simple y funcional, en español
- **UX:** Navegación clara, mensajes de error en español
- **Funcionalidad:** Todas las operaciones básicas funcionan como esperado
- **Datos iniciales:** Saldos y usuarios de prueba están bien configurados

## 🤔 Preguntas para la próxima reunión
1. ¿Cómo se manejan los errores de red (conexión perdida, timeouts)?
2. ¿Hay planes para agregar más funcionalidades como préstamos o pagos de servicios?
3. ¿Cuál es el proceso para reportar bugs encontrados durante las pruebas?

## 📈 Próximos pasos
- [ ] Crear casos de prueba funcionales detallados
- [ ] Empezar con pruebas de API usando herramientas como Postman
- [ ] Investigar sobre OWASP Top 10 para las pruebas de seguridad

