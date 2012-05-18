### Database Setup
- createdb loc_db;
- createuser loc_user;
- psql loc_db;
- alter user loc_user with encrypted password 'TODO_change'; 
- grant all privileges on database loc_db to loc_user;
