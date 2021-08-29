# Task App

## About

Backend of Task App to manage daily tasks

**Implemented Features:**
- Display list of tasks
- User can create new tasks
- User can delete tasks
- User can check tasks as completed
- No more than 100 tasks are allowed
- Special Characters are not allowed

**Not-implemented desired features:**
- User Auth

## [Live Demo](https://ssraf-task-app.herokuapp.com/)

## Built with
- React
- Typescript

## Backend

Project Link: [https://github.com/rafaelsanchezsouza/task-app-backend](https://github.com/rafaelsanchezsouza/task-app-backend)

### Endpoints
Task Listing

    GET /api/v1/tasks HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/task-app-backend
    
    Response 200
    {
        "items": [
            {
                "item": "lorem",
                "done": false,
                "id": "1"
            }
        ]
    }

Create Task

    POST /api/v1/tasks HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/task-app-backend
    
    Body
    {
        "item": "lorem",
        "done": false
    }

Update task to "done"

    PUT /api/v1/tasks/{id} HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/task-app-backend
    
    Body
    {
        "item": "lorem",
        "done": true
    }

Delete Task

    DELETE /api/v1/tasks/{id} HTTP/1.1
    Host: https://github.com/rafaelsanchezsouza/task-app-backend
    
    Response
    {
        "item": "lorem",
        "done": false,
        "id": 11,
    }

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Linkedin - [@ssraf](https://www.linkedin.com/in/ssraf/)

Project Link: [https://github.com/rafaelsanchezsouza/task-app](https://github.com/rafaelsanchezsouza/task-app)
