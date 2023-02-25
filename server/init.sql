CREATE DATABASE crazy_cats
    WITH
    OWNER = crazycat
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT TEMPORARY, CONNECT ON DATABASE crazy_cats TO PUBLIC;

GRANT ALL ON DATABASE crazy_cats TO crazycat;

-- Table: crazy_cats.profile

-- DROP TABLE IF EXISTS crazy_cats.profile;

CREATE TABLE IF NOT EXISTS crazy_cats.profile
(
    id integer NOT NULL DEFAULT 'nextval('crazy_cats.profile_id_seq'::regclass)',
    name text COLLATE pg_catalog."default",
    dob date,
    location text COLLATE pg_catalog."default",
    fav_food text COLLATE pg_catalog."default",
    fur_color text COLLATE pg_catalog."default",
    height double precision,
    weight double precision,
    avatar text COLLATE pg_catalog."default",
    likes integer,
    CONSTRAINT profile_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS crazy_cats.profile
    OWNER to postgres;

GRANT ALL ON TABLE crazy_cats.profile TO crazycat;

GRANT ALL ON TABLE crazy_cats.profile TO postgres;

insert into crazy_cats.profile (name, dob, location, fav_food, fur_color, height, weight, avatar, likes)
values 
('bob', '2002-04-12','tel-aviv', 'catnip', 'grey', 0.78, 5.23, 'https://i.pinimg.com/originals/24/51/d3/2451d3d7a367f463bcf93053e6a9c747.jpg', 15),
('marvin', '2003-05-12','haifa', 'catnip', 'orange', 0.79, 6.23, 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg', 16),
('robbi', '2004-07-11','jerusalem', 'catnip', 'white', 1.78, 7.23, '	https://static.vecteezy.com/system/resources/thumb…by-cat-sitting-on-green-background-free-photo.jpg', 17),
('marvin', '2015-04-12','haifa', 'catnip', 'orange', 0.79, 6.23, 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg', 13),
('james', '2018-04-12','tel-aviv', 'tuna', 'grey', 0.68, 4.23, '	https://static.vecteezy.com/system/resources/thumb…by-cat-sitting-on-green-background-free-photo.jpg', 12),
('will', '2022-04-12','haifa', 'tuna', 'orange', 0.79, 6.23, 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg', 11),
('blake', '2021-04-12','tel-aviv', 'salmon', 'grey', 0.78, 5.23, '	https://img.freepik.com/free-photo/cat-white-background_155003-15381.jpg', 18),
('alice', '2013-04-12','haifa', 'beef', 'orange', 0.79, 6.23, 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg', 16),
('david', '2012-04-12','tel-aviv', 'catnip', 'grey', 0.78, 5.23, '	https://images.pexels.com/photos/2127433/pexels-ph…127433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 10),
('rick','2015-04-12','haifa', 'catnip', 'orange', 0.79, 6.23, 'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-106649919-scaled-e1618860834581.jpg', 109);