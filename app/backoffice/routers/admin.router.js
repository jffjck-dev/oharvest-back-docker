import { Router} from 'express';
import { adminController } from '../controllers/adminController.js';

const adminRouter = Router();

adminRouter.get('/', adminController.home);

/**
 * /categories - Liste des catégories
 * /categories/create - Créer une nouvelle catégorie
 * /categories/:id - Voir une catégorie existante
 * /categories/:id/edit - Editer une catégorie existante
 * /categories/:id/delete - Supprimer une catégorie existante
 */
adminRouter.get('/categories', adminController.category);
adminRouter.get('/plots', adminController.plot);
adminRouter.get('/products', adminController.product);
adminRouter.get('/varieties', adminController.variety);

export default adminRouter;
