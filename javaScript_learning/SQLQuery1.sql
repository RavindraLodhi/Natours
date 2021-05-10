create database semple2;
alter database sample3 modify Name = sample;

 create table tbgender1(
 ID int NOT NULL PRIMARY KEY,
 Gender varchar(50) NOT NULL
 );

 insert into tbgender values (3,'shemale');

 create table person(
 ID int NOT NULL PRIMARY KEY,
 Name varchar(50) NOT NULL,
 Email varchar(50) NOT NULL,
 GenderID int--fk
 )

 insert into tblPerson values (5,'ramii','ramii123@gamil.com',3);

 use [sample]
 go



 EXEC sp_rename 'person', 'tblPerson';

 alter table tblPerson add constraint tblperson_fk
 FOREIGN KEY (GenderID) REFERENCES tbgender(ID);

 commit;


 select * from tblperson where name like '%am%' order by name desc ;
 select * from tblPerson where name LIKE '[B]%';
 select * from tblPerson where name LIKE '[^B]%';
 SELECT * FROM tblPerson ORDER BY name;
 SELECT * FROM tblPerson ORDER BY name DESC;
 SELECT * FROM tblPerson ORDER BY name DESC, age ASC;
 SELECT TOP 2 [name],[age] from tblPerson;
 SELECT TOP 2  * from tblPerson;
 SELECT TOP 25 PERCENT * FROM tblPerson;
 SELECT TOP 2 * FROM tblPerson ORDER BY AGE DESC; 



 DELETE FROM tblPerson WHERE [NAME]='SAPNE';
 insert into tblPerson (id,name,email) values(3,'ram','ram@gamil.com')

ALTER TABLE tblPerson ADD CONSTRAINT DF_tblPerson_GenderID 
DEFAULT 3 FOR GenderID;
DELETE FROM tbgender WHERE ID =2;


INSERT INTO tbgender(ID,Gender) VALUES(2,'female')

ALTER TABLE tblPerson ADD age int ;

ALTER TABLE tblPerson ADD SALARY DECIMAL (12,4)

UPDATE  tblPerson SET AGE=25 WHERE AGE IS NULL;
 
 insert into tblPerson(id,name,email,GenderID,age) values(5,'sapne','sapna@gmail.com',3,'30')

 delete from tblPerson where age IS NULL;


 ALTER TABLE tblPerson
 ADD CONSTRAINT CK_tblPerson CHECK (AGE>0 AND AGE<150);

 ALTER TABLE tblPerson
 DROP CONSTRAINT CK_tblPerson;

 CREATE TABLE PARSON_IDENTITY_TABLE1(
 personID INT NOT NULL PRIMARY KEY IDENTITY(1,1),
 [Name]  varchar(150) 
 )
 SELECT * FROM PARSON_IDENTITY_TABLE;
 INSERT INTO PARSON_IDENTITY_TABLE VALUES('SAPNA');


 SET  IDENTITY_INSERT PARSON_IDENTITY_TABLE OFF;

 DELETE FROM PARSON_IDENTITY_TABLE WHERE personID = 1;

 DELETE FROM [dbo].[tblPerson];
 DBCC CHECKIDENT(PARSON_IDENTITY_TABLE,RESEED,0);

 ALTER TABLE tblPerson 
 ADD CONSTRAINT UK_tblPerson_EMAIL UNIQUE (EMAIL);

 UPDATE tblPerson SET CITY = 'Indore'  WHERE ID =4;

 select * from tbgender;
 select * from tblPerson;
 SELECT * FROM [dbo].[Employee];
 SELECT * FROM [dbo].[Department];
 /*GROUPINH*/	
SELECT SUM(SALARY) FROM tblPerson;
SELECT MIN(SALARY) FROM tblPerson;
SELECT MAX(SALARY) FROM tblPerson;

SELECT city, SUM(SALARY)
AS TotalSalary
from tblPerson
GROUP By city; 

SELECT COUNT(*) FROM [dbo].[Employee];

  INSERT INTO [dbo].[Employee](Name,City,Gender,SALARY) VALUES('SANMAN','CHANDERI','MALE',8000)

  ALTER TABLE [dbo].[Employee] ADD Salary DECIMAL (12,4);
  UPDATE Employee SET CITY='CHANDERI' WHERE  ID =7;

  SELECT CITY,GENDER ,SUM(SALARY)
  AS [Total salary],  COUNT(ID) AS Totalemployee FROM [dbo].[Employee]
  WHERE GENDER ='FEMALE'
  GROUP BY CITY,GENDER ORDER BY CITY;	


UPDATE [dbo].[Employee] SET [DepartmentId] = 3 WHERE  ID=5;

CREATE TABLE Department(
id INT NOT NULL PRIMARY KEY,
Department_Name varchar(155) NOT NULL,
[Location] varchar(155),
Department_Head varchar(50)
)

INSERT INTO [dbo].[Department]([id],[Department_Name],[Location],[Department_Head]) VALUES(4,'OTHER DEPARTMENT','INDORE','NIHAL');

/*ADD FOREIGN KEY WITH ALTER TABLE*/
ALTER TABLE [dbo].[Employee] 
ADD CONSTRAINT FK_Employee_DepartmentId FOREIGN KEY(DepartmentId) REFERENCES [dbo].[Department](ID);