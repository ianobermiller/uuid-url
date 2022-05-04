# uuid-url

![npm](https://img.shields.io/npm/v/uuid-url)

Tiny (< 1kB) library to convert a UUID to a shorter (22 character), URL-safe base64 string and back. Uses `uuid` for
parsing and stringifying UUIDs. Includes TypeScript types.

```ts
import { urlToUuid, uuidToUrl } from "uuid-url";

uuidToUrl("376a4cca-9431-44f0-bc04-054faffba9b1"); // "N2pMypQxRPC8BAVPr_upsQ"
urlToUuid("N2pMypQxRPC8BAVPr_upsQ"); // "376a4cca-9431-44f0-bc04-054faffba9b1"
```
