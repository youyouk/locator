# Locator
A geographic bookmarking experiment using the HTML5 geolocation API, Node.js and PostgreSQL.

### Database Setup
    
    createdb loc_db;
    createuser loc_user;
    psql loc_db;
    alter user loc_user with encrypted password 'TODO_change'; 
    grant all privileges on database loc_db to loc_user;

Note that the app will create the database schema once sync() is called on the models.