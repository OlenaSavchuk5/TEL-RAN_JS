 const todos = [
    {
        id: 1,
        title: 'поесть',
        dttm: 'строка с датой',
        done_flg: true
    },
    {
        id: 2,
        title: 'побегать',
        dttm: 'строка с датой', 
        done_flg: false
    }
 ];

 const add_todo = document.querySelector('.add_todo');

 add_todo.addEventListener('submit'), event => 
    event.preventDefault();
    const {title} = event.target;
    const new_todo = {
        id: Date.now(),
        title: title.value,
        dttm: new Date().toLocaleDateString()
    };

    console.push(new_todo)


    title.value = '';

    function rerender(){
        const todo_container = document.querySelector('todo_container');
        todo_container.innerTex = '';

        todos.forEach(todo => {
            const container = document.creaateElement('div');
            const title_p = document.createElement('p')
            const dttm_p = document.createElement('p')
            const info = document.createElement('div');
            const change_state = document.createElement('button');

            change_state.addEventListener('click', ()=>{
                console.log(todo.id);
                // найти из массива todos обект с указанним id и заменить у него значение done_flg на противоположный
                // const target = todos.find(item => item.id === todo.id);
                // target.done_flg = !target.done_flg;
            }
            )




            
            // const done_cnt = todos.reduce((prev, item)=> prev + (item.done_flg ? 1 : 0), 0);
    // const not_done_cnt =  todos.length - done_cnt;









            title_p.innerText = todo.title;
            dttm_p.innerText = todo.dttm;
            change_state.innnerTex = todo.done_flg? 'Сделано': 'Сделать';
            change_state.style.backgraundColor = todo.done_flg ? '#16a085':'#e74c3c'

        // если дело еще не сделано, то у кнопки должен быть красный задний фон
        // если дело сделано, то зеленый

            container.classList.add('item');

            info.append(title_p, dttm_p);
            container.append(info, change_state);

            todo_container.append(container);
            
        })
    }
        // данная функция должна очистить div с классом todo_container
    // пройтись циклом по todos и для каждого объекта добавить карточку со следующей структурой

    /*
    <div>
        <p>title</p>
        <p>dttm</p>
    </div> 
    */

    // каждую карточку добавить в div с классом todo_container
 //написать процес, который при отправке формы выводит ее содержимое в console.log