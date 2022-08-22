import React from "react";
import {
  MenuItem,
  Menu,
  IconButton,
  Toolbar,
  AppBar,
  ImageListItem,
  ImageList,
  Paper,
  Grid,
  Divider,
  Typography,
  Autocomplete,
  Rating,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  MenuItem,
  Box,
  InputAdornment,
  TextField,
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
// import SendIcon from '@mui/icons-material/Send';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
const MuiLayout = () => {
  return (
    <Paper>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "160p",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Mui Material Stuff
        </Box>
        <Box
          display="flex"
          height="100p"
          width="100px"
          bgcolor="success.light"
          p={4}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
