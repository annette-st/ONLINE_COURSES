<template>
    <v-layout justify-center>
        <v-flex lg8>
            <v-card>
                <v-card
                        class="pa-3"
                        flat
                        height="300px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"></v-card>
                <v-toolbar id="link-toolbar">
                    <v-flex tag="h1" class="headline">{{ courses[0].name }}</v-flex>
                    <v-spacer></v-spacer>

                    <v-toolbar-items>
                            <v-btn flat>Главная</v-btn>
                            <v-btn flat>Календарь</v-btn>
                            <v-btn flat>Все файлы</v-btn>
                            <v-btn id="add" color="error" fab large dark>
                                <v-icon>add</v-icon>
                            </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container>
                    <v-card
                            class="mx-auto"
                            max-width="850"
                    >
                        <v-sheet class="pa-3 primary lighten-2">
                            <v-text-field
                                    v-model="search"
                                    label="Search Company Directory"
                                    dark
                                    flat
                                    solo-inverted
                                    hide-details
                                    clearable
                                    clear-icon="mdi-close-circle-outline"
                            ></v-text-field>
                            <v-checkbox
                                    v-model="caseSensitive"
                                    dark
                                    hide-details
                                    label="Case sensitive search"
                            ></v-checkbox>
                        </v-sheet>
                        <v-card-text>
                            <v-treeview
                                    :items="items"
                                    :search="search"
                                    :filter="filter"
                                    :open.sync="open"
                            >
                                <template v-slot:prepend="{ item }">
                                    <v-icon
                                            v-if="item.children"
                                            v-text="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
                                    ></v-icon>
                                </template>
                            </v-treeview>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>

</template>



<script>
    import axios from 'axios'
    // import Vue from 'vue'
    // let eventApi = Vue.resource("/events")
9
    export default {
        data () {
            return {
                course: {name: "Пары Java-lab",
                        isCreator: false},
                active: null,
                courses: [],

                items: [
                    {
                        id: 1,
                        name: "Пары Java-lab",
                        children: [
                            {
                                id: 2,
                                name: 'Презентации',
                                children: [
                                    {
                                        id: 201,
                                        name: 'презенташка1'
                                    },
                                    {
                                        id: 202,
                                        name: 'презенташка2'
                                    },
                                    {
                                        id: 203,
                                        name: 'презенташка3'
                                    },
                                    {
                                        id: 204,
                                        name: 'презенташка4'
                                    },
                                    {
                                        id: 205,
                                        name: 'презенташка5'
                                    }
                                ]
                            },
                            {
                                id: 3,
                                name: 'PDF-файлы',
                                children: [
                                    {
                                        id: 301,
                                        name: 'пдфка1'
                                    },
                                    {
                                        id: 302,
                                        name: 'пдфка2'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                open: [1, 2],
                search: null,
                caseSensitive: false

            }
        },


        computed: {
            filter () {
                return this.caseSensitive
                    ? (item, search, textKey) => item[textKey].indexOf(search) > -1
                    : undefined
            }
        },


        methods: {
            next () {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0)
            }
        },
        beforeCreate() {
            console.log("dgdgdfgdfgdfgdr")
        },
        created() {
            this.courses.push(this.course)
            // let id = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
            // console.log(id)
            //
            // axios.get("/event/" + id).then(res => {
            //     console.log(res);
            //     console.log(res);
            //     this.courses.push(res.data)
            // }).catch(err => this.courses.push(this.course))
        }
    }
</script>

<style scaped>
    #add {
        margin-top: -64px;
    }

    #link-toolbar {
        background-color: white;
        margin-bottom: 10px;
    }

</style>