import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layouts: FC<Props> = ({ title = 'Jira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title} </title>
      </Head>

      <Navbar />
      {/* Sidebar */}

      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
