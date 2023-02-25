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