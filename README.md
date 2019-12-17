# PricecoinX RPC Explorer

A fork of the Bitcoin network explorer, by janoside adapted for PricecoinX.
The original README of the project can be found here https://github.com/janoside/btc-rpc-explorer


# Features

* Browse blocks
* View block details
* View transaction details, with navigation "backward" via spent transaction outputs
* View JSON content used to generate most pages
* Search by transaction ID, block hash/height, and address
* Optional transaction history for addresses by querying from ElectrumX, blockchain.com, blockchair.com, or blockcypher.com
* Mempool summary, with fee, size, and age breakdowns
* RPC command browser and terminal

# Changelog / Release notes

See [CHANGELOG.md](/CHANGELOG.md).

# Getting started

## Prerequisites

1. Install and run a full, archiving node - [instructions](https://bitcoin.org/en/full-node). Ensure that your PricecoinX node has full transaction indexing enabled (`txindex=1`) and the RPC server enabled (`server=1`).
2. Synchronize your node with the PricecoinX network.
3. "Recent" version of Node.js (8+ recommended).

## Instructions

```bash
npm install -g btc-rpc-explorer
btc-rpc-explorer
```

If you're running on mainnet with the default datadir and port, this Should Just Work.
Open [http://127.0.0.1:3002/](http://127.0.0.1:3002/) to view the explorer.

You may set configuration options in a `.env` file or using CLI args.
See [configuration](#configuration) for details.

### Configuration

Configuration options may be passed as environment variables
or by creating an env file at `~/.config/btc-rpc-explorer.env`
or at `.env` in the working directory.
See [.env-sample](.env-sample) for a list of the options and details for formatting `.env`.

You may also pass options as CLI arguments, for example:

```bash
btc-rpc-explorer --port 8080 --bitcoind-port 18443 --bitcoind-cookie ~/.bitcoin/regtest/.cookie
```

See `btc-rpc-explorer --help` for the full list of CLI options.

## Run via Docker

1. `docker build -t btc-rpc-explorer .`
2. `docker run -p 3002:3002 -it btc-rpc-explorer`
