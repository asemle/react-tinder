CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    name Varchar(64),
    age SMALLINT,
    gender varchar(16),
    lat float,
    long float,
    job varchar(48),
    school varchar(48),
    about varchar(500)
);