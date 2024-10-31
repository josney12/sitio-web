-- Active: 1722704497926@@brxsw7xlmpeukrblp4fm-mysql.services.clever-cloud.com@3306
-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS administration;
USE administration;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Crear tabla de pagos
CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL
);

-- Crear tabla de PQRS
CREATE TABLE IF NOT EXISTS pqrs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    DNI VARCHAR(20) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    mensaje TEXT NOT NULL
);

-- Crear tabla de trabajadores
CREATE TABLE IF NOT EXISTS workers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    DNI VARCHAR(20) NOT NULL,
    cuenta VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    destinatario VARCHAR(100) NOT NULL,
    pedido TEXT NOT NULL
);
