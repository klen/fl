import { TTableItem } from "@/types"
import { parseTable } from "../../utils"

const dungeonAgeData = `
range;type;age
11-12;До сдвига;1100-4000
13-26;До кровавого тумана;300-1110
31-40;Во время Ольховых войн;305-360
41-64;Во время кровавого тумана;5-280
65-66;После кровавого тумана;1-5
`.trim()

export const dungeonAgeTable: TTableItem<{ type: string; age: [number, number] }>[] = parseTable(
  dungeonAgeData
).map((item) => ({
  ...item,
  data: {
    ...item.data,
    age: item.data.age.split("-").map((n) => parseInt(n)),
  },
}))

const dungeonSizeTable = `
range;type;size
1-2;Маленькое;1-6
3-4;Среднее;3-18
5;Большое;14-34
6;Огромное;56-86
`.trim()

export const dungeonSizeTableData: TTableItem<{ type: string; size: [number, number] }>[] =
  parseTable(dungeonSizeTable).map((item) => ({
    ...item,
    data: {
      ...item.data,
      size: item.data.size.split("-").map((n) => parseInt(n)),
    },
  }))

const dungeonGoalTable = `
range;type
11-14;Храм
15-24;Цитадель
25-36;Жилое помещение
41-44;Тайное убежище
45-52;Шахта
53-55;Тюрьма
56-66;Гробница
`.trim()

export const dungeonGoalTableData = parseTable(dungeonGoalTable)

const dungeonCreatorsTable = `
range;type;reason
11-13;Никто, просто появилось;
14-15;Эльфы;Месть
16-24;Гномы;Алчность
25-26;Орки;Страх
31-32;Жрец;Вера
33-35;Члены культа;Подарок
36-42;Колдун;Одиночество
43-45;Воин;Памятник
46-56;Дворянин;Влияние
61-64;Главарь банды;Выживание
65-66;Демон;Страсть
`.trim()

export const dungeonCreatorsTableData: TTableItem<{ type: string; reason: string }>[] =
  parseTable(dungeonCreatorsTable)

const dungeonHistoryData = `
range;type
11-13;Подземелье опустело из-за болезни
14-16;Подземелье разрушилось в результате наводнения
21-22;Строители умерли от голода
23-24;Строители погибли в результате магических экспериментов
25-31;Ресурсы истощились, и строители покинули подземелье
32-33;Строителей уничтожил странный артефакт
34-42;Строители стали ходоками и до сих пор обитают здесь
43-45;Подземелье было потеряно в результате внутренней борьбы
46-53;В подземелье вторглись враги
54-56;В подземелье вторглись демоны
61-66;Строители всё еще живут здесь
`.trim()

export const dungeonHistoryTableData = parseTable(dungeonHistoryData)

const dungeonGateData = `
range;type
11-12;Под зданием
13-14;В форме распахнутой пасти
15-15;В засохшем дереве или под ним
16-24;Тяжелая каменная дверь
25-25;На краю утёса
26-26;В тёмном провале
31-32;Рядом с разрушающейся статуей основателя
33-34;Под водой
35-43;В пещере
44-45;Покрыт мхом
46-46;На дне оврага
51-51;В башне
52-53;В холме
54-56;Под мавзолеем
61-62;За костянной дверью
63-65;Это длинная лестница ведущая вниз
66-66;За тяжёлыми железными решётками, которые закрываются и преграждают героям путь к отступлению
`.trim()

export const dungeonGateTableData: TTableItem<{ type: string }>[] = parseTable(dungeonGateData)

const dungeonPopulationData = `
range;name
11-11;Колдуны (стр 184)
12-13;Бандиты (стр 184)
14-15;Работорговцы (стр 150)
16-21;Орки (стр 62)
22-23;Гоблины (стр 71)
24-25;Визгуны (стр 69)
26-31;Летучие мыши (стр 126)
32-32;Огромные пауки (стр 127)
33-33;Гномы (стр 57)
34-34;Людоящеры (стр 68)
35-35;Огры (стр 60)
36-41;Нежить (стр 110)
42-42;Приведение (стр 114)
43-44;Интексоиды (стр 100)
45-45;Удушающая лоза (стр 122)
46-46;Ночные варги (стр 112)
51-51;Глубинный червь (стр 86)
52-52;Гигантский спрут (стр 82)
53-53;Морской змей (стр 108)
54-54;Кровинка (стр 102)
55-55;Гидра (стр 84)
56-56;Мантикора (стр 104)
61-61;Дракозмей (стр 98)
62-62;Демон (стр 90)
63-63;Дракон (стр 96)
64-65;multi:2
66-66;multi:3
`.trim()

export const dungeonPopulationTableData = parseTable<{ name: string }>(dungeonPopulationData)

const dungeonWeirdData = `
range;name
11;Неестественная жара
12;Влажность
13;Бассейны с водой
14;Запах смерти
15;Грибы
16;Необычные цветы
21;Склизкие стены
22;Высохшая кровь
23;Фрески на стенах
24;Необычное эхо
25;Большие трещины
26;Статуя
31;Альковы
32;Алтарь
33;Мох
34;Звук падающих капель
35;Засохшее дерево
36;Пульсирующие звуки
41;Мумифицированный труп
42;Очаг
43;Глубокий провал
44;Колодец
45;Череп необычной формы
46;Мозаика
51;Окаменевшее существо
52;Пустой саркофаг
53;Пепел в форме человека
54;Змеи
55;Насекомые
56;Крысы
61;Летучие мыши
62;Паутина
63;Фрагменты скелета на полу
64;Предостережение, написанное кровью
65;Потерявшийся искатель приключений
66;multi:2
`.trim()

export const dungeonWeirdTableData = parseTable<{ name: string }>(dungeonWeirdData)

const roomTypeData = `
range;type
1-2;corridor
3-4;room
5-5;hall
6-6;stairway
`.trim()

export const roomTypeTableData = parseTable<{ type: string }>(roomTypeData)

const roomDoorData = `
range;num;state
1-2;1;wide open
3-3;2;not locked
4-4;3;blocked
5-5;4;locked
6-6;0;with a trap
`.trim()

export const roomDoorTableData = parseTable<{ num: number; state: string }>(roomDoorData).map(
  (item) => ({
    ...item,
    data: {
      ...item.data,
      num: parseInt(item.data.num as unknown as string),
    },
  })
)

const roomContentsData = `
range;type
1-3;empty
4-5;entity
6-6;trap
`.trim()

export const roomContentsTableData = parseTable<{ type: string }>(roomContentsData)

const roomTreasureData = `
range;type
1-1;sarcophagus
2-2;chest
3-4;simple find
5-6;valuable find
`.trim()

export const roomTreasureTableData = parseTable<{ type: string }>(roomTreasureData)
