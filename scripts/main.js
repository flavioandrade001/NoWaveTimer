
Events.on(WorldLoadEvent, event => {
    if(Vars.state.rules.waveTimer) {
        Vars.state.rules.waveTimer = false;
    }
})