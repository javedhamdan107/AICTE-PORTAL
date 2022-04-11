import userRoutes from './user.js';
import authUserRoutes from './auth-user.js';
import checkAuth from '../config/auth.js';

const useRoute = (app) => {
    app.use('/user', userRoutes);
    app.use('/auth/*', checkAuth);
    app.use('/auth/user', authUserRoutes);
};

export default useRoute;