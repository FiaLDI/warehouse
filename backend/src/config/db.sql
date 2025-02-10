CREATE TABLE IF NOT EXISTS  users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
);

CREATE TABLE IF NOT EXISTS usertoken (
    token_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
	token TEXT,
	startIn TEXT,
	expiresIn TEXT
)

CREATE TABLE IF NOT EXISTS personalData (
    user_id INT REFERENCES users(user_id),
	email TEXT NOT NULL,
	username TEXT NOT NULL,
	phoneNumber TEXT NOT NULL,
	firstName TEXT,
	secondName Text,
	age INT,
	gender VARCHAR(100) NOT NULL,
	aboutUser TEXT
);
