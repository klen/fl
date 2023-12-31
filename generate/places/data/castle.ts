import { TTableItem } from "@/types"
import { parseInt } from "lodash"
import { parseTable } from "../../utils"

const castleTypesData = `
range;type;size;pop
11-14;outpost;small;5-10
15-23;blockhouse;small;10-20
24-31;tower;small;5-20
32-41;fort;middle;15-40
42-52;keep;middle;25-100
53-62;fortress;large;50-200
63-66;palace;large;50-300
`.trim()

export const castleTypesTable = parseTable<{ type: string; pop: string; size: string }>(
  castleTypesData
)

const castleNamesData = `
range;name;adj1;adj2;sex
11;Крюк;Каменный;Каменная;0
12;Зуб;Красный;Красная;0
13;Шпиль;Пурпурный;Пурпурная;0
14;Дом;Кровавый;Кровавая;0
15;Коготь;Мертвый;Мертвая;0
16;Пасть;Зимний;Зимняя;1
21;Вода;Дубовый;Дубовая;1
22;Оплот;Синий;Синяя;0
23;Курган;Снежный;Снежная;0
24;Холм;Ветренный;Ветренная;0
25;Гора;Штормовой;Штормовая;1
26;Башня;Пламенный;Пламенная;1
31;Дом;Ржавый;Ржавая;0
32;Край;Грифоний;Грифонья;0
33;Приют;Тёмный;Тёмная;0
34;Утёс;Тусклый;Тусклая;0
35;Пик;Деревянный;Деревянная;0
36;Взор;Бесплодный;Бесплодная;0
41;Дыра;Глубокий;Глубокая;1
42;Пропасть;Ольховый;Ольховая;1
43;Щит;Дождливый;Дождливая;0
44;Предел;Орлиный;Орлиная;0
45;Марка;Волчий;Волчья;1
46;Роща;Медвежий;Медвежья;1
51;Поляна;Драконий;Драконья;1
52;Замок;Морозный;Морозная;0
53;Крепость;Ночной;Ночная;1
54;Форт;Розовый;Розовая;0
55;Твердыня;Клыкастый;Клыкастая;1
56;Берлога;Речной;Речная;1
61;Камень;Морской;Морская;0
62;Нора;Ледяной;Ледяная;1
63;Стена;Солнечный;Солнечная;1
64;Вал;Лунный;Лунная;0
65;Земля;Волчий;Волчья;1
66;Холод;Сумеречный;Сумеречная;0
`.trim()

export const castleNamesTable = parseTable<{
  name: string
  adj1: string
  adj2: string
  sex: string
}>(castleNamesData).map((item) => ({
  ...item,
  data: {
    ...item.data,
    sex: parseInt(item.data.sex),
  },
}))

const castleAgeData = `
range;type;age
11-12;до Сдвига;1100-3000
13-26;до кровавого тумана;300-1100
31-43;во время Ольховых войн;305-360
44-61;во время кровавого тумана;5-280
62-66;после кровавого тумана;1-6
`.trim()

export const castleAgeTable = parseTable<{ type: string; age: string }>(castleAgeData).map(
  (item) => ({
    ...item,
    data: {
      ...item.data,
      age: item.data?.age?.split("-").map((v) => parseInt(v)) as [number, number],
    },
  })
)

const castleGoalData = `
range;type;desc
11-15;Жилище;Замок был построен, чтобы в нём жить
16-23;Торговля;Замок был возведён, чтобы создать безопасное место для торговли или чтобы охранять важный торговый путь
24-31;Охрана ресурсов;Замок был построен, чтобы охранять важные ресурсы (шахту, реку или что‐то ещё)
32-34;Тюрьма;Замок был построен как тюрьма для кого‐то — или чего‐то. Его размер и укрепления помогут понять, кого же держали взаперти
35-43;Демонстрация силы;Замок был возведён для того, чтобы показать силу и могущество владельца
44-44;Приют;Замок был построен, чтобы дать приют тем, кто нуждался в нём
45-66;Война;Строение было построено из‐за войны или конфликта
`.trim()

export const castleGoalTable = parseTable(castleGoalData)

const castleCreatorData = `
range;type;feature
11-12;Эльфы;Кровожадность
13-16;Гномы;Мстительность
21-22;Торговец;Алчность
23-24;Охотник за сокровищами;Скупость
25-26;Жрец;Тщеславие
31-32;Колдун;Мудрость
33-36;Главарь банды;Красота
41-45;Воин;Слава
46-66;Дворянин;Жестокость
`.trim()

