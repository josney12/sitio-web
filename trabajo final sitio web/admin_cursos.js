// admin_cursos.js

document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar datos de localStorage
    function loadData(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Función para guardar datos en localStorage
    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Función para eliminar un curso
    function deleteCourse(name) {
        let courses = loadData('cursos');
        courses = courses.filter(course => course.name !== name);
        saveData('cursos', courses);
        location.reload(); // Recargar la página para actualizar la tabla
    }

    // Función para llenar la tabla de cursos
    function fillCoursesTable() {
        const tableBody = document.getElementById('courses-table').querySelector('tbody');
        const courses = loadData('cursos');

        courses.forEach(course => {
            const row = document.createElement('tr');
            Object.keys(course).forEach(key => {
                const cell = document.createElement('td');
                cell.textContent = course[key];
                row.appendChild(cell);
            });

            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => deleteCourse(course.name));
            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            tableBody.appendChild(row);
        });
    }

    // Función para añadir un nuevo curso
    function addCourse(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const duration = document.getElementById('duration').value;
        const price = document.getElementById('price').value;

        const courses = loadData('cursos');
        courses.push({ name, description, duration, price });
        saveData('cursos', courses);
        location.reload(); // Recargar la página para actualizar la tabla
    }

    // Añadir evento al formulario de añadir curso
    document.getElementById('add-course-form').addEventListener('submit', addCourse);

    // Llenar tabla de cursos al cargar la página
    fillCoursesTable();
});
