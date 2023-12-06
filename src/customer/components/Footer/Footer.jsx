import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Analysis
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbottom>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Made by Shubham
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Icons made by{' '}
                <Link href="https://www.freepik.com" color="inherit" underline="always">
                    Freepik
                </Link>{' '}
                from{' '}
                <Link href="https://www.flaticon.com" color="inherit" underline="always">
                    www.flaticon.com
                </Link>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
