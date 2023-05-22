import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 300,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  borderRadius: "10px",
  p: 4,
};

const Login = ({ onSignIn }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signInHandler = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      alert("welcome user");
    } catch (error) {
      console.log(error);
    }

    // alert("Account created");
  };
  const signUpHandler = () => {
    onSignIn();
  };
  return (
    <div>
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          sx={{ margin: "auto", color: "#9457e7" }}
        >
          SIGN IN
        </Typography>
        <TextField
          label="Email"
          margin="normal"
          sx={{ borderColor: "#9457e7" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          sx={{
            color: "#333",
            marginTop: "20px",
            backgroundColor: "#9457e7",
          }}
          onClick={signInHandler}
          fullWidth
        >
          Sign In
        </Button>
        <br />
        <Button
          sx={{
            color: "#333",
            marginTop: "10px",
            backgroundColor: "#9457e7",
          }}
          onClick={signUpHandler}
          fullWidth
        >
          New User ? Sign up here !
        </Button>
      </Box>
    </div>
  );
};

export default Login;
