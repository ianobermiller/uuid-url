# uuid-url

![npm](https://img.shields.io/npm/v/uuid-url)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/uuid-url)
![npm type definitions](https://img.shields.io/npm/types/uuid-url)
![NPM](https://img.shields.io/npm/l/uuid-url)

Tiny (< 1kB) library to convert a UUID to a shorter (22 character), URL-safe base64 string and back. Uses `uuid` for
parsing and stringifying UUIDs. Tree-shakeable ESM or CommonJS. Includes TypeScript types.

```ts
import { urlToUuid, uuidToUrl } from "uuid-url";

uuidToUrl("376a4cca-9431-44f0-bc04-054faffba9b1"); // "N2pMypQxRPC8BAVPr_upsQ"
urlToUuid("N2pMypQxRPC8BAVPr_upsQ"); // "376a4cca-9431-44f0-bc04-054faffba9b1"
```
