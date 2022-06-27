import HeaderOnly from "~/components/Layout/HeaderOnly";
import FollowingPage from "~/pages/Home/FollowingPage";
import HomePage from "~/pages/Home/HomePage";
import ProfilePage from "~/pages/Home/ProfilePage";
import SearchPage from "~/pages/Home/SearchPage";
import UploadPage from "~/pages/Home/UploadPage";


const homeRoutes = [
    { path: "/", component: HomePage },
    { path: "/follow", component: FollowingPage },
    { path: "/@:nickname", component: ProfilePage },
    { path: "/upload", component: UploadPage, layout: HeaderOnly },
    { path: "/search", component: SearchPage, layout: null },
];

const adminRoutes = [];

export { homeRoutes, adminRoutes }