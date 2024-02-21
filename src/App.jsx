
import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TaskPage from "./pages/TaskPage"
import HomePage from "./pages/HomePage"
import ProfileTask from "./pages/ProfilePage"
import TaskFormPage from "./pages/TaskFormPage"
import ProtectedRoute from "./ProtectedRoute"


import { AuthProvider } from "./context/AuthContext"
import { TaskProvider } from "./context/TaskContext"
import Navbar from "./components/Navbar"


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-2">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfileTask />} />
              </Route>
            </Routes>

          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider >
  )
}

export default App