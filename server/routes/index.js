import userRoutes from './user.js';
import checkAuth from '../config/auth.js';

const useRoute = (app) => {
    app.use('/user', userRoutes);
    app.use('/auth/*', checkAuth);
    app.use('/auth/user', userRoutes);
};

export default useRoute;