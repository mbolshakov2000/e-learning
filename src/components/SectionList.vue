<template>
  <div class="hello">
    <h1>Работа с СУБД Oracle</h1>
    <div style="display:flex;align-items: center; justify-content: center; flex-flow: row wrap;">
      <OneSection
        v-for="section in sections"
        :key="section.id"
        :id = "section.id"
        :title="section.title"
        :body="section.body"
        :image="section.image"
      />
    </div>
  </div>
</template>

<script>
import OneSection from './OneSection.vue'
export default {
  name: 'SectionList',
  props: {
    msg: String
  },
  components: {
    OneSection
  },
  data() {
    return {
      sections: [
        {
            id: 1,
            title: "Раздел 1",
            body: "Бизнес-процессы, семантики и концептуальная модель данных",
            image: "47.png"
        },
        {
            id: 2,
            title: "Раздел 2",
            body: "Концептуальные модели. ER диаграммы. Сущности и связи. Структуры на атрибутах. Исправленная теорема Хиса. Нормализация. Денормализация",
            image: "48.png"
        },
        {
            id: 3,
            title: "Раздел 3",
            body: "Основы SQL",
            image: "49.png"
        },
        {
            id: 4,
            title: "Итоговое тестирование",
            body: "Проверка знаний, полученных в ходе прохождения курса",
            image: "50.jpg"
        },
        {
            id: 5,
            title: "Итоговое задание",
            body: "Проверка знаний, полученных в ходе прохождения курса",
            image: "51.jpg"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.progress-bar {
  height: 4px;
  background-color: rgba(5, 114, 206, 0.2);
  width: 50%;
  margin: 10px auto;
  overflow: hidden;
}

.progress-bar-value {
  width: 100%;
  height: 100%;
  background-color: rgb(5, 114, 206);
  animation: indeterminateAnimation 1s infinite linear;
  transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}

.v-progress-circular {
  margin: 1rem;
}
</style>
