import{Grid}from"semantic-ui-react";import Layout from"../components/layout";
export default function Custom500() {
  return (
    <Layout>
      <Grid centered container className="h-screen">
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="center">
            <h2>500 Internal Server Hatası!</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}
