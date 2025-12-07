import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {   
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://stock-application-website.onrender.com/api/Login", // 
        data
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.name);

      toast.success("Login Successful!");
      window.location.href = `https://stock-application-website-dashboard.vercel.app/?name=${res.data.name}`;  // Redirect to the dashboard 

    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Login Failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background:
          "url('https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_640.jpg') no-repeat center/cover",
      }}
    >
      <Box
        sx={{
          width: 380,
          padding: 4,
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          color: "#fff",
        }}
      >
        <div className="text-center mb-3">
          <LoginIcon sx={{ fontSize: 50 }} />
          <Typography variant="h5" className="mt-2">
            Login
          </Typography>
        </div>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "#fff" } }}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                "&:hover fieldset": { borderColor: "#fff" },
                "& input": { color: "#fff" },
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "#fff" } }}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
                "&:hover fieldset": { borderColor: "#fff" },
                "& input": { color: "#fff" },
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1,
              borderRadius: 2,
              background: "rgba(255,255,255,0.25)",
              color: "#fff",
              "&:hover": { background: "rgba(255,255,255,0.4)" },
            }}
          >
            Login
          </Button>
        </form>

        <Typography className="text-center mt-3">
          Don't have an account?{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </Typography>
      </Box>
    </div>
  );
}

