import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layouts } from '../components/layouts/';

const Home: NextPage = () => {
  return (
    <Layouts>
      <Typography variant="h1" color="primary">
        Holas!
      </Typography>
    </Layouts>
  );
};

export default Home;
