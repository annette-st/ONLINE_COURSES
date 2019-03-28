<template>
    <v-app>

        <!--<v-toolbar app></v-toolbar>-->
        <v-content>
            <v-container >
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>

    export default {
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                mini: true,
                right: null
            }
        }
    }
</script>


<style>

</style>
