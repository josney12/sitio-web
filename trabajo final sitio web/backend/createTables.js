const connection = require('./db');

const createTables = () => {
  const usersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const coursesTable = `
    CREATE TABLE IF NOT EXISTS courses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const enrollmentsTable = `
    CREATE TABLE IF NOT EXISTS enrollments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      course_id INT NOT NULL,
      enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (course_id) REFERENCES courses(id)
    )
  `;

  const paymentsTable = `
    CREATE TABLE IF NOT EXISTS payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      course_id INT NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (course_id) REFERENCES courses(id)
    )
  `;

  const reportsTable = `
    CREATE TABLE IF NOT EXISTS reports (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      report_type ENUM('payment', 'enrollment', 'general') NOT NULL,
      details TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  connection.query(usersTable, (err, results) => {
    if (err) throw err;
    console.log('Tabla "users" creada o ya existe.');
  });

  connection.query(coursesTable, (err, results) => {
    if (err) throw err;
    console.log('Tabla "courses" creada o ya existe.');
  });

  connection.query(enrollmentsTable, (err, results) => {
    if (err) throw err;
    console.log('Tabla "enrollments" creada o ya existe.');
  });

  connection.query(paymentsTable, (err, results) => {
    if (err) throw err;
    console.log('Tabla "payments" creada o ya existe.');
  });

  connection.query(reportsTable, (err, results) => {
    if (err) throw err;
    console.log('Tabla "reports" creada o ya existe.');
  });

  connection.end();
};

createTables();
