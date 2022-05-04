import { urlToUuid, uuidToUrl } from "./index";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("uuidToUrl", () => {
  assert.is(
    uuidToUrl("376a4cca-9431-44f0-bc04-054faffba9b1"),
    "N2pMypQxRPC8BAVPr_upsQ"
  );
});

test("urlToUuid", () => {
  assert.is(
    urlToUuid("N2pMypQxRPC8BAVPr_upsQ"),
    "376a4cca-9431-44f0-bc04-054faffba9b1"
  );
});

test.run();
