import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
// material
import { Stack, Button, Divider, Typography, Badge } from '@mui/material';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={15}>
        <Badge color="secondary" badgeContent="CommingSoon" size="large">
          <Button fullWidth size="large" color="inherit" variant="outlined" disabled>
            <Icon icon={googleFill} color="#DF3E30" height={24} />
          </Button>
        </Badge>

        <Badge color="secondary" badgeContent="CommingSoon" size="large">
          <Button fullWidth size="large" color="inherit" variant="outlined" disabled>
            <Icon icon={facebookFill} color="#1877F2" height={24} />
          </Button>
        </Badge>

        <Badge color="secondary" badgeContent="CommingSoon" size="large">
          <Button fullWidth size="large" color="inherit" variant="outlined" disabled>
            <Icon icon={twitterFill} color="#1C9CEA" height={24} />
          </Button>
        </Badge>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
