import { createUserWithEmailAndPassword } from "firebase/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useState } from "react";
import { auth } from "../Firebase";

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

const SignUp = ({ onSignIn }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signInHandler = async () => {
    onSignIn();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);
      alert("welcome user");
    } catch (error) {
      console.log(error);
    }

    // alert("Account created");
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
          SIGN UP
        </Typography>
        <TextField
          label="Email"
          margin="normal"
          sx={{ borderColor: "#9457e7" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          sx={{
            color: "#333",
            marginTop: "10px",
            backgroundColor: "#9457e7",
          }}
          onClick={signInHandler}
        >
          Sign up
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
