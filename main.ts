player.onChat("tpAP", function () {
    agent.teleportToPlayer()
})
player.onChat("tpAW", function (num1, num2, num3) {
    agent.teleport(world(num1, num2, num3), WEST)
})
