import { Box, Container } from "@mui/material";
import TitleText from "@/component/Atoms/TitleText";
import Image from "next/image";
import { FC, useDebugValue } from "react";
import TutorialFooter from "@/component/Organisms/TutorialFooter";
// FullCalemndar
import FullCalendar from '@fullcalendar/react';
// FullCalendarで月表示を可能にするプラグイン。
import dayGridPlugin from '@fullcalendar/daygrid';
// FullCalendarで日付や時間が選択できるようになるプラグイン。
import interactionPlugin from "@fullcalendar/interaction";
//日本語対応のためのインポート
import jaLocale from "@fullcalendar/core/locales/ja";
import { start } from "repl";
import React, { useEffect } from 'react';
import { text } from "stream/consumers";




const eventExample = [
    // オブジェクトの中身はこんな感じ
    // satrtとendの日付で日を跨いだ予定を表示できる
    // 背景のカラーもこの中で指定できる
    // {
    //   title: "温泉旅行",
    //   start: new Date(),
    //   end: new Date(),
    //   description: "ほんk",
    //   backgroundColor: "green",
    //   borderColor: "green",

    //  },
    // {
    //   title: "期末テスト",
    //   start: new Date().setDate(new Date().getDate() + 5),
    //   description: "2年最後の期末テスト",
    //   backgroundColor: "blue",
    //   borderColor: "blue"
    // }
];

// カレンダー整形処理
// useEffect(
//   () => {
//       const lastRow = document.querySelector('.fc-scrollgrid-sync-table tr:last-child');
//   },
// []
// );

// TODO　
// previous ボタンの押した際のリロード



const today = new Date()
const day = new Date(today.getTime())
day.setDate(day.getDate() - 30)
const startDay = day.toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replaceAll('/', '-')
console.log(startDay)
const calendar: FC = () => {
    // カレンダーのいらないrow削除
    useEffect(() => {
        const firstRow = document.querySelector('.fc-scrollgrid-sync-table tr:first-child')
        const lastRow = document.querySelector('.fc-scrollgrid-sync-table tr:last-child');

        if (firstRow) {
            //firstRow.remove()
        }
        if (lastRow) {
            // 取得した<tr>要素(翌週1週間に該当する部分)を非表示にする
            lastRow.remove()
        }
    })
    return (
        <Container className="calendar_container">
            <FullCalendar
                customButtons={
                    {
                        button: {
                            text:'v',
                            click: function () {
                                const calendarView = document.querySelector('.fc-view-harness') as HTMLHtmlElement
                                if (calendarView){
                                    calendarView.style.display = 'none'
                                } 
                            }
                        }
                    }
                }
                buttonIcons={{
                    prev: 'chevron-left'
                }}
                headerToolbar={{
                    center: "title",
                    left: "prev",
                    right: "button",
                }}
                plugins={[dayGridPlugin]}
                validRange={{
                    start: "2024-04-12",
                    end: today
                }}
                initialDate={today}
                //events={eventExample}
                locale="ja"
                // 日を消す
                dayCellContent={function (arg) {
                    return arg.date.getDate();
                }}
            />

        </Container>

    );
};
export default calendar;