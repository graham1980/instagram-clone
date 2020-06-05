import React from "react";
import Layout from '../components/shared/Layout';
import { Typography } from "@material-ui/core";

function NotFoundPage() {
  return (
    <Layout title="Page Not Found" marginTop={120}>
      <Typography variant="h5" align="center" paragraph>
        Sorry, this page isn't available
      </Typography>
    </Layout>
  )
}

export default NotFoundPage;
