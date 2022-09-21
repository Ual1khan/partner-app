import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";

import { colors } from "../../theme";

export function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [marked, setMarked] = useState({ selectedDate: { selected: true } });

  LocaleConfig.locales.ru = {
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthNamesShort: [
      "Янв.",
      "Фев.",
      "Мар.",
      "Апр.",
      "Май",
      "Июнь",
      "Июль.",
      "Авг.",
      "Сен.",
      "Окт.",
      "Ноя.",
      "Дек.",
    ],
    dayNames: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    dayNamesShort: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
    today: "Сегодня'сег.",
  };
  LocaleConfig.defaultLocale = "ru";

  const onDayPress = (e) => {
    setSelectedDate(e.dateString);
    let markedDate = Object.assign({});
    markedDate[e.dateString] = {
      selected: true,
      selectedColor: colors.primary,
    };
    setMarked(markedDate);
  };

  return (
    <>
      <Calendar
        firstDay={1}
        selected={selectedDate}
        pagingEnabled={true}
        scrollEnabled={false}
        horizontal={true}
        calendarHeight={130}
        style={{
          marginTop: 16,
        }}
        markedDates={marked}
        onDayPress={(day) => onDayPress(day)}
        theme={{
          backgroundColor: colors.secondary,
          calendarBackground: colors.secondary,
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.white,
          todayTextColor: colors.primary,
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: colors.primary,
          selectedDotColor: "#ffffff",
          arrowColor: colors.primary,
          disabledArrowColor: "#d9e1e8",
          monthTextColor: colors.primary,
          indicatorColor: colors.primary,
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "600",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 16,
        }}
      />
    </>
  );
}
