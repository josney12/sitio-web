// admin.js

document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar datos de localStorage
    function loadData(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Función para guardar datos en localStorage
    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Función para eliminar una entrada
    function deleteEntry(key, id) {
        let data = loadData(key);
        data = data.filter(item => item.id !== id);
        saveData(key, data);
        location.reload(); // Recargar la página para actualizar la tabla
    }

    // Función para llenar una tabla
    function fillTable(tableId, dataKey, columns) {
        const tableBody = document.getElementById(tableId).querySelector('tbody');
        const data = loadData(dataKey);

        data.forEach(item => {
            const row = document.createElement('tr');
            columns.forEach(column => {
                const cell = document.createElement('td');
                cell.textContent = item[column];
                row.appendChild(cell);
            });

            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => deleteEntry(dataKey, item.id));
            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            tableBody.appendChild(row);
        });
    }

    // Llenar tablas con datos de localStorage
    fillTable('users-table', 'usuarios', ['id', 'nombre', 'email']);
    fillTable('payments-table', 'pagos', ['id', 'usuario', 'curso', 'monto', 'fecha']);
    fillTable('pqrs-table', 'pqrs', ['id', 'usuario', 'tipo', 'descripcion']);
    fillTable('job-applications-table', 'solicitudes', ['id', 'nombre', 'email', 'telefono']);
});
