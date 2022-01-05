// material
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const openTab = () => {
  window.open('https://ssa-meet-up.vercel.app/', '_blank');
};

// ----------------------------------------------------------------------

export default function Page404() {
  return <div>{true && openTab()}</div>;
}
