import userRoutes from './user.js';
import authUserRoutes from './auth-user.js';
import checkAuth from '../config/auth.js';

const useRoute = (app) => {
    app.use('/user', userRoutes);
    app.use('/auth/*', checkAuth);
<<<<<<< Updated upstream
=======
    app.use('/auth/user', authUserRoutes);
>>>>>>> Stashed changes
};

export default useRoute;