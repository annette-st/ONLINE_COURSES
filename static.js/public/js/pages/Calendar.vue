<template>
    <v-layout justify-center>
        <v-flex lg8>
            <v-card>
                <v-card
                        class="pa-3"
                        flat
                        height="300px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"></v-card>
                <v-toolbar>
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
                    <course-calendar :course="courses[0]"></course-calendar>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>

</template>



<script>
    import CourseTimeline from 'components/course/CourseTimeline.vue'
    import CourseCalendar from 'components/course/CourseCalendar.vue'
    import axios from 'axios'
    // import Vue from 'vue'
    // let eventApi = Vue.resource("/events")

    export default {
        components: {
            CourseTimeline,
            CourseCalendar
        },
        data () {
            return {
                course: {
                    name: "Пары Java-lab",
                    // description: 'Изучаем спринг по Понедельникам. Не прогуливать!!',
                    // lecturers: [
                    //     {firstName: 'Марсель Сидиков', description: 'Head of Java-lab, ITIS', avatarUrl: 'https://sun3.ufanet.userapi.com/c834302/v834302189/c9df0/GbrLxPuW8Bc.jpg'},
                    //     {firstName: 'Салават Забиров', description: 'Deputy Head of JavaLab', avatarUrl: 'https://pp.userapi.com/c836528/v836528494/3b2e0/MiF6I_CJd0g.jpg'},
                    // ],
                    lessons: [
                        {
                            name: 'Пара по БД',
                            description: 'Изучим тригеры. Будет збс пара, приходите',
                            date: '2019-03-25',
                            time: '14:00',
                            url: 'https://sun3.ufanet.userapi.com/c834302/v834302189/c9df0/GbrLxPuW8Bc.jpg',
                        },
                        {
                            name: 'Пара по Java',
                            description: 'Изучим спринг. Будет збс пара, приходите',
                            date: '2019-03-25',
                            time: '15:40',
                            url: 'https://pp.userapi.com/c836528/v836528494/3b2e0/MiF6I_CJd0g.jpg',
                        },
                        {
                            name: 'Пара по БД',
                            description: 'Изучим тригеры. Будет збс пара, приходите',
                            date: '2019-04-01',
                            time: '14:00',
                            url: 'https://sun3.ufanet.userapi.com/c834302/v834302189/c9df0/GbrLxPuW8Bc.jpg',
                        },
                        {
                            name: 'Пара по Java',
                            description: 'Изучим спринг. Будет збс пара, приходите',
                            date: '2019-04-01',
                            time: '15:40',
                            url: 'https://pp.userapi.com/c836528/v836528494/3b2e0/MiF6I_CJd0g.jpg',
                        }
                    ],
                    isCreator: false,

                },
                active: null,
                courses: []
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
</style>