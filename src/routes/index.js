import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import {HeaderOnly} from '~/Layout';
import Search from '~/Layout/search';
const publicRoutes=[
    {path:"/home",component:Home},
    {path:"/following",component:Following},
    {path:"/upload",component:Upload,layout:null},
    {path:"/test",component:Upload,layout:HeaderOnly},
    {path:"/search",component:Search,layout:null}
]
const privateRoutes=[

]
export {publicRoutes,privateRoutes}