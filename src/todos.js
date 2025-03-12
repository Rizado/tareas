const date1 = new Date(2025, 7, 1, 0, 0);

const todos = [
    {
        title: "Тестовая задача",
        desc: "добавлена по умолчанию для демонстрации работы приложения",
        image: "",
        done: false,
        createdAt: date1.toLocaleString(),
        key: date1.getTime()
    }
];

export default todos;
