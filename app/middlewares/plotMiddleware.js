import { plotDataMapper } from '../models/Plot.js';
import { APIError } from '../services/error/APIError.js';

export const plotMiddleware = {
    /**
     * Load a plot item inside the request object
     * If the item exist, stock inside request.instance
     * Otherwise, send an error with status 400.
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     * @param {Number} id Id of a plot
     */
    async loadPlot(request, response, next, id) {
        try {
            const plotFound = await plotDataMapper.findOne(id);
            if ( plotFound ) {
                request.instance = plotFound;
                next();
            } else {
                next(new APIError('Plots not found', 400));
            }
        } catch (error) {
            next(new APIError('Internal server error', 500));
        }
    }
};

