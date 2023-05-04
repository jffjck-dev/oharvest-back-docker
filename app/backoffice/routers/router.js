import { Router} from 'express';
import { adminController } from '../controllers/adminController.js';
import { categoryRouter } from './category.router.js';
import { plotRouter } from './plot.router.js';
import { productRouter } from './product.router.js';
import { varietyRouter } from './variety.router.js';
import { bookingRouter } from './booking.router.js';

const adminRouter = Router();

adminRouter.get('/', adminController.home);

adminRouter.use((request, response, next) => {
    const regExp = /^\/([a-z]+)\/?([a-z]+)*/;
    const section = request.url.match(regExp);

    const properties = {
        categories: [
            {
                key: 'id',
                name: 'Id',
                show: true
            },
            {
                key: 'name',
                name: 'Nom',
                show: true,
                form: {
                    type: 'input_text'
                }
            }
        ],
        plots: [
            {
                key: 'id',
                name: 'Id',
                show: true
            },
            {
                key: 'name',
                name: 'Nom',
                show: true,
                form: {
                    type: 'input_text'
                }
            }
        ],
        products: [
            {
                key: 'id',
                name: 'Id',
                show: true,
            },
            {
                key: 'name',
                name: 'Nom du produit',
                show: true,
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'isAvailable',
                name: 'Disponibilité',
                show: true,
                file: 'product/switch',
                form: {
                    type: 'input_radio',
                    choices: [
                        {
                            value: true,
                            name: 'Est disponible'
                        },
                        {
                            value: false,
                            name: 'Non disponible'
                        }
                    ]
                }
            },
            {
                key: 'image',
                name: 'Image',
                form: {
                    type: 'input_file'
                }
            },
            {
                key: 'description',
                name: 'Description',
                form: {
                    type: 'textarea'
                }
            },
            {
                key: 'tip',
                name: 'Astuce',
                form: {
                    type: 'textarea'
                }
            },
            {
                key: 'harvest',
                name: 'Date des récoltes',
                form: {
                    type: 'harvest_date_picker'
                }
            },
            {
                key: 'categoryId',
                name: 'Catégorie',
                form: {
                    type: 'select',
                    option: 'categories',
                    attribute: 'category'
                }
            }
        ],
        varieties: [
            {
                key: 'id',
                name: 'Id',
                show: true,
            },
            {
                key: 'name',
                name: 'Nom',
                show: true,
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'description',
                name: 'Description',
                show: false, //Optionnal to indicate it, cause when it is not defined, it does nothing
                form: {
                    type: 'textarea'
                }
            },
            {
                key: 'harvestDate',
                name: 'Période de récolte',
                form: {
                    type: 'harvest_date_picker'
                }
            },
            {
                key: 'productId',
                name: 'Produit',
                form: {
                    type: 'select',
                    option: 'products',
                    attribute: 'product',
                }
            }
        ],
        map: [
            {
                key: 'name',
                name: 'Nom',
                show: true,
            },
            {
                key: 'products',
                name: 'Produits',
                show: true,
                file: 'plot/product/product_tag'
            }
        ],
        bookings: [
            {
                key: 'bookingAt',
                name: 'Date de réservation',
                show: true,
                form: {
                    type: 'input_date',
                    disabled: true
                }
            },
            {
                key: 'visitAt',
                name: 'Date de la visite',
                show: true,
                form: {
                    type: 'input_date',
                    disabled: true
                }
            },
            {
                key: 'slot',
                name: 'Créneau',
                show: true,
                file: 'booking/slot',
                form: {
                    type: 'input_radio',
                    choices: [
                        {
                            value: 'morning',
                            name: 'Matin'
                        },
                        {
                            value: 'afternoon',
                            name: 'Après-midi'
                        }
                    ]
                }
            },
            {
                key: 'name',
                name: 'Nom de l\'école',
                show: true,
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'contact',
                name: 'Nom du contact',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'phone',
                name: 'Téléphone du contact',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'mail',
                name: 'Email du contact',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'address',
                name: 'Adresse',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'city',
                name: 'Ville',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'zipcode',
                name: 'Code postal',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'studentNumber',
                name: 'Nombre d\'élèves',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'groupNumber',
                name: 'Nombre de groupes',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'guideNumber',
                name: 'Nombre d\'accompagnants',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'transport',
                name: 'Type de transport',
                form: {
                    type: 'input_text'
                }
            },
            {
                key: 'status',
                name: 'Est confimé?',
                show: true,
                file: 'booking/status',
                form: {
                    type: 'select',
                    choices: [
                        {
                            value: 'pending',
                            name: 'En attente'
                        },
                        {
                            value: 'accepted',
                            name: 'Confirmée'
                        },
                        {
                            value: 'refused',
                            name: 'Refusée'
                        }
                    ]
                }
            },
        ]
    };

    response.locals.section = section[2] === 'products' ? 'map' : section[1];
    response.locals.properties = properties[response.locals.section];
    next();
});

adminRouter.use('/categories', categoryRouter);
adminRouter.use('/plots', plotRouter);
adminRouter.use('/products', productRouter);
adminRouter.use('/varieties', varietyRouter);
adminRouter.use('/bookings', bookingRouter);

export default adminRouter;
