window.onload = function() {



    function displayTodos(){



        // INIT SEQUENCE
        // when page is loaded, display to HTML page the todos
        let todo_list
        if( JSON.parse( localStorage.getItem('todo')) == null){
            todo_list = []
        } else {
            todo_list = JSON.parse( localStorage.getItem('todo'))
        }

        // clear out the todos
        $('#todo-list').empty()


        // todo list is loaded here
        for( let i = 0; i < todo_list.length; i++){
            console.log(todo_list[i])
            let checkbox
            if(todo_list[i].checked) {
                checkbox = `<input type='checkbox' class='checkbox' id=${i + "-check"} checked>`
            } else {
                checkbox = `<input type='checkbox' class='checkbox' id=${i + "-check"}>`
            }

            let todo_item_html = $(
                `<div class='todo-item' id=${i}>
                    ${todo_list[i].text}
                    <span>
                        ${checkbox}
                        <button id='${i + "-delete"}'> Delete </button>
                    </span>
                 </div>
                `)




            $('#todo-list').append( todo_item_html )
            // add event listners for unique elements

            if(todo_list[i].checked) {
                todo_item_html.css("text-decoration", "line-through")
            }




            $(`#${i}-delete`).click( function(e) {
                todo_list.splice(i, 1)
                localStorage.setItem('todo', JSON.stringify(todo_list) )
                displayTodos()
            })

            $(`#${i}-check`).change( function(e) {
                let checked = $(this).is(':checked')
                todo_list[i].checked = checked
                localStorage.setItem('todo', JSON.stringify(todo_list) )
                displayTodos()
            })


        }
    }

    // call this to display the todos
    displayTodos()






    // listen on button press (capturing input from user )
    $('#create-todo-btn').on('click', function(e){

        var input = $('#todo-input').val()

        var obj = {
            text : input,
            checked : false
        }

        todo_list.push(obj)


        localStorage.setItem('todo', JSON.stringify(todo_list) )

        /*

        <div class="todo-item">
            TODO ITEM TEXT (ID=12345)
            <span>
                <input type="checkbox" class="checkbox" id="">
                <button id=""> Delete </button>
            </span>
        </div>

        */

        let todo_item_html = $(
            `<div class='todo-item'>
                ${input}
                <span>
                    <input type='checkbox' class='checkbox' id=${todo_list.length}>
                    <button id='${todo_list.length}'> Delete </button>
                </span>
             </div>
            `)

        $('#todo-list').append( todo_item_html )



    })

    // create todo object/html/thing
    // append this thing to some list (array)?
    // save to localStorage

    // display, or render to the DOM





}
