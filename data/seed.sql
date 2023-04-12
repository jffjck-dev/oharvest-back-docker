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
    product (name, image, feature, trick, harvest_begin_at, harvest_end_at, category_id)
VALUES
    ('Carottes', 'carotte.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-01-01', '2023-06-01', 2),
    ('Pommes', 'pommes.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-01-01', '2023-06-01', 1),
    ('Choux', 'choux.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-01-01', '2023-06-01', 2),
    ('Tulipes', 'tulipes.png', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel enim at turpis vulputate varius vitae non erat. Ut neque eros, finibus sed condimentum in, convallis vel lectus', '2023-01-01', '2023-06-01', 3);

INSERT INTO
    variety (name, harvest_begin_at, harvest_end_at, product_id)
VALUES
    ('canada', '2023-01-01', '2023-02-01', 2),
    ('jonagored', '2023-03-01', '2023-04-01', 2);