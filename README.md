# Circle CI
Continuous integration with CircleCI

### Project Setup
1. [Sign up for CircleCI](https://circleci.com/integrations/github/)
  - Hit `Start Building`
  - Sign up with Github
2. Select a project repo to set up with CircleCI
  - This will show as Failed since we still need to set up the config.yml file within the project
3. Make a `.circleci\config.yml` file in your project repo and add the following code:

```
version: 2
jobs:
  build:
    machine: true
    steps:
      - checkout
      - run: npm install
      - run: npm test
```
4. Add and commit the code and push to your development branch
5. Merge your config file to staging and master
6. On Github in your project repo go to the settings tab
7. Click on `Branches` and click on `Add Rule`
8. Add a rule to your `master` and `staging` branch
  - Click on `Require status checks to pass before merging`
  - Click on `Require branches to be up to date before merging`
  - Click on ` ci/circleci: build`