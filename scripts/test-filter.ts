import { fetchAndFilterInscriptions } from "../src/ordinals-api";

const [indexStr] = process.argv.slice(2);

async function run() {
  const index = indexStr ? parseInt(indexStr) : 203000;
  const filtered = await fetchAndFilterInscriptions(index - 1);
  // const list = await fetchOrdinals(index - 1);
  // const filtered = await filterInscriptions(list);
  const name = filtered.inscriptions.slice(0, 1).map((i) => i._name)[0];
  if (name) {
    console.log({ name, encoded: encodeURIComponent(name) });
    console.log(encodeURIComponent(name));
  }
  console.log("max ID:", filtered.maxId);
}

run()
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
