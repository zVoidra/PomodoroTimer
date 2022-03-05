
import { BrowserRouter, Routes, Route} from "react-router-dom";


//Pages
import MainPage from './pages/MainPage'
import PageNotFound from './pages/PageNotFound'
import PageTest from './pages/PageTest'

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={ <MainPage/> } />
                    <Route path="*" element= { <PageNotFound/> } />
                    <Route path="test" element={ <PageTest/> } /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;