create table products(
	id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    descP varchar(255) not null,
    brand varchar(255) not null,
    price float,
    primary key (id)
)