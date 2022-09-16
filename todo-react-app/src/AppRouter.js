import React from "react"
import { Route, Routes } from "react-router-dom"

import { Box } from "@mui/material"
import App from "./App"
import Login from "./Login"
import Copyright from "./Copyright"

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} exact={true} />
      </Routes>

      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  )
}

export default AppRouter
