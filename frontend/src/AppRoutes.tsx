import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import UpdateTask from "./components/UpdateTask"
function AppRoutes() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<App />} />
                <Route path="/:taskId" element={<UpdateTask />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes