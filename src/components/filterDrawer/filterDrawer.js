import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Checkbox from '@mui/material/Checkbox';

import styles from './filterDrawer.module.css';
import { FormControlLabel, FormGroup } from '@mui/material';

const drawerBleeding = -50;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light'
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#354ace' : grey[800],
}));

// const Puller = styled(Box)(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: 'absolute',
//   top: 4,
//   left: 'calc(50% - 15px)',
// }));

function FilterDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root className={styles.filterDrawer__toggler}>
      <Button onClick={toggleDrawer(true)}>Categories</Button>
      <SwipeableDrawer
        container={container}
        anchor='bottom'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            Filters
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <FormGroup className={styles.filterDrawer__filtersContainer}>
            <FormControlLabel control={<Checkbox />} label='Label' />
            <FormControlLabel control={<Checkbox />} label='Label' />
            <FormControlLabel control={<Checkbox />} label='Label' />
            <FormControlLabel control={<Checkbox />} label='Label' />
            <FormControlLabel control={<Checkbox />} label='Label' />
            <FormControlLabel control={<Checkbox />} label='Label' />
          </FormGroup>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

FilterDrawer.propTypes = {
  window: PropTypes.func,
};

export default FilterDrawer;
