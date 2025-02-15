Vue.component("tab-navigation",{
    methods:{
        selectTab(t)
        {
            game.settings.tab = t;
        },
        maxAll: () => functions.maxAll(),
    },
    template: `<div class="tab-navigation">
    <tab-button @click="selectTab('main')">Main</tab-button>
    <tab-button @click="selectTab('upgrades')">Upgrades</tab-button>
    <button @click="maxAll()">Max All</button>
</div>`
})
