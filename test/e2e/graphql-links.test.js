const TRY_GRAPHIQL_TEXT = 'Try it in Sandbox';

Feature(`"${TRY_GRAPHIQL_TEXT}" links`);

Scenario('graphql code shows link', I => {
  I.amOnPage('/#/apis/examples');
  I.see(TRY_GRAPHIQL_TEXT);
  I.seeElement('[data-lang="graphql"] + .graphql-link');
  I.dontSeeElement('[data-lang="json"] + .graphql-link');
  I.click(TRY_GRAPHIQL_TEXT);
  I.wait(1);
  I.switchToNextTab();
  I.seeInCurrentUrl('graphiql'); /* This was giving errors with graphiql before; we switched briefly to graphql */

  // Proves code got injected into the GraphiQL query editor
  // This fails when doing local development using the docsify command because it serves from source,
  // not the build directory.
  // I.see('{', '.query-editor');
});
