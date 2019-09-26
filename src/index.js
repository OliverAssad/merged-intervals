#!/usr/bin/env node

import program from "commander";
import { sort, merge } from "./utils";
import { blue, red, green } from "colors";

program
  .command("merge <value>")
  .alias("m")
  .description("merged overlapped intervals")
  .option("-s, --sort", "display the sorted elements")
  .action((value, args) => {
    try {
      const parsed = JSON.parse(`[${value}]`);
      const sorted = sort(parsed);

      if (args.sort) {
        console.log({ sorted });
      }

      const result = merge(sorted);
      console.log("for the input: %s", blue(parsed));
      console.log("\n");

      console.log("Overlaps intervals had been merged to: %s", green(result));
      console.log("\n");
      console.log("------------------------------------");
    } catch (error) {
      console.error("error:", red({ error }));
    }
  });

program.parse(process.argv);
