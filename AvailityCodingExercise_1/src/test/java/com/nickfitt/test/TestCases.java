package com.nickfitt.test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

import com.nickfitt.main.ValidateLISPCode;

public class TestCases {
	ValidateLISPCode validate = new ValidateLISPCode();;
	String testString;

	@Test
	@DisplayName("Positive Test Case")
	public void testCase_1() {
		testString = "(setf x (+ (* 3 y) (/ z 7)))";
		assertTrue(validate.isNested(testString));
	}
	
	@Test
	@DisplayName("Negative Test Case")
	public void testCase_2() {
		testString = "(list 1 2) (quote foo))";
		assertFalse(validate.isNested(testString));
	}
}
