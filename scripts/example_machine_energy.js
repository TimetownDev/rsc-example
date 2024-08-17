function tick(info) {
    var machine = info.machine();
    var location = info.block().getLocation();
    machine.removeCharge(location, 100);
}

function onPlace(event) {
    var player = event.getPlayer();
    sendMessage(player, "The block has been placed");
}

function onBreak(event, itemStack, drops) {
    var player = event.getPlayer();
    sendMessage(player, "The block has been broken");
}