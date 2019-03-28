<template >
    <v-layout>
        <v-flex>
            <v-sheet height="500">
                <v-calendar
                        :now="today"
                        :value="today"
                        color="primary"
                >
                    <template v-slot:day="{ date }">
                        <template v-for="event in eventsMap[date] ">
                            <v-menu
                                    :key="event.name"
                                    v-model="event.open"
                                    full-width
                                    offset-x
                            >
                                <template v-slot:activator="{ on }">
                                    <div

                                            v-ripple
                                            class="my-event"
                                            v-on="on"
                                            v-html="event.name"
                                    ></div>
                                </template>
                                <v-card
                                        color="grey lighten-4"
                                        min-width="350px"
                                        flat
                                >
                                    <v-toolbar
                                            color="primary"
                                            dark
                                    >
                                        <v-btn icon>
                                            <v-icon>edit</v-icon>
                                        </v-btn>
                                        <v-toolbar-title v-html="event.name"></v-toolbar-title>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            <v-icon>favorite</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                            <v-icon>more_vert</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-card-title primary-title>
                                        <span v-html="event.description"></span>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn
                                                flat
                                                color="secondary"
                                        >
                                            Cancel
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-menu>
                        </template>
                    </template>
                </v-calendar>
            </v-sheet>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ["course"],
        data: () => ({
            // today: (new Date()).toISOString().split('T')[0],
            // course: this.course
        }),
        methods: {
            open (event) {
                alert(event.title)
            },
        },
        created() {

        },
        computed: {
            eventsMap () {
                let self = this;
                const map = {}
                self.course.lessons.forEach(e => (map[e.date] = map[e.date] || []).push(e))
                console.log(map);
                return map
            },
            today() {
                return (new Date()).toISOString().split('T')[0];
            }
        }
    }
</script>

<style scoped>
    .my-event {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 2px;
        background-color: #1867c0;
        color: #ffffff;
        border: 1px solid #1867c0;
        width: 100%;
        font-size: 12px;
        padding: 3px;
        cursor: pointer;
        margin-bottom: 1px;
    }
</style>