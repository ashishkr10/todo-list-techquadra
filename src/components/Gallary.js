import React, { useState } from "react";

//packages imports
import { Box, Grid, Modal, Typography } from "@mui/material";

//Img imports
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1300,
  height: 650,
};

const imgArr = [one, two, three, four, five, six];

const Gallary = () => {
  const [open, setOpen] = useState(false);
  const [imgData, setImgData] = useState("");
  const handleOpen = (item) => {
    setOpen(true);
    setImgData(item);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box mt={2} p={5}>
      <Box>
        <Typography variant="h5">Gallary</Typography>
      </Box>
      <Box mt={5}>
        <Grid container spacing={4}>
          {imgArr.map((item, i) => (
            <Grid item xs={3} key={i}>
              <Box onClick={() => handleOpen(item)}>
                <img src={item} alt="img" width="200" height="100" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={imgData} alt="img" width="1300" height="650" />
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallary;
