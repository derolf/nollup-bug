import { test } from "./bug";

try {
  document.body.textContent = test();
} catch (e) {
  document.body.textContent = "Failed " + e;
}
