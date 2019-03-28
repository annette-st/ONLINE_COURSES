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
                <v-layout row wrap p5>
                    <v-flex d-flex md7 pa-1>
                        <v-card>
                            <v-card-title>
                                <div>
                                    <div class="headline">Описание</div>
                                    <span>
                                        {{ courses[0].description }}
                                    </span>
                                </div>
                            </v-card-title>
                        </v-card>
                        <v-layout row wrap>
                            <v-flex>
                            </v-flex>
                        </v-layout>

                    </v-flex>
                    <v-flex md5 pa-1>
                        <v-card>
                            <v-card-title>
                                <div>
                                    <div class="headline">Преподаватели</div>
                                </div>
                            </v-card-title>

                            <v-list two-line>
                                <template v-for="(teacher, index) in courses[0].lecturers">


                                    <v-divider v-if="index > 0 && index < courses[0].lecturers.length " :key="'divider' + index" :inset="true"></v-divider>

                                    <v-list-tile :key="teacher.firstName" avatar @click="">
                                        <v-list-tile-avatar>
                                            <img :src="teacher.avatarUrl">
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="teacher.firstName"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="teacher.description"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </template>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
                </v-container>

                <v-tabs fixed-tabs v-model="active">
                    <!--<v-tab :key="1" ripple>Календарь</v-tab>-->
                    <v-tab :key="2" ripple>Таймлайн</v-tab>
                    <v-tab :key="3" ripple>OPTIONAL FOR SMTH</v-tab>

                    <!--<v-tab-item :key="1">-->
                        <!--<div>-->
                            <!--<v-layout row wrap justify-center>-->
                                <!--<v-flex lg10 xl6>-->
                                    <!--<course-calendar :course="courses[0]"></course-calendar>-->
                                <!--</v-flex>-->
                            <!--</v-layout>-->
                        <!--</div>-->
                    <!--</v-tab-item>-->

                    <v-tab-item :key="1">
                        <div>
                            <v-layout row wrap justify-center>
                                <v-flex sm11>
                                    <course-timeline :course="courses[0]"></course-timeline>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-tab-item>

                    <v-tab-item :key="2">
                        <v-card >
                            <v-card-text>Здесь будет что-нибудь еще (!!!)</v-card-text>
                        </v-card>
                    </v-tab-item>

                </v-tabs>

                <div class="text-xs-center mt-3">
                    <v-btn @click="next">next</v-btn>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import CourseTimeline from 'components/course/CourseTimeline.vue'
    // import CourseCalendar from 'components/course/CourseCalendar.vue'

    export default {
        components: {
            CourseTimeline
            // CourseCalendar
        },
        data () {
            return {
                course: {
                    name: "Пары Java-lab",
                    description: 'Изучаем спринг по Понедельникам. Не прогуливать!!',
                    lecturers: [
                        {firstName: 'Марсель Сидиков', description: 'Head of Java-lab, ITIS', avatarUrl: 'https://sun3.ufanet.userapi.com/c834302/v834302189/c9df0/GbrLxPuW8Bc.jpg'},
                        {firstName: 'Салават Забиров', description: 'Deputy Head of JavaLab', avatarUrl: 'https://pp.userapi.com/c836528/v836528494/3b2e0/MiF6I_CJd0g.jpg'},
                    ],
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