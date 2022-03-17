
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Pages
import MainPage from './pages/MainPage'
import PageNotFound from './pages/PageNotFound'

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={ <MainPage/> } />
                    <Route path="*" element= { <PageNotFound/> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;