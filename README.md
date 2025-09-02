# overview

## This is a demo Angular 19 application that implements a smart student timetable with:

- Standalone components 

- lazy loading

- Facade & Strategy patterns for clean architecture

- Custom HTTP interceptor (adds encrypted sessionID header with btoa())

- Mock backend using server.js + db.json

## features:

- List all students on the homepage

- Search by ID (valid → navigates to timetable, invalid → shows error)

- Timetable view highlights current and next classes

- Interceptor automatically adds encrypted session headers

## This project uses mock backend:

db.json → acts as the data source

server.js (Node js) → small HTTP server that supports GET + POST as db.json not support POST


# Development server

To start a local development server, run:

```bash
ng serve
```

also, run:

```bash
node server.js
```


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
