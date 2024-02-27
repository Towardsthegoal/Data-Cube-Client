import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import WorkIcon from '@mui/icons-material/Work';

const AsideListItem = (props) => {
  let iconToRender;

  switch (props.text) {
    case "Home":
      iconToRender = <HomeOutlinedIcon />;
      break;
    case "Create":
      iconToRender = <AddCircleOutlineOutlinedIcon />;
      break;
    case "Browse":
      iconToRender = <FolderOpenOutlinedIcon />;
      break;
    case "Workspaces":
      iconToRender = <WorkIcon />;
      break;
    default:
      iconToRender = <HomeOutlinedIcon />;
  }

  return (
    <ListItem key={props.text} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 60,
          justifyContent: "center",
          px: 2.5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
          }}
        >
          {iconToRender}
        </ListItemIcon>
        <ListItemText
          primary={props.text}
          primaryTypographyProps={{ fontSize: "0.7rem" }}
          sx={{ justifyContent: "right" }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AsideListItem;
