<template>
    <div class="miniCourse">
        <div class="title">
            <i class="fas fa-graduation-cap"></i>
            <h1 :title="course.title">
                {{course.title}}
            </h1>
        </div>
        
        <div class="info-h">
            <div>
                <h5 :title="course.instructor">Instrutor: {{course.instructor}}</h5>
                <h6 :title="course.institution">Instituição: {{course.institution}}</h6>
            </div>
            <div class="date-time-place">
                <i class="far fa-calendar-alt"></i>
                <i class="far fa-clock"></i>
                <i class="fas fa-map-marker-alt"></i>
                <div>{{course.date}}</div>
                <div>{{course.time}}</div>
                <div>{{course.place}}</div>
            </div>
        </div>
        
        <div class="desc">
            <p>
                {{course.desc}}
            </p>
        </div>
    </div>
</template>

<script src="./miniCourse.ts" lang="ts">
</script>

<style src="./miniCourse.css" scoped>
</style>