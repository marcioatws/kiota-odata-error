import { AnonymousAuthenticationProvider } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createApiClient } from "./app/apiClient.js";

const authProvider = new AnonymousAuthenticationProvider();
const adapter = new FetchRequestAdapter(authProvider);
adapter.baseUrl = "http://localhost:5041";

// Create the API client
var client = createApiClient(adapter);

client.products.byId(1).get().then(x => console.log(x)).catch(e => console.error(e));

client.productsWithId(1).get().then(x => console.log(x)).catch(e => console.error(e));


/*
kiota generate --clean-output --exclude-backward-compatible --language typescript --openapi "http://localhost:5041/swagger/v1/swagger.json" --output "D:\source\kiota-error-repo\kiota-frontend\src\app\"

npm install @microsoft/kiota-abstractions@1.0.0-preview.59 -SE
npm install @microsoft/kiota-http-fetchlibrary@1.0.0-preview.58 -SE
npm install @microsoft/kiota-serialization-form@1.0.0-preview.48 -SE
npm install @microsoft/kiota-serialization-json@1.0.0-preview.59 -SE
npm install @microsoft/kiota-serialization-multipart@1.0.0-preview.37 -SE
npm install @microsoft/kiota-serialization-text@1.0.0-preview.56 -SE

*/