# Plan de Pruebas - Banco Simulado Web

## Objetivo
Asegurar que la aplicación web del banco simulado funcione correctamente, sea segura y usable.

## Alcance
- Funcionalidades: Login, Dashboard, Transferencias.
- Tipos de pruebas: Funcionales, API, Seguridad, Rendimiento, Accesibilidad.

## Tipos de Pruebas
1. **Funcionales**: Verificar que cada funcionalidad trabaje como esperado.
2. **API**: Probar endpoints con datos válidos e inválidos.
3. **Seguridad**: Verificar protección contra ataques comunes.
4. **Rendimiento**: Medir tiempos de respuesta.
5. **Accesibilidad**: Verificar cumplimiento básico de WCAG.

## Entorno de Pruebas
- Backend: Node.js con Express en localhost:3000.
- Frontend: Navegadores Chrome, Firefox.
- Datos de prueba: Usuarios user1/pass1 (saldo 1000), user2/pass2 (saldo 500).

## Criterios de Entrada
- Código desplegado en entorno de pruebas.
- Documentación disponible.

## Criterios de Salida
- Cobertura de pruebas > 80%.
- Menos de 5 defects críticos abiertos.
- Tiempos de respuesta < 2s.

## Cronograma
- Semana 1: Configuración y pruebas funcionales.
- Semana 2: Pruebas API y seguridad.
- Semana 3: Rendimiento, accesibilidad y reporte.

## Riesgos
- Dependencia de conexión a internet para algunas pruebas.
- Limitaciones de datos simulados.

## Entregables
- Casos de prueba.
- Reporte de defects.
- Informe final de pruebas.
