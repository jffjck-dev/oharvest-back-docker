import { plotDataMapper } from '../../models/Plot.js';

export const plotController = {
    async allPlot(request, response) {
        const plots = await plotDataMapper.findAll();
        
        response.render( 'plot/plot', { plots } );
    }
};
