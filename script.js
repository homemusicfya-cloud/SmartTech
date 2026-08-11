```javascript
function consultarOrden() {

    const folio = document
        .getElementById("folio")
        .value
        .trim()
        .toUpperCase();

    const mensaje = document.getElementById("mensaje");
    const resultado = document.getElementById("resultado");

    mensaje.textContent = "";
    resultado.classList.add("oculto");

    if (folio === "") {
        mensaje.textContent = "Ingresa tu número de folio.";
        return;
    }

    /*
        DATOS DE PRUEBA

        Más adelante estos datos vendrán
        desde nuestra API segura.
    */

    if (folio === "ST-000123") {

        document.getElementById("folioResultado").textContent = "ST-000123";
        document.getElementById("cliente").textContent = "Cliente de prueba";
        document.getElementById("equipo").textContent = "iPhone 12 Pro Max";
        document.getElementById("falla").textContent = "No enciende";
        document.getElementById("diagnostico").textContent =
            "Diagnóstico pendiente";

        document.getElementById("costo").textContent = "$1,200.00";
        document.getElementById("anticipo").textContent = "$500.00";
        document.getElementById("saldo").textContent = "$700.00";

        document.getElementById("fechaIngreso").textContent =
            "11/08/2026";

        document.getElementById("fechaEntrega").textContent =
            "Pendiente";

        document.getElementById("estado").textContent =
            "En proceso";

        resultado.classList.remove("oculto");

    } else {

        mensaje.textContent =
            "No encontramos una orden con ese folio.";
    }
}
```
