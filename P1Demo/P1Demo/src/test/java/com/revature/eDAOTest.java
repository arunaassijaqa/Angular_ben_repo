package com.revature;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.mockito.runners.MockitoJUnitRunner;

import com.revature.daos.EmployeeDAO;


@RunWith(MockitoJUnitRunner.class)
public class eDAOTest {

	EmployeeDAO eDAO = new EmployeeDAO(); //moved this out here (I will forget I did this when we learn Mockito)
	
	@Test
	public void testGetEmployees() {
		
		assertNotNull(eDAO.getEmployees());
		
	}
	
}