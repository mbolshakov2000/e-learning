<template>
  <div>
    <div style="text-align: center; margin-top:20px;"><h2>Раздел 2. Концептуальные модели. ER диаграммы. Сущности и связи. Структуры на атрибутах. Исправленная теорема Хиса. Нормализация. Денормализация</h2></div><br><br>
    <div>
      <h3>Концептуальная модель “Сущность-Связь”. Сущности</h3><br>
      <p>Наиболее известная концептуальная модель “сущность – связь” (Entity-Relationship ERD) предложена Питером Пин Шен Ченом (Peter Chen) в 1976 г. 
        Три основных понятия ER-модели: сущность, связь, атрибут. У сущности есть имя и атрибуты, у атрибута имеется имя и значение. Связи также имеют имя и атрибуты.
        Сущность это объект или процесс, информация об экземплярах которого должна сохраняться в своем наборе записей. Схема сущности определяет схему набора.
        Сущность определяет тип, а не экземпляр. На ER-диаграммах сущность представляется прямоугольником, в котором обязательно указывается имя сущности.
        Дополнительно можно указывать примеры экземпляров сущности. С каждым типом сущности связывается предикат, задающий принадлежность экземпляра сущности типу. Необходимо гарантировать, что экземпляры сущности различимы. Это требование аналогично требованию отсутствия записей-дубликатов или кортежей в реляционных таблицах.
        Сущности бывают вещными или процессными.
        В общем случае сущности бизнеса описываются предикатами более сложными чем в логике первого порядка. В них могут существовать разносортные атрибуты, в том числе, атрибуты-ресурсы., неортогональные атрибуты.</p>
      <img src="../assets/16.png" style="width: 400px;"/><br><br>
      <h3>Связи</h3><br>
      <p>Связь – это тѝповое понятие, устанавливающее правила связывания сущностей. Каждый экземпляр типа связи, устанавливается между экземплярами типа сущности. Может существовать рекурсивная связь между типом сущности и им же самим (как бы его дубликатом).       
       Концы бинарной связи в ER-модели характеризуются:</p>
      <p> – степенью конца связи (сколько экземпляров данного типа сущности должно присутствовать в каждом экземпляре данного типа связи); </p>
      <p> – обязательностью связи (т. е. любой ли экземпляр связываемой сущности должен участвовать в некотором экземпляре данного типа связи).</p>
      <p>В продвинутых системах могут использоваться имена ролей (имена концов связи), определяющие функции связи по отношению к связываемым сущностям.</p>
      <img src="../assets/17.png" style="width: 600px;"/><br><br>
      <h3>Атрибуты. Атомарность.</h3><br>
      <p>Атрибут это свойство сущности или связи, получаемое путем наблюдения или измерения. Информацию об экземпляре сущности выражают набором нескольких пар “атрибут – значение”.
        Атрибут принимает одно или несколько значений из некоторого набора.
        Значения атрибутов обычно принадлежат одному типу, но возможны бестиповые атрибуты. На ER-диаграммах типы  атрибутов не указывают.
        Свойство атомарности атрибута корректно определяется только в рамках выбранной семантики. Атрибут атомарный, если его компоненты не имеют смысла или не должны быть выделены в этой семантике. Атрибут, атомарный в одной семантике, может быть неатомарным в другой.</p>
      <p>Пример: Если, например, мы обещаем никогда не интересоваться отдельно фамилией именем и отчеством, то атрибут ФИО, то есть “Фамилия, имя, отчество” атомарный. Если эти компоненты нам нужны, то ФИО неатомарный атрибут.</p>
      <p>Замечание: В моделях данных основанных на реляционной алгебре и исчислениях на кортежах и доменах  атрибуты должны быть атомарными. Однако, в современных СУБД над основной моделью имеется второй слой  -- XML и/или регулярные выражения -- позволяющий работать с регулярными выражениями и текстами XML, которые на нижнем уровне считаются атомарными, то есть не структурируемыми.</p>
      <br><h3>Атрибуты. Атомарность.</h3><br>
      <p>Некоторые сорта атрибутов (может быть, пересекающиеся!):</p>
      <ul>
        <li>Ключевые атрибуты, однозначно определяющие экземпляр сущности. Это ключи первичные, уникальные, альтернативные, суррогатные.</li>
        <li>Неуникальные ключи.</li>
        <li>Атрибуты состояния. Не ключевые и не темпоральные.</li>
        <li>Темпоральные атрибуты задающие моменты или интервалы времени для экземпляра сущности или его компонентов.</li>
        <li>Атрибуты ресурсов, представляющих какую-то часть сущности-ресурса доступную экземплярам другой сущности (я и 100000 р. в кармане). Хранятся в сущностях-контейнерах.</li>
        <li>Атрибуты допускающие отсутствие значения (Null).</li>
        <li>Атрибуты, вычислимые по данным одного или нескольких кортежей, находящихся, быть может, в нескольких отношениях. или атрибуты, связанные отношениями. Пример — нарастающий итог;</li>
        <li>Атрибуты связанные по смыслу. Один из атрибутов (поясняющий) доопределяет другой. Например, пары “Вес” и “Единица измерения веса”, результат измерения и шкала. Образуется блок атрибутов.</li>
        <li>Атрибуты, вводимые пользователем и расширяющие семантику данных.</li>
        <li>Необязательные атрибуты. В полуструктурированных данных часть атрибутов обязательна, а другие атрибуты, не обязательные, могут существовать только у некоторых экземпляров сущности.</li>
        <li>Атрибуты, заданные на лингвистических переменных. </li>
      </ul><br>
      <p>Замечание: Существуют концепты без атрибутов. Их содержание выявляется и уточняется через связи.</p>
      <br><h3>Блоки атрибутов</h3><br>
      <p>“Блок” (“блок атрибутов”) это набор атрибутов, объединённых общей семантикой. Пример: первичный ключ из одного или нескольких столбцов</p>
      <p>Блок имеет трёхчастную структуру:</p>
      <p>-- первая компонента указывает, к чему прикрепляется блок;</p>
      <p>-- вторая указывает, какие значения смыслов прикрепляются;</p>
      <p>-- третья компонента – роли блоков и входящих в них двух предыдущих компонент; часто отсутствует, иногда содержится вне сущности, например, в метаданных (в словаре) и в комментариях; часто эта компонента предполагается, но не фиксируется в схеме.</p>
      <p>Пример: первичный ключ; прикрепление к строке задается метаданными; вторая компонента – перечень столбцов ключа; третья – определяется неявно сервером БД при реализации команды CREATE TABLE.</p>
      <p>Блоки могут образовываться композициями других блоков, в частности вкладываться один в другой. 
      Пример: Таблица с зависимостью от части ключа (см. приведение к 2НФ).
      Важно: Некоторые блоки должны быть выделены в отдельную сущность.</p>
      <br><h3>Атрибуты связей</h3><br>
      <p>Для представления связей с арностью больше двух используем ассоциативную таблицу. Выделим две разновидности атрибутов связей:</p>
      <p> - Атрибуты привязки, через которые осуществляется привязка к связываемым сущностям.</p>
      <p> - Эмерджентные атрибуты, определяющие свойства проявляющиеся только при наличии связи.</p>
      <p>Пример: Сущности “Работник” и “Проект” со связью “Проект - Работник”, содержащей атрибуты связи “Номер_работника”, “Номер_проекта” 
      и эмерджентный атрибут свойства связи “Ресурс_времени”. Его смысл “Плановые затраты времени работника на деятельность в рамках проекта с указанным номером_проекта”.</p>
      <p>Важно: Атрибуты связей  также могут объединяться в блоки.</p>
      <br><h3>Обозначения на ER-диаграммах</h3><br>
      <p>В теории</p>
      <img src="../assets/18.png" style="width: 400px;"/><br>
      <p>В инструментальных средствах</p>
      <img src="../assets/19.png" style="width: 400px;"/><br>
      <p>В Oracle SQL Developer Data Modeller</p>
      <img src="../assets/20.png" style="width: 400px;"/><br>
      <br><h3>Аномалии</h3><br>
      <p>Рассмотрим модельную семантику, в которой изучаемый объект это фрагмент концептуальные модели, а опорный объект это фрагмент модели предметной области.
      Аномалиями в какой семантике (обычно, просто аномалиями) называются несоответствия этих моделей, проявляющиеся при выполнении вставки, обновления и удаления данных.</p>
      <p style="font-weight: bold;">Аномалия вставки.</p>
      <p>Пример: Таблица “Заготовки” для “Конторы по заготовке когтей и хвостов”</p>
      <img src="../assets/21.png" style="width: 800px;"/><br>
      <p>Запись нового заготовителя не сдавшего пока ни когтей, ни хвостов приведёт к дописыванию Null’ов по крайней мере в два последних столбца. В предметной области такого действия нет!</p>
      <p style="font-weight: bold;">Аномалия обновления</p>
      <p>Если кроме таблицы “Заготовки” имеется таблица “Адреса заготовителей” то, при смене фамилии заготовителя, необходимо либо поменять фамилию в обеих таблицах, либо везде уточнить,  до какой даты использовать старую фамилию , а затем новую. Хорошо бы где-то  сохранить сам факт смены фамилии. Причина – дублирование данных. Оно может быть многократным.</p>
      <p style="font-weight: bold;">Аномалия удаления.</p>
      <p>Пример: Та же таблица “Заготовки”</p>
      <img src="../assets/22.png" style="width: 800px;"/><br>
      <p>Если запись с некоторым заготовителем единственная, то удаление заготовки приведёт к удалению самого заготовителя. Необходимо вместо удаления выполнить обновление записи.</p>
      <br><h3>Первая нормальная форма (1НФ). Выравнивание сущностей</h3><br>
      <img src="../assets/23.png" style="width: 800px;"/><br>
      <br><h3>Шаблон транспонирования отношения</h3><br>
      <p>На стадии анализа могут возникнуть отношения в которых затруднительно или не возможно заранее определить полный список атрибутов. 
      Нет ничего хуже базы данных, в которой при эксплуатации приходится менять структуру данных. 
      Часто подобная ситуация возникает при использовании нескольких атрибутов, близких по смыслу, отражающих концепты родственные в каком-то отношении. Например:</p>
      <p> - телефон домашний,</p>
      <p> - телефон мобильный,</p>
      <p> - телефон служебный.</p>
      <p>А почему не может быть ещё телефон на даче, телефон секретаря и т.д.? Конец мучительным раздумьям на тему “Сколько может быть телефонов?” кладёт транспонирование отношения с телефонами к такому виду:</p>
      <img src="../assets/24.png" style="width: 800px;"/><br>
      <p>Это пример реализации шаблона “Транспонирование …” для перехода от таблицы со схемой, изменяемой при манипуляции данных к таблице с изменяемым набором строк.
      Обобщая пример, получите шаблон транспонирования отношения.</p>
      <br><h3>Пример приведения к 1НФ (способ выделения в отдельную сущность)</h3><br>
      <img src="../assets/25.png" style="width: 600px;"/><br>
      <br><h3>Правила приведения к 1НФ способом выделения в отдельное отношение</h3><br>
      <p>Разделить составные атрибуты (в примере это “Дата зачисления и увольнения”) на простые (атомарные) (в примере это “Дата зачисления” и “Дата увольнения”)</p>
      <p>Выделить “повторяющиеся” (близкие по смыслу) атрибуты (в примере это “Хобби_i” и “Тлф_j”), обращая внимание на их семантику и учтя, что все атрибуты группы зависят от ключа исходного отношения. Свернуть выделенные группы, используя как атрибут общее имя сущностей выделенных в группу и, может быть добавив атрибуты свойств группы в соответствии с шаблоном транспонирования отношения.</p>
      <p>Для каждой группы используя теорему Хиса, создать новую справочную сущность / отношение, ключ которой состоит из ключа исходного отношения и полученного обобщающего атрибута, а свойства группы находятся в неключевой области.</p>
      <p>Установить идентифицирующую связь типа 1:N от исходной сущности к каждой созданной справочной сущности</p>
      <p>Замечание: Заметьте, что неключевых атрибутов в новых сущностях в примере не существует. Они появятся, если атрибуты в группе имеют имя и значение</p>
      <br><h3>Два способа приведения к 1НФ</h3><br>
      <img src="../assets/26.png" style="width: 800px;"/><br>
      <br><h3>Сильные и слабые сущности</h3><br>
      <p>Вспомним, что сущности (и отношения) бывают двух видов: слабые (зависимые) и сильные (независимые). </p>
      <p>Сильная сущность существует “сама по себе”. Первичные ключи у нее тоже свои, то есть определяются только своими атрибутами (свойствами). На ER-диаграммах в ERWin сильные сущности представляются прямоугольниками. </p>
      <p>Слабая сущность для идентификации своих экземпляров требует привязки к экземпляру связанной с ней, другой сильной или слабой, сущности. Первичный ключ слабой сущности использует ключевые поля этой связанной с ней сущности. Происходит миграция первичного ключа сильной сущности в первичный ключ связанной слабой сущности. На ER-диаграмме в ERWin слабая сущность представляется прямоугольником с закругленными углами.</p>
      <p>Замечание: Не следует считать, что слабая сущность определяется через связь только с сильной сущностью. На другом конце связи может быть и другая слабая сущность.</p>
      <br><h3>Зависимости от части ключа. 2НФ</h3><br>
      <p>Может оказаться, что кроме функциональной зависимости всех ключевых атрибутов от всего ключа, существуют зависимости неключевых атрибутов от части ключа. Пример: В приведенном ниже отношении “Доходы_совместителей” поле “ИНН” однозначно определяет поле “Ф.И.О.”:</p>
      <img src="../assets/27.png" style="width: 800px;"/><br>
      <br><h3>Определения 2НФ</h3><br>
      <p>Определение: Если набор атрибутов  B = {Bj}  зависит от всего набора атрибутов A = {Ai},  но не зависит от части этого набора, то говорят, что функциональная зависимость 
      f: A -> B  полная (или, в другой терминологии, неприводимая слева). </p>
      <p>Определение 2НФа (через атрибуты): Отношение в 1НФ находится в 2НФ, если ни один атрибут вне первичного ключа не находится в функциональной зависимости от атрибутов, образующих часть ключа.</p>
      <p>Определение 2НФк (через ключи): Отношение в 1НФ находится в 2НФ, если каждый неключевой атрибут, находится в полной функциональной зависимости от ключа.</p>
      <p>Замечание 1: Определения 2НФа и 2НФк эквивалентны.</p>
      <p>Замечание 2: Если единственный ключ отношения в 1НФ является простым (не конкатенированным), то отношение в 1НФ уже находится в 2НФ.</p>
      <br><h3>Правило приведения к 2НФ</h3><br>
      <p>Выделить неключевые атрибуты, зависящие  от части первичного ключа. Иначе говоря, найти функциональные зависимости группы неключевых атрибутов от части атрибутов ключа.</p>
      <p>Для каждой такой функции в соответствии с теоремой Хиса создать новую сущность; все ее атрибуты входят в соответствующую  функциональную зависимость.</p>
      <p>Вычеркнуть атрибуты-значения найденной функции в исходной сущности, первичный ключ которой останется неизменным.</p>
      <p>Установить идентифицирующую связь 1:N или N:1 от исходной сущности к созданной сущности.</p>
      <p>Продолжить процесс поиска функциональных зависимостей неключевых атрибутов от частей ключа.</p>
      <p>Замечание: Образованные группы атрибутов не могут быть не осмысленными, так как аргументы используемых функций входят в состав ключа исходной сущности.</p>
      <br><h3>Пример приведения к 2НФ (в ERWin)</h3><br>
      <img src="../assets/28.png" style="width: 800px;"/><br>
      <br><h3>Правило приведения к 3НФ</h3><br>
      <p>Найти функциональную зависимость неключевых атрибутов от других неключевых атрибутов.</p>
      <p>Создать новую сущность. Проверить её на осмысленность. В соответствии с теоремой Хиса все атрибуты осмысленной новой сущности входят в  найденную функциональную зависимость.</p>
      <p>Вычеркнуть атрибуты-значения найденной функции в исходной сущности.</p>
      <p>Установить неидентифицирующую связь от созданной сущности к исходной сущности.</p>
      <p>Продолжить процесс поиска функциональных зависимостей неключевых атрибутов от других неключевых атрибутов.</p>
      <br><h3>Пример приведения к 3НФ (в ERWin)</h3><br>
      <img src="../assets/29.png" style="width: 800px;"/><br>
      <br><h3>Нормальная форма Бойса-Кодда (Boyce-Codd)</h3><br>
      <p>Исходное определение 3НФ основывается на предположении о том, что первичный ключ единственный. Может оказаться, что:</p>
      <p> - отношение имеет два или более ключа-кандидата (альтернативных ключа);</p>
      <p> - по крайней мере два из них конкатенированы;</p>
      <p> - некоторые из конкатенированных ключей перекрываются (имеют общие атрибуты).</p>
      <p>В этом случае после получения 3НФ необходимо привести отношения к нормальной форме Бойса-Кодда, сокращённо, НФБК. Ещё её называли исправленной третьей нормальной формой.</p>
      <p>Какие функциональные зависимости должны быть исследованы при приведении к НФБК?
      Пусть ранее приводили отношение к 1НФ, 2НФ и 3НФ, но не заметили пересекающихся ключей и работали только с одним из них.
      Тогда следует проверить только функции, действующие из атрибутов одного ключа, не принадлежащих пересечению ключей, в атрибуты второго ключа, не принадлежащие первому.</p>
      <img src="../assets/30.png" style="width: 400px;"/><br>
      <br><h3>ФЗ и определения НФБК</h3><br>
      <p>Тривиальная и неприводимая слева  функциональные зависимости:</p>
      <p>Определение 1 (Тривиальная функциональная зависимость): ФЗ  f:  A->B  тривиальна тогда и только тогда, когда правая часть функциональной зависимости является подмножеством (не обязательно собственным) левой части, то есть B⊆A.</p>
      <p>Определение 2 (Функциональная зависимость неприводимая слева): ФЗ называется неприводимой слева, если ни один атрибут в левой части не может быть опущен без разрушения функциональной зависимости.</p>
      <p>Определения НФБК:</p>
      <p>Определение 1 (НФБК): Отношение находится в НФБК тогда и только тогда, когда каждая нетривиальная и неприводимая слева функциональная зависимость имеет аргументом ключ.</p>
      <p>Определение 2 (НФБК): Отношение находится в НФБК тогда и только тогда, когда аргументы любой функциональной зависимости есть ключи.</p>
      <p>Чего не должно быть в отношении находящемся в НФБК: Если ранее приводили отношение к 1НФ, 2НФ и 3НФ, то функциональных зависимостей, действующих из атрибутов принадлежащих только одному из пересекающихся ключей в атрибуты принадлежащие только другому ключу.</p>
      <br><h3>Правила преобразования в НФБК</h3><br>
      <p>1.Если вы шли последовательно (1НФ, 2НФ, 3НФ), то правила для приведения к НФБК совпадают с правилами для 3НФ. Отличия только в анализируемых функциях.</p>
      <p>2.Можно получить сразу НФБК, если проверять, что “каждая нетривиальная и неприводимая слева функциональная зависимость имеет аргументом ключ” либо что “аргументы любой функциональной зависимости есть ключи”.</p>
      <p>3. Связь между образовавшимися сущностями неидентифицирующая, как в 3НФ.</p>
      <p>Пример преобразования в НФБК</p>
      <img src="../assets/31.png" style="width: 600px;"/><br>
      <img src="../assets/32.png" style="width: 600px;"/><br>
      <br><h3>Денормализация</h3><br>
      <p> На начальном этапе проектирования схемы данных достаточно рассмотреть модельную семантику построенную на отображениях схемы в модель бизнеса. Как известно, цель нормализации -- устранение аномалий. Заметим, что, как правило, при нормализации уменьшается избыточность.</p>
      <p>На следующем этапе проектирования может быть поставлена задача увеличения производительности. Для реализации этой цели в частности может быть использовано денормализация -- повышение производительности запросов за счёт введения избыточности данных.</p>
      <p>Конечно, принимать решение о денормализации необходимо анализируя критические запросы и команды манипулирования данными, то есть такие, которые часто выполняются, обрабатывают большие объемы данных, или пользователи считают, что они в каком-то смысле важны.</p>
      <p>Обычно денормализация повышает производительность запросов за счёт уменьшения производительности команд манипулирования данными.</p>
      <p>Существует ещё два способа повышение быстродействия:</p>
      <p> - управление индексами;</p>
      <p> - изменение модульной структуры.</p>
      <p>Важно помнить, что при изменении потока инструкций выполненная ранее денормализация может стать вредной. Из сказанного ясно, что прагматика “повышение быстродействия” связана с теоретико-модельной семантикой, основанной на отображении схемы данных в модель, представляющую потоки инструкций и набор способов вычислений внутри схемы.</p>
      <br><h3>Виды денормализации</h3><br>
      <p>Денормализация реализуется за счёт:</p>
      <p>-- соединения таблиц;</p>
      <p>-- разделения таблиц;</p>
      <p>-- переноса данных по схеме.</p>
      <p>Варианты реализации шаблона денормализации: </p>
      <p> 1. Разделение таблиц с первичными данными (Split Tables)</p>
      <p> 2. Соединения таблиц с первичными данными (Pre-Joined Tables)</p>
      <p> 3. Перенос данных из одних компонентов схемы в другие</p>
      <p> 3.1. вычислимых столбцов (Derivable Data) </p>
      <p> 3.2. нисходящая денормализация в шаблоне мастер - деталь</p>
      <p> 3.3. восходящая денормализация в шаблоне мастер - деталь</p>
      <p> 3.4. перенос данных из одних компонентов схемы в другие</p>
      <p> 3.5. Зеркалирование таблиц или подсхем (Mirror Tables) </p>
      <p> 4. Report Tables (таблицы отчётов)</p>
      <br><h3>Пример денормализации за счёт разделения</h3><br>
      <p>Так называемая сверхномализация.</p>
      <p>Обнаружено, что запросы к проблемной таблице Tab1 обращаются чаще к коротким столбцам 1, 2, 5, 6 шириной, например, по 5 байт, чем к широким столбцам 3 и 4 шириной 12 кбайт и 64 кбайт, соответственно. </p>
      <p>Ключ образуют столбцы 1 и 2. </p>
      <p>Проведем денормализацию. Разделим таблицу на две –  Tab1_1, включающую широкие  столбцы 3, 4, и Tab1_2 с узкими столбцами. Ключ у новых таблиц тот же. Скорость запросов извлекающих столбцы 1, 2, 5, 6 возрастет, но теперь вместо одной команды вставки, удаления  и обновления исходной таблицы необходимо выполнять по две соответствующих команды для Tab1_1 и Tab1_2, причём обе команды должны быть выполнены обязательно.</p>
      <img src="../assets/33.png" style="width: 600px;"/><br>
      <br><h3>Нисходящая денормализация</h3><br>
      <img src="../assets/34.png" style="width: 600px;"/><br>
      <br><h3>Восходящая денормализация</h3><br>
      <img src="../assets/35.png" style="width: 200px;"/><br>
      <br><h3>Контрольные вопросы</h3><br>
      <p>1. Что такое атрибут? Перечислите сорта атрибутов.</p>
      <p>2. Что такое аномалии? Приведите примеры.</p>
      <p>3. Правило приведения к 1НФ, 2НФ, 3НФ.</p>
      <p>4. Какие сущности называются сильными и слабыми?</p>
      <p>5. Что такое денормализация и для чего её применяют?</p>
      <br><h3>Задание 2</h3><br>
      <p>Найти ошибки в работе по спецификации бизнеса, разработке требований к информационной системе и разбиения на модули.</p>
      <h3>Пример</h3>
      <a href = "https://disk.yandex.ru/i/KzhfS3pYDXZMJw">Проект 1</a>
      <br><br><h3>Решение</h3>
      <a href = "https://disk.yandex.ru/d/uECntZknylNcEQ">Проект 1. Решение</a>
      <br><br><h3>Задачи для самостоятельного решения</h3>
      <a href = "https://disk.yandex.ru/i/83SgRGr3jujRYg">Проект 2</a><br>
      <a href = "https://disk.yandex.ru/i/wMibFZ4-_GGcvw">Проект 3</a>
    </div><br>
    <div>
      <iframe src="https://forms.yandex.ru/u/6560ca4a3e9d0832b91130fb/?iframe=1" frameborder="0" name="ya-form-6560ca4a3e9d0832b91130fb" width="650"></iframe>
    </div>
  </div>
</template>


<script>
export default {
  // eslint-disable-next-line
  name: 'Section2',
  props: {
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
