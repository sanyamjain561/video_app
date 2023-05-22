import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Login from "./Login";
import SignUp from "./Signup";

const BoxModal = () => {
  const [open, setOpen] = useState(false);
  const [signIn, setsignIn] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const signInHandler = () => setsignIn(!signIn);

  console.log(signIn);
  let content = <Login onSignIn={signInHandler} />;
  if (signIn !== true) {
    content = <SignUp onSignIn={signInHandler} />;
  }
  return (
    <div>
      <Button onClick={handleOpen} className="hidden" sx={{ color: "#9457e7" }}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {content}
      </Modal>
    </div>
  );
};
export default BoxModal;
