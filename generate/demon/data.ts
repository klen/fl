import { TTableItem } from "@/types"
import { parseTable } from "../utils"

const demonFormData = `
range;form;strength;agility;wits;empathy;armor;effect
11-24;Человекоподобный;4-9;3;3;3;1-6;
25-26;Минотавр;6-11;3;3;3;1-6;
31-32;Козёл;4-9;4;3;3;1-6;
33-34;Медведь;7-12;3;3;3;1-6;
35-36;Змея;5-10;4;3;3;1-6;
41-42;Нежить;4-9;3;3;3;1-6;
43-44;Паук;6-11;4;3;3;1-6;
45-46;Огромный ящер;4-9;4;3;3;1-6;
51-52;Волк;5-10;4;3;3;1-6;
53-54;Насекомое;3-8;3;3;3;1-6;
55-56;Полуволк;5-10;4;3;3;1-6;
61-62;Огромный краб;6-11;2;3;3;4-9;
63-63;Огромная жаба;6-11;2;3;3;1-6;
64-64;Огромный спрут;5-10;2;3;3;1-6;Бег на суше считается стандартным действием
65-65;Туман;4-9;3;3;3;0-0;Неуязвим для физического оружия
66-66;Тень;4-9;3;3;3;0-0;Неуязвим для физического оружия
`.trim()

export const demonForm = parseTable<{
  form: string
  strength: string
  agility: string
  wits: string
  empathy: string
  armor: string
  effect: string
}>(demonFormData).map((row) => ({
  ...row,
  data: {
    ...row.data,
    strength: row.data.strength.split("-").map((n) => parseInt(n, 10)) as [number, number],
    armor: row.data.armor.split("-").map((n) => parseInt(n, 10)) as [number, number],
  },
}))

const demonFeaturesData = `
range;name;desc;modifier
11-12;Каменная кожа;Класс защиты увеличен;armor:+6
13-14;Огромный;Телосложение увеличено;strength:2d6
15-16;Горящий;Неуязвим к огню
21-22;Ледяной;Класс защиты увеличен;armor:+2
23-24;Мумифицированный;Наведение страха d6+5
25-26;Слизь;Может проползать через очень маленькие щели
31-32;Неестественно красивый;Влияние +2
33-34;Покрытый язвами;Заразное прикосновение, заразность d6+5
35-36;Перья;Класс защиты увеличен;armor:+2
41-43;Крылья;Может летать, перемещение 3
44-45;Излучает свет;Наведение страха d6+5
46-46;Обвит стеблями;Класс защиты увеличен;armor:+3
51-53;Прозрачный;-3 к атакам против него
54-54;Усеян глазами;При определении инициативы вытяни две карты и выбери лучшую
55-55;Без глаз;При определении инициативы вытяни две карты и выбери худшую
56-66;multi:2
`.trim()

export const demonFeatures = parseTable<{ name: string; desc: string; modifier: string }>(
  demonFeaturesData
)

const demonWeaknessData = `
range;name;desc
11-13;Вода;Получает d3 пункта урона, если на него плеснуть водой
14-15;Огонь;Получает удвоенный урон от огня
16-21;Холод;Получает удвоенный урон от холода
22-24;Свет;Чувствителен к свету, поэтому пытается скрыться от него. Если это невозможно, получает d3 пункта урона от неяркого света (например, от факела) и d6 от яркого (например, от солнца) каждый раунд
25-31;Серебро;Получает удвоенный урон от оружия, сделанного из серебра
32-33;Золото;Получает удвоенный урон от оружия, сделанного из золота
34-35;Дети;Не выносит вида детей и должен стремиться отойти от них. Если это невозможно, получает d3 пункта урона каждый раунд
36-41;Эльфы;Не выносит вида эльфов и должен стремиться отойти от них. Если это невозможно, получает d3 пункта урона каждый раунд
42-43;Гномы;Не выносит вида гномов и должен стремиться отойти от них. Если это невозможно, получает d3 пункта урона каждый раунд
44-52;Священные символы;Не выносит вида священных символов и должен стремиться отойти от них. Если это невозможно, получает d3 пункта урона каждый раунд
53-56;Музыка;Не выносит звуков музыки и должен стремиться отойти от их источника. Если это невозможно, получает d3 пункта урона каждый раунд
61-63;Земля;Получает d3 пункта урона от соприкосновения с землёй
64-66;Дерево;Получает удвоенный урон от оружия, сделанного из дерева
`.trim()

