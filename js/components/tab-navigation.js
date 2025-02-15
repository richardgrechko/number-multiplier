Vue.component("tab-navigation",{
    methods:{
        selectTab(t)
        {
            game.settings.tab = t;
        },
        maxAll: () => functions.maxAll(),
    },
    template: `<div class="tab-navigation">
    <button class="tab-button" @click="selectTab('main')">Main</button>
    <button class="tab-button" @click="selectTab('upgrades')">Upgrades</button>
    <button class="tab-button" @click="maxAll()">Max All</button>
</div>`
})
