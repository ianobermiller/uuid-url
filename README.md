# uuid-url

Tiny (< 1kB) library to convert a UUID to a shorter (22 character), URL-safe base64 string and back. Uses `uuid` for
parsing and stringifying UUIDs. Includes TypeScript types.

```ts
import { urlToUuid, uuidToUrl } from "uuid-url";

uuidToUrl("376a4cca-9431-44f0-bc04-054faffba9b1"); // "N2pMypQxRPC8BAVPr_upsQ"
urlToUuid("N2pMypQxRPC8BAVPr_upsQ"); // "376a4cca-9431-44f0-bc04-054faffba9b1"
```

## Changelog

### v0.0.4 - 2022-05-04

- Switch main export to esm

### v0.0.3 - 2022-05-04

- Update esm/cjs exports

### v0.0.2 - 2022-05-04

- Add repository to package.json

### v0.0.1 - 2022-05-04

- Initial release
