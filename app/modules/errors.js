export const errors = {
    error500: (response, error) => {
        response.status(500).json({
            statusCode: 500,
            message: 'Server error',
            fullErrorMessage: error.toString()
        });
    },
    error400: (response) => {
        response.status(400).json({
            statusCode: 400,
            message: 'Bad request'
        });
    }
};