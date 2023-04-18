INSERT INTO
    category (name)
VALUES
    ('Fruits'),
    ('Légumes'),
    ('Fleurs');

INSERT INTO
    plot (name)
VALUES
    ('Secteur 1'),
    ('Secteur 2'),
    ('Secteur 3');

INSERT INTO
    product (name, image, is_available, feature, trick, harvest_begin_at, harvest_end_at, category_id)
VALUES
    ('Pomme de terre', 'pomme_de_terre.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-07-01', 2),
    ('Carotte', 'carotte.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-10-01', 2),
    ('Courgette', 'courgette.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-06-01', '2023-10-01', 2),
    ('Salade', 'salade.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-04-01', '2023-10-01', 2),
    ('Pommes', 'pomme.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-08-01', '2023-11-01', 1),
    ('Fraises', 'fraise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-09-01', 1),
    ('Groseille', 'groseille.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-06-01', 1),
    ('Choux', 'choux.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-04-01', '2023-10-01', 2),
    ('Tulipes', 'tulipe.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-04-01', '2023-05-01', 3),
    ('Oeillet de poête', 'oeillet_de_poete.png', false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-07-01', 3),
    ('Campanule', 'campanule.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-06-01', 3),
    ('Pivoine', 'pivoine.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-05-01', '2023-06-01', 3),
    ('Coloquinte', 'coloquinte.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 2),
    ('Haricot vert', 'haricot_vert.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 2),
    ('Framboise', 'framboise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 1),
    ('Radis', 'radis.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 2),
    ('Rhubarbe', 'rhubarbe.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 1),
    ('Tomate andine cornu', 'tomate_andine_cornu.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 2),
    ('Tomate cerise', 'tomate_cerise.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-09-01', '2023-10-01', 2),
    ('Tomate coeur de boeuf', 'tomate_coeur_boeuf.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-06-01', '2023-09-01', 2),
    ('Tomate green zebra', 'tomate_green_zebra.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-06-01', '2023-09-01', 2),
    ('Tomate noire de crimée', 'tomate_noire.png', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-06-01', '2023-09-01', 2);

INSERT INTO
    variety (name, harvest_begin_at, harvest_end_at, product_id)
VALUES
    ('canada', '2023-01-01', '2023-02-01', 4),
    ('jonagored', '2023-03-01', '2023-04-01', 4);

INSERT INTO
    product_in_plot (product_id, plot_id)
VALUES
    (1,1),
    (2,2),
    (3,2),
    (5,2),
    (8,3),
    (9,3);