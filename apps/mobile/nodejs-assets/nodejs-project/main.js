var rn_bridge = require('rn-bridge');
var server = require('dist/main.cjs');

// Echo every message received from react-native.
rn_bridge.channel.on('message', async (msg) => {
  // const startTriliumServer = (await import("./ASD.JS"));
  // await startTriliumServer();
  rn_bridge.channel.send(Object.keys(server).join(', '));
} );

// Inform react-native node is initialized.
rn_bridge.channel.send("Node was initialized.");