import{Grid}from"semantic-ui-react";import Layout from"../components/layout";
export default function Custom404() {
  return (
    <Layout>
      <Grid centered container className="h-screen">
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="center">
            <h2>404 - Sayfa Bulunamadı!</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}
