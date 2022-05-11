import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

const menuItems = [
  { text: 'Inbox', icon: <InboxOutlinedIcon /> },
  { text: 'Starred', icon: <StarBorderOutlinedIcon /> },
  { text: 'Sent Mail', icon: <EmailOutlinedIcon /> },
  { text: 'Drafts', icon: <DraftsOutlinedIcon /> },
];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log('cierro')}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => {
            return (
              <ListItem key={index} button>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText>{text.text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
