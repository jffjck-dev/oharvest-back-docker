INSERT INTO
    category (name)
VALUES
    ('Fruits'),
    ('Légumes'),
    ('Fleurs');

INSERT INTO
    plot (name, start_point_longitude, start_point_latitude, end_point_longitude, end_point_latitude)
VALUES
    ('Secteur 1', 49.270339, 3.917509, 49.270723, 3.916921),
    ('Secteur 2', 49.270453, 3.916957, 49.270847, 3.916137),
    ('Secteur 3', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 4', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 5', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 6', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 7', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 8', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 9', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 10', 49.270643, 3.915252, 49.270899, 3.914704),
    ('Secteur 11', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 12', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 13', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 14', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 15', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 16', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 17', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 18', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 19', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 20', 49.270643, 3.915252, 49.270899, 3.914704 ),
    ('Secteur 21', 49.270643, 3.915252, 49.270899, 3.914704 );

INSERT INTO
    product (name, image, is_available, description, tip, harvest_begin_at, harvest_end_at, category_id)
VALUES
    ('Pomme de terre', 'pomme_de_terre.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 7, 2),
    ('Carotte', 'carotte.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 10, 2),
    ('Courgette', 'courgette.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 6, 10, 2),
    ('Salade', 'salade.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 4, 10, 2),
    ('Pommes', 'pomme.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 8, 11, 1),
    ('Fraises', 'fraise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 9, 1),
    ('Groseille', 'groseille.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 5, 6, 1),
    ('Choux', 'choux.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 4, 10, 2),
    ('Tulipes', 'tulipe.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 4, 5, 3),
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
    ('canada','Nunc bibendum egestas turpis ac tempor. Morbi vitae sapien sed nibh pellentesque varius. Pellentesque et diam non nisl faucibus facilisis. Proin posuere maximus velit mattis dignissim. Curabitur consequat mi ut dui lobortis tempus. Ut tincidunt maximus nulla, vel ultricies leo lobortis ac. Duis iaculis massa eu velit commodo accumsan. Cras eu rhoncus turpis.', 1, 2, 4),
    ('jonagored', 'Nunc bibendum egestas turpis ac tempor. Morbi vitae sapien sed nibh pellentesque varius. Pellentesque et diam non nisl faucibus facilisis. Proin posuere maximus velit mattis dignissim. Curabitur consequat mi ut dui lobortis tempus. Ut tincidunt maximus nulla, vel ultricies leo lobortis ac. Duis iaculis massa eu velit commodo accumsan. Cras eu rhoncus turpis.', 3, 4, 4);

INSERT INTO
    product_in_plot (product_id, plot_id)
VALUES
    (1,1),
    (2,2),
    (3,2),
    (5,2),
    (8,3),
    (9,6),
    (9,7),
    (9,8),
    (9,9);