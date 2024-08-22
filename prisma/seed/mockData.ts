import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('afff9297-92c5-4883-8ced-fd542727a5da', '1Frances_Wisoky69@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('af02e27e-7a63-4d43-872e-27b3ff76ba6b', '8Rosario_Beier@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('90b3bad2-898e-4f6e-8606-3f03ac70e474', '15Janiya_Kovacek@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('d6975d1e-6989-40bd-a7e3-d6ffffb6d4f3', '29Bridgette_Willms@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('28aaaa77-e1a8-49df-aeaf-b3e4050035b2', '36Jaeden_Schneider60@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=38', 'inv12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('deaee588-6fe4-4c1e-bf87-63fbfa29e9f3', '43Eileen_McGlynn@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv78901', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f3409917-fe1f-4ccf-a988-1dae0d5bc7ed', '50Rosa54@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv44556', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('3839b446-460e-4ace-a393-a9d2f83be372', '57Woodrow_Mueller68@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('e1a43d62-875a-4d10-9b29-80b89645f6d2', '64Demetrius17@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('119f96b2-d29d-406e-9e5c-419130c3ccbe', 'Avid gamer and streamer.', 'Los Angeles CA', 'f3409917-fe1f-4ccf-a988-1dae0d5bc7ed');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('1842686b-4384-4ce1-b5fb-9297151a8d6c', 'Freelance graphic designer and digital artist.', 'Austin TX', 'e1a43d62-875a-4d10-9b29-80b89645f6d2');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('34b4d70c-794c-4853-bde9-57efddaf7dea', 'Avid gamer and streamer.', 'Austin TX', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('c31547b1-6da4-49d6-b072-7ab80a2d90b2', 'DIY crafts and handmade jewelry maker.', 'New York NY', 'afff9297-92c5-4883-8ced-fd542727a5da');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('72cbd289-215e-4d1a-ac2a-3bd65fa55039', 'Avid gamer and streamer.', 'Seattle WA', '3839b446-460e-4ace-a393-a9d2f83be372');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('13246cca-03c9-4b98-962f-0723caf83c07', 'Passionate collector of rare vinyl records.', 'Seattle WA', 'f3409917-fe1f-4ccf-a988-1dae0d5bc7ed');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('6fa0f6df-d569-4424-ad89-118e85e61f83', 'Passionate collector of rare vinyl records.', 'Seattle WA', 'e1a43d62-875a-4d10-9b29-80b89645f6d2');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('1dd9ea97-ebe3-49bf-9db8-3bf772d83b23', 'Passionate collector of rare vinyl records.', 'New York NY', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('dd954725-7833-4913-9fff-368517c5bcd9', 'Tech enthusiast and gadget reviewer.', 'Chicago IL', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Profile" ("id", "bio", "location", "userId") VALUES ('99fa2332-1377-4ae8-9d36-f7c900150178', 'DIY crafts and handmade jewelry maker.', 'Austin TX', '90b3bad2-898e-4f6e-8606-3f03ac70e474');

INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('e230b04d-2a9f-435c-91d8-17bcb8af0481', 'Professional Photography Templates', 'Highly detailed 3D model suitable for animation and games.', 'Digital Downloads', 'Barter  Trade', 813, 'Highend Gaming Laptop', '2024-09-03T19:44:21.534Z', 'afff9297-92c5-4883-8ced-fd542727a5da');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('5d597255-3aec-4c68-a06b-125ec74c52a8', '3D Model of a Futuristic Car', 'A short and memorable domain name perfect for a tech startup.', 'Digital Downloads', 'Barter  Trade', 276, 'Vintage Guitar', '2024-08-26T21:28:54.606Z', 'f3409917-fe1f-4ccf-a988-1dae0d5bc7ed');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('486cec8b-c11a-4a96-9673-4a4c67a6f86c', 'Premium Domain Name', 'Highquality templates for professional photographers.', 'Virtual Assets', 'For Sale', 37, '', '2025-08-20T11:29:16.640Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('60e8cddd-39d7-4dfc-b96a-18e5a63dc5e2', '3D Model of a Futuristic Car', 'A limited edition music album from a renowned artist.', 'Virtual Assets', 'For Sale', 628, '', '2025-07-03T07:19:43.241Z', 'd6975d1e-6989-40bd-a7e3-d6ffffb6d4f3');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('5d42f9a4-ddca-46b3-b16c-abedc9cd05bd', 'Professional Photography Templates', 'A short and memorable domain name perfect for a tech startup.', 'Digital Downloads', 'Barter  Trade', 641, '', '2024-09-19T00:08:14.465Z', 'f3409917-fe1f-4ccf-a988-1dae0d5bc7ed');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('541e3044-dfdb-497f-8910-8bdb2b5594f6', 'Professional Photography Templates', 'A rare collection of classic vinyl records from the 70s and 80s.', 'Virtual Assets', 'For Sale', 5, '', '2025-05-04T16:30:44.494Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('cb30420a-8df5-4740-a5ca-0222dde9bb96', 'Vintage Vinyl Record Collection', 'A short and memorable domain name perfect for a tech startup.', 'Digital Downloads', 'Barter  Trade', 660, '', '2025-05-29T21:03:18.064Z', '90b3bad2-898e-4f6e-8606-3f03ac70e474');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('118a8acd-7dad-4406-b9b0-9f30e40301ee', 'Exclusive Music Album', 'A limited edition music album from a renowned artist.', 'Virtual Assets', 'Barter  Trade', 793, '', '2025-07-05T07:04:42.228Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('a69a0ad3-122f-42a6-b2c9-54d6211361d4', 'Premium Domain Name', 'A short and memorable domain name perfect for a tech startup.', 'Digital Downloads', 'For Sale', 690, '', '2024-02-12T14:18:51.889Z', '28aaaa77-e1a8-49df-aeaf-b3e4050035b2');
INSERT INTO "Item" ("id", "title", "description", "category", "type", "price", "barterItem", "datePosted", "userId") VALUES ('d1757108-86ca-44bd-85f2-7f7c8bfe538a', 'Vintage Vinyl Record Collection', 'Highly detailed 3D model suitable for animation and games.', 'Digital Downloads', 'For Sale', 696, '', '2025-06-19T11:19:50.403Z', '28aaaa77-e1a8-49df-aeaf-b3e4050035b2');

INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('0cde12f6-bd2b-4d9d-8593-6f77fa87d596', 'https://i.imgur.com/YfJQV5z.png?id=181', 'd1757108-86ca-44bd-85f2-7f7c8bfe538a');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('27bd6cdb-ee61-41f4-aef3-592bdb7aa815', 'https://i.imgur.com/YfJQV5z.png?id=183', '5d597255-3aec-4c68-a06b-125ec74c52a8');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('2b0098c0-7586-4c22-9af5-21831ec42a7f', 'https://i.imgur.com/YfJQV5z.png?id=185', '60e8cddd-39d7-4dfc-b96a-18e5a63dc5e2');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('c58b8ff2-fb50-4196-9321-3d2d4561b49c', 'https://i.imgur.com/YfJQV5z.png?id=187', '486cec8b-c11a-4a96-9673-4a4c67a6f86c');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('6f599466-ad01-4ea8-809b-4782e32d470e', 'https://i.imgur.com/YfJQV5z.png?id=189', '5d42f9a4-ddca-46b3-b16c-abedc9cd05bd');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('0905157e-3f2b-41f4-b858-ef1f967f0f86', 'https://i.imgur.com/YfJQV5z.png?id=191', '541e3044-dfdb-497f-8910-8bdb2b5594f6');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('5439abd3-c6fc-4cb3-8578-9902160575f4', 'https://i.imgur.com/YfJQV5z.png?id=193', 'e230b04d-2a9f-435c-91d8-17bcb8af0481');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('f1654f80-e8d6-4f0d-a576-f59665aaf02f', 'https://i.imgur.com/YfJQV5z.png?id=195', '5d42f9a4-ddca-46b3-b16c-abedc9cd05bd');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('f9264de8-5586-488d-8a77-38d40b0bd3ca', 'https://i.imgur.com/YfJQV5z.png?id=197', '118a8acd-7dad-4406-b9b0-9f30e40301ee');
INSERT INTO "Image" ("id", "imageUrl", "itemId") VALUES ('40d601e9-76d6-465f-89a9-b8f22c9bdaf1', 'https://i.imgur.com/YfJQV5z.png?id=199', '5d42f9a4-ddca-46b3-b16c-abedc9cd05bd');

INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('6c10eeb3-ed48-4603-b401-be5fea268335', 16, 'Stripe', '2025-07-29T08:59:24.586Z', 'afff9297-92c5-4883-8ced-fd542727a5da', 'deaee588-6fe4-4c1e-bf87-63fbfa29e9f3', 'd1757108-86ca-44bd-85f2-7f7c8bfe538a');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('b135924c-2c1e-495e-8374-be1d75e479d6', 200, 'Stripe', '2024-12-22T05:08:41.017Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'afff9297-92c5-4883-8ced-fd542727a5da', 'e230b04d-2a9f-435c-91d8-17bcb8af0481');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('0dc651c4-24af-4d94-a360-25d4735e5ea0', 443, 'Credit Card', '2025-08-16T21:12:44.782Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3839b446-460e-4ace-a393-a9d2f83be372', 'cb30420a-8df5-4740-a5ca-0222dde9bb96');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('72ea684d-1f1e-42b9-aea1-304eb12d9d65', 924, 'Bank Transfer', '2024-12-30T15:38:03.302Z', '90b3bad2-898e-4f6e-8606-3f03ac70e474', 'af02e27e-7a63-4d43-872e-27b3ff76ba6b', 'a69a0ad3-122f-42a6-b2c9-54d6211361d4');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('510c34fe-0e72-4409-b3ed-8cf160c0ea22', 377, 'PayPal', '2025-06-01T19:08:52.365Z', 'd6975d1e-6989-40bd-a7e3-d6ffffb6d4f3', 'deaee588-6fe4-4c1e-bf87-63fbfa29e9f3', 'e230b04d-2a9f-435c-91d8-17bcb8af0481');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('9c0ead40-eb53-4352-889b-58f49dbaed36', 184, 'Bank Transfer', '2024-12-21T16:52:52.118Z', '3839b446-460e-4ace-a393-a9d2f83be372', 'afff9297-92c5-4883-8ced-fd542727a5da', 'd1757108-86ca-44bd-85f2-7f7c8bfe538a');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('db754cc7-10a8-470c-b0ec-f171072397e1', 533, 'Stripe', '2024-04-29T03:37:01.347Z', 'f3409917-fe1f-4ccf-a988-1dae0d5bc7ed', 'deaee588-6fe4-4c1e-bf87-63fbfa29e9f3', 'd1757108-86ca-44bd-85f2-7f7c8bfe538a');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('49d07d11-81e7-41cb-b431-8f8282979698', 569, 'Stripe', '2024-10-10T12:12:55.642Z', 'deaee588-6fe4-4c1e-bf87-63fbfa29e9f3', '28aaaa77-e1a8-49df-aeaf-b3e4050035b2', '541e3044-dfdb-497f-8910-8bdb2b5594f6');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('c31a251e-e079-402c-8620-c742197ddc8e', 238, 'PayPal', '2023-11-11T10:53:13.482Z', 'af02e27e-7a63-4d43-872e-27b3ff76ba6b', '90b3bad2-898e-4f6e-8606-3f03ac70e474', '60e8cddd-39d7-4dfc-b96a-18e5a63dc5e2');
INSERT INTO "Transaction" ("id", "amount", "paymentMethod", "dateCompleted", "buyerId", "sellerId", "itemId") VALUES ('bc88b2c2-5443-4f36-9894-1f37bca1aad1', 724, 'Debit Card', '2025-08-17T11:48:25.232Z', '3839b446-460e-4ace-a393-a9d2f83be372', '28aaaa77-e1a8-49df-aeaf-b3e4050035b2', '5d42f9a4-ddca-46b3-b16c-abedc9cd05bd');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
