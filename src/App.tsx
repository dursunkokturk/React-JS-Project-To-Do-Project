// react Library Icindeki FC (Functional Component) Paketini Kullaniyoruz
import React, { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { todoType } from './apptypes';

import './App.css';
import TodoItem from './TodoItem';

// Arrow Function Yapisi Icinde FC Kullaniyoruz
const App: FC = () => {

    /* [] Isaretleri Icindeki 
       Ilk Parametre Input Icindeki Degerin Ilk Halini Belirtiyor 
       Ikinci Parametre Input Icine Girilecek Degerin Guncel Halini Belirtiyor */
    /* Input Elementi Icine Girilecek Olan Degeri 
       Input Elementi Icindeki Value Attribute u Icindeki Degisken Adi Uzerinden
       task Degiskeni Ile Aliyoruz */
    /* useState ten Sonra <> Isaretleri Icine Girilen Data Type
       Input Elementi Icine Girilecek Degerin Data Type ini Belirtiyor */
    /* Data Type Kismindan Sonra Baslangic Degeri Belirtilebilir */
    const [task, setTask] = useState<string>('');
    const [workDay, setWorkDay] = useState<number>(0);

    /* todoType Data Type i
       apptypes.ts Dosyasindan Aliniyor */
    const [todoList, setTodoList] = useState<todoType[]>([]);

    console.log(todoList);

    /* event Parametresinin Data Type i 
       ChangeEvent HTMLInputElement Olarak Belirtiyoruz */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        // name Attribute unda task Degeri Olan Element Icindeki Degeri Aliyoruz
        if (event.target.name === 'task') {

            // Element Icindeki Guncel Degeri useState Icine Gonderiyoruz
            setTask(event.target.value);
        } else {

            /* useState in Default Data Type i string dir  
               useState Icindeki Degerin number Data Type Olarak Donusumu Gerekiyor
               Element Icindeki Guncel Degeri useState Icine Gonderiyoruz */
            setWorkDay(Number(event.target.value));
        }
    };

    // Arrow Function Donus Tipini void Olarak Belirtiyoruz 
    const addNewTask = (): void => {

        /* task Attribute Uzerinden Input Elementi Icine Girilen Degeri Aliyoruz */
        /* workDay Attribute Uzerinden Input Elementi Icinde Secilen Degeri Aliyoruz */
        const newTask = { taskName: task, workDay: workDay };

        /* todoList Icinde Var Olan Tasklari Donduruyoruz */
        /* newTask Degiskeni Uzerinden Girilen Yeni task Bilgilerini Array Icine Ekliyoruz */
        setTodoList([...todoList, newTask]);

        /* Input Elementine Deger Girme Isleminden Sonra 
           Input Elementinin Icini Ve Secilen Rakami Sifirliyoruz */
        setTask('');
        setWorkDay(0);
    };

    /* Silme Islemi Icin
        Silinecek Todo Bilgisini Parametre Uzerinden Aliyoruz
        Parametrenin Data Type Bilgisini Giriyoruz
        Fonksiyonun Donus Tipini Belirtiyoruz */
    const deleteTask = (nameToDelete: string): void => {

        /* Todo Array Icinde Tarama Yapiyoruz
           Task Silme Isleminden Sonra Kalan Tasklari Listeliyoruz */
        setTodoList(
            todoList.filter((task) => {
                return task.taskName !== nameToDelete;
            })
        );
    };

    return (
        <div className="App">
            <div className="mainCard">
                <input className="mainCardInput"
                        type="text"
                        value={task}
                        name="task"
                        placeholder="Taskınızı giriniz..."
                        onChange={handleChange}
                />
                <input type="number"
                        className="mainCardInput"
                        value={workDay}
                        name="workDay"
                        placeholder="Kaç günde tamamlamamlısınız"
                        onChange={handleChange}
                />
                <button className="mainCardButton" onClick={addNewTask}>
                    Yeni Task Ekle
                </button>
            </div>
            <div className="todoCart">

                {/* todoList Icindeki task lari map Fonksiyonu Ile Tarama Yapiyoruz
                    todoType Degerlerini Ve 
                    todo index Numaralarini Aliyoruz */}
                {todoList.map((task: todoType, index: number) => {

                    /* todoList Array Icindeki 
                        Tum Degerleri Listeliyoruz */
                    /* Ekranda Task Bilgileri Gorundugunde 
                        Silme Islemi Icin Buton Gorunecek */
                    return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
                })}
            </div>
        </div>
    );
};

export default App;