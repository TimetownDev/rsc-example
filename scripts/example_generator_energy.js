function tick(info) {
    var generator = info.machine();
    // nothing to do
}

function onPlace(event) {
    var player = event.getPlayer();
    sendMessage(player, "The block has been placed");
}

function onBreak(event, itemStack, drops) {
    var player = event.getPlayer();
    sendMessage(player, "The block has been broken");
}