export const demonWeakness = parseTable<{ name: string; desc: string }>(demonWeaknessData)

const daemonAttackData = `
range;name;dices;distance;damage
11-15;Когти;d6+4;Нулевая;урон|1|1|2|2|2|3
16-22;Зубы;d6+5;Нулевая;урон|1|1|2|2|2|3
23-25;Рог;d6+6;Нулевая;урон|2|2|2|2|3|3
26-32;Щупальца;d6+4;Ближняя;цель попадает в захват, урон|1|1|2|2|2|2
33-35;Огонь;d6+6;Ближняя;Телосложение жертвы снижается на 1 каждый раунд, пока кто‐то не потушит огонь, пройдя проверку проворства
36-41;Холод;d6+5;Ближняя;Жертва сразу же страдает от переохлаждения
42-45;Рев;—;Ближняя;Наведение страха: сила d3+6
46-51;Смертоносный взгляд;—;Ближняя;Наведение страха: сила d6+5
52-56;Тяжелое оружие;D6+5;Нулевая; |длинный меч|двуручный меч|тяжёлый боевой молот|моргенштерн|двуручный топор|трезубец
61-65;multi:3
66-66;multi:4
`.trim()

export const demonAttack = parseTable<{
  name: string
  dices: string
  distance: string
  damage: string
}>(daemonAttackData)

const demonSpecialData = `
range;name;desc
11-14;Неуязвимость к оружию;Демона можно поразить только безоружными атаками и заклинаниями
15-22;Неуязвимость к огню;Неуязвим к огню
23-25;Неуязвимость к холоду;Неуязвим к холоду
26-32;Быстрее молнии;При определении инициативы получает две карты и действует дважды
33-34;Неуязвимость к физическим атакам;Неуязвим к физическим атакам
35-36;Паразит;Коснувшись жертвы, демон может подчинить себе её разум. Правила такие же, как для заклинания КУКЛОВОД с мощностью 3
41-43;Регенерация;Демон восстанавливает d3 пункта телосложения каждый раунд
44-45;Парализующий;Коснувшись жертвы, демон парализует её ядом силой d6+5
46-51;Ядовитый;Коснувшись жертвы, демон отравляет её смертельным ядом силой d6+5
52-54;Оборотень;Может принимать облик любого существа. Копия неотличима от оригинала во всём, кроме одной небольшой детали (например, цвета глаз)
55-56;Нематериальный;Проходит сквозь твердые тела
61-62;Парящий в воздухе;Не касается земли. Может парить в воздухе на высоте до 10 метров
63-64;Телепортация;Один раз в два раунда мгновенно телепортируется в любую точку в пределах дальней дистанции
65-66;multi:2
`.trim()

export const demonSpecial: TTableItem<{ name: string; desc: string }>[] =
  parseTable(demonSpecialData)

export const demonName = `
Малгорат
Лилитар
Баалзебуб
Азмодан
Абаддон
Левиафан
Моргул
Белиал
Астарот
Дантеон
Нефариус
Шадрах
Мепхисто
Агарон
Алдрон
Лилуш
Заргон
Бафомет
Мерихем
Аммон
Аркадиус
Ксенгор
Дестрагон
Малисар
Агмар
Гримфир
Баалор
Саргатанас
Земгор
Вортан
Лоргар
Дагмар
Мольхар
Бахрун
Азрел
Гаргон
Дракул
Зевгар
Лордран
Аксарон
Некрофус
Илгор
Калгар
Фенрис
Моргарит
Бериас
Шадрим
Демогор
Архон
Велизар
`
  .trim()
  .split("\n")

export const demonAdj = `
 Адский
Лукавый
Мракобесный
Жуткий
Коварный
Беспощадный
Зловещий
Огненный
Темный
Могущественный
Агрессивный
Ненасытный
Неистовый
Лживый
Хитрый
Колдовской
Подлый
Потусторонний
Извращенный
Чернокнижный
Бездушный
Неумолимый
Величавый
Мерзкий
Каменно-ледяной
Вихревой
Вопиющий
Темпераментный
Скверный
Неуловимый
Сатанинский
Мучительный
Завораживающий
Нечеловеческий
Безумный
Мистический
Подземный
Властный
Космический
Сумрачный
Лютый
Необузданный
Иссушающий
Древний
Абиссальный
Веномозный
Теневой
Бесформенный
Загадочный
Деспотичный
`
  .trim()
  .split("\n")
