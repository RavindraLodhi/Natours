 create table test1(
 ID int identity(1,1),
 value varchar(20) NOT NULL
 )
  create table test2(
 ID int identity(1,1),
 value varchar(20) NOT NULL
 )

 insert into test1 values('Z')

 select * from test1;
 select * from test2;

 select SCOPE_IDENTITY();
 select @@IDENTITY;


 CREATE TRIGGER trForInsert ON TEST1 FOR INSERT
 AS 
 BEGIN 
  inSert into test2 values('YYY');
 End