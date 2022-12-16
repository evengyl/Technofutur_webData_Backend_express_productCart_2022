create table productsCarts(
    id int not null AUTO_INCREMENT,
    cartId int not null,
    productId int not null,
    currentPrice float not null,
    qty int not null,
    primary key (id)
)