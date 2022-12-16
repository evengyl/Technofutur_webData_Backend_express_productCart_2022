insert into products (id, name, price, brand, descP) values
(1111, "12T Pro", 899, "Xiaomi", "Fait le café et le boudin blanc"),
(2222, "14", 1600, "Iphone", "Fait le café et le boudin blanc"),
(3333, "S22", 1200, "Samsung", "Fait le café et le boudin blanc"),
(4444, "X11", 950, "Oppo", "Fait le café et le boudin blanc")


insert into carts (name) values
("monSuperPanier1"),
("monSuperPanier2")


insert into productsCarts (cartId, productId, currentPrice, qty) values
(1, 1111, 899, 2),
(1, 3333, 1200, 1),
(2, 2222, 1600, 10),
(2, 4444, 950, 7)