drop table users;

create table if not exists users (
    id integer primary key autoincrement,
    name text check(length(name) <= 100) not null,
    login text unique check(length(login) <= 100) not null,
    password text check(length(password) <= 100) not null,
    email text check(length(email) <= 150) not null,
    phone text check(length(phone) <= 15) not null,
    cpf text unique check(length(cpf) <= 15) not null,
    age timestamp not null,
    mather text check(length(mather) <= 100) not null,
    status text check(status in ("block", "inactive", "active")) default "active",
    dateInsert timestamp default CURRENT_TIMESTAMP,
    dateUpdate timestamp default CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX if not exists idx_users_id ON users (id);
CREATE UNIQUE INDEX if not exists idx_users_name ON users (name);
CREATE UNIQUE INDEX if not exists idx_users_login ON users (login);
CREATE INDEX if not exists idx_users_password ON users (password);
CREATE UNIQUE INDEX if not exists idx_users_cpf ON users (cpf);

insert into users
(name, login, password, email, phone, cpf, age, mather)
values
("Cássio", "cassio", "*crip:123456", "cassio@test.com", "81900000001", "10020030040", "1984-09-08", "Catia"),
("Maria", "maria", "*crip:123456", "maria@test.com", "81900000002", "10020030041", "1990-06-01", "Madalena"),
("Ana", "ana", "*crip:123456", "ana@test.com", "81900000003", "10020030043", "2000-01-30", "Rejane"),
("Hadassa", "hadassa", "*crip:123456", "hadassa@test.com", "81900000004", "10020030044", "2005-06-25", "Raiany");

drop table login_token;

create table if not exists login_token (
    token text unique not null,
    refresh_token text unique not null,
    user_id integer not null,
    dateInsert timestamp default CURRENT_TIMESTAMP,
    dateUpdate timestamp default CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX if not exists idx_login_token_token ON login_token (token);
CREATE UNIQUE INDEX if not exists idx_login_token_refresh_token ON login_token (refresh_token);
CREATE INDEX if not exists idx_login_token_user_id ON login_token (user_id);