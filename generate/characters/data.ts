import { parseTable } from "../utils"

const characterRaceData = `
range;type;desc
11-22;human1;Человек из Ольховых земель
23-31;human2;Человек из Аслена
32-34;human3;Человек-скиталец
35-41;half-elf;Полуэльф
42-44;halfling;Полурослик
45-52;goblin;Гоблин
53-56;orc;Орк
61-62;wolfkin;Полуволк
63-64;dwarf;Гном
65-66;elf;Эльф
`.trim()

export const characterRace = parseTable(characterRaceData)

const characterBirthplaceData = `
range;human1;human2;human3;half-elf;halfling;goblin;orc;wolfkin;dwarf;elf
1-1;Опушка Аринского леса;Поля Маргельды;Поля Маргельды;Поля Маргельды;Луга Белифара;Сумрак Клыколесья;Дебри Рощи Гемы;Сумрак Клыколесья;Горы возле Мольдены;Чаща Влажнолесья
2-2;Равнина Мольдена;Поля Маргельды;Берега залива Гнева;Равнина Мольдена;Луга Белифара;Сумрак Клыколесья;Дебри Рощи Гемы;Сумрак Клыколесья;Скалы Дальнего Вивенда;Чаща Влажнолесья
3-3;Равнина Мольдена;Степи Затопья;Равнина Мольдена;Пастбища Вивенда;Луга Белифара;Сумрак Клыколесья;Чаща Аринского леса;Дебри Рощи Гемы;Скалы Дальнего Вивенда;Опушка Влажнолесья
4-4;Берега озера Скарны;Степи Затопья;Равнина Мольдена;Опушка Влажнолесья;Лега Белифара;Перелески Пелены;Чаща Аринского леса;Дебри Рощи Гемы;Вершины северного Файленмарка;Жилища Вивенда
5-5;Поля Маргельды;Равнина Мольдена;Пастбища Вивенда;Опушка Арикского леса;Поля Маргельды;Перелески Пелены;Чаща Аринского леса;Чаща Аринского леса;Вершины северного Файленмарка;Жилища Дальнего Вивенда
6-6;Выжженая равнина Харга;Глушь Пелены;Берега озера Скарны;Выжженая равнина Харга;Равнина Мольдена;Дебри Рощи Гемы;Выжженая равнина Харга;Перелески Пелены;Северные горы Бельдеранда;Остров Девы
`.trim()

export const characterBirthplace = parseTable(characterBirthplaceData)

const characterProfessionData = `
range;name
11-14;Minstrel
15-24;Fighter
25-32;Rogue
33-36;Rider
41-44;Druid
45-53;Sorcerer
54-62;Hunter
63-66;Peddler 
`.trim()

export const characterProfession = parseTable(characterProfessionData)

const characterTalentData = `
range;Minstrel;Fighter;Rogue;Rider;Druid;Hunter;Peddler
1-2;warcry;the blade;the face;the companion;healing;the arrow;gold
3-4;the hymn;the enemy;the killer;the knight;shifting shapes;the beast;lies
5-6;the song;the shield;poison;the plains;sight;the forest;many things
`.trim()

export const characterTalent = parseTable(characterTalentData)

const characterTalentSorcererData = `
range;name
1-2;blood
3-4;death
5-6;signs
7-8;stone
`.trim()

export const characterTalentSorcerer = parseTable(characterTalentSorcererData)
