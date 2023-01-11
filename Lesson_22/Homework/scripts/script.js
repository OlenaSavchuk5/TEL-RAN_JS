// ДЗ. Написать функцию, которая принимает имя и фамилию пользователя и возвращает 
// true, если пользователь с таким именем делал заказ
// false, если пользователь с таким именем ничего не заказывал

const checkOrderByName = (name, surname) => {
    const currentCustomerId = customers.find(({ firstName, lastName }) => 
      firstName === name && lastName === surname).id;
    //   Если хоть один элемент удовлетворяет условию, заданному в коллбеке, то true, иначе false.
    return orders.some(({ customerId }) => customerId === currentCustomerId);
  };
  
  console.log(checkOrderByName("Sam", "Tyler"));
  console.log(checkOrderByName("Jack", "Rocky"));
  
  
  // ДЗ. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь
  // Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов, 
  // которые заказал этот пользователь. У одного пользователя может быть несколько заказов.
  // Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов. 
  
  const productsArray = (name, surname) => {
    const userId = customers.find(
      ({ firstName, lastName }) => firstName === name && lastName === surname
    ).id;
    const ordersId = orders.filter(({ customerId }) => customerId === userId);
    return ordersId.map(({ products }) => products).flat();
  };
  // [["hello"], ["world"]].flat() -> ["hello", "world"]
  console.log(productsArray("Ivan", "Alekseev"));
  
  
  // ДЗ. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали.
  
  let notOrderedUsers = (customers, orders) => {
      return customers.filter(customer => (
        // Без ! ищем делал ли он заказ(если id одинаковые), если делал - true, т.е добавляем в новый массив.
        // С ! делаем наоборот, если делал - true, т.е не добавляем
        !orders.find(order => order.id === customer.id)
      ))
  }
  
  console.log(notOrderedUsers(customers,orders))
