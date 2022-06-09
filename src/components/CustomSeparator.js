import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#2e5137" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#2e5137"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Montaña
    </Link>,
    <Link underline="hover" key="3" color="#2e5137" href="/" onClick={handleClick}>
      Bicicleta
    </Link>,
  ];

  return (


    <Stack spacing={2}>
      
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      </Stack>

  )
  
};
