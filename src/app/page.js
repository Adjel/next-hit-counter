import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  const json = readFile(DATABASE_PATH);
  const hits = JSON.parse(json);
  writeFile(DATABASE_PATH, JSON.stringify({ hits: hits + 1 }));
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {hits.hits}.</p>
    </main>
  );
}

export default Home;
