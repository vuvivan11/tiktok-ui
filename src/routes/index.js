import HeaderOnly from "~/components/Layout/HeaderOnly";
import FollowingPage from "~/pages/Home/FollowingPage";
import HomePage from "~/pages/Home/HomePage";
import ProfilePage from "~/pages/Home/ProfilePage";
import SearchPage from "~/pages/Home/SearchPage";
import UploadPage from "~/pages/Home/UploadPage";

import routes from "~/config/routes";


const homeRoutes = [
    { path: routes.home, component: HomePage },
    { path: routes.follow, component: FollowingPage },
    { path: routes.profile, component: ProfilePage },
    { path: routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: routes.search, component: SearchPage, layout: null },
];

const adminRoutes = [];

export { homeRoutes, adminRoutes }