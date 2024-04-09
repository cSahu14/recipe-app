import { Box, Button, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";


function App() {
  const { loading, data } = useQuery(GET_AUTHENTICATED_USER);

	if (loading) return null;
  return (      
      <>
        {data?.authUser && <Navbar/>}
        <Routes>
          <Route path='/' element={data.authUser ? <HomePage /> : <Navigate to='/SignIn' />} />
          <Route path='/signin' element={!data.authUser ? <SignIn /> : <Navigate to='/' />} />
          <Route path='/signup' element={!data.authUser ? <SignUp /> : <Navigate to='/' />} />
          {/* <Route
            path='/transaction/:id'
            element={data.authUser ? <TransactionPage /> : <Navigate to='/login' />}
          />
          <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
        {/* <Toaster /> */}
		</>
    // <Box>
    //   <Navbar/>
    //   <Stack direction="row" spacing={2} justifyContent="space-between">
    //     <Sidebar/>
    //     <Feed/>
    //     <Rightbar/>
    //   </Stack>
    // </Box>
  );
}

export default App;
