import { varietyDataMapper } from '../../models/Variety.js';

export const varietyController = {
    async allVariety(request, response) {
        const varieties = await varietyDataMapper.findAll();
        
        response.render( 'variety/variety', { varieties } );
    }
};