import React from 'react';
import { todoType } from './apptypes';

/* PropsType Olarak Belirtilen Data Type in
   Icindeki task ve DeleteTask Degerlerinin Icerigini Giriyoruz */
type PropsType = {
    task: todoType;
    deleteTask(nameToDelete: string): void;
};

/* Task larin Data Type ini
   PropsType Olarak Belirtiyoruz */
function TodoItem({ task, deleteTask }: PropsType) {
    return (
        <div className="card">
            <div>

                {/* Input Elementi Icinde Girilen Task Bilgisini Ekrana Yazdiriyoruz */}
                <p>{task.taskName}</p>

                {/* Input Elementi Icinde Girilen Work Day Bilgisini Ekrana Yazdiriyoruz */}
                <p>{task.workDay}</p>

                {/* Sil Butonu Task Eklendikce Her Taskin Yaninda Gorunecek  */}
                <button onClick={() => deleteTask(task.taskName)}>Sil</button>
            </div>
        </div>
    );
}

export default TodoItem;