export const castleCreatorTable: TTableItem<{ type: string; feature: string }>[] =
  parseTable(castleCreatorData)

export const castleStateData = `
range;type
1-2;Превращенный в руины
3-3;Полуразрушенный
4-5;Потрёпанный
6-6;Хорошо сохранившийся
`.trim()

export const castleStateTable: TTableItem<{ type: string }>[] = parseTable(castleStateData)

const castleWeirdData = `
range;type
11-12; выглядит очень необычно из-за странной архитектуры
13-14; окрашен в цвет крови
15-16;. Над ним кружит стая воронов
21-22; выдолблен в огромной скале
23-24; покрыт странными надписями
25-26; окружен могилами
31-32; стоит на поле битвы
33-34; населен приведениями
35-36; плохо пахнет
41-42;. Здесь раздаются cтранные звуки
43-44; покрыт пурпурными цветами
45-46;. Здесь всегда идёт дождь
51-52; возведён вокруг древней статуи
53-54; продувается всеми ветрами
55-56; стоит среди грибных полей
61-62; чёрный от сажи
63-64; украшен черепами
65-66; зарос зеленью
`.trim()

export const castleWeirdTable = parseTable(castleWeirdData)

const castleHistoryTable = `
range;type
11-14;Уничтожен огнём.
15-23;Пострадал от долгой осады.
24-32;Пострадал от чумы.
33-36;Его обитатели умерли от голода.
41-44;Был заброшен и оставлен на произвол судьбы.
45-52;Пал во время кровопролитного восстания.
53-56;Завоеван врагами.
61-62;Здесь произошёл несчастный случай.
63-65;Разорён долгой войной.
66-66;Захвачен демонами.
`.trim()

export const castleHistoryTableData = parseTable(castleHistoryTable)

const castlePopData = `
range;type
1-1;
2-4;Да, на смену прежним хозяевам пришли другие обитатели
5-6;Потомки создателя замка
`.trim()

export const castlePopTable: TTableItem<{ type: string }>[] = parseTable(castlePopData)

const castlePopulationData2 = `
range;type;small;middle;large
11-14;Бандиты (стр 181);1-6;2-12;4-24
15-16;Торговцы (стр 181);1-6;2-12;4-24
21-23;Ржавые братья (стр 33);1-6;2-12;3-18
24-25;Солдаты (стр 184);1-6;2-12;4-24
26-32;Всадники (стр 183);1-6;2-12;4-24
33-36;Орки (стр 62);1-6;2-12;4-24
41-43;Гоблины (стр 71);1-6;3-18;5-30
44-45;Визгуны (стр 69);4-24;6-36;8-48
46-51;Огры (стр 60);1-6;2-12;2-12
52-52;Гномы (стр 57);1-6;2-12;4-24
53-53;Полурослики (стр 70);1-6;2-12;4-24
54-54;Полуволки (стр 67);1-6;2-12;4-24
55-55;Эльфы (стр 52);1-6;2-12;4-24
56-56;Колдуны (стр 181);1-1;1-6;2-12
61-61;Воры (стр 183);1-6;1-6;1-6
62-66;Чудовище;1-23;1-23;1-23
`.trim()

export const castlePopulationTable2: TTableItem<{
  type: string
  small: [number, number]
  middle: [number, number]
  large: [number, number]
}>[] = parseTable(castlePopulationData2).map((item) => ({
  ...item,
  data: {
    ...item.data,
    small: item.data.small.split("-").map((v) => parseInt(v)),
    middle: item.data.middle.split("-").map((v) => parseInt(v)),
    large: item.data.large.split("-").map((v) => parseInt(v)),
  },
}))

const castleEmptyData = `
range;type;mod
11-16;Теперь здесь живёт колония хищных летучих мышей (стр 126);0-0
21-26;Теперь здесь обитает гуль (стр 110);0-0
31-36;В темноте ждут скелеты (стр 110);4-24
41-51;В замке поселилось огромное чудовище - и скоро оно вернётся домой;1-6
52-65;Нет, но это место проклято. Возьми 6 основных кубиков и пройди проверку наведения страха против каждого из искателей приключений. Атака повторяется раз в четверть часа;0-0
66-66;Замок пуст. Пока что...;0-0
`.trim()

export const castleEmptyTable: TTableItem<{ type: string; mod: [number, number] }>[] = parseTable(
  castleEmptyData
).map((item) => ({
  ...item,
  data: {
    ...item.data,
    mod: item.data.mod.split("-").map((v) => parseInt(v)),
  },
}))
