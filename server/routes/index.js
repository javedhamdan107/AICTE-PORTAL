import userRoutes from './user.js';

const useRoute = (app) => {
    app.use('/user', userRoutes);
};

export default useRoute;