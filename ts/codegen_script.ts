import codegen from "@cosmwasm/ts-codegen";

codegen({
  contracts: [
    { name: "DutchAuctionLaunchpad", dir: "../schema" },
  ],
  outPath: "./types/",
  options: {
    bundle: {
      bundleFile: "index.ts",
      scope: "contracts",
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    reactQuery: {
      enabled: true,
      optionalClient: false,
      version: "v3",
      mutations: false,
      queryKeys: false,
    },
    recoil: {
      enabled: false,
    },
    messageComposer: {
      enabled: true,
    },
  },
})
  .then(() => {
    console.log("Ts codegen success");
  })