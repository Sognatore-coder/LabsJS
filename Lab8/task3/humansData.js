export async function getData() {
    const size = Math.floor(Math.random() * 15) + 5;
    const humans = [];

    const maleNames = ['Иван', 'Петр', 'Сергей', 'Дмитрий', 'Алексей', 'Михаил', 'Александр', 'Владимир'];
    const femaleNames = ['Анна', 'Мария', 'Елена', 'Ольга', 'Татьяна', 'Наталья', 'Ирина', 'Светлана'];

    const maleLastNames = ['Иванов', 'Петров', 'Смирнов', 'Кузнецов', 'Соколов', 'Попов', 'Васильев', 'Морозов'];
    const femaleLastNames = ['Иванова', 'Петрова', 'Смирнова', 'Кузнецова', 'Соколова', 'Попова', 'Васильева', 'Морозова'];

    const cities = ['Москва', 'СПБ', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород'];
    const streets = ['Ленина', 'Пушкина', 'Гагарина', 'Советская', 'Мира', 'Центральная'];

    for (let i = 0; i < size; i++) {
        // Случайно выбираем пол
        const gender = Math.random() < 0.5 ? 'male' : 'female';
        
        let firstName, lastName;
        if (gender === 'male') {
            firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
            lastName = maleLastNames[Math.floor(Math.random() * maleLastNames.length)];
        } else {
            firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
            lastName = femaleLastNames[Math.floor(Math.random() * femaleLastNames.length)];
        }
        
        const age = Math.floor(Math.random() * 80) + 5; // 5..85 лет
        const phone = `+7${Math.floor(9000000000 + Math.random() * 1000000000)}`;
        const city = cities[Math.floor(Math.random() * cities.length)];
        const street = streets[Math.floor(Math.random() * streets.length)];
        const address = `г. ${city}, ул. ${street}`;
        
        humans.push({ firstName, lastName, age, gender, phone, address });
    }
    
    return new Promise(resolve => setTimeout(() => resolve(humans), 500));
}