import HeaderOnly from "~/Layouts/HeaderOnly";
import FollowingPage from "~/pages/Home/FollowingPage";
import HomePage from "~/pages/Home/HomePage";
import ProfilePage from "~/pages/Home/ProfilePage";
import SearchPage from "~/pages/Home/SearchPage";
import UploadPage from "~/pages/Home/UploadPage";

import config from "~/config";


const homeRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.follow, component: FollowingPage },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: config.routes.search, component: SearchPage, layout: null },
];

const adminRoutes = [];

export { homeRoutes, adminRoutes }