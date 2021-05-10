SELECT * FROM [dbo].[Department];
SELECT * FROM [dbo].[Employee];

/*INNER JOIN OR JOIN*/
SELECT Name, CITY,Gender,SALARY,[Department_Name] FROM Employee 
INNER JOIN [dbo].[Department] 
ON [dbo].[Employee].DepartmentId = [dbo].[Department].id;

/*LEFT JOIN OR LEFT OUTER JOIN*/
SELECT Name, CITY,Gender,SALARY,[Department_Name] FROM Employee 
LEFT JOIN [dbo].[Department] 
ON [dbo].[Employee].DepartmentId = [dbo].[Department].id;

/*RIGHT JOIN OR RIGHT OUTER JOIN*/
SELECT Name, CITY,Gender,SALARY,[Department_Name] FROM Employee 
RIGHT JOIN [dbo].[Department] 
ON [dbo].[Employee].DepartmentId = [dbo].[Department].id 
;

/*FULL JOIN OR FULL OUTER JOIN*/
SELECT Name, CITY,Gender,SALARY,[Department_Name] FROM Employee 
FULL JOIN [dbo].[Department] 
ON [dbo].[Employee].DepartmentId = [dbo].[Department].id 
;

/*CROSS JOIN OR FULL OUTER JOIN*/
SELECT Name, CITY,Gender,SALARY,[Department_Name] FROM Employee 
CROSS JOIN [dbo].[Department] 
;

