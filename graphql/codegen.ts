
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.contentful.com/content/v1/spaces/8utyj17y1gom/environments/master/explore?access_token=e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37",
  documents: "src/**/*.graphql",
  generates: {
    "src/app/generated/graphql.ts": {
      plugins: ["typescript-apollo-angular"]
    }
  }
};

export default config;
