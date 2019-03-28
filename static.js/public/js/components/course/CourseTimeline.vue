<template>
    <v-timeline align-top>
        <v-timeline-item
                v-for="(item, i) in course.lessons"
                :key="i"
                color="red lighten-2"
                icon="mdi-buffer"
                fill-dot
        >
            <template v-slot:icon>
                <v-avatar>
                    <img :src="item.url">
                </v-avatar>
            </template>
            <template v-slot:opposite>
                <span class="`headline font-weight-bold">{{ item.date + ' ' + item.time}}</span>
            </template>
            <v-card
                    color="red lighten-2"
                    dark
            >
                <v-card-title class="title">{{ item.name}}</v-card-title>
                <v-card-text class="white text--primary">
                    <p>{{item.description}}</p>
                    <v-btn
                            color="red lighten-2"
                            class="mx-0"
                            outline
                    >
                        Скачать все файлы
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {
                    color: 'red lighten-2',
                    icon: 'mdi-star'
                },
                {
                    color: 'purple darken-1',
                    icon: 'mdi-book-variant'
                },
                {
                    color: 'green lighten-1',
                    icon: 'mdi-airballoon'
                },
                {
                    color: 'indigo',
                    icon: 'mdi-buffer'
                }
            ]
        }),
        props: ["course"]
    }
</script>