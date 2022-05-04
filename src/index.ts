import { base64Decode, base64Encode } from "./base64";
import { parse as uuidParse, stringify as uuidStringify } from "uuid";

export { base64Decode, base64Encode };

export function uuidToUrl(uuid: string): string {
  return base64Encode(uuidParse(uuid));
}

export function urlToUuid(b64: string): string {
  return uuidStringify(new Uint8Array(base64Decode(b64)));
}
