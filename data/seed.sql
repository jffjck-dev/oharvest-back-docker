TRUNCATE TABLE category, plot, product, variety, product_in_plot, booking, employee RESTART IDENTITY;

INSERT INTO
    category (name)
VALUES
    ('Fruit'),
    ('Légume'),
    ('Fleur');

INSERT INTO
    plot (name, start_point_longitude, start_point_latitude, end_point_longitude, end_point_latitude)
VALUES
    ('Secteur 1', 48.749171, 7.426083, 48.751019, 7.420575),
    ('Secteur 2', 48.752209, 7.423843, 48.754158, 7.417471),
    ('Secteur 3', 48.748008, 7.423303, 48.749644, 7.417055),
    ('Secteur 4', 48.750984, 7.420523, 48.752935, 7.414155),
    ('Secteur 5', 48.745248, 7.420851, 48.749112, 7.426083),
    ('Secteur 6', 48.746529, 7.419775, 48.748264, 7.413214),
    ('Secteur 7', 48.744354, 7.411732, 48.748244, 7.413144),
    ('Secteur 8', 48.749651, 7.416972, 48.751327, 7.410006),
    ('Secteur 9', 48.748265, 7.413081, 48.749817, 7.406052),
    ('Secteur 10', 48.746858, 7.409033, 48.748548, 7.402661),
    ('Secteur 11', 48.749854, 7.405901, 48.750580, 7.400491 ),
    ('Secteur 12', 48.751368, 7.409886, 48.752074, 7.403693 ),
    ('Secteur 13', 48.752913, 7.414138, 48.753793, 7.407528 ),
    ('Secteur 14', 48.752999, 7.414170, 48.758129, 7.419510 ),
    ('Secteur 15', 48.757636, 7.416189, 48.757120, 7.410556 ),
    ('Secteur 16', 48.755768, 7.411663, 48.755468, 7.405476 ),
    ('Secteur 17', 48.755446, 7.405444, 48.756283, 7.399290 );

INSERT INTO
    product (name, image, is_available, description, tip, harvest_begin_at, harvest_end_at, category_id)
VALUES
    ('Pomme de terre', 'pomme_de_terre.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 7, 2),
    ('Carotte', 'carotte.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 10, 2),
    ('Courgette', 'courgette.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 6, 10, 2),
    ('Salade', 'salade.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 4, 10, 2),
    ('Pomme', 'pomme.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 8, 11, 1),
    ('Fraise', 'fraise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 9, 1),
    ('Groseille', 'groseille.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 6, 1),
    ('Chou', 'choux.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 4, 10, 2),
    ('Tulipe', 'tulipe.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 4, 5, 3),
    ('Oeillet de poête', 'oeillet_de_poete.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 7, 3),
    ('Campanule', 'campanule.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 6, 3),
    ('Pivoine', 'pivoine.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 6, 3),
    ('Coloquinte', 'coloquinte.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 2),
    ('Haricot vert', 'haricot_vert.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 2),
    ('Framboise', 'framboise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 1),
    ('Radis', 'radis.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 2),
    ('Rhubarbe', 'rhubarbe.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 1),
    ('Tomate andine cornu', 'tomate_andine_cornu.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 2),
    ('Tomate cerise', 'tomate_cerise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 9, 10, 2),
    ('Tomate coeur de boeuf', 'tomate_coeur_boeuf.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 6, 9, 2),
    ('Tomate green zebra', 'tomate_green_zebra.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 6, 9, 2),
    ('Tomate noire de crimée', 'tomate_noire.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 6, 9, 2);

INSERT INTO
    variety (name, description, harvest_begin_at, harvest_end_at, product_id)
VALUES
    ('Canada','Nunc bibendum egestas turpis ac tempor. Morbi vitae sapien sed nibh pellentesque varius. Pellentesque et diam non nisl faucibus facilisis. Proin posuere maximus velit mattis dignissim. Curabitur consequat mi ut dui lobortis tempus. Ut tincidunt maximus nulla, vel ultricies leo lobortis ac. Duis iaculis massa eu velit commodo accumsan. Cras eu rhoncus turpis.', 1, 2, 4),
    ('Jonagored', 'Nunc bibendum egestas turpis ac tempor. Morbi vitae sapien sed nibh pellentesque varius. Pellentesque et diam non nisl faucibus facilisis. Proin posuere maximus velit mattis dignissim. Curabitur consequat mi ut dui lobortis tempus. Ut tincidunt maximus nulla, vel ultricies leo lobortis ac. Duis iaculis massa eu velit commodo accumsan. Cras eu rhoncus turpis.', 3, 4, 4);

INSERT INTO
    product_in_plot (product_id, plot_id)
VALUES
    (2,2),
    (3,2),
    (5,2),
    (8,3),
    (9,6),
    (9,7),
    (9,8),
    (9,9);

INSERT INTO
    employee (mail, password, firstname, lastname)
VALUES
    ('kevin.hesse@oharvest.io', '$2b$10$1Zy6wcGdUh3TCjhlgg8JKetQ95vB/rdXZfSzgKeS5Un2smYg21imK', 'Kevin', 'Hesse'),
    ('guillaume.felicite@oharvest.io', '$2b$10$1Zy6wcGdUh3TCjhlgg8JKetQ95vB/rdXZfSzgKeS5Un2smYg21imK', 'Guillaume', 'Felicite');

INSERT INTO
    booking (booking_at, visit_at, slot, name, contact, phone, mail, address, city, zipcode, student_number, group_number, guide_number, transport, status)
VALUES
    ('2023-04-23', '2023-05-06', 'morning', 'Ecole de la poule', 'cocorico', '0311223344', 'coco.rico@poule.io', '10 rue des oeufs', 'poulailler', '92010', 40, 2, 6, 'car', 'refused'),
    ('2023-04-24','2023-05-01','afternoon','Ecole','Jean','0666666666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',25,2,4,'vroum','pending'),
    ('2023-04-24','2023-05-01','morning','Ecole Lambda','Jean','0666666666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',25,2,4,'car','refused'),
    ('2023-04-25','2023-05-07','morning','Ecole','Jean','0666886666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',25,2,4,'vroum', 'pending'),
    ('2023-04-25','2023-05-03','morning','Ecole BoB','John','0666886666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',25,2,4,'vroum', 'accepted'),
    ('2023-04-25','2023-05-03','afternoon','Ecole no2','Jean','0612345678','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',25,2,4,'vroum', 'accepted'),
    ('2023-04-25','2023-05-07','morning','Ecole','Jean','0666886666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',25,2,4,'vroum', 'accepted'),
    ('2023-04-24','2023-05-02','afternoon','Ecole de la poule','Jean','0666666666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',40,3,4,'bus','accepted'),
    ('2023-04-24','2023-04-27','afternoon','Ecole de la poule','Jean','0666666666','plop.plop@plop.io','10 rue de la Joi','Nothere','01234',40,3,4,'bus','accepted');