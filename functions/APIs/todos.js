exports.getAllTodos = (request, response) => {
    todos = [
        {
            'id': '1',
            'title': 'greeting',
            'body': 'Hello world from Sean' 
        },
        {
            'id': '2',
            'title': 'greeting2',
            'body': 'Hello2 world2 from Sean' 
        }
    ]
    return response.json(todos);